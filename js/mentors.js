// Mentors data
const mentors = [
    {
        name: 'Jaimin Moradiya',
        photo: 'images/mentors/jaimin-edited.jpg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Sanny Dhameliya',
        photo: 'images/mentors/sanny-edited.jpeg',
        role: 'Technical Analyst',
        company: 'goldman-sachs.jpeg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Yash Sakaria',
        photo: 'images/mentors/yash_sakaria-edited.jpg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Yash Shah',
        photo: 'images/mentors/yash_shah-edited.jpeg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Meet Gohil',
        photo: 'images/mentors/meet-edited.jpeg',
        role: 'Software Developer',
        company: 'tekion.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Nemin Shah',
        photo: 'images/mentors/nemin-edited.jpeg',
        role: 'Software Developer',
        company: 'phonepe.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Krunal Mathukiya',
        photo: 'images/mentors/mathukiya-edited.jpeg',
        role: 'Software Developer',
        company: 'amazon.png',
        alumni: 'Alumni, DDU',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Darshan Sohaliya',
        photo: 'images/mentors/darshan-edited.jpeg',
        role: 'Software Developer',
        company: 'ontic.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Dhruvil Bhikadiya',
        photo: 'images/mentors/bhikadiya-edited.jpeg',
        role: 'Software Developer',
        company: 'zepto.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Dishant Goti',
        photo: 'images/mentors/goti-edited.jpeg',
        role: 'Software Developer',
        company: 'amazon.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Kaushal Nagani',
        photo: 'images/mentors/kaushal-edited.jpeg',
        role: 'Software Developer',
        company: 'sumo_logic.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Akash Kothiya',
        photo: 'images/mentors/kothiya-edited.jpeg',
        role: 'Software Developer',
        company: 'Rippling.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Harsh Rajani',
        photo: 'images/mentors/rajani-edited.jpeg',
        role: 'Software Developer Engineer',
        company: 'google.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Akshat Bhayani',
        photo: 'images/mentors/bhayani-edited.jpeg',
        role: 'Software Developer',
        company: 'navi.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    }
];

// Helper: chunk array into two nearly equal parts
function splitMentors(mentors) {
    const half = Math.ceil(mentors.length / 2);
    return [mentors.slice(0, half), mentors.slice(half)];
}

// Carousel rendering with continuous scrolling
function renderMentorCarousel() {
    const mentorBoundary = document.querySelector('.mentor-boundary');
    if (!mentorBoundary) return;
    
    // Remove old grid if present
    const oldGrid = document.querySelector('.mentor-grid');
    if (oldGrid) oldGrid.remove();
    // Remove old carousel if present
    const oldCarousel = document.querySelector('.mentor-carousel-container');
    if (oldCarousel) oldCarousel.remove();
    
    // Ensure Font Awesome is available for arrow icons
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
    }

    // Make sure we have enough mentors for a good scrolling effect
    if (mentors.length < 6) {
        // If fewer mentors, duplicate the data to have enough for scrolling
        mentors.push(...JSON.parse(JSON.stringify(mentors)));
    }

    // Split mentors into two rows - balanced split
    const [row1, row2] = splitMentors(mentors);
    const rows = [row1, row2];
    
    // Create carousel container
    const container = document.createElement('div');
    container.className = 'mentor-carousel-container';

    rows.forEach((rowMentors, rowIdx) => {
        // Skip empty rows
        if (rowMentors.length === 0) return;
        
        const row = document.createElement('div');
        row.className = 'mentor-carousel-row' + (rowIdx === 1 ? ' reverse' : '');
        row.dataset.row = rowIdx;
        
        // Track for sliding
        const track = document.createElement('div');
        track.className = 'mentor-carousel-track';
        
        // Create the mentor cards for continuous scrolling
        // We duplicate all cards to create a seamless loop
        const createCards = (mentors) => {
            mentors.forEach(mentor => {
                const card = document.createElement('div');
                card.className = 'mentor-card';
                card.innerHTML = `
                    <div class="mentor-photo">
                        <img src="${mentor.photo}" alt="${mentor.name}">
                    </div>
                    <div class="mentor-info">
                        <h3>${mentor.name}</h3>
                        <p class="mentor-project">${mentor.role}</p>
                        <div class="mentor-company">
                            <img src="images/logo/${mentor.company}" alt="Company Logo" class="company-logo">
                        </div>
                        <p class="mentor-alumni">${mentor.alumni}</p>
                        <a href="${mentor.linkedin}" target="_blank" class="linkedin-btn">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                `;
                track.appendChild(card);
            });
        };
        
        // Create initial set of cards
        createCards(rowMentors);
        
        // Duplicate the cards for smooth infinite scrolling
        createCards(rowMentors);
        
        row.appendChild(track);
        
        // Initialize track position properly after rendering
        // This ensures we have the correct starting position
        setTimeout(() => {
            // For the first row, we want to start at 0 (showing first set of cards)
            // For the second row, we also start at 0 but animation will move right-to-left
            track.style.transform = 'translateX(0)';
        }, 50);
        
        // Add navigation arrows
        const leftArrow = document.createElement('div');
        leftArrow.className = 'mentor-carousel-arrow left';
        leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const rightArrow = document.createElement('div');
        rightArrow.className = 'mentor-carousel-arrow right';
        rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        row.appendChild(leftArrow);
        row.appendChild(rightArrow);
        container.appendChild(row);
        
        // Variables to track carousel position
        let currentPosition = 0;
        let cardWidth = 0;
        let isAnimationPaused = false;
        let clickCount = 0;
        let maxClicksBeforeReset = 5; // Reset after 5 consecutive clicks
        
        // Calculate card width including margins
        function getCardWidth() {
            const card = track.querySelector('.mentor-card');
            if (!card) return 200;
            if (!cardWidth) {
                const style = window.getComputedStyle(card);
                cardWidth = card.offsetWidth + parseInt(style.marginLeft || 0) + parseInt(style.marginRight || 0);
            }
            return cardWidth;
        }
        
        // Get visible cards count (how many cards fit in viewport)
        function getVisibleCardCount() {
            const containerWidth = row.clientWidth;
            const cardW = getCardWidth();
            return Math.floor(containerWidth / cardW) || 5; // Default to 5 if calculation fails
        }
        
        // Move carousel by specified number of cards
        function moveCarousel(steps) {
            // Get all cards and calculate total width
            const cards = track.querySelectorAll('.mentor-card');
            const totalCards = cards.length;
            const halfCards = Math.floor(totalCards / 2); // Half due to duplication
            const visibleCards = getVisibleCardCount();
            const cardWidth = getCardWidth();
            
            // Increment click counter
            clickCount++;
            
            // Pause CSS animation and switch to manual control
            if (!isAnimationPaused) {
                // Get current animation position
                const computedStyle = window.getComputedStyle(track);
                const matrix = new DOMMatrix(computedStyle.transform);
                currentPosition = matrix.m41; // Get translateX value
                
                // Stop animation
                track.style.animation = 'none';
                track.style.transform = `translateX(${currentPosition}px)`;
                isAnimationPaused = true;
            }
            
            // Calculate the move distance (one card width)
            const moveDistance = cardWidth * steps;
            
            // Apply direction based on row type (normal or reverse)
            const direction = rowIdx === 0 ? -1 : 1;
            
            // Update position
            currentPosition += moveDistance * direction;
            
            // Calculate the total width of one full set of cards
            const originalSetWidth = cardWidth * halfCards;
            
            // Calculate if we need to wrap around (hit the threshold where we should jump to maintain the illusion of infinity)
            const needsToWrap = Math.abs(currentPosition) >= originalSetWidth;
            const needsReset = clickCount >= maxClicksBeforeReset;
            
            // Smooth transition to the next position
            track.style.transition = 'transform 0.4s ease';
            track.style.transform = `translateX(${currentPosition}px)`;
            
            // If we need to wrap around (reset position to maintain infinite loop)
            if (needsToWrap || needsReset) {
                setTimeout(() => {
                    // Remove transition for instant position change
                    track.style.transition = 'none';
                    
                    if (needsToWrap) {
                        // This is the key fix to prevent blank spaces
                        
                        // Get number of visible cards
                        const visibleCards = getVisibleCardCount();
                        
                        // Calculate exact offset for smooth wrapping
                        let offset = Math.abs(currentPosition) % originalSetWidth;
                        
                        // Make sure we're using modulo correctly (JS returns negative modulo)
                        if (offset < 0) offset += originalSetWidth;
                        
                        // Jump to the equivalent position in the other duplicate set
                        if (rowIdx === 1) { // Second row (left-to-right)
                            // For the second row that scrolls left-to-right
                            if (currentPosition > originalSetWidth) {
                                // If we've scrolled too far right, jump back by one set width
                                currentPosition = offset;
                            } else if (currentPosition < -originalSetWidth) {
                                // If we've scrolled too far left, jump forward by one set width
                                currentPosition = -offset;
                            }
                        } else { // First row (right-to-left)
                            // For the first row that scrolls right-to-left
                            if (currentPosition < -originalSetWidth) {
                                // If we've scrolled too far left, jump back to equivalent position
                                currentPosition = -offset;
                            } else if (currentPosition > originalSetWidth) {
                                // If we've scrolled too far right, jump forward to equivalent position
                                currentPosition = offset;
                            }
                        }
                        
                        // Edge case: if at exact boundary (offset is 0), move slightly to prevent blank space
                        if (offset === 0) {
                            currentPosition = rowIdx === 0 ? -1 : 1;
                        }
                    } else if (needsReset) {
                        // After many clicks, reset to a safe position
                        currentPosition = rowIdx === 0 ? 0 : 0;
                        
                        // Check if this position would show cards
                        const containerWidth = row.clientWidth;
                        const totalVisibleWidth = containerWidth + cardWidth; // Add one extra card width for safety
                        
                        // Ensure we can see cards
                        if (Math.abs(currentPosition) + totalVisibleWidth > originalSetWidth) {
                            // Adjust if we'd be showing blank space
                            currentPosition = rowIdx === 0 ? -cardWidth : cardWidth;
                        }
                    }
                    
                    // Apply the new position
                    track.style.transform = `translateX(${currentPosition}px)`;
                    
                    // Force reflow to make the no-transition change apply
                    track.offsetHeight;
                    track.style.transition = 'transform 0.4s ease';
                    clickCount = 0; // Reset click counter
                }, 400);
            }
        }
        
        // Restart animation when interaction ends
        function restartAnimation() {
            // Get all cards
            const cards = track.querySelectorAll('.mentor-card');
            const totalCards = cards.length;
            const halfCards = Math.floor(totalCards / 2);
            const cardWidth = getCardWidth();
            const originalSetWidth = cardWidth * halfCards;
            
            // Remove the interaction class to restart animation
            row.classList.remove('user-interaction');
            
            // Reset track position to ensure smooth restart
            track.style.animation = 'none';
            track.style.transition = 'none';
            
            // Calculate proper restart position:
            // If we're between 0 and originalSetWidth, keep position but make sure we're not at edge
            if (currentPosition > 0) {
                // For reverse row (left-to-right), adjust if needed
                currentPosition = currentPosition % originalSetWidth;
                if (currentPosition === 0) currentPosition = 1; // Avoid exact boundary
            } else {
                // For normal row (right-to-left), adjust if needed
                currentPosition = currentPosition % originalSetWidth;
                if (currentPosition === 0) currentPosition = -1; // Avoid exact boundary
            }
            
            // Set position before restarting animation
            track.style.transform = `translateX(${currentPosition}px)`;
            
            // Force a reflow to make sure the animation restart is clean
            track.offsetHeight;
            
            // Let CSS animations take over, starting from current position
            const animationName = rowIdx === 0 ? 'scrollRightToLeft' : 'scrollLeftToRight';
            const animationDuration = '30s';
            const animationTimingFunction = 'linear';
            const animationIterationCount = 'infinite';
            
            // Set animation with calculated starting point
            track.style.animation = `${animationName} ${animationDuration} ${animationTimingFunction} ${animationIterationCount}`;
            track.style.transition = '';
            
            isAnimationPaused = false;
            clickCount = 0;
        }
        
        // Check for and fix any blank spaces after navigation
        function checkAndFixVisibility() {
            const cards = track.querySelectorAll('.mentor-card');
            const containerWidth = row.clientWidth;
            const cardWidth = getCardWidth();
            const visibleCards = Math.floor(containerWidth / cardWidth);
            
            // Get current position
            const computedStyle = window.getComputedStyle(track);
            const matrix = new DOMMatrix(computedStyle.transform);
            const currentPos = matrix.m41;
            
            // Calculate index of first visible card
            const firstVisibleIndex = Math.floor(Math.abs(currentPos) / cardWidth);
            
            // Check if enough cards are visible
            if (firstVisibleIndex + visibleCards > cards.length) {
                // We need to reposition - not enough cards visible
                track.style.transition = 'none';
                const totalCards = cards.length;
                const halfCards = Math.floor(totalCards / 2);
                const originalSetWidth = cardWidth * halfCards;
                
                // Reposition to show cards properly
                if (currentPos < 0) {
                    // For normal direction, move back to start of set
                    currentPosition = 0;
                } else {
                    // For reverse direction, move to proper equivalent position
                    currentPosition = originalSetWidth % currentPos;
                }
                
                track.style.transform = `translateX(${currentPosition}px)`;
                
                // Force reflow
                track.offsetHeight;
                track.style.transition = 'transform 0.4s ease';
                
                return true; // Fixed position
            }
            
            return false; // No fix needed
        }

        // Add to moveCarousel function to call this after position changes
        const originalMoveCarousel = moveCarousel;
        moveCarousel = function(steps) {
            originalMoveCarousel(steps);
            
            // Check for blank spaces after the animation completes
            setTimeout(() => {
                checkAndFixVisibility();
            }, 450);
        };
        
        // Manual navigation logic
        leftArrow.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default behavior
            e.stopPropagation(); // Stop event bubbling
            
            // Cancel any pending restart
            clearTimeout(row.resetTimer);
            
            // Add user interaction class to pause animation
            row.classList.add('user-interaction');
            
            // Move one card - direction depends on row
            // For first row: moving left means moving cards to the right (positive value)
            // For second row (reverse): moving left means moving cards to the left (negative value)
            moveCarousel(rowIdx === 0 ? 1 : -1);
            
            // Schedule restart of animation
            row.resetTimer = setTimeout(restartAnimation, 3000);
        });
        
        rightArrow.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default behavior
            e.stopPropagation(); // Stop event bubbling
            
            // Cancel any pending restart
            clearTimeout(row.resetTimer);
            
            // Add user interaction class to pause animation
            row.classList.add('user-interaction');
            
            // Move one card - direction depends on row
            // For first row: moving right means moving cards to the left (negative value)
            // For second row (reverse): moving right means moving cards to the right (positive value)
            moveCarousel(rowIdx === 0 ? -1 : 1);
            
            // Schedule restart of animation
            row.resetTimer = setTimeout(restartAnimation, 3000);
        });
        
        // Mouse event listeners
        row.addEventListener('mouseenter', function() {
            clearTimeout(row.resetTimer); // Clear pending animation restart
        });
        
        row.addEventListener('mouseleave', function() {
            // Only restart if we were in user-interaction mode
            if (row.classList.contains('user-interaction')) {
                row.resetTimer = setTimeout(restartAnimation, 1000);
            }
        });
    });
    
    mentorBoundary.appendChild(container);
}

document.addEventListener('DOMContentLoaded', function() {
    renderMentorCarousel();
    
    // After rendering, ensure proper positioning of carousel tracks
    setTimeout(() => {
        document.querySelectorAll('.mentor-carousel-track').forEach((track, idx) => {
            const row = track.closest('.mentor-carousel-row');
            
            // For first row, start showing first set of cards
            // For second row (reversed), also start showing first set
            // The animation direction will be controlled by CSS
            track.style.transform = 'translateX(0)';
            
            // Force reflow to ensure positioning takes effect
            track.offsetHeight;
        });
    }, 100);
    
    // Add window resize handler to ensure cards remain visible after resize
    window.addEventListener('resize', function() {
        document.querySelectorAll('.mentor-carousel-row').forEach(row => {
            const track = row.querySelector('.mentor-carousel-track');
            
            // If animation is paused/user is interacting, don't adjust
            if (row.classList.contains('user-interaction')) return;
            
            // Pause animation temporarily
            const wasAnimated = !track.style.animation.includes('none');
            if (wasAnimated) {
                track.style.animation = 'none';
            }
            
            // Check if all cards are visible
            const cards = track.querySelectorAll('.mentor-card');
            const containerWidth = row.clientWidth;
            const cardWidth = cards[0].offsetWidth + 
                parseInt(window.getComputedStyle(cards[0]).marginLeft) + 
                parseInt(window.getComputedStyle(cards[0]).marginRight);
                
            // Ensure we're showing cards
            track.style.transform = 'translateX(0)';
            
            // Resume animation if it was playing
            if (wasAnimated) {
                setTimeout(() => {
                    track.style.animation = '';
                }, 50);
            }
        });
    });
});

// Debug function - can be removed in production
function debugMentorCarousel() {
    const tracks = document.querySelectorAll('.mentor-carousel-track');
    tracks.forEach((track, idx) => {
        const row = track.closest('.mentor-carousel-row');
        const computedStyle = window.getComputedStyle(track);
        const matrix = new DOMMatrix(computedStyle.transform);
        const translateX = matrix.m41;
        
        const cards = track.querySelectorAll('.mentor-card');
        const cardWidth = cards[0].offsetWidth + 
            parseInt(window.getComputedStyle(cards[0]).marginLeft) + 
            parseInt(window.getComputedStyle(cards[0]).marginRight);
            
        console.log(`Row ${idx + 1}: Position = ${translateX}px, Cards = ${cards.length}, Card Width = ${cardWidth}px`);
    });
}
