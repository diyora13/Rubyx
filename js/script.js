// Image Slider for Hero Section
const heroImages = [
    'images/logo/rubyx_noBackgro.png',
    'images/mentors/pexels-justin-shaifer-501272-1222271.jpg',
    'images/mentors/pexels-pixabay-415263.jpg',
    'images/tutors/pexels-simon-robben-55958-614810.jpg',
    'images/tutors/pexels-stefanstefancik-91227.jpg'
];

let currentImageIndex = 0;
const imageContainer = document.querySelector('.hero-image-slider');
const slideDuration = 5000; // 4 seconds per slide, you can adjust this time

// Create image elements and preload them
heroImages.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    img.alt = `Rubyx Institute Image ${index + 1}`;
    img.className = index === 0 ? 'active' : '';
    imageContainer.appendChild(img);
});

// Image rotation function
function rotateImages() {
    const images = imageContainer.querySelectorAll('img');
    images[currentImageIndex].classList.remove('active');
    
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Start the image rotation
setInterval(rotateImages, slideDuration);

// Country code dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const selectedCode = document.getElementById('selected-code');
    const countryDropdown = document.getElementById('country-dropdown');
    const countryOptions = document.querySelectorAll('.country-option');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedCodeText = document.getElementById('selected-code-text');
    
    // Toggle dropdown when clicking on selected code
    selectedCode.addEventListener('click', function() {
        countryDropdown.style.display = countryDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!selectedCode.contains(event.target) && !countryDropdown.contains(event.target)) {
            countryDropdown.style.display = 'none';
        }
    });
    
    // Handle country selection
    countryOptions.forEach(option => {
        option.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            const country = this.getAttribute('data-country');
            
            selectedCodeText.textContent = code;
            selectedFlag.src = `https://flagcdn.com/w20/${country}.png`;
            selectedFlag.alt = `${country} flag`;
            
            countryDropdown.style.display = 'none';
        });
    });
});

// Form validation and submission
document.getElementById('enroll-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const form = document.getElementById('enroll-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const countryCode = document.getElementById('selected-code-text').textContent;
    
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    
    const formResponse = document.getElementById('form-response');
    
    // Clear previous errors
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    
    let isValid = true;
    
    // Validate name (max 50 characters)
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name cannot be empty';
        isValid = false;
    } else if (nameInput.value.length > 50) {
        nameError.textContent = 'Name cannot exceed 50 characters';
        isValid = false;
    }
    
    // Validate phone (exactly 10 digits)
    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number cannot be empty';
        isValid = false;
    } else if (!/^\d{10}$/.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Phone number must be exactly 10 digits';
        isValid = false;
    }
    
    // Validate email (must have @gmail.com)
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email cannot be empty';
        isValid = false;
    } else if (!emailInput.value.trim().toLowerCase().endsWith('@gmail.com')) {
        emailError.textContent = 'Email must be a valid Gmail address (@gmail.com)';
        isValid = false;
    }
    
    // If validation passes, submit the form
    if (isValid) {
        // Show the submitting state
        form.style.display = 'none';
        formResponse.style.display = 'block';
        formResponse.innerHTML = `
            <div class="submitting-state">
                <div class="spinner"></div>
                <h3 class="submitting-title">Processing Your Request</h3>
                <p class="submitting-text">Please wait while we securely submit your information...</p>
            </div>
        `;
        
        const name = nameInput.value;
        const phone = countryCode + phoneInput.value;
        const email = emailInput.value;
        
        fetch("https://script.google.com/macros/s/AKfycbzeqae9A-UyIvcCMOxXrqm6qLEofWod47gYhiSqu4xqQUuiBjmMQDVSAHCzJDgp5qza/exec", { // Replace with your actual URL
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, email })
        })
        .then(() => {
            // Show success state (after 1.5 seconds to simulate processing)
            setTimeout(() => {
                formResponse.innerHTML = `
                    <div class="success-state">
                        <div class="success-icon"></div>
                        <h3 class="success-title">Appointment Request Received!</h3>
                        <p class="success-text">Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.</p>
                    </div>
                `;
            }, 1500);
        })
        .catch(error => {
            console.error("Error:", error);
            
            // Show error state (after 1.5 seconds to simulate processing)
            setTimeout(() => {
                formResponse.innerHTML = `
                    <div class="error-state">
                        <div class="error-icon"></div>
                        <h3 class="error-title">Submission Failed</h3>
                        <p class="error-text">We couldn't process your request at this time. Please try again or contact us directly.</p>
                        <a href="#contact" class="contact-us-btn">Contact Us</a>
                    </div>
                `;
            }, 1500);
        });
    }
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
    });    // Hide menu when a link is clicked (for better UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav')) {
            navLinks.classList.remove('show');
        }
    });
}