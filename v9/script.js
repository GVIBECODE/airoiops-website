/* ========================================================================
   AIROIOPS v9 - Vegas Neon
   - Heard-from "Other" toggle for conditional text input
   - Jackpot counter animation (split-flap style on viewport entry)
   - Reveal-on-scroll for sections
   - Smooth-scroll polish for in-page anchors
   ======================================================================== */

(function () {
  'use strict';

  // ---------- Heard-from "Other" conditional input ----------
  function syncHeardOtherInput() {
    var checked = document.querySelector('input[name="heard_from"]:checked');
    var value = checked ? checked.value : null;
    var inputs = document.querySelectorAll('.heard-other-input');
    inputs.forEach(function (input) {
      var isOther = value === 'Other';
      input.classList.toggle('is-visible', isOther);
      input.required = isOther;
      if (!isOther) input.value = '';
    });
  }
  document.querySelectorAll('input[name="heard_from"]').forEach(function (radio) {
    radio.addEventListener('change', syncHeardOtherInput);
  });
  syncHeardOtherInput();

  // ---------- Jackpot counter animation ----------
  // Animates each digit to its target value on scroll-in. The visual effect
  // reads like a casino split-flap rolling its way into 1,000+.
  function animateJackpot(root) {
    if (root.dataset.played === '1') return;
    root.dataset.played = '1';

    var digits = root.querySelectorAll('.digit');
    var duration = 1800;
    var start = performance.now();

    function tick(now) {
      var progress = Math.min(1, (now - start) / duration);
      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);

      digits.forEach(function (el, idx) {
        var target = parseInt(el.dataset.target || '0', 10);
        // Stagger each digit slightly so they "settle" in sequence
        var localStart = idx * 0.12;
        var localT = Math.max(0, Math.min(1, (eased - localStart) / (1 - localStart)));
        if (localT < 1) {
          // Roll random digits while spinning
          el.textContent = String(Math.floor(Math.random() * 10));
        } else {
          el.textContent = String(target);
        }
      });

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        digits.forEach(function (el) {
          el.textContent = String(parseInt(el.dataset.target || '0', 10));
        });
      }
    }
    requestAnimationFrame(tick);
  }

  // ---------- Reveal-on-scroll observer ----------
  var revealTargets = [].slice.call(document.querySelectorAll(
    '.bill-card, .floor-card, .routine-grid li, .poster-card, .section-head'
  ));
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(function (el) { revealer.observe(el); });

    var jackpot = document.getElementById('jackpot-counter');
    if (jackpot) {
      var jackpotObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateJackpot(entry.target);
            jackpotObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      jackpotObs.observe(jackpot);
    }
  } else {
    // Fallback: just reveal everything
    revealTargets.forEach(function (el) { el.classList.add('visible'); });
    var fallbackJackpot = document.getElementById('jackpot-counter');
    if (fallbackJackpot) animateJackpot(fallbackJackpot);
  }

  // ---------- Smooth-scroll for in-page anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ---------- Tilt the poster slightly on hover for depth ----------
  var poster = document.querySelector('.poster-card');
  if (poster && window.matchMedia('(hover: hover)').matches) {
    poster.addEventListener('mousemove', function (e) {
      var rect = poster.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      poster.style.transform = 'perspective(1200px) rotateY(' + (x * 4) + 'deg) rotateX(' + (-y * 4) + 'deg)';
    });
    poster.addEventListener('mouseleave', function () {
      poster.style.transform = '';
    });
  }
})();
