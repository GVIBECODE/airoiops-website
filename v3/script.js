/* AIROIOPS v3 :: Operator Terminal
   - Typewriter prompt
   - Live ROI ticker (incrementing numbers)
   - Clock + uptime + session id
   - Status bar live counters
   - Conditional Other-text-input for heard_from radios
*/

(function () {
  "use strict";

  /* ---------- session id + uptime + clock ---------- */
  const sessionId = document.getElementById("sessionId");
  const uptimeEl = document.getElementById("uptime");
  const clockEl = document.getElementById("clock");

  if (sessionId) {
    const n = Math.floor(10000 + Math.random() * 89999);
    sessionId.textContent = "SES-" + n;
  }

  const start = Date.now();
  function pad(n) { return n.toString().padStart(2, "0"); }
  function tickClock() {
    if (uptimeEl) {
      const s = Math.floor((Date.now() - start) / 1000);
      uptimeEl.textContent = pad(Math.floor(s / 3600)) + ":" +
                             pad(Math.floor((s % 3600) / 60)) + ":" +
                             pad(s % 60);
    }
    if (clockEl) {
      try {
        const fmt = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        });
        clockEl.textContent = fmt.format(new Date()) + " LV";
      } catch (e) {
        const d = new Date();
        clockEl.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + " LV";
      }
    }
  }
  tickClock();
  setInterval(tickClock, 1000);

  /* ---------- typewriter prompt ---------- */
  const typed = document.getElementById("typed");
  if (typed) {
    const lines = [
      "Tell me about your business",
      "Where is the time leak",
      "How many leads did you miss this month",
      "Run AI assessment // Las Vegas operator",
    ];
    let li = 0, ci = 0, deleting = false;
    function step() {
      const cur = lines[li];
      if (!deleting) {
        ci++;
        typed.textContent = cur.slice(0, ci);
        if (ci === cur.length) {
          deleting = true;
          return setTimeout(step, 1600);
        }
        setTimeout(step, 55 + Math.random() * 40);
      } else {
        ci--;
        typed.textContent = cur.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          li = (li + 1) % lines.length;
          return setTimeout(step, 350);
        }
        setTimeout(step, 22);
      }
    }
    setTimeout(step, 400);
  }

  /* ---------- live ticker (rolling numbers) ---------- */
  const tickers = document.querySelectorAll("[data-roll]");
  tickers.forEach((el) => {
    const baseRaw = el.getAttribute("data-roll");
    const base = parseFloat(baseRaw) || 0;
    const isMoney = el.classList.contains("t-money");
    const orig = el.textContent.trim();
    const origLen = orig.length;

    let cur = Math.max(0, base - Math.floor(base * 0.04));
    const target = base;

    function paint(val) {
      let s = String(Math.max(0, Math.floor(val)));
      let withComma = Number(s).toLocaleString("en-US");
      const padTo = isMoney ? Math.max(origLen - 1, withComma.length) : Math.max(origLen, withComma.length);
      while (withComma.length < padTo) withComma = "0" + withComma;
      el.textContent = isMoney ? "$" + withComma : withComma;
    }
    paint(cur);

    // ramp up to target then drift
    const stepInterval = setInterval(() => {
      if (cur < target) {
        const inc = Math.max(1, Math.ceil((target - cur) / 18));
        cur += inc;
        if (cur > target) cur = target;
        paint(cur);
        if (cur >= target) {
          clearInterval(stepInterval);
          // drift
          setInterval(() => {
            const drift = (Math.random() < 0.55) ? 1 : 0;
            cur = target + Math.floor(Math.random() * Math.max(2, Math.floor(target * 0.002)));
            paint(cur);
          }, 2400 + Math.random() * 1800);
        }
      }
    }, 70);
  });

  /* ---------- status bar live values ---------- */
  const sbSpend = document.getElementById("sbSpend");
  const sbWaste = document.getElementById("sbWaste");
  const sbLead = document.getElementById("sbLead");
  const sbQueue = document.getElementById("sbQueue");

  let spend = 8983;
  let waste = 4500;
  let leadMin = 14;
  let queue = 3;

  function fmtMoney(n) { return "$" + Number(Math.floor(n)).toLocaleString("en-US"); }

  setInterval(() => {
    spend += Math.floor(Math.random() * 7);
    if (sbSpend) sbSpend.textContent = fmtMoney(spend);
  }, 2200);

  setInterval(() => {
    waste += Math.floor(Math.random() * 4);
    if (sbWaste) sbWaste.textContent = fmtMoney(waste);
  }, 3700);

  setInterval(() => {
    leadMin = Math.max(1, leadMin + (Math.random() < 0.7 ? 1 : -2));
    if (leadMin > 59) leadMin = 1; // reset
    if (sbLead) sbLead.textContent = leadMin + " MIN AGO";
  }, 5200);

  setInterval(() => {
    queue = Math.max(0, Math.min(9, queue + (Math.random() < 0.5 ? 1 : -1)));
    if (sbQueue) sbQueue.textContent = String(queue);
  }, 4100);

  /* ---------- conditional "Other" text input ---------- */
  const otherWrap = document.getElementById("otherWrap");
  const otherInput = document.getElementById("heard_from_other");
  const radios = document.querySelectorAll('input[name="heard_from"]');

  function syncOther() {
    let selected = "";
    radios.forEach((r) => { if (r.checked) selected = r.value; });
    const isOther = selected === "Other";
    if (!otherWrap || !otherInput) return;
    if (isOther) {
      otherWrap.classList.add("is-visible");
      otherInput.required = true;
    } else {
      otherWrap.classList.remove("is-visible");
      otherInput.required = false;
      otherInput.value = "";
    }
  }
  radios.forEach((r) => r.addEventListener("change", syncOther));
  syncOther();

  /* ---------- subtle keyboard nav (F1-F6, F12) ---------- */
  document.addEventListener("keydown", (e) => {
    const map = {
      F1: "#offer", F2: "#proof", F3: "#menu",
      F4: "#how", F5: "#geo", F6: "#faq", F12: "#submit"
    };
    if (map[e.key]) {
      e.preventDefault();
      const el = document.querySelector(map[e.key]);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
})();
