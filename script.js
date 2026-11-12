/* ========================================
   Om Ji Verma - Portfolio JavaScript
   Handles mobile menu, scroll animations & interactivity
   ======================================== */

// --- 1. SELECT DOM ELEMENTS ---
const hamburger = document.querySelector('.hamburger'); // Mobile menu button
const navLinks = document.querySelector('#nav-links'); // The list of links
const reveals = document.querySelectorAll('.reveal'); // Elements with fade-in animation
const progressBars = document.querySelectorAll('.progress'); // Skill progress bars

// --- 2. MOBILE NAVIGATION TOGGLE ---
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Update aria attribute for accessibility
    const isOpen = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close the menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// --- 3. SCROLL REVEAL ANIMATION ---
// Checks if elements have scrolled into view, adds 'active' class
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150; // Pixels from bottom of screen

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

// --- 4. ANIMATE SKILL PROGRESS BARS ---
// Resets bars and animates them when skills section is visible
const animateSkills = () => {
    const progressBars = document.querySelectorAll('.progress');
    const cards = document.querySelectorAll('.skill-card');

    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            const bar = progressBars[index];
            // Get target width from data attribute
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, index * 100); // Stagger animation
        }
    });
};

// --- 5. FADE-IN FOR CARDS & CONTACT ITEMS ---
const fadeCards = () => {
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item, .timeline-item');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                card.style.transitionDelay = `${index * 0.05}s`;
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }
    });
};

// --- 6. EVENT LISTENERS ---
window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkills();
    fadeCards();
});

window.addEventListener('load', () => {
    revealOnScroll();
    animateSkills();
});

// --- 7. NAVBAR BACKGROUND ON SCROLL ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(11, 15, 25, 0.98)';
    } else {
        navbar.style.background = 'rgba(11, 15, 25, 0.95)';
    }
});
