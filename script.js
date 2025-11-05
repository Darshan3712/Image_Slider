// Select all relevant elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let slideInterval; // for auto slide

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

// Show next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Show previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto slideshow (every 3 seconds)
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
}

// Stop auto slideshow when user interacts
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide(); // restart auto slide
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

// Dots navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
        stopAutoSlide();
        startAutoSlide();
    });
});

// Initialize slider on page load
showSlide(currentIndex);
startAutoSlide();
