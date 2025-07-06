// Initialize AOS
AOS.init({
    duration: 600,
    once: true,
    offset: 50
});

// Package tabs functionality
function showPackage(packageType) {
    // Hide all packages
    const packages = ['gold', 'silver', 'bronze'];
    packages.forEach(pkg => {
        const packageElement = document.getElementById('package-' + pkg);
        if (packageElement) {
            packageElement.classList.add('hidden');
            packageElement.classList.remove('animate-slide-in');
        }
    });
    
    // Remove active class from all tabs
    packages.forEach(pkg => {
        const tabElement = document.getElementById('tab-' + pkg);
        if (tabElement) {
            tabElement.classList.remove('tab-active');
            tabElement.classList.add('tab-inactive');
        }
    });
    
    // Show selected package
    const selectedPackage = document.getElementById('package-' + packageType);
    if (selectedPackage) {
        selectedPackage.classList.remove('hidden');
        selectedPackage.classList.add('animate-slide-in');
    }
    
    // Add active class to selected tab
    const selectedTab = document.getElementById('tab-' + packageType);
    if (selectedTab) {
        selectedTab.classList.remove('tab-inactive');
        selectedTab.classList.add('tab-active');
    }
}

// Initialize with Gold package visible
document.addEventListener('DOMContentLoaded', function() {
    showPackage('gold');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (nav) {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(17, 24, 39, 0.95)';
            nav.style.backdropFilter = 'blur(4px)';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
        }
    }
});

// Add floating animation to CTA buttons
document.querySelectorAll('.animate-float').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});

// Add pulse glow animation to hero CTA
const heroCta = document.querySelector('.hero-cta');
if (heroCta) {
    heroCta.classList.add('animate-pulse-glow');
}

// Add float animation to final CTA
const finalCta = document.querySelector('.final-cta');
if (finalCta) {
    finalCta.classList.add('animate-pulse-glow', 'animate-float');
}

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show');
    }
}

// Parallax effect check for mobile
function checkParallax() {
    const parallaxElements = document.querySelectorAll('.organizador-section, .publico-section, .estrutura-section, .pacotes-section, .final-section');
    if (window.innerWidth <= 768) {
        parallaxElements.forEach(element => {
            element.style.backgroundAttachment = 'scroll';
        });
    } else {
        parallaxElements.forEach(element => {
            element.style.backgroundAttachment = 'fixed';
        });
    }
}

// Check parallax on load and resize
window.addEventListener('load', checkParallax);
window.addEventListener('resize', checkParallax);

// Initialize animations on load
window.addEventListener('load', function() {
    // Add glow effect to titles
    const heroTitle = document.querySelector('.final-title');
    if (heroTitle) {
        heroTitle.classList.add('animate-glow');
    }
    
    // Ensure Gold package is shown by default
    showPackage('gold');
});