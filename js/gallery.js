// MixItUp: To filter photos by nature, people, and objects
// Inside the photo-gallery container, each '.photo' is the element that MixItUp targets for filtering
var mixer = mixitup('#photo-gallery', {
  selectors: {
    target: '.photo'
  },
  // When clicking the filtering button, photos are animated
  animation: {
    effects: 'fade scale(0.95)',
    duration: 300
  },
  // By default, the page shows all photos.
  // When clicking one of the button, only the selected categories are shown.
  controls: {
    toggleLogic: 'or',
    toggleDefault: 'all'
  }
});

// GSAP Scroll Animation
gsap.registerPlugin(ScrollTrigger);

// I used ScrollTrigger.batch() referencing from the GSAP website to make photos animated in order.
// When the viewport encounters an element which has the '.photo' class, the animation starts
ScrollTrigger.batch(".photo", {
  onEnter: batch =>
    gsap.from(batch, {
      opacity: 0,
      // Photos are animated from y:30 to y:0, which is from bottom to the top
      y: 30,
      // Animation lasts for 2 secs
      duration: 2,
      // Photos appear one by one every 0.3 secs
      stagger: 0.3,
      ease: "power2.out"
    })
});
