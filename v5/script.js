/* AIROIOPS v5 - long-form scroll novella behaviors */
(function(){
  'use strict';

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. Reveal-on-scroll for any .reveal element + chapter activation
  ---------------------------------------------------------------------- */
  if ('IntersectionObserver' in window){
    var revealObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          e.target.classList.add('is-in');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal, .chapter').forEach(function(el){
      revealObs.observe(el);
    });
  } else {
    /* fallback - just show everything */
    document.querySelectorAll('.reveal, .chapter').forEach(function(el){
      el.classList.add('is-in');
    });
  }

  /* ----------------------------------------------------------------------
     2. Active chapter rail tracking (which chapter is currently in view)
  ---------------------------------------------------------------------- */
  var rail = document.querySelectorAll('.rail-item');
  var chapters = document.querySelectorAll('.chapter');

  if (rail.length && chapters.length && 'IntersectionObserver' in window){
    var chapterObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          var ch = e.target.getAttribute('data-ch');
          rail.forEach(function(r){
            if (r.getAttribute('data-ch') === ch){
              r.classList.add('is-active');
            } else {
              r.classList.remove('is-active');
            }
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    chapters.forEach(function(c){ chapterObs.observe(c); });
  }

  /* ----------------------------------------------------------------------
     3. Scroll progress bar inside the rail
  ---------------------------------------------------------------------- */
  var progress = document.querySelector('.rail-progress span');
  if (progress){
    var ticking = false;
    var updateProgress = function(){
      var h = document.documentElement;
      var b = document.body;
      var st = h.scrollTop || b.scrollTop;
      var sh = (h.scrollHeight || b.scrollHeight) - h.clientHeight;
      var pct = sh > 0 ? Math.min(100, Math.max(0, (st / sh) * 100)) : 0;
      progress.style.height = pct.toFixed(2) + '%';
      ticking = false;
    };
    window.addEventListener('scroll', function(){
      if (!ticking){
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });
    updateProgress();
  }

  /* ----------------------------------------------------------------------
     4. Count-up animation for math numbers (Chapter V)
  ---------------------------------------------------------------------- */
  var nums = document.querySelectorAll('.math-num [data-target], .math-num[data-target]');

  function animateNumber(el){
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1600; /* ms */
    var start = null;

    if (prefersReducedMotion){
      el.textContent = target.toLocaleString('en-US') + suffix;
      return;
    }

    function frame(ts){
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      /* easeOutCubic */
      var eased = 1 - Math.pow(1 - p, 3);
      var current = Math.floor(target * eased);
      el.textContent = current.toLocaleString('en-US') + (p === 1 ? suffix : '');
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  if (nums.length && 'IntersectionObserver' in window){
    var numObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          animateNumber(e.target);
          numObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });

    nums.forEach(function(n){ numObs.observe(n); });
  } else {
    nums.forEach(animateNumber);
  }

  /* ----------------------------------------------------------------------
     5. "Other" text input toggle for heard_from radio
  ---------------------------------------------------------------------- */
  var heardRadios = document.querySelectorAll('input[name="heard_from"]');
  var heardOther = document.querySelector('input[name="heard_from_other"]');

  function toggleHeardOther(){
    if (!heardOther) return;
    var checked = document.querySelector('input[name="heard_from"]:checked');
    var isOther = checked && checked.value === 'Other';
    if (isOther){
      heardOther.hidden = false;
      heardOther.removeAttribute('hidden');
      heardOther.required = true;
      /* small focus delay for nicer feel */
      window.setTimeout(function(){ heardOther.focus(); }, 60);
    } else {
      heardOther.hidden = true;
      heardOther.setAttribute('hidden', '');
      heardOther.required = false;
      heardOther.value = '';
    }
  }
  heardRadios.forEach(function(r){
    r.addEventListener('change', toggleHeardOther);
  });
  toggleHeardOther();

  /* ----------------------------------------------------------------------
     6. Smooth-scroll polyfill for in-page rail clicks (Safari behavior)
        Native CSS smooth-scroll already handles this, but on click also
        update active rail item immediately for snappier feel.
  ---------------------------------------------------------------------- */
  document.querySelectorAll('.rail-item').forEach(function(item){
    item.addEventListener('click', function(){
      rail.forEach(function(r){ r.classList.remove('is-active'); });
      item.classList.add('is-active');
    });
  });

})();
