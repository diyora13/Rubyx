// Mentors data
const mentors = [
    {
        name: 'Yash Sakaria',
        photo: 'images/mentors/yash_sakaria-edited.jpg',
        role: 'Software Engineer',
        company: 'microsoft.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Kiran Italiya',
        photo: 'images/mentors/kiran-edited.jpeg',
        role: 'Software Developer',
        company: 'amazon.png',
        alumni: 'Alumni, DDU',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Hasti Doshi',
        photo: 'images/mentors/hasti-edited.jpeg',
        role: 'Software Developer Engineer',
        company: 'google.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Jaimin Moradiya',
        photo: 'images/mentors/jaimin-edited.jpg',
        role: 'Software Engineer',
        company: 'microsoft.png',
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
        name: 'Drashti Koladiya',
        photo: 'images/mentors/drashti-edited.jpeg',
        role: 'Software Developer Engineer',
        company: 'google.jpg',
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
        name: 'Harsh Rajani',
        photo: 'images/mentors/rajani-edited.jpeg',
        role: 'Software Developer Engineer',
        company: 'google.jpg',
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
        name: 'Sanny Dhameliya',
        photo: 'images/mentors/sanny-edited.jpeg',
        role: 'Technical Analyst',
        company: 'goldman-sachs.jpeg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Kenil Bhingradiya',
        photo: 'images/mentors/kenil-edited.jpeg',
        role: 'Technical Analyst',
        company: 'morgan-stanley.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    //
    {
        name: 'Jaydeep Machhi',
        photo: 'images/mentors/jaydeep-edited.jpeg',
        role: 'Software Developer',
        company: 'rubrik.png',
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
        name: 'Meet Gohil',
        photo: 'images/mentors/meet-edited.jpeg',
        role: 'Software Developer',
        company: 'tekion.png',
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
    },
    {
        name: 'Keval Savaliya',
        photo: 'images/mentors/keval-edited.jpeg',
        role: 'Software Engineer',
        company: 'tekion.png',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Bhadrayu Bhalodia',
        photo: 'images/mentors/bhadrayu-edited.jpeg',
        role: 'Software Engineer',
        company: 'tekion.png',
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
        name: 'Purav Kansara',
        photo: 'images/mentors/purav-edited.jpeg',
        role: 'Software Engineer',
        company: 'tekion.png',
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
        name: 'Darshan Sohaliya',
        photo: 'images/mentors/darshan-edited.jpeg',
        role: 'Software Developer',
        company: 'ontic.jpg',
        alumni: 'Alumni, DAIICT',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        name: 'Madhvi Padshala',
        photo: 'images/mentors/madhvi-edited.jpeg',
        role: 'Software Developer Engineer',
        company: 'bny.png',
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
];

// Helper: chunk array into two nearly equal parts
function splitMentors(mentors) {
    const half = Math.floor(mentors.length / 2);
    return [mentors.slice(0, half), mentors.slice(half, mentors.length)];
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
        if (rowMentors.length === 0) return;
        const row = document.createElement('div');
        row.className = 'mentor-carousel-row' + (rowIdx === 1 ? ' reverse' : '');
        row.dataset.row = rowIdx;
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
        
        container.appendChild(row);
    });
    mentorBoundary.appendChild(container);
}

// Intersection Observer to start carousel animation when section enters viewport
function startMentorCarouselAnimation() {
    document.querySelectorAll('.mentor-carousel-track').forEach((track, idx) => {
        const row = track.closest('.mentor-carousel-row');
        // Set animation only when entering viewport
        const animationName = idx === 0 ? 'scrollRightToLeft' : 'scrollLeftToRight';
        const animationDuration = '60s';
        const animationTimingFunction = 'linear';
        const animationIterationCount = 'infinite';
        track.style.animation = `${animationName} ${animationDuration} ${animationTimingFunction} ${animationIterationCount}`;
    });
}

function stopMentorCarouselAnimation() {
    document.querySelectorAll('.mentor-carousel-track').forEach((track) => {
        track.style.animation = 'none';
    });
}

// Setup observer on DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
    renderMentorCarousel();
    // Remove auto animation on load
    // Setup Intersection Observer
    const mentorBoundary = document.querySelector('.mentor-boundary');
    if (mentorBoundary) {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startMentorCarouselAnimation();
                } else {
                    stopMentorCarouselAnimation();
                }
            });
        }, { threshold: 0.2 }); // Adjust threshold as needed
        observer.observe(mentorBoundary);
    }
    
    // After rendering, ensure proper positioning of carousel tracks
    setTimeout(() => {
        document.querySelectorAll('.mentor-carousel-row').forEach((row, idx) => {
            const track = row.querySelector('.mentor-carousel-track');
            track.style.transform = 'translateX(0)';
            track.offsetHeight;

            let isDragging = false;
            let startX = 0;
            let scrollLeft = 0;
            let lastKnownX = 0;
            let lastAnimation = '';
            let wheelTimeout = null;

            row.addEventListener('mouseenter', () => {
                // Only pause on hover if not on touch device
                if ('ontouchstart' in window) return;
                
                // Save current animation and transform
                lastAnimation = track.style.animation;
                // Compute current transform from animation
                const computedStyle = window.getComputedStyle(track);
                const matrix = new DOMMatrix(computedStyle.transform);
                lastKnownX = matrix.m41;
                // Remove animation and set transform inline
                track.style.animation = 'none';
                track.style.transform = `translateX(${lastKnownX}px)`;
                row.classList.add('carousel-paused');
                
                // Add cursor style for better UX
                row.style.cursor = 'grab';
            });
            
            row.addEventListener('mouseleave', () => {
                // Only resume on hover if not on touch device
                if ('ontouchstart' in window) return;
                
                // Clear any pending wheel timeout
                if (wheelTimeout) {
                    clearTimeout(wheelTimeout);
                    wheelTimeout = null;
                }
                
                // Compute current transform
                const computedStyle = window.getComputedStyle(track);
                const matrix = new DOMMatrix(computedStyle.transform);
                lastKnownX = matrix.m41;
                // Restore animation, start from current position
                track.style.transform = `translateX(${lastKnownX}px)`;
                // Force reflow
                track.offsetHeight;
                track.style.animation = lastAnimation;
                track.style.animationPlayState = 'running';
                row.classList.remove('carousel-paused');
                
                // Reset cursor
                row.style.cursor = '';
            });

            // Mouse wheel horizontal scroll - improved for better UX
            row.addEventListener('wheel', (e) => {
                // Only handle horizontal scrolling when carousel is paused and user intends horizontal scroll
                if (!row.classList.contains('carousel-paused')) return;
                
                // Check if this is primarily a horizontal scroll gesture
                const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
                const isShiftScroll = e.shiftKey && e.deltaY !== 0;
                
                // Only prevent default and handle if it's clearly a horizontal scroll intention
                if (isHorizontalScroll || isShiftScroll) {
                    e.preventDefault();
                    
                    // Clear any existing timeout
                    if (wheelTimeout) {
                        clearTimeout(wheelTimeout);
                    }
                    
                    const style = window.getComputedStyle(track);
                    const matrix = new DOMMatrix(style.transform);
                    let currentX = matrix.m41;
                    
                    // Use deltaX for horizontal scroll, or deltaY with shift key
                    let delta = isHorizontalScroll ? e.deltaX : e.deltaY;
                    
                    // Apply sensitivity scaling for smoother scrolling
                    delta *= 0.5;
                    
                    if (row.classList.contains('reverse')) delta = -delta;
                    
                    track.style.transition = 'transform 0.1s ease-out';
                    track.style.transform = `translateX(${currentX - delta}px)`;
                    
                    // Set timeout to remove transition after scrolling stops
                    wheelTimeout = setTimeout(() => { 
                        track.style.transition = ''; 
                        wheelTimeout = null;
                    }, 100);
                }
            }, { passive: false });

            // Drag to scroll (Mouse events) - improved responsiveness
            row.addEventListener('mousedown', (e) => {
                if (!row.classList.contains('carousel-paused')) return;
                
                // Prevent text selection during drag
                e.preventDefault();
                
                isDragging = true;
                startX = e.pageX;
                const style = window.getComputedStyle(track);
                const matrix = new DOMMatrix(style.transform);
                scrollLeft = matrix.m41;
                row.classList.add('dragging');
                
                // Add cursor style for better UX
                row.style.cursor = 'grabbing';
                document.body.style.cursor = 'grabbing';
            });
            
            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                
                const x = e.pageX;
                const walk = (x - startX) * 1.2; // Slightly increase sensitivity
                track.style.transform = `translateX(${scrollLeft + walk}px)`;
            });
            
            window.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    row.classList.remove('dragging');
                    row.style.cursor = 'grab';
                    document.body.style.cursor = '';
                }
            });

            // Touch events for mobile devices - improved gesture detection
            let touchStartX = 0;
            let touchStartY = 0;
            let touchMoveX = 0;
            let touchMoveY = 0;
            let isHorizontalGesture = false;
            let isVerticalGesture = false;
            let touchGestureDetected = false;
            let touchStartTime = 0;
            
            row.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].pageX;
                touchStartY = e.touches[0].pageY;
                touchMoveX = touchStartX;
                touchMoveY = touchStartY;
                isHorizontalGesture = false;
                isVerticalGesture = false;
                touchGestureDetected = false;
                touchStartTime = Date.now();
                
                // Store initial scroll position
                const style = window.getComputedStyle(track);
                const transformMatrix = new DOMMatrix(style.transform);
                scrollLeft = transformMatrix.m41;
                
                // Don't pause animation immediately - wait for gesture detection
            }, { passive: true });
            
            row.addEventListener('touchmove', (e) => {
                touchMoveX = e.touches[0].pageX;
                touchMoveY = e.touches[0].pageY;
                
                const deltaX = Math.abs(touchMoveX - touchStartX);
                const deltaY = Math.abs(touchMoveY - touchStartY);
                
                // Only process if we have significant movement
                if (deltaX < 5 && deltaY < 5) return;
                
                // Detect gesture direction after sufficient movement
                if (!touchGestureDetected && (deltaX > 10 || deltaY > 10)) {
                    touchGestureDetected = true;
                    
                    // More generous vertical gesture detection
                    isVerticalGesture = deltaY > deltaX && deltaY > 8;
                    isHorizontalGesture = deltaX > deltaY && deltaX > 15;
                    
                    // If it's clearly a vertical gesture, allow default scrolling
                    if (isVerticalGesture) {
                        // Don't interfere with vertical scrolling
                        return;
                    }
                    
                    // Only handle horizontal gestures
                    if (isHorizontalGesture) {
                        // Pause animation for horizontal gesture
                        lastAnimation = track.style.animation;
                        const computedStyle = window.getComputedStyle(track);
                        const matrix = new DOMMatrix(computedStyle.transform);
                        lastKnownX = matrix.m41;
                        track.style.animation = 'none';
                        track.style.transform = `translateX(${lastKnownX}px)`;
                        row.classList.add('carousel-paused');
                        
                        isDragging = true;
                        startX = touchStartX;
                        scrollLeft = lastKnownX;
                        row.classList.add('dragging');
                    }
                }
                
                // Handle horizontal swiping
                if (touchGestureDetected && isHorizontalGesture && !isVerticalGesture) {
                    e.preventDefault();
                    const x = e.touches[0].pageX;
                    const walk = x - touchStartX;
                    track.style.transform = `translateX(${scrollLeft + walk}px)`;
                }
            }, { passive: false });
            
            row.addEventListener('touchend', () => {
                if (isDragging && isHorizontalGesture) {
                    isDragging = false;
                    row.classList.remove('dragging');
                    
                    // Auto-resume animation after a short delay if no further interaction
                    setTimeout(() => {
                        if (!isDragging && row.classList.contains('carousel-paused')) {
                            const computedStyle = window.getComputedStyle(track);
                            const matrix = new DOMMatrix(computedStyle.transform);
                            const currentX = matrix.m41;
                            
                            // Resume animation from current position
                            track.style.transform = `translateX(${currentX}px)`;
                            track.offsetHeight; // Force reflow
                            
                            // Restore the animation
                            const animationName = row.classList.contains('reverse') ? 'scrollLeftToRight' : 'scrollRightToLeft';
                            track.style.animation = `${animationName} 60s linear infinite`;
                            track.style.animationPlayState = 'running';
                            row.classList.remove('carousel-paused');
                        }
                    }, 2000);
                }
                
                // Reset touch tracking
                touchGestureDetected = false;
                isHorizontalGesture = false;
                isVerticalGesture = false;
            });
        });
    }, 100);
    
    // Global touch handler to resume carousel when touching outside mentor section
    document.addEventListener('touchstart', (e) => {
        const mentorCarousel = document.querySelector('.mentor-carousel-container');
        if (!mentorCarousel) return;
        
        // Check if touch is outside the mentor carousel
        const isOutsideCarousel = !mentorCarousel.contains(e.target);
        
        if (isOutsideCarousel) {
            // Resume all paused carousels
            document.querySelectorAll('.mentor-carousel-row.carousel-paused').forEach(row => {
                const track = row.querySelector('.mentor-carousel-track');
                
                // Get current position
                const computedStyle = window.getComputedStyle(track);
                const matrix = new DOMMatrix(computedStyle.transform);
                const currentX = matrix.m41;
                
                // Resume animation from current position
                track.style.transform = `translateX(${currentX}px)`;
                track.offsetHeight; // Force reflow
                
                // Restore the animation
                const animationName = row.classList.contains('reverse') ? 'scrollLeftToRight' : 'scrollRightToLeft';
                track.style.animation = `${animationName} 60s linear infinite`;
                track.style.animationPlayState = 'running';
                row.classList.remove('carousel-paused');
            });
        }
    }, { passive: true });
    
    // Add a scroll event listener to ensure carousel doesn't interfere with page scroll
    window.addEventListener('scroll', () => {
        // Resume any paused carousels when user scrolls the page
        document.querySelectorAll('.mentor-carousel-row.carousel-paused').forEach(row => {
            const track = row.querySelector('.mentor-carousel-track');
            
            // Get current position
            const computedStyle = window.getComputedStyle(track);
            const matrix = new DOMMatrix(computedStyle.transform);
            const currentX = matrix.m41;
            
            // Resume animation from current position
            track.style.transform = `translateX(${currentX}px)`;
            track.offsetHeight; // Force reflow
            
            // Restore the animation
            const animationName = row.classList.contains('reverse') ? 'scrollLeftToRight' : 'scrollRightToLeft';
            track.style.animation = `${animationName} 60s linear infinite`;
            track.style.animationPlayState = 'running';
            row.classList.remove('carousel-paused');
            row.classList.remove('dragging');
        });
    }, { passive: true });
    
    // Add window resize handler to ensure cards remain visible after resize
    window.addEventListener('resize', function() {
        document.querySelectorAll('.mentor-carousel-row').forEach(row => {
            const track = row.querySelector('.mentor-carousel-track');
            if (row.classList.contains('user-interaction')) return;
            const wasAnimated = !track.style.animation.includes('none');
            if (wasAnimated) {
                track.style.animation = 'none';
            }
            const cards = track.querySelectorAll('.mentor-card');
            const containerWidth = row.clientWidth;
            const cardWidth = cards[0].offsetWidth + 
                parseInt(window.getComputedStyle(cards[0]).marginLeft) + 
                parseInt(window.getComputedStyle(cards[0]).marginRight);
            track.style.transform = 'translateX(0)';
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
