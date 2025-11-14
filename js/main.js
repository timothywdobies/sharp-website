// Sharp Website - Main JavaScript

// Email Capture Functionality
document.addEventListener('DOMContentLoaded', function() {

  // Handle email form submissions
  const emailForms = document.querySelectorAll('.email-form');

  emailForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const emailInput = this.querySelector('.email-input');
      const submitButton = this.querySelector('.btn-primary');
      const email = emailInput.value;

      // Disable form while submitting
      submitButton.disabled = true;
      submitButton.textContent = 'Joining...';

      // Simulate API call (replace with your actual email service integration)
      setTimeout(() => {
        // Log email (in production, send to your email service)
        console.log('Email submitted:', email);

        // Show success message
        const formContainer = this.closest('.email-capture');
        formContainer.innerHTML = `
          <div class="success-message">
            <h3>You're on the list.</h3>
            <p>We'll keep you posted on Drop 001.</p>
          </div>
        `;
      }, 1000);
    });
  });

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage ||
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === 'index.html' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

});

// Smooth scroll for anchor links
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
