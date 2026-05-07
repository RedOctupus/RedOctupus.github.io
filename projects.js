const pageContent = {
  en: {
    documentTitle: "Projects & Achievements | Hongyu Zhang",
    brandRole: "AI Solution Builder",
    nav: [
      { id: "home", label: "Home", href: "index.html#home" },
      { id: "about", label: "About", href: "index.html#about" },
      { id: "skills", label: "Skills", href: "index.html#skills" },
      { id: "projects", label: "Projects", href: "projects.html" },
      { id: "resume", label: "Resume", href: "index.html#resume" },
      { id: "contact", label: "Contact", href: "index.html#contact" }
    ],
    hero: {
      back: "Back to Home",
      eyebrow: "Projects & Achievements",
      title: "Projects & Achievements",
      subtitle: "Practical AI systems, competition work, research prototypes, and applied delivery. This page collects the work that best represents how I turn AI capability into usable systems.",
      typingPrefix: "Built around",
      typingPhrases: [
        "usable AI systems",
        "structured workflow logic",
        "clear technical storytelling",
        "real-world solution value"
      ],
      awardCaption: "Lingnan Cup Second Prize project team, April 25, 2026.",
      videoCaption: "Event/interview video featuring Hongyu Zhang."
    },
    highlights: [
      { value: "Lingnan Cup Second Prize", label: "Competition award" },
      { value: "75%", label: "Efficiency improvement" },
      { value: "95%+", label: "Extraction accuracy" },
      { value: "HKD 6.39M", label: "Estimated annual savings" }
    ],
    projectList: {
      heading: "Full Project List",
      lead: "Each card focuses on the problem, approach, outcome, contribution, and technologies behind the work."
    },
    projects: [
      {
        title: "Lingnan Cup SRR Government AI Processing System",
        meta: "Second Prize | The 4th Lingnan Cup China Economic Development Case Analysis Competition | Apr 25, 2026",
        media: {
          src: "assets/lingnan-cup/award-team.jpg",
          alt: "Lingnan Cup Second Prize award photo",
          frameType: "matte",
          aspectRatio: "2000 / 1362"
        },
        problem: "Hong Kong ASD handles more than 10,000 Slope Repair Request cases each year. The workflow is document-heavy, historical data reaches 55GB, and manual review creates bottlenecks in intake, extraction, verification, and case follow-up.",
        approach: "We proposed an LLM-based intelligent document processing system for SRR case handling. The solution uses a 7-layer Agent architecture, OCR, NLP field extraction, vector search, RAG, Agentic AI, and quality-gate self-repair to connect documents, case logic, and workflow execution.",
        outcome: "The system design targets field extraction accuracy above 95%, reduces processing time from 35-55 minutes to around 10 minutes per case, improves efficiency by about 75%, estimates annual labor cost savings of HKD 6.39M, and gives an estimated payback period of around 5 months.",
        contribution: "Project leader/contact. I contributed to AI solution framing, workflow logic, technical narrative, competition report/PPT, and presentation/interview communication.",
        technologies: ["LLM", "Agentic AI", "RAG", "OCR", "NLP", "Vector Search", "Quality Gate", "Workflow Automation"],
        links: []
      },
      {
        title: "Uniflow",
        meta: "AI workflow platform | Mar 2026 - Present",
        media: {
          src: "assets/uniflow-premium.png",
          alt: "Uniflow interface screenshot",
          frameType: "matte-dark",
          aspectRatio: "2535 / 1211"
        },
        problem: "AI Agents are increasingly capable, but beginners often struggle to structure tasks, choose tools, and repeat effective workflows across real local applications.",
        approach: "Uniflow turns user intent into executable, reusable workflows. It can invoke tools such as skills, CLI, and MCP integrations, run across local applications, and save successful workflow logic in the cloud for reuse when similar tasks appear.",
        outcome: "The prototype demonstrates dynamic workflow generation, cross-app execution, reusable workflow memory, and reduced repeated planning/token cost, making practical agent capability easier for non-expert users to access.",
        contribution: "I built the browser-oriented CLI information acquisition module, allowing the agent to safely collect, extract, and format browser search results for downstream workflow execution.",
        technologies: ["AI Agent", "CLI", "MCP", "Workflow Automation", "Tool Use", "Browser Information Retrieval"],
        links: [
          { label: "Live Prototype", href: "https://prototype-kohl-one.vercel.app/" },
          { label: "GitHub Repo", href: "https://github.com/OpenUniflo/prototype" }
        ]
      },
      {
        title: "Dual-Stage AI Safety Inspection System",
        meta: "Computer vision safety inspection | 2025 - 2026",
        media: {
          src: "assets/ai-safety-image1.png",
          alt: "Safety inspection system interface",
          frameType: "matte",
          aspectRatio: "1266 / 663"
        },
        problem: "Construction sites are high-risk environments, and different scenes require different PPE combinations. The project aimed to create a locally deployable system that checks whether workers meet PPE requirements.",
        approach: "Built a two-stage pipeline: YOLOv11 classification first identifies construction scenes, then YOLOv11 detection checks PPE compliance. The local interface supports image/video inference, automatic preprocessing, and visual output review.",
        outcome: "The classification model reached Top-1 accuracy of 0.99, while detection achieved mAP50(B) of 0.793. Runtime was framed as near real-time, around 25 FPS for classification and 15 FPS for detection on RTX 40-series hardware.",
        contribution: "I handled complex data structuring, model building, experiment analysis, and the final presentation/reporting of the system.",
        technologies: ["YOLOv11", "Computer Vision", "Object Detection", "Classification", "Flask", "HTML/CSS/JS", "Model Evaluation"],
        links: []
      },
      {
        title: "Switch Hunt",
        meta: "Reinforcement learning game AI | Feb 2026",
        media: {
          src: "assets/switch-hunt-game-ui.png",
          alt: "Switch Hunt game UI screenshot",
          frameType: "matte",
          aspectRatio: "1024 / 768"
        },
        problem: "The project explored how reinforcement learning can support adaptive, non-scripted behavior in a complex game task.",
        approach: "I built a 2D horror maze game in Pygame and trained the ghost agent with DQN in PyTorch. A curriculum-style reward design guided pursuit, retreat, baiting, sprint behavior, and risk-aware decisions.",
        outcome: "The trained agent showed behavior such as cautious approach, light-trigger baiting, retreat under risk, and aggressive pursuit. The report summarizes gameplay around roughly 50% player win rate and about 60% ghost catch rate.",
        contribution: "Individual project. I completed the DQN structure, training logic, experiment analysis, and report independently, with AI assisting part of the game-side production process.",
        technologies: ["DQN", "PyTorch", "Pygame", "Reinforcement Learning", "Reward Design", "Game AI"],
        links: [{ label: "GitHub Repo", href: "https://github.com/RedOctupus/Switch-Hunt" }]
      },
      {
        title: "Beeinventor AI Form Digitization / Applied AI Delivery",
        meta: "Industry AI solution delivery | Jul 2023 - Present",
        media: null,
        problem: "Handwritten and non-standard forms create repeated manual work and inconsistent digital records, especially when data needs to flow into mobile or IoT-enabled platforms.",
        approach: "Designed and supported AI solutions combining NLP, computer vision, form-processing logic, data pipelines, and client-facing demonstrations to improve document digitization workflows.",
        outcome: "The solution improved mobile-platform form-processing efficiency by more than 60% and supported enterprise-facing technical communication and delivery.",
        contribution: "Worked across solution design, data processing pipeline optimization, platform debugging, visual/market material production, and technical presentation to enterprise decision-makers.",
        technologies: ["NLP", "Computer Vision", "OCR-style Processing", "Data Pipelines", "IoT Integration", "Client Delivery"],
        links: []
      }
    ],
    gallery: {
      heading: "Lingnan Cup Gallery",
      lead: "Selected visuals from the competition materials, optimized for web display.",
      items: [
        { src: "assets/lingnan-cup/award-team.jpg", alt: "Lingnan Cup Second Prize award team", caption: "Award/team visual" },
        { src: "assets/lingnan-cup/venue-stage.jpg", alt: "Lingnan Cup competition venue", caption: "Competition venue" },
        { src: "assets/lingnan-cup/defense-session.jpg", alt: "Lingnan Cup defense session", caption: "Defense and presentation" },
        { src: "assets/lingnan-cup/event-group.jpg", alt: "Lingnan Cup event group photo", caption: "Full event group photo" },
        { src: "assets/lingnan-cup/lingnan-hall-team.jpg", alt: "Lingnan Hall team visual", caption: "Lingnan Hall team visual" }
      ]
    },
    footer: "Projects page for Hongyu Zhang's GitHub Pages portfolio."
  },
  zh: {
    documentTitle: "项目与成果 | 张泓宇",
    brandRole: "AI 解决方案构建者",
    nav: [
      { id: "home", label: "首页", href: "index.html#home" },
      { id: "about", label: "关于我", href: "index.html#about" },
      { id: "skills", label: "技能", href: "index.html#skills" },
      { id: "projects", label: "项目", href: "projects.html" },
      { id: "resume", label: "简历", href: "index.html#resume" },
      { id: "contact", label: "联系", href: "index.html#contact" }
    ],
    hero: {
      back: "返回首页",
      eyebrow: "项目与成果",
      title: "项目与成果",
      subtitle: "实用 AI 系统、竞赛项目、研究原型与应用交付。这个页面集中展示我最能代表个人能力的项目，以及我如何把 AI 能力转化成可用系统。",
      typingPrefix: "围绕",
      typingPhrases: [
        "真正可用的 AI 系统",
        "结构清晰的工作流逻辑",
        "清楚有力的技术叙事",
        "面向真实场景的解决方案价值"
      ],
      awardCaption: "岭南杯二等奖项目团队，2026 年 4 月 25 日。",
      videoCaption: "赛事/采访视频，采访主角包含张泓宇。"
    },
    highlights: [
      { value: "岭南杯二等奖", label: "竞赛获奖" },
      { value: "75%", label: "效率提升" },
      { value: "95%+", label: "字段提取准确率" },
      { value: "639 万港元", label: "预计年度节省成本" }
    ],
    projectList: {
      heading: "完整项目列表",
      lead: "每个项目卡片都围绕问题、方法、结果、贡献与技术栈来呈现。"
    },
    projects: [
      {
        title: "岭南杯 SRR 政务 AI 处理系统",
        meta: "二等奖 | 第四届岭南杯中国经济发展案例分析大赛 | 2026 年 4 月 25 日",
        media: {
          src: "assets/lingnan-cup/award-team.jpg",
          alt: "岭南杯二等奖领奖照片",
          frameType: "matte",
          aspectRatio: "2000 / 1362"
        },
        problem: "香港建筑署每年处理超过 10,000 宗斜坡维修请求。流程高度依赖文档，历史资料约 55GB，人工审核在接收、抽取、核验和跟进环节都存在明显效率瓶颈。",
        approach: "团队提出面向 SRR 案件处理的大模型智能文档处理系统。方案结合 7 层 Agent 架构、OCR、NLP 字段抽取、向量检索、RAG、Agentic AI，以及质量门与自修复机制，连接文档、案件逻辑和流程执行。",
        outcome: "方案目标字段提取准确率超过 95%，将单案处理时间从 35-55 分钟降至约 10 分钟，效率提升约 75%，预计每年节省人力成本约 639 万港元，回本周期约 5 个月。",
        contribution: "项目负责人/联系人。我的贡献包括 AI 方案定位、工作流逻辑、技术叙事、比赛报告与 PPT，以及答辩和采访沟通。",
        technologies: ["LLM", "Agentic AI", "RAG", "OCR", "NLP", "向量检索", "质量门", "工作流自动化"],
        links: []
      },
      {
        title: "Uniflow",
        meta: "AI 工作流平台 | 2026 年 3 月至今",
        media: {
          src: "assets/uniflow-premium.png",
          alt: "Uniflow 界面截图",
          frameType: "matte-dark",
          aspectRatio: "2535 / 1211"
        },
        problem: "AI Agent 越来越强，但初学者常常难以拆解任务、选择工具，并在真实本地应用之间复用有效工作流。",
        approach: "Uniflow 将用户意图转成可执行、可复用的工作流。系统可以调用 skills、CLI、MCP 等工具，跨本地应用运行，并把成功工作流逻辑保存到云端，供相似任务复用。",
        outcome: "原型展示了动态工作流生成、跨应用执行、可复用工作流记忆，以及降低重复规划/token 成本的能力，让非专家用户更容易获得实用的 Agent 能力。",
        contribution: "我负责浏览器信息获取 CLI 模块，让 Agent 能够安全地收集、抽取并格式化浏览器搜索结果，用于后续工作流执行。",
        technologies: ["AI Agent", "CLI", "MCP", "工作流自动化", "工具调用", "浏览器信息获取"],
        links: [
          { label: "在线原型", href: "https://prototype-kohl-one.vercel.app/" },
          { label: "GitHub 仓库", href: "https://github.com/OpenUniflo/prototype" }
        ]
      },
      {
        title: "双阶段 AI 安全监测系统",
        meta: "计算机视觉安全监测 | 2025 - 2026",
        media: {
          src: "assets/ai-safety-image1.png",
          alt: "安全监测系统界面",
          frameType: "matte",
          aspectRatio: "1266 / 663"
        },
        problem: "施工现场属于高风险环境，不同场景需要不同 PPE 组合。项目目标是构建一个可本地部署的系统，判断工人是否满足防护装备要求。",
        approach: "系统采用双阶段流程：先用 YOLOv11 分类识别施工场景，再用 YOLOv11 检测 PPE 合规情况。本地界面支持图片/视频推理、自动预处理和可视化结果查看。",
        outcome: "分类模型 Top-1 准确率达到 0.99，检测模型 mAP50(B) 达到 0.793。运行速度按接近实时来定位，在 RTX 40 系列硬件上分类约 25 FPS，检测约 15 FPS。",
        contribution: "我负责复杂数据梳理、模型搭建、实验分析，以及最终展示和报告汇报。",
        technologies: ["YOLOv11", "计算机视觉", "目标检测", "图像分类", "Flask", "HTML/CSS/JS", "模型评估"],
        links: []
      },
      {
        title: "Switch Hunt",
        meta: "强化学习游戏 AI | 2026 年 2 月",
        media: {
          src: "assets/switch-hunt-game-ui.png",
          alt: "Switch Hunt 游戏界面截图",
          frameType: "matte",
          aspectRatio: "1024 / 768"
        },
        problem: "项目探索强化学习如何在复杂游戏任务中支持自适应、非脚本化的智能体行为。",
        approach: "我使用 Pygame 构建 2D 恐怖迷宫游戏，并在 PyTorch 中用 DQN 训练鬼的行为。奖励设计采用类似课程学习的方式，引导追击、撤退、诱导、冲刺和风险判断。",
        outcome: "训练后的智能体表现出谨慎接近、诱导玩家开灯、风险下撤退、玩家脆弱时快速追击等行为。报告中总结对局表现为玩家胜率约 50%，鬼的抓捕率约 60%。",
        contribution: "个人项目。DQN 结构、训练逻辑、实验分析和报告由我独立完成，游戏侧部分制作使用 AI 辅助。",
        technologies: ["DQN", "PyTorch", "Pygame", "强化学习", "奖励设计", "Game AI"],
        links: [{ label: "GitHub 仓库", href: "https://github.com/RedOctupus/Switch-Hunt" }]
      },
      {
        title: "Beeinventor AI 表单数字化 / 应用 AI 交付",
        meta: "行业 AI 方案交付 | 2023 年 7 月至今",
        media: null,
        problem: "手写和非标准表单会产生大量重复人工处理，并导致数字记录不一致，尤其在数据需要进入移动端或 IoT 平台时更明显。",
        approach: "我参与设计和支持结合 NLP、计算机视觉、表单处理逻辑、数据管道和客户演示的 AI 方案，用于提升文档数字化流程效率。",
        outcome: "方案使移动平台表单处理效率提升超过 60%，并支撑面向企业客户的技术沟通与交付。",
        contribution: "参与方案设计、数据处理管道优化、平台调试、视觉/市场材料制作，以及向企业决策者进行技术方案展示。",
        technologies: ["NLP", "计算机视觉", "类 OCR 处理", "数据管道", "IoT 集成", "客户交付"],
        links: []
      }
    ],
    gallery: {
      heading: "岭南杯图集",
      lead: "从比赛材料中选取的代表性照片，已压缩为适合网页展示的版本。",
      items: [
        { src: "assets/lingnan-cup/award-team.jpg", alt: "岭南杯二等奖团队领奖", caption: "获奖/团队照片" },
        { src: "assets/lingnan-cup/venue-stage.jpg", alt: "岭南杯比赛会场", caption: "比赛会场" },
        { src: "assets/lingnan-cup/defense-session.jpg", alt: "岭南杯答辩现场", caption: "答辩与展示" },
        { src: "assets/lingnan-cup/event-group.jpg", alt: "岭南杯活动大合照", caption: "活动大合照" },
        { src: "assets/lingnan-cup/lingnan-hall-team.jpg", alt: "岭南堂团队照片", caption: "岭南堂团队照片" }
      ]
    },
    footer: "张泓宇个人网站项目页。"
  }
};

function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const savedLang = window.localStorage.getItem("premium-site-lang");
  return urlLang === "zh" || savedLang === "zh" ? "zh" : "en";
}

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const state = {
  lang: getInitialLang(),
  revealObserver: null,
  typingTimer: null
};

const els = {
  topnav: document.getElementById("topnav"),
  brandRole: document.getElementById("brand-role"),
  backLink: document.getElementById("back-link"),
  eyebrow: document.getElementById("projects-eyebrow"),
  title: document.getElementById("projects-title"),
  subtitle: document.getElementById("projects-subtitle"),
  typingPrefix: document.getElementById("projects-type-prefix"),
  typingPhrase: document.getElementById("projects-type-phrase"),
  typingCaret: document.getElementById("projects-type-caret"),
  awardImage: document.getElementById("hero-award-image"),
  awardCaption: document.getElementById("hero-award-caption"),
  videoCaption: document.getElementById("hero-video-caption"),
  highlights: document.getElementById("project-highlights"),
  projectListHeading: document.getElementById("project-list-heading"),
  projectListLead: document.getElementById("project-list-lead"),
  allProjects: document.getElementById("all-projects"),
  galleryHeading: document.getElementById("gallery-heading"),
  galleryLead: document.getElementById("gallery-lead"),
  gallery: document.getElementById("lingnan-gallery"),
  footerText: document.getElementById("footer-text"),
  progressBar: document.getElementById("scroll-progress-bar")
};

function renderNav(lang) {
  els.topnav.innerHTML = pageContent[lang].nav.map((item) => {
    const current = item.href === "projects.html" ? ' aria-current="page"' : "";
    return `<a class="nav-link${item.href === "projects.html" ? " is-active" : ""}" href="${item.href}"${current}>${item.label}</a>`;
  }).join("");
}

function renderHero(lang) {
  const hero = pageContent[lang].hero;
  els.brandRole.textContent = pageContent[lang].brandRole;
  els.backLink.textContent = hero.back;
  els.eyebrow.textContent = hero.eyebrow;
  els.title.textContent = hero.title;
  els.subtitle.textContent = hero.subtitle;
  els.awardImage.alt = hero.awardCaption;
  els.awardCaption.textContent = hero.awardCaption;
  els.videoCaption.textContent = hero.videoCaption;
}

function renderHighlights(lang) {
  els.highlights.innerHTML = pageContent[lang].highlights.map((item, index) => `
    <article class="highlight-card interactive-panel reveal-item" data-glow data-reveal style="--reveal-delay:${index * 60}ms;">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </article>
  `).join("");
}

function renderProjectMedia(media) {
  if (!media) {
    return `
      <div class="project-detail-placeholder">
        <span>AI</span>
      </div>
    `;
  }

  return `
    <figure class="project-detail-media" data-frame="${media.frameType}" style="--visual-aspect:${media.aspectRatio};">
      <img src="${media.src}" alt="${media.alt}">
    </figure>
  `;
}

function renderProjectLinks(links) {
  if (!links.length) return "";
  return `<div class="project-links">${links.map((link) => {
    const isExternal = /^https?:\/\//.test(link.href);
    const target = isExternal ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="project-link" href="${link.href}"${target}>${link.label}</a>`;
  }).join("")}</div>`;
}

function renderProjects(lang) {
  const { projectList, projects } = pageContent[lang];
  els.projectListHeading.textContent = projectList.heading;
  els.projectListLead.textContent = projectList.lead;
  els.allProjects.innerHTML = projects.map((project, index) => `
    <article class="project-detail-card interactive-panel reveal-item" data-glow data-reveal style="--reveal-delay:${index * 70}ms;">
      ${renderProjectMedia(project.media)}
      <div class="project-detail-copy">
        <span class="project-label">${project.meta}</span>
        <h3>${project.title}</h3>
        <div class="project-detail-sections">
          <p><strong>${lang === "zh" ? "问题" : "Problem"}:</strong> ${project.problem}</p>
          <p><strong>${lang === "zh" ? "方法" : "Approach"}:</strong> ${project.approach}</p>
          <p><strong>${lang === "zh" ? "结果" : "Outcome"}:</strong> ${project.outcome}</p>
          <p><strong>${lang === "zh" ? "贡献" : "Contribution"}:</strong> ${project.contribution}</p>
        </div>
        <div class="tech-list">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
        ${renderProjectLinks(project.links)}
      </div>
    </article>
  `).join("");
}

function renderGallery(lang) {
  const gallery = pageContent[lang].gallery;
  els.galleryHeading.textContent = gallery.heading;
  els.galleryLead.textContent = gallery.lead;
  els.gallery.innerHTML = gallery.items.map((item, index) => `
    <figure class="gallery-item interactive-panel reveal-item" data-glow data-reveal style="--reveal-delay:${index * 60}ms;">
      <img src="${item.src}" alt="${item.alt}">
      <figcaption>${item.caption}</figcaption>
    </figure>
  `).join("");
}

function clearTypewriter() {
  if (state.typingTimer) {
    window.clearTimeout(state.typingTimer);
    state.typingTimer = null;
  }
}

function setupTypewriter(lang) {
  clearTypewriter();
  const hero = pageContent[lang].hero;
  const phrases = hero.typingPhrases;
  els.typingPrefix.textContent = hero.typingPrefix;
  els.typingPhrase.textContent = "";
  els.typingCaret.classList.remove("is-static");

  if (!phrases.length) return;

  if (reducedMotionQuery.matches) {
    els.typingPhrase.textContent = phrases[0];
    els.typingCaret.classList.add("is-static");
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const tick = () => {
    const phrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex -= 1;
      els.typingPhrase.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        state.typingTimer = window.setTimeout(tick, 260);
        return;
      }
      state.typingTimer = window.setTimeout(tick, 34);
      return;
    }

    charIndex += 1;
    els.typingPhrase.textContent = phrase.slice(0, charIndex);
    if (charIndex === phrase.length) {
      isDeleting = true;
      state.typingTimer = window.setTimeout(tick, 1450);
      return;
    }

    state.typingTimer = window.setTimeout(tick, lang === "zh" ? 92 : 58);
  };

  tick();
}

function setupRevealObserver() {
  if (state.revealObserver) state.revealObserver.disconnect();
  const items = [...document.querySelectorAll("[data-reveal]")];

  if (reducedMotionQuery.matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  state.revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px"
  });

  items.forEach((item) => state.revealObserver.observe(item));
}

function setupGlowCards() {
  if (reducedMotionQuery.matches) return;

  document.querySelectorAll("[data-glow]").forEach((card) => {
    if (card.dataset.glowBound === "true") return;
    card.dataset.glowBound = "true";

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--glow-x", `${x}%`);
      card.style.setProperty("--glow-y", `${y}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    });
  });
}

function updateScrollProgress() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  els.progressBar.style.width = `${Math.min(progress, 100)}%`;
}

function applyLanguage(nextLang) {
  const lang = nextLang === "zh" ? "zh" : "en";
  state.lang = lang;
  window.localStorage.setItem("premium-site-lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = pageContent[lang].documentTitle;

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);

  renderNav(lang);
  renderHero(lang);
  renderHighlights(lang);
  renderProjects(lang);
  renderGallery(lang);
  els.footerText.textContent = pageContent[lang].footer;

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  setupTypewriter(lang);
  setupRevealObserver();
  setupGlowCards();
  updateScrollProgress();
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", () => applyLanguage(state.lang));
} else if (typeof reducedMotionQuery.addListener === "function") {
  reducedMotionQuery.addListener(() => applyLanguage(state.lang));
}

applyLanguage(state.lang);
