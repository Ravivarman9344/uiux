// --- Set current year in footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// --- Scroll to Top Button ---
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// // --- Form Submission Prevention (for demo purposes) ---
// const contactForm = document.getElementById('contact-form');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Thank you for reaching out, Ravivarman! (This is a demo alert. In production, connect this to a service like Formspree or EmailJS.)');
//     contactForm.reset();
// });

// --- Mobile Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==========================================================================
// SCROLL REVEAL INTERSECTION OBSERVER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements you want to animate when scrolling down
    const targets = document.querySelectorAll('.project-card, .timeline-item, .skill-category, .about-text');

    // 1. Dynamically add the initial animation class. 
    // Doing this via JS ensures that if a user has JavaScript disabled, 
    // your website content is still perfectly visible to them.
    targets.forEach(target => {
        target.classList.add('reveal-init');
    });

    // 2. Set up the observer configuration
    const observerOptions = {
        root: null,         // Uses the browser viewport as the container
        threshold: 0.1,     // Triggers as soon as 10% of the element is visible
        rootMargin: '0px 0px -40px 0px' // Bottom margin offset so items trigger just before entering view
    };

    // 3. Create the observer callback function
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the active class to trigger the smooth CSS slide-up
                entry.target.classList.add('reveal-active');
                
                // Unobserve the element so the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Initialize and run the observer
    const observer = new IntersectionObserver(revealCallback, observerOptions);
    targets.forEach(target => observer.observe(target));
});