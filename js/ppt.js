const slides = Array.from(document.querySelectorAll('.slide'));
const previousButton = document.getElementById('previous-slide');
const nextButton = document.getElementById('next-slide');
const currentSlideLabel = document.getElementById('current-slide');
const totalSlidesLabel = document.getElementById('total-slides');
const sectionName = document.getElementById('section-name');
const progressBar = document.getElementById('progress-bar');
const fullscreenButton = document.getElementById('fullscreen-button');
const presentation = document.querySelector('.presentation');

let currentSlide = 0;
let touchStartX = 0;

function getInitialSlide() {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    if (!match) {
        return 0;
    }

    return Math.min(Math.max(Number(match[1]) - 1, 0), slides.length - 1);
}

function showSlide(index) {
    const nextIndex = Math.min(Math.max(index, 0), slides.length - 1);

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === nextIndex);
        slide.classList.toggle('previous', slideIndex < nextIndex);
        slide.setAttribute('aria-hidden', String(slideIndex !== nextIndex));
    });

    currentSlide = nextIndex;
    presentation.dataset.theme = slides[currentSlide].dataset.section
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-');
    currentSlideLabel.textContent = String(currentSlide + 1);
    sectionName.textContent = slides[currentSlide].dataset.section;
    progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
    previousButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
    window.history.replaceState(null, '', `#slide-${currentSlide + 1}`);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

document.addEventListener('keydown', event => {
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        nextSlide();
    } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        previousSlide();
    } else if (event.key === 'Home') {
        showSlide(0);
    } else if (event.key === 'End') {
        showSlide(slides.length - 1);
    } else if (event.key.toLowerCase() === 'f') {
        toggleFullscreen();
    }
});

document.addEventListener('touchstart', event => {
    touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', event => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 55) {
        return;
    }

    if (distance < 0) {
        nextSlide();
    } else {
        previousSlide();
    }
}, { passive: true });

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
    } else {
        document.exitFullscreen?.();
    }
}

fullscreenButton.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
    const icon = fullscreenButton.querySelector('i');
    const isFullscreen = Boolean(document.fullscreenElement);
    icon.className = isFullscreen ? 'fas fa-compress' : 'fas fa-expand';
    fullscreenButton.setAttribute('aria-label', isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen');
});

totalSlidesLabel.textContent = String(slides.length);
showSlide(getInitialSlide());
