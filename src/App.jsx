const LOCALE_PATHS = ['zh', 'fr']

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
    featured: 'Featured This Week',
    categoriesTitle: 'Categories',
    latestTitle: 'Newest Agents',
    directoryTitle: 'Agent Directory (Template)',
    directoryFilters: ['Use case', 'Pricing', 'Open-source', 'Local', 'Platform'],
    agentDetailTitle: 'Agent Detail (Template)',
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
      title: 'Cursor',
      desc: 'An AI-first IDE for code generation, refactoring, and context collaboration.',
      tags: ['Engineering', 'Best for: Developers', 'Platform: Desktop app'],
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
        name: 'Jasper',
        tag: 'Writing',
        audience: 'Marketing teams',
        summary: 'Marketing content platform with team collaboration.',
      },
      {
        name: 'Codeium',
        tag: 'Engineering',
        audience: 'Developers',
        summary: 'Multi-editor coding assistant with generous free tier.',
      },
      {
        name: 'Ada Support',
        tag: 'Support',
        audience: 'Support teams',
        summary: 'Enterprise support automation with knowledge base sync.',
      },
      {
        name: 'Zapier AI',
        tag: 'Automation',
        audience: 'Operations',
        summary: 'Generate workflows across apps using natural language.',
      },
      {
        name: 'Midjourney',
        tag: 'Design',
        audience: 'Creators',
        summary: 'High-fidelity image generation and style exploration.',
      },
      {
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
    featured: '本周精选',
    categoriesTitle: '分类入口',
    latestTitle: '最新收录',
    directoryTitle: 'Agent 目录（模板）',
    directoryFilters: ['用途', '价格', '开源', '本地部署', '平台类型'],
    agentDetailTitle: 'Agent 详情页（模板）',
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
      title: 'Cursor',
      desc: 'AI 编程 IDE，支持代码生成、重构与上下文协作。',
      tags: ['编程', '适合：开发者', '平台：桌面 App'],
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
        name: 'Jasper',
        tag: '写作',
        audience: '市场团队',
        summary: '营销文案与内容创作平台，支持团队协作。',
      },
      {
        name: 'Codeium',
        tag: '编程',
        audience: '开发者',
        summary: '多编辑器 AI 编程助手，免费额度友好。',
      },
      {
        name: 'Ada Support',
        tag: '客服',
        audience: '客服团队',
        summary: '企业级客服自动化与知识库接入。',
      },
      {
        name: 'Zapier AI',
        tag: '自动化',
        audience: '运营',
        summary: '用自然语言生成跨应用自动化流程。',
      },
      {
        name: 'Midjourney',
        tag: '设计',
        audience: '内容创作者',
        summary: '高质量图像生成与风格探索。',
      },
      {
        name: 'LlamaIndex',
        tag: '研究',
        audience: '技术团队',
        summary: '构建 RAG 与知识检索 Agent 的工具栈。',
      },
    ],
  },
}

const resolveLocale = () => {
  if (typeof window === 'undefined') return 'en'
  const path = window.location.pathname
  const segment = path.split('/')[1]
  if (LOCALE_PATHS.includes(segment)) return segment
  return 'en'
}

const withLocalePrefix = (path, locale) => {
  if (!path.startsWith('#')) return path
  if (locale === 'en') return path
  return `/${locale}${path}`
}

export default function App() {
  const locale = resolveLocale()
  const t = content[locale] || content.en
  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'directory', href: '#directory' },
    { key: 'guides', href: '#guides' },
    { key: 'submit', href: '#submit' },
  ]

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pt-12">
        <nav className="mb-14 flex flex-wrap items-center justify-between gap-4 rounded-full neon-border bg-black/20 px-5 py-3 backdrop-blur">
          <span className="text-lg font-bold tracking-wide">BestClaw</span>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {navLinks.map((item) => (
              <a key={item.key} href={withLocalePrefix(item.href, locale)} className="hover:text-white">
                {t.nav[item.key]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={locale === 'en' ? '/zh' : '/'}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 hover:text-white"
            >
              {locale === 'en' ? '中文' : 'EN'}
            </a>
            <button className="rounded-full bg-neonBlue/90 px-4 py-2 text-sm font-semibold text-black hover:bg-neonBlue">
              {t.submitButton}
            </button>
          </div>
        </nav>

        <section className="grid gap-10 md:grid-cols-2 md:items-center" id="home">
          <div>
            <p className="mb-3 inline-block rounded-full border border-neonPink/50 bg-neonPink/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neonPink">
              {t.hero.badge}
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              {t.hero.title} <span className="text-neonBlue">{t.hero.highlight}</span>{' '}
              {t.hero.titleSuffix}
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">{t.hero.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400"
                placeholder={t.hero.placeholder}
              />
              <button className="rounded-lg bg-neonGreen px-5 py-3 font-semibold text-black hover:bg-neonGreen/90">
                {t.hero.cta}
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">{t.hero.trending}</div>
          </div>
          <div className="rounded-2xl neon-border bg-black/30 p-6 shadow-neon">
            <p className="text-sm uppercase tracking-wider text-neonBlue">{t.featured}</p>
            <div className="mt-4 space-y-4">
              {t.featuredAgents.map((agent) => (
                <article key={agent.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{agent.name}</h3>
                    <span className="text-xs text-neonPink">{agent.tag}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{agent.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24">
        <section id="categories">
          <h2 className="section-title">{t.categoriesTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((category) => (
              <article key={category.name} className="rounded-2xl neon-border bg-black/35 p-5">
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
              <article key={agent.name} className="rounded-2xl neon-border bg-black/35 p-5">
                <p className="text-xs uppercase tracking-wider text-neonPink">{agent.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-3 text-slate-300">{agent.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="directory">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="section-title">{t.directoryTitle}</h2>
            <div className="flex flex-wrap gap-2">
              {t.directoryFilters.map((filter) => (
                <span key={filter} className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-xs text-neonBlue">
                  {filter}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.directoryAgents.map((agent) => (
              <article key={agent.name} className="rounded-2xl neon-border bg-black/35 p-5 hover:-translate-y-1 hover:shadow-neon transition">
                <p className="text-xs uppercase tracking-wider text-neonPink">{agent.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {locale === 'en' ? 'Best for: ' : '适合：'}
                  {agent.audience}
                </p>
                <p className="mt-3 text-slate-300">{agent.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="agent-detail" className="rounded-2xl neon-border bg-black/30 p-8">
          <h2 className="section-title">{t.agentDetailTitle}</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold">{t.detail.title}</h3>
              <p className="mt-2 text-slate-300">{t.detail.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {t.detail.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
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
            </div>
          </div>
        </section>

        <section id="guides">
          <h2 className="section-title">{t.guidesTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.guides.map((guide) => (
              <article key={guide.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-wider text-neonGreen">{guide.read}</p>
                <h3 className="mt-2 text-lg font-semibold">{guide.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{guide.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="submit" className="rounded-2xl neon-border bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/10 to-emerald-500/15 p-8">
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
