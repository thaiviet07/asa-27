/**
 * Asa Studio Website
 * Crafted by stoopiducky
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.stoopiducky-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Welcome Modal ("Follow the journey")
  const modal = document.getElementById('welcomeModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  function openModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  }));

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Auto show modal once after 2.5 seconds on desktop if not shown yet
  if (!sessionStorage.getItem('stoopiducky_modal_shown')) {
    setTimeout(() => {
      openModal();
      sessionStorage.setItem('stoopiducky_modal_shown', 'true');
    }, 2500);
  }

  // 3. Collaborations "Show more / Show less" toggle
  const collabToggleBtn = document.getElementById('collabToggleBtn');
  const collabHiddenItems = document.querySelectorAll('.stoopiducky-collab-hidden');
  let isCollabExpanded = false;

  if (collabToggleBtn) {
    collabToggleBtn.addEventListener('click', () => {
      isCollabExpanded = !isCollabExpanded;
      collabHiddenItems.forEach(item => {
        item.style.display = isCollabExpanded ? 'grid' : 'none';
      });
      collabToggleBtn.textContent = isCollabExpanded ? 'Show less' : 'Show more';
    });
  }

  // 4. Mobile navigation toggle
  const menuToggle = document.querySelector('.stoopiducky-menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }

  // 5. Scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stoopiducky-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stoopiducky-reveal').forEach(el => {
    observer.observe(el);
  });
});
