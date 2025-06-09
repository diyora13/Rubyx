document.getElementById('enroll-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = document.getElementById('enroll-form');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    form.innerHTML = "<h3 style='color:#2575fc;'>Your response is submitting, please wait...</h3>";

    fetch("https://script.google.com/macros/s/AKfycbzeqae9A-UyIvcCMOxXrqm6qLEofWod47gYhiSqu4xqQUuiBjmMQDVSAHCzJDgp5qza/exec", { // Replace with your actual URL
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email })
    })
    .then(() => {
        form.innerHTML = "<h3 style='color:green;'>Thank you! Your details are submitted. We will contact you soon.</h3>";
    })
    .catch(error => {
        console.error("Error:", error);
        form.innerHTML = `
            <h3 style='color:red;'>Submission failed. Please try again or visit us directly.</h3>
            <a href="#contact" id="visit-btn" class="visit-btn">Visit Us Here</a>
        `;
    });
});

// Course Tabs Functionality
document.querySelectorAll('.course-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active from all tabs
        document.querySelectorAll('.course-tab').forEach(t => t.classList.remove('active'));
        // Hide all course contents
        document.querySelectorAll('.course-content').forEach(c => c.style.display = 'none');
        // Activate current tab and show its content
        this.classList.add('active');
        document.getElementById(this.dataset.course).style.display = 'block';
    });
});

// Hamburger menu toggle for mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    // Optional: Hide menu when a link is clicked (for better UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}