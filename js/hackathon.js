// Hackathon Registration Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeCountryDropdown();
    initializeFormValidation();
    initializeFormSubmission();
    initializeRegistrationButton();
});

// Country Dropdown Functionality
function initializeCountryDropdown() {
    const selectedCode = document.getElementById('selected-code');
    const countryDropdown = document.getElementById('country-dropdown');
    const countryOptions = document.querySelectorAll('.country-option');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedCodeText = document.getElementById('selected-code-text');

    selectedCode.addEventListener('click', function() {
        countryDropdown.classList.toggle('active');
    });

    countryOptions.forEach(option => {
        option.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            const country = this.getAttribute('data-country');
            const flagSrc = this.querySelector('img').src;
            
            selectedFlag.src = flagSrc;
            selectedCodeText.textContent = code;
            countryDropdown.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!selectedCode.contains(e.target) && !countryDropdown.contains(e.target)) {
            countryDropdown.classList.remove('active');
        }
    });
}

// Form Validation Functions
function validateFullName(input, errorElement) {
    const name = input.value.trim();
    
    if (name === '') {
        showError(errorElement, 'Full name is required');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else if (name.length < 2) {
        showError(errorElement, 'Name must be at least 2 characters long');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else if (name.length > 50) {
        showError(errorElement, 'Name cannot exceed 50 characters');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError(errorElement, 'Name can only contain letters and spaces');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else {
        clearError(errorElement);
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
}

function validatePhone(input, errorElement) {
    const phone = input.value.trim();
    
    if (phone === '') {
        showError(errorElement, 'Phone number is required');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else if (!/^\d{10}$/.test(phone)) {
        showError(errorElement, 'Please enter a valid 10-digit phone number');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else {
        clearError(errorElement);
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
}

function validateEmail(input, errorElement) {
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        showError(errorElement, 'Email address is required');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(errorElement, 'Please enter a valid email address');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else {
        clearError(errorElement);
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
}

function validateSelect(input, errorElement, fieldName) {
    const value = input.value.trim();
    
    if (value === '') {
        showError(errorElement, `${fieldName} is required`);
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else {
        clearError(errorElement);
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
}

function validateLinkedIn(input, errorElement) {
    const linkedin = input.value.trim();
    
    if (linkedin === '') {
        clearError(errorElement);
        input.classList.remove('invalid', 'valid');
        return true;
    }
    
    const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w\-]+\/?$/;
    
    if (!linkedinRegex.test(linkedin)) {
        showError(errorElement, 'Please enter a valid LinkedIn profile URL');
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    } else {
        clearError(errorElement);
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Initialize Form Validation
function initializeFormValidation() {
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const collegeNameSelect = document.getElementById('collegeName');
    const fieldSelect = document.getElementById('field');
    const yearSelect = document.getElementById('year');
    const linkedinInput = document.getElementById('linkedinId');

    // Add real-time validation
    if (fullNameInput) {
        fullNameInput.addEventListener('input', () => validateFullName(fullNameInput, document.getElementById('fullName-error')));
        fullNameInput.addEventListener('blur', () => validateFullName(fullNameInput, document.getElementById('fullName-error')));
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => validatePhone(phoneInput, document.getElementById('phone-error')));
        phoneInput.addEventListener('blur', () => validatePhone(phoneInput, document.getElementById('phone-error')));
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => validateEmail(emailInput, document.getElementById('email-error')));
        emailInput.addEventListener('blur', () => validateEmail(emailInput, document.getElementById('email-error')));
    }

    if (collegeNameSelect) {
        collegeNameSelect.addEventListener('change', () => {
            validateSelect(collegeNameSelect, document.getElementById('collegeName-error'), 'College name');
        });
    }

    if (fieldSelect) {
        fieldSelect.addEventListener('change', () => {
            validateSelect(fieldSelect, document.getElementById('field-error'), 'Field of study');
        });
    }

    if (yearSelect) {
        yearSelect.addEventListener('change', () => {
            validateSelect(yearSelect, document.getElementById('year-error'), 'Current year');
        });
    }

    if (linkedinInput) {
        linkedinInput.addEventListener('input', () => validateLinkedIn(linkedinInput, document.getElementById('linkedinId-error')));
        linkedinInput.addEventListener('blur', () => validateLinkedIn(linkedinInput, document.getElementById('linkedinId-error')));
    }
}

// Form Submission
function initializeFormSubmission() {
    const form = document.getElementById('hackathon-form');
    const submitBtn = document.getElementById('submit-btn');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        const fullNameValid = validateFullName(
            document.getElementById('fullName'),
            document.getElementById('fullName-error')
        );
        const phoneValid = validatePhone(
            document.getElementById('phone'),
            document.getElementById('phone-error')
        );
        const emailValid = validateEmail(
            document.getElementById('email'),
            document.getElementById('email-error')
        );
        const collegeNameValid = validateSelect(
            document.getElementById('collegeName'),
            document.getElementById('collegeName-error'),
            'College name'
        );
        const fieldValid = validateSelect(
            document.getElementById('field'),
            document.getElementById('field-error'),
            'Field of study'
        );
        const yearValid = validateSelect(
            document.getElementById('year'),
            document.getElementById('year-error'),
            'Current year'
        );
        const linkedinValid = validateLinkedIn(
            document.getElementById('linkedinId'),
            document.getElementById('linkedinId-error')
        );

        const allValid = fullNameValid && phoneValid && emailValid && 
                        collegeNameValid && fieldValid && yearValid && linkedinValid;

        if (!allValid) {
            showFormResponse('error', 'Please correct the errors above and try again.');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';
        showFormResponse('loading', 'Submitting your registration...');

        try {
            // Collect form data
            const formData = {
                fullName: document.getElementById('fullName').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                collegeName: document.getElementById('collegeName').value,
                field: document.getElementById('field').value,
                year: document.getElementById('year').value,
                linkedinId: document.getElementById('linkedinId').value.trim(),
                countryCode: document.getElementById('selected-code-text').textContent
            };

            // Submit to Google Apps Script
            const response = await submitToGoogleScript(formData);

            if (response.success) {
                // Success response
                showFormResponse('success', 
                    `Registration successful! 🎉<br>
                    <strong>Registration ID:</strong> ${response.registrationId || 'Generated'}<br>
                    You will receive a confirmation email shortly with event details.`
                );
                
                // Reset form
                form.reset();
                document.querySelectorAll('.valid, .invalid').forEach(el => {
                    el.classList.remove('valid', 'invalid');
                });
            } else {
                throw new Error(response.error || 'Registration failed');
            }
            
        } catch (error) {
            console.error('Registration error:', error);
            
            let errorMessage = 'Registration failed. Please try again.';
            
            if (error.message.includes('Failed to fetch')) {
                errorMessage = 'Connection failed. Please check your internet connection and try again.';
            } else if (error.message.includes('405')) {
                errorMessage = 'Service configuration error. Please contact support.';
            } else if (error.message.includes('404')) {
                errorMessage = 'Service not found. Please contact support.';
            } else if (error.message) {
                errorMessage = `Error: ${error.message}`;
            }
            
            showFormResponse('error', 
                `${errorMessage}<br>
                <small>If the problem persists, please contact support.</small>`
            );
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Register for Hackathon';
        }
    });
}

// Submit form data to Google Apps Script
async function submitToGoogleScript(formData) {
    // Replace this URL with your actual Google Apps Script Web App URL
    // Get this URL after deploying your script as a web app
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUALneIaoAJ0DBgN_mMgCIFBgWtyYS5zZYkARTuuRGs5NBpvIRLJLxyo3TdjK7KbI5/exec';
    
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            if (response.status === 405) {
                throw new Error('Web app deployment error: Make sure the Google Apps Script is deployed as a Web App with "Anyone" access and "Execute as: Me" settings.');
            } else if (response.status === 404) {
                throw new Error('Web app not found: Please check the Google Apps Script URL is correct.');
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }

        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error || 'Unknown server error');
        }
        
        return data;
        
    } catch (error) {
        console.error('Error submitting to Google Script:', error);
        
        // If CORS error, try with no-cors mode (data will still be submitted but we can't read response)
        if (error.message.includes('CORS') || error.name === 'TypeError') {
            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: JSON.stringify(formData)
                });
                
                // Since we can't read the response with no-cors, assume success
                return {
                    success: true,
                    message: 'Registration submitted successfully',
                    registrationId: 'REG-' + Date.now()
                };
            } catch (corsError) {
                console.error('CORS fallback also failed:', corsError);
            }
        }
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('Failed to connect to server. Please check your internet connection.');
        }
        
        throw error;
    }
}

function showFormResponse(type, message) {
    const formResponse = document.getElementById('form-response');
    formResponse.className = `form-response ${type}`;
    formResponse.innerHTML = message;
    formResponse.style.display = 'block';
    
    // Scroll to response
    formResponse.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-hide after 10 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            formResponse.style.display = 'none';
        }, 10000);
    }
}

// Smooth scrolling for any anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Registration Button Functionality
function initializeRegistrationButton() {
    const registerBtn = document.getElementById('register-btn');
    const registrationSection = document.querySelector('.registration-section');
    
    if (registerBtn && registrationSection) {
        registerBtn.addEventListener('click', function() {
            registrationSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add a small delay and then focus on the first input
            setTimeout(() => {
                const firstInput = document.getElementById('fullName');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 800);
        });
    }
}


