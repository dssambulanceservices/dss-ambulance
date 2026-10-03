/**
 * DSS Ambulance Service - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // Modal Open / Close Logic
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeModalBtn && bookingModal) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Toast Functionality
  function showToast(message, type = 'success') {
    let toast = document.getElementById('notificationToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'notificationToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    const icon = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Booking Form Submission (Hero & Modal Forms)
  const bookingForms = document.querySelectorAll('.ambulance-booking-form');
  bookingForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Booking';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Request...';
      }

      // Simulate Fast Dispatch confirmation
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();

        if (bookingModal && bookingModal.classList.contains('active')) {
          bookingModal.classList.remove('active');
          document.body.style.overflow = '';
        }

        showToast('Ambulance enquiry received! Our coordinator is calling you immediately. Call 7840089777 for urgent dispatch.', 'success');
      }, 900);
    });
  });

  // Set Active Nav Link Automatically based on Current Page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
