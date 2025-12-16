// Smooth scroll to reviews section
function scrollToReviews(event) {
    event.preventDefault();
    const reviewsSection = document.getElementById('opinie');
    if (reviewsSection) {
        const headerOffset = 80; // Account for sticky header
        const elementPosition = reviewsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Lightbox functionality
const lightboxImages = [
    { src: 'img/gabinet.jpg', alt: 'Gabinet' },
    { src: 'img/directions.jpg', alt: 'Dojazd do gabinetu' },
    { src: 'img/klatka.jpg', alt: 'Wejście' }
];

let currentImageIndex = 0;

function openLightbox(index) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    
    if (modal && modalImg && index >= 0 && index < lightboxImages.length) {
        currentImageIndex = index;
        modal.classList.add('active');
        updateLightboxImage();
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function updateLightboxImage() {
    const modalImg = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    
    if (modalImg && currentImageIndex >= 0 && currentImageIndex < lightboxImages.length) {
        const image = lightboxImages[currentImageIndex];
        modalImg.src = image.src;
        modalImg.alt = image.alt;
        if (caption) {
            caption.textContent = image.alt;
        }
    }
}

function changeImage(direction, event) {
    if (event) {
        event.stopPropagation(); // Prevent closing lightbox when clicking arrows
    }
    
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = lightboxImages.length - 1;
    } else if (currentImageIndex >= lightboxImages.length) {
        currentImageIndex = 0;
    }
    
    updateLightboxImage();
}

function closeLightbox(event) {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = event.target.closest('.lightbox-close');
    const modalContent = event.target.closest('.lightbox-image');
    const prevBtn = event.target.closest('.lightbox-prev');
    const nextBtn = event.target.closest('.lightbox-next');
    
    // Don't close if clicking on navigation buttons
    if (prevBtn || nextBtn) {
        return;
    }
    
    // Close if clicking the close button or outside the image
    if (closeBtn || (!modalContent && event.target === modal)) {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('lightbox-modal');
    if (modal && modal.classList.contains('active')) {
        if (event.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Reviews carousel
let reviewsCarouselData = {
    currentIndex: 1, // Start at first real review (skip duplicate)
    carouselInterval: null,
    reviewsTrack: null,
    reviewCards: null,
    realReviewCount: 0,
    isTransitioning: false
};

function getCardWidth() {
    if (!reviewsCarouselData.reviewsTrack) return 0;
    const carousel = reviewsCarouselData.reviewsTrack.closest('.reviews-carousel');
    if (!carousel) return 0;
    const gap = parseInt(getComputedStyle(reviewsCarouselData.reviewsTrack).gap) || 0;
    return carousel.offsetWidth + gap;
}

function updateCarouselPosition(instant = false) {
    if (!reviewsCarouselData.reviewsTrack) return;
    const offset = -reviewsCarouselData.currentIndex * getCardWidth();
    if (instant) {
        reviewsCarouselData.reviewsTrack.style.transition = 'none';
        reviewsCarouselData.reviewsTrack.style.transform = `translateX(${offset}px)`;
        // Force reflow
        void reviewsCarouselData.reviewsTrack.offsetWidth;
        reviewsCarouselData.reviewsTrack.style.transition = '';
    } else {
        reviewsCarouselData.reviewsTrack.style.transform = `translateX(${offset}px)`;
    }
}

function moveCarousel() {
    if (!reviewsCarouselData.reviewCards || reviewsCarouselData.reviewCards.length === 0) return;
    if (reviewsCarouselData.isTransitioning) return;
    
    reviewsCarouselData.currentIndex++;
    
    // If we've reached the duplicate at the end, jump to the real first review
    if (reviewsCarouselData.currentIndex >= reviewsCarouselData.reviewCards.length - 1) {
        reviewsCarouselData.isTransitioning = true;
        updateCarouselPosition();
        
        setTimeout(() => {
            reviewsCarouselData.currentIndex = 1;
            updateCarouselPosition(true);
            reviewsCarouselData.isTransitioning = false;
        }, 500);
    } else {
        updateCarouselPosition();
    }
}

function changeReview(direction) {
    if (!reviewsCarouselData.reviewCards || reviewsCarouselData.reviewCards.length === 0) return;
    if (reviewsCarouselData.isTransitioning) return;
    
    reviewsCarouselData.currentIndex += direction;
    
    // If going backwards and reached duplicate at start, jump to real last review
    if (reviewsCarouselData.currentIndex < 0) {
        reviewsCarouselData.isTransitioning = true;
        reviewsCarouselData.currentIndex = reviewsCarouselData.realReviewCount;
        updateCarouselPosition();
        
        setTimeout(() => {
            reviewsCarouselData.currentIndex = reviewsCarouselData.realReviewCount;
            updateCarouselPosition(true);
            reviewsCarouselData.isTransitioning = false;
        }, 500);
    }
    // If going forwards and reached duplicate at end, jump to real first review
    else if (reviewsCarouselData.currentIndex >= reviewsCarouselData.reviewCards.length - 1) {
        reviewsCarouselData.isTransitioning = true;
        updateCarouselPosition();
        
        setTimeout(() => {
            reviewsCarouselData.currentIndex = 1;
            updateCarouselPosition(true);
            reviewsCarouselData.isTransitioning = false;
        }, 500);
    } else {
        updateCarouselPosition();
    }
    
    // Reset auto-advance timer
    if (reviewsCarouselData.carouselInterval) {
        clearInterval(reviewsCarouselData.carouselInterval);
    }
    reviewsCarouselData.carouselInterval = setInterval(moveCarousel, 15000);
}

document.addEventListener('DOMContentLoaded', function() {
    const reviewsTrack = document.getElementById('reviews-track');
    if (!reviewsTrack) return;
    
    const reviewCards = reviewsTrack.querySelectorAll('.review-card');
    if (reviewCards.length === 0) return;
    
    // Count real reviews (excluding clones)
    reviewsCarouselData.realReviewCount = reviewCards.length - 2; // Subtract 2 duplicates
    
    reviewsCarouselData.reviewsTrack = reviewsTrack;
    reviewsCarouselData.reviewCards = reviewCards;
    reviewsCarouselData.currentIndex = 1; // Start at first real review
    
    // Initialize position at first real review
    updateCarouselPosition(true);
    
    // Auto-advance every 5 seconds
    reviewsCarouselData.carouselInterval = setInterval(moveCarousel, 15000);
    
    // Pause on hover
    const carouselContainer = reviewsTrack.closest('.reviews-carousel-wrapper');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            if (reviewsCarouselData.carouselInterval) {
                clearInterval(reviewsCarouselData.carouselInterval);
            }
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            reviewsCarouselData.carouselInterval = setInterval(moveCarousel, 15000);
        });
    }
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            updateCarouselPosition(true);
        }, 250);
    });
});
