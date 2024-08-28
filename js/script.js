window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
  var servicesDropdown = document.getElementById("servicesDropdown");
  var dropdownMenu = servicesDropdown.nextElementSibling;

  servicesDropdown.addEventListener("click", function (e) {
    if (window.innerWidth > 992) {
      // Only for desktop view
      e.preventDefault();
      window.location.href = "services.html";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !servicesDropdown.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });

  // Show dropdown on hover for desktop
  servicesDropdown.addEventListener("mouseenter", function () {
    if (window.innerWidth > 992) {
      dropdownMenu.style.display = "block";
    }
  });

  servicesDropdown.parentElement.addEventListener("mouseleave", function () {
    if (window.innerWidth > 992) {
      dropdownMenu.style.display = "none";
    }
  });
});

// Initialize the carousel with infinite loop and auto-slide
var myCarousel = document.querySelector("#testimonial4");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: true,
});

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

// Add this to your existing GSAP animations
gsap.utils.toArray(".services .animate-fade-up").forEach((element) => {
  gsap.from(element, {
    y: 50,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter items
      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
          // Add fade-in animation
          gsap.fromTo(
            item,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Initial animation for portfolio items
  document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item.querySelector(".portfolio-overlay"), {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.from(
        item.querySelectorAll(".portfolio-overlay h3, .portfolio-overlay p"),
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item.querySelector(".portfolio-overlay"), {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contact-text", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-us",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".contact-image", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-us",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Button hover animation
  const btn = document.querySelector(".custom-btn");
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3 });
  });
  // Existing GSAP setup
  gsap.registerPlugin(ScrollTrigger);

  // Function to handle animations
  function animateElements() {
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

    gsap.utils.toArray(".animate-slide-up").forEach((element) => {
      gsap.from(element, {
        y: 100,
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

    gsap.utils.toArray(".animate-zoom-in").forEach((element) => {
      gsap.from(element, {
        scale: 0.5,
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
  }

  // Call the animation function when the DOM is loaded
  document.addEventListener("DOMContentLoaded", animateElements);

  // Testimonial Slider (if you have multiple testimonials)
  const testimonials = document.querySelectorAll(".testimonial-content");
  let currentTestimonial = 0;

  function showNextTestimonial() {
    gsap.to(testimonials[currentTestimonial], {
      opacity: 0,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        testimonials[currentTestimonial].style.display = "none";
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = "block";
        gsap.fromTo(
          testimonials[currentTestimonial],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });
  }

  // Change testimonial every 5 seconds
  setInterval(showNextTestimonial, 5000);
});

// About Us page animations
gsap.utils.toArray(".animate-fade-up").forEach((element) => {
  gsap.from(element, {
    y: 50,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
  });
});

gsap.from(".animate-fade-right", {
  x: -100,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".animate-fade-right",
    start: "top 80%",
  },
});

gsap.from(".animate-fade-left", {
  x: 100,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".animate-fade-left",
    start: "top 80%",
  },
});

gsap.utils.toArray(".value-card").forEach((card, index) => {
  gsap.from(card, {
    y: 50,
    opacity: 1,
    duration: 0.8,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
  });
});

gsap.utils.toArray(".process-step").forEach((step, index) => {
  gsap.from(step, {
    x: -50,
    opacity: 1,
    duration: 0.8,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: step,
      start: "top 80%",
    },
  });
});

// Add this to your existing script.js file

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects
      projectItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// GSAP Animation Code
gsap.registerPlugin(ScrollTrigger);

// Fade Up Animation
gsap.utils.toArray(".animate-fade-up").forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "top 80%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    duration: 1,
  });
});

// Fade Right Animation
gsap.utils.toArray(".animate-fade-right").forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "top 80%",
      scrub: true,
    },
    opacity: 1,
    x: 0,
    duration: 1,
  });
});

// Fade Left Animation
gsap.utils.toArray(".animate-fade-left").forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "top 80%",
      scrub: true,
    },
    opacity: 1,
    x: 0,
    duration: 1,
  });
});
