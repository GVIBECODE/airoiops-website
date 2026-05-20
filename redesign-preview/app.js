/* AIROIOPS redesign preview v5 - shared script. Every block guards
   for missing elements so the same file works on every page. */

/* ---- mobile nav ---- */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---- ROI calculator ---- */
(function () {
  var hours = document.getElementById('hours');
  var rate = document.getElementById('rate');
  var roiNum = document.getElementById('roi-num');
  if (!hours || !rate || !roiNum) return;
  var hoursOut = document.getElementById('hours-out');
  var rateOut = document.getElementById('rate-out');
  function update() {
    hoursOut.textContent = hours.value + ' hrs';
    rateOut.textContent = '$' + rate.value + '/hr';
    var annual = hours.value * rate.value * 52 * 0.6;
    roiNum.textContent = '$' + Math.round(annual).toLocaleString('en-US');
  }
  hours.addEventListener('input', update);
  rate.addEventListener('input', update);
  update();
})();

/* ---- department tabs ---- */
(function () {
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.panel');
  if (!tabs.length) return;
  function show(name) {
    tabs.forEach(function (t) {
      var on = t.dataset.panel === name;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach(function (p) {
      p.classList.toggle('is-active', p.dataset.panel === name);
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t.dataset.panel); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        var next = e.key === 'ArrowRight'
          ? (i + 1) % tabs.length
          : (i - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        show(tabs[next].dataset.panel);
      }
    });
  });
})();

/* ---- FAQ accordion ---- */
(function () {
  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    var ico = item.querySelector('.faq-ico');
    q.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
      if (ico) ico.textContent = open ? '–' : '+';
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();

/* ---- count-up on scroll ---- */
(function () {
  var nums = document.querySelectorAll('[data-target]');
  if (!nums.length || !('IntersectionObserver' in window)) return;
  function run(el) {
    var target = parseFloat(el.dataset.target);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var comma = el.hasAttribute('data-comma');
    var start = null, dur = 1300;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = prefix + (comma ? val.toLocaleString('en-US') : val) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.5 });
  nums.forEach(function (n) { io.observe(n); });
})();

/* ---- preview form ---- */
(function () {
  var form = document.getElementById('qual-form');
  var done = document.getElementById('form-done');
  if (!form || !done) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    done.style.display = 'block';
    done.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
