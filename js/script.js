// Image Slider for Hero Section
// Image size = 1370x1190
const heroImages = [
    "images/homeposters/rubyx_grey_back.png",
    "images/homeposters/hiring.png"
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

// --- Add navigation dots ---
const dotsContainer = document.createElement('div');
dotsContainer.className = 'hero-slider-dots';
heroImages.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
    dot.dataset.index = idx;
    dotsContainer.appendChild(dot);
});
imageContainer.appendChild(dotsContainer);

function updateDots() {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentImageIndex);
    });
}

// --- Manual navigation logic ---
let autoSlideInterval;
let autoSlideTimeout;
function showImage(index) {
    const images = imageContainer.querySelectorAll('img');
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (index + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
    updateDots();
}
function nextImage() {
    showImage(currentImageIndex + 1);
}
function prevImage() {
    showImage(currentImageIndex - 1);
}
function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        nextImage();
    }, slideDuration);
}
function pauseAutoSlideAndResume() {
    clearInterval(autoSlideInterval);
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => {
        startAutoSlide();
    }, 6000); // Resume after 6 seconds
}
// Dots click event
[...dotsContainer.children].forEach(dot => {
    dot.addEventListener('click', function() {
        showImage(Number(this.dataset.index));
        pauseAutoSlideAndResume();
    });
});
// Swipe/drag logic for desktop and mobile
let startX = 0;
let startY = 0;
let isDragging = false;
let hasMoved = false;

imageContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    hasMoved = false;
    startX = e.pageX;
    startY = e.pageY;
});

imageContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diffX = e.pageX - startX;
    const diffY = e.pageY - startY;
    
    // Check if user has moved significantly
    if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
        hasMoved = true;
    }
    
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            prevImage();
        } else {
            nextImage();
        }
        pauseAutoSlideAndResume();
        isDragging = false;
    }
});
window.addEventListener('mouseup', () => {
    isDragging = false;
    // Reset hasMoved after a short delay to allow click event to process
    setTimeout(() => {
        hasMoved = false;
    }, 50);
});
// Touch events for mobile
imageContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
    hasMoved = false;
});

imageContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diffX = e.touches[0].clientX - startX;
    const diffY = e.touches[0].clientY - startY;
    
    // Check if user has moved significantly
    if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
        hasMoved = true;
    }
    
    if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
            prevImage();
        } else {
            nextImage();
        }
        pauseAutoSlideAndResume();
        isDragging = false;
    }
});
imageContainer.addEventListener('touchend', () => {
    isDragging = false;
    // Reset hasMoved after a short delay to allow click event to process
    setTimeout(() => {
        hasMoved = false;
    }, 50);
});
// Add click handler for opening link
imageContainer.addEventListener('click', (e) => {
    // Only trigger link if not dragging/swiping and user hasn't moved significantly
    if (!hasMoved && !isDragging) {
        // Change this URL to your desired link
        window.open('hackathon.html', '_blank');
    }
});

// Start the image rotation
document.addEventListener('DOMContentLoaded', function() {
    startAutoSlide();
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

// Initialize all DOM-dependent functionality in a single DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Country code dropdown functionality
    // const selectedCode = document.getElementById('selected-code');
    // const countryDropdown = document.getElementById('country-dropdown');
    
    // if (selectedCode && countryDropdown) {
    //     const countryOptions = document.querySelectorAll('.country-option');
    //     const selectedFlag = document.getElementById('selected-flag');
    //     const selectedCodeText = document.getElementById('selected-code-text');
        
    //     // Toggle dropdown when clicking on selected code
    //     selectedCode.addEventListener('click', function() {
    //         countryDropdown.style.display = countryDropdown.style.display === 'block' ? 'none' : 'block';
    //     });
        
    //     // Close dropdown when clicking outside
    //     document.addEventListener('click', function(event) {
    //         if (!selectedCode.contains(event.target) && !countryDropdown.contains(event.target)) {
    //             countryDropdown.style.display = 'none';
    //         }
    //     });
        
    //     // Handle country selection
    //     countryOptions.forEach(option => {
    //         option.addEventListener('click', function() {
    //             const code = this.getAttribute('data-code');
    //             const country = this.getAttribute('data-country');
                
    //             selectedCodeText.textContent = code;
    //             selectedFlag.src = `https://flagcdn.com/w20/${country}.png`;
    //             selectedFlag.alt = `${country} flag`;
                
    //             countryDropdown.style.display = 'none';
    //         });
    //     });
    // }

    // Check if bannerTextElement exists before trying to access it
    // if (typeof bannerTextElement !== 'undefined') {
    //     const robotIcon = bannerTextElement.querySelector('.fa-robot');
    //     if (robotIcon) {
    //         robotIcon.style.display = 'inline-block';
    //         robotIcon.style.visibility = 'visible';
    //     }
    // }
    
    // Initialize the AI banner if the function exists
    // if (typeof initAIBanner === 'function') {
    //     initAIBanner();
    // }

    // Form validation and submission
    const form = document.getElementById('enroll-form');
    if (form) {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        
        const nameError = document.getElementById('name-error');
        const phoneError = document.getElementById('phone-error');
        const emailError = document.getElementById('email-error');
        
        const formResponse = document.getElementById('form-response');
        
        // Set up real-time validation with blur events
        if (nameInput && nameError) {
            nameInput.addEventListener('input', function() {
                validateName(nameInput, nameError);
            });
            nameInput.addEventListener('blur', function() {
                validateName(nameInput, nameError);
            });
        }
        
        if (phoneInput && phoneError) {
            phoneInput.addEventListener('input', function() {
                validatePhone(phoneInput, phoneError);
            });
            phoneInput.addEventListener('blur', function() {
                validatePhone(phoneInput, phoneError);
            });
        }
        
        if (emailInput && emailError) {
            emailInput.addEventListener('input', function() {
                validateEmail(emailInput, emailError);
            });
            emailInput.addEventListener('blur', function() {
                validateEmail(emailInput, emailError);
            });
        }

        // Form submission
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
                        
                fetch("https://script.google.com/macros/s/AKfycbz-yEzOhXjJZuT0hw-soMl3IJ6wJSs9svf9k2JOSevbkUIxqDtGba4gvMrsIpR6nZNR/exec", {
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
    }

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

    // Hamburger menu toggle for mobile
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up
            navLinks.classList.toggle('show');
            this.classList.toggle('active'); // Toggle active class for animation
        });
        
        // Hide menu when a link is clicked (for better UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                menuIcon.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
                navLinks.classList.remove('show');
                menuIcon.classList.remove('active');
            }
        });
    }
    
    // Sticky Navigation with hide on scroll down, show on scroll up
    const navbar = document.querySelector('nav');
    if (navbar) {
        const headerHeight = navbar.offsetHeight;
        let lastScrollTop = 0;
        
        // Create a placeholder div to prevent layout shifts
        const navPlaceholder = document.createElement('div');
        navPlaceholder.className = 'nav-placeholder';
        navPlaceholder.style.height = headerHeight + 'px';
        navbar.parentNode.insertBefore(navPlaceholder, navbar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            // Add sticky class when scrolled past header
            if (scrollTop > headerHeight) {
                navbar.classList.add('sticky-nav');
                navPlaceholder.style.display = 'block'; // Show placeholder to prevent layout shift
                
                // Hide on scroll down, show on scroll up
                if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    navbar.classList.add('nav-hidden');
                } else {
                    // Scrolling up
                    navbar.classList.remove('nav-hidden');
                }
            } else {
                navbar.classList.remove('sticky-nav');
                navbar.classList.remove('nav-hidden');
                navPlaceholder.style.display = 'none'; // Hide placeholder when not needed
            }
            
            lastScrollTop = scrollTop;
        });
    }
});