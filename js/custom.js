  function toggleMenu() {
    document.querySelector('.nav-wrapper').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('open');
  }

//
  function toggleMenu() {
    const nav = document.querySelector('.nav-wrapper');
    const burger = document.querySelector('.hamburger');
    const body = document.body;

    nav.classList.toggle('active');
    burger.classList.toggle('open');
    burger.classList.toggle('fixed'); 
    body.classList.toggle('lock-scroll');
  }
//

  const nav = document.querySelector('.nav-wrapper');
  const burger = document.querySelector('.hamburger');
  const body = document.body;
  const overlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    const isActive = nav.classList.toggle('active');
    burger.classList.toggle('open');
    burger.classList.toggle('fixed');
    body.classList.toggle('lock-scroll');
    overlay.classList.toggle('active');

    if (isActive) {
      document.addEventListener('click', handleOutsideClick);
      window.addEventListener('scroll', closeMenuOnScroll, { passive: true });
    } else {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', closeMenuOnScroll);
    }
  }

  function closeMenu() {
    nav.classList.remove('active');
    burger.classList.remove('open');
    burger.classList.remove('fixed');
    body.classList.remove('lock-scroll');
    overlay.classList.remove('active');

    document.removeEventListener('click', handleOutsideClick);
    window.removeEventListener('scroll', closeMenuOnScroll);
  }

  function handleOutsideClick(e) {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  }

  function closeMenuOnScroll() {
    if (nav.classList.contains('active')) {
      closeMenu();
    }
  }

  // Optional: close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
