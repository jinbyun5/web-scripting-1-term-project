// Flickity - Image Slider
// Initialize Flickity with vanilla JS
var elem = document.querySelector('.main-carousel');

var flkty = new Flickity(elem, {
  // Align images to the center
  cellAlign: 'center',
  // Contains cells to carousel element to prevent excess scroll at beginning or end
  contain: true,
  // Re-positions cells once images have loaded
  imagesLoaded: true,
  // Infinite scrolling
  wrapAround: true,
  // Advance cells every 3.5 seconds
  autoPlay: 3500,
  // Auto play continues even if user hovers over carousel
  pauseAutoPlayOnHover: false,
  // Disable arrow buttons
  prevNextButtons: false
});


// Type JS
// The text is animated as if it's being typed on the screen
var typed = new Typed('#letter-typing', {
  // Strings in the array display one by one
  strings: ["Welcome to my gallery", "Enjoy the visual stories"],
  typeSpeed: 50,
  // After the letters were typed, it is erased back
  backSpeed: 25,
  loop: true
});


// GSAP Scroll Animation
// Animate the banner as soon as opening the website since I didn't set the scrollTrigger
gsap.from(".main-carousel", {
  // '.main-carousel' moves from y:80 to y:0, which is from bottom to top
  y: 80,
  // It changes opacity from 0 to 1, like fade-in effect
  opacity: 0,
  // It lasts for 2 secs
  duration: 2,
  ease: "power2.out"
});

// Animate about section when scrolling down the page
gsap.from(".about", {
  // When the viewport encounters the element which has '.fade-left' class, animation starts to move '.about' section
  scrollTrigger: ".fade-left",
  opacity: 0,
  // It moves from x:-100 to x:0, which is from left to right
  x: -100,
  duration: 2.5,
  ease: "power2.out"
});

// Animate bts section when scrolling down the page
gsap.from(".bts", {
  // When the viewport encounters the element which has '.fade-right' class, animation starts to move '.bts' section
  scrollTrigger: ".fade-right",
  opacity: 0,
  // It moves from x:100 to x:0, which is from right to left
  x: 100,
  duration: 2.5,
  ease: "power2.out"
});