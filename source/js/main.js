/* ═══════════════════════════════════════════════════
   Nikita Rai — Portfolio
   Main JavaScript (multi-page)
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Sticky Nav Visibility (home page only — has banner) ── */
  var nav = document.getElementById('siteNav');
  var banner = document.querySelector('.banner');

  if (nav && banner) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('visible', window.scrollY > banner.offsetHeight);
    }, { passive: true });
  }

  /* ── Mobile Hamburger Menu ── */
  var hamburger = document.getElementById('navHamburger');
  var navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  /* ── Timeline Scroll Animation ── */
  var timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(function (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  var timelineObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  timelineItems.forEach(function (item) {
    timelineObs.observe(item);
  });

  /* ── Generic Fade-In Observer ── */
  var fadeItems = document.querySelectorAll('.fade-in');
  var fadeObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  fadeItems.forEach(function (el) { fadeObs.observe(el); });

  /* ── Chart Animations ── */
  var chartObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar').forEach(function (bar) {
          bar.style.height = bar.getAttribute('data-height') + '%';
        });
        entry.target.querySelectorAll('.team-bar-fill').forEach(function (fill) {
          fill.style.width = fill.getAttribute('data-width') + '%';
        });
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.chart-box, .bar-chart, .bento-tile').forEach(function (el) {
    chartObs.observe(el);
  });

  /* ── CTA Dropdown ── */
  document.addEventListener('click', function (e) {
    var dd = document.querySelector('.cta-dropdown');
    var btn = document.querySelector('.cta-btn');
    if (dd && !dd.contains(e.target) && e.target !== btn) {
      dd.classList.remove('open');
    }
  });

})();
