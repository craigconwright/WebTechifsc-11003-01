/* ===========================================
   NASA Mars Rovers - JavaScript
   Author: Craig Conwright
   =========================================== */

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== Contact Form Validation ==========
    var contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting
            event.preventDefault();
            
            // Get form values
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var message = document.getElementById('message').value.trim();
            var responseDiv = document.getElementById('form-response');
            
            // Simple validation
            if (name === '') {
                showResponse('Please enter your name.', 'error');
                return;
            }
            
            if (email === '') {
                showResponse('Please enter your email address.', 'error');
                return;
            }
            
            // Basic email validation
            if (!isValidEmail(email)) {
                showResponse('Please enter a valid email address.', 'error');
                return;
            }
            
            if (message === '') {
                showResponse('Please enter a message.', 'error');
                return;
            }
            
            // If all validation passes, show success message
            showResponse('Thank you, ' + name + '! Your message has been received. We will respond to ' + email + ' soon.', 'success');
            
            // Clear the form
            contactForm.reset();
        });
    }
    
    // Function to validate email format
    function isValidEmail(email) {
        // Simple email pattern check
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    // Function to show form response
    function showResponse(message, type) {
        var responseDiv = document.getElementById('form-response');
        responseDiv.textContent = message;
        responseDiv.className = type; // 'success' or 'error'
    }
    
    
    // ========== Current Year in Footer ==========
    // Automatically update copyright year
    var footerYear = document.querySelector('#site-footer p');
    if (footerYear) {
        var currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
    
    
    // ========== Smooth Scroll for Internal Links ==========
    var internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                var targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    // ========== Highlight Active Navigation Link ==========
    // Get current page filename
    var currentPage = window.location.pathname.split('/').pop();
    
    // If on root, default to index.html
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }
    
    // Find and highlight the matching nav link
    var navLinks = document.querySelectorAll('.main-header nav a');
    
    navLinks.forEach(function(link) {
        var linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    
    // ========== Console Welcome Message ==========
    console.log('Welcome to NASA Mars Rovers!');
    console.log('This website was created as a student project.');
    
});