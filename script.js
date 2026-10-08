(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.querySelector('.theme-toggle');
  var themeIcon = document.querySelector('.theme-icon');
  var themeLabel = document.querySelector('.theme-label');
  var menuToggle = document.querySelector('.menu-toggle');
  var navMenu = document.querySelector('.nav-menu');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-menu > a'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var year = document.getElementById('current-year');

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';

    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    if (themeIcon) themeIcon.textContent = isDark ? '🌙' : '🌞';
    if (themeLabel) themeLabel.textContent = isDark ? 'Dark mode' : 'Light mode';

    try {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // The site still works when localStorage is unavailable.
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  function closeMenu() {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-menu-open');
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('is-menu-open', isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (year) year.textContent = new Date().getFullYear();

  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  if ('IntersectionObserver' in window) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

    sections.forEach(function (section) { activeObserver.observe(section); });
  }
}());
