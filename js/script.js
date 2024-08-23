// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  console.log("DOM fully loaded and parsed");

  // Fade Up Animation
  gsap.utils.toArray(".animate-fade-up").forEach((element) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Fade In Animation
  gsap.utils.toArray(".animate-fade-in").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Staggered animation for team images
  gsap.from(".team-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".team-image",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Text reveal animation
  gsap.utils.toArray(".animate-fade-up p").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Parallax effect on images
  gsap.utils.toArray(".team-image img").forEach((img) => {
    gsap.to(img, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
});
