/**
 * DSS Ambulance Service - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    document.documentElement.classList.add('js');
    const mobileViewport = window.matchMedia('(max-width: 768px)');
    function closeMenu() {
      navLinks.classList.remove('active');
      navLinks.hidden = mobileViewport.matches;
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Open navigation menu');
      const icon = mobileToggle.querySelector('i');
      if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
    }

    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navLinks.hidden = mobileViewport.matches && !navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('active')));
      mobileToggle.setAttribute('aria-label', navLinks.classList.contains('active') ? 'Close navigation menu' : 'Open navigation menu');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
          navLinks.querySelector('a').focus();
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
        mobileToggle.focus();
      }
    });
    mobileViewport.addEventListener('change', () => {
      const focusedLink = navLinks.contains(document.activeElement);
      closeMenu();
      if (mobileViewport.matches && focusedLink) mobileToggle.focus();
    });
    navLinks.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    closeMenu();
  }

  // The hero is an illustration, not a dispatch status. Without JS it stays still.
  const heroScene = document.getElementById('heroScene');
  const animationToggle = document.getElementById('heroAnimationToggle');
  if (heroScene && animationToggle) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      heroScene.classList.toggle('is-animated', !reducedMotion.matches);
      animationToggle.hidden = reducedMotion.matches;
    };
    animationToggle.addEventListener('click', () => {
      const paused = heroScene.classList.toggle('is-paused');
      animationToggle.querySelector('i').className = paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
      animationToggle.querySelector('span').textContent = paused ? 'Play animation' : 'Pause animation';
    });
    reducedMotion.addEventListener('change', updateMotionPreference);
    updateMotionPreference();
  }

  // Forms stay disabled until online enquiries are explicitly enabled.
  document.querySelectorAll('.ambulance-booking-form').forEach((form) => {
    form.addEventListener('submit', (event) => event.preventDefault());
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
