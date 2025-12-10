// ===================================
// MARS ROVERS WEBSITE - SCRIPT.JS
// Simple JavaScript for Beginners
// ===================================

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the contact form
    const contactForm = document.getElementById('contactForm');
    
    // Check if we're on the contact page (form exists)
    if (contactForm) {
        // Add event listener for form submission
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting
            event.preventDefault();
            
            // Validate the form
            if (validateForm()) {
                // If validation passes, show success message
                showSuccessMessage();
                // Clear the form
                contactForm.reset();
            }
        });
    }
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add "Back to Top" button functionality
    addBackToTop();
});

// ===================================
// FORM VALIDATION FUNCTION
// ===================================
function validateForm() {
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Check if name is empty
    if (name === '') {
        alert('Please enter your name.');
        document.getElementById('name').focus();
        return false;
    }
    
    // Check if name is at least 2 characters
    if (name.length < 2) {
        alert('Name must be at least 2 characters long.');
        document.getElementById('name').focus();
        return false;
    }
    
    // Check if email is empty
    if (email === '') {
        alert('Please enter your email address.');
        document.getElementById('email').focus();
        return false;
    }
    
    // Simple email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        return false;
    }
    
    // Check if subject is selected
    if (subject === '') {
        alert('Please select a subject.');
        document.getElementById('subject').focus();
        return false;
    }
    
    // Check if message is empty
    if (message === '') {
        alert('Please enter a message.');
        document.getElementById('message').focus();
        return false;
    }
    
    // Check if message is at least 10 characters
    if (message.length < 10) {
        alert('Message must be at least 10 characters long.');
        document.getElementById('message').focus();
        return false;
    }
    
    // All validations passed
    return true;
}

// ===================================
// EMAIL VALIDATION HELPER FUNCTION
// ===================================
function isValidEmail(email) {
    // Simple email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// ===================================
// SHOW SUCCESS MESSAGE FUNCTION
// ===================================
function showSuccessMessage() {
    // Hide the form
    const form = document.getElementById('contactForm');
    form.style.display = 'none';
    
    // Show the success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Scroll to the success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Optional: Reset form and show it again after 5 seconds
    setTimeout(function() {
        successMessage.style.display = 'none';
        form.style.display = 'block';
        form.reset();
    }, 5000);
}

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
function addSmoothScrolling() {
    // Get all links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each anchor link
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Get the target section id
            const targetId = this.getAttribute('href');
            
            // Check if target exists
            if (targetId !== '#' && document.querySelector(targetId)) {
                event.preventDefault();
                
                // Scroll to the target smoothly
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// BACK TO TOP BUTTON
// ===================================
function addBackToTop() {
    // Create the button element
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑ Top';
    backToTopBtn.setAttribute('id', 'backToTop');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #D96B43;
        color: white;
        border: none;
        padding: 15px 20px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 16px;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    
    // Add the button to the page
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Add hover effect
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#C0502A';
        this.style.transform = 'translateY(-2px)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#D96B43';
        this.style.transform = 'translateY(0)';
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// BONUS: LOG PAGE VISIT (OPTIONAL)
// ===================================
// This is just to show JavaScript is working
console.log('Mars Rovers Website JavaScript Loaded Successfully! 🚀');
console.log('Current Page:', document.title);