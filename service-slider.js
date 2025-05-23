let serviceSlideIndex = 1;
showServiceSlides(serviceSlideIndex);

// Next/previous controls
function plusServiceSlides(n) {
  showServiceSlides(serviceSlideIndex += n);
}

// Thumbnail image controls
function currentServiceSlide(n) {
  showServiceSlides(serviceSlideIndex = n);
}

function showServiceSlides(n) {
  let i;
  let slides = document.getElementsByClassName("service-slide");
  let dots = document.getElementsByClassName("service-dot");

  if (slides.length === 0) return; // Prevent error if slider is not found

  if (n > slides.length) {serviceSlideIndex = 1}
  if (n < 1) {serviceSlideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the active dot
  slides[serviceSlideIndex-1].style.display = "block";
  if (dots.length > 0) { // Check if dots exist before trying to access
      dots[serviceSlideIndex-1].className += " active";
  }
}

// Automatic slide change:
// Change image every 5 seconds (5000 milliseconds)
setInterval(() => plusServiceSlides(1), 2000);