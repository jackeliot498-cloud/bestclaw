const featuredAgents = [
  { name: 'CodeClaw Pro', specialty: 'Code generation + review', uptime: '99.98%' },
  { name: 'MarketClaw Pulse', specialty: 'Realtime trend analysis', uptime: '99.95%' },
  { name: 'SupportClaw Edge', specialty: '24/7 support automation', uptime: '99.99%' },
]

const categories = ['Engineering', 'Sales', 'Support', 'Research', 'Operations', 'Marketing']

const agents = [
  { name: 'BugHunter', category: 'Engineering', summary: 'Finds, triages, and proposes fixes for regressions.' },
  { name: 'LeadForge', category: 'Sales', summary: 'Scores prospects and drafts targeted outreach flows.' },
  { name: 'TicketTamer', category: 'Support', summary: 'Auto-resolves repetitive tickets with context memory.' },
  { name: 'InsightRift', category: 'Research', summary: 'Summarizes competitor moves and product signals.' },
  { name: 'OpsBeacon', category: 'Operations', summary: 'Tracks SLA drift and coordinates alert response.' },
  { name: 'LaunchOrbit', category: 'Marketing', summary: 'Builds campaign drafts, briefs, and growth experiments.' },
]

const testimonials = [
  { quote: 'BestClaw reduced our backlog by 41% in three weeks.', author: 'CTO, NovaStack' },
  { quote: 'We launched agent-assisted support in under two days.', author: 'Head of CX, Driftline' },
  { quote: 'The hub made agent ops visible, measurable, and fast.', author: 'COO, HelixCore' },
]

const faqs = [
  {
    q: 'Can I run agents with my own data?',
    a: 'Yes. Connect your internal docs, tools, and APIs through secured integrations.',
  },
  {
    q: 'Do I need a large team to maintain this?',
    a: 'No. Start with templates and gradually tune agent behavior as usage grows.',
  },
  {
    q: 'How quickly can I deploy?',
    a: 'Most teams publish their first production workflow within a day.',
  },
]

const pricing = [
  { tier: 'Starter', cost: '$29', blurb: 'For solo builders', points: ['3 active agents', 'Community templates', 'Basic analytics'] },
  { tier: 'Scale', cost: '$99', blurb: 'For growing teams', points: ['15 active agents', 'Workflow automations', 'Priority support'] },
  { tier: 'Enterprise', cost: 'Custom', blurb: 'For advanced ops', points: ['Unlimited agents', 'SSO + governance', 'Dedicated architect'] },
]

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:pt-12">
        <nav className="mb-16 flex items-center justify-between rounded-full neon-border bg-black/20 px-5 py-3 backdrop-blur">
          <span className="text-lg font-bold tracking-wide">BestClaw</span>
          <button className="rounded-full bg-neonBlue/90 px-4 py-2 text-sm font-semibold text-black hover:bg-neonBlue">Launch Hub</button>
        </nav>

        <section className="grid gap-10 md:grid-cols-2 md:items-center" id="hero">
          <div>
            <p className="mb-3 inline-block rounded-full border border-neonPink/50 bg-neonPink/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neonPink">
              Claw-Class Agent Hub
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Build, Deploy, and Scale <span className="text-neonBlue">Elite AI Agents</span>
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              A unified platform to orchestrate domain agents, monitor outcomes, and ship autonomous workflows with precision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-neonGreen px-5 py-3 font-semibold text-black hover:bg-neonGreen/90">Start Free</button>
              <button className="rounded-lg border border-neonBlue/60 px-5 py-3 font-semibold text-neonBlue hover:bg-neonBlue/10">View Demo</button>
            </div>
          </div>
          <div className="rounded-2xl neon-border bg-black/30 p-6 shadow-neon">
            <p className="text-sm uppercase tracking-wider text-neonBlue">Featured Agents</p>
            <div className="mt-4 space-y-4">
              {featuredAgents.map((agent) => (
                <article key={agent.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold">{agent.name}</h3>
                  <p className="text-sm text-slate-300">{agent.specialty}</p>
                  <p className="mt-2 text-xs text-neonGreen">Uptime: {agent.uptime}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24">
        <section id="categories">
          <h2 className="section-title">Categories</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-neonBlue/40 bg-neonBlue/10 px-4 py-2 text-sm text-neonBlue">
                {category}
              </span>
            ))}
          </div>
        </section>

        <section id="agent-grid">
          <h2 className="section-title">Agent Cards</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <article key={agent.name} className="rounded-2xl neon-border bg-black/35 p-5 hover:-translate-y-1 hover:shadow-neon transition">
                <p className="text-xs uppercase tracking-wider text-neonPink">{agent.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{agent.name}</h3>
                <p className="mt-3 text-slate-300">{agent.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works">
          <h2 className="section-title">How It Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['Pick a template', 'Connect your stack', 'Deploy and monitor'].map((step, index) => (
              <article key={step} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-neonGreen">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-slate-300">Placeholder workflow text describing each phase of agent lifecycle.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials">
          <h2 className="section-title">Testimonials</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-xl border border-neonPink/30 bg-neonPink/5 p-5">
                <p className="text-slate-200">“{item.quote}”</p>
                <footer className="mt-3 text-sm text-neonPink">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="pricing">
          <h2 className="section-title">Pricing</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pricing.map((plan) => (
              <article key={plan.tier} className="rounded-2xl neon-border bg-black/30 p-6">
                <h3 className="text-xl font-semibold">{plan.tier}</h3>
                <p className="mt-1 text-3xl font-bold text-neonBlue">{plan.cost}</p>
                <p className="mt-2 text-sm text-slate-300">{plan.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {plan.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 className="section-title">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="cta" className="rounded-2xl neon-border bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/10 to-emerald-500/15 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready to ship your first claw-class workflow?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Create your workspace, deploy placeholder agents, and iterate fast with complete operational visibility.</p>
          <button className="mt-6 rounded-lg bg-neonBlue px-6 py-3 font-semibold text-black hover:bg-neonBlue/90">Create Workspace</button>
        </section>
      </main>
    </div>
  )
}
