const categories = [
  { name: '写作', count: 12 },
  { name: '编程', count: 9 },
  { name: '研究', count: 7 },
  { name: '设计', count: 6 },
  { name: '自动化', count: 8 },
  { name: '客服', count: 5 },
]

const featuredAgents = [
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
]

const latestAgents = [
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
]

const guides = [
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
]

const directoryFilters = ['用途', '价格', '开源', '本地部署', '平台类型']

const directoryAgents = [
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
]

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pt-12">
        <nav className="mb-14 flex flex-wrap items-center justify-between gap-4 rounded-full neon-border bg-black/20 px-5 py-3 backdrop-blur">
          <span className="text-lg font-bold tracking-wide">BestClaw</span>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="#home" className="hover:text-white">首页</a>
            <a href="#directory" className="hover:text-white">目录</a>
            <a href="#guides" className="hover:text-white">指南</a>
            <a href="#submit" className="hover:text-white">提交</a>
          </div>
          <button className="rounded-full bg-neonBlue/90 px-4 py-2 text-sm font-semibold text-black hover:bg-neonBlue">提交 Agent</button>
        </nav>

        <section className="grid gap-10 md:grid-cols-2 md:items-center" id="home">
          <div>
            <p className="mb-3 inline-block rounded-full border border-neonPink/50 bg-neonPink/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neonPink">
              AI Agent Hub
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              找到最适合你的 <span className="text-neonBlue">AI Agent</span>
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              BestClaw 汇集主流 AI Agent 的介绍、指南与实用场景，帮助你快速筛选、上手与对比。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400"
                placeholder="搜索 Agent / 场景 / 关键词..."
              />
              <button className="rounded-lg bg-neonGreen px-5 py-3 font-semibold text-black hover:bg-neonGreen/90">开始搜索</button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
              热门：Cursor / Perplexity / Notion AI / Zapier AI
            </div>
          </div>
          <div className="rounded-2xl neon-border bg-black/30 p-6 shadow-neon">
            <p className="text-sm uppercase tracking-wider text-neonBlue">本周精选</p>
            <div className="mt-4 space-y-4">
              {featuredAgents.map((agent) => (
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
          <h2 className="section-title">分类入口</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.name} className="rounded-2xl neon-border bg-black/35 p-5">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{category.count} 个推荐 Agent</p>
              </article>
            ))}
          </div>
        </section>

        <section id="latest">
          <h2 className="section-title">最新收录</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {latestAgents.map((agent) => (
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
            <h2 className="section-title">Agent 目录（模板）</h2>
            <div className="flex flex-wrap gap-2">
              {directoryFilters.map((filter) => (
                <span key={filter} className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-xs text-neonBlue">
                  {filter}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {directoryAgents.map((agent) => (
              <article key={agent.name} className="rounded-2xl neon-border bg-black/35 p-5 hover:-translate-y-1 hover:shadow-neon transition">
                <p className="text-xs uppercase tracking-wider text-neonPink">{agent.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-2 text-sm text-slate-300">适合：{agent.audience}</p>
                <p className="mt-3 text-slate-300">{agent.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="agent-detail" className="rounded-2xl neon-border bg-black/30 p-8">
          <h2 className="section-title">Agent 详情页（模板）</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold">Cursor</h3>
              <p className="mt-2 text-slate-300">AI 编程 IDE，支持代码生成、重构与上下文协作。</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-neonBlue">编程</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">适合：开发者</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">平台：桌面 App</span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {['功能亮点', '适合人群', '集成方式', '成本/定价'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold">{item}</h4>
                    <p className="mt-2 text-sm text-slate-300">这里展示 {item} 的要点内容。</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-semibold">快速上手</h4>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                <li>1. 安装并登录</li>
                <li>2. 选择代码仓库或项目</li>
                <li>3. 通过内置 Agent 执行任务</li>
              </ol>
              <h4 className="mt-6 font-semibold">典型场景</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• 代码重构与审查</li>
                <li>• 新功能快速打样</li>
                <li>• 技术文档整理</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="guides">
          <h2 className="section-title">指南中心</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-wider text-neonGreen">{guide.read}</p>
                <h3 className="mt-2 text-lg font-semibold">{guide.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{guide.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="submit" className="rounded-2xl neon-border bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/10 to-emerald-500/15 p-8">
          <h2 className="text-3xl font-semibold">提交你的 AI Agent</h2>
          <p className="mt-3 max-w-2xl text-slate-300">填写基础信息，我们会进行人工审核并在目录中展示。</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder="Agent 名称" />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder="官网链接" />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white md:col-span-2" placeholder="一句话描述" />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder="适用场景" />
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" placeholder="截图 / 资料链接" />
            <button className="rounded-lg bg-neonBlue px-6 py-3 font-semibold text-black hover:bg-neonBlue/90 md:col-span-2">提交 Agent</button>
          </form>
        </section>
      </main>
    </div>
  )
}
