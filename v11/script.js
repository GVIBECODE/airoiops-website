/* ============================================================
   AIROIOPS v11 / Live-aesthetic x v7-dynamics fusion
   - ROI calculator (live homepage carry-over)
   - Ticker auto-clone for seamless loop
   - Animated KPI counters via rAF + IntersectionObserver
   - Live data simulation (hours, ROI, lead timer, sync time, ticker fields)
   - Filter chips for builds grid
   - Status dots + light/dark theme toggle
   - Conditional "Other" input on heard_from
   - prefers-reduced-motion respected (animations skipped, intervals slowed)
   ============================================================ */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------- THEME TOGGLE (CSS custom properties) --------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'airoiops-v11-theme';

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

  /* --------- ROI CALCULATOR (live homepage carry-over) --------- */
  const hours = document.getElementById('hours');
  const rate  = document.getElementById('rate');
  const hoursOut = document.getElementById('hours-out');
  const rateOut  = document.getElementById('rate-out');
  const roiNum   = document.getElementById('roi-num');
  const hasRoiCalc = hours && rate && hoursOut && rateOut && roiNum;

  let displayed = 23400;

  const fmtUSD = (n) => '$' + Math.round(n).toLocaleString('en-US');

  function animateRoi(target) {
    if (!hasRoiCalc) return;
    if (reducedMotion) {
      displayed = target;
      roiNum.textContent = fmtUSD(target);
      return;
    }
    const start = displayed;
    const diff  = target - start;
    const dur   = 450;
    const t0    = performance.now();
    function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      displayed = start + diff * eased;
      roiNum.textContent = fmtUSD(displayed);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function calc() {
    if (!hasRoiCalc) return;
    const h = +hours.value;
    const r = +rate.value;
    const annual = h * r * 52 * 0.6;
    hoursOut.textContent = h + ' hrs';
    rateOut.textContent  = '$' + r + '/hr';
    animateRoi(annual);
  }

  if (hasRoiCalc) {
    hours.addEventListener('input', calc);
    rate.addEventListener('input', calc);
    calc();
  }

  /* --------- ANIMATED KPI COUNTERS (rAF) --------- */
  const counters = document.querySelectorAll('[data-counter]');

  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (reducedMotion) {
      el.textContent = decimals > 0
        ? target.toFixed(decimals)
        : Math.floor(target).toLocaleString('en-US');
      return;
    }
    const duration = 1600;
    const startTs = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTs;
      const t = Math.min(elapsed / duration, 1);
      const v = target * easeOut(t);
      el.textContent = decimals > 0
        ? v.toFixed(decimals)
        : Math.floor(v).toLocaleString('en-US');
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = decimals > 0
        ? target.toFixed(decimals)
        : target.toLocaleString('en-US');
    };
    requestAnimationFrame(tick);
  };

  /* --------- INTERSECTION OBSERVER: trigger counters + reveals --------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      if (target.matches('[data-counter]')) animateCounter(target);
      if (target.classList.contains('reveal')) target.classList.add('visible');
      io.unobserve(target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  counters.forEach((c) => io.observe(c));

  document.querySelectorAll('.card, .stat, .steps li, .proof-card, .about-grid > div, .final-inner, .kpi-card').forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });

  /* --------- LIVE DATA SIMULATION (ticker + KPI + sync) --------- */
  const m = {
    hours:  document.getElementById('m-hours'),
    roi:    document.getElementById('m-roi'),
    lead:   document.getElementById('m-lead'),
    assess: document.getElementById('m-assess'),
    waste:  document.getElementById('m-waste'),
    spend:  document.getElementById('m-spend'),
    builds: document.getElementById('m-builds'),
    leadTimer: document.getElementById('leadTimer'),
    syncTime:  document.getElementById('syncTime'),
  };

  let hoursLive = 317;
  let leadMins  = 14;
  let spendLive = 8983;
  const startedAt = Date.now();

  const fmt = (n) => n.toLocaleString('en-US');

  function bumpLive() {
    // gentle hours increment
    hoursLive += Math.random() < 0.6 ? 1 : 0;
    if (m.hours) m.hours.textContent = fmt(hoursLive);

    // lead timer drift, occasional reset
    leadMins = Math.random() < 0.22
      ? (Math.floor(Math.random() * 9) + 1)
      : leadMins + 1;
    if (m.lead) m.lead.textContent = leadMins + 'm ago';
    if (m.leadTimer) m.leadTimer.textContent = leadMins;

    // ai spend tracked drift up
    if (Math.random() < 0.5) spendLive += Math.floor(Math.random() * 19) + 3;
    if (m.spend) m.spend.textContent = '$' + fmt(spendLive);

    // sync timestamp
    if (m.syncTime) {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      m.syncTime.textContent = elapsed < 60
        ? 'synced ' + elapsed + 's ago'
        : 'synced ' + Math.floor(elapsed / 60) + 'm ago';
    }
  }

  // ROI multiple jitter (4.0 to 4.4)
  function bumpRoiMultiple() {
    if (!m.roi) return;
    const r = (4.0 + Math.random() * 0.4).toFixed(1);
    m.roi.textContent = r + 'x';
  }

  // assessments delivered tick (rare)
  function bumpAssess() {
    if (!m.assess) return;
    if (Math.random() < 0.18) {
      const cur = parseInt(m.assess.textContent, 10) || 12;
      m.assess.textContent = cur + 1;
    }
  }

  if (!reducedMotion) {
    setInterval(bumpLive, 7000);
    setInterval(bumpRoiMultiple, 13000);
    setInterval(bumpAssess, 45000);
  } else {
    // single static refresh so the timestamps are sane
    bumpLive();
  }

  /* --------- FILTER CHIPS (builds grid) --------- */
  const chips  = document.querySelectorAll('.chip');
  const builds = document.querySelectorAll('.build-card');

  function applyFilter(filter) {
    builds.forEach((b) => {
      const cat = b.getAttribute('data-cat');
      const show = filter === 'all' || cat === filter;
      b.classList.toggle('is-hidden', !show);
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.getAttribute('data-filter');
      chips.forEach((c) => {
        c.classList.toggle('is-active', c === chip);
        c.setAttribute('aria-selected', c === chip ? 'true' : 'false');
      });
      applyFilter(filter);
    });
  });

  /* --------- CONDITIONAL "OTHER" INPUT --------- */
  const heardRadios = document.querySelectorAll('input[name="heard_from"]');
  const heardOther  = document.querySelector('.heard-other-input');

  function syncHeardOtherInput() {
    if (!heardOther) return;
    const checked = document.querySelector('input[name="heard_from"]:checked');
    const isOther = checked && checked.value === 'Other';
    heardOther.classList.toggle('is-visible', !!isOther);
    if (isOther) {
      heardOther.setAttribute('required', 'required');
    } else {
      heardOther.removeAttribute('required');
      heardOther.value = '';
    }
  }
  heardRadios.forEach((r) => r.addEventListener('change', syncHeardOtherInput));
  syncHeardOtherInput();

  /* --------- TICKER: clone children for seamless -50% loop --------- */
  const tickerTrack = document.getElementById('tickerTrack');
  if (tickerTrack && !reducedMotion) {
    const items = Array.from(tickerTrack.children);
    items.forEach((node) => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      tickerTrack.appendChild(clone);
    });
  }

  /* --------- SMOOTH SCROLL --------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        }
      }
    });
  });

})();
