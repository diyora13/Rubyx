const axios = require('axios');
const qs = require('querystring');
const { CookieJar } = require('tough-cookie');
const { wrapper } = require('axios-cookiejar-support');

module.exports = async function (context, req) {
    const seat = req.query.seat || (req.body && req.body.seat);
    const classType = req.query.class || (req.body && req.body.class);
    const debug = req.query.debug === '1';

    if (!seat || !classType) {
        context.res = {
            status: 400,
            body: "Please pass a seat number and class (SSC/HSC) on the query string or in the request body"
        };
        return;
    }

    const initChar = seat.charAt(0).toUpperCase();
    const seatNo = seat.substring(1);

    // HSC-specific entry page; /Result/ currently routes to SSC and gives a token that ResultView rejects
    const indexUrl = 'https://gseb.org/Result/Index';
    const postUrl = 'https://gseb.org/Result/ResultView';

    try {
        const jar = new CookieJar();
        const client = wrapper(axios.create({
            jar,
            withCredentials: true,
            timeout: 30000,
            maxRedirects: 5
        }));

        // 1. GET index page — cookies auto-captured into jar
        const indexResponse = await client.get(indexUrl);
        const html = indexResponse.data;

        // 2. Solve "Total of N + M = ?" captcha (regex against raw HTML)
        const captchaMatch = html.match(/Total of\s+(\d+)\s*(?:&#x2B;|\+)\s*(\d+)\s*=/);
        if (!captchaMatch) throw new Error("Captcha challenge missing");
        const captchaAnswer = (parseInt(captchaMatch[1], 10) + parseInt(captchaMatch[2], 10)).toString();

        // 3. Extract hdnCaptchaAns (HTML-decoded)
        const hdnMatch = html.match(/id="hdnCaptchaAns"\s+value="([^"]+)"/);
        if (!hdnMatch) throw new Error("Captcha hash missing");
        const hdnCaptcha = htmlDecode(hdnMatch[1]);

        // 4. Extract anti-forgery token
        const tokenMatch = html.match(/name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"/);
        if (!tokenMatch) throw new Error("Token missing");
        const token = tokenMatch[1];

        // 5. POST result lookup — same session, only Referer header
        const payload = qs.stringify({
            'InitialCharacter': initChar,
            'SeatNo': seatNo,
            '__Invariant': 'SeatNo',
            'Captcha': captchaAnswer,
            'hdnCaptcha': hdnCaptcha,
            '__RequestVerificationToken': token,
            'go': '  Go  '
        });

        const postResponse = await client.post(postUrl, payload, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': indexUrl
            }
        });

        if (debug) {
            const cookies = await jar.getCookies(indexUrl);
            const formMatch = html.match(/<form[\s\S]*?<\/form>/i);
            const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
            const postBody = String(postResponse.data);
            const postFormMatch = postBody.match(/<form[\s\S]*?<\/form>/i);
            context.res = {
                headers: { 'Content-Type': 'application/json' },
                body: {
                    cookiesAfterGet: cookies.map(c => ({ key: c.key, value: c.value, domain: c.domain, path: c.path })),
                    extracted: { captchaAnswer, hdnCaptcha, tokenLen: token.length, tokenPreview: token.slice(0, 16) + '...' },
                    indexTitle: titleMatch ? titleMatch[1] : null,
                    indexFormHtml: formMatch ? formMatch[0].slice(0, 4000) : '(no <form> found)',
                    payloadSent: payload,
                    postStatus: postResponse.status,
                    postFinalUrl: postResponse.request?.res?.responseUrl || postResponse.config?.url,
                    postFormHtml: postFormMatch ? postFormMatch[0].slice(0, 2000) : '(no <form> in post response)',
                    postBodySnippet: postBody.slice(0, 2500)
                }
            };
            return;
        }

        context.res = {
            body: postResponse.data
        };

    } catch (err) {
        context.res = {
            status: 500,
            body: "Proxy Error: " + err.message
        };
    }
};

function htmlDecode(s) {
    return String(s)
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}
