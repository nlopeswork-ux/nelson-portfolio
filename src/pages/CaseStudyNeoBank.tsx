import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaseStudyShell, { Body, DarkBox } from '../components/CaseStudyShell'
import PrototypeCarousel, { type CarouselImage } from '../components/PrototypeCarousel'
import ChevronLeft from '../components/ChevronLeft'
import ChevronRight from '../components/ChevronRight'
import { useLanguage } from '../i18n/LanguageContext'

const S = { padding: '0 20px 64px', maxWidth: 760, margin: '0 auto' } as const
const H2 = { fontSize: 'clamp(20px,3vw,26px)' as const, fontWeight: 800, letterSpacing: '-0.02em', color: '#12141F', margin: '0 0 20px' }
const NOTE = { padding: 24, borderRadius: 20, background: '#F2F6FF', border: '1px solid #EAF1FF' } as const

const phase1Images = [
  '/case-studies/neobank/phase1/01-homepage.png',
  '/case-studies/neobank/phase1/02-accounts.png',
  '/case-studies/neobank/phase1/03-transfers-light.png',
  '/case-studies/neobank/phase1/04-transfers-dark.png',
  '/case-studies/neobank/phase1/05-analytics.png',
  '/case-studies/neobank/phase1/06-support.png',
]

function chunkCards<T>(cards: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < cards.length; i += size) chunks.push(cards.slice(i, i + size))
  return chunks
}

const copy = {
  en: {
    eyebrow: 'Case Study · Concept Exploration',
    title: 'NeoBank — Reimagining Banking Twice',
    description: 'From a research-led app redesign to an AI-native banking experience',
    meta: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Client', value: 'Retail bank engagement / internal concept' },
      { label: 'Timeline', value: '10 weeks — 6-week redesign + 4-week AI concept extension' },
      { label: 'Team', value: 'Solo, with input from 2 engineering collaborators' },
      { label: 'Tools', value: 'Figma, FigJam' },
      { label: 'Deliverable', value: '24 high-fidelity screens (Phase 1) · AI-native concept prototype (Phase 2)', span: true },
    ],
    stats: [
      { value: '~8s', label: 'Hypothesis: time to first answer (down from ~20s / 4 taps)' },
      { value: '60–70%', label: 'Hypothesis: AI containment rate for routine requests' },
      { value: '100%', label: 'Design guarantee: money-movement actions requiring explicit confirmation' },
    ],
    hook: 'The same banking product, reimagined twice: once as a better app, and once as a different kind of product — where the AI conversation is the interface, not a feature bolted onto it.',
    conceptNote: 'Concept exploration — these are pre-launch hypotheses, not measured results.',
    twoPhasesTitle: 'Two Phases of the Same Reimagine',
    phase1Label: 'Phase 1 — Rebuilding the App',
    phase1Body: 'Started as a full-channel redesign of a legacy banking app: nine competitors benchmarked, four personas defined (from a low-confidence retiree to a high-frequency optimiser), the information architecture rebuilt end to end, and 24 high-fidelity screens shipped across Light, Dark, High-Contrast and Web themes. AI was in scope — but only as one feature among many: a support chatbot, reachable from an icon, answering questions the rest of the app couldn\'t.',
    phase1Cards: [
      { title: 'Home', caption: 'Balance front and centre, four quick actions, and the latest transactions in one glance.' },
      { title: 'My Accounts', caption: 'Switch between accounts and move across Movements, Balance and Details without leaving the screen.' },
      { title: 'Transfers — Light', caption: 'Pick how to send money: between my accounts, to another person, or abroad.' },
      { title: 'Transfers — Dark', caption: 'The same flow in Dark theme — every screen was designed across Light, Dark, High-Contrast and Web.' },
      { title: 'Analytics', caption: 'Monthly spend as a bar chart, filterable by account, with a CO₂ footprint alongside each total.' },
      { title: 'Support', caption: 'Hotline, office search on a map, and live chat. In Phase 1, AI lived here — one option among many.' },
    ],
    phase2Label: 'Phase 2 — NeoBank: AI as the Interface',
    phase2Body: "Phase 2 asked a leadership-level question: if the assistant is capable enough to check a balance, move money and explain spending, why is it hidden behind an icon? NeoBank keeps the same information architecture and the same personas, but puts a conversational, agentic assistant on the home screen — while keeping the original dashboard and a task-based Banking Hub one tap away, for anyone who doesn't want to type or talk.",
    conceptInProgress: 'Concept in progress',
    conceptPlaceholder: "These AI-native screens aren't published here yet — happy to walk through the proposal in a conversation.",
    getInTouchToSee: 'Get in touch to see it',
    whatChangedTitle: 'What Changed',
    whatChangedHeaders: ['', 'App Redesign (Phase 1)', 'NeoBank (Phase 2)'],
    whatChanged: [
      { row: "AI's role", phase1: 'One feature among many (a chatbot)', phase2: 'The primary interface' },
      { row: 'Primary interaction', phase1: 'Tap through screens and forms', phase2: 'Type or speak a request' },
      { row: 'Path to an answer', phase1: '2–3 screens, several taps', phase2: 'One utterance, one thread' },
      { row: 'Support for low-confidence users', phase1: 'Chatbot as a fallback if lost', phase2: 'Guided, step-by-step conversation with confirmations' },
      { row: 'Trust & auditability', phase1: 'Standard transaction history', phase2: 'Persistent AI disclaimer + a visible action log ("Recent Chat")' },
    ],
    hypothesesTitle: 'Success Metrics — Hypotheses',
    hypothesesNote: 'NeoBank is a concept exploration, not a shipped or user-tested product — there is no real usage data behind it. What follows are the hypotheses a Lead Product Designer would set before build, to know whether the AI-first direction is actually working once it ships, not claims about measured results.',
    hypothesesHeaders: ['Metric', 'Hypothesis / Target', 'Why This Metric'],
    hypotheses: [
      { metric: 'Time-to-task (balance check + last 5 transactions)', target: '~20s / 4 taps → ~8s / 1 utterance', why: 'The assistant answers inline instead of routing Accounts → Details → Transactions.' },
      { metric: 'AI containment rate', target: '60–70% of routine requests resolved without human escalation', why: 'The same intents that used to sit behind a menu are now directly answerable.' },
      { metric: 'Weekly active use of the conversational entry point', target: '40%+ of MAU by month 3', why: 'Adoption, not capability, is the real risk in an AI-first redesign.' },
      { metric: 'Dashboard fallback rate', target: 'Kept intentionally at 10–20% of sessions, not driven to zero', why: 'A healthy sign the traditional view still serves lower-confidence users.' },
      { metric: 'Confirmation compliance on money movement', target: '100% of transfers/payments/limit changes require an explicit confirm step', why: 'A non-negotiable trust guardrail.' },
    ],
    validationTitle: "How I'd Validate This Next",
    validationSteps: [
      { n: '1', title: 'Moderated usability sessions', body: 'The same three tasks — check balance, transfer money, freeze a card — run dashboard-first vs. conversation-first, to see where each genuinely wins.' },
      { n: '2', title: 'A/B the default landing experience', body: 'Chat vs. dashboard, for a slice of existing users — watch adoption and drop-off, not just stated preference.' },
      { n: '3', title: 'Track containment rate and escalation reasons weekly post-launch', body: 'Treat every escalation reason as a probable next intent to design for.' },
    ],
    processTitle: 'Behind the Process',
    processIntro: 'One FigJam board carried the whole project — trends and competitive research, personas, the rebuilt site map, and the user flows for every core task — before any of it narrowed to the screens above.',
    processImages: [
      { alt: 'Full FigJam board — Research, Define, Ideation and Design tracks side by side', caption: 'The full board — Research (trends, personas, competitive and UI analysis), Define (problem, site map, user flows), Ideation and Design, all worked in one place.' },
      { alt: 'User-flow diagram for account creation, login and password recovery', caption: 'Entry flows — Create Account → Onboarding and Password Recovery → Login, both converging on Home before branching into Accounts.' },
      { alt: 'User-flow diagram for the balance-check and transfer flows', caption: 'Core task flows — Home → Accounts → Checking account → Account Details → Movements to reach a transaction, and the parallel Transfers path. Phase 2 collapsed the balance flow into a single question.' },
    ],
    closing: 'The two phases sit side by side on purpose. Phase One is the discipline of research-led redesign; Phase Two is what changes once you stop treating AI as a feature and start treating it as the product.',
  },
  pt: {
    eyebrow: 'Case Study · Exploração de Conceito',
    title: 'NeoBank — Reimaginar a Banca Duas Vezes',
    description: 'De um redesign de app orientado por investigação a uma experiência bancária nativa em IA',
    meta: [
      { label: 'Função', value: 'Lead Product Designer' },
      { label: 'Cliente', value: 'Colaboração com banco de retalho / conceito interno' },
      { label: 'Duração', value: '10 semanas — 6 semanas de redesign + 4 semanas de extensão do conceito de IA' },
      { label: 'Equipa', value: 'Individual, com contributo de 2 colaboradores de engenharia' },
      { label: 'Ferramentas', value: 'Figma, FigJam' },
      { label: 'Entregável', value: '24 ecrãs de alta fidelidade (Fase 1) · protótipo de conceito nativo em IA (Fase 2)', span: true },
    ],
    stats: [
      { value: '~8s', label: 'Hipótese: tempo até à primeira resposta (de ~20s / 4 toques)' },
      { value: '60–70%', label: 'Hipótese: taxa de resolução por IA para pedidos de rotina' },
      { value: '100%', label: 'Garantia de design: ações de movimento de dinheiro exigem confirmação explícita' },
    ],
    hook: 'O mesmo produto bancário, reimaginado duas vezes: uma como uma app melhor, e outra como um tipo de produto diferente — onde a conversa com a IA é a interface, não uma funcionalidade adicionada por cima.',
    conceptNote: 'Exploração de conceito — estas são hipóteses pré-lançamento, não resultados medidos.',
    twoPhasesTitle: 'Duas Fases da Mesma Reimaginação',
    phase1Label: 'Fase 1 — Reconstruir a App',
    phase1Body: 'Começou como um redesign full-channel de uma app bancária legada: nove concorrentes avaliados, quatro personas definidas (de um reformado com pouca confiança digital a um otimizador de alta frequência), a arquitetura de informação reconstruída de ponta a ponta, e 24 ecrãs de alta fidelidade entregues nos temas Claro, Escuro, Alto Contraste e Web. A IA estava no âmbito — mas apenas como mais uma funcionalidade entre várias: um chatbot de suporte, acessível a partir de um ícone, a responder a perguntas que o resto da app não conseguia.',
    phase1Cards: [
      { title: 'Home', caption: 'Saldo em destaque, quatro ações rápidas, e as transações mais recentes num só relance.' },
      { title: 'My Accounts', caption: 'Alternar entre contas e navegar entre Movimentos, Saldo e Detalhes sem sair do ecrã.' },
      { title: 'Transfers — Claro', caption: 'Escolher como enviar dinheiro: entre as minhas contas, para outra pessoa, ou para o estrangeiro.' },
      { title: 'Transfers — Escuro', caption: 'O mesmo fluxo em tema Escuro — todos os ecrãs foram desenhados em Claro, Escuro, Alto Contraste e Web.' },
      { title: 'Analytics', caption: 'Despesa mensal num gráfico de barras, filtrável por conta, com a pegada de CO₂ ao lado de cada total.' },
      { title: 'Support', caption: 'Linha de apoio, pesquisa de balcões num mapa, e chat em direto. Na Fase 1, a IA vivia aqui — uma opção entre várias.' },
    ],
    phase2Label: 'Fase 2 — NeoBank: a IA como Interface',
    phase2Body: 'A Fase 2 colocou uma pergunta ao nível de liderança: se o assistente é capaz de consultar um saldo, mover dinheiro e explicar despesas, porque está escondido atrás de um ícone? A NeoBank mantém a mesma arquitetura de informação e as mesmas personas, mas coloca um assistente conversacional e agêntico no ecrã principal — mantendo o dashboard original e um Banking Hub orientado a tarefas a um toque de distância, para quem não quer escrever ou falar.',
    conceptInProgress: 'Conceito em curso',
    conceptPlaceholder: 'Estes ecrãs nativos em IA ainda não estão publicados aqui — com todo o gosto percorro a proposta numa conversa.',
    getInTouchToSee: 'Contacta-me para ver',
    whatChangedTitle: 'O Que Mudou',
    whatChangedHeaders: ['', 'Redesign da App (Fase 1)', 'NeoBank (Fase 2)'],
    whatChanged: [
      { row: 'Papel da IA', phase1: 'Uma funcionalidade entre várias (um chatbot)', phase2: 'A interface principal' },
      { row: 'Interação principal', phase1: 'Navegar por ecrãs e formulários', phase2: 'Escrever ou dizer um pedido' },
      { row: 'Caminho até à resposta', phase1: '2–3 ecrãs, vários toques', phase2: 'Uma frase, uma conversa' },
      { row: 'Apoio a utilizadores com menos confiança', phase1: 'Chatbot como alternativa se perdidos', phase2: 'Conversa guiada, passo a passo, com confirmações' },
      { row: 'Confiança e auditabilidade', phase1: 'Histórico de transações padrão', phase2: 'Aviso de IA persistente + registo de ações visível ("Recent Chat")' },
    ],
    hypothesesTitle: 'Métricas de Sucesso — Hipóteses',
    hypothesesNote: 'A NeoBank é uma exploração de conceito, não um produto lançado ou testado com utilizadores — não há dados de uso reais por trás dela. O que se segue são as hipóteses que um Lead Product Designer definiria antes da construção, para saber se a direção AI-first está de facto a funcionar assim que for lançada — não afirmações sobre resultados medidos.',
    hypothesesHeaders: ['Métrica', 'Hipótese / Objetivo', 'Porquê Esta Métrica'],
    hypotheses: [
      { metric: 'Tempo até à tarefa (consultar saldo + últimas 5 transações)', target: '~20s / 4 toques → ~8s / 1 frase', why: 'O assistente responde diretamente em vez de encaminhar por Contas → Detalhes → Transações.' },
      { metric: 'Taxa de resolução por IA', target: '60–70% dos pedidos de rotina resolvidos sem escalar para humano', why: 'As mesmas intenções que antes estavam atrás de um menu são agora respondidas diretamente.' },
      { metric: 'Uso ativo semanal do ponto de entrada conversacional', target: 'Mais de 40% do MAU até ao mês 3', why: 'A adoção, não a capacidade, é o risco real num redesign AI-first.' },
      { metric: 'Taxa de recurso ao dashboard', target: 'Mantida propositadamente em 10–20% das sessões, não reduzida a zero', why: 'Um sinal saudável de que a vista tradicional continua a servir utilizadores com menos confiança.' },
      { metric: 'Conformidade de confirmação em movimentos de dinheiro', target: '100% das transferências/pagamentos/alterações de limite exigem um passo de confirmação explícito', why: 'Uma salvaguarda de confiança não negociável.' },
    ],
    validationTitle: 'Como Validaria Isto a Seguir',
    validationSteps: [
      { n: '1', title: 'Sessões de usabilidade moderadas', body: 'As mesmas três tarefas — consultar saldo, transferir dinheiro, bloquear um cartão — testadas dashboard-first vs. conversation-first, para ver onde cada uma vence genuinamente.' },
      { n: '2', title: 'A/B à experiência de entrada por omissão', body: 'Chat vs. dashboard, numa fatia de utilizadores existentes — observar adoção e abandono, não apenas preferência declarada.' },
      { n: '3', title: 'Acompanhar semanalmente a taxa de resolução e os motivos de escalada após o lançamento', body: 'Tratar cada motivo de escalada como uma provável próxima intenção a desenhar.' },
    ],
    processTitle: 'Por Trás do Processo',
    processIntro: 'Um único board em FigJam carregou todo o projeto — tendências e investigação competitiva, personas, o mapa do site reconstruído, e os fluxos de utilizador para cada tarefa principal — antes de tudo isso convergir nos ecrãs acima.',
    processImages: [
      { alt: 'Board FigJam completo — pistas de Research, Define, Ideation e Design lado a lado', caption: 'O board completo — Research (tendências, personas, análise competitiva e de UI), Define (problema, mapa do site, fluxos de utilizador), Ideation e Design, tudo trabalhado no mesmo sítio.' },
      { alt: 'Diagrama de fluxo de utilizador para criação de conta, login e recuperação de password', caption: 'Fluxos de entrada — Criar Conta → Onboarding e Recuperação de Password → Login, ambos a convergir em Home antes de ramificar para Contas.' },
      { alt: 'Diagrama de fluxo de utilizador para os fluxos de consulta de saldo e transferência', caption: 'Fluxos de tarefas principais — Home → Contas → Conta à ordem → Detalhes da Conta → Movimentos até chegar a uma transação, e o caminho paralelo de Transferências. A Fase 2 reduziu o fluxo de saldo a uma única pergunta.' },
    ],
    closing: 'As duas fases estão lado a lado de propósito. A Fase Um é a disciplina do redesign orientado por investigação; a Fase Dois é o que muda quando se deixa de tratar a IA como uma funcionalidade e se passa a tratá-la como o produto.',
  },
}

export default function CaseStudyNeoBank() {
  const { lang } = useLanguage()
  const t = copy[lang]
  const [galleryIdx, setGalleryIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 640)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const handler = (e: MediaQueryListEvent) => { setIsMobile(e.matches); setGalleryIdx(0) }
    mq.addEventListener('change', handler)
    setIsMobile(mq.matches)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const phase1Cards = t.phase1Cards.map((c, i) => ({ ...c, image: phase1Images[i] }))
  const processImages: CarouselImage[] = t.processImages.map((p, i) => ({ ...p, src: ['/case-studies/neobank/process/01-full-board.jpg', '/case-studies/neobank/process/02-login-flows.jpg', '/case-studies/neobank/process/03-balance-flow.jpg'][i] }))
  const gallerySlides = chunkCards(phase1Cards, isMobile ? 1 : 3)

  return (
    <CaseStudyShell
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      meta={t.meta}
      stats={t.stats}
    >
      {/* HOOK */}
      <div style={{ ...S, paddingTop: 48 }}>
        <Body>{t.hook}</Body>
      </div>

      <div style={S}>
        <p style={{ fontSize: 12, lineHeight: 1.6, color: '#8A8FA3', textAlign: 'center', margin: 0 }}>{t.conceptNote}</p>
      </div>

      {/* TWO PHASES */}
      <div style={S}>
        <h2 style={H2}>{t.twoPhasesTitle}</h2>

        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', margin: '0 0 6px' }}>{t.phase1Label}</div>
        <Body>{t.phase1Body}</Body>
      </div>

      <div style={S}>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ display: 'flex', transform: `translateX(-${galleryIdx * 100}%)`, transition: 'transform 420ms ease-out' }}>
            {gallerySlides.map((slide, si) => (
              <div key={si} className={isMobile ? undefined : 'carousel-3'} style={{ flex: '0 0 100%' }}>
                {slide.map(({ title, caption, image }) => (
                  <div key={title} style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden', background: '#FFFFFF' }}>
                    <img src={image} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    <div style={{ padding: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#12141F', marginBottom: 4 }}>{title}</div>
                      <p style={{ fontSize: 13, lineHeight: 1.6, color: '#5A5F73', margin: 0 }}>{caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          <button onClick={() => setGalleryIdx(i => (i - 1 + gallerySlides.length) % gallerySlides.length)} style={{ cursor: 'pointer', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F2F6FF', color: '#3D63E0', border: 'none' }}><ChevronLeft size={16} className="" /></button>
          <div style={{ display: 'flex', gap: 8 }}>
            {gallerySlides.map((_, i) => (
              <button key={i} onClick={() => setGalleryIdx(i)} style={{ cursor: 'pointer', width: 8, height: 8, borderRadius: '50%', background: i === galleryIdx ? '#002FA7' : '#DCE8FF', border: 'none', padding: 0 }} />
            ))}
          </div>
          <button onClick={() => setGalleryIdx(i => (i + 1) % gallerySlides.length)} style={{ cursor: 'pointer', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F2F6FF', color: '#3D63E0', border: 'none' }}><ChevronRight size={16} className="" /></button>
        </div>
      </div>

      <div style={S}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', margin: '0 0 6px' }}>{t.phase2Label}</div>
        <Body>{t.phase2Body}</Body>
      </div>

      <div style={S}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{
            width: 'min(280px, 68vw)', maxWidth: 280, aspectRatio: '390 / 844',
            borderRadius: 32, border: '8px solid #12141F', overflow: 'hidden',
            background: 'repeating-linear-gradient(135deg, #EEF1F8, #EEF1F8 10px, #E4E8F4 10px, #E4E8F4 20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 8, padding: 24, textAlign: 'center',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#8A8FA3', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.conceptInProgress}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#5A5F73', lineHeight: 1.5 }}>{t.conceptPlaceholder}</div>
          </div>
          <Link to="/contact" className="secondary-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', fontSize: 13, fontWeight: 600, color: '#002FA7', textDecoration: 'none' }}>
            {t.getInTouchToSee}<ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* WHAT CHANGED */}
      <div style={S}>
        <h2 style={H2}>{t.whatChangedTitle}</h2>
        <div className="table-scroll" style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #EAF1FF' }}>
                {t.whatChangedHeaders.map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', background: '#F8FAFF' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.whatChanged.map((r, i) => (
                <tr key={r.row} style={{ borderBottom: i < t.whatChanged.length - 1 ? '1px solid #F2F6FF' : undefined }}>
                  <td data-label="" style={{ padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 13 }}>{r.row}</td>
                  <td data-label={t.whatChangedHeaders[1]} style={{ padding: '14px 16px', color: '#5A5F73' }}>{r.phase1}</td>
                  <td data-label={t.whatChangedHeaders[2]} style={{ padding: '14px 16px', color: '#12141F' }}>{r.phase2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SUCCESS METRICS */}
      <div style={S}>
        <h2 style={H2}>{t.hypothesesTitle}</h2>
        <div style={{ ...NOTE, marginBottom: 24 }}>
          <Body>{t.hypothesesNote}</Body>
        </div>

        <div className="table-scroll" style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #EAF1FF' }}>
                {t.hypothesesHeaders.map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: '#001A5C', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', background: '#F8FAFF' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.hypotheses.map((h, i) => (
                <tr key={h.metric} style={{ borderBottom: i < t.hypotheses.length - 1 ? '1px solid #F2F6FF' : undefined }}>
                  <td data-label={t.hypothesesHeaders[0]} style={{ padding: '14px 16px', color: '#12141F', fontWeight: 600 }}>{h.metric}</td>
                  <td data-label={t.hypothesesHeaders[1]} style={{ padding: '14px 16px', color: '#5A5F73' }}>{h.target}</td>
                  <td data-label={t.hypothesesHeaders[2]} style={{ padding: '14px 16px', color: '#5A5F73' }}>{h.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VALIDATION */}
      <div style={S}>
        <h2 style={H2}>{t.validationTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {t.validationSteps.map(({ n, title, body }) => (
            <div key={n}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F', marginBottom: 6 }}>{n}. {title}</div>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BEHIND THE PROCESS */}
      <div style={S}>
        <h2 style={H2}>{t.processTitle}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 28px' }}>{t.processIntro}</p>
        <PrototypeCarousel images={processImages} aspectRatio="wide" />
      </div>

      {/* CLOSING */}
      <div style={S}>
        <DarkBox>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>{t.closing}</p>
        </DarkBox>
      </div>
    </CaseStudyShell>
  )
}
