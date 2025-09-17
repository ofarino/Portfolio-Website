// Enhanced Portfolio JavaScript with Gaming/Tech Features

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initGreeting();
    initParticles();
    initNavigation();
    initScrollEffects();
    initTypingAnimation();
    initProjectCardAnimations();
    initCursorTrail();
});

// Time-based greeting functionality
function initGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        // Add typing effect to greeting
        typeWriter(greetingElement, greeting, 100);
    }
}

// Typing animation effect
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Enhanced particle system
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    // Create floating code snippets
    const codeSnippets = [
        '{}', '[]', '()', '<>', '/>', '&&', '||', '==', '!=', '++', '--', 
        'fn', 'if', 'AI', 'ML', 'CSS', 'JS', 'py', 'C#', 'UF', 'dev'
    ];
    
    // Create animated particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random position and properties
        particle.style.cssText = `
            position: absolute;
            color: rgba(0, 212, 255, 0.3);
            font-family: 'Orbitron', monospace;
            font-size: ${Math.random() * 12 + 8}px;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            pointer-events: none;
            animation: floatUp ${Math.random() * 10 + 15}s linear infinite;
        `;
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 25000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 3000);
    
    // Add CSS for particle animation
    if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes floatUp {
                0% { 
                    transform: translateY(100vh) rotate(0deg); 
                    opacity: 0; 
                }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { 
                    transform: translateY(-100px) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Smooth scrolling navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Scroll-triggered animations
function initScrollEffects() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Typing animation for hero subtitle (removed for simplicity)
function initTypingAnimation() {
    // Keeping subtitle static for cleaner look
    return;
}

// Enhanced project card interactions
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-cards');
    
    projectCards.forEach(card => {
        // Add glitch effect on hover
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Add glitch animation CSS
    if (!document.getElementById('glitch-styles')) {
        const style = document.createElement('style');
        style.id = 'glitch-styles';
        style.textContent = `
            @keyframes glitch {
                0% { transform: translateY(-15px) scale(1.02); }
                20% { transform: translateY(-15px) scale(1.02) skew(0.5deg); }
                40% { transform: translateY(-15px) scale(1.02) skew(-0.5deg); }
                60% { transform: translateY(-15px) scale(1.02) skew(0.5deg); }
                80% { transform: translateY(-15px) scale(1.02) skew(-0.5deg); }
                100% { transform: translateY(-15px) scale(1.02); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Interactive cursor trail
function initCursorTrail() {
    const trail = [];
    const trailLength = 8;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(0, 212, 255, ${1 - i * 0.1});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(trailElement);
        trail.push(trailElement);
    }
    
    // Update trail position on mouse move
    document.addEventListener('mousemove', (e) => {
        trail.forEach((element, index) => {
            setTimeout(() => {
                element.style.left = e.clientX - 2 + 'px';
                element.style.top = e.clientY - 2 + 'px';
            }, index * 20);
        });
    });
}

// Skill tag hover effects
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            this.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.4)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Add Easter egg - Konami code
let konamiCode = [];
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === correctCode.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s ease infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        // Add rainbow animation
        if (!document.getElementById('rainbow-styles')) {
            const style = document.createElement('style');
            style.id = 'rainbow-styles';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    25% { filter: hue-rotate(90deg); }
                    50% { filter: hue-rotate(180deg); }
                    75% { filter: hue-rotate(270deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        konamiCode = [];
    }
});

// Performance optimization - throttle scroll events
function throttle(func, wait) {
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
