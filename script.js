// ==========================================
// THEME SWITCHER
// TODO: Implement theme switching with localStorage
// ==========================================

const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

// Check for saved theme preference and apply it
const currentTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', currentTheme);

// Add click event listener to toggle theme
themeToggle.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // One full spin, then back to normal (removed when the animation ends)
    themeToggle.classList.add('spinning');
    themeToggle.addEventListener('animationend', () => themeToggle.classList.remove('spinning'), { once: true });
});

// ==========================================
// SMOOTH SCROLLING FOR NAVIGATION
// ==========================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// TODO: Implement scroll-triggered animations
// ==========================================

// Intersection Observer for entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
    });
}, observerOptions);

// Observe the sections AND the two grids (the grids carry stagger-children)
document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => {
    observer.observe(el);
});

// ==========================================
// PARALLAX EFFECT
// TODO: Implement parallax scrolling for hero section
// ==========================================

// TODO: Add scroll event listener for parallax effect

// ==========================================
// TYPING ANIMATION
// TODO: Implement typing effect for hero title
// ==========================================

// TODO: Create typing animation function

// ==========================================
// PROJECT CARD INTERACTIONS
// ==========================================

// Add click handlers to project cards for more interactivity
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // You can add modal or expand functionality here
        console.log('Project clicked:', this.querySelector('h3').textContent);
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// TODO: Apply debounce to scroll event handlers