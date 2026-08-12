import CaseStudyShell, { Body, DarkBox } from '../components/CaseStudyShell'

const S = { padding: '0 20px 64px', maxWidth: 760, margin: '0 auto' } as const
const H2 = { fontSize: 'clamp(20px,3vw,26px)' as const, fontWeight: 800, letterSpacing: '-0.02em', color: '#12141F', margin: '0 0 20px' }

const auditColumns = ['Tier', 'Components', 'Criteria']

const principles = [
  { n: '01', name: 'Platform-agnostic tokens', desc: 'Design tokens stored as Figma Variables and exported as JSON — consumable by OutSystems, React, and any future platform without a design rework.' },
  { n: '02', name: 'Composition over configuration', desc: 'Components expose a small surface area of props. Complexity lives in composition — combining atoms into molecules — rather than in a single component trying to handle 40 variants.' },
  { n: '03', name: 'Documentation as the product', desc: "Every component ships with a usage guide, accessibility notes, and a \"when not to use\" section. A component without documentation doesn't ship." },
  { n: '04', name: 'Governance as a feature', desc: 'The system has a formal RFC process for new components: proposal, review, approve/reject/defer. Any designer can propose. No one person can approve alone.' },
]

export default function CaseStudyDesignSystem() {
  return (
    <CaseStudyShell
      eyebrow="Case Study"
      title="Internal Design System"
      description="Building an internal design platform that unified structure and components across projects, cutting redundant rebuild work and accelerating delivery for both ambitious and lean engagements."
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
        { value: '15', label: 'projects audited across 3 years' },
        { value: '25%', label: 'faster delivery on flagship pilot' },
        { value: '60%', label: 'reduction in design debt on adopting projects' },
      ]}
    >
      <div style={{ ...S, paddingTop: 48 }}>
        <h2 style={H2}>The Problem</h2>
        <Body>By 2023, the design team had accumulated three years of project-specific component libraries, each built in isolation, each solving the same problems differently. A button in the workforce platform looked nothing like a button in the energy client engagement. A data table in one project shared no structure with the same pattern in another. Every new engagement started from scratch, rebuilding foundations the team had built — and rebuilt — many times before.</Body>
        <Body>The cost was invisible in any single project but enormous in aggregate: an estimated 30–40% of designer time on every engagement was spent rebuilding components that already existed somewhere in the team's Figma library history, but couldn't be safely reused because their quality, accessibility, and documentation were inconsistent.</Body>
      </div>

      <div style={S}>
        <h2 style={H2}>The Audit</h2>
        <Body>Before building anything, the team audited 15 projects across three years: cataloguing every distinct component, rating its documentation quality, accessibility compliance, and reusability across different client brand contexts. The audit produced a prioritised component backlog — 120 candidate components ranked by frequency of use, cross-project relevance, and rebuild cost.</Body>

        <div className="table-scroll" style={{ padding: 24, borderRadius: 20, border: '1px solid #EAF1FF', background: '#F8FAFF' }}>
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
      </div>

      <div style={S}>
        <h2 style={H2}>Design Principles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
      </div>

      <div style={S}>
        <h2 style={H2}>Governance</h2>
        <DarkBox label="The Governance Question">
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: '0 0 16px' }}>The hardest problem in a shared design system is not the first 100 components. It's what happens in month 8, when a designer on a fast-moving engagement needs a pattern the system doesn't have, the deadline is in three days, and the temptation to build it one-off is real.</p>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>The RFC process was designed specifically for this moment: a lightweight proposal (one page, five fields) that can be reviewed asynchronously in 24 hours, approved for one-off use with a flag to be properly componentised in the next system sprint, or promoted directly to the backlog with a two-week SLA. It's the difference between a system that calcifies and one that grows.</p>
        </DarkBox>
      </div>

      <div style={S}>
        <h2 style={H2}>Results</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {[
            { value: '120', label: 'components in production library' },
            { value: '25%', label: 'faster delivery on first adopting engagement' },
            { value: '15', label: 'projects now drawing from the shared library' },
            { value: '~0', label: 'duplicate component rebuilds since adoption' },
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
