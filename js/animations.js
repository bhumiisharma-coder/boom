// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.hero-btns', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.from('.hero-stats', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.9,
    ease: 'power3.out'
});

// Animated Background for Features
const featureBoxes = document.querySelectorAll('.feature-box');
featureBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        gsap.to(box.querySelector('.feature-wave'), {
            duration: 0.5,
            opacity: 0.3,
            ease: 'power2.out'
        });
    });
    
    box.addEventListener('mouseleave', () => {
        gsap.to(box.querySelector('.feature-wave'), {
            duration: 0.5,
            opacity: 0.1,
            ease: 'power2.out'
        });
    });
});

// Course Card Hover Animation
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1.03,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Scroll Animations with GSAP
gsap.utils.toArray('.animate-on-scroll').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Floating Elements Animation
const floatingElements = document.querySelectorAll('.float');
floatingElements.forEach(element => {
    gsap.to(element, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
});

// Background Pattern Animation
const animatedBgElements = document.querySelectorAll('.animated-bg');
animatedBgElements.forEach(element => {
    gsap.to(element, {
        backgroundPositionX: '100%',
        duration: 20,
        repeat: -1,
        ease: 'linear'
    });
});

// Text Animation on Scroll
const textAnimateElements = document.querySelectorAll('.text-animate');
textAnimateElements.forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
            gsap.to(element, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power3.out'
            });
        }
    });
});

// Parallax Effect for Hero Section
gsap.to('.hero-video-overlay', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    opacity: 0.8
});

// Animated Gradient Text
const gradientTextElements = document.querySelectorAll('.text-gradient');
gradientTextElements.forEach(element => {
    gsap.to(element, {
        backgroundPositionX: '100%',
        duration: 5,
        repeat: -1,
        ease: 'linear'
    });
});

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.classList.add('scroll-progress');
document.body.appendChild(scrollProgress);

gsap.to(scrollProgress, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
        scrub: 0.5
    }
});

// Interactive Mouse Follow Effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    gsap.to('.cursor-follower', {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create cursor follower if not exists
    if (!document.querySelector('.cursor-follower')) {
        const cursorFollower = document.createElement('div');
        cursorFollower.classList.add('cursor-follower');
        document.body.appendChild(cursorFollower);
    }
    
    // Animate elements with delay
    gsap.utils.toArray('.animate-delay').forEach((element, index) => {
        gsap.from(element, {
            duration: 1,
            opacity: 0,
            y: 20,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Animate course cards with stagger
    gsap.from('.course-card', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.courses',
            start: 'top 80%'
        }
    });
});





// Page Hero Animation
gsap.from('.page-hero .hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.page-hero .hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

// Team Member Hover Animation
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        gsap.to(member.querySelector('.member-image img'), {
            duration: 0.5,
            scale: 1.05,
            ease: 'power2.out'
        });
        
        gsap.to(member.querySelector('.social-links'), {
            duration: 0.3,
            bottom: 0,
            ease: 'power2.out'
        });
    });
    
    member.addEventListener('mouseleave', () => {
        gsap.to(member.querySelector('.member-image img'), {
            duration: 0.5,
            scale: 1,
            ease: 'power2.out'
        });
        
        gsap.to(member.querySelector('.social-links'), {
            duration: 0.3,
            bottom: -50,
            ease: 'power2.out'
        });
    });
});

// Feature Card Animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -10,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// Accordion Animation
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.classList.contains('active');
        
        if (isOpen) {
            gsap.to(content, {
                duration: 0.3,
                maxHeight: 0,
                ease: 'power2.out',
                onComplete: () => {
                    btn.classList.remove('active');
                }
            });
        } else {
            btn.classList.add('active');
            gsap.to(content, {
                duration: 0.3,
                maxHeight: content.scrollHeight + 'px',
                ease: 'power2.out'
            });
        }
    });
});

// Tab Animation
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        const tabContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
        
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(content => {
            gsap.to(content, {
                duration: 0.3,
                opacity: 0,
                y: 20,
                ease: 'power2.out',
                onComplete: () => {
                    content.classList.remove('active');
                }
            });
        });
        
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        
        // Show selected tab
        btn.classList.add('active');
        tabContent.classList.add('active');
        gsap.fromTo(tabContent, 
            { opacity: 0, y: 20 },
            { duration: 0.3, opacity: 1, y: 0, ease: 'power2.out' }
        );
    });
});

// Counter Animation for About Page
function animateAboutCounters() {
    const counters = document.querySelectorAll('.about-section .counter');
    if (!counters.length) return;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        
        const updateCounter = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            
            counter.textContent = value.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    });
}

// Initialize about page counters when scrolled to
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateAboutCounters();
            aboutObserver.unobserve(aboutSection);
        }
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// CTA Section Animation
gsap.from('.cta-section', {
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Map Animation
const mapSection = document.querySelector('.map-section');
if (mapSection) {
    gsap.from(mapSection, {
        scrollTrigger: {
            trigger: mapSection,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}