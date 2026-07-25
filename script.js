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
  { role:"Intern Scrum Master", org:"Digital Nexus AI", period:"Oct 2025 — Present",
    points:[
      "Facilitated Agile ceremonies — daily stand-ups, sprint planning, reviews, and retrospectives — ensuring full team alignment across cross-functional groups.",
      "Tracked tasks, dependencies, and blockers using Trello and Agile tools, reducing delivery bottlenecks.",
      "Maintained sprint documentation and delivery status updates for digital and AI-focused initiatives.",
      "Coordinated async and sync workflows across distributed teams spanning multiple time zones."
    ]},
  { role:"Project Management Intern", org:"Theory to Trade", period:"Oct 2025 — Present",
    points:[
      "Coordinated progress tracking across 5+ concurrent project teams.",
      "Maintained RAID logs, action logs, and status reports for hybrid delivery teams.",
      "Supported change management and stakeholder communication between business and technical stakeholders.",
      "Monitored risks and dependencies to support on-time delivery in a structured, fast-paced PM environment."
    ]},
  { role:"Event Manager & Front Office Operations", org:"Villa Upper Dickson", period:"Nov 2024 — Sep 2025",
    points:[
      "Managed end-to-end event logistics — planning, vendor coordination, timeline management, and on-site execution.",
      "Handled guest communication, scheduling, and operational workflows under strict time and quality constraints.",
      "Demonstrated practical project management skills in a high-pressure, client-facing environment."
    ]},
  { role:"Bellperson", org:"Villa Upper Dickson", period:"Jan 2021 — Nov 2023",
    points:[
      "Delivered consistent, high-quality service over nearly 3 years in a fast-paced hospitality environment.",
      "Coordinated arrivals, departures, and guest logistics — building strong reliability and communication discipline."
    ]}
];

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
  { name:"Foundations of Project Management", issuer:"Google / Coursera", link:"https://www.coursera.org/account/accomplishments/verify/5CSZMS7ZSA7H" },
  { name:"Get Started with Jira (Project)", issuer:"Coursera", link:"https://www.coursera.org/account/accomplishments/verify/JBRYA3RQMT3W" },
  { name:"Introduction to Jira", issuer:"Coursera", link:"https://www.coursera.org/account/accomplishments/verify/IH6G6VVVMGJJ" },
  { name:"Scrum Fundamentals Certified (SFC)", issuer:"SCRUMstudy", link:"https://www.scrumstudy.com/certification/verify?type=SFC&number=1111419" },
  { name:"Google AI Essentials", issuer:"Google / Coursera", link:"https://www.coursera.org/account/accomplishments/specialization/B4XS7Q5WCULL" },
  { name:"Python for Data Science, AI & Development", issuer:"Coursera", link:"https://www.coursera.org/account/accomplishments/verify/4S0XTFE4UH91" }
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
        <div class="cert-issuer">${c.issuer}</div>
      </div>
      <div class="cert-badge">✓</div>
    </div>
    <a href="${c.link}" target="_blank" rel="noreferrer" class="cert-verify">Verify credential ↗</a>
  </div>
`).join("");

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
const sections = ["about","skills","experience","projects","certifications","contact"]
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
document.querySelectorAll(".skill-card.reveal, .tl-item.reveal, .proj-card.reveal, .cert-card.reveal")
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
