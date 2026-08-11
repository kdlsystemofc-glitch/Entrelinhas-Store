/* ==========================================================================
   ENTRELINHAS STORE — CINEMATIC INTERACTIVE SCRIPT
   Phase 07.1 Implementation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* 1. STICKY HEADER SCROLL EFFECT */
  const siteHeader = document.getElementById('site-header');
  
  const handleScroll = () => {
    if (window.scrollY > 60) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* 2. MOBILE NAVIGATION MENU TOGGLE */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
      });
    });
  }

  /* 3. INTERSECTION OBSERVER SCROLL REVEALS */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    // Select elements to reveal on scroll
    const revealElements = document.querySelectorAll(
      '.comparison-card, .lookbook-card, .trust-item, .step-card, .review-card, .section-header, .historia-content, .media-card-framed, .store-photo-card, .location-info, .location-map-wrapper'
    );

    revealElements.forEach((el, idx) => {
      el.classList.add('reveal-on-scroll');
      // Add stagger delay based on grid siblings
      const siblingIndex = idx % 4;
      if (siblingIndex > 0) {
        el.classList.add(`delay-${siblingIndex}`);
      }
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Unobserve once revealed
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* 4. COLLECTION CATEGORY FILTERING TABS */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lookbookCards = document.querySelectorAll('.lookbook-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      lookbookCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        
        if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* 5. SMOOTH ANCHOR SCROLLING */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
