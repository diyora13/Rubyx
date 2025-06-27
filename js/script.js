// Image Slider for Hero Section
const heroImages = [
    'images/logo/rubyx_noBackgro.png',
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

// Form validation functions
function validateName(nameInput, nameError) {
    const name = nameInput.value.trim();
    
    if (name === '') {
        nameError.textContent = 'Name cannot be empty';
        nameInput.classList.add('invalid');
        return false;
    } else if (name.length > 50) {
        nameError.textContent = 'Name cannot exceed 50 characters';
        nameInput.classList.add('invalid');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        return true;
    }
}

function validatePhone(phoneInput, phoneError) {
    const phone = phoneInput.value.trim();
    
    if (phone === '') {
        phoneError.textContent = 'Phone number cannot be empty';
        phoneInput.classList.add('invalid');
        return false;
    } else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = 'Phone number must be exactly 10 digits';
        phoneInput.classList.add('invalid');
        return false;
    } else {
        phoneError.textContent = '';
        phoneInput.classList.remove('invalid');
        phoneInput.classList.add('valid');
        return true;
    }
}

function validateEmail(emailInput, emailError) {
    const email = emailInput.value.trim();
    
    if (email === '') {
        emailError.textContent = 'Email cannot be empty';
        emailInput.classList.add('invalid');
        return false;
    } else if (!email.toLowerCase().endsWith('@gmail.com')) {
        emailError.textContent = 'Email must be a valid Gmail address (@gmail.com)';
        emailInput.classList.add('invalid');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        return true;
    }
}

// Set up real-time validation and form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enroll-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    
    const formResponse = document.getElementById('form-response');
    
    // Set up real-time validation
    // Add blur event (when field loses focus) for better UX
    nameInput.addEventListener('input', function() {
        validateName(nameInput, nameError);
    });
    nameInput.addEventListener('blur', function() {
        validateName(nameInput, nameError);
    });
    
    phoneInput.addEventListener('input', function() {
        validatePhone(phoneInput, phoneError);
    });
    phoneInput.addEventListener('blur', function() {
        validatePhone(phoneInput, phoneError);
    });
    
    emailInput.addEventListener('input', function() {
        validateEmail(emailInput, emailError);
    });
    emailInput.addEventListener('blur', function() {
        validateEmail(emailInput, emailError);
    });// Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const countryCode = document.getElementById('selected-code-text').textContent;
        
        // Validate all fields
        const isNameValid = validateName(nameInput, nameError);
        const isPhoneValid = validatePhone(phoneInput, phoneError);
        const isEmailValid = validateEmail(emailInput, emailError);
        
        const isValid = isNameValid && isPhoneValid && isEmailValid;
          // If validation passes, submit the form
        if (isValid) {
            // Show the submitting state with animation
            form.style.display = 'none';
            formResponse.style.display = 'block';
            
            // Add a fade-in transition
            formResponse.style.opacity = '0';
            formResponse.innerHTML = `
                <div class="submitting-state">
                    <div class="spinner"></div>
                    <h3 class="submitting-title">Processing Your Request</h3>
                    <p class="submitting-text">Please wait while we securely submit your information...</p>
                </div>
            `;
            
            // Trigger fade-in animation after a small delay
            setTimeout(() => {
                formResponse.style.opacity = '1';
            }, 50);
            
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
                // Show success state with animation
                setTimeout(() => {
                    formResponse.style.opacity = '0';
                    
                    setTimeout(() => {
                        formResponse.innerHTML = `
                            <div class="success-state">
                                <div class="success-icon"></div>
                                <h3 class="success-title">Appointment Request Received!</h3>
                                <p class="success-text">Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.</p>
                                <button class="contact-us-btn" onclick="location.reload()">Book Another Appointment</button>
                            </div>
                        `;
                        formResponse.style.opacity = '1';
                    }, 300);
                }, 1500);
            })
            .catch(error => {
                console.error("Error:", error);
                
                // Show error state with animation
                setTimeout(() => {
                    formResponse.style.opacity = '0';
                    
                    setTimeout(() => {
                        formResponse.innerHTML = `
                            <div class="error-state">
                                <div class="error-icon"></div>
                                <h3 class="error-title">Submission Failed</h3>
                                <p class="error-text">We couldn't process your request at this time. Please try again or contact us directly.</p>
                                <a href="#enroll" class="contact-us-btn" onclick="document.getElementById('form-response').style.display='none'; document.getElementById('enroll-form').style.display='block';">Try Again</a>
                                <a href="#contact" class="contact-us-btn">Contact Us</a>
                            </div>
                        `;
                        formResponse.style.opacity = '1';
                    }, 300);
                }, 1500);
            });
        }
  });
});

// Course Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle course tab switching
    document.querySelectorAll('.course-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            document.querySelectorAll('.course-tab').forEach(t => t.classList.remove('active'));
            // Hide all course content
            document.querySelectorAll('.course-content').forEach(c => c.style.display = 'none');
            // Activate current tab and show its content
            this.classList.add('active');
            document.getElementById(this.dataset.course).style.display = 'block';
        });
    });

    // Course Major Topics Functionality
    document.querySelectorAll('.major-topic').forEach(topic => {
        topic.addEventListener('click', function() {
            // Remove active from all major topics in the same container
            const parentContainer = this.closest('.major-topics');
            if (parentContainer) {
                parentContainer.querySelectorAll('.major-topic').forEach(t => t.classList.remove('active'));
            } else {
                document.querySelectorAll('.major-topic').forEach(t => t.classList.remove('active'));
            }
            
            // Find the related subtopic content container
            const subtopicsContent = this.closest('.course-container')?.querySelector('.subtopics-content');
            if (subtopicsContent) {
                // Hide all subtopic areas in this container
                subtopicsContent.querySelectorAll('.subtopic-area').forEach(c => c.style.display = 'none');
            } else {
                // Fallback to hiding all subtopic areas
                document.querySelectorAll('.subtopic-area').forEach(c => c.style.display = 'none');
            }
            
            // Activate current topic and show its content
            this.classList.add('active');
            document.getElementById(this.dataset.topic).style.display = 'block';
        });
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