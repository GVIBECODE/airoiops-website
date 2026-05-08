/* AIROIOPS v2 / vanilla JS for the editorial preview */
(function () {
  "use strict";

  // ---- Set masthead date ----
  const today = document.getElementById("today");
  if (today) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    today.textContent = months[d.getMonth()] + ", " + d.getFullYear();
  }

  // ---- Counter animation on scroll ----
  // Elements with data-counter get their final value as a number.
  // data-prefix and data-suffix optional.
  const counters = document.querySelectorAll("[data-counter]");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatNum(n, target) {
    // If target had commas in big numbers, format with commas
    if (target >= 1000) {
      return Math.round(n).toLocaleString("en-US");
    }
    return Math.round(n).toString();
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.counter) || 0;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";

    if (prefersReduced) {
      el.textContent = prefix + formatNum(target, target) + suffix;
      return;
    }

    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent = prefix + formatNum(value, target) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- IntersectionObserver: counters + reveal ----
  if ("IntersectionObserver" in window) {
    const counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (c) { counterIO.observe(c); });

    // Reveal animation: tag everything below the fold
    const candidates = document.querySelectorAll(
      ".section-head, .offer-item, .act, .menu-row, .case, .bio-body, .faq-item, .bookform, .fig"
    );
    candidates.forEach(function (el) { el.classList.add("reveal"); });

    const revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger items in the same parent for a typewriter feel
          const peers = entry.target.parentElement
            ? Array.from(entry.target.parentElement.querySelectorAll(".reveal"))
            : [];
          const idx = peers.indexOf(entry.target);
          const delay = Math.max(0, idx) * 80;
          setTimeout(function () {
            entry.target.classList.add("in");
          }, delay);
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    candidates.forEach(function (el) { revealIO.observe(el); });
  } else {
    // Fallback: just fill the values
    counters.forEach(function (c) {
      const target = parseFloat(c.dataset.counter) || 0;
      const prefix = c.dataset.prefix || "";
      const suffix = c.dataset.suffix || "";
      c.textContent = prefix + formatNum(target, target) + suffix;
    });
  }

  // ---- Smooth scroll for in-page anchors ----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  // ---- Keyboard hint: Escape closes any open FAQ items ----
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".faq-item[open]").forEach(function (d) { d.removeAttribute("open"); });
    }
  });

  // ---- Form: light client-side polish (does not block Netlify post) ----
  const form = document.querySelector('form[name="assessment-qualifier"]');
  if (form) {
    form.addEventListener("submit", function () {
      const btn = form.querySelector('button[type="submit"] span:first-child');
      if (btn) btn.textContent = "Submitting...";
    });
  }

  // ---- Heard-from: show free-text input when "Other" is selected ----
  function syncHeardOther() {
    const checked = document.querySelector('input[name="heard_from"]:checked');
    const value = checked ? checked.value : null;
    document.querySelectorAll(".bf-other-input").forEach(function (input) {
      const isOther = value === "Other";
      input.classList.toggle("is-visible", isOther);
      input.required = isOther;
      if (!isOther) input.value = "";
    });
  }
  document.querySelectorAll('input[name="heard_from"]').forEach(function (radio) {
    radio.addEventListener("change", syncHeardOther);
  });
  syncHeardOther();
})();
