// Mobile Navigation Toggle - REMOVED for better responsive design

// Countdown Timer
function initCountdown() {
    // Set the date we're counting down to (July 4th, 2025, 6PM)
    const countDownDate = new Date("Jul 4, 2025 18:00:00").getTime();
    
    // Update the count down every 1 second
    const countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="countdown"
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        
        if (daysElement) daysElement.innerHTML = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.innerHTML = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.innerHTML = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.innerHTML = seconds.toString().padStart(2, '0');
        
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(countdownInterval);
            const countdownContainer = document.querySelector('.countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <h3>EVENT IS LIVE!</h3>
                    <p style="font-size: 1.5rem; color: var(--primary-color); font-weight: 700;">
                        🎉 The party is happening NOW! 🎉
                    </p>
                `;
            }
        }
    }, 1000);
}
// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Particle animation effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s infinite linear;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        particlesContainer.appendChild(particle);
    }
}

// Navbar background change on scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initSmoothScrolling();
    createParticles();
    initNavbarScroll();
});

// Add particle float animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);