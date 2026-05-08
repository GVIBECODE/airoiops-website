/* ============================================================
   AIROIOPS v7 / Ops Console
   ============================================================ */

(function () {
  'use strict';

  /* --------- Theme toggle (CSS custom-properties) --------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'airoiops-v7-theme';

  const stored = (() => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  })();
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = cur === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    });
  }

  /* --------- Animated KPI counters (rAF) --------- */
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 1600;
    const startTs = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTs;
      const t = Math.min(elapsed / duration, 1);
      const v = target * easeOut(t);
      const formatted = decimals > 0
        ? v.toFixed(decimals)
        : Math.floor(v).toLocaleString('en-US');
      el.textContent = formatted;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString('en-US');
    };
    requestAnimationFrame(tick);
  };

  /* --------- IntersectionObserver: trigger counters + bars --------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        if (target.matches('[data-counter]')) {
          animateCounter(target);
        }
        if (target.classList.contains('proof-stats')) {
          target.classList.add('in-view');
        }
        io.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach((c) => io.observe(c));
  document.querySelectorAll('.proof-stats').forEach((p) => io.observe(p));

  /* --------- Live data simulation --------- */
  const m = {
    hours: document.getElementById('m-hours'),
    roi: document.getElementById('m-roi'),
    lead: document.getElementById('m-lead'),
    assess: document.getElementById('m-assess'),
    waste: document.getElementById('m-waste'),
    builds: document.getElementById('m-builds'),
    leadTimer: document.getElementById('leadTimer'),
    syncTime: document.getElementById('syncTime'),
  };

  let leadMins = 17;
  let hours = 1247;
  const startedAt = Date.now();

  const fmt = (n) => n.toLocaleString('en-US');

  // tick: every 8s, slight increment to hours, jitter on lead recovery
  setInterval(() => {
    hours += Math.random() < 0.7 ? 1 : 0;
    if (m.hours) m.hours.textContent = fmt(hours);

    // lead recovered timer: random reset between 1 to 60 min
    leadMins = Math.random() < 0.25
      ? Math.floor(Math.random() * 6) + 1
      : leadMins + 1;
    if (m.lead) m.lead.textContent = leadMins + 'm ago';
    if (m.leadTimer) m.leadTimer.textContent = leadMins;

    // sync time
    if (m.syncTime) {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      m.syncTime.textContent = elapsed < 60
        ? elapsed + 's ago'
        : Math.floor(elapsed / 60) + 'm ago';
    }
  }, 8000);

  // periodic small ROI jitter (4.0 to 4.4)
  setInterval(() => {
    const r = (4.0 + Math.random() * 0.4).toFixed(1);
    if (m.roi) m.roi.textContent = r + 'x';
  }, 14000);

  // gentle assessment counter
  setInterval(() => {
    if (m.assess && Math.random() < 0.15) {
      const cur = parseInt(m.assess.textContent, 10) || 12;
      m.assess.textContent = cur + 1;
    }
  }, 45000);

  /* --------- Build filter chips --------- */
  const chips = document.querySelectorAll('.chip');
  const builds = document.querySelectorAll('.build');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.getAttribute('data-filter');
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      builds.forEach((b) => {
        const cat = b.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          b.classList.remove('hidden');
        } else {
          b.classList.add('hidden');
        }
      });
    });
  });

  /* --------- Conditional "Other" text input --------- */
  const heardRadios = document.querySelectorAll('input[name="heard_from"]');
  const heardOther = document.getElementById('heardOther');

  const updateHeardOther = () => {
    if (!heardOther) return;
    const checked = document.querySelector('input[name="heard_from"]:checked');
    const isOther = checked && checked.value === 'Other';
    heardOther.classList.toggle('show', !!isOther);
    if (isOther) {
      heardOther.setAttribute('required', 'required');
    } else {
      heardOther.removeAttribute('required');
      heardOther.value = '';
    }
  };

  heardRadios.forEach((r) => r.addEventListener('change', updateHeardOther));
  updateHeardOther();

  /* --------- Smooth scroll for in-page anchors --------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* --------- Duplicate ticker track for seamless loop --------- */
  const tickerTrack = document.getElementById('tickerTrack');
  if (tickerTrack) {
    const clone = tickerTrack.cloneNode(true);
    clone.removeAttribute('id');
    clone.setAttribute('aria-hidden', 'true');
    // append clone children to original track for seamless -50% loop
    Array.from(clone.children).forEach((child) => tickerTrack.appendChild(child));
  }

})();
