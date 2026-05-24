const translations = {
  en: {
    'meta.title': 'AI Consulting for Business Owners | AIROIOPS',
    'nav.assessment': 'Assessment',
    'nav.builds': 'Builds',
    'nav.how': 'How it works',
    'nav.proof': 'Proof',
    'nav.customers': 'Customers',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.book': 'Book Call',

    'chooser.kicker': 'Pick your path',
    'chooser.h2': 'Two ways to <span class="grad">get started.</span>',
    'chooser.lede': 'Talk to our AI specialist right now, or grab a weekend slot with Gianny. Either way it is free.',
    'chooser.ai_title': 'Talk to our AI now',
    'chooser.ai_sub': 'A quick chat with Annie, our AI specialist. No scheduling. It is also a live demo of what we build.',
    'chooser.ai_btn': 'Start the call',
    'chooser.ai_end': 'End call',
    'chooser.zoom_title': 'Book a call with Gianny',
    'chooser.zoom_sub': 'Prefer a person. Grab a weekend slot.',
    'chooser.zoom_btn': 'Get started',
    'chooser.st_connecting': 'Calling Annie...',
    'chooser.st_connected': 'You are connected. Say hello to Annie.',
    'chooser.st_ended': 'Call ended. Gianny will follow up.',
    'chooser.st_error': 'Something went wrong starting the call. Please try again or book a video call.',

    'intakeopt.title': 'Your AI assessment, your way | AIROIOPS',
    'intakeopt.badge': 'You are confirmed',
    'intakeopt.h1': 'Your AI assessment, <span class="grad">your way.</span>',
    'intakeopt.lede': 'You are all set. Now pick how you want to do the deep interview. Both paths feed the same custom AI Roadmap Report.',
    'intakeopt.kicker': 'Two ways to do it',
    'intakeopt.h2': 'Talk it through, or <span class="grad">write it out.</span>',
    'intakeopt.voice_title': 'Talk it through with Annie',
    'intakeopt.voice_sub': 'A roughly 30 minute voice interview with Annie, our AI specialist. She walks you through the deep questions and you just talk. Nothing to type.',
    'intakeopt.voice_number': '<a href="tel:+17027066567">Call +1 (702) 706-6567</a>',
    'intakeopt.form_title': 'Write it out yourself',
    'intakeopt.form_sub': 'Prefer to type at your own pace. Fill the written deep-dive intake whenever it suits you and we take it from there.',
    'intakeopt.form_btn': 'Open the written intake',
    'intakeopt.close_h2': 'Either way, you get the same report.',
    'intakeopt.close_body': 'Your answers turn into a custom AI Roadmap Report, plus a short walk-through call. Pick whichever path feels easier and we will handle the rest.',
    'intakeopt.close_cta': 'Back to home',

    'hero.badge': 'Now booking 3 case-study spots at no charge',
    'hero.h1': 'AI consulting for operators. <span class="grad">Any size. Any vertical.</span>',
    'hero.lede': "We audit your operations, find your highest-leverage AI plays, and deliver a custom 12-18 page AI Roadmap inside 48 hours. Quick Wins you can ship yourself, transparent pricing for the bigger builds you'd rather hand off.",
    'hero.cta_primary': 'Book a Free Discovery Call',
    'hero.cta_ghost': 'See the Assessment',
    'hero.cta_alt_pre': 'Too busy for a call?',
    'hero.cta_alt_link': 'Talk to our AI specialist instead →',
    'hero.trust': '$1,500 fixed price · 48-hour delivery · DIY or hand off, your call',

    'roi.title': 'Live ROI Calculator',
    'roi.hours_label': 'Hours / week on repetitive work',
    'roi.rate_label': 'Effective hourly cost',
    'roi.subtext': 'Potential annual savings if we automate 60% of this',
    'roi.hours_unit': 'hrs',
    'roi.rate_unit': '/hr',

    'stats.days': 'hour turnaround',
    'stats.automations': 'Quick Wins per report',
    'stats.price': 'fixed price',
    'stats.refund': 'yours forever',

    'problems.kicker': "What you're actually fighting",
    'problems.h2': "Most AI consulting <span class=\"grad\">won't say this out loud.</span>",
    'problems.lede': 'Four leaks are eating most businesses right now, at every size. The tech stack is incidental. The leak is the problem.',
    'problems.c1_title': 'Hours burned on manual work',
    'problems.c1_body': "Quotes, follow-ups, invoices, inbox triage, scheduling. Most of it doesn't need you. Most of it doesn't get done well anyway. The day ends and you wonder where it went.",
    'problems.c2_title': 'Money leaking out the back door',
    'problems.c2_body': "Dead ad spend. Leads who texted at 9pm and never heard back. $50-an-hour labor on $0 work. Every leak is small. Stack them up and they're a whole employee's salary.",
    'problems.c3_title': 'No system that closes the loop',
    'problems.c3_body': "Lead drops in. Sits. Goes cold. Or you scramble at midnight to send a quote you'll forget you sent. Selling, but not converting, is the most expensive way to grow.",
    'problems.c4_title': 'Tools built for enterprise, not you',
    'problems.c4_body': "Most \"AI for business\" is sold by people who've never run one. Wrong stack, wrong price, wrong language. By the time you finish onboarding, the quarter's over.",

    'outcomes.kicker': 'What you actually get back',
    'outcomes.h2': "Forget the tools. <span class=\"grad\">This is what you're buying.</span>",
    'outcomes.lede': "The roadmap, the report, the automations. None of that is why you'd hire us. You're buying these four things. Everything else is just how we deliver them.",
    'outcomes.c1_label': 'Time',
    'outcomes.c1_title': 'Your nights and weekends back',
    'outcomes.c1_body': "Most operators we work with were burning 10 to 15 hours a week on quotes, follow-ups, invoices, and inbox triage. Most of that work doesn't need you. Get those hours back for family, for sleep, or for the moves only you can make.",
    'outcomes.c2_label': 'Money',
    'outcomes.c2_title': "The leaks you didn't know you had",
    'outcomes.c2_body': 'Dead ad spend. Leads who texted at 9pm and never heard back. Manual work paid at $50 an hour that should cost zero. The audit usually finds $20k to $50k a year in leak on the first pass. Plug it once, keep the savings every year after.',
    'outcomes.c3_label': 'Freedom',
    'outcomes.c3_title': "A business that doesn't need you for everything",
    'outcomes.c3_body': "Lead follow-up runs without you. Quotes go out without you. The small stuff stops eating the day so you can work on the business instead of in it. The point isn't to do AI. It's to be free of the $20-an-hour tasks that have been holding you hostage.",
    'outcomes.c4_label': 'Leverage',
    'outcomes.c4_title': 'Compounding, not one-time',
    'outcomes.c4_body': "An employee costs you again every month. The plays we install keep paying every month at zero extra cost. Year two is pure margin. That's the difference between hiring help and building leverage.",
    'outcomes.cta': 'Book a free Discovery Call',
    'outcomes.cta_alt': 'See how we deliver it',

    'assessment.kicker': 'The Assessment',
    'assessment.h2': 'What you actually get for <span class="grad">$1,500</span>.',
    'assessment.lede': "No 90-day discovery phase. No slide deck disguised as a deliverable. A 12-18 page custom roadmap with Quick Wins you can ship yourself, plus transparent pricing for the upsells if you'd rather hand off.",
    'assessment.c1_title': 'Operations Audit',
    'assessment.c1_body': 'Deep-dive on your tools, workflows, and data. We map every recurring task in your business and tag it for AI leverage.',
    'assessment.c2_title': 'Quick Wins You Can Ship',
    'assessment.c2_body': '5-7 DIY recommendations ranked by ROI and effort. Tools you can subscribe to, integrations you can configure in an afternoon, prompts you can paste into ChatGPT today.',
    'assessment.c3_title': 'Upsell Menu',
    'assessment.c3_body': "Optional priced builds for the bigger plays: Speed-to-Lead, Custom GPTs, Zapier automations. Pick what you want, skip what you don't. Every build is scoped before you commit, with a transparent floor price plus a percentage of your projected ROI.",
    'assessment.c4_title': 'AI Roadmap',
    'assessment.c4_body': 'The sequenced path from your first Quick Win to a fully AI-leveraged ops stack. Phased milestones, prioritized backlog, no fluff.',
    'assessment.cta': 'Book your free Discovery Call',
    'assessment.cta_alt': 'Or talk to our AI specialist',

    'surface.kicker': 'Where AI lands hardest',
    'surface.h2': "AI for <span class=\"grad\">every department.</span>",
    'surface.lede': 'From sales to operations to finance, every team across your business unlocks more once AI plugs into the right workflow.',
    'surface.dept_sales': 'Sales',
    'surface.dept_marketing': 'Marketing',
    'surface.dept_support': 'Support',
    'surface.dept_ops': 'Operations',
    'surface.dept_finance': 'Finance',
    'surface.cta_learn': 'Learn more',
    'surface.outcomes_label': 'Typical outcomes',
    'surface.disclaimer': 'Numbers from real AIROIOPS engagements. Outcomes vary by scope and stack.',
    'surface.sales_title': 'Sales acceleration',
    'surface.sales_body': 'Close deals faster with AI-powered lead recovery, automated outreach, and real-time response to every inbound lead. The leads that already paid you to acquire stop slipping through.',
    'surface.sales_b1': 'Speed-to-Lead AI agent (voice and SMS)',
    'surface.sales_b2': 'Lead recovery cadence across cold leads',
    'surface.sales_b3': 'Automated outreach sequences',
    'surface.sales_b4': 'Conversation intelligence and follow-up',
    'surface.sales_s1_lbl': 'Inbound texts answered, day or night',
    'surface.sales_s2_lbl': 'Average response time on a new lead',
    'surface.mkt_title': 'Marketing intelligence',
    'surface.mkt_body': 'Replace the agency that has been billing you for three months without leads. We pull every reported conversion against real revenue and surface the spend that actually pays back.',
    'surface.mkt_b1': 'Forensic Google and Meta ads audit',
    'surface.mkt_b2': 'Local SEO and Google Business Profile',
    'surface.mkt_b3': 'Content engine and repurposing',
    'surface.mkt_b4': 'Audience segmentation and retargeting',
    'surface.mkt_s1_lbl': 'Ad waste identified and reallocated on a single audit',
    'surface.mkt_s2_lbl': 'Of paid spend audited line by line',
    'surface.sup_title': 'Customer support',
    'surface.sup_body': 'A custom GPT trained on your FAQs, pricing, SOPs, and product docs. Lives in your stack, answers in your voice, never sounds like a chatbot. Covers the hours your team cannot.',
    'surface.sup_b1': 'Custom GPT trained on your business',
    'surface.sup_b2': 'After-hours auto-reply with language detection',
    'surface.sup_b3': 'FAQ and pricing on autopilot',
    'surface.sup_b4': 'Sentiment-aware ticket triage',
    'surface.sup_s1_lbl': 'Coverage on inbound questions, including weekends',
    'surface.sup_s2_lbl': 'Auto language detection on every reply',
    'surface.ops_title': 'Operations optimization',
    'surface.ops_body': 'Streamline every workflow. Pull data from a form, draft a quote, send the contract, sync to your accounting. The whole back-office stops eating you, every day.',
    'surface.ops_b1': 'Quote and proposal automation',
    'surface.ops_b2': 'Make scenarios that orchestrate your stack',
    'surface.ops_b3': 'Workflow redesign end-to-end',
    'surface.ops_b4': 'Live operations dashboards',
    'surface.ops_s1_lbl': 'Disconnected systems consolidated into one Make scenario',
    'surface.ops_s2_lbl': 'Per week reclaimed from manual data hand-offs',
    'surface.fin_title': 'Finance intelligence',
    'surface.fin_body': 'Books that close themselves. Receipts auto-log to QuickBooks. Bank reconciliation runs on a schedule. Sunday spreadsheet sessions are over.',
    'surface.fin_b1': 'QuickBooks auto-sync (Sales Receipts, not invoices)',
    'surface.fin_b2': 'Receipt capture from camera roll',
    'surface.fin_b3': 'Bank rules and monthly close',
    'surface.fin_b4': 'Cash velocity tracking',
    'surface.fin_s1_lbl': 'Orphan QuickBooks invoices reconciled in a single cleanup',
    'surface.fin_s2_lbl': 'Receipt-to-QuickBooks posting on every transaction',

    'upsells.kicker': 'Optional Builds',
    'upsells.h2': "If you want us to <span class=\"grad\">build it</span>, here's the menu.",
    'upsells.lede': "The Assessment is the deliverable. Quick Wins are deliberately DIY. If you'd rather hand off the bigger plays, every build has a floor price below. We charge the floor or 20% of projected first-year ROI, whichever is greater. The Assessment puts your ROI number on paper before there's a contract. Built in your stack. You own every credential.",
    'upsells.lede_short': "The Assessment is the deliverable. Quick Wins are yours to ship. If you'd rather hand off the bigger plays, we have six builds plus a $1,500/mo retainer, custom-scoped on the discovery call. Each build is quoted in writing before any contract, charged at a fixed floor or 20% of projected first-year ROI, whichever is greater. Typical builds run $3,500 to $15,000. Built in your stack. You own every credential.",
    'upsells.cta_see_menu': 'See the full build menu',
    'upsells.audit_title': 'Forensic Ad Audit',
    'upsells.audit_body': "Full forensic pull of your last 6-12 months of paid ad spend (Google, Meta, or both). We map every reported conversion to your actual paying-customer ledger and surface the waste your last agency missed. 6-8 page audit report in 48 hours.",
    'upsells.zap_title': 'Automation Build',
    'upsells.zap_body': 'Multi-step automation across the tools you already pay for. Wires your apps so data moves itself, end to end. Built in your stack (Zapier, Make, or n8n) on your accounts.',
    'upsells.gpt_title': 'Custom GPT',
    'upsells.gpt_body': 'A ChatGPT trained on your SOPs, FAQs, pricing, and product docs. Lives in your OpenAI workspace. Use it on your site, in support, or for staff training.',
    'upsells.s2l_title': 'Speed-to-Lead AI Agent',
    'upsells.s2l_body': 'AI voice + SMS agent that responds to inbound leads in under 60 seconds. Books appointments, qualifies fit, hands off hot leads to you. Lives in your CRM.',
    'upsells.po_title': 'Process Optimization',
    'upsells.po_body': 'End-to-end audit of one bottleneck workflow plus the automation rebuild. Best for ops with 5+ tools and a lot of manual data hand-offs.',
    'upsells.ret_title': 'Monthly Retainer',
    'upsells.ret_body': 'Ongoing optimization, new builds, and AI-stack maintenance. Cancel anytime. Most clients start this after the first upsell ships.',
    'upsells.cta': 'Book a call to scope a build',
    'upsells.cta_alt': 'See a real build in action',
    'upsells.menu_kicker': 'The build menu',
    'upsells.menu_h2': 'Six builds, one retainer. <span class="grad">Scoped, not priced.</span>',
    'upsells.menu_lede': "Pick what you want, skip what you don't. Each build is scoped before you commit.",
    'upsells.price_audit': 'FIXED FEE · 48-HOUR REPORT',
    'upsells.price_floor': 'CUSTOM SCOPED',
    'upsells.price_month': 'PER MONTH',
    'upsells.cta_h2': 'Ready to <span class="grad">scope a build?</span>',
    'upsells.cta_body': 'Start with the $1,500 Assessment. We quantify your ROI in writing first, so the math is on paper before any build contract.',

    'faq.ph_lede': 'Price, timeline, scope, who it is for, what software it works with, and how the bigger builds are priced. All seven answers, in one place.',
    'faq.cta_h2': 'Still got <span class="grad">questions?</span>',
    'faq.cta_body': 'Book a free Discovery Call and ask anything. No spam, no agency rates, no 90-day discovery phases.',

    'customers.kicker': 'Customer Stories',
    'customers.h1': 'Real rebuilds. <span class="grad">Real numbers.</span>',
    'customers.ph_lede': 'Each story is an SMB that ran the AIROIOPS Assessment, then shipped one or more of the upsells. We publish the work, the numbers, and the stack used. No vague claims.',
    'customers.stat1': 'Fixed Assessment price across every story',
    'customers.stat2': 'Standard Roadmap turnaround',
    'customers.stat3': 'Stories audited against real ledger numbers',
    'customers.featured_kicker': 'Featured customer',
    'customers.featured_h2': 'Sister business <span class="grad">&middot; Las Vegas residential service.</span>',
    'customers.featured_lede': 'A two-chapter case study. Chapter 1 is the Assessment deliverable we sell. Chapter 2 is what got built after.',
    'customers.ch1_tag': 'Chapter 1 of 2 &middot; The Assessment',
    'customers.ch1_title': 'The Assessment, run on a real service business',
    'customers.ch1_body': 'The deliverable AIROIOPS sells, run on the sister business as the proof case. 48-hour audit: 1,000+ idle leads identified, $4,500 of forensically-traced ad waste, 13 hours per week reclaimable.',
    'customers.ch1_m1': 'turnaround',
    'customers.ch1_m2': 'ad spend audited',
    'customers.ch1_m3': 'idle leads found',
    'customers.ch1_cta': 'Read the assessment',
    'customers.ch2_tag': 'Chapter 2 of 2 &middot; The Rebuild',
    'customers.ch2_title': 'What got built after the assessment',
    'customers.ch2_body': '4 disconnected systems consolidated into one AI-orchestrated workflow. A brittle Zapier glue retired. Auto-replies live. Live operations dashboard. Delivered in phased waves, each one standing alone.',
    'customers.ch2_m1': 'systems',
    'customers.ch2_m2': 'ad waste reallocated',
    'customers.ch2_m3': 'inbound texts answered',
    'customers.ch2_cta': 'Read the rebuild',
    'customers.more_kicker': 'More stories',
    'customers.more_h2': 'Free-5 customer stories, <span class="grad">coming soon.</span>',
    'customers.more_lede': 'The first 5 free AI Business Assessments. Each story is published once the rebuild ships and the numbers are in.',
    'customers.soon_tag': 'Coming soon',
    'customers.soon_title': 'Free-5 customer story',
    'customers.soon_body': 'One of the first 5 free AI Business Assessments. Story published once the rebuild ships and the numbers are in.',
    'customers.cta_h2': 'Want this run on <span class="grad">your business?</span>',
    'customers.cta_body': '$1,500 fixed for the AI Business Assessment. 48-hour custom Roadmap. Quick Wins are yours to ship; upsells are optional.',

    'thanks.steps_kicker': 'What happens next',
    'thanks.steps_h2': 'Three steps to your <span class="grad">Discovery Call.</span>',
    'intake_thanks.steps_kicker': 'What happens next',
    'intake_thanks.steps_h2': 'From your answers to <span class="grad">your roadmap.</span>',

    'how.kicker': 'How it works',
    'how.h2': '48 hours. Three steps. <span class="grad">Real ROI.</span>',
    'how.day1': 'Day 1',
    'how.s1_title': 'Tell Us About Your Business',
    'how.s1_body': 'Free 45-min discovery call OR fill the deep-dive intake on your own time. Either way, we learn your business, tools, and biggest time sinks.',
    'how.day2': 'Day 1-2',
    'how.s2_title': 'Audit &amp; Map',
    'how.s2_body': "We dig in. Map your workflows. Score Quick Wins by ROI. Build your upsell menu so you know what's DIY and what's worth handing off.",
    'how.day3': 'Day 2-3',
    'how.s3_title': 'Roadmap Delivered',
    'how.s3_body': '12-18 page custom report plus a 20-min walk-through call. Clear next step. DIY the Quick Wins, or hand off an upsell to us.',
    'how.cta': 'Start your 48-hour roadmap',

    'proof.kicker': 'Proof Case',
    'proof.h2': 'We use this on our own businesses <span class="grad">first.</span>',
    'proof.tag': 'SISTER BUSINESS · LAS VEGAS RESIDENTIAL SERVICE',
    'proof.h3': 'The rebuild: 4 disconnected systems consolidated into one AI operating system.',
    'proof.body': 'A Las Vegas residential service we ran our Assessment on, then rebuilt all the way through. Lead-recovery automation live on a year of unconverted ad spend. A brittle Zapier glue retired. The CRM-to-QuickBooks integration replaced. Auto-replies live. SMS sender verified. A live operations dashboard refreshing without anyone touching it. Delivered in phased waves, each one standing alone.',
    'proof.m1': 'systems consolidated',
    'proof.m2': 'ad waste reallocated',
    'proof.m3': 'inbound texts answered',
    'proof.cta': 'Read the case study',
    'proof.browse_all': 'Browse all customer stories',

    'testimonial.kicker': 'In their own words',
    'testimonial.quote': "Before this I was running my whole business off vibes and a brittle Zapier glue I didn't fully understand. Now I open one tab in the morning and I can see the whole company. That's the difference.",
    'testimonial.who': 'The operator',
    'testimonial.role': 'Founder, AIROIOPS &amp; the sister business',

    'about.kicker': "Who's behind this",
    'about.h2': 'Built by an operator. <span class="grad">For operators.</span>',
    'about.body1': "I'm Gianny. I run a residential service business in Las Vegas, and I'm building AIROIOPS to bring real AI leverage to business owners of any size, in any vertical, the people who actually need it most and get sold to last.",
    'about.body2': "The Assessment isn't a deck. It's the same playbook I run on my own ops, delivering a custom AI Roadmap in 48 hours. The Quick Wins are yours to ship today; the upsells are there if you'd rather hand off.",
    'about.cta': 'Book Your Discovery Call',

    'faq.kicker': 'FAQ',
    'faq.lede_short': 'Price, timeline, scope, who it is for, what software it works with, how the bigger builds are priced. Full answers on one page.',
    'faq.cta_see': 'Read all 7 FAQs',
    'faq.h2': 'Common questions about <span class="grad">AI for business owners.</span>',
    'faq.q1': 'How much does an AI assessment cost?',
    'faq.a1': 'Our AI Business Assessment is $1,500 flat. That includes the operations audit, the custom 12-18 page AI Roadmap delivered in 48 hours, and a 20-minute walk-through call. No retainers, no surprise charges, no 90-day discovery phase.',
    'faq.q2': 'How long does the AI assessment take?',
    'faq.a2': '48 hours from the time you complete the intake. You can fill the deep-dive intake on your own time or book a 45-minute discovery call. Either way, your custom roadmap lands in your inbox 48 hours later.',
    'faq.q3': 'Do you only serve businesses in Las Vegas?',
    'faq.a3': 'No. We work with business owners of any size across the entire United States. The Assessment runs over email and one short call, so geography is not a constraint. We are headquartered in Las Vegas, NV, and local Vegas-area service businesses get an optional in-person session if they want it.',
    'faq.q4': 'What is included in the AI Business Assessment?',
    'faq.a4': 'An operations audit of your tools and workflows, 5-7 DIY Quick Wins you can ship yourself, a transparent build menu for the bigger plays (Speed-to-Lead AI agents, Custom GPTs, automation builds in Zapier, Make, or n8n), and a sequenced AI roadmap with prioritized milestones. All in a 12-18 page custom report, plus a 20-minute walk-through call.',
    'faq.q5': 'Will the AI tools work with the software I already use?',
    'faq.a5': 'Yes. Every Quick Win is scoped against your actual stack (CRM, email, scheduling, billing, ads). Builds run inside the tools you already pay for, not on a new platform. You own every credential.',
    'faq.q6': 'Do I need technical skills to ship the Quick Wins?',
    'faq.a6': 'No. Quick Wins are picked so a non-technical operator can configure them in an afternoon. If you can paste a prompt into ChatGPT or click through a Zapier setup, you can ship them. The bigger builds with code or multi-step automation are the upsells, where we hand off the technical work.',
    'faq.q7': 'How are the bigger AI builds priced?',
    'faq.a7': 'Every optional build is custom-scoped on a follow-up call after the Assessment. We quote in writing before you commit, with a fixed floor or 20 percent of projected first-year ROI, whichever is greater. Typical builds run $3,500 to $15,000 depending on scope. The Monthly Retainer for ongoing maintenance plus net-new builds is $1,500 per month. The $1,500 Assessment quantifies your ROI in writing before any build contract, so the math is on paper before you commit.',
    'faq.cta': 'Still got questions? Book a free call',

    'footer.area': 'Serving businesses of every size, across the United States. Headquartered in Las Vegas, NV.',


    'final.h2': 'Ready to see what AI can <span class="grad">actually</span> do for your business?',
    'final.body': 'Tell us about your business, then book your call on the next page. We will have your answers ready so the call goes straight to solutions.',
    'final.cta': 'Book a Free Discovery Call',
    'final.alt_pre': 'Prefer to skip the form?',
    'final.alt_link': 'Talk to our AI specialist instead →',
    'final.sub': 'No spam. No agency rates. No 90-day discovery phases.',

    'form.first_label': 'First name',
    'form.last_label': 'Last name',
    'form.email_label': 'Email',
    'form.business_label': 'Business name',
    'form.what_label': 'In one sentence, what does your business do?',
    'form.what_ph': 'We do [X] for [Y] in [Z].',
    'form.team_label': 'How big is the team?',
    'form.select_default': 'Select...',
    'form.team_solo': 'Solo / just me',
    'form.team_small': '2-5 people',
    'form.team_med': '6-20 people',
    'form.team_lg': '21-50 people',
    'form.team_xl': '50+ people',
    'form.timesink_label': "What's the #1 task that eats your time every week?",
    'form.timesink_ph': "Be specific. 'Lead follow-up' or 'sending invoices' beats 'admin stuff'.",
    'form.aitools_label': 'What AI tools are you using today? (Check any that apply)',
    'form.ai_none': "None / haven't started",
    'form.ai_occ': 'ChatGPT / Claude (occasional)',
    'form.ai_daily': 'ChatGPT / Claude (daily)',
    'form.ai_gpt': 'Custom GPTs trained on my data',
    'form.ai_zap': 'Zapier or Make automations',
    'form.ai_voice': 'AI voice agent (Retell, Vapi)',
    'form.outcome_label': 'If this delivers, what does "worth it" look like to you?',
    'form.outcome_ph': '10 hours back per week? $5k/mo new revenue? Stop missing leads at night?',
    'form.heard_label': 'How did you hear about us?',
    'form.heard_google': 'Google search',
    'form.heard_linkedin': 'LinkedIn',
    'form.heard_instagram': 'Instagram',
    'form.heard_facebook': 'Facebook',
    'form.heard_skool': 'Skool community',
    'form.heard_referral': 'Friend or referral',
    'form.heard_other': 'Other',
    'form.heard_other_ph': 'Tell us where you heard about us',
    'form.referral_ph': 'Their name, so we can thank them',
    'form.submit': 'Submit and get your Calendly link',

    'thanks.title': 'Got it | AIROIOPS',
    'thanks.home': 'Home',
    'thanks.badge': 'Application received',
    'thanks.h1': 'Got it. <span class="grad">Now book your call.</span>',
    'thanks.lede': "Pick a 30-minute slot below. We'll have your answers in front of us when we hop on, so we can spend the time on solutions, not background.",
    'thanks.book_cta': 'Book your 30-min Discovery Call',
    'thanks.s1_title': 'Pick a slot',
    'thanks.s1_body': 'Use the button above. Calendly shows you my real availability and confirms the slot instantly.',
    'thanks.s2_title': 'Confirmation in your inbox',
    'thanks.s2_body': "You'll get a confirmation email with the Google Meet link and a calendar invite. Add it so you don't miss the call.",
    'thanks.s3_title': '30-minute discovery call',
    'thanks.s3_body': 'We learn your business, your tools, your time sinks. Free, no commitment. You leave with a clearer view of what AI can actually do for you.',
    'thanks.alt_or': 'or',
    'thanks.alt_h3': 'No time for a call right now?',
    'thanks.alt_body': "Skip the call entirely. Fill the deep-dive intake on your own time and we'll have your custom AI Roadmap Report in your inbox inside 48 hours, plus a 20-min walk-through whenever you're ready.",
    'thanks.alt_cta': 'Fill the deep-dive intake →',
    'thanks.cta': 'Back to home',

    'footer.location': 'Built in Las Vegas, NV',

    'intake.meta_title': 'AI Business Assessment Intake | AIROIOPS',
    'intake.back': 'Back to airoiops.com',
    'intake.eyebrow': 'AI Business Assessment · Self-Serve Intake',
    'intake.h1': 'Tell us how your business <span class="grad">actually</span> runs.',
    'intake.lede': 'Skip the call. Fill this on your own time. We turn your answers into a custom 12-18 page AI Roadmap Report inside 48 hours, plus a 20-minute walk-through.',
    'intake.meta_time_label': 'Time to fill:',
    'intake.meta_time_val': '~12 minutes',
    'intake.meta_turn_label': 'Turnaround:',
    'intake.meta_turn_val': '48 hours',
    'intake.meta_get_label': 'You get:',
    'intake.meta_get_val': 'Custom roadmap · Quick Wins · Upsell options',

    'intake.s0_title': 'How to reach you',
    'intake.s0_sub': 'Just enough to send your report and follow up.',
    'intake.heard_label': 'How did you hear about us?',
    'intake.heard_google': 'Google search',
    'intake.heard_linkedin': 'LinkedIn',
    'intake.heard_instagram': 'Instagram',
    'intake.heard_facebook': 'Facebook',
    'intake.heard_skool': 'Skool community',
    'intake.heard_referral': 'Friend or referral',
    'intake.heard_other': 'Other',
    'intake.heard_other_ph': 'Tell us where you heard about us',
    'intake.referral_ph': 'Their name, so we can thank them',
    'intake.contact_name': 'Your name',
    'intake.business_name': 'Business name',
    'intake.email': 'Best email',
    'intake.phone': 'Best phone (text-friendly?)',

    'intake.s1_title': 'The big questions',
    'intake.s1_sub': 'Most important section. Bullet points are fine. The rawer the better.',
    'intake.magic_fix': 'If you could magically fix ONE thing about your operations tomorrow, what would it be?',
    'intake.biggest_timesuck': "What's the single biggest time-suck in your week?",
    'intake.biggest_timesuck_help': "The thing you do over and over that you wish you didn't have to.",
    'intake.lead_flow': 'Walk me through what happens when a new lead comes in. Call/click to payment.',
    'intake.lead_flow_help': 'Every step. Who does what. Where the data lives.',
    'intake.time_back': 'If I gave you back 10 hours a week, what would you do with them?',

    'intake.s2_title': 'Quick snapshot',
    'intake.business_what': 'What does your business do, in one or two sentences?',
    'intake.business_age': 'How long have you been running it?',
    'intake.business_age_ph': 'e.g. 14 months, 4 years',
    'intake.team_size': 'Team size (including you)',
    'intake.team_size_ph': 'solo, 3, 12…',
    'intake.industry': 'Industry / what you sell',
    'intake.region': 'City / region you serve',

    'intake.s3_title': 'Money & marketing',
    'intake.lead_to_customer_time': 'Lead-to-customer time, on average',
    'intake.lead_to_customer_time_ph': 'e.g. 1-2 days, 3 weeks',
    'intake.lead_conversion': '% of leads that become paying customers',
    'intake.lead_conversion_ph': 'best guess is fine',
    'intake.attribution': 'How do you track which marketing source produces customers?',
    'intake.attribution_help': 'Pixel, spreadsheet, gut feel. "I have no idea" is a real answer.',
    'intake.marketing_spend': "Monthly marketing spend, and what's working",
    'intake.cost_pain': 'Where does money go that you wish was lower?',
    'intake.cost_pain_help': 'Software subs, ad spend, contractors, anything.',

    'intake.s4_title': 'Tools & systems',
    'intake.tools_list': 'What software does your business run on right now?',
    'intake.tools_list_help': 'List everything: CRM, email, scheduling, billing, accounting, ads. Even the spreadsheets.',
    'intake.tools_feel': 'Which tools do you love, and which feel like a hassle?',
    'intake.data_flow': 'How does data flow between tools? Automatically, or manual copy/paste?',
    'intake.customer_comms': 'Main channel you use with customers',
    'intake.customer_comms_ph': 'email, text, phone, DMs',
    'intake.docs_storage': 'Where you store docs & SOPs',
    'intake.docs_storage_ph': 'Drive, Notion, mostly in my head…',
    'intake.spreadsheet_creep': "What gets done in a spreadsheet that probably shouldn't be?",

    'intake.s5_title': 'Bottlenecks & headaches',
    'intake.last_breakdown': 'Last time something went wrong because of a process breakdown. What happened?',
    'intake.repeat_questions': 'Top 3-5 questions customers ask you over and over',
    'intake.manual_reports': 'Reports or numbers you build manually every week or month?',
    'intake.vacation_break': 'What breaks when you go on vacation?',
    'intake.bus_factor': "If you disappeared tomorrow, what's something only YOU know how to do?",
    'intake.hate_ranked': "Ranked list. Parts of the job you wish you didn't have to do anymore.",
    'intake.hate_ranked_help': '#1 = most-want-out-of. Add as many as you want.',

    'intake.s6_title': 'Wrap up',
    'intake.open_field': "Anything I didn't ask that's important for me to know?",
    'intake.call_windows': 'Best windows for the 20-minute walk-through call',
    'intake.call_windows_help': '2-3 options in the next 7-10 days.',
    'intake.timezone': 'Timezone',
    'intake.timezone_ph': 'e.g. PT, MT, ET',
    'intake.website': 'Your website (if any)',

    'intake.submit_note': "You'll get a confirmation email and your custom AI Roadmap Report inside 48 hours.",
    'intake.submit': 'Send my answers',

    'intake_thanks.title': 'Got your intake | AIROIOPS',
    'intake_thanks.badge': 'Intake received',
    'intake_thanks.h1': 'Got it. <span class="grad">Report inbound.</span>',
    'intake_thanks.lede': 'Your custom AI Roadmap Report will hit your inbox inside 48 hours. While you wait, pre-book your 20-minute walk-through so we move straight to action when the report is ready.',
    'intake_thanks.book_cta': 'Pre-book your walk-through',
    'intake_thanks.s1_title': 'We read every word',
    'intake_thanks.s1_body': 'Your answers go straight to Gianny. No assistant, no AI summarizer, no template. A real custom analysis.',
    'intake_thanks.s2_title': 'Custom report in 48 hours',
    'intake_thanks.s2_body': '12-18 pages. Quick Wins you can ship yourself. Upsell options if you want hands-on help. Numbers tied to your actual operation.',
    'intake_thanks.s3_title': '20-minute walk-through',
    'intake_thanks.s3_body': 'Live call to walk through the report. You leave with a clear next step, whether you build it yourself or hire us.'
  },

  es: {
    'meta.title': 'Consultoría de IA para Dueños de Negocio | AIROIOPS',
    'nav.assessment': 'Evaluación',
    'nav.builds': 'Construcciones',
    'nav.how': 'Cómo funciona',
    'nav.proof': 'Prueba',
    'nav.customers': 'Clientes',
    'nav.blog': 'Blog',
    'nav.faq': 'Preguntas',
    'nav.book': 'Agendar',

    'chooser.kicker': 'Elige tu camino',
    'chooser.h2': 'Dos formas de <span class="grad">empezar.</span>',
    'chooser.lede': 'Habla con nuestra especialista en IA ahora mismo, o reserva un espacio el fin de semana con Gianny. De cualquier forma es gratis.',
    'chooser.ai_title': 'Habla con nuestra IA ahora',
    'chooser.ai_sub': 'Una charla rapida con Annie, nuestra especialista en IA. Sin agendar. Tambien es una demostracion de lo que construimos.',
    'chooser.ai_btn': 'Iniciar la llamada',
    'chooser.ai_end': 'Terminar llamada',
    'chooser.zoom_title': 'Agenda una llamada con Gianny',
    'chooser.zoom_sub': 'Prefieres a una persona. Reserva un espacio el fin de semana.',
    'chooser.zoom_btn': 'Comenzar',
    'chooser.st_connecting': 'Llamando a Annie...',
    'chooser.st_connected': 'Estas conectado. Saluda a Annie.',
    'chooser.st_ended': 'Llamada terminada. Gianny te dara seguimiento.',
    'chooser.st_error': 'Algo salio mal al iniciar la llamada. Intenta de nuevo o agenda una videollamada.',

    'intakeopt.title': 'Tu evaluacion de IA, a tu manera | AIROIOPS',
    'intakeopt.badge': 'Estas confirmado',
    'intakeopt.h1': 'Tu evaluacion de IA, <span class="grad">a tu manera.</span>',
    'intakeopt.lede': 'Ya estas listo. Ahora elige como quieres hacer la entrevista a fondo. Ambos caminos alimentan el mismo reporte personalizado de IA.',
    'intakeopt.kicker': 'Dos formas de hacerlo',
    'intakeopt.h2': 'Hablalo, o <span class="grad">escribelo tu mismo.</span>',
    'intakeopt.voice_title': 'Hablalo con Annie',
    'intakeopt.voice_sub': 'Una entrevista de voz de unos 30 minutos con Annie, nuestra especialista en IA. Ella te guia por las preguntas a fondo y tu solo hablas. Sin escribir nada.',
    'intakeopt.voice_number': '<a href="tel:+17027066567">Llama al +1 (702) 706-6567</a>',
    'intakeopt.form_title': 'Escribelo tu mismo',
    'intakeopt.form_sub': 'Prefieres escribir a tu ritmo. Llena el cuestionario a fondo cuando te convenga y nosotros nos encargamos del resto.',
    'intakeopt.form_btn': 'Abrir el cuestionario',
    'intakeopt.close_h2': 'De cualquier forma, recibes el mismo reporte.',
    'intakeopt.close_body': 'Tus respuestas se convierten en un reporte personalizado de IA, mas una llamada corta de repaso. Elige el camino que te resulte mas facil y nosotros nos encargamos del resto.',
    'intakeopt.close_cta': 'Volver al inicio',

    'hero.badge': 'Aceptando 3 casos de estudio sin costo',
    'hero.h1': 'Consultoría de IA para operadores. <span class="grad">Cualquier tamaño. Cualquier industria.</span>',
    'hero.lede': 'Auditamos tus operaciones, encontramos las jugadas de IA con mayor impacto, y entregamos una hoja de ruta personalizada de 12-18 páginas en 48 horas. Quick Wins que puedes lanzar tú mismo, precios transparentes para las construcciones más grandes que prefieras delegar.',
    'hero.cta_primary': 'Agenda una llamada gratis',
    'hero.cta_ghost': 'Ver la evaluación',
    'hero.cta_alt_pre': '¿Sin tiempo para una llamada?',
    'hero.cta_alt_link': 'Habla con nuestra especialista en IA →',
    'hero.trust': '$1,500 precio fijo · entrega en 48 horas · DIY o lo delegas, tú decides',

    'roi.title': 'Calculadora de ROI en vivo',
    'roi.hours_label': 'Horas / semana en trabajo repetitivo',
    'roi.rate_label': 'Costo efectivo por hora',
    'roi.subtext': 'Ahorro anual potencial si automatizamos el 60% de esto',
    'roi.hours_unit': 'hrs',
    'roi.rate_unit': '/hr',

    'stats.days': 'horas para entregar',
    'stats.automations': 'Quick Wins por reporte',
    'stats.price': 'precio fijo',
    'stats.refund': 'tuyo para siempre',

    'problems.kicker': 'Contra qué peleas en realidad',
    'problems.h2': 'La mayoría de la consultoría de IA <span class="grad">no dirá esto en voz alta.</span>',
    'problems.lede': 'Cuatro fugas se están comiendo a la mayoría de los pequeños negocios. El stack tecnológico es accesorio. La fuga es el problema.',
    'problems.c1_title': 'Horas quemadas en trabajo manual',
    'problems.c1_body': 'Cotizaciones, seguimientos, facturas, triaje del inbox, programación. La mayoría no te necesita a ti. La mayoría no se hace bien de todos modos. Termina el día y te preguntas a dónde se fue.',
    'problems.c2_title': 'Dinero fugándose por la puerta de atrás',
    'problems.c2_body': 'Gasto publicitario muerto. Leads que mandaron mensaje a las 9pm y nunca recibieron respuesta. Mano de obra de $50 por hora en trabajo de $0. Cada fuga es pequeña. Súmalas y son el salario completo de un empleado.',
    'problems.c3_title': 'Sin sistema que cierre el círculo',
    'problems.c3_body': 'Entra un lead. Se queda. Se enfría. O corres a medianoche a enviar una cotización que olvidarás haber enviado. Vender, pero no convertir, es la forma más cara de crecer.',
    'problems.c4_title': 'Herramientas hechas para empresas grandes, no para ti',
    'problems.c4_body': 'La mayoría del "IA para negocios" la venden personas que nunca han manejado uno. Stack equivocado, precio equivocado, lenguaje equivocado. Para cuando terminas el onboarding, el trimestre ya acabó.',

    'outcomes.kicker': 'Lo que realmente recibes',
    'outcomes.h2': 'Olvídate de las herramientas. <span class="grad">Esto es lo que estás comprando.</span>',
    'outcomes.lede': 'La hoja de ruta, el reporte, las automatizaciones. Nada de eso es por lo que nos contratarías. Lo que compras son estas cuatro cosas. Todo lo demás es solo cómo las entregamos.',
    'outcomes.c1_label': 'Tiempo',
    'outcomes.c1_title': 'Tus noches y fines de semana de vuelta',
    'outcomes.c1_body': 'La mayoría de los operadores con los que trabajamos quemaban 10 a 15 horas a la semana en cotizaciones, seguimientos, facturas y bandeja de entrada. La mayor parte de ese trabajo no te necesita. Recupera esas horas para tu familia, para dormir, o para las jugadas que solo tú puedes hacer.',
    'outcomes.c2_label': 'Dinero',
    'outcomes.c2_title': 'Las fugas que no sabías que tenías',
    'outcomes.c2_body': 'Gasto en anuncios desperdiciado. Leads que escribieron a las 9pm y nunca recibieron respuesta. Trabajo manual pagado a $50 la hora que debería costar cero. La auditoría suele encontrar de $20k a $50k al año en fugas en la primera pasada. Tápalas una vez, conserva el ahorro cada año después.',
    'outcomes.c3_label': 'Libertad',
    'outcomes.c3_title': 'Un negocio que no te necesita para todo',
    'outcomes.c3_body': 'El seguimiento de leads corre sin ti. Las cotizaciones salen sin ti. Lo pequeño deja de comerte el día para que puedas trabajar sobre el negocio en lugar de dentro de él. El punto no es hacer IA. Es liberarte de las tareas de $20 la hora que te han tenido como rehén.',
    'outcomes.c4_label': 'Palanca',
    'outcomes.c4_title': 'Compuesto, no de una sola vez',
    'outcomes.c4_body': 'Un empleado te cuesta de nuevo cada mes. Las jugadas que instalamos siguen pagando cada mes sin costo extra. El año dos es puro margen. Esa es la diferencia entre contratar ayuda y construir palanca.',
    'outcomes.cta': 'Agenda tu llamada gratis',
    'outcomes.cta_alt': 'Mira cómo lo entregamos',

    'assessment.kicker': 'La evaluación',
    'assessment.h2': 'Lo que realmente obtienes por <span class="grad">$1,500</span>.',
    'assessment.lede': 'Sin fase de descubrimiento de 90 días. Sin presentación disfrazada de entregable. Una hoja de ruta personalizada de 12-18 páginas con Quick Wins que puedes lanzar tú mismo, más precios transparentes para los upsells si prefieres delegar.',
    'assessment.c1_title': 'Auditoría de operaciones',
    'assessment.c1_body': 'Análisis profundo de tus herramientas, flujos y datos. Mapeamos cada tarea recurrente en tu negocio y la etiquetamos por potencial de IA.',
    'assessment.c2_title': 'Quick Wins listos para lanzar',
    'assessment.c2_body': '5-7 recomendaciones DIY clasificadas por ROI y esfuerzo. Herramientas a las que puedes suscribirte, integraciones que puedes configurar en una tarde, prompts que puedes pegar en ChatGPT hoy.',
    'assessment.c3_title': 'Menú de upsells',
    'assessment.c3_body': 'Construcciones opcionales para las jugadas grandes: Speed-to-Lead, GPTs personalizados, automatizaciones (Zapier, Make o n8n). Elige lo que quieres, salta lo que no. Cada construcción se define en alcance antes de comprometerte y se cotiza por escrito, con un precio piso transparente o el 20% del ROI proyectado del primer año, lo que sea mayor.',
    'assessment.c4_title': 'Hoja de ruta IA',
    'assessment.c4_body': 'El camino secuenciado desde tu primer Quick Win hasta un stack de operaciones totalmente potenciado por IA. Hitos por fases, backlog priorizado, sin relleno.',
    'assessment.cta': 'Agenda tu llamada gratis',
    'assessment.cta_alt': 'O habla con nuestra especialista en IA',

    'surface.kicker': 'Dónde la IA aterriza más fuerte',
    'surface.h2': 'IA para <span class="grad">cada departamento.</span>',
    'surface.lede': 'De ventas a operaciones a finanzas, cada equipo de tu negocio destraba más cuando la IA se conecta al flujo correcto.',
    'surface.dept_sales': 'Ventas',
    'surface.dept_marketing': 'Marketing',
    'surface.dept_support': 'Soporte',
    'surface.dept_ops': 'Operaciones',
    'surface.dept_finance': 'Finanzas',
    'surface.cta_learn': 'Más información',
    'surface.outcomes_label': 'Resultados típicos',
    'surface.disclaimer': 'Números de engagements reales de AIROIOPS. Los resultados varían según el alcance y el stack.',
    'surface.sales_title': 'Aceleración de Ventas',
    'surface.sales_body': 'Cierra negocios más rápido con recuperación de leads por IA, outreach automatizado y respuesta en tiempo real a cada lead entrante. Los leads que ya pagaste para adquirir dejan de escaparse.',
    'surface.sales_b1': 'Agente IA Speed-to-Lead (voz y SMS)',
    'surface.sales_b2': 'Cadencia de recuperación sobre leads fríos',
    'surface.sales_b3': 'Secuencias de outreach automatizadas',
    'surface.sales_b4': 'Inteligencia conversacional y seguimiento',
    'surface.sales_s1_lbl': 'Mensajes entrantes respondidos, de día o de noche',
    'surface.sales_s2_lbl': 'Tiempo promedio de respuesta a un nuevo lead',
    'surface.mkt_title': 'Inteligencia de Marketing',
    'surface.mkt_body': 'Reemplaza a la agencia que te ha estado facturando tres meses sin leads. Cruzamos cada conversión reportada contra ingresos reales y revelamos el gasto que sí paga de vuelta.',
    'surface.mkt_b1': 'Auditoría forense de anuncios Google y Meta',
    'surface.mkt_b2': 'SEO local y Perfil de Google Business',
    'surface.mkt_b3': 'Motor de contenido y repurposing',
    'surface.mkt_b4': 'Segmentación de audiencia y retargeting',
    'surface.mkt_s1_lbl': 'Desperdicio publicitario identificado y reasignado en una sola auditoría',
    'surface.mkt_s2_lbl': 'De gasto pagado auditado línea por línea',
    'surface.sup_title': 'Soporte al Cliente',
    'surface.sup_body': 'Un GPT personalizado entrenado en tus FAQs, precios, SOPs y documentación. Vive en tu stack, responde con tu voz, nunca suena como un chatbot. Cubre las horas que tu equipo no puede.',
    'surface.sup_b1': 'GPT personalizado entrenado en tu negocio',
    'surface.sup_b2': 'Auto-respuesta fuera de horario con detección de idioma',
    'surface.sup_b3': 'FAQ y precios en piloto automático',
    'surface.sup_b4': 'Triaje de tickets consciente del sentimiento',
    'surface.sup_s1_lbl': 'Cobertura en preguntas entrantes, incluyendo fines de semana',
    'surface.sup_s2_lbl': 'Detección automática de idioma en cada respuesta',
    'surface.ops_title': 'Optimización de Operaciones',
    'surface.ops_body': 'Agiliza cada flujo. Extrae datos de un formulario, redacta una cotización, envía el contrato, sincroniza tu contabilidad. Toda la oficina trasera deja de comerte, cada día.',
    'surface.ops_b1': 'Automatización de cotizaciones y propuestas',
    'surface.ops_b2': 'Escenarios de Make que orquestan tu stack',
    'surface.ops_b3': 'Rediseño de flujos end-to-end',
    'surface.ops_b4': 'Dashboards de operaciones en vivo',
    'surface.ops_s1_lbl': 'Sistemas desconectados consolidados en un solo escenario de Make',
    'surface.ops_s2_lbl': 'Por semana recuperadas del paso manual de datos',
    'surface.fin_title': 'Inteligencia Financiera',
    'surface.fin_body': 'Libros que se cierran solos. Los recibos se registran automáticamente en QuickBooks. La conciliación bancaria corre en horario. Las sesiones de hoja de cálculo de domingo se acabaron.',
    'surface.fin_b1': 'Auto-sync con QuickBooks (Sales Receipts, no facturas)',
    'surface.fin_b2': 'Captura de recibos desde el camera roll',
    'surface.fin_b3': 'Reglas de banco y cierre mensual',
    'surface.fin_b4': 'Tracking de velocidad de caja',
    'surface.fin_s1_lbl': 'Facturas huérfanas de QuickBooks reconciliadas en una sola limpieza',
    'surface.fin_s2_lbl': 'Posteo recibo-a-QuickBooks en cada transacción',

    'upsells.kicker': 'Construcciones opcionales',
    'upsells.h2': 'Si quieres que <span class="grad">la construyamos</span>, aquí está el menú.',
    'upsells.lede': 'La evaluación es el entregable. Los Quick Wins son DIY a propósito. Si prefieres delegar las jugadas más grandes, cada construcción tiene un precio piso abajo. Cobramos el piso o el 20% del ROI proyectado del primer año, lo que sea mayor. La Evaluación pone tu número de ROI en papel antes de que haya contrato. Construido en tu stack. Tú eres dueño de cada credencial.',
    'upsells.audit_title': 'Auditoría Forense de Anuncios',
    'upsells.audit_body': 'Análisis forense completo de tus últimos 6-12 meses de gasto publicitario pagado (Google, Meta, o ambos). Mapeamos cada conversión reportada contra tu libro real de clientes pagados y revelamos el desperdicio que tu última agencia no detectó. Reporte de auditoría de 6-8 páginas en 48 horas.',
    'upsells.zap_title': 'Construcción de Automatización',
    'upsells.zap_body': 'Automatización multi-paso entre las herramientas que ya pagas. Conecta tus apps para que los datos se muevan solos, de punta a punta. Construida en tu stack (Zapier, Make o n8n) en tus cuentas.',
    'upsells.gpt_title': 'GPT personalizado',
    'upsells.gpt_body': 'Un ChatGPT entrenado con tus procesos, FAQs, precios y documentos. Vive en tu workspace de OpenAI. Úsalo en tu sitio, en soporte, o para entrenar al equipo.',
    'upsells.s2l_title': 'Agente IA Speed-to-Lead',
    'upsells.s2l_body': 'Agente de voz + SMS con IA que responde a leads entrantes en menos de 60 segundos. Agenda citas, califica el fit, te pasa los leads calientes. Vive en tu CRM.',
    'upsells.po_title': 'Optimización de procesos',
    'upsells.po_body': 'Auditoría de extremo a extremo de un flujo cuello de botella, más la reconstrucción automatizada. Ideal para operaciones con 5+ herramientas y muchos traspasos manuales.',
    'upsells.ret_title': 'Retainer mensual',
    'upsells.ret_body': 'Optimización continua, nuevas construcciones y mantenimiento del stack de IA. Cancela cuando quieras. La mayoría de clientes empieza esto después de su primer upsell.',
    'upsells.cta': 'Agenda una llamada para definir una construcción',
    'upsells.cta_alt': 'Ver una construcción real en acción',
    'upsells.menu_kicker': 'El menú de construcciones',
    'upsells.menu_h2': 'Seis construcciones, un retainer. <span class="grad">A medida, no con precio público.</span>',
    'upsells.menu_lede': 'Elige lo que quieres, salta lo que no. Cada construcción se define en alcance antes de comprometerte.',
    'upsells.price_audit': 'TARIFA FIJA · REPORTE EN 48 HORAS',
    'upsells.price_floor': 'DEFINIDA A MEDIDA',
    'upsells.price_month': 'POR MES',
    'upsells.cta_h2': '¿Listo para <span class="grad">definir una construcción?</span>',
    'upsells.cta_body': 'Empieza con la Evaluación de $1,500. Cuantificamos tu ROI por escrito primero, así los números están en papel antes de cualquier contrato de construcción.',

    'faq.ph_lede': 'Precio, tiempos, alcance, para quién es, con qué software funciona, y cómo se cotizan las construcciones más grandes. Las siete respuestas, en un solo lugar.',
    'faq.cta_h2': '¿Aún tienes <span class="grad">preguntas?</span>',
    'faq.cta_body': 'Agenda una llamada gratis y pregunta lo que quieras. Sin spam, sin tarifas de agencia, sin fases de descubrimiento de 90 días.',

    'customers.kicker': 'Historias de clientes',
    'customers.h1': 'Reconstrucciones reales. <span class="grad">Números reales.</span>',
    'customers.ph_lede': 'Cada historia es una pequeña empresa que hizo la Evaluación de AIROIOPS y luego lanzó uno o más de los upsells. Publicamos el trabajo, los números y el stack usado. Sin afirmaciones vagas.',
    'customers.stat1': 'Precio fijo de la Evaluación en cada historia',
    'customers.stat2': 'Entrega estándar de la hoja de ruta',
    'customers.stat3': 'Historias auditadas contra números reales del libro contable',
    'customers.featured_kicker': 'Cliente destacado',
    'customers.featured_h2': 'Negocio hermano <span class="grad">&middot; servicio residencial en Las Vegas.</span>',
    'customers.featured_lede': 'Un caso de estudio de dos capítulos. El Capítulo 1 es el entregable de la Evaluación que vendemos. El Capítulo 2 es lo que se construyó después.',
    'customers.ch1_tag': 'Capítulo 1 de 2 &middot; La Evaluación',
    'customers.ch1_title': 'La Evaluación, hecha en un negocio de servicios real',
    'customers.ch1_body': 'El entregable que AIROIOPS vende, hecho en el negocio hermano como caso de prueba. Auditoría de 48 horas: 1,000+ leads inactivos identificados, $4,500 de desperdicio publicitario rastreado forensicamente, 13 horas por semana recuperables.',
    'customers.ch1_m1': 'entrega',
    'customers.ch1_m2': 'gasto publicitario auditado',
    'customers.ch1_m3': 'leads inactivos encontrados',
    'customers.ch1_cta': 'Leer la evaluación',
    'customers.ch2_tag': 'Capítulo 2 de 2 &middot; La Reconstrucción',
    'customers.ch2_title': 'Lo que se construyó después de la evaluación',
    'customers.ch2_body': '4 sistemas desconectados consolidados en un solo flujo orquestado por IA. Un pegamento frágil de Zapier retirado. Auto-respuestas en vivo. Panel de operaciones en vivo. Entregado en olas escalonadas, cada una sostenible por sí sola.',
    'customers.ch2_m1': 'sistemas',
    'customers.ch2_m2': 'gasto publicitario reasignado',
    'customers.ch2_m3': 'mensajes entrantes contestados',
    'customers.ch2_cta': 'Leer la reconstrucción',
    'customers.more_kicker': 'Más historias',
    'customers.more_h2': 'Historias de los Free-5, <span class="grad">muy pronto.</span>',
    'customers.more_lede': 'Las primeras 5 Evaluaciones de Negocio con IA gratuitas. Cada historia se publica una vez que la reconstrucción se entrega y los números están listos.',
    'customers.soon_tag': 'Muy pronto',
    'customers.soon_title': 'Historia de cliente Free-5',
    'customers.soon_body': 'Una de las primeras 5 Evaluaciones de Negocio con IA gratuitas. Historia publicada una vez que la reconstrucción se entrega y los números están listos.',
    'customers.cta_h2': '¿Quieres esto en <span class="grad">tu negocio?</span>',
    'customers.cta_body': '$1,500 fijo por la Evaluación de Negocio con IA. Hoja de ruta personalizada en 48 horas. Los Quick Wins son tuyos para lanzar; los upsells son opcionales.',

    'thanks.steps_kicker': 'Qué sigue',
    'thanks.steps_h2': 'Tres pasos para tu <span class="grad">llamada de descubrimiento.</span>',
    'intake_thanks.steps_kicker': 'Qué sigue',
    'intake_thanks.steps_h2': 'De tus respuestas a <span class="grad">tu hoja de ruta.</span>',

    'how.kicker': 'Cómo funciona',
    'how.h2': '48 horas. Tres pasos. <span class="grad">ROI real.</span>',
    'how.day1': 'Día 1',
    'how.s1_title': 'Cuéntanos sobre tu negocio',
    'how.s1_body': 'Llamada gratis de 45 min O llena el cuestionario a tu ritmo. De cualquier forma, aprendemos tu negocio, tus herramientas, y tus mayores pérdidas de tiempo.',
    'how.day2': 'Día 1-2',
    'how.s2_title': 'Auditar y mapear',
    'how.s2_body': 'Investigamos a fondo. Mapeamos tus flujos. Calificamos Quick Wins por ROI. Construimos tu menú de upsells para que sepas qué es DIY y qué vale la pena delegar.',
    'how.day3': 'Día 2-3',
    'how.s3_title': 'Hoja de ruta entregada',
    'how.s3_body': 'Reporte personalizado de 12-18 páginas, más una llamada de repaso de 20 minutos. Siguiente paso claro. Haz tú los Quick Wins, o delega un upsell a nosotros.',
    'how.cta': 'Empieza tu hoja de ruta de 48 horas',

    'proof.kicker': 'Caso de prueba',
    'proof.h2': 'Lo usamos primero en nuestros propios <span class="grad">negocios.</span>',
    'proof.tag': 'NEGOCIO HERMANO · SERVICIO RESIDENCIAL EN LAS VEGAS',
    'proof.h3': 'La reconstrucción: 4 sistemas desconectados consolidados en un solo sistema operativo de IA.',
    'proof.body': 'Un servicio residencial en Las Vegas al que le hicimos nuestra Evaluación y luego reconstruimos de extremo a extremo. Automatización de recuperación de leads activa sobre un año de inversión publicitaria sin convertir. Un pegamento frágil de Zapier retirado. Integración del CRM a QuickBooks reemplazada. Auto-respuestas en vivo. Remitente SMS verificado. Un panel de operaciones en vivo que se refresca sin que nadie lo toque. Entregado en olas escalonadas, cada una sostenible por sí sola.',
    'proof.m1': 'sistemas consolidados',
    'proof.m2': 'gasto publicitario reasignado',
    'proof.m3': 'mensajes entrantes contestados',
    'proof.cta': 'Leer el caso de estudio',
    'proof.browse_all': 'Ver todas las historias de clientes',

    'testimonial.kicker': 'En sus propias palabras',
    'testimonial.quote': 'Antes de esto manejaba mi negocio entero por intuici&oacute;n y un pegamento fr&aacute;gil de Zapier que no entend&iacute;a del todo. Ahora abro una sola pesta&ntilde;a en la ma&ntilde;ana y puedo ver la empresa entera. Esa es la diferencia.',
    'testimonial.who': 'El operador',
    'testimonial.role': 'Fundador, AIROIOPS y el negocio hermano',

    'about.kicker': 'Quién está detrás',
    'about.h2': 'Construido por un operador. <span class="grad">Para operadores.</span>',
    'about.body1': 'Soy Gianny. Manejo un negocio de servicios residenciales en Las Vegas, y estoy construyendo AIROIOPS para traer ventaja real de IA a dueños de negocio de cualquier tamaño, en cualquier industria, la gente que más lo necesita y a la que le venden de último.',
    'about.body2': 'La evaluación no es una presentación. Es el mismo playbook que ejecuto en mis propias operaciones, entregando una hoja de ruta personalizada de IA en 48 horas. Los Quick Wins son tuyos para lanzar hoy; los upsells están ahí si prefieres delegar.',
    'about.cta': 'Agenda tu llamada de descubrimiento',

    'faq.kicker': 'Preguntas frecuentes',
    'faq.h2': 'Preguntas comunes sobre <span class="grad">IA para dueños de negocio.</span>',
    'faq.q1': '¿Cuánto cuesta una evaluación de IA?',
    'faq.a1': 'Nuestra Evaluación de Negocio con IA cuesta $1,500 fijo. Incluye la auditoría de operaciones, la hoja de ruta personalizada de 12-18 páginas entregada en 48 horas, y una llamada de repaso de 20 minutos. Sin retainers, sin cargos sorpresa, sin fase de descubrimiento de 90 días.',
    'faq.q2': '¿Cuánto tarda la evaluación de IA?',
    'faq.a2': '48 horas desde que completas el cuestionario. Puedes llenar el cuestionario detallado a tu ritmo o agendar una llamada de 45 minutos. De cualquier forma, tu hoja de ruta personalizada llega a tu correo 48 horas después.',
    'faq.q3': '¿Solo atienden a negocios en Las Vegas?',
    'faq.a3': 'No. Trabajamos con dueños de negocio de cualquier tamaño en todo Estados Unidos. La Evaluación se hace por correo y una llamada corta, así que la geografía no es una restricción. Tenemos sede en Las Vegas, NV, y los negocios de servicio locales en el área de Vegas tienen la opción de una sesión presencial si la quieren.',
    'faq.q4': '¿Qué incluye la Evaluación de Negocio con IA?',
    'faq.a4': 'Una auditoría de operaciones de tus herramientas y flujos, 5-7 Quick Wins DIY que puedes lanzar tú mismo, un menú transparente para las construcciones más grandes (agentes Speed-to-Lead, GPTs personalizados, automatizaciones en Zapier, Make o n8n), y una hoja de ruta IA secuenciada con hitos priorizados. Todo en un reporte personalizado de 12-18 páginas, más una llamada de repaso de 20 minutos.',
    'faq.q5': '¿Las herramientas de IA funcionarán con el software que ya uso?',
    'faq.a5': 'Sí. Cada Quick Win se diseña sobre tu stack actual (CRM, correo, agendas, cobros, anuncios). Las construcciones corren dentro de las herramientas que ya pagas, no en una nueva plataforma. Tú eres dueño de cada credencial.',
    'faq.q6': '¿Necesito conocimientos técnicos para lanzar los Quick Wins?',
    'faq.a6': 'No. Los Quick Wins se eligen para que un operador no técnico los pueda configurar en una tarde. Si puedes pegar un prompt en ChatGPT o hacer clic en una configuración de Zapier, los puedes lanzar. Las construcciones más grandes con código o automatización multi-paso son los upsells, donde nosotros nos encargamos del trabajo técnico.',
    'faq.q7': '¿Cómo se cotizan las construcciones de IA más grandes?',
    'faq.a7': 'Cada construcción opcional se define a medida en una llamada de seguimiento después de la Evaluación. Cotizamos por escrito antes de que te comprometas, con un precio piso fijo o el 20 por ciento del ROI proyectado del primer año, lo que sea mayor. Las construcciones típicas van de $3,500 a $15,000 según el alcance. El Retainer Mensual para mantenimiento continuo más nuevas construcciones es $1,500 por mes. La Evaluación de $1,500 cuantifica tu ROI por escrito antes de cualquier contrato de construcción.',
    'faq.cta': '¿Aún tienes preguntas? Agenda una llamada gratis',

    'footer.area': 'Atendiendo negocios de cualquier tamaño en todo Estados Unidos. Sede en Las Vegas, NV.',


    'final.h2': '¿Listo para ver lo que la IA <span class="grad">realmente</span> puede hacer por tu negocio?',
    'final.body': 'Cuéntanos sobre tu negocio y luego agenda tu llamada en la siguiente página. Tendremos tus respuestas listas para dedicar la llamada a soluciones.',
    'final.cta': 'Agenda una llamada gratis',
    'final.alt_pre': '¿Prefieres saltar el formulario?',
    'final.alt_link': 'Habla con nuestra especialista en IA →',
    'final.sub': 'Sin spam. Sin tarifas de agencia. Sin fases de descubrimiento de 90 días.',

    'form.first_label': 'Nombre',
    'form.last_label': 'Apellido',
    'form.email_label': 'Correo electrónico',
    'form.business_label': 'Nombre del negocio',
    'form.what_label': 'En una oración, ¿qué hace tu negocio?',
    'form.what_ph': 'Hacemos [X] para [Y] en [Z].',
    'form.team_label': '¿Qué tan grande es el equipo?',
    'form.select_default': 'Selecciona...',
    'form.team_solo': 'Solo yo',
    'form.team_small': '2-5 personas',
    'form.team_med': '6-20 personas',
    'form.team_lg': '21-50 personas',
    'form.team_xl': '50+ personas',
    'form.timesink_label': '¿Cuál es la tarea #1 que te consume tiempo cada semana?',
    'form.timesink_ph': "Sé específico. 'Seguimiento de leads' o 'enviar facturas' es mejor que 'cosas administrativas'.",
    'form.aitools_label': '¿Qué herramientas de IA usas hoy? (Marca las que apliquen)',
    'form.ai_none': 'Ninguna / no he empezado',
    'form.ai_occ': 'ChatGPT / Claude (ocasional)',
    'form.ai_daily': 'ChatGPT / Claude (diario)',
    'form.ai_gpt': 'GPTs personalizados con mis datos',
    'form.ai_zap': 'Automatizaciones en Zapier o Make',
    'form.ai_voice': 'Agente de voz IA (Retell, Vapi)',
    'form.outcome_label': 'Si esto entrega valor, ¿cómo se ve "vale la pena" para ti?',
    'form.outcome_ph': '¿10 horas recuperadas por semana? ¿$5k/mes en nuevos ingresos? ¿Dejar de perder leads de noche?',
    'form.heard_label': '¿Cómo te enteraste de nosotros?',
    'form.heard_google': 'Búsqueda en Google',
    'form.heard_linkedin': 'LinkedIn',
    'form.heard_instagram': 'Instagram',
    'form.heard_facebook': 'Facebook',
    'form.heard_skool': 'Comunidad de Skool',
    'form.heard_referral': 'Amigo o referido',
    'form.heard_other': 'Otro',
    'form.heard_other_ph': 'Cuéntanos dónde te enteraste de nosotros',
    'form.referral_ph': 'Su nombre, para poder agradecerle',
    'form.submit': 'Enviar y recibir tu enlace de Calendly',

    'thanks.title': 'Recibido | AIROIOPS',
    'thanks.home': 'Inicio',
    'thanks.badge': 'Solicitud recibida',
    'thanks.h1': 'Recibido. <span class="grad">Ahora agenda tu llamada.</span>',
    'thanks.lede': 'Elige un espacio de 30 minutos abajo. Tendremos tus respuestas a la vista cuando nos conectemos, para enfocarnos en soluciones, no en contexto.',
    'thanks.book_cta': 'Agenda tu llamada de 30 min',
    'thanks.s1_title': 'Elige un espacio',
    'thanks.s1_body': 'Usa el botón arriba. Calendly te muestra mi disponibilidad real y confirma el espacio al instante.',
    'thanks.s2_title': 'Confirmación en tu correo',
    'thanks.s2_body': 'Recibirás un correo de confirmación con el enlace de Google Meet y una invitación de calendario. Añádela para no olvidar la llamada.',
    'thanks.s3_title': 'Llamada de descubrimiento de 30 minutos',
    'thanks.s3_body': 'Aprendemos tu negocio, tus herramientas, tus pérdidas de tiempo. Gratis, sin compromiso. Sales con una visión más clara de lo que la IA puede hacer por ti.',
    'thanks.alt_or': 'o',
    'thanks.alt_h3': '¿Sin tiempo para una llamada ahora?',
    'thanks.alt_body': 'Salta la llamada por completo. Llena el cuestionario a tu ritmo y tendrás tu reporte personalizado de IA en tu correo en 48 horas, más una llamada de repaso de 20 minutos cuando estés listo.',
    'thanks.alt_cta': 'Llena el cuestionario completo →',
    'thanks.cta': 'Volver al inicio',

    'footer.location': 'Hecho en Las Vegas, NV',

    'intake.meta_title': 'Evaluación de Negocio con IA | AIROIOPS',
    'intake.back': 'Volver a airoiops.com',
    'intake.eyebrow': 'Evaluación de Negocio con IA · Formulario',
    'intake.h1': 'Cuéntanos cómo <span class="grad">realmente</span> funciona tu negocio.',
    'intake.lede': 'Sin llamada. Llénalo a tu ritmo. Convertimos tus respuestas en un reporte personalizado de 12-18 páginas con tu hoja de ruta de IA en 48 horas, más una llamada de 20 minutos para repasarlo.',
    'intake.meta_time_label': 'Tiempo para llenar:',
    'intake.meta_time_val': '~12 minutos',
    'intake.meta_turn_label': 'Entrega:',
    'intake.meta_turn_val': '48 horas',
    'intake.meta_get_label': 'Recibes:',
    'intake.meta_get_val': 'Hoja de ruta personalizada · Quick Wins · Opciones de upsell',

    'intake.s0_title': 'Cómo contactarte',
    'intake.s0_sub': 'Lo mínimo para enviarte el reporte y dar seguimiento.',
    'intake.heard_label': '¿Cómo te enteraste de nosotros?',
    'intake.heard_google': 'Búsqueda en Google',
    'intake.heard_linkedin': 'LinkedIn',
    'intake.heard_instagram': 'Instagram',
    'intake.heard_facebook': 'Facebook',
    'intake.heard_skool': 'Comunidad de Skool',
    'intake.heard_referral': 'Amigo o referido',
    'intake.heard_other': 'Otro',
    'intake.heard_other_ph': 'Cuéntanos dónde te enteraste de nosotros',
    'intake.referral_ph': 'Su nombre, para poder agradecerle',
    'intake.contact_name': 'Tu nombre',
    'intake.business_name': 'Nombre del negocio',
    'intake.email': 'Correo electrónico',
    'intake.phone': 'Teléfono (¿recibe mensajes?)',

    'intake.s1_title': 'Las preguntas grandes',
    'intake.s1_sub': 'La sección más importante. Las viñetas están bien. Cuanto más crudo, mejor.',
    'intake.magic_fix': 'Si pudieras arreglar mágicamente UNA cosa de tus operaciones mañana, ¿qué sería?',
    'intake.biggest_timesuck': '¿Cuál es la cosa que más tiempo te quita en tu semana?',
    'intake.biggest_timesuck_help': 'Eso que haces una y otra vez y desearías no tener que hacer.',
    'intake.lead_flow': 'Explícame qué pasa cuando entra un nuevo lead. Desde la llamada/clic hasta el pago.',
    'intake.lead_flow_help': 'Cada paso. Quién hace qué. Dónde vive la información.',
    'intake.time_back': 'Si te devolviera 10 horas a la semana, ¿qué harías con ellas?',

    'intake.s2_title': 'Foto rápida',
    'intake.business_what': 'En una o dos oraciones, ¿qué hace tu negocio?',
    'intake.business_age': '¿Cuánto tiempo llevas operándolo?',
    'intake.business_age_ph': 'ej. 14 meses, 4 años',
    'intake.team_size': 'Tamaño del equipo (incluyéndote)',
    'intake.team_size_ph': 'solo yo, 3, 12…',
    'intake.industry': 'Industria / qué vendes',
    'intake.region': 'Ciudad / región que atiendes',

    'intake.s3_title': 'Dinero y marketing',
    'intake.lead_to_customer_time': 'Tiempo promedio de lead a cliente',
    'intake.lead_to_customer_time_ph': 'ej. 1-2 días, 3 semanas',
    'intake.lead_conversion': '% de leads que se convierten en clientes que pagan',
    'intake.lead_conversion_ph': 'una estimación está bien',
    'intake.attribution': '¿Cómo sabes qué fuente de marketing trae clientes?',
    'intake.attribution_help': 'Pixel, hoja de cálculo, intuición. "No tengo idea" es una respuesta válida.',
    'intake.marketing_spend': 'Gasto mensual en marketing, y qué está funcionando',
    'intake.cost_pain': '¿Dónde se va el dinero que desearías que fuera menor?',
    'intake.cost_pain_help': 'Suscripciones de software, publicidad, contratistas, lo que sea.',

    'intake.s4_title': 'Herramientas y sistemas',
    'intake.tools_list': '¿Qué software usa tu negocio hoy?',
    'intake.tools_list_help': 'Lista todo: CRM, correo, agendas, cobros, contabilidad, anuncios. Incluso las hojas de cálculo.',
    'intake.tools_feel': '¿Qué herramientas amas, y cuáles sientes que son una molestia?',
    'intake.data_flow': '¿Cómo fluyen los datos entre herramientas? ¿Automático, o copiar/pegar manual?',
    'intake.customer_comms': 'Canal principal con clientes',
    'intake.customer_comms_ph': 'correo, texto, llamada, DMs',
    'intake.docs_storage': 'Dónde guardas documentos y procesos',
    'intake.docs_storage_ph': 'Drive, Notion, mayormente en mi cabeza…',
    'intake.spreadsheet_creep': '¿Qué se hace en una hoja de cálculo que probablemente no debería?',

    'intake.s5_title': 'Cuellos de botella y dolores de cabeza',
    'intake.last_breakdown': 'La última vez que algo salió mal por un proceso roto. ¿Qué pasó?',
    'intake.repeat_questions': 'Las 3-5 preguntas que tus clientes te hacen una y otra vez',
    'intake.manual_reports': '¿Reportes o números que armas a mano cada semana o mes?',
    'intake.vacation_break': '¿Qué se rompe cuando te vas de vacaciones?',
    'intake.bus_factor': 'Si desaparecieras mañana, ¿qué cosa solo TÚ sabes hacer?',
    'intake.hate_ranked': 'Lista en orden. Partes del trabajo que ya no quisieras hacer.',
    'intake.hate_ranked_help': '#1 = la que más quieres soltar. Añade las que quieras.',

    'intake.s6_title': 'Cierre',
    'intake.open_field': '¿Algo que no te pregunté y crees que es importante que sepa?',
    'intake.call_windows': 'Mejores horarios para la llamada de 20 minutos',
    'intake.call_windows_help': '2-3 opciones en los próximos 7-10 días.',
    'intake.timezone': 'Zona horaria',
    'intake.timezone_ph': 'ej. PT, MT, ET',
    'intake.website': 'Tu sitio web (si tienes)',

    'intake.submit_note': 'Recibirás un correo de confirmación y tu reporte personalizado en 48 horas.',
    'intake.submit': 'Enviar mis respuestas',

    'intake_thanks.title': 'Recibido | AIROIOPS',
    'intake_thanks.badge': 'Formulario recibido',
    'intake_thanks.h1': 'Recibido. <span class="grad">Reporte en camino.</span>',
    'intake_thanks.lede': 'Tu reporte personalizado de IA llegará a tu correo en 48 horas. Mientras tanto, agenda tu llamada de 20 minutos para que cuando esté listo, vayamos directo a la acción.',
    'intake_thanks.book_cta': 'Agenda tu llamada de repaso',
    'intake_thanks.s1_title': 'Leemos cada palabra',
    'intake_thanks.s1_body': 'Tus respuestas le llegan directo a Gianny. Sin asistente, sin resumidor de IA, sin plantilla. Un análisis real y personalizado.',
    'intake_thanks.s2_title': 'Reporte personalizado en 48 horas',
    'intake_thanks.s2_body': '12-18 páginas. Quick Wins que puedes lanzar tú. Opciones de upsell si quieres ayuda hands-on. Números atados a tu operación real.',
    'intake_thanks.s3_title': 'Llamada de 20 minutos',
    'intake_thanks.s3_body': 'Llamada en vivo para repasar el reporte. Sales con un siguiente paso claro, ya sea construirlo tú o que lo hagamos nosotros.'
  }
};

let currentLang = 'en';

function detectLang() {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'es') return stored;
  const lang = (navigator.language || (navigator.languages && navigator.languages[0]) || 'en').toLowerCase();
  return lang.startsWith('es') ? 'es' : 'en';
}

function applyLang(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  document.documentElement.lang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t[key];
    if (val !== undefined) {
      if (el.tagName === 'TITLE') el.textContent = val;
      else el.innerHTML = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t[key];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('.nav-lang button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('a[href="/case-study"], a[href="/case-study-es"]').forEach(a => {
    a.href = lang === 'es' ? '/case-study-es' : '/case-study';
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
  calc();
}

const hours = document.getElementById('hours');
const rate = document.getElementById('rate');
const hoursOut = document.getElementById('hours-out');
const rateOut = document.getElementById('rate-out');
const roiNum = document.getElementById('roi-num');
const hasRoiCalc = hours && rate && hoursOut && rateOut && roiNum;

let displayed = 23400;

function fmt(n) { return '$' + Math.round(n).toLocaleString(); }

function animateTo(target) {
  if (!hasRoiCalc) return;
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
  if (!hasRoiCalc) return;
  const h = +hours.value;
  const r = +rate.value;
  const annual = h * r * 52 * 0.6;
  const t = translations[currentLang];
  hoursOut.textContent = h + ' ' + t['roi.hours_unit'];
  rateOut.textContent = '$' + r + t['roi.rate_unit'];
  animateTo(annual);
}

if (hasRoiCalc) {
  hours.addEventListener('input', calc);
  rate.addEventListener('input', calc);
}

document.addEventListener('submit', (e) => {
  const form = e.target;
  if (!(form instanceof HTMLFormElement)) return;
  const langField = form.querySelector('input[name="language"]');
  if (!langField) return;
  const active = (document.documentElement.lang || currentLang || 'en').toLowerCase();
  langField.value = active.startsWith('es') ? 'es' : 'en';
}, true);

document.querySelectorAll('.nav-lang button').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

function syncHeardOtherInput() {
  const checked = document.querySelector('input[name="heard_from"]:checked');
  const value = checked ? checked.value : null;
  document.querySelectorAll('.heard-other-input').forEach(input => {
    const isOther = value === 'Other';
    input.classList.toggle('is-visible', isOther);
    input.required = isOther;
    if (!isOther) input.value = '';
  });
  document.querySelectorAll('.referral-input').forEach(input => {
    const isReferral = value === 'Friend or referral';
    input.classList.toggle('is-visible', isReferral);
    input.required = isReferral;
    if (!isReferral) input.value = '';
  });
}
document.querySelectorAll('input[name="heard_from"]').forEach(radio => {
  radio.addEventListener('change', syncHeardOtherInput);
});
syncHeardOtherInput();

applyLang(detectLang());

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

// Number count-up on view (stats below the calculator + case-study proof-metrics)
function animateNum(el) {
  const target = +el.dataset.target;
  const pre = el.dataset.prefix || '';
  const suf = el.dataset.suffix || '';
  const useComma = el.hasAttribute('data-comma');
  const dur = 1500;
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = Math.round(target * eased);
    el.textContent = pre + (useComma ? v.toLocaleString() : v) + suf;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const numIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.animated) {
      e.target.dataset.animated = '1';
      animateNum(e.target);
    }
  });
}, { threshold: 0.55 });
document.querySelectorAll('[data-target]').forEach(el => numIO.observe(el));

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

/* --- Surface tabs (department picker) --- */
(function setupSurfaceTabs() {
  const surface = document.getElementById('surface');
  if (!surface) return;
  const tabs = Array.from(surface.querySelectorAll('.surface-tab'));
  const panels = Array.from(surface.querySelectorAll('.surface-panel'));
  const arrows = surface.querySelectorAll('.surface-arrow');
  if (!tabs.length || !panels.length) return;

  function activate(idx) {
    if (idx < 0) idx = tabs.length - 1;
    if (idx >= tabs.length) idx = 0;
    tabs.forEach((t, i) => {
      const on = i === idx;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.setAttribute('tabindex', on ? '0' : '-1');
    });
    panels.forEach((p, i) => {
      const on = i === idx;
      p.classList.toggle('is-active', on);
      if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
    });
  }

  function currentIdx() {
    return Math.max(0, tabs.findIndex(t => t.classList.contains('is-active')));
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => activate(idx));
  });
  arrows.forEach(a => {
    a.addEventListener('click', () => {
      const dir = a.getAttribute('data-dir');
      const i = currentIdx();
      activate(dir === 'next' ? i + 1 : i - 1);
    });
  });
  surface.querySelector('.surface-tabs')?.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const i = currentIdx();
    const nextIdx = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
    activate(nextIdx);
    tabs[nextIdx].focus();
    e.preventDefault();
  });
})();

/* --- Mobile nav drawer toggle --- */
(function setupMobileNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('.nav-links');
  const backdrop = nav.querySelector('.nav-backdrop');
  if (!toggle || !links) return;

  function close() {
    nav.classList.remove('is-open');
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-locked');
  }
  function open() {
    nav.classList.add('is-open');
    links.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-locked');
  }
  toggle.addEventListener('click', () => {
    if (nav.classList.contains('is-open')) close(); else open();
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', close);
  });
  if (backdrop) backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980 && nav.classList.contains('is-open')) close();
  });
})();

/* --- Redesign (genaipi rebuild): department tabs + FAQ accordion --- */
(function setupRedesignInteractions() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  if (tabs.length) {
    const show = (name) => {
      tabs.forEach(t => {
        const on = t.dataset.panel === name;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === name));
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => show(t.dataset.panel));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const n = e.key === 'ArrowRight'
          ? (i + 1) % tabs.length
          : (i - 1 + tabs.length) % tabs.length;
        tabs[n].focus();
        show(tabs[n].dataset.panel);
      });
    });
  }
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    const ico = item.querySelector('.faq-ico');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
      if (ico) ico.textContent = open ? '–' : '+';
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();

/* ============ DISCOVERY ANNIE WEB-CALL WIDGET ============ */
/* No extra script tag is needed in index.html. The Retell web SDK is
   loaded on demand via a dynamic import the first time the button is clicked. */
(function () {
  const btn = document.getElementById('discovery-annie-start');
  const status = document.getElementById('discovery-annie-status');
  if (!btn || !status) return;

  function txt(key) {
    const t = translations[currentLang] || translations.en;
    return t[key] || translations.en[key] || '';
  }
  function say(key) { status.textContent = txt(key); }
  function setLabel(key) {
    btn.setAttribute('data-i18n', key);
    btn.textContent = txt(key);
  }

  let client = null;
  let inCall = false;
  let busy = false;

  /* Ring tone: warms up the browser audio pipeline while WebRTC handshakes,
     so Annie's first word isn't clipped. Also unlocks the AudioContext on
     iOS Safari (must run inside the user-gesture click handler). */
  let audioCtx = null;
  let ringMaster = null;
  let ringTimers = [];

  function startRing() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      ringMaster = audioCtx.createGain();
      ringMaster.gain.value = 0.06;
      ringMaster.connect(audioCtx.destination);

      function pulse(offset) {
        const start = audioCtx.currentTime + offset;
        const o1 = audioCtx.createOscillator();
        const o2 = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o1.frequency.value = 440;
        o2.frequency.value = 480;
        o1.type = 'sine'; o2.type = 'sine';
        o1.connect(g); o2.connect(g);
        g.connect(ringMaster);
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(1, start + 0.05);
        g.gain.setValueAtTime(1, start + 0.55);
        g.gain.linearRampToValueAtTime(0, start + 0.65);
        o1.start(start); o2.start(start);
        o1.stop(start + 0.7); o2.stop(start + 0.7);
      }

      /* Schedule up to ~10s of ring cycles; stopRing() cuts it short. */
      for (let i = 0; i < 6; i++) pulse(i * 1.4);
    } catch (e) { /* ignore: ring is cosmetic, never block the call */ }
  }

  function stopRing() {
    try {
      if (audioCtx && ringMaster) {
        const now = audioCtx.currentTime;
        ringMaster.gain.cancelScheduledValues(now);
        ringMaster.gain.setValueAtTime(ringMaster.gain.value, now);
        ringMaster.gain.linearRampToValueAtTime(0, now + 0.08);
        const toDisconnect = ringMaster;
        setTimeout(function () { try { toDisconnect.disconnect(); } catch (e) {} }, 200);
      }
    } catch (e) {}
    ringMaster = null;
    ringTimers.forEach(function (t) { clearTimeout(t); });
    ringTimers = [];
  }

  function reset(statusKey) {
    stopRing();
    say(statusKey);
    inCall = false;
    busy = false;
    client = null;
    btn.disabled = false;
    setLabel('chooser.ai_btn');
  }

  btn.addEventListener('click', async function () {
    if (busy) return;

    /* A click while a call is live hangs it up. */
    if (inCall && client) {
      try { client.stopCall(); } catch (e) {}
      return;
    }

    busy = true;
    btn.disabled = true;
    say('chooser.st_connecting');
    startRing();

    try {
      const { RetellWebClient } = await import('https://esm.sh/retell-client-js-sdk@2');

      const res = await fetch('/.netlify/functions/create-web-call', { method: 'POST' });
      if (!res.ok) throw new Error('token request failed');
      const data = await res.json();
      if (!data || !data.access_token) throw new Error('no access token');

      const c = new RetellWebClient();
      client = c;

      c.on('call_started', function () {
        stopRing();
        say('chooser.st_connected');
        inCall = true;
        busy = false;
        btn.disabled = false;
        setLabel('chooser.ai_end');
      });
      c.on('call_ended', function () {
        reset('chooser.st_ended');
      });
      c.on('error', function () {
        try { c.stopCall(); } catch (e) {}
        reset('chooser.st_error');
      });

      await c.startCall({ accessToken: data.access_token });
    } catch (err) {
      reset('chooser.st_error');
    }
  });
})();
