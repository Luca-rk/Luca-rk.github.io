document.addEventListener('DOMContentLoaded', function() {
  // Particles.js initialization
  if(document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#2A3FFB"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#722AFB",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // FAQ functionality
  const faqItems = document.querySelectorAll('.faq-item');

  if(faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }

  // Improved scroll effects for elements
  function checkScroll() {
    // Only select if elements exist in the DOM
    const animations = ['.fade-in', '.slide-in-left', '.slide-in-right', '.scale-in'];
    
    animations.forEach(animation => {
      const elements = document.querySelectorAll(animation);
      
      if(elements.length > 0) {
        elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Optimized condition to activate animation
          const isVisible = 
            elementPosition.top < windowHeight * 0.85 && 
            elementPosition.bottom > 0 &&
            elementPosition.left < window.innerWidth &&
            elementPosition.right > 0;
          
          if(isVisible) {
            element.classList.add('active');
          } else {
            // Only remove active class if element is far outside viewport
            if(elementPosition.top > windowHeight || elementPosition.bottom < 0) {
              element.classList.remove('active');
            }
          }
        });
      }
    });
  }

  // Optimized event listener management with debounce function
  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Event listener with debounce
  const scrollHandler = debounce(checkScroll, 10);
  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('resize', scrollHandler);

  // Header behavior on scroll
  const header = document.querySelector('.site-header');
  if(header) {
    let lastScrollPosition = 0;
    
    window.addEventListener('scroll', function() {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > 150) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
      } else {
        header.style.padding = '15px 0';
        header.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
      }
      
      lastScrollPosition = currentScrollPosition;
    });
  }

  // Initial scroll check
  setTimeout(checkScroll, 100);
});