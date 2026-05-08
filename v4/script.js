/* AIROIOPS v4. Brutalist cardboard. Minimal JS. */

(function () {
  "use strict";

  // ---------------------------------------------------------
  // Conditional "Other" text input toggle on heard_from radio
  // ---------------------------------------------------------
  function initHeardFromOther() {
    var radios = document.querySelectorAll('input[name="heard_from"]');
    var wrap = document.getElementById("heardFromOtherWrap");
    if (!wrap || !radios.length) return;

    var input = wrap.querySelector('input[name="heard_from_other"]');

    function update() {
      var checked = document.querySelector('input[name="heard_from"]:checked');
      var isOther = checked && checked.value === "Other";
      if (isOther) {
        wrap.hidden = false;
        if (input) {
          input.required = true;
          // small delay before focus so layout settles
          setTimeout(function () { input.focus(); }, 60);
        }
      } else {
        wrap.hidden = true;
        if (input) {
          input.required = false;
          input.value = "";
        }
      }
    }

    radios.forEach(function (r) {
      r.addEventListener("change", update);
    });

    update();
  }

  // ---------------------------------------------------------
  // Smooth-scroll any anchor to its target with offset
  // ---------------------------------------------------------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var href = a.getAttribute("href");
        if (!href || href === "#") return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // ---------------------------------------------------------
  // Reveal-on-scroll for section bodies (subtle).
  // CSS handles hero load. This adds gentle reveal to lower
  // sections without making the page feel jumpy.
  // ---------------------------------------------------------
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    var prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) return;

    var targets = document.querySelectorAll(".manila, .build-card, .bp-step, .proof-stat, .why-cell");
    if (!targets.length) return;

    targets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
      el.style.transition = "opacity 520ms ease, transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1)";
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // small stagger by index within a batch
          var delay = (i % 6) * 70;
          setTimeout(function () {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          io.unobserve(el);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

    targets.forEach(function (el) { io.observe(el); });
  }

  // ---------------------------------------------------------
  // Init
  // ---------------------------------------------------------
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initHeardFromOther();
      initSmoothScroll();
      initReveal();
    });
  } else {
    initHeardFromOther();
    initSmoothScroll();
    initReveal();
  }
})();
