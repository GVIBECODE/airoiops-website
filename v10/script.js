/* ==========================================================
   AIROIOPS v10  /  chat engine + fallback wiring
   vanilla js, no frameworks. keyword routing, scripted answers,
   progressive form collection that POSTs to netlify under the
   exact assessment-qualifier schema.
   ========================================================== */

(function () {
  "use strict";

  // ---------- elements ----------
  const thread = document.getElementById("chat-thread");
  const presetsEl = document.getElementById("chat-presets");
  const composer = document.getElementById("chat-composer");
  const input = document.getElementById("chat-input");
  const restartBtn = document.getElementById("composer-restart");
  const sendBtn = composer ? composer.querySelector(".composer-send") : null;

  // ---------- pricing + content (matches live site) ----------
  const CONTENT = {
    welcome: "hey, i'm the AIROIOPS assistant. i type so you can read the offer in plain language. tap a chip below or ask anything.",
    offer:
      "the core thing is an <strong>AI Business Assessment</strong>. flat <strong>$1,000</strong>, delivered in <strong>48 hours</strong> from a 60 minute discovery call. you get a <strong>12 to 18 page roadmap</strong> ranked by ROI, with payback windows and a 90 day plan.",
    floor:
      "if i can't point to <strong>20% ROI</strong> inside the roadmap, you don't pay. that's the floor.",
    builds: {
      lead: "if a recommendation hits, we can build it. four common shapes:",
      tiles: [
        { price: "$1,500+", name: "Zapier automation", body: "glue your existing tools. crm, forms, email, billing." },
        { price: "$2,500+", name: "Custom GPT", body: "trained on your sops, voice, and historical data." },
        { price: "$3,500+", name: "Speed-to-Lead agent", body: "voice or sms agent that answers leads in 60 seconds, 24/7." },
        { price: "$4,500+", name: "Process optimization", body: "a workflow rebuilt end-to-end. best for ops drag." }
      ],
      footer: "those are floors, not ceilings. final scope ladders up only when 20% ROI is on the table."
    },
    retainer: "$<strong>1,500/month</strong> retainer if you want a long term operator. ongoing tuning, new automations, and a standing slot to think with you. cancel any month.",
    proof: {
      lead: "proof case is a <strong>las vegas residential service business</strong>, run by the same operator. real numbers:",
      stats: [
        { num: "1,000+", label: "unconverted leads recovered" },
        { num: "$4,500+", label: "monthly ad waste eliminated" },
        { num: "13 hrs", label: "/ week of operator time back" },
        { num: "$4,168", label: "/ month new recurring revenue" }
      ],
      link: "<a class='b-link' href='/case-study'>read the full case study &rarr;</a>"
    },
    geo: "<strong>las vegas, henderson, summerlin, pahrump</strong> in person if useful. <strong>remote anywhere in the us</strong> for the same price. zoom and a shared doc work fine.",
    turnaround: "48 hours from the discovery call. you book, we talk for an hour, then two business days later the roadmap shows up in your inbox.",
    scope: "12 to 18 pages. tooling audit, ranked opportunity list, build estimates with ROI math, recommended first three plays, and a 90 day plan tailored to your team size and budget.",
    integration: "yes. we usually keep what's working and replace one or two things, not a stack rip-and-replace. tell me your tools and i'll be specific.",
    technical: "no. the whole point is that an <em>operator</em> who knows operations does the AI work, so you don't have to.",
    operator: "i'm <strong>gianny</strong>. i run a residential service business in las vegas and i built airoiops to bring AI leverage to other small operators. i do the assessments myself.",
    contact: "easiest path is the chat below. i'll ask 9 questions, you'll be done in two minutes, and i send a calendly link inside one business day.",
    notSure: "no worries. start with a tap on a chip below. price, turnaround, the proof case, or jump straight to booking."
  };

  // ---------- preset prompts ----------
  const PRESETS = [
    { id: "price",      label: "what does it cost",          intent: "price" },
    { id: "turnaround", label: "how fast is 48 hours",        intent: "turnaround" },
    { id: "proof",      label: "show me the proof case",      intent: "proof" },
    { id: "scope",      label: "what's in the roadmap",       intent: "scope" },
    { id: "geo",        label: "do you work outside vegas",   intent: "geo" },
    { id: "tech",       label: "i'm not technical, ok?",      intent: "technical" },
    { id: "book",       label: "book the assessment",         intent: "book" }
  ];

  // ---------- intent matcher ----------
  // simple keyword routing. order matters: more specific first.
  const INTENTS = [
    { name: "book",       keys: ["book", "schedule", "calendly", "sign up", "get started", "start"] },
    { name: "price",      keys: ["price", "cost", "how much", "pricing", "$", "fee", "expensive", "cheap"] },
    { name: "turnaround", keys: ["fast", "48", "turnaround", "delivery", "how long", "when", "timeline"] },
    { name: "proof",      keys: ["proof", "case study", "case", "results", "example", "client", "testimonial", "real"] },
    { name: "geo",        keys: ["vegas", "las vegas", "henderson", "summerlin", "remote", "where", "location", "outside", "city", "state", "country"] },
    { name: "scope",      keys: ["roadmap", "scope", "deliverable", "pages", "what do i get", "what's included", "include"] },
    { name: "builds",     keys: ["build", "zapier", "gpt", "agent", "speed-to-lead", "automation", "implement"] },
    { name: "retainer",   keys: ["retainer", "monthly", "ongoing", "subscription"] },
    { name: "integration",keys: ["integrate", "tools", "stack", "existing", "current", "we use", "we have"] },
    { name: "technical",  keys: ["technical", "developer", "code", "non-technical", "tech", "skill", "ai expert"] },
    { name: "operator",   keys: ["who", "gianny", "founder", "you", "operator", "background"] },
    { name: "guarantee",  keys: ["guarantee", "refund", "money back", "risk"] },
    { name: "floor",      keys: ["roi", "20%", "floor", "minimum"] },
    { name: "hi",         keys: ["hi", "hello", "hey", "yo", "sup"] }
  ];

  function detectIntent(text) {
    const t = text.toLowerCase().trim();
    if (!t) return "unknown";
    for (const intent of INTENTS) {
      for (const k of intent.keys) {
        if (t.includes(k)) return intent.name;
      }
    }
    return "unknown";
  }

  // ---------- bubble factory ----------
  function row(kind) {
    const r = document.createElement("div");
    r.className = "bubble-row " + kind;
    return r;
  }

  function bubble(kind, html) {
    const r = row(kind);
    const b = document.createElement("div");
    b.className = "bubble " + kind;
    b.innerHTML = html;
    r.appendChild(b);
    return { row: r, bubble: b };
  }

  function appendRow(rNode) {
    thread.appendChild(rNode);
    requestAnimationFrame(() => { thread.scrollTop = thread.scrollHeight; });
  }

  // ---------- typing indicator ----------
  function showTyping() {
    const { row: r, bubble: b } = bubble("agent", '<span class="typing"><span></span><span></span><span></span></span>');
    appendRow(r);
    return r;
  }

  // ---------- typewriter effect ----------
  function typeInto(targetBubble, html, speed) {
    return new Promise(resolve => {
      // strip html for typing pass, but keep tags positions
      // simpler approach: type plain text first, then swap in formatted html on completion.
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const plain = tempDiv.textContent || "";
      let i = 0;
      targetBubble.textContent = "";
      const tick = speed || 14;
      function step() {
        if (i >= plain.length) {
          targetBubble.innerHTML = html;
          requestAnimationFrame(() => { thread.scrollTop = thread.scrollHeight; });
          return resolve();
        }
        targetBubble.textContent = plain.slice(0, ++i);
        thread.scrollTop = thread.scrollHeight;
        setTimeout(step, tick);
      }
      step();
    });
  }

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

  // emit a single agent message with typing pause + typewriter
  async function agentSay(html, opts) {
    opts = opts || {};
    const typingRow = showTyping();
    await wait(opts.delay || 480);
    typingRow.remove();
    const { row: r, bubble: b } = bubble("agent", "");
    appendRow(r);
    await typeInto(b, html, opts.speed);
  }

  function userSay(text) {
    const { row: r } = bubble("user", escapeHtml(text));
    appendRow(r);
  }

  function systemSay(text) {
    const { row: r } = bubble("system", escapeHtml(text));
    appendRow(r);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------- rich payload renderers ----------
  function renderBuildsBlock() {
    const tilesHtml = CONTENT.builds.tiles.map(t =>
      `<div class="b-tile">
         <div class="b-tile-price">${t.price}</div>
         <div class="b-tile-name">${t.name}</div>
         <div class="b-tile-body">${t.body}</div>
       </div>`
    ).join("");
    return `${CONTENT.builds.lead}<div class="b-grid">${tilesHtml}</div><div style="margin-top:10px;font-size:12.5px;color:var(--ink-mute)">${CONTENT.builds.footer}</div>`;
  }

  function renderProofBlock() {
    const stats = CONTENT.proof.stats.map(s =>
      `<div class="b-stat"><span class="b-stat-num">${s.num}</span><span class="b-stat-label">${s.label}</span></div>`
    ).join("");
    return `${CONTENT.proof.lead}<div class="b-stat-row">${stats}</div><div style="margin-top:10px">${CONTENT.proof.link}</div>`;
  }

  // ---------- intent answers ----------
  async function answer(intent) {
    switch (intent) {
      case "hi":
        await agentSay("hey. tap a chip or just type a question. price, proof, geography, whatever you care about.");
        break;
      case "price":
        await agentSay(CONTENT.offer);
        await agentSay(CONTENT.floor);
        break;
      case "turnaround":
        await agentSay(CONTENT.turnaround);
        break;
      case "scope":
        await agentSay(CONTENT.scope);
        break;
      case "proof":
        await agentSay(renderProofBlock());
        break;
      case "geo":
        await agentSay(CONTENT.geo);
        break;
      case "builds":
        await agentSay(renderBuildsBlock());
        break;
      case "retainer":
        await agentSay(CONTENT.retainer);
        break;
      case "integration":
        await agentSay(CONTENT.integration);
        break;
      case "technical":
        await agentSay(CONTENT.technical);
        break;
      case "operator":
        await agentSay(CONTENT.operator);
        break;
      case "guarantee":
        await agentSay("no money-back guarantee, by design. instead, you get a <strong>shared dashboard</strong> with the metrics that define success, and we both watch them. transparency beats a refund clause.");
        break;
      case "floor":
        await agentSay(CONTENT.floor);
        break;
      case "book":
        await startBookingFlow();
        break;
      case "unknown":
      default:
        await agentSay("good question. i don't have a scripted answer for that one, but i'll cover it on the discovery call. want to book it now? type <em>yes</em> or tap <strong>book the assessment</strong>.");
        break;
    }
  }

  // ---------- presets ----------
  function renderPresets() {
    presetsEl.innerHTML = "";
    PRESETS.forEach(p => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "preset-chip";
      chip.dataset.intent = p.intent;
      chip.dataset.id = p.id;
      chip.innerHTML = `<span class="preset-chip-glyph">/</span> ${p.label}`;
      chip.addEventListener("click", () => {
        if (chip.classList.contains("used")) return;
        chip.classList.add("used");
        userSay(p.label);
        if (p.intent === "book") {
          startBookingFlow();
        } else {
          answer(p.intent);
        }
      });
      presetsEl.appendChild(chip);
    });
  }

  function resetPresets() {
    presetsEl.querySelectorAll(".preset-chip").forEach(c => c.classList.remove("used"));
  }

  // ==========================================================
  // booking flow / collects exact form schema, posts to netlify
  // ==========================================================
  const FORM_STEPS = [
    {
      key: ["first_name", "last_name"],
      ask: "let's get you on the calendar. what's your <strong>first and last name</strong>?",
      type: "name"
    },
    {
      key: "email",
      ask: "what email should i send the calendly link to?",
      type: "email"
    },
    {
      key: "business",
      ask: "what's your <strong>business name</strong>?",
      type: "text"
    },
    {
      key: "what",
      ask: "in one sentence, what does your business do? <em>we do [X] for [Y] in [Z].</em>",
      type: "text",
      placeholder: "we do [X] for [Y] in [Z]."
    },
    {
      key: "team_size",
      ask: "how big is the team?",
      type: "select",
      options: ["Solo / just me", "2-5 people", "6-20 people", "21-50 people", "50+ people"]
    },
    {
      key: "time_sink",
      ask: "what's the <strong>#1 task</strong> that eats your time every week? be specific. <em>'lead follow-up'</em> beats <em>'admin stuff.'</em>",
      type: "textarea"
    },
    {
      key: "ai_tools",
      ask: "what AI tools are you using today? tap any that apply.",
      type: "multi",
      options: [
        "None",
        "ChatGPT occasional",
        "ChatGPT daily",
        "Custom GPTs",
        "Zapier or Make",
        "AI voice agent"
      ]
    },
    {
      key: "heard_from",
      ask: "how did you hear about us?",
      type: "single",
      options: [
        "Google search",
        "LinkedIn",
        "Instagram",
        "Facebook",
        "Skool community",
        "Friend or referral",
        "Other"
      ],
      followUp: { triggerValue: "Other", key: "heard_from_other", ask: "where exactly?", type: "text" }
    },
    {
      key: "outcome",
      ask: "last one. if this delivers, what does <em>worth it</em> look like to you? <em>10 hrs back per week? $5k/mo new revenue? stop missing leads at night?</em>",
      type: "textarea"
    }
  ];

  let bookingState = null;

  async function startBookingFlow() {
    if (bookingState && bookingState.active) {
      await agentSay("we're already in the booking flow. answer the question above and i'll keep going.");
      return;
    }
    bookingState = {
      active: true,
      stepIndex: 0,
      data: {
        "form-name": "assessment-qualifier",
        "language": "en",
        "bot-field": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "business": "",
        "what": "",
        "team_size": "",
        "time_sink": "",
        "ai_tools": [],
        "heard_from": "",
        "heard_from_other": "",
        "outcome": ""
      }
    };
    composer.classList.add("booking");
    await agentSay("perfect. i'll ask 9 quick things. takes about two minutes.");
    runBookingStep();
  }

  async function runBookingStep() {
    const step = FORM_STEPS[bookingState.stepIndex];
    if (!step) {
      return submitBooking();
    }
    await agentSay(step.ask);
    renderStepInput(step);
  }

  function renderStepInput(step) {
    const r = row("agent");
    const wrap = document.createElement("div");
    wrap.className = "bubble agent bubble-form";
    r.appendChild(wrap);

    if (step.type === "name") {
      const fn = document.createElement("input");
      fn.type = "text";
      fn.placeholder = "first name";
      fn.autocomplete = "given-name";
      const ln = document.createElement("input");
      ln.type = "text";
      ln.placeholder = "last name";
      ln.autocomplete = "family-name";
      const submit = makeSubmitBtn();
      const advance = () => {
        if (!fn.value.trim() || !ln.value.trim()) { fn.focus(); return; }
        bookingState.data.first_name = fn.value.trim();
        bookingState.data.last_name = ln.value.trim();
        userSay(fn.value.trim() + " " + ln.value.trim());
        wrap.classList.add("done");
        wrap.innerHTML = "";
        bookingState.stepIndex++;
        runBookingStep();
      };
      submit.addEventListener("click", advance);
      [fn, ln].forEach(el => el.addEventListener("keydown", e => {
        if (e.key === "Enter") { e.preventDefault(); advance(); }
      }));
      wrap.appendChild(fn);
      wrap.appendChild(ln);
      wrap.appendChild(submit);
      appendRow(r);
      setTimeout(() => fn.focus(), 60);
      return;
    }

    if (step.type === "text" || step.type === "email" || step.type === "textarea") {
      const el = step.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
      if (step.type === "email") el.type = "email";
      else if (step.type === "text") el.type = "text";
      if (step.placeholder) el.placeholder = step.placeholder;
      if (step.type === "textarea") el.rows = 3;
      const submit = makeSubmitBtn();
      const advance = () => {
        const v = el.value.trim();
        if (!v) { el.focus(); return; }
        if (step.type === "email" && !/^\S+@\S+\.\S+$/.test(v)) {
          flashError(el, "needs a valid email");
          return;
        }
        bookingState.data[step.key] = v;
        userSay(v);
        wrap.innerHTML = "";
        wrap.classList.add("done");
        bookingState.stepIndex++;
        runBookingStep();
      };
      submit.addEventListener("click", advance);
      el.addEventListener("keydown", e => {
        if (e.key === "Enter" && (step.type !== "textarea" || (e.metaKey || e.ctrlKey))) {
          e.preventDefault();
          advance();
        }
      });
      wrap.appendChild(el);
      wrap.appendChild(submit);
      appendRow(r);
      setTimeout(() => el.focus(), 60);
      return;
    }

    if (step.type === "select") {
      const sel = document.createElement("select");
      const ph = document.createElement("option");
      ph.value = ""; ph.textContent = "select...";
      sel.appendChild(ph);
      step.options.forEach(o => {
        const op = document.createElement("option");
        op.value = o; op.textContent = o.toLowerCase();
        sel.appendChild(op);
      });
      const submit = makeSubmitBtn();
      const advance = () => {
        if (!sel.value) { sel.focus(); return; }
        bookingState.data[step.key] = sel.value;
        userSay(sel.value);
        wrap.innerHTML = "";
        bookingState.stepIndex++;
        runBookingStep();
      };
      submit.addEventListener("click", advance);
      sel.addEventListener("change", advance);
      wrap.appendChild(sel);
      wrap.appendChild(submit);
      appendRow(r);
      return;
    }

    if (step.type === "single" || step.type === "multi") {
      const optRow = document.createElement("div");
      optRow.className = "opt-row";
      const selected = new Set();
      step.options.forEach(o => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "opt";
        btn.textContent = o.toLowerCase();
        btn.dataset.value = o;
        btn.addEventListener("click", () => {
          if (step.type === "single") {
            optRow.querySelectorAll(".opt").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selected.clear();
            selected.add(o);
          } else {
            btn.classList.toggle("selected");
            if (btn.classList.contains("selected")) selected.add(o); else selected.delete(o);
          }
        });
        optRow.appendChild(btn);
      });
      const submit = makeSubmitBtn();
      const advance = async () => {
        if (selected.size === 0) return;
        if (step.type === "single") {
          const v = Array.from(selected)[0];
          bookingState.data[step.key] = v;
          userSay(v);
          // follow-up?
          if (step.followUp && v === step.followUp.triggerValue) {
            wrap.innerHTML = "";
            await agentSay(step.followUp.ask);
            // render an inline text field for the follow-up
            const r2 = row("agent");
            const wrap2 = document.createElement("div");
            wrap2.className = "bubble agent bubble-form";
            const inp = document.createElement("input");
            inp.type = "text";
            const sub2 = makeSubmitBtn();
            const advance2 = () => {
              const v2 = inp.value.trim();
              if (!v2) { inp.focus(); return; }
              bookingState.data[step.followUp.key] = v2;
              userSay(v2);
              wrap2.innerHTML = "";
              bookingState.stepIndex++;
              runBookingStep();
            };
            sub2.addEventListener("click", advance2);
            inp.addEventListener("keydown", e => {
              if (e.key === "Enter") { e.preventDefault(); advance2(); }
            });
            wrap2.appendChild(inp);
            wrap2.appendChild(sub2);
            r2.appendChild(wrap2);
            appendRow(r2);
            setTimeout(() => inp.focus(), 60);
            return;
          }
        } else {
          // multi
          const values = Array.from(selected);
          bookingState.data[step.key] = values;
          userSay(values.join(", "));
        }
        wrap.innerHTML = "";
        bookingState.stepIndex++;
        runBookingStep();
      };
      submit.addEventListener("click", advance);
      wrap.appendChild(optRow);
      wrap.appendChild(submit);
      appendRow(r);
      return;
    }
  }

  function makeSubmitBtn() {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "submit-mini";
    b.textContent = "next";
    return b;
  }

  function flashError(el, msg) {
    el.style.borderColor = "#d14";
    el.placeholder = msg;
    setTimeout(() => { el.style.borderColor = ""; }, 1800);
  }

  // submit booking via netlify-style POST
  async function submitBooking() {
    composer.classList.remove("booking");
    await agentSay("got everything. submitting...");
    const formData = new FormData();
    const d = bookingState.data;
    formData.append("form-name", "assessment-qualifier");
    formData.append("language", "en");
    formData.append("bot-field", "");
    formData.append("first_name", d.first_name);
    formData.append("last_name", d.last_name);
    formData.append("email", d.email);
    formData.append("business", d.business);
    formData.append("what", d.what);
    formData.append("team_size", d.team_size);
    formData.append("time_sink", d.time_sink);
    (d.ai_tools || []).forEach(v => formData.append("ai_tools", v));
    formData.append("heard_from", d.heard_from);
    if (d.heard_from_other) formData.append("heard_from_other", d.heard_from_other);
    formData.append("outcome", d.outcome);

    try {
      const body = new URLSearchParams();
      for (const [k, v] of formData.entries()) body.append(k, v);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });
      if (!res.ok) throw new Error("netlify response " + res.status);
      bookingState.active = false;
      systemSay("submitted");
      await agentSay("nice, " + escapeHtml(d.first_name) + ". i'll review tonight and send a calendly link to <strong>" + escapeHtml(d.email) + "</strong> inside one business day. talk soon.");
      // optional: redirect to /thanks.html after a beat
      setTimeout(() => { window.location.href = "/thanks.html"; }, 2400);
    } catch (err) {
      bookingState.active = false;
      systemSay("send failed");
      await agentSay("hmm, the post didn't go through. you can try again, or scroll down to the plain form below and submit there.");
      console.error("[airoiops chat] submit error:", err);
    }
  }

  // ==========================================================
  // composer wiring
  // ==========================================================
  if (composer) {
    composer.addEventListener("submit", e => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      input.value = "";
      // if we're inside booking flow, freeform text isn't routed; the inline forms handle input.
      if (bookingState && bookingState.active) {
        userSay(text);
        agentSay("answer the question above to keep going. i don't process freeform during booking.");
        return;
      }
      userSay(text);
      // shortcut: yes / book / start during a "want to book?" prompt
      const t = text.toLowerCase();
      if (t === "yes" || t === "y" || t === "book" || t === "start") {
        startBookingFlow();
        return;
      }
      const intent = detectIntent(text);
      answer(intent);
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      thread.innerHTML = "";
      bookingState = null;
      composer.classList.remove("booking");
      resetPresets();
      bootSequence();
    });
  }

  // ==========================================================
  // boot sequence
  // ==========================================================
  async function bootSequence() {
    systemSay("session started");
    await wait(220);
    await agentSay(CONTENT.welcome, { delay: 350, speed: 14 });
    await agentSay("here's the short version. <em>AI assessment for your business</em>... in <strong>48 hours</strong>... <strong>$1,000 flat</strong>.", { speed: 18 });
    await agentSay("ask anything below or tap a chip. when you're ready, say <em>book</em>.", { speed: 16 });
  }

  // ==========================================================
  // fallback form: conditional "Other" text input
  // ==========================================================
  function wireFallback() {
    const fb = document.getElementById("fallback-form");
    if (!fb) return;
    const radios = fb.querySelectorAll('input[name="heard_from"]');
    const other = document.getElementById("fb-heard-other");
    if (!radios || !other) return;
    radios.forEach(r => r.addEventListener("change", () => {
      const checked = fb.querySelector('input[name="heard_from"]:checked');
      if (checked && checked.value === "Other") {
        other.classList.add("show");
        other.required = true;
      } else {
        other.classList.remove("show");
        other.required = false;
        other.value = "";
      }
    }));
  }

  // ==========================================================
  // keyboard: esc scrolls to fallback
  // ==========================================================
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      const fb = document.getElementById("fallback");
      if (fb) fb.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // ==========================================================
  // init
  // ==========================================================
  function init() {
    if (thread) {
      renderPresets();
      bootSequence();
    }
    wireFallback();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
