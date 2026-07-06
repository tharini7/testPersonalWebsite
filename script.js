/* ============================= */
/* PERSONAL WEBSITE - JAVASCRIPT */
/* ============================= */

/* SMOOTH SCROLLING FOR NAVIGATION LINKS */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ADD SCROLL ANIMATION CLASS */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.interest-card, .project-card, .journal-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

/* HIGHLIGHT ACTIVE NAVIGATION LINK */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* SIMPLE CONTACT FORM INTERACTION */
const contactBtns = document.querySelectorAll('.contact-btn');
contactBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-3px) scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

/* LOG A WELCOME MESSAGE TO CONSOLE */
console.log('%cWelcome to my Personal Website! 👋', 'font-size: 16px; color: #667eea; font-weight: bold;');
console.log('Feel free to explore and check out my projects!');