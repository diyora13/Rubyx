/**
 * Simple Feature Flag for Hackathon
 * Change this value to show/hide hackathon navbar link
 */
const HACKATHON_ENABLED = false; // Set to false to hide hackathon from navbar

/**
 * Initialize navbar control
 */
function initFeatureFlags() {
    if (HACKATHON_ENABLED) {
        showHackathonNavigation();
    } else {
        hideHackathonNavigation();
    }
}

/**
 * Hide hackathon navigation link
 */
function hideHackathonNavigation() {
    const hackathonLinks = document.querySelectorAll('a[href="hackathon.html"]');
    hackathonLinks.forEach(link => {
        const parentLi = link.closest('li');
        if (parentLi) {
            parentLi.style.display = 'none';
        }
    });
}

/**
 * Show hackathon navigation link
 */
function showHackathonNavigation() {
    const hackathonLinks = document.querySelectorAll('a[href="hackathon.html"]');
    hackathonLinks.forEach(link => {
        const parentLi = link.closest('li');
        if (parentLi) {
            parentLi.style.display = 'list-item';
        }
    });
}

