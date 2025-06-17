// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    const emailField = document.getElementById('email');
    const replytoField = document.getElementById('replyto');
    
    // Sync email with hidden replyto field
    emailField.addEventListener('input', function() {
        replytoField.value = this.value;
    });

    contactForm.addEventListener('submit', function(e) {
        // Validate form before submission
        const isValid = validateForm();
        
        if (!isValid) {
            e.preventDefault();
            showMessage('error', 'Please fill in all required fields correctly.');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin btn-icon';
        
        // Let Formspree handle the actual submission
        // Form will redirect to success page automatically
    });

    function validateForm() {
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Form validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
        }
        
        if (field.type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
        }
        
        if (isValid) {
            field.classList.remove('error');
            field.style.borderColor = 'var(--primary-color)';
        } else {
            field.classList.add('error');
            field.style.borderColor = 'var(--secondary-color)';
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }    
    // Message display function
    function showMessage(type, text) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const message = document.createElement('div');
        message.className = `form-message ${type}`;
        message.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${text}</span>
        `;
        
        // Style the message
        message.style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 10px;
            font-weight: 600;
            background: ${type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 'rgba(255, 0, 128, 0.1)'};
            color: ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
            border: 1px solid ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
        `;
        
        // Insert message after form
        contactForm.parentNode.insertBefore(message, contactForm.nextSibling);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 11) {
                    // UK format
                    value = value.replace(/(\d{5})(\d{3})(\d{3})/, '$1 $2 $3');
                }
            }
            e.target.value = value;
        });
    }
    
    // Character counter for message field
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxLength = 500;
        
        // Create counter
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.8rem;
            color: var(--text-gray);
            margin-top: 0.5rem;
        `;
        messageField.parentNode.appendChild(counter);
        
        // Update counter
        function updateCounter() {
            const remaining = maxLength - messageField.value.length;
            counter.textContent = `${remaining} characters remaining`;
            
            if (remaining < 50) {
                counter.style.color = 'var(--secondary-color)';
            } else {
                counter.style.color = 'var(--text-gray)';
            }
        }
        
        messageField.addEventListener('input', updateCounter);
        updateCounter();
    }
});