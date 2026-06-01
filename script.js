// ============================================
// GRAIKY — demo site interactions
// ============================================

(function() {
  'use strict';

  // ----- Nav: solid background on scroll -----
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Burger mobile -----
  const burger = document.getElementById('burger');
  const links = document.querySelector('.nav__links');
  burger.addEventListener('click', () => {
    links.classList.toggle('is-open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('is-open'));
  });

  // ----- Menu tabs -----
  const tabs = document.querySelectorAll('.menu__tab');
  const panels = document.querySelectorAll('.menu__panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === target));
    });
  });

  // ----- Marquee: duplicate track for seamless loop -----
  const track = document.querySelector('.marquee__track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  // ----- Reveal on scroll -----
  const reveals = document.querySelectorAll('.concept, .hero-product, .menu, .breads, .press, .ig, .restos');
  reveals.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

  // ----- Smooth scroll offset for sticky nav -----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

})();
