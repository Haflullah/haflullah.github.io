// ============ DATA ============
const TARGET_ROLES = [
  "Project Coordinator", "PMO", "Scrum Master", "Project Manager",
  "Associate Project Manager", "Document Controller"
];

const SKILLS = [
  { icon:"🔁", group:"Methodologies", items:["Agile", "Scrum", "Kanban"] },
  { icon:"🧰", group:"Tools", items:["Jira", "Trello", "Notion", "Slack", "MS Office (Excel, Word, PPT)", "WordPress"] },
  { icon:"📋", group:"PM Skills", items:["Backlog Management", "Sprint Planning", "RAID Logs", "Status Reporting", "Risk Tracking", "Change Management"] },
  { icon:"🤝", group:"Soft Skills", items:["Async & Sync Communication", "Cross-functional Collaboration", "Stakeholder Management", "Active Listening"] }
];

const EXPERIENCE = [
  { role:"Project Manager", org:"NEULABS FZ-LLC", period:"June 2026 — Present · Dubai, UAE",
    points:[
      "Support project coordination for a Dubai-based tech team, tracking tasks and milestones across multiple concurrent workstreams.",
      "Maintain sprint documentation and status reporting in Jira and Confluence to keep stakeholders aligned on delivery progress.",
      "Participate in daily stand-ups and sprint planning, helping surface and track blockers across cross-functional teams.",
      "Coordinate communication between technical and business stakeholders on project updates and requirements."
    ]},
  { role:"Assistant Project Manager", org:"Theory to Trade", period:"April 2025 — Present · Colombo",
    points:[
      "Coordinated progress tracking for 5+ concurrent project teams, ensuring high-level monitoring of project health and milestone achievement.",
      "Strengthened project governance by maintaining detailed action logs, risk registers (RAID logs), and status reports for hybrid teams.",
      "Monitored risks and dependencies, proactively supporting on-time delivery within a structured, fast-paced PM environment.",
      "Supported change management activities, improving the flow of communication and requirements between business stakeholders."
    ]},
  { role:"Captain, Rajarata University Football", org:"Rajarata University of Sri Lanka", period:"December 2024 — December 2025 · Mihintale",
    points:[
      "Directed team operations for 20+ athletes, managing schedules, performance expectations, and training logistics under pressure.",
      "Acted as liaison between the team, coaching staff, and university management, refining negotiation and conflict-resolution skills.",
      "Led strategic planning for competitive matches, demonstrating data-driven decision-making in high-stakes environments."
    ]},
  { role:"Vice Captain, Rajarata University Football", org:"Rajarata University of Sri Lanka", period:"December 2023 — December 2024 · Mihintale",
    points:[
      "Supported team leadership in managing a squad of 20+ athletes, assisting with the coordination of training sessions and match-day logistics.",
      "Facilitated team communication, ensuring all members were aligned with the coach's strategies and university requirements.",
      "Demonstrated high-level commitment and discipline, serving as a mentor for junior players and helping maintain a positive team culture."
    ]},
  { role:"Scrum Master", org:"Digital Nexus AI", period:"January 2024 — March 2025 · Remote",
    points:[
      "Facilitated Agile ceremonies, including daily stand-ups and sprint planning support, ensuring 100% alignment across remote, cross-functional teams.",
      "Optimized project visibility by tracking tasks, dependencies, and blockers using Trello/Agile tools, reducing time to resolve delivery bottlenecks.",
      "Managed delivery documentation and prepared status updates for digital and AI-focused initiatives, bridging the communication gap between technical teams and stakeholders.",
      "Coordinated async workflows in a fully remote environment, ensuring high-quality collaboration across different time zones."
    ]},
  { role:"Store & Inventory Assistant", org:"Japan Lanka Galle", period:"January 2021 — December 2023 · Galle",
    points:[
      "Managed daily stock control and physical stock counts for automotive parts inventory, keeping stock records accurate and flagging low-stock items before they caused delays.",
      "Processed customer orders and handled walk-in customers, checking part numbers and order details to ensure accurate, complete order fulfillment.",
      "Coordinated dispatch of parts orders with delivery staff, confirming order readiness and timing to support on-time delivery.",
      "Checked for out-of-stock and damaged items during order preparation, escalating issues promptly to avoid delivery delays.",
      "Kept the stockroom organized for efficient retrieval of parts, supporting faster order turnaround during busy periods.",
      "Balanced stock management, customer service, and order dispatch simultaneously in a fast-paced, high-footfall retail environment."
    ]}
];

const EDUCATION = [
  {
    degree:"Bachelor of Science, Information Technology",
    org:"Rajarata University of Sri Lanka",
    period:"September 2022 — April 2026",
    icon:"🎓",
    blurb:"Focused on the intersection of technical delivery and business management — a foundation in SDLC, Agile methodologies, and the strategic oversight IT project delivery requires.",
    modules:[
      "IT Project Management — integration, scope, time/cost estimation & risk mitigation",
      "Software Engineering — SDLC models (Agile/Scrum), requirements engineering, quality metrics",
      "Management Information Systems — IT infrastructure for operational strategy",
      "Operational Research — PERT/CPM & network analysis for project scheduling",
      "Professional Practice — stakeholder management, leadership styles, team coordination"
    ],
    skills:["SDLC","Agile & Scrum","PERT/CPM","Risk Management","Requirement Analysis","Stakeholder Communication"]
  },
  {
    degree:"High School Diploma, Engineering Technology (General)",
    org:"Malharus Sulhiya Central College, Galle",
    period:"June 2018 — December 2020",
    icon:"📘",
    blurb:"A technical foundation in engineering systems and project management, bridging technical design with business feasibility and operational oversight.",
    modules:[
      "Business Analysis — Benefit-Cost Analysis (BCA), sensitivity analysis, financial feasibility",
      "Management Functions — planning, organizing, directing & evaluation",
      "Industrial Safety — hazard identification, safety standards, risk mitigation protocols",
      "Project Estimation — Bills of Quantities (BOQ) & technical budgeting"
    ],
    skills:["Benefit-Cost Analysis","Project Estimation","Risk Mitigation","Management Functions","Technical Planning","Quality Control"]
  }
];

// ============ DATA: AI ASSISTANT (rule-based, on-device — no API key required) ============
const AI_PROFILE = {
  name:"Mohomed Haflullah",
  role:"Project Manager, Scrum Master & PMO/Agile Delivery specialist",
  location:"Dubai, UAE",
  seeking:"Project Coordinator, PMO Analyst, Scrum Master, or Project Manager roles across the UAE (remote/hybrid welcome)",
  email:"mohomedhaflullah@gmail.com",
  phone:"+94 75 823 9491",
  linkedin:"linkedin.com/in/mohomedhaflullah"
};

const AI_QA = [
  { k:["current role","currently","now working","present job","neulabs"],
    a:"Mohomed is currently a Project Manager at NEULABS FZ-LLC in Dubai (since June 2026), supporting project coordination for a Dubai-based tech team — tracking milestones, running sprint documentation in Jira/Confluence, and coordinating between technical and business stakeholders." },
  { k:["experience","background","work history","career"],
    a:"Mohomed's delivery experience spans Project Manager (NEULABS FZ-LLC, Dubai), Assistant Project Manager (Theory to Trade, Colombo), Scrum Master (Digital Nexus AI, remote), plus leadership as Captain/Vice-Captain of Rajarata University Football. Scroll to the Experience timeline for the full picture." },
  { k:["scrum","agile","ceremonies","sprint"],
    a:"He facilitates Agile ceremonies — stand-ups, sprint planning, retrospectives — and has run these for fully remote, cross-functional teams at Digital Nexus AI, achieving full team alignment across time zones." },
  { k:["tools","jira","confluence","trello","tech stack","software"],
    a:"Day-to-day tools: Jira, Confluence, Trello, Notion, MS Office, plus WordPress for client-facing delivery work — and he actively uses AI-assisted workflows in project management." },
  { k:["education","degree","university","study","school"],
    a:"BSc in Information Technology, Rajarata University of Sri Lanka (Sep 2022 – Apr 2026), with coursework in IT Project Management, Software Engineering (SDLC/Agile), PERT/CPM, and stakeholder management. See the Education section for full module detail." },
  { k:["certification","certified","credential","course"],
    a:"Certifications include Foundations of Project Management, Fundamentals of Digital Marketing, Prompt Literacy (One Million Prompters), Introduction to Oracle Cloud Essentials, and Introduction to WordPress." },
  { k:["project","case study","example","portfolio work","delivered"],
    a:"A strong example is the MM Caterings digital transformation project — Mohomed ran requirements gathering, built a bilingual WordPress ordering platform, designed a QR-based festival distribution system, and delivered on time using Trello + Notion. Full write-up is in the Projects section." },
  { k:["language","languages","speak"],
    a:"English (Professional Working), Tamil (Native/Bilingual), and Sinhala (Native/Bilingual)." },
  { k:["location","based","where","dubai","uae"],
    a:"Based in Dubai, UAE — open to Project Coordinator, PMO Analyst, Scrum Master, or Project Manager roles across the UAE, remote or hybrid included." },
  { k:["contact","email","phone","reach","hire","available","whatsapp"],
    a:`Best ways to reach Mohomed: email at ${AI_PROFILE.email}, WhatsApp/phone at ${AI_PROFILE.phone}, or LinkedIn at ${AI_PROFILE.linkedin}. He typically replies within a day.` },
  { k:["football","captain","leadership","soft skill","team"],
    a:"As Captain of Rajarata University Football, he directed operations for a 20+ member team — scheduling, performance expectations, and liaising with coaching staff and university management. It's where his negotiation and pressure-management skills come from." },
  { k:["why hire","strength","fit","summary","who is"],
    a:"Mohomed coordinates progress across 5+ concurrent project teams, keeps RAID logs and status reporting airtight, and bridges technical and business stakeholders — with hands-on Agile/Scrum delivery in both remote and hybrid setups." }
];
const AI_FALLBACK = `I don't have a canned answer for that yet — but you can ask about his experience, skills, education, certifications, or how to get in touch, or just reach him directly at ${AI_PROFILE.email}.`;
const AI_SUGGESTIONS = ["What's his current role?", "What tools does he use?", "Tell me about his education", "How do I contact him?"];

const PROJECTS = [
  {
    tag:"Client Case Study · Digital Transformation",
    title:"MM Caterings — Client Digital Transformation Project",
    quote:"Real client delivery for a local catering business, focused on digitising event order management and large-scale festival food distribution using zero-cost tools.",
    blocks:[
      { h:"Challenge", p:"The client had no digital system for managing event orders or tracking festival distribution (Ramazan & Hajj Biriyani Sahan), leading to operational delays and order errors." },
      { h:"What I Did", list:[
        "Conducted stakeholder interviews to gather requirements and define project scope, risks, and success criteria.",
        "Built a multilingual (English & Sinhala) WordPress customer platform with integrated order forms (WPForms).",
        "Designed a QR-based order verification system for festival-day distribution tracking.",
        "Managed the full project lifecycle using Agile practices — Trello board (Backlog → Sprint → Review → Done).",
        "Maintained structured documentation in Notion: project charter, risk register, sprint notes, and closure report.",
        "Conducted functional testing and operational simulation before go-live."
      ]},
      { h:"Result", p:"Project delivered on time before the Ramazan festival deadline. Client successfully adopted the digital platform for order intake and QR-based distribution — eliminating manual, paper-based errors entirely." }
    ],
    meta:["Project Coordination","Stakeholder Management","Trello","Notion","WordPress","Agile Delivery"],
    shots:[
      { src:"images/Agile_Trello_Client_Project_Board.png", cap:"Trello board used for backlog management, sprint execution, review, and delivery tracking." },
      { src:"images/Notion_PM_Project_Portfolio_MM_Caterings.png", cap:"Notion workspace used for project charter creation, documentation, and lifecycle tracking." }
    ]
  },
  {
    tag:"Roadmapping · Jira",
    title:"Agile Lifecycle Execution & Jira Project Setup",
    quote:"Enterprise-style Agile delivery simulation — translating Agile theory into structured, tool-based execution using Jira.",
    blocks:[
      { h:"What I Did", list:[
        "Configured Jira project with structured workflows, quality gates, and deployment controls.",
        "Applied WIP limits to improve flow efficiency and reduce delivery bottlenecks.",
        "Managed backlog prioritisation, issue tracking, and sprint-style execution.",
        "Practised delivery readiness checks, status transitions, and sprint reporting."
      ]}
    ],
    meta:["Jira","Agile Methodology","Kanban","Workflow Management","Backlog Prioritisation"],
    shots:[
      { src:"images/Agile_Jira_Kanban_Board.png", cap:"Jira Kanban board showing workflow stages, WIP limits, and task progression." },
      { src:"images/Agile_Jira_Project_Timeline.png", cap:"Timeline view illustrating epic-level planning and delivery tracking." }
    ]
  },
  {
    tag:"Self-Directed Practice",
    title:"Personal Agile Sprint Practice — Trello",
    quote:"Self-directed sprint execution to build delivery discipline and consistent workflow habits.",
    blocks:[
      { h:"What I Did", list:[
        "Ran full sprint cycles: planning → execution → review → retrospective.",
        "Tracked tasks using a Kanban board with clear swimlanes and priorities.",
        "Built personal delivery accountability and task ownership habits."
      ]}
    ],
    meta:["Trello","Kanban","Sprint Planning","Self-Management"],
    shots:[]
  }
];

const CERTS = [
  { name:"Foundations of Project Management" },
  { name:"Fundamentals of Digital Marketing" },
  { name:"One Million Prompters — Prompt Literacy Certification" },
  { name:"Introduction to Oracle Cloud Essentials" },
  { name:"Become a Content Manager: Introduction to WordPress" }
];

// ============ RENDER: TICKER ============
const tickerItems = [...TARGET_ROLES, ...TARGET_ROLES];
document.getElementById("tickerTrack").innerHTML = tickerItems
  .map(r => `<span>${r}<span class="sep">◆</span></span>`).join("");

// ============ RENDER: TARGET ROLE CHIPS ============
document.getElementById("targetRolesChips").innerHTML = TARGET_ROLES
  .map((r,i) => `<span class="chip${i === 2 ? " grad" : ""}">${r}</span>`).join("");

// ============ RENDER: SKILLS ============
document.getElementById("skillsGrid").innerHTML = SKILLS.map(s => `
  <div class="skill-card reveal">
    <div class="skill-glyph">${s.icon}</div>
    <h3>${s.group}</h3>
    <ul>${s.items.map(it => `<li>${it}</li>`).join("")}</ul>
  </div>
`).join("");

// ============ RENDER: TIMELINE ============
document.getElementById("timeline").innerHTML = EXPERIENCE.map(e => `
  <div class="tl-item reveal">
    <span class="tl-dot"></span>
    <div class="tl-card">
      <div class="tl-period mono">${e.period}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-org">${e.org}</div>
      <ul class="tl-points">${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>
  </div>
`).join("");

// ============ RENDER: PROJECTS ============
function shotHTML(shot){
  return `
    <div class="shot">
      <img src="${shot.src}" alt="${shot.cap}" loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="shot-fallback" style="display:none;">
        <span class="ic">🖼️</span>
        <span>Add <strong>${shot.src}</strong> to your repo to show this screenshot</span>
      </div>
      <div class="shot-cap">${shot.cap}</div>
    </div>
  `;
}

document.getElementById("projectsList").innerHTML = PROJECTS.map(p => `
  <article class="proj-card reveal">
    <div class="proj-top">
      <span class="proj-tag">${p.tag}</span>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-quote">"${p.quote}"</p>
      ${p.blocks.map(b => `
        <div class="proj-block">
          <h4>${b.h}</h4>
          ${b.list ? `<ul>${b.list.map(li => `<li>${li}</li>`).join("")}</ul>` : `<p>${b.p}</p>`}
        </div>
      `).join("")}
      <div class="proj-meta">${p.meta.map(m => `<span>${m}</span>`).join("")}</div>
    </div>
    ${p.shots.length ? `<div class="proj-shots${p.shots.length === 1 ? " single" : ""}">${p.shots.map(shotHTML).join("")}</div>` : ""}
  </article>
`).join("");

// ============ RENDER: CERTS ============
document.getElementById("certsGrid").innerHTML = CERTS.map(c => `
  <div class="cert-card reveal">
    <div class="cert-top">
      <div>
        <div class="cert-name">${c.name}</div>
      </div>
      <div class="cert-badge">✓</div>
    </div>
  </div>
`).join("");

// ============ RENDER: EDUCATION ============
const eduList = document.getElementById("eduList");
if(eduList){
  eduList.innerHTML = EDUCATION.map(e => `
    <div class="edu-card reveal">
      <div class="edu-inner">
        <div class="edu-icon">${e.icon}</div>
        <div class="edu-head">
          <div class="edu-title">${e.degree}</div>
          <div class="edu-sub">${e.org} · ${e.period}</div>
        </div>
      </div>
      <p class="edu-blurb">${e.blurb}</p>
      <div class="edu-modules">
        <span class="label-sm">KEY MODULES</span>
        <ul>${e.modules.map(m => `<li>${m}</li>`).join("")}</ul>
      </div>
      <div class="edu-skills">${e.skills.map(s => `<span>${s}</span>`).join("")}</div>
    </div>
  `).join("");
}

// ============ RENDER: KANBAN HERO BOARD ============
const KANBAN = {
  cols: [
    { cards:["Stakeholder interviews", "QR flow design"] },
    { cards:["WordPress order form", { t:"Sprint review prep", gold:true }] },
    { cards:["RAID log update"] },
    { cards:["Trello board live", "Notion charter shipped"] }
  ]
};
document.querySelectorAll("#kanbanBoard .board-col .col-cards").forEach((el, i) => {
  const col = KANBAN.cols[i];
  el.innerHTML = col.cards.map((c, j) => {
    const text = typeof c === "string" ? c : c.t;
    const gold = typeof c === "object" && c.gold;
    return `<div class="k-card${gold ? " gold" : ""}" style="animation-delay:${(i * 0.15 + j * 0.1)}s">${text}<div class="k-bar"></div></div>`;
  }).join("");
});

// ============ NAV: scroll state + active link ============
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = ["about","skills","experience","projects","certifications","education","contact"]
  .map(id => document.getElementById(id)).filter(Boolean);

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(a => a.classList.toggle("active", a.dataset.nav === entry.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => navObserver.observe(s));

// ============ MOBILE MENU ============
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

// ============ REVEAL ON SCROLL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

// initial static reveals
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
// dynamically-injected reveals (skills, timeline, projects, certs) — observe after render
document.querySelectorAll(".skill-card.reveal, .tl-item.reveal, .proj-card.reveal, .cert-card.reveal, .edu-card.reveal")
  .forEach(el => revealObserver.observe(el));

// ============ ANIMATED COUNTERS ============
function animateCount(el, target, duration = 1400){
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statEls = document.querySelectorAll(".stat-n");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCount(entry.target, Number(entry.target.dataset.count));
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statEls.forEach(el => statObserver.observe(el));

// ============ AI ASSISTANT WIDGET (on-device, rule-based — no API/keys) ============
(function initAI(){
  const toggle = document.getElementById("aiToggle");
  const panel = document.getElementById("aiPanel");
  const closeBtn = document.getElementById("aiClose");
  const body = document.getElementById("aiBody");
  const form = document.getElementById("aiForm");
  const input = document.getElementById("aiInput");
  const chipsWrap = document.getElementById("aiChips");
  if(!toggle || !panel) return;

  function addMsg(text, who){
    const row = document.createElement("div");
    row.className = `ai-msg ${who}`;
    row.innerHTML = `<div class="ai-bubble">${text}</div>`;
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
  }

  function answer(q){
    const lower = q.toLowerCase();
    const hit = AI_QA.find(item => item.k.some(k => lower.includes(k)));
    return hit ? hit.a : AI_FALLBACK;
  }

  function respondTo(q){
    addMsg(q.replace(/</g,"&lt;"), "user");
    input.value = "";
    const typing = document.createElement("div");
    typing.className = "ai-msg bot";
    typing.innerHTML = `<div class="ai-bubble ai-typing"><span></span><span></span><span></span></div>`;
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;
    setTimeout(() => {
      typing.remove();
      addMsg(answer(q), "bot");
    }, 480 + Math.random() * 380);
  }

  function renderChips(){
    chipsWrap.innerHTML = AI_SUGGESTIONS.map(s => `<button type="button" class="ai-chip">${s}</button>`).join("");
    chipsWrap.querySelectorAll(".ai-chip").forEach(btn => {
      btn.addEventListener("click", () => respondTo(btn.textContent));
    });
  }

  let opened = false;
  function openPanel(){
    panel.classList.add("open");
    toggle.classList.add("active");
    if(!opened){
      addMsg(`Hi, I'm Mohomed's portfolio assistant. Ask me about his experience, skills, education, or how to reach him.`, "bot");
      renderChips();
      opened = true;
    }
    input.focus();
  }
  function closePanel(){
    panel.classList.remove("open");
    toggle.classList.remove("active");
  }

  toggle.addEventListener("click", () => panel.classList.contains("open") ? closePanel() : openPanel());
  closeBtn.addEventListener("click", closePanel);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if(!q) return;
    respondTo(q);
  });
})();
