import { useState } from 'react'
import CaseStudyShell, { Body, DarkBox } from '../components/CaseStudyShell'

const S = { padding: '0 20px 64px', maxWidth: 760, margin: '0 auto' } as const
const H2 = { fontSize: 'clamp(20px,3vw,26px)' as const, fontWeight: 800, letterSpacing: '-0.02em', color: '#12141F', margin: '0 0 20px' }

const auditColumns = ['Tier', 'Components', 'Criteria']

const methodologySteps = [
  { n: '1', title: 'Design / Interface Audit', body: 'A systematic inventory of screens, components and layouts across 15 projects delivered over three years, gathered into a single visual reference to make repetition immediately visible rather than anecdotal.' },
  { n: '2', title: 'Informal Observation', body: 'Reviewing how designers actually worked file-to-file, to see where time was really being lost — not just what was being rebuilt, but why.' },
  { n: '3', title: 'Interviews', body: "Conversations with designers and developers who had worked on those projects, to surface the practical frustrations behind the repetition — tight deadlines, inconsistent handoff, absence of autolayout." },
]

const auditDimensions = [
  { label: 'Components', desc: 'Buttons, inputs, cards, tables, navigation, modals' },
  { label: 'Layouts', desc: 'Dashboards, detail views, forms, listing pages, empty states' },
  { label: 'Structure', desc: 'Grid usage, spacing, autolayout adoption, naming conventions' },
]

const principles = [
  { n: '01', name: 'Platform-agnostic tokens', desc: 'Design tokens stored as Figma Variables and exported as JSON — consumable by OutSystems, React, and any future platform without a design rework.' },
  { n: '02', name: 'Composition over configuration', desc: 'Components expose a small surface area of props. Complexity lives in composition — combining atoms into molecules — rather than in a single component trying to handle 40 variants.' },
  { n: '03', name: 'Documentation as the product', desc: "Every component ships with a usage guide, accessibility notes, and a \"when not to use\" section. A component without documentation doesn't ship." },
  { n: '04', name: 'Governance as a feature', desc: 'The system has a formal RFC process for new components: proposal, review, approve/reject/defer. Any designer can propose. No one person can approve alone.' },
]

export default function CaseStudyDesignSystem() {
  const [methodologyOpen, setMethodologyOpen] = useState(false)

  return (
    <CaseStudyShell
      eyebrow="Case Study"
      title="Internal Design System"
      description="Building an internal design platform that unified structure and components across projects, cutting redundant rebuild work and accelerating delivery — then evolving that same foundation from documentation a designer could read into a structured source an AI agent can read too."
      meta={[
        { label: 'Role', value: 'Lead Product Designer' },
        { label: 'Timeline', value: '2023 — Present' },
        { label: 'Platform', value: 'Internal enterprise projects (multiple client domains)' },
        { label: 'Team (initial)', value: '1 Lead Product Designer · 1 UX/UI Designer · 1 Junior UX/UI Designer · 1 Senior Front-End Engineer · 1 Front-End Engineer' },
        { label: 'Team (expanded)', value: '+ 1 Senior Back-End Architect · 1 Back-End Engineer (added as the system matured)' },
        { label: 'Tools', value: 'Figma (Variables, Auto Layout) · FigJam' },
        { label: 'Responsibilities', value: 'Design System Strategy · UX Architecture · Component Design · Documentation · Governance · Design Tokens · Cross-team Alignment', span: true },
      ]}
      stats={[
        { value: '15', label: 'projects audited' },
        { value: '2+', label: 'live projects adopting the system' },
        { value: '25%', label: 'faster delivery on flagship pilot' },
      ]}
    >
      {/* THE HOOK */}
      <div style={{ ...S, paddingTop: 48 }}>
        <h2 style={H2}>The Hook</h2>
        <Body>By 2023, the design team had accumulated three years of project-specific component libraries, each built in isolation, each solving the same problems differently. A button in one engagement looked nothing like a button in another. A data table in one project shared no structure with the same pattern elsewhere. Every new engagement started from scratch, rebuilding foundations the team had built — and rebuilt — many times before.</Body>
        <Body>The cost was invisible in any single project but enormous in aggregate: an estimated 30–40% of designer time on every engagement was spent rebuilding components that already existed somewhere in the team's Figma library history, but couldn't be safely reused because their quality, accessibility, and documentation were inconsistent.</Body>
      </div>

      {/* PHASE 1 */}
      <div style={S}>
        <h2 style={H2}>Phase 1 — Building the Foundation</h2>
        <Body>Phase 1 had one job: turn three years of scattered, one-off component libraries into a single, governed platform — audited from real usage, categorised and prioritised by actual impact, designed to be agnostic of any one project's branding or platform, and documented well enough that a designer who'd never touched the system could pick it up unassisted.</Body>

        <div style={{ padding: 24, borderRadius: 20, background: '#F2F6FF', border: '1px solid #EAF1FF', marginBottom: 28 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 10 }}>Auditing 15 Projects</div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 16px' }}>Rather than starting from new designs, the process began with a structured audit of the existing project ecosystem across three parallel methods, scored against three audit dimensions — components, layouts, and underlying structure.</p>

          <button
            onClick={() => setMethodologyOpen(o => !o)}
            style={{ cursor: 'pointer', display: 'inline-flex', fontSize: 13, fontWeight: 600, color: '#002FA7', background: 'rgba(0,47,167,0.09)', padding: '6px 14px', borderRadius: 999, border: 'none', fontFamily: "'Inter', sans-serif", marginBottom: 16 }}
          >
            {methodologyOpen ? 'Hide audit methodology ↑' : 'Show audit methodology ↓'}
          </button>

          {methodologyOpen && (
            <div style={{ background: 'rgba(0,47,167,0.03)', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 24 }}>
                {methodologySteps.map(({ n, title, body }) => (
                  <div key={n}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#12141F', marginBottom: 4 }}>{n}. {title}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: '#5A5F73', margin: 0 }}>{body}</p>
                  </div>
                ))}
              </div>
              <div className="rg-3">
                {auditDimensions.map(({ label, desc }) => (
                  <div key={label} style={{ padding: 16, borderRadius: 12, background: '#FFFFFF' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#001A5C', marginBottom: 6 }}>{label}</div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5A5F73', margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 12 }}>Categorising and Prioritising Components</div>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 20px' }}>The audit produced a prioritised component backlog — 120 candidate components ranked by frequency of use, cross-project relevance, and rebuild cost, then sorted into three tiers.</p>

        <div className="table-scroll" style={{ padding: 24, borderRadius: 20, border: '1px solid #EAF1FF', background: '#F8FAFF', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #EAF1FF' }}>
                {auditColumns.map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { tier: 'Foundation', n: '28', criteria: 'Used in every project; zero exceptions' },
                { tier: 'Core', n: '52', criteria: 'Used in >70% of projects' },
                { tier: 'Extended', n: '40', criteria: 'Domain-specific but reusable with theming' },
              ].map((row, i, arr) => (
                <tr key={row.tier} style={{ borderBottom: i < arr.length - 1 ? '1px solid #EAF1FF' : undefined }}>
                  <td data-label={auditColumns[0]} style={{ padding: '14px 16px', color: '#12141F', fontWeight: 600 }}>{row.tier}</td>
                  <td data-label={auditColumns[1]} style={{ padding: '14px 16px', color: '#002FA7', fontWeight: 700 }}>{row.n}</td>
                  <td data-label={auditColumns[2]} style={{ padding: '14px 16px', color: '#5A5F73' }}>{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 12 }}>Agnostic Project Design</div>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 20px' }}>The system was intentionally split into two layers, so that consistency and flexibility could coexist rather than compete. The core structure never changed — only what sat on top of it did.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
          <div style={{ padding: 24, borderRadius: 20, background: '#12141F', color: '#F2F6FF' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#8FAEFF', marginBottom: 10 }}>Core Platform (fixed)</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 6px' }}>— Foundations: colour, typography, spacing, grid</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 6px' }}>— Autolayout-first components (buttons, inputs, cards, tables, navigation, modals)</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: '0 0 6px' }}>— Reusable layout patterns (dashboard, detail view, form, listing, empty state)</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>— Documentation and lightweight governance</p>
          </div>
          <div style={{ padding: 24, borderRadius: 20, background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(20,30,60,0.1)' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#001A5C', marginBottom: 10 }}>Project Layer (flexible)</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A5F73', margin: '0 0 6px' }}>— Brand identity and visual theme</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A5F73', margin: '0 0 6px' }}>— Business-specific workflows</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A5F73', margin: '0 0 6px' }}>— Domain terminology</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A5F73', margin: 0 }}>— Project-specific layout variations for ambitious, larger-scope work</p>
          </div>
        </div>

        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 12 }}>Design Principles</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {principles.map(({ n, name, desc }) => (
            <div key={n} style={{ display: 'flex', gap: 20, padding: '20px 24px', borderRadius: 16, border: '1px solid #EAF1FF', background: '#FAFBFF' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#002FA7', minWidth: 28 }}>{n}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 6 }}>{name}</div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#5A5F73' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 12 }}>Governance</div>
        <DarkBox label="The Governance Question">
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: '0 0 16px' }}>The hardest problem in a shared design system is not the first 100 components. It's what happens in month 8, when a designer on a fast-moving engagement needs a pattern the system doesn't have, the deadline is in three days, and the temptation to build it one-off is real.</p>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>The RFC process was designed specifically for this moment: a lightweight proposal (one page, five fields) that can be reviewed asynchronously in 24 hours, approved for one-off use with a flag to be properly componentised in the next system sprint, or promoted directly to the backlog with a two-week SLA. It's the difference between a system that calcifies and one that grows.</p>
        </DarkBox>

        <Body>By the close of Phase 1, the system had moved past pilot status: adopted across 2+ live projects spanning different industries and geographies, each validating the core/project-layer split against a real, non-hypothetical brief — not just a heavier design file.</Body>

        <Body>Led the UX/UI direction for the initiative and acted as the technical bridge between UX/UI, front-end, backend and the PM — the design system only holds together if those four perspectives agree on the same constraints. Also provided hands-on technical support to junior UX/UI designers working within the system, reviewing their component contributions and helping them reason through edge cases rather than just approving or rejecting.</Body>
      </div>

      {/* WHAT WE LEARNED */}
      <div style={S}>
        <DarkBox label="What We Learned">
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>The system worked because designers could read it. The next challenge was making it work when the reader is an AI agent, not a person.</p>
        </DarkBox>
      </div>

      {/* PHASE 2 */}
      <div style={S}>
        <h2 style={H2}>Phase 2 — From Documentation to Agentic-Ready</h2>
        <Body>A design system written for a human designer optimises for prose — a usage guide, a rationale paragraph, a "when not to use" note read once and internalised. None of that is reliably parseable by a generative AI agent trying to decide, at runtime, which component to reach for and which prop values are actually valid. Phase 2 restructures the same underlying platform — the same tokens, the same tiered component library, the same governance model — so its documentation is structured enough for an agent to read it correctly, not just a person.</Body>
        <Body>That meant moving component specs from narrative documentation toward explicit, structured metadata: enumerated props and variants, machine-readable naming conventions, and example-driven usage patterns an agent can pattern-match against, on top of the human-readable guide that stays for designers.</Body>
        <Body>Phase 2 is live today, powering an internal initiative to define a new accelerator product for digital platform delivery — using the DS as the structured foundation an AI agent reads to generate pages and prototypes, not just a human designer.</Body>
      </div>

      {/* RESULTS */}
      <div style={S}>
        <h2 style={H2}>Results</h2>
        <div className="rg-2">
          {[
            { value: '120', label: 'components in production library' },
            { value: '25%', label: 'faster delivery on flagship pilot' },
            { value: '15', label: 'projects audited to build the foundation' },
            { value: '2+', label: 'live projects adopting the system today' },
          ].map(({ value, label }) => (
            <div key={label} style={{ padding: 20, borderRadius: 16, background: '#F2F6FF', textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#002FA7' }}>{value}</div>
              <div style={{ fontSize: 13, color: '#5A5F73', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </CaseStudyShell>
  )
}
