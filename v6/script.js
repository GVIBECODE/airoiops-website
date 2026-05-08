/* AIROIOPS / Volume I, No. 6
   The Operator Quarterly. Minimal scripting; the page does the work. */

(function () {
  'use strict';

  // Conditional 'Other' text input toggle for heard_from radios
  function bindHeardFromToggle() {
    var radios = document.querySelectorAll('input[name="heard_from"]');
    var otherInput = document.querySelector('.heard-other-input');
    if (!radios.length || !otherInput) return;

    function update() {
      var selected = document.querySelector('input[name="heard_from"]:checked');
      var isOther = selected && selected.value === 'Other';
      if (isOther) {
        otherInput.classList.add('is-visible');
        // focus only on user action, not initial render
        if (document.activeElement && document.activeElement.name === 'heard_from') {
          setTimeout(function () { otherInput.focus(); }, 50);
        }
      } else {
        otherInput.classList.remove('is-visible');
        otherInput.value = '';
      }
    }

    Array.prototype.forEach.call(radios, function (r) {
      r.addEventListener('change', update);
    });
    update();
  }

  // Smooth-scroll polyfill helper for in-page anchors (modern browsers handle via CSS;
  // this accounts for the sticky masthead so anchors don't hide under it).
  function bindAnchorScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var masthead = document.querySelector('.masthead-top');
        var offset = masthead ? masthead.getBoundingClientRect().height + 8 : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  // Lightweight reveal-on-scroll for non-cover sections
  function bindReveal() {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var targets = document.querySelectorAll(
      '.dossier-item, .method-step, .query, .ledger, .field-article, .ct-row'
    );
    Array.prototype.forEach.call(targets, function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 600ms cubic-bezier(0.2,0.7,0.1,1), transform 600ms cubic-bezier(0.2,0.7,0.1,1)';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = (i % 4) * 60;
          setTimeout(function () {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          io.unobserve(el);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  function init() {
    bindHeardFromToggle();
    bindAnchorScroll();
    bindReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
