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

// Testimonial Slider (if you have multiple testimonials)

// Change testimonial every 5 seconds
document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons and portfolio items
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Add click event listener to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      this.classList.add("active");

      // Get the filter value from the button's data-filter attribute
      const filterValue = this.getAttribute("data-filter");

      // Show/hide portfolio items based on the filter
      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
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

  gsap.utils.toArray(".service-item").forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      duration: 1,
      delay: index * 0.1, // Stagger the animation
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Call the animation function when the DOM is loaded
  document.addEventListener("DOMContentLoaded", animateElements);

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
  }
});
