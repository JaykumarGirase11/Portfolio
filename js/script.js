// Dark Neon Portfolio JavaScript - Exact Match
// Enhanced Typing Animation (keeping your original)
const typingText = document.getElementById("typing-text");
const texts = ["Developer", "Engineer", "Innovator", "Coder", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = texts[index];
  typingText.innerText = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % texts.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

// Initialize typing effect
document.addEventListener("DOMContentLoaded", typeEffect);

// Dark Theme Particles Configuration - Exact Match
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: { enable: true, value_area: 800 }
        },
        color: {
          value: ["#00d4ff", "#8b5cf6", "#ffffff"]
        },
        shape: {
          type: ["circle", "triangle"],
          stroke: { width: 2, color: "#00d4ff" }
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.2 }
        },
        size: {
          value: 4,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 }
        },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#00d4ff",
          opacity: 0.4,
          width: 1.5
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce"
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
    console.log("✨ Dark neon particles loaded!");
  } else {
    createDarkFallbackParticles();
  }
}

// Dark Fallback Particles
function createDarkFallbackParticles() {
  const container = document.getElementById('particles-js');
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${['#00d4ff', '#8b5cf6', '#ffffff'][Math.floor(Math.random() * 3)]};
      border-radius: 50%;
      opacity: ${Math.random() * 0.6 + 0.2};
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: darkFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    container.appendChild(particle);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes darkFloat {
      0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
      50% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
}

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initParticles, 200);
});

// Scroll Progress & Back to Top
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = Math.min(scrolled, 100) + '%';
  }
}

function updateBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (btn) {
    if (window.scrollY > 300) {
      btn.style.transform = 'translateY(0)';
      btn.style.opacity = '1';
    } else {
      btn.style.transform = 'translateY(20px)';
      btn.style.opacity = '0';
    }
  }
}

// Optimized scroll handler
function handleScroll() {
  updateScrollProgress();
  updateBackToTop();
}

window.addEventListener('scroll', handleScroll);

// Back to top functionality
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Enhanced smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      
      const icon = menuBtn.querySelector('i');
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fas fa-bars";
      } else {
        icon.className = "fas fa-times";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        const icon = menuBtn.querySelector('i');
        icon.className = "fas fa-bars";
      }
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add("hidden");
        const icon = menuBtn.querySelector('i');
        icon.className = "fas fa-bars";
      });
    });
  }
});

// Enhanced form handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form[action*="formspree"]');
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.3)';
        this.style.borderColor = '#00d4ff';
      });
      
      input.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
        this.style.borderColor = 'rgba(0, 212, 255, 0.3)';
      });
    });

    contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
      submitBtn.disabled = true;
      submitBtn.style.background = '#6b7280';
      
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
        submitBtn.style.background = '#00d4ff';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '#3b82f6';
          contactForm.reset();
        }, 2000);
      }, 1500);
    });
  }
});

// Enhanced card interactions
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.group');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      this.style.zIndex = '20';
      this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.zIndex = 'auto';
      this.style.boxShadow = 'none';
    });
  });
});

// Console message
console.log(`
🌟 Dark Neon Portfolio Loaded!
📧 Contact: jaykumargirase11@gmail.com
💼 LinkedIn: https://linkedin.com/in/jaykumar-girase-874210272
🐙 GitHub: https://github.com/jaykumargirase11

✨ Features:
• Dark Theme with Neon Blue Accents
• Interactive Particle Background
• 3D Flip Cards
• Smooth Animations
• Mobile Responsive

Portfolio successfully transformed! 🚀
`);
