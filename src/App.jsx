import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

const content = {
  en: {
    nav: { home: 'Home', directory: 'Directory', guides: 'Guides', submit: 'Submit' },
    hero: {
      badge: 'AI Agent Hub',
      title: 'Find the Best',
      highlight: 'AI Agents',
      titleSuffix: 'for Your Workflow',
      subtitle: 'BestClaw curates leading AI agents with clear guides and practical use cases.',
      placeholder: 'Search agents / use cases / keywords...',
      cta: 'Search',
      trending: 'Trending: Cursor / Perplexity / Notion AI / Zapier AI',
    },
    stats: [
      { value: '120+', label: 'Agents indexed' },
      { value: '6', label: 'Core categories' },
      { value: '24h', label: 'Weekly refresh' },
    ],
    featured: 'Featured This Week',
    categoriesTitle: 'Categories',
    latestTitle: 'Newest Agents',
    directoryTitle: 'Agent Directory',
    directoryFilters: ['Use case', 'Pricing', 'Open-source', 'Local', 'Platform'],
    agentDetailTitle: 'Agent Detail',
    quickStart: 'Quick Start',
    scenarios: 'Popular Scenarios',
    guidesTitle: 'Guides',
    submitTitle: 'Submit Your AI Agent',
    submitDesc: 'Share basic details. We review every submission before listing.',
    submitButton: 'Submit Agent',
    inputs: {
      name: 'Agent name',
      link: 'Official website',
      tagline: 'One-line description',
      useCase: 'Primary use case',
      assets: 'Screenshots / assets link',
    },
    detail: {
      blocks: ['Highlights', 'Best for', 'Integrations', 'Pricing'],
      blockDesc: 'Key points for {item}.',
      steps: ['Install and sign in', 'Pick a repository', 'Run tasks with built-in agents'],
      useCases: ['Refactor existing codebases', 'Ship rapid prototypes', 'Generate technical documentation'],
    },
    categories: [
      { name: 'Writing', count: 12 },
      { name: 'Engineering', count: 9 },
      { name: 'Research', count: 7 },
      { name: 'Design', count: 6 },
      { name: 'Automation', count: 8 },
      { name: 'Support', count: 5 },
    ],
    featuredAgents: [
      {
        name: 'Cursor',
        tag: 'Engineering',
        summary: 'AI-first IDE with code generation and refactoring in-context.',
      },
      {
        name: 'Perplexity',
        tag: 'Research',
        summary: 'Answer engine + research copilot for fast discovery.',
      },
      {
        name: 'Notion AI',
        tag: 'Writing',
        summary: 'Smart writing and summarization inside collaborative docs.',
      },
    ],
    latestAgents: [
      {
        name: 'Make + AI',
        tag: 'Automation',
        summary: 'Low-code workflows connecting tools and data sources.',
      },
      {
        name: 'Elicit',
        tag: 'Research',
        summary: 'Research assistant that extracts key findings from papers.',
      },
      {
        name: 'Canva AI',
        tag: 'Design',
        summary: 'Generate design assets, presentations, and marketing visuals.',
      },
    ],
    guides: [
      {
        title: 'How to choose the right AI agent',
        desc: 'Pick by goals, budget, and data sensitivity.',
        read: '6 min',
      },
      {
        title: 'A playbook for research + content workflows',
        desc: 'Break tasks down, pick tools, reuse templates.',
        read: '8 min',
      },
      {
        title: '10 high-value agents to start with',
        desc: 'Coverage across writing, code, support, and ops.',
        read: '5 min',
      },
    ],
    directoryAgents: [
      {
        slug: 'jasper',
        name: 'Jasper',
        tag: 'Writing',
        audience: 'Marketing teams',
        summary: 'Marketing content platform with team collaboration.',
      },
      {
        slug: 'codeium',
        name: 'Codeium',
        tag: 'Engineering',
        audience: 'Developers',
        summary: 'Multi-editor coding assistant with generous free tier.',
      },
      {
        slug: 'ada-support',
        name: 'Ada Support',
        tag: 'Support',
        audience: 'Support teams',
        summary: 'Enterprise support automation with knowledge base sync.',
      },
      {
        slug: 'zapier-ai',
        name: 'Zapier AI',
        tag: 'Automation',
        audience: 'Operations',
        summary: 'Generate workflows across apps using natural language.',
      },
      {
        slug: 'midjourney',
        name: 'Midjourney',
        tag: 'Design',
        audience: 'Creators',
        summary: 'High-fidelity image generation and style exploration.',
      },
      {
        slug: 'llamaindex',
        name: 'LlamaIndex',
        tag: 'Research',
        audience: 'Product teams',
        summary: 'Tooling to build RAG pipelines and retrieval agents.',
      },
    ],
  },
  zh: {
    nav: { home: '首页', directory: '目录', guides: '指南', submit: '提交' },
    hero: {
      badge: 'AI Agent Hub',
      title: '找到最适合你的',
      highlight: 'AI Agent',
      titleSuffix: '',
      subtitle: 'BestClaw 汇集主流 AI Agent 的介绍、指南与实用场景，帮助你快速筛选与上手。',
      placeholder: '搜索 Agent / 场景 / 关键词...',
      cta: '开始搜索',
      trending: '热门：Cursor / Perplexity / Notion AI / Zapier AI',
    },
    stats: [
      { value: '120+', label: '已收录 Agent' },
      { value: '6', label: '核心分类' },
      { value: '24h', label: '每周更新' },
    ],
    featured: '本周精选',
    categoriesTitle: '分类入口',
    latestTitle: '最新收录',
    directoryTitle: 'Agent 目录',
    directoryFilters: ['用途', '价格', '开源', '本地部署', '平台类型'],
    agentDetailTitle: 'Agent 详情页',
    quickStart: '快速上手',
    scenarios: '典型场景',
    guidesTitle: '指南中心',
    submitTitle: '提交你的 AI Agent',
    submitDesc: '填写基础信息，我们会进行人工审核并在目录中展示。',
    submitButton: '提交 Agent',
    inputs: {
      name: 'Agent 名称',
      link: '官网链接',
      tagline: '一句话描述',
      useCase: '适用场景',
      assets: '截图 / 资料链接',
    },
    detail: {
      blocks: ['功能亮点', '适合人群', '集成方式', '成本/定价'],
      blockDesc: '这里展示 {item} 的要点内容。',
      steps: ['安装并登录', '选择代码仓库或项目', '通过内置 Agent 执行任务'],
      useCases: ['代码重构与审查', '新功能快速打样', '技术文档整理'],
    },
    categories: [
      { name: '写作', count: 12 },
      { name: '编程', count: 9 },
      { name: '研究', count: 7 },
      { name: '设计', count: 6 },
      { name: '自动化', count: 8 },
      { name: '客服', count: 5 },
    ],
    featuredAgents: [
      {
        name: 'Cursor',
        tag: '编程',
        summary: 'AI 编程 IDE，支持代码生成、重构与上下文协作。',
      },
      {
        name: 'Perplexity',
        tag: '研究',
        summary: '答案引擎 + 研究助理，适合快速检索与引用。',
      },
      {
        name: 'Notion AI',
        tag: '写作',
        summary: '文档协作中的智能写作与整理助手。',
      },
    ],
    latestAgents: [
      {
        name: 'Make + AI',
        tag: '自动化',
        summary: '低代码自动化平台，适合跨系统流程编排。',
      },
      {
        name: 'Elicit',
        tag: '研究',
        summary: '学术研究助理，自动提取论文关键发现。',
      },
      {
        name: 'Canva AI',
        tag: '设计',
        summary: '快速生成设计稿、营销物料与演示模板。',
      },
    ],
    guides: [
      {
        title: '新手指南：如何选择合适的 AI Agent',
        desc: '从目标、预算、数据安全三维度快速筛选。',
        read: '6 min',
      },
      {
        title: '通用玩法：用 Agent 做研究与内容生产',
        desc: '拆分任务 → 选择工具 → 模板复用。',
        read: '8 min',
      },
      {
        title: '工具合集：10 个高性价比的 Agent',
        desc: '覆盖写作、编程、客服、运营等场景。',
        read: '5 min',
      },
    ],
    directoryAgents: [
      {
        slug: 'jasper',
        name: 'Jasper',
        tag: '写作',
        audience: '市场团队',
        summary: '营销文案与内容创作平台，支持团队协作。',
      },
      {
        slug: 'codeium',
        name: 'Codeium',
        tag: '编程',
        audience: '开发者',
        summary: '多编辑器 AI 编程助手，免费额度友好。',
      },
      {
        slug: 'ada-support',
        name: 'Ada Support',
        tag: '客服',
        audience: '客服团队',
        summary: '企业级客服自动化与知识库接入。',
      },
      {
        slug: 'zapier-ai',
        name: 'Zapier AI',
        tag: '自动化',
        audience: '运营',
        summary: '用自然语言生成跨应用自动化流程。',
      },
      {
        slug: 'midjourney',
        name: 'Midjourney',
        tag: '设计',
        audience: '内容创作者',
        summary: '高质量图像生成与风格探索。',
      },
      {
        slug: 'llamaindex',
        name: 'LlamaIndex',
        tag: '研究',
        audience: '技术团队',
        summary: '构建 RAG 与知识检索 Agent 的工具栈。',
      },
    ],
  },
}

const locales = Object.keys(content)

const resolveLocale = (paramLocale) => {
  if (paramLocale && locales.includes(paramLocale)) return paramLocale
  return 'en'
}

const buildPath = (path, locale) => {
  if (path.startsWith('#')) {
    return locale === 'en' ? path : `/${locale}${path}`
  }
  if (locale === 'en') return path
  return `/${locale}${path}`
}

const getAgentBySlug = (locale, slug) => {
  const t = content[locale] || content.en
  return t.directoryAgents.find((agent) => agent.slug === slug) || t.directoryAgents[0]
}

const LanguageSwitch = ({ locale }) => (
  <a
    href={locale === 'en' ? '/zh' : '/'}
    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 hover:text-white"
  >
    {locale === 'en' ? '中文' : 'EN'}
  </a>
)

const Navigation = ({ locale }) => {
  const t = content[locale] || content.en
  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'directory', href: '/directory' },
    { key: 'guides', href: '/guides' },
    { key: 'submit', href: '#submit' },
  ]

  return (
    <nav className="mb-14 flex flex-wrap items-center justify-between gap-4 rounded-full neon-border bg-black/20 px-5 py-3 backdrop-blur">
      <Link to={buildPath('/', locale)} className="text-lg font-bold tracking-wide">
        BestClaw
      </Link>
      <div className="flex flex-wrap gap-3 text-sm text-slate-300">
        {navLinks.map((item) => (
          <a key={item.key} href={buildPath(item.href, locale)} className="hover:text-white">
            {t.nav[item.key]}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <LanguageSwitch locale={locale} />
        <button className="rounded-full bg-neonBlue/90 px-4 py-2 text-sm font-semibold text-black hover:bg-neonBlue">
          {t.submitButton}
        </button>
      </div>
    </nav>
  )
}

const Home = ({ locale }) => {
  const t = content[locale] || content.en

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pt-12">
        <Navigation locale={locale} />

        <section
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/30 p-10 md:p-14"
          id="home"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-neonBlue/20 blur-3xl float-slow" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-neonPink/20 blur-3xl float-fast" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="fade-rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
                <span className="h-2 w-2 rounded-full bg-neonGreen" />
                {t.hero.badge}
              </p>
              <h1 className="display-font text-4xl font-semibold leading-tight md:text-6xl">
                {t.hero.title} <span className="text-neonBlue">{t.hero.highlight}</span>{' '}
                {t.hero.titleSuffix}
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400"
                  placeholder={t.hero.placeholder}
                />
                <button className="rounded-xl bg-neonGreen px-6 py-3 font-semibold text-black hover:bg-neonGreen/90">
                  {t.hero.cta}
                </button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-400">{t.hero.trending}</div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.stats.map((item) => (
                  <div key={item.label} className="glass-panel rounded-2xl px-4 py-4">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-[28px] p-6 fade-rise">
              <p className="text-sm uppercase tracking-wider text-neonBlue">{t.featured}</p>
              <div className="mt-5 space-y-4">
                {t.featuredAgents.map((agent) => (
                  <article key={agent.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{agent.name}</h3>
                      <span className="text-xs text-neonPink">{agent.tag}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{agent.summary}</p>
                  </article>
                ))}
              </div>
              <Link
                to={buildPath('/directory', locale)}
                className="mt-6 inline-flex text-sm text-neonBlue hover:text-neonBlue/80"
              >
                {locale === 'en' ? 'Browse directory →' : '进入目录 →'}
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="hero-illustration absolute -right-10 top-10 h-72 w-72 rounded-[48px] blur-0" />
              <svg
                className="absolute -right-16 top-24 h-64 w-64 opacity-80"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="rgba(92,255,233,0.3)"
                  d="M44.8,-61.2C58.3,-52.3,69.4,-39.1,74.1,-23.8C78.8,-8.4,77,9.1,70.2,23.5C63.5,38,51.8,49.5,38.1,58.7C24.5,67.9,9,74.7,-7.4,76.6C-23.9,78.5,-47.8,75.5,-61.1,63.8C-74.4,52.2,-77,31.8,-76.5,12.8C-75.9,-6.2,-72.1,-23.7,-61.2,-35.6C-50.3,-47.4,-32.2,-53.6,-15.4,-60.4C1.4,-67.2,2.4,-74.7,44.8,-61.2Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                className="absolute -right-4 top-56 h-40 w-40 opacity-70"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="rgba(255,142,200,0.35)"
                  d="M36.8,-47.6C50.1,-42.6,65.7,-34.6,72,-22.1C78.3,-9.6,75.2,7.4,67.4,22.1C59.7,36.8,47.3,49.1,33.7,57.7C20.1,66.3,5.3,71.3,-8.4,73.5C-22.1,75.6,-44.2,74.9,-55.4,64.2C-66.6,53.5,-67,32.8,-66.4,14.2C-65.8,-4.3,-64.2,-20.8,-55.8,-32.5C-47.4,-44.2,-32.3,-51,-18.1,-57.1C-3.9,-63.1,9.4,-68.4,36.8,-47.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24">
        <section id="categories">
          <h2 className="section-title">{t.categoriesTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((category) => (
              <article key={category.name} className="glass-panel rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {category.count} {locale === 'en' ? 'recommended agents' : '个推荐 Agent'}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="latest">
          <h2 className="section-title">{t.latestTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {t.latestAgents.map((agent) => (
              <article key={agent.name} className="glass-panel rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wider text-neonPink">{agent.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-3 text-slate-300">{agent.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="guides">
          <h2 className="section-title">{t.guidesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.guides.map((guide) => (
              <article key={guide.title} className="glass-panel rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wider text-neonGreen">{guide.read}</p>
                <h3 className="mt-2 text-lg font-semibold">{guide.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{guide.desc}</p>
              </article>
            ))}
          </div>
          <Link
            to={buildPath('/guides', locale)}
            className="mt-6 inline-flex text-sm text-neonBlue hover:text-neonBlue/80"
          >
            {locale === 'en' ? 'Explore all guides →' : '查看全部指南 →'}
          </Link>
        </section>

        <section id="submit" className="glass-panel rounded-[28px] p-8">
          <h2 className="text-3xl font-semibold">{t.submitTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{t.submitDesc}</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder={t.inputs.name} />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder={t.inputs.link} />
            <input
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white md:col-span-2"
              placeholder={t.inputs.tagline}
            />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder={t.inputs.useCase} />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder={t.inputs.assets} />
            <button className="rounded-lg bg-neonBlue px-6 py-3 font-semibold text-black hover:bg-neonBlue/90 md:col-span-2">
              {t.submitButton}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

const Guides = ({ locale }) => {
  const t = content[locale] || content.en

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-12 pt-8 md:pt-12">
        <Navigation locale={locale} />
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neonBlue/20 blur-3xl float-slow" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-neonPink/20 blur-3xl float-fast" />
          <h1 className="display-font text-3xl font-semibold">{t.guidesTitle}</h1>
          <p className="mt-2 text-slate-300">
            {locale === 'en'
              ? 'Playbooks, comparisons, and onboarding guides for every agent workflow.'
              : '覆盖新手入门、场景玩法与对比评测的使用指南。'}
          </p>
        </section>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="grid gap-4 md:grid-cols-3">
          {t.guides.map((guide) => (
            <article key={guide.title} className="glass-panel rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-neonGreen">{guide.read}</p>
              <h3 className="mt-2 text-lg font-semibold">{guide.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{guide.desc}</p>
              <button className="mt-4 inline-flex text-sm text-neonBlue hover:text-neonBlue/80">
                {locale === 'en' ? 'Read guide →' : '阅读指南 →'}
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

const Directory = ({ locale }) => {
  const t = content[locale] || content.en

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-12 pt-8 md:pt-12">
        <Navigation locale={locale} />
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neonBlue/20 blur-3xl float-slow" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-neonPink/20 blur-3xl float-fast" />
          <h1 className="display-font text-3xl font-semibold">{t.directoryTitle}</h1>
          <p className="mt-2 text-slate-300">{locale === 'en' ? 'Browse agents by use case, pricing, and platform.' : '按用途、价格与平台筛选 Agent。'}</p>
        </section>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section>
          <div className="flex flex-wrap gap-2">
            {t.directoryFilters.map((filter) => (
              <span key={filter} className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-xs text-neonBlue">
                {filter}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.directoryAgents.map((agent) => (
              <article key={agent.name} className="glass-panel rounded-2xl p-5 hover:-translate-y-1 hover:shadow-neon transition">
                <p className="text-xs uppercase tracking-wider text-neonPink">{agent.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {locale === 'en' ? 'Best for: ' : '适合：'}
                  {agent.audience}
                </p>
                <p className="mt-3 text-slate-300">{agent.summary}</p>
                <Link
                  to={buildPath(`/agents/${agent.slug}`, locale)}
                  className="mt-4 inline-flex text-sm text-neonBlue hover:text-neonBlue/80"
                >
                  {locale === 'en' ? 'View details →' : '查看详情 →'}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const AgentDetail = ({ locale }) => {
  const t = content[locale] || content.en
  const { slug } = useParams()
  const agent = getAgentBySlug(locale, slug)

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-12 pt-8 md:pt-12">
        <Navigation locale={locale} />
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neonBlue/20 blur-3xl float-slow" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-neonPink/20 blur-3xl float-fast" />
          <h1 className="display-font text-3xl font-semibold">{agent.name}</h1>
          <p className="mt-2 text-slate-300">{agent.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-neonBlue">
              {agent.tag}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
              {locale === 'en' ? 'Best for: ' : '适合：'}
              {agent.audience}
            </span>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="glass-panel rounded-[28px] p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="section-title">{t.agentDetailTitle}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {t.detail.blocks.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold">{item}</h4>
                    <p className="mt-2 text-sm text-slate-300">
                      {t.detail.blockDesc.replace('{item}', item)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-semibold">{t.quickStart}</h4>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                {t.detail.steps.map((step, index) => (
                  <li key={step}>
                    {index + 1}. {step}
                  </li>
                ))}
              </ol>
              <h4 className="mt-6 font-semibold">{t.scenarios}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {t.detail.useCases.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                to={buildPath('/directory', locale)}
                className="mt-6 inline-flex text-sm text-neonBlue hover:text-neonBlue/80"
              >
                {locale === 'en' ? '← Back to directory' : '← 返回目录'}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const RouteResolver = ({ type }) => {
  const { locale } = useParams()
  const resolvedLocale = resolveLocale(locale)

  if (type === 'directory') return <Directory locale={resolvedLocale} />
  if (type === 'detail') return <AgentDetail locale={resolvedLocale} />
  if (type === 'guides') return <Guides locale={resolvedLocale} />
  return <Home locale={resolvedLocale} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteResolver type="home" />} />
        <Route path="/directory" element={<RouteResolver type="directory" />} />
        <Route path="/agents/:slug" element={<RouteResolver type="detail" />} />
        <Route path="/guides" element={<RouteResolver type="guides" />} />
        <Route path="/:locale" element={<RouteResolver type="home" />} />
        <Route path="/:locale/directory" element={<RouteResolver type="directory" />} />
        <Route path="/:locale/agents/:slug" element={<RouteResolver type="detail" />} />
        <Route path="/:locale/guides" element={<RouteResolver type="guides" />} />
      </Routes>
    </BrowserRouter>
  )
}
