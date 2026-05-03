const hours = document.getElementById('hours');
const rate = document.getElementById('rate');
const hoursOut = document.getElementById('hours-out');
const rateOut = document.getElementById('rate-out');
const roiNum = document.getElementById('roi-num');

let displayed = 23400;

function fmt(n) { return '$' + Math.round(n).toLocaleString(); }

function animateTo(target) {
  const start = displayed;
  const diff = target - start;
  const dur = 450;
  const t0 = performance.now();
  function tick(t) {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    displayed = start + diff * eased;
    roiNum.textContent = fmt(displayed);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function calc() {
  const h = +hours.value;
  const r = +rate.value;
  const annual = h * r * 52 * 0.6;
  hoursOut.textContent = h + ' hrs';
  rateOut.textContent = '$' + r + '/hr';
  animateTo(annual);
}

hours.addEventListener('input', calc);
rate.addEventListener('input', calc);
calc();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.card, .stat, .steps li, .proof-card, .about-grid > div, .final-inner').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
