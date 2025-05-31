let testimonialSlides;
let testimonialsSliderContainer = document.querySelector(".testimonials-slides");
let testimonialSlideIndex = 0;
let totalCardSpace = 0;

// Function to calculate card width and margin
function calculateCardSpace() {
    testimonialSlides = document.querySelectorAll(".testimonial-card");
    if (testimonialSlides.length === 0 || !testimonialsSliderContainer) {
        console.warn("Testimonial slider elements not found.");
        return;
    }

    const cardWidth = testimonialSlides[0].offsetWidth;
    const cardMarginRight = parseFloat(getComputedStyle(testimonialSlides[0]).marginRight);
    totalCardSpace = cardWidth + cardMarginRight;
}

// Function to slide and then reorder DOM for infinite effect
function slideTestimonial() {
    testimonialsSliderContainer.style.transition = "transform 0.5s ease-in-out";
    testimonialsSliderContainer.style.transform = `translateX(-${totalCardSpace}px)`;

    setTimeout(() => {
        // Move first card to the end
        const firstCard = testimonialsSliderContainer.querySelector(".testimonial-card");
        testimonialsSliderContainer.appendChild(firstCard);

        // Reset transform without transition
        testimonialsSliderContainer.style.transition = "none";
        testimonialsSliderContainer.style.transform = `translateX(0)`;
    }, 500); // Matches transition duration
}

// Initialize and start auto loop
document.addEventListener("DOMContentLoaded", () => {
    calculateCardSpace();

    window.addEventListener("resize", calculateCardSpace);

    // Set the container to flex so we can shift elements
    testimonialsSliderContainer.style.display = "flex";

    // Start sliding every 5 seconds
    setInterval(slideTestimonial, 2000);
});
