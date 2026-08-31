import CaseStudyShell, { Body, DarkBox } from '../components/CaseStudyShell'
import PrototypeCarousel, { type CarouselImage } from '../components/PrototypeCarousel'

const S = { padding: '0 20px 64px', maxWidth: 760, margin: '0 auto' } as const
const H2 = { fontSize: 'clamp(20px,3vw,26px)' as const, fontWeight: 800, letterSpacing: '-0.02em', color: '#12141F', margin: '0 0 20px' }
const NOTE = { padding: 24, borderRadius: 20, background: '#F2F6FF', border: '1px solid #EAF1FF' } as const

// Placeholder image slots — drop real exports into these exact paths (public/case-studies/neobank/…)
// and the carousels will pick them up automatically; no layout code needs to change.
const phase1Images: CarouselImage[] = [
  { src: '/case-studies/neobank/phase1/01-homepage.png', alt: 'App redesign — home screen with balance, quick actions and recent transactions', caption: 'Home — balance front and centre, four quick actions, and the latest transactions in one glance.' },
  { src: '/case-studies/neobank/phase1/02-accounts.png', alt: 'App redesign — My Accounts with Movements, Balance and Details tabs', caption: 'My Accounts — switch between accounts and move between Movements, Balance and Details without leaving the screen.' },
  { src: '/case-studies/neobank/phase1/03-transfers-light.png', alt: 'App redesign — Transfers screen in Light theme', caption: 'Transfers — pick how to send money: between my accounts, to another person, or abroad. Light theme.' },
  { src: '/case-studies/neobank/phase1/04-transfers-dark.png', alt: 'App redesign — Transfers screen in Dark theme', caption: 'The same Transfers flow in Dark theme — every screen was designed across Light, Dark, High-Contrast and Web.' },
  { src: '/case-studies/neobank/phase1/05-analytics.png', alt: 'App redesign — Analytics with a spending bar chart and CO2 footprint', caption: 'Analytics — monthly spend as a bar chart, filterable by account, with a CO₂ footprint alongside each total.' },
  { src: '/case-studies/neobank/phase1/06-support.png', alt: 'App redesign — Support screen with hotline, office search and live chat', caption: 'Support — the 24/7 hotline, office search on a map, and live chat. In Phase 1, AI lived here: one option among many.' },
]

const phase2Images: CarouselImage[] = [
  { src: '/case-studies/neobank/phase2/01-landing-greeting.png', alt: 'NeoBank AI assistant — landing greeting screen', caption: 'Landing screen — the assistant greets and offers to help.' },
  { src: '/case-studies/neobank/phase2/02-typing-state.png', alt: 'NeoBank AI assistant — typing / thinking state', caption: 'Typing state while the assistant composes a response.' },
  { src: '/case-studies/neobank/phase2/03-balance-check-flow-1.png', alt: 'NeoBank AI assistant — balance check, turn one', caption: 'Balance-check conversation — turn one.' },
  { src: '/case-studies/neobank/phase2/04-balance-check-flow-2.png', alt: 'NeoBank AI assistant — balance check, turn two', caption: 'Balance-check conversation — turn two, drilling into transactions.' },
  { src: '/case-studies/neobank/phase2/05-menu-recent-chat.png', alt: 'NeoBank AI assistant — menu with Recent Chat history', caption: 'Menu with Recent Chat — a visible, revisitable action log.' },
  { src: '/case-studies/neobank/phase2/06-banking-hub-fallback.png', alt: 'NeoBank — Banking Hub dashboard fallback', caption: 'Banking Hub — the traditional dashboard, one tap away.' },
]

const processImages: CarouselImage[] = [
  { src: '/case-studies/neobank/process/01-full-board.jpg', alt: 'Full FigJam board — Research, Define, Ideation and Design tracks side by side', caption: 'The full board — Research (trends, personas, competitive and UI analysis), Define (problem, site map, user flows), Ideation and Design, all worked in one place.' },
  { src: '/case-studies/neobank/process/02-login-flows.jpg', alt: 'User-flow diagram for account creation, login and password recovery', caption: 'Entry flows — Create Account → Onboarding and Password Recovery → Login, both converging on Home before branching into Accounts.' },
  { src: '/case-studies/neobank/process/03-balance-flow.jpg', alt: 'User-flow diagram for checking a balance and its transactions', caption: 'Balance-check flow — Home → Accounts → Checking account → Account Details → Movements → scroll the transaction list. Phase 2 collapsed this into a single question.' },
]

const whatChanged = [
  { row: "AI's role", phase1: 'One feature among many (a chatbot)', phase2: 'The primary interface' },
  { row: 'Primary interaction', phase1: 'Tap through screens and forms', phase2: 'Type or speak a request' },
  { row: 'Path to an answer', phase1: '2–3 screens, several taps', phase2: 'One utterance, one thread' },
  { row: 'Support for low-confidence users', phase1: 'Chatbot as a fallback if lost', phase2: 'Guided, step-by-step conversation with confirmations' },
  { row: 'Trust & auditability', phase1: 'Standard transaction history', phase2: 'Persistent AI disclaimer + a visible action log ("Recent Chat")' },
]

const hypotheses = [
  { metric: 'Time-to-task (balance check + last 5 transactions)', target: '~20s / 4 taps → ~8s / 1 utterance', why: 'The assistant answers inline instead of routing Accounts → Details → Transactions.' },
  { metric: 'AI containment rate', target: '60–70% of routine requests resolved without human escalation', why: 'The same intents that used to sit behind a menu are now directly answerable.' },
  { metric: 'Weekly active use of the conversational entry point', target: '40%+ of MAU by month 3', why: 'Adoption, not capability, is the real risk in an AI-first redesign.' },
  { metric: 'Dashboard fallback rate', target: 'Kept intentionally at 10–20% of sessions, not driven to zero', why: 'A healthy sign the traditional view still serves lower-confidence users.' },
  { metric: 'Confirmation compliance on money movement', target: '100% of transfers/payments/limit changes require an explicit confirm step', why: 'A non-negotiable trust guardrail.' },
]

const validationSteps = [
  { n: '1', title: 'Moderated usability sessions', body: 'The same three tasks — check balance, transfer money, freeze a card — run dashboard-first vs. conversation-first, to see where each genuinely wins.' },
  { n: '2', title: 'A/B the default landing experience', body: 'Chat vs. dashboard, for a slice of existing users — watch adoption and drop-off, not just stated preference.' },
  { n: '3', title: 'Track containment rate and escalation reasons weekly post-launch', body: 'Treat every escalation reason as a probable next intent to design for.' },
]

export default function CaseStudyNeoBank() {
  return (
    <CaseStudyShell
      eyebrow="Case Study · Concept Exploration"
      title="NeoBank — Reimagining Banking Twice"
      description="From a research-led app redesign to an AI-native banking experience"
      meta={[
        { label: 'Role', value: 'Lead Product Designer' },
        { label: 'Client', value: 'Retail bank engagement / internal concept' },
        { label: 'Timeline', value: '10 weeks — 6-week redesign + 4-week AI concept extension' },
        { label: 'Team', value: 'Solo, with input from 2 engineering collaborators' },
        { label: 'Tools', value: 'Figma, FigJam' },
        { label: 'Deliverable', value: '24 high-fidelity screens (Phase 1) · AI-native concept prototype (Phase 2)', span: true },
      ]}
      stats={[
        { value: '~8s', label: 'Hypothesis: time to first answer (down from ~20s / 4 taps)' },
        { value: '60–70%', label: 'Hypothesis: AI containment rate for routine requests' },
        { value: '100%', label: 'Design guarantee: money-movement actions requiring explicit confirmation' },
      ]}
    >
      {/* HOOK */}
      <div style={{ ...S, paddingTop: 48 }}>
        <Body>The same banking product, reimagined twice: once as a better app, and once as a different kind of product — where the AI conversation is the interface, not a feature bolted onto it.</Body>
      </div>

      <div style={S}>
        <p style={{ fontSize: 12, lineHeight: 1.6, color: '#8A8FA3', textAlign: 'center', margin: 0 }}>Concept exploration — these are pre-launch hypotheses, not measured results.</p>
      </div>

      {/* TWO PHASES */}
      <div style={S}>
        <h2 style={H2}>Two Phases of the Same Reimagine</h2>

        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', margin: '0 0 6px' }}>Phase 1 — Rebuilding the App</div>
        <Body>Started as a full-channel redesign of a legacy banking app: nine competitors benchmarked, four personas defined (from a low-confidence retiree to a high-frequency optimiser), the information architecture rebuilt end to end, and 24 high-fidelity screens shipped across Light, Dark, High-Contrast and Web themes. AI was in scope — but only as one feature among many: a support chatbot, reachable from an icon, answering questions the rest of the app couldn't.</Body>
      </div>

      <div style={S}>
        <PrototypeCarousel images={phase1Images} aspectRatio="screen" />
      </div>

      <div style={S}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', margin: '0 0 6px' }}>Phase 2 — NeoBank: AI as the Interface</div>
        <Body>Phase 2 asked a leadership-level question: if the assistant is capable enough to check a balance, move money and explain spending, why is it hidden behind an icon? NeoBank keeps the same information architecture and the same personas, but puts a conversational, agentic assistant on the home screen — while keeping the original dashboard and a task-based Banking Hub one tap away, for anyone who doesn't want to type or talk.</Body>
      </div>

      <div style={S}>
        <PrototypeCarousel images={phase2Images} aspectRatio="mobile" />
      </div>

      {/* WHAT CHANGED */}
      <div style={S}>
        <h2 style={H2}>What Changed</h2>
        <div className="table-scroll" style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #EAF1FF' }}>
                {['', 'App Redesign (Phase 1)', 'NeoBank (Phase 2)'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', background: '#F8FAFF' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {whatChanged.map((r, i) => (
                <tr key={r.row} style={{ borderBottom: i < whatChanged.length - 1 ? '1px solid #F2F6FF' : undefined }}>
                  <td data-label="" style={{ padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 13 }}>{r.row}</td>
                  <td data-label="App Redesign (Phase 1)" style={{ padding: '14px 16px', color: '#5A5F73' }}>{r.phase1}</td>
                  <td data-label="NeoBank (Phase 2)" style={{ padding: '14px 16px', color: '#12141F' }}>{r.phase2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SUCCESS METRICS */}
      <div style={S}>
        <h2 style={H2}>Success Metrics — Hypotheses</h2>
        <div style={{ ...NOTE, marginBottom: 24 }}>
          <Body>NeoBank is a concept exploration, not a shipped or user-tested product — there is no real usage data behind it. What follows are the hypotheses a Lead Product Designer would set before build, to know whether the AI-first direction is actually working once it ships, not claims about measured results.</Body>
        </div>

        <div className="table-scroll" style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #EAF1FF' }}>
                {['Metric', 'Hypothesis / Target', 'Why This Metric'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', background: '#F8FAFF' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hypotheses.map((h, i) => (
                <tr key={h.metric} style={{ borderBottom: i < hypotheses.length - 1 ? '1px solid #F2F6FF' : undefined }}>
                  <td data-label="Metric" style={{ padding: '14px 16px', color: '#12141F', fontWeight: 600 }}>{h.metric}</td>
                  <td data-label="Hypothesis / Target" style={{ padding: '14px 16px', color: '#5A5F73' }}>{h.target}</td>
                  <td data-label="Why This Metric" style={{ padding: '14px 16px', color: '#5A5F73' }}>{h.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VALIDATION */}
      <div style={S}>
        <h2 style={H2}>How I'd Validate This Next</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {validationSteps.map(({ n, title, body }) => (
            <div key={n}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 6 }}>{n}. {title}</div>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BEHIND THE PROCESS */}
      <div style={S}>
        <h2 style={H2}>Behind the Process</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 28px' }}>One FigJam board carried the whole project — trends and competitive research, personas, the rebuilt site map, and the user flows for every core task — before any of it narrowed to the screens above.</p>
        <PrototypeCarousel images={processImages} aspectRatio="wide" />
      </div>

      {/* CLOSING */}
      <div style={S}>
        <DarkBox>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>The two phases sit side by side on purpose. Phase One is the discipline of research-led redesign; Phase Two is what changes once you stop treating AI as a feature and start treating it as the product.</p>
        </DarkBox>
      </div>
    </CaseStudyShell>
  )
}
