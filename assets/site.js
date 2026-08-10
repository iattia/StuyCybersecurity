document.addEventListener('DOMContentLoaded', () => {
  // 1. Active Tab Highlighting for Main Pages & Sub-pages
  const currentPath = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  
  const sectionMap = {
    'index.html': 'index.html',
    'guides.html': 'guides.html',
    'learning-paths.html': 'guides.html',
    'internet.html': 'guides.html',
    'hygiene.html': 'guides.html',
    'defense.html': 'guides.html',
    'secure-coding.html': 'guides.html',
    'ctfguide.html': 'CTFGuide.html',
    'certifications.html': 'certifications.html',
    'careers.html': 'careers.html',
    'history.html': 'history.html'
  };

  // Default to certifications for study guide pages ending in -guide.html
  let activeHref = sectionMap[currentPath];
  if (!activeHref && currentPath.includes('-guide.html')) {
    activeHref = 'certifications.html';
  }
  if (!activeHref) {
    activeHref = 'index.html';
  }

  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.toLowerCase() === activeHref.toLowerCase()) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // 2. Mobile Menu Toggle Setup
  const headerInner = document.querySelector('.header-inner');
  const mainNav = document.querySelector('.main-nav');

  if (headerInner && mainNav && !document.querySelector('.nav-toggle')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'nav-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML = '<span class="nav-toggle-icon"><span></span><span></span><span></span></span>';

    headerInner.insertBefore(toggleBtn, mainNav);

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('is-open') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
        mainNav.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
