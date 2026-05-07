const content = {};

content.en = {
  documentTitle: "Hongyu Zhang | AI Solution Builder",
  brandRole: "AI Solution Builder",
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ],
  hero: {
    eyebrow: "Practical AI Portfolio",
    title: "Hongyu Zhang",
    typingPrefix: "I can",
    typingPhrases: [
      "build usable AI solutions",
      "turn ideas into working AI systems",
      "design workflows that actually help people",
      "connect models, tools, and real needs"
    ],
    summary: "My goal is to create practical, effective, and usable AI solutions that work in real scenarios.",
    signature: "I care about turning AI capability into systems people can understand, use, and benefit from.",
    stageKicker: "Personal Focus",
    angleLabel: "What I Build",
    angle: "I want to build AI systems that are not only technically strong, but also practical, understandable, and effective in real use.",
    storyLabel: "Why This Matters",
    story: "My background across business and AI makes me care deeply about one question: not just whether a system can work, but whether it can be used well.",
    metrics: [
      { value: "Practical AI", label: "Solution-first mindset" },
      { value: "Usable Systems", label: "Designed for real use" },
      { value: "Cross-domain", label: "Technology + product sense" }
    ],
    tags: ["Usable AI Systems", "Workflow Design", "AI Agent", "RAG", "Computer Vision", "Reinforcement Learning"],
    actions: [
      { label: "Explore Projects", href: "#projects", style: "primary" },
      { label: "GitHub Profile", href: "https://github.com/RedOctupus", style: "secondary", external: true }
    ]
  },
  about: {
    heading: "About Me",
    lead: "I am building toward work where AI capability must become a usable solution, not just a technical demo.",
    body: [
      "I am currently pursuing an MSc in Artificial Intelligence and Data Analytics at Lingnan University, after completing a cross-disciplinary undergraduate path in markets and global business. That combination shaped the way I approach AI work: I care about both technical performance and the practical system around it.",
      "Across coursework and industry work at Beeinventor Limited, I have worked on AI solutions, computer vision systems, workflow design, demos, and technical delivery. I am especially interested in the step between model capability and real usage: how a system is structured, explained, and made reliable enough for people to actually use.",
      "What defines me most is not one specific AI subfield, but my interest in building AI systems that are practical, structured, and genuinely usable."
    ],
    educationTitle: "Education",
    education: [
      "Lingnan University, Hong Kong - MSc in Artificial Intelligence and Data Analytics, expected Jul 2026.",
      "Hong Kong Metropolitan University, Hong Kong - Bachelor of Markets and Global Business, Sep 2021 to Jun 2023."
    ],
    strengthsTitle: "Strengths & Focus Areas",
    strengths: [
      "Designing usable AI workflows that lower adoption barriers and make complex capabilities easier to operate.",
      "Building and analyzing models across computer vision and reinforcement learning with careful data structuring and experiment logic.",
      "Translating technical systems into clear demos, solution narratives, and communication that non-technical stakeholders can follow."
    ]
  },
  skills: {
    heading: "Skills",
    lead: "Organized to show how I turn technical ability into usable AI solutions.",
    groups: [
      {
        title: "Technical Skills",
        description: "Capabilities I actively use to build models, applications, and structured AI workflows.",
        items: ["Python", "SQL", "Flask", "PyTorch", "YOLOv11", "Transformer", "AI Agent Systems", "RAG", "NLP", "Computer Vision", "Reinforcement Learning", "Workflow Design"]
      },
      {
        title: "Solution & Product Skills",
        description: "The layer that helps technical work become understandable, useful, and ready for real scenarios.",
        items: ["Usable AI system design", "Workflow design", "Real-world solution framing", "Technical communication", "Demo narrative design", "Stakeholder presentation"]
      },
      {
        title: "Tools & Platforms",
        description: "Infrastructure and delivery tools I have used across projects, experimentation, and presentation.",
        items: ["GitHub", "PostgreSQL", "MongoDB", "Redis", "Pygame", "Matplotlib", "Microsoft Office", "SPSS", "Photoshop", "Premiere Pro"]
      }
    ]
  },
  projects: {
    heading: "Projects",
    lead: "Three projects that show the same pattern across different AI domains: practical framing, structured implementation, and usable outcomes.",
    supplementaryHeading: "Supplementary Project",
    featured: [
      {
        title: "Uniflow",
        label: "Main Project 1",
        time: "Mar 2026 - Present",
        visual: "assets/uniflow-premium.png",
        visualAlt: "Uniflow interface screenshot",
        frameType: "matte-dark",
        imageFit: "contain",
        imagePosition: "center center",
        aspectRatio: "2535 / 1211",
        metrics: ["Workflow Reuse", "Cross-App Execution", "Lower Barrier"],
        details: [
          { label: "Problem", value: "AI systems are becoming more capable, but many users still struggle to use them effectively. Beginners often have trouble structuring tasks, selecting tools, and repeating good workflows, which limits the practical value they can get." },
          { label: "Data", value: "No fixed dataset. The system operates on user requests, local files, local applications, and reusable workflow records." },
          { label: "Approach", value: "Our team developed Uniflow as a workflow platform that turns user intent into executable multi-step AI solutions. It can invoke tools including skills, CLI, and MCP integrations, run workflows across local applications, and save effective execution logic for later reuse." },
          { label: "Outcome", value: "We delivered a working prototype and public repository that demonstrate dynamic workflow generation, reusable solution logic, and a lower-friction path for users to access practical AI capability without rebuilding the process from scratch each time." },
          { label: "Contribution", value: "I built the browser-oriented CLI module that lets the system safely capture, extract, and format information from browser search results for downstream task execution." }
        ],
        links: [
          { label: "Live Prototype", href: "https://prototype-kohl-one.vercel.app/" },
          { label: "GitHub Repo", href: "https://github.com/OpenUniflo/prototype" }
        ]
      },
      {
        title: "Dual-Stage AI Safety Inspection System",
        label: "Main Project 2",
        time: "2025 - 2026",
        visual: "assets/ai-safety-image1.png",
        visualAlt: "Safety inspection system interface",
        frameType: "matte",
        imageFit: "contain",
        imagePosition: "center center",
        aspectRatio: "1266 / 663",
        metrics: ["Top-1 0.99", "mAP50 0.793", "Near Real-Time"],
        details: [
          { label: "Problem", value: "Construction sites remain high-risk environments, and different scenes require different PPE combinations. The project aimed to build a convenient, locally deployable AI system for checking whether workers meet PPE requirements in practical use." },
          { label: "Data", value: "Merged multiple sources including Alibaba Cloud and Roboflow datasets into a unified training set with a 7:1.5:1.5 train, validation, and test split. The data covered construction scenes and PPE classes such as helmet, gloves, mask, safety belt, boots, and goggles." },
          { label: "Approach", value: "Built a two-stage pipeline using YOLOv11 classification to identify construction scenes first and YOLOv11 detection to verify PPE compliance second. The system supports image and video inference, automatic preprocessing, and a local interface implemented with Flask plus HTML, CSS, and JavaScript." },
          { label: "Outcome", value: "The classification model reached Top-1 accuracy of 0.99, while the detection model achieved mAP50(B) of 0.793. Reported runtime was around 25 FPS for classification and 15 FPS for detection on RTX 40-series hardware, giving the system near real-time potential." },
          { label: "Contribution", value: "I handled complex data structuring, model building, experiment analysis, and the final presentation and reporting of the system." }
        ],
        links: []
      }
    ],
    supplementary: [
      {
        title: "Switch Hunt",
        label: "Supplementary",
        time: "Feb 2026",
        visual: "assets/switch-hunt-image4.png",
        visualAlt: "Switch Hunt training results chart",
        frameType: "matte",
        imageFit: "contain",
        imagePosition: "center center",
        aspectRatio: "2083 / 1475",
        metrics: ["DQN", "Game AI", "Adaptive Behavior"],
        details: [
          { label: "Problem", value: "This individual project explored how reinforcement learning could support adaptive, non-scripted behavior in a game environment." },
          { label: "Data", value: "Instead of an external dataset, the model learned from a 7-channel, 21 x 21 game-state encoding representing environment layout, entities, path guidance, danger regions, cooldown state, and light-resource status." },
          { label: "Approach", value: "I built a 2D horror maze game in Pygame and trained the ghost agent with Deep Q-Network in PyTorch. A curriculum-style reward design was used to teach pursuit, baiting, retreat, and sprint behavior across phases." },
          { label: "Outcome", value: "The trained ghost learned cautious approach, light-trigger baiting, retreat under risk, and aggressive pursuit when the player became vulnerable. The report summarizes gameplay around roughly 50 percent player win rate and about 60 percent ghost catch rate." },
          { label: "Contribution", value: "This was my individual project. I completed the DQN design and implementation myself, with AI used only to assist parts of the game-side production process." }
        ],
        links: [{ label: "GitHub Repo", href: "https://github.com/RedOctupus/Switch-Hunt" }]
      }
    ]
  },
  resume: {
    heading: "Resume",
    lead: "A concise, assignment-ready summary of education and experience.",
    educationHeading: "Education",
    experienceHeading: "Experience",
    education: [
      { meta: "Jul 2026 (Expected)", title: "Lingnan University", summary: "Master of Science in Artificial Intelligence and Data Analytics. Core modules include Machine Learning, Data Mining, Natural Language Processing, Big Data Technologies, and Statistical Modeling." },
      { meta: "Sep 2021 - Jun 2023", title: "Hong Kong Metropolitan University", summary: "Bachelor of Markets and Global Business with coursework in Business Intelligence, Data Analysis, Digital Marketing, and Consumer Behavior." }
    ],
    experience: [
      { meta: "Jul 2023 - Present", title: "Beeinventor Limited | Business Development & AI Solutions Specialist", summary: "Designed and deployed AI solutions for handwritten and non-standard form digitization using NLP and computer vision, improving form-processing efficiency by over 60 percent for mobile platform integration." },
      { meta: "Selected Responsibilities", title: "Product, Data, and Client-Facing Delivery", summary: "Built and optimized data processing pipelines for IoT integration, supported platform debugging, created market-facing visual materials, and presented technical solutions to enterprise decision-makers at industry exhibitions." }
    ]
  },
  contact: {
    heading: "Contact",
    lead: "For internships, collaboration, or technical discussion, email is the best first channel.",
    primaryHeading: "Primary Channels",
    primary: [
      { label: "Email", value: "zhhongyu01@gmail.com", href: "mailto:zhhongyu01@gmail.com" },
      { label: "GitHub", value: "github.com/RedOctupus", href: "https://github.com/RedOctupus" }
    ],
    noteHeading: "Note",
    note: "This public version keeps phone details private. Additional supporting material can be shared on request.",
    footer: "Premium bilingual copy built as a GitHub Pages-ready portfolio."
  }
};

content.zh = {
  documentTitle: "张泓宇 | AI 解决方案构建者",
  brandRole: "AI 解决方案构建者",
  nav: [
    { id: "home", label: "首页" },
    { id: "about", label: "关于我" },
    { id: "skills", label: "技能" },
    { id: "projects", label: "项目" },
    { id: "resume", label: "简历" },
    { id: "contact", label: "联系" }
  ],
  hero: {
    eyebrow: "实用 AI 作品集",
    title: "张泓宇",
    typingPrefix: "我可以",
    typingPhrases: [
      "构建真正可用的 AI 解决方案",
      "把想法做成能运行的 AI 系统",
      "设计真正帮助人的工作流",
      "连接模型、工具与真实需求"
    ],
    summary: "我的目标是打造切实有效、真正可用，并能在真实场景中发挥作用的 AI 解决方案。",
    signature: "我更关心的是，如何把 AI 的能力真正转化成用户能理解、能使用、并能从中受益的系统。",
    stageKicker: "个人方向",
    angleLabel: "我想做什么",
    angle: "我想做的，是既有技术能力、又真正实用、清晰、并且能在真实使用中发挥效果的 AI 系统。",
    storyLabel: "为什么这件事重要",
    story: "我的商业与 AI 双重背景，让我一直很在意一个问题：一个系统不只是“能不能做出来”，而是“能不能被真正用好”。",
    metrics: [
      { value: "实用 AI", label: "以解决方案为先" },
      { value: "可用系统", label: "强调真实使用" },
      { value: "跨领域", label: "技术与产品感结合" }
    ],
    tags: ["可用 AI 系统", "工作流设计", "AI Agent", "RAG", "计算机视觉", "强化学习"],
    actions: [
      { label: "查看项目", href: "#projects", style: "primary" },
      { label: "GitHub 主页", href: "https://github.com/RedOctupus", style: "secondary", external: true }
    ]
  },
  about: {
    heading: "关于我",
    lead: "我希望做的工作，是把 AI 能力真正变成可用的解决方案，而不只是技术展示。",
    body: [
      "我目前在岭南大学攻读人工智能与数据分析硕士，本科则具备商业与全球市场方向的跨学科背景。这种组合塑造了我看待 AI 的方式：我既关注模型本身，也关注模型之外的系统设计与真实落地。",
      "在课程项目和 Beeinventor Limited 的工作中，我接触过 AI 解决方案、计算机视觉系统、工作流设计、原型展示和技术交付。我尤其在意模型能力和真实使用之间的那一步：一个系统如何被组织、被解释、并被做得足够稳定，最终让人真正用起来。",
      "真正定义我的，不是某一个单独的 AI 子方向，而是我希望构建切实有效、结构清晰、并且真正可用的 AI 系统。"
    ],
    educationTitle: "教育背景",
    education: [
      "岭南大学，香港 - 人工智能与数据分析硕士，预计 2026 年 7 月毕业。",
      "香港都会大学，香港 - Markets and Global Business 学士，2021 年 9 月至 2023 年 6 月。"
    ],
    strengthsTitle: "优势与关注方向",
    strengths: [
      "擅长设计可用的 AI 工作流，降低复杂能力的使用门槛，让系统更容易被实际采用。",
      "具备计算机视觉和强化学习方向的模型实现、复杂数据梳理和实验分析能力。",
      "能够把技术系统转化成清晰的 demo、方案叙事和非技术人员也能理解的表达。"
    ]
  },
  skills: {
    heading: "技能",
    lead: "这部分围绕“我如何把技术能力做成可用方案”来组织，而不是简单堆叠工具名。",
    groups: [
      {
        title: "技术技能",
        description: "我在模型、应用和结构化 AI 工作流中实际使用过的核心能力。",
        items: ["Python", "SQL", "Flask", "PyTorch", "YOLOv11", "Transformer", "AI Agent 系统", "RAG", "NLP", "计算机视觉", "强化学习", "工作流设计"]
      },
      {
        title: "解决方案与产品能力",
        description: "让技术真正变成可理解、可使用、可落地方案时，我最常用到的能力。",
        items: ["可用 AI 系统设计", "工作流设计", "真实场景问题定义", "技术沟通", "Demo 叙事设计", "方案汇报与呈现"]
      },
      {
        title: "工具与平台",
        description: "我在项目实现、实验支持和展示交付中使用过的主要工具。",
        items: ["GitHub", "PostgreSQL", "MongoDB", "Redis", "Pygame", "Matplotlib", "Microsoft Office", "SPSS", "Photoshop", "Premiere Pro"]
      }
    ]
  },
  projects: {
    heading: "项目",
    lead: "这三个项目分别来自不同 AI 方向，但它们都体现了同一种工作方式：问题先行、结构化实现、以及可用结果。",
    supplementaryHeading: "补充项目",
    featured: [
      {
        title: "Uniflow",
        label: "主项目 1",
        time: "2026 年 3 月 - 至今",
        visual: "assets/uniflow-premium.png",
        visualAlt: "Uniflow 界面截图",
        frameType: "matte-dark",
        imageFit: "contain",
        imagePosition: "center center",
        aspectRatio: "2535 / 1211",
        metrics: ["工作流复用", "跨应用执行", "降低门槛"],
        details: [
          { label: "问题", value: "AI 系统越来越强，但很多用户仍然很难高效地把它们真正用起来。初学者往往不擅长拆解任务、选择工具和复用有效流程，因此难以稳定获得实际价值。" },
          { label: "数据", value: "没有固定数据集。系统围绕用户请求、本地文件、本地应用和可复用工作流记录进行运行。" },
          { label: "方法", value: "我们团队开发了 Uniflow，把用户意图转成可执行的多步骤 AI 解决方案。系统可调用 skills、CLI 和 MCP 等工具，执行跨本地应用工作流，并把有效执行逻辑保存下来供后续类似任务复用。" },
          { label: "结果 / 价值", value: "项目已经完成可运行原型并公开仓库，展示了动态工作流生成、可复用方案逻辑，以及让用户无需每次重新规划就能更低门槛使用 AI 能力的可行路径。" },
          { label: "我的贡献", value: "我负责面向浏览器信息获取的 CLI 模块，让系统可以安全地抓取、提取并格式化浏览器搜索结果，供后续任务调用。" }
        ],
        links: [
          { label: "在线原型", href: "https://prototype-kohl-one.vercel.app/" },
          { label: "GitHub 仓库", href: "https://github.com/OpenUniflo/prototype" }
        ]
      },
      {
        title: "双阶段 AI 安全监测系统",
        label: "主项目 2",
        time: "2025 - 2026",
        visual: "assets/ai-safety-image1.png",
        visualAlt: "安全监测系统界面截图",
        frameType: "matte",
        imageFit: "contain",
        imagePosition: "center center",
        aspectRatio: "1266 / 663",
        metrics: ["Top-1 0.99", "mAP50 0.793", "接近实时"],
        details: [
          { label: "问题", value: "建筑工地属于高风险场景，不同作业环境下需要的 PPE 组合也不同。这个项目希望构建一个便于本地部署的 AI 系统，用于判断工人是否满足现场防护装备要求。" },
          { label: "数据", value: "整合 Alibaba Cloud 和 Roboflow 等多个来源的数据，重新构建统一训练集，并按 7:1.5:1.5 划分训练、验证和测试。数据覆盖施工场景以及头盔、手套、口罩、安全带、靴子、护目镜等 PPE 类别。" },
          { label: "方法", value: "系统采用双阶段结构：先用 YOLOv11 分类模型识别施工场景，再用 YOLOv11 检测模型检查 PPE 配备情况。系统支持图像与视频推理、自动预处理，并提供基于 Flask 和前端页面的本地界面。" },
          { label: "结果 / 价值", value: "分类模型达到 Top-1 Accuracy 0.99，检测模型达到 mAP50(B) 0.793。根据项目报告，在 RTX 40 系列显卡上分类推理约为 25 FPS、检测推理约为 15 FPS，具备接近实时应用的潜力。" },
          { label: "我的贡献", value: "我主要负责复杂数据梳理、模型搭建、实验分析，以及系统最终成果的展示和汇报。" }
        ],
        links: []
      }
    ],
    supplementary: [
      {
        title: "Switch Hunt",
        label: "补充项目",
        time: "2026 年 2 月",
        visual: "assets/switch-hunt-image4.png",
        visualAlt: "Switch Hunt 训练结果图",
        frameType: "matte",
        imageFit: "contain",
        imagePosition: "center center",
        aspectRatio: "2083 / 1475",
        metrics: ["DQN", "Game AI", "自适应行为"],
        details: [
          { label: "问题", value: "这是一个个人强化学习项目，目标是探索强化学习如何在游戏环境中支持更复杂、更非脚本化的行为。" },
          { label: "数据", value: "项目不依赖外部数据集，而是基于游戏环境生成的 7 通道、21 x 21 状态编码进行学习，状态包含地图结构、实体位置、路径引导、危险区域、冷却状态和光源资源等信息。" },
          { label: "方法", value: "我使用 Pygame 构建了一个 2D 恐怖迷宫游戏，并在 PyTorch 中使用 Deep Q-Network 训练鬼的行为。通过分阶段奖励设计，让模型逐步学会追击、诱导、撤退和冲刺等策略。" },
          { label: "结果 / 价值", value: "训练后的智能体表现出谨慎接近、诱导玩家开灯、风险下撤退，以及玩家脆弱时快速追击等行为。报告中将整体对局表现总结为玩家胜率约 50%，鬼的抓捕率约 60%。" },
          { label: "我的贡献", value: "这是我的个人项目，DQN 结构设计与实现由我独立完成，游戏侧部分制作使用了 AI 辅助。" }
        ],
        links: [{ label: "GitHub 仓库", href: "https://github.com/RedOctupus/Switch-Hunt" }]
      }
    ]
  },
  resume: {
    heading: "简历",
    lead: "适合作业提交和快速浏览的站内摘要版本。",
    educationHeading: "教育背景",
    experienceHeading: "工作经历",
    education: [
      { meta: "预计 2026 年 7 月", title: "岭南大学", summary: "人工智能与数据分析硕士。核心课程包括机器学习、数据挖掘、自然语言处理、大数据技术与统计建模。" },
      { meta: "2021 年 9 月 - 2023 年 6 月", title: "香港都会大学", summary: "Markets and Global Business 学士，课程涵盖商业智能、数据分析、数字营销和消费者行为。" }
    ],
    experience: [
      { meta: "2023 年 7 月 - 至今", title: "Beeinventor Limited | Business Development & AI Solutions Specialist", summary: "面向手写和非标准表单数字化场景设计并部署 AI 方案，结合 NLP 与计算机视觉，将移动端表单处理效率提升 60% 以上。" },
      { meta: "主要职责", title: "产品、数据与客户侧交付", summary: "构建并优化 IoT 集成的数据处理流程，支持平台调试，制作市场展示材料，并在行业展会上向企业决策者展示技术方案。" }
    ]
  },
  contact: {
    heading: "联系",
    lead: "如果是实习、合作或技术交流，邮件是最方便的联系渠道。",
    primaryHeading: "主要渠道",
    primary: [
      { label: "邮箱", value: "zhhongyu01@gmail.com", href: "mailto:zhhongyu01@gmail.com" },
      { label: "GitHub", value: "github.com/RedOctupus", href: "https://github.com/RedOctupus" }
    ],
    noteHeading: "说明",
    note: "公开版本暂不展示电话。若需要更多补充材料，可以再按需提供。",
    footer: "高级版中英双语静态站，适配 GitHub Pages 发布。"
  }
};

const lingnanCupPreview = {
  en: {
    title: "Lingnan Cup SRR Government AI Processing System",
    label: "Award Project",
    time: "Apr 25, 2026",
    visual: "assets/lingnan-cup/award-team.jpg",
    visualAlt: "Lingnan Cup Second Prize award photo with Hongyu Zhang's team",
    frameType: "matte",
    imageFit: "contain",
    imagePosition: "center center",
    aspectRatio: "2000 / 1362",
    metrics: ["Second Prize", "95%+ Extraction Accuracy", "75% Efficiency Gain"],
    details: [
      { label: "Event", value: "The 4th Lingnan Cup China Economic Development Case Analysis Competition, Second Prize." },
      { label: "Problem", value: "Hong Kong ASD handles more than 10,000 Slope Repair Request cases each year, with 55GB of historical documents and heavy manual workflow bottlenecks." },
      { label: "Approach", value: "The team proposed an LLM-based intelligent document processing system with a 7-layer Agent architecture, OCR, NLP field extraction, vector search, RAG, Agentic AI, and quality-gate self-repair." },
      { label: "Outcome", value: "The solution targets over 95% field extraction accuracy, reduces case processing from 35-55 minutes to around 10 minutes, improves efficiency by about 75%, and estimates HKD 6.39M annual labor savings." },
      { label: "Contribution", value: "I served as project leader/contact and contributed to AI solution framing, workflow logic, technical narrative, competition report/PPT, and presentation/interview communication." }
    ],
    links: [{ label: "View Full Project Page", href: "projects.html" }]
  },
  zh: {
    title: "岭南杯 SRR 政务 AI 处理系统",
    label: "获奖项目",
    time: "2026 年 4 月 25 日",
    visual: "assets/lingnan-cup/award-team.jpg",
    visualAlt: "张泓宇团队岭南杯二等奖领奖照片",
    frameType: "matte",
    imageFit: "contain",
    imagePosition: "center center",
    aspectRatio: "2000 / 1362",
    metrics: ["二等奖", "95%+ 字段提取准确率", "75% 效率提升"],
    details: [
      { label: "赛事", value: "第四届岭南杯中国经济发展案例分析大赛，二等奖。" },
      { label: "问题", value: "香港建筑署每年处理超过 10,000 宗斜坡维修请求，历史资料约 55GB，人工流转和文档处理存在明显效率瓶颈。" },
      { label: "方法", value: "团队提出基于大模型的智能文档处理系统，结合 7 层 Agent 架构、OCR、NLP 字段抽取、向量检索、RAG、Agentic AI，以及质量门与自修复机制。" },
      { label: "结果 / 价值", value: "方案目标字段提取准确率超过 95%，将单案处理时间从 35-55 分钟降至约 10 分钟，效率提升约 75%，预计每年节省人力成本约 639 万港元。" },
      { label: "我的贡献", value: "我作为项目负责人/联系人，参与 AI 方案定位、工作流逻辑、技术叙事、比赛报告与 PPT，以及答辩和采访沟通。" }
    ],
    links: [{ label: "查看完整项目页", href: "projects.html" }]
  }
};

content.en.nav = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "projects.html" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" }
];

content.zh.nav = [
  { id: "home", label: "首页", href: "#home" },
  { id: "about", label: "关于我", href: "#about" },
  { id: "skills", label: "技能", href: "#skills" },
  { id: "projects", label: "项目", href: "projects.html" },
  { id: "resume", label: "简历", href: "#resume" },
  { id: "contact", label: "联系", href: "#contact" }
];

content.en.hero.actions[0] = { label: "Explore Projects", href: "#projects", style: "primary" };
content.zh.hero.actions[0] = { label: "查看项目预览", href: "#projects", style: "primary" };

content.en.projects.lead = "Selected work that shows how I build practical AI solutions across government workflows, AI agents, computer vision, and reinforcement learning.";
content.zh.projects.lead = "这里展示几个代表性项目，体现我如何在政务流程、AI Agent、计算机视觉和强化学习等方向构建可用的 AI 解决方案。";
content.en.projects.supplementaryHeading = "Additional Work";
content.zh.projects.supplementaryHeading = "补充项目";
content.en.projects.viewAllLabel = "View All Projects & Achievements";
content.zh.projects.viewAllLabel = "查看全部项目与成果";
content.en.projects.featured = [lingnanCupPreview.en, ...content.en.projects.featured];
content.zh.projects.featured = [lingnanCupPreview.zh, ...content.zh.projects.featured];

function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const savedLang = window.localStorage.getItem("premium-site-lang");
  return urlLang === "zh" || savedLang === "zh" ? "zh" : "en";
}

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const state = {
  lang: getInitialLang(),
  revealObserver: null,
  navObserver: null,
  typingTimer: null
};

const els = {
  topnav: document.getElementById("topnav"),
  brandRole: document.getElementById("brand-role"),
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroTitle: document.getElementById("hero-title"),
  heroTypingPrefix: document.getElementById("hero-typing-prefix"),
  heroTypingPhrase: document.getElementById("hero-typing-phrase"),
  heroTypingCaret: document.getElementById("hero-typing-caret"),
  heroSummary: document.getElementById("hero-summary"),
  heroSignature: document.getElementById("hero-signature"),
  heroTags: document.getElementById("hero-tags"),
  heroActions: document.getElementById("hero-actions"),
  heroStageKicker: document.getElementById("hero-stage-kicker"),
  heroAngleLabel: document.getElementById("hero-angle-label"),
  heroAngle: document.getElementById("hero-angle"),
  heroStoryLabel: document.getElementById("hero-story-label"),
  heroStory: document.getElementById("hero-story"),
  heroMetrics: document.getElementById("hero-metrics"),
  aboutHeading: document.getElementById("about-heading"),
  aboutLead: document.getElementById("about-lead"),
  aboutBody: document.getElementById("about-body"),
  aboutEducationTitle: document.getElementById("about-education-title"),
  aboutEducation: document.getElementById("about-education"),
  aboutStrengthsTitle: document.getElementById("about-strengths-title"),
  aboutStrengths: document.getElementById("about-strengths"),
  skillsHeading: document.getElementById("skills-heading"),
  skillsLead: document.getElementById("skills-lead"),
  skillsGrid: document.getElementById("skills-grid"),
  projectsHeading: document.getElementById("projects-heading"),
  projectsLead: document.getElementById("projects-lead"),
  featuredProjects: document.getElementById("featured-projects"),
  supplementaryHeading: document.getElementById("supplementary-heading"),
  supplementaryProjects: document.getElementById("supplementary-projects"),
  projectPageCta: document.getElementById("project-page-cta"),
  resumeHeading: document.getElementById("resume-heading"),
  resumeLead: document.getElementById("resume-lead"),
  resumeEducationHeading: document.getElementById("resume-education-heading"),
  resumeExperienceHeading: document.getElementById("resume-experience-heading"),
  resumeEducation: document.getElementById("resume-education"),
  resumeExperience: document.getElementById("resume-experience"),
  contactHeading: document.getElementById("contact-heading"),
  contactLead: document.getElementById("contact-lead"),
  contactPrimaryHeading: document.getElementById("contact-primary-heading"),
  contactPrimary: document.getElementById("contact-primary"),
  contactNoteHeading: document.getElementById("contact-note-heading"),
  contactNote: document.getElementById("contact-note"),
  footerText: document.getElementById("footer-text"),
  progressBar: document.getElementById("scroll-progress-bar")
};

function renderNav(lang) {
  els.topnav.innerHTML = content[lang].nav.map((item) => {
    const href = item.href || `#${item.id}`;
    const current = href === "projects.html" && window.location.pathname.endsWith("/projects.html") ? ' aria-current="page"' : "";
    return `<a class="nav-link" href="${href}"${current}>${item.label}</a>`;
  }).join("");
}

function renderHero(lang) {
  const hero = content[lang].hero;
  els.brandRole.textContent = content[lang].brandRole;
  els.heroEyebrow.textContent = hero.eyebrow;
  els.heroTitle.textContent = hero.title;
  els.heroSummary.textContent = hero.summary;
  els.heroSignature.textContent = hero.signature;
  els.heroStageKicker.textContent = hero.stageKicker;
  els.heroAngleLabel.textContent = hero.angleLabel;
  els.heroAngle.textContent = hero.angle;
  els.heroStoryLabel.textContent = hero.storyLabel;
  els.heroStory.textContent = hero.story;
  els.heroTags.innerHTML = hero.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  els.heroActions.innerHTML = hero.actions.map((action) => {
    const target = action.external ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="button-link ${action.style}" href="${action.href}"${target}>${action.label}</a>`;
  }).join("");
  els.heroMetrics.innerHTML = hero.metrics.map((metric) => `
    <div class="metric-card">
      <strong>${metric.value}</strong>
      <span>${metric.label}</span>
    </div>
  `).join("");
}

function renderAbout(lang) {
  const about = content[lang].about;
  els.aboutHeading.textContent = about.heading;
  els.aboutLead.textContent = about.lead;
  els.aboutBody.innerHTML = about.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  els.aboutEducationTitle.textContent = about.educationTitle;
  els.aboutEducation.innerHTML = `<ul class="bullet-list">${about.education.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  els.aboutStrengthsTitle.textContent = about.strengthsTitle;
  els.aboutStrengths.innerHTML = about.strengths.map((item) => `<li>${item}</li>`).join("");
}

function renderSkills(lang) {
  const skills = content[lang].skills;
  els.skillsHeading.textContent = skills.heading;
  els.skillsLead.textContent = skills.lead;
  els.skillsGrid.innerHTML = skills.groups.map((group, index) => `
    <article class="skill-card interactive-panel reveal-item" data-glow data-reveal style="--reveal-delay:${index * 70}ms;">
      <h3>${group.title}</h3>
      <p>${group.description}</p>
      <div class="chip-list">
        ${group.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function buildVisual(project) {
  return `
    <div class="project-visual-wrap">
      <figure class="visual-frame" data-frame="${project.frameType}">
        <div class="visual-stage" style="--visual-aspect:${project.aspectRatio}; --image-fit:${project.imageFit}; --image-position:${project.imagePosition};">
          <img src="${project.visual}" alt="${project.visualAlt}">
        </div>
      </figure>
    </div>
  `;
}

function buildProjectList(details) {
  return `<ul class="project-list">${details.map((detail) => `<li><strong>${detail.label}:</strong> ${detail.value}</li>`).join("")}</ul>`;
}

function buildProjectLinks(links) {
  if (!links.length) return "";
  return `<div class="project-links">${links.map((link) => {
    const isExternal = /^https?:\/\//.test(link.href);
    const target = isExternal ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="project-link" href="${link.href}"${target}>${link.label}</a>`;
  }).join("")}</div>`;
}

function buildProjectCard(project, index, className) {
  return `
    <article class="${className} interactive-panel reveal-item" data-glow data-reveal style="--reveal-delay:${index * 90}ms;">
      ${buildVisual(project)}
      <div class="project-copy">
        <div class="project-header">
          <div class="project-title-group">
            <span class="project-label">${project.label}</span>
            <h3 class="project-title">${project.title}</h3>
            <span class="project-time">${project.time}</span>
          </div>
          <div class="project-metrics">
            ${project.metrics.map((metric) => `<span class="metric-chip">${metric}</span>`).join("")}
          </div>
        </div>
        ${buildProjectList(project.details)}
        ${buildProjectLinks(project.links)}
      </div>
    </article>
  `;
}

function renderProjects(lang) {
  const projects = content[lang].projects;
  els.projectsHeading.textContent = projects.heading;
  els.projectsLead.textContent = projects.lead;
  els.supplementaryHeading.textContent = projects.supplementaryHeading;
  els.featuredProjects.innerHTML = projects.featured.map((project, index) => buildProjectCard(project, index, "project-card")).join("");
  els.supplementaryProjects.innerHTML = projects.supplementary.map((project, index) => buildProjectCard(project, index, "supplementary-card")).join("");
  if (els.projectPageCta) {
    els.projectPageCta.innerHTML = `<a class="button-link primary" href="projects.html">${projects.viewAllLabel}</a>`;
  }
}

function renderTimeline(target, items) {
  target.innerHTML = items.map((item, index) => `
    <article class="timeline-item interactive-panel reveal-item" data-glow data-reveal style="--reveal-delay:${index * 70}ms;">
      <div class="timeline-meta">${item.meta}</div>
      <h4>${item.title}</h4>
      <p>${item.summary}</p>
    </article>
  `).join("");
}

function renderResume(lang) {
  const resume = content[lang].resume;
  els.resumeHeading.textContent = resume.heading;
  els.resumeLead.textContent = resume.lead;
  els.resumeEducationHeading.textContent = resume.educationHeading;
  els.resumeExperienceHeading.textContent = resume.experienceHeading;
  renderTimeline(els.resumeEducation, resume.education);
  renderTimeline(els.resumeExperience, resume.experience);
}

function renderContact(lang) {
  const contact = content[lang].contact;
  els.contactHeading.textContent = contact.heading;
  els.contactLead.textContent = contact.lead;
  els.contactPrimaryHeading.textContent = contact.primaryHeading;
  els.contactNoteHeading.textContent = contact.noteHeading;
  els.contactNote.textContent = contact.note;
  els.footerText.textContent = contact.footer;
  els.contactPrimary.innerHTML = `<ul class="contact-list">${contact.primary.map((item) => `
    <li>
      <strong>${item.label}:</strong>
      <a href="${item.href}" target="${item.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noreferrer">${item.value}</a>
    </li>
  `).join("")}</ul>`;
}

function clearTypewriter() {
  if (state.typingTimer) {
    window.clearTimeout(state.typingTimer);
    state.typingTimer = null;
  }
}

function setupTypewriter(lang) {
  clearTypewriter();
  const hero = content[lang].hero;
  const phrases = hero.typingPhrases;
  els.heroTypingPrefix.textContent = hero.typingPrefix;
  els.heroTypingPhrase.textContent = "";
  els.heroTypingCaret.classList.remove("is-static");

  if (!phrases.length) return;

  if (reducedMotionQuery.matches) {
    els.heroTypingPhrase.textContent = phrases[0];
    els.heroTypingCaret.classList.add("is-static");
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const tick = () => {
    const phrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex -= 1;
      els.heroTypingPhrase.textContent = phrase.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        state.typingTimer = window.setTimeout(tick, 260);
        return;
      }

      state.typingTimer = window.setTimeout(tick, 32);
      return;
    }

    charIndex += 1;
    els.heroTypingPhrase.textContent = phrase.slice(0, charIndex);

    if (charIndex === phrase.length) {
      isDeleting = true;
      state.typingTimer = window.setTimeout(tick, 1500);
      return;
    }

    state.typingTimer = window.setTimeout(tick, lang === "zh" ? 90 : 60);
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

function setupNavObserver() {
  if (state.navObserver) state.navObserver.disconnect();

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sectionLinks = navLinks.filter((link) => link.getAttribute("href").startsWith("#"));
  const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  state.navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, {
    threshold: 0.42,
    rootMargin: "-14% 0px -46% 0px"
  });

  sections.forEach((section) => state.navObserver.observe(section));
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
  document.title = content[lang].documentTitle;

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);

  renderNav(lang);
  renderHero(lang);
  renderAbout(lang);
  renderSkills(lang);
  renderProjects(lang);
  renderResume(lang);
  renderContact(lang);

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  setupTypewriter(lang);
  setupRevealObserver();
  setupNavObserver();
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
