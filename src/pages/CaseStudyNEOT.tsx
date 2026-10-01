import { useState, useEffect } from 'react'
import CaseStudyShell, { Body, DarkBox } from '../components/CaseStudyShell'
import ChevronLeft from '../components/ChevronLeft'
import ChevronRight from '../components/ChevronRight'
import { useLanguage } from '../i18n/LanguageContext'
import img1 from '../imports/1RegistrationCreate_Account.png'
import img2 from '../imports/2Home__Stippend__-_V1.png'
import img3 from '../imports/3Payment_Request_-_Upload_documents.png'
import img4 from '../imports/4My_Support.png'
import img5 from '../imports/5Chatbot.png'
import img6 from '../imports/6RegistrationCreate_Account.png'

const S = { padding: '0 20px 64px', maxWidth: 760, margin: '0 auto' } as const
const H2 = { fontSize: 'clamp(20px,3vw,26px)' as const, fontWeight: 800, letterSpacing: '-0.02em', color: '#12141F', margin: '0 0 20px' }

const galleryImages = [img1, img2, img3, img4, img5, img6]

function chunkCards<T>(cards: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < cards.length; i += size) chunks.push(cards.slice(i, i + size))
  return chunks
}

const copy = {
  en: {
    eyebrow: 'Case Study',
    title: 'NEOT Mobile App',
    description: 'Empowering citizens through a unified employment and career support experience — a mobile-first platform bringing employment services, training programmes, financial support and career guidance into a single digital experience.',
    meta: [
      { label: 'Role', value: 'Lead UX/UI Designer' },
      { label: 'Client', value: 'National employment fund (Government / Employment Services)' },
      { label: 'Platform', value: 'Mobile App (iOS & Android)' },
      { label: 'Languages', value: 'English & Arabic (RTL), light & dark mode' },
      { label: 'Modules', value: '8 core product areas' },
      { label: 'Tools', value: 'Figma · FigJam · Jira · Confluence · Miro · Adobe Creative Suite' },
    ],
    stats: [
      { value: '1,000+', label: 'design screens' },
      { value: '8', label: 'major modules' },
      { value: '20+', label: 'design sections' },
      { value: '270+', label: 'usability testing screens' },
    ],
    overviewTitle: 'Overview',
    overview: [
      'The app was designed as a comprehensive digital platform supporting citizens throughout their employment journey, for a national employment fund. It centralises access to government-funded employment programmes, training opportunities, salary subsidies, stipends, payment requests and career development services.',
      'Rather than navigating multiple disconnected services, users can manage every stage of their journey — from registration and programme applications to payments, self-monitoring and career coaching — within one intuitive mobile experience.',
      'The platform supports both English and Arabic (RTL), light and dark modes, biometric authentication and integrates with national identity verification services.',
    ],
    roleTitle: 'My Role — Lead UX/UI Designer',
    roleBody: 'Responsible for the end-to-end product design across multiple functional areas, collaborating with Product Owners, Business Analysts and Developers to create a scalable and consistent mobile experience.',
    responsibilitiesLabel: 'Responsibilities: ',
    responsibilities: 'Product Design · UX Design · UI Design · Information Architecture · User Flows · Mobile Design · Interaction Design · Design System · Prototyping · Design QA · Usability Testing · Cross-functional Collaboration',
    challengeTitle: 'The Challenge',
    challengeBody: 'The project combined multiple government services into a single application while maintaining clarity, accessibility and consistency across hundreds of user journeys. Key challenges included designing for diverse user needs, supporting complex application workflows, managing financial programmes with different business rules, ensuring accessibility across English and Arabic (RTL), maintaining consistency across more than 1,000 design screens, supporting multiple authentication methods including biometric verification, and creating scalable UI patterns for continuous product evolution.',
    briefLabel: 'The Brief',
    brief: [
      "The companion web platform (see separate case study) had digitised the Fund's core services for desktop. The 2025 Omnichannel phase added a new requirement: a native mobile companion app — NEOT — bringing the same services to citizens on iOS and Android, with full Arabic RTL support, dark mode, and push notifications.",
    ],
    briefClosing: 'NEOT was not a simplified mobile version of the web platform. It was a citizen-first redesign from scratch: what does a citizen actually need to access from their phone, in what context, in what language, and with what level of connectivity? Those questions drove 18 weeks of discovery and definition before a single production screen was committed.',
    galleryTitle: 'Prototype Gallery',
    galleryIntro: 'Six views from the working prototype, each tied to a specific module.',
    galleryCards: [
      { title: 'Onboarding — Biometric verification', caption: 'Registration flow with biometric authentication and national identity verification.' },
      { title: 'Home — Personalised dashboard', caption: 'Main dashboard with active support widget and programme recommendations.' },
      { title: 'My Support — Payment claim workflow', caption: 'Document upload, IBAN selection and confirmation flow.' },
      { title: 'My Support — Programme overview', caption: 'Central hub managing active programmes and financial support.' },
      { title: 'Career Coach — AI chatbot', caption: 'Conversational interface for career guidance.' },
      { title: 'Light vs. dark mode + EN/AR (RTL)', caption: 'Side-by-side comparison across languages and themes.' },
    ],
    modulesTitle: 'Solution Highlights — 8 Core Product Areas',
    modules: [
      { n: '01', name: 'Onboarding', desc: 'Secure onboarding supporting account creation, biometric verification, national identity authentication, multilingual onboarding and guest access.' },
      { n: '02', name: 'Home', desc: 'Personalised dashboard with quick access to active support programmes, recommended opportunities, payment requests and personalised guidance.' },
      { n: '03', name: 'My Support', desc: 'Central hub to manage every active programme, monitor applications, submit payment claims and review financial support.' },
      { n: '04', name: 'Explore', desc: 'Intelligent catalogue for discovering training programmes, employment initiatives and funding opportunities through advanced search and filtering.' },
      { n: '05', name: 'Profile & Settings', desc: 'Complete profile management including personal information, contact details, IBAN management, document library, device permissions and notifications.' },
      { n: '06', name: 'News & Events', desc: 'Content hub showcasing news, success stories, educational events and career opportunities.' },
      { n: '07', name: 'Self Monitoring', desc: 'Periodic questionnaires and document submissions to maintain eligibility throughout ongoing programmes.' },
      { n: '08', name: 'Career Coach', desc: 'AI-assisted conversational interface helping users navigate programmes and receive career guidance.' },
    ],
    rtlTitle: 'RTL & Bidirectional Design',
    rtlBody: 'Arabic RTL was not an afterthought or a mirror-and-translate pass at the end of the project. From the first Figma frame, every component was built with both LTR and RTL as first-class outputs. Variables and auto-layout constraints were structured so that switching language in the Figma prototype would flip the entire layout without manual repositioning of a single element.',
    screenChallengeLabel: 'The 1,000-Screen Challenge',
    screenChallenge: [
      'Over 1,000 design screens across 8 modules, 2 languages, 2 themes, and 4 device breakpoints creates a combinatorial design surface that is genuinely difficult to manage without a system. The NEOT component library — an extension of the companion platform\'s Design System — was the answer.',
      'Every component carried 8 variants by default: LTR light, LTR dark, RTL light, RTL dark — and the same four states for loading/skeleton. A screen count of 1,000+ sounds large. With the component system, the actual design decisions were far fewer: the component library did the multiplication.',
    ],
    scaleTitle: 'Scale',
    scaleBody: '1,000+ design screens · 8 major functional modules · 20+ design sections · 270+ usability testing screens · comprehensive QA review process · Design QA comparing implementation against Figma · store publication assets · continuous UI improvement cycles.',
    principlesTitle: 'Design Principles',
    principlesBody: 'Reduce complexity · guide users through progressive workflows · design for trust and transparency · prioritise accessibility from the beginning · build reusable patterns that scale · support multilingual experiences without compromising usability.',
    accessibilityTitle: 'Accessibility',
    accessibilityBody: 'NEOT was designed to WCAG 2.1 AA across both themes and both languages. Every colour pair was validated against a 4.5:1 minimum contrast ratio. Every interactive element met the 44×44pt minimum touch target. Focus order was manually verified for every screen in both LTR and RTL — a detail that automated tools cannot catch reliably for bidirectional layouts.',
    accessibilityStats: [
      { value: 'WCAG 2.1 AA', label: 'accessibility standard met' },
      { value: '4.5:1+', label: 'minimum contrast ratio across all themes' },
      { value: '44×44pt', label: 'minimum touch target on every interactive element' },
      { value: '100%', label: 'of screens verified in both LTR and RTL' },
    ],
    impactTitle: 'Impact',
    impactBody: "The project established a scalable mobile experience capable of supporting thousands of citizens interacting with the Fund's employment ecosystem. By consolidating multiple government services into a unified product, the platform simplified access to employment programmes, financial support and career development while creating a consistent digital experience across every touchpoint. The work also resulted in a robust mobile design system, reusable interaction patterns and a structured design process supporting future product evolution.",
    glanceTitle: 'Project at a Glance',
    glanceRows: [
      ['Role', 'Lead UX/UI Designer'],
      ['Industry', 'Government / Employment Services'],
      ['Client', 'National employment fund'],
      ['Platform', 'Mobile App (iOS & Android)'],
      ['Languages', 'English & Arabic (RTL)'],
      ['Modules', '8'],
      ['Screens', '1,000+'],
      ['Design System', 'Yes — extension of the web platform DS'],
      ['Design QA', 'Yes'],
      ['Usability Testing', 'Yes — 270+ screens tested'],
    ],
  },
  pt: {
    eyebrow: 'Case Study',
    title: 'NEOT Mobile App',
    description: 'Capacitar cidadãos através de uma experiência unificada de emprego e apoio à carreira — uma plataforma mobile-first que reúne serviços de emprego, programas de formação, apoio financeiro e orientação de carreira numa única experiência digital.',
    meta: [
      { label: 'Função', value: 'Lead UX/UI Designer' },
      { label: 'Cliente', value: 'Fundo nacional de emprego (Setor Público / Serviços de Emprego)' },
      { label: 'Plataforma', value: 'App Mobile (iOS e Android)' },
      { label: 'Idiomas', value: 'Inglês e Árabe (RTL), modo claro e escuro' },
      { label: 'Módulos', value: '8 áreas de produto principais' },
      { label: 'Ferramentas', value: 'Figma · FigJam · Jira · Confluence · Miro · Adobe Creative Suite' },
    ],
    stats: [
      { value: '1,000+', label: 'ecrãs de design' },
      { value: '8', label: 'módulos principais' },
      { value: '20+', label: 'secções de design' },
      { value: '270+', label: 'ecrãs testados em usabilidade' },
    ],
    overviewTitle: 'Visão Geral',
    overview: [
      'A app foi desenhada como uma plataforma digital completa para apoiar cidadãos ao longo de toda a sua jornada de emprego, para um fundo nacional de emprego. Centraliza o acesso a programas de emprego financiados pelo Estado, oportunidades de formação, subsídios salariais, bolsas, pedidos de pagamento e serviços de desenvolvimento de carreira.',
      'Em vez de navegar por vários serviços desligados entre si, os utilizadores conseguem gerir cada etapa da sua jornada — desde o registo e candidaturas a programas até pagamentos, auto-monitorização e coaching de carreira — numa única experiência mobile intuitiva.',
      'A plataforma suporta Inglês e Árabe (RTL), modo claro e escuro, autenticação biométrica e integra com serviços nacionais de verificação de identidade.',
    ],
    roleTitle: 'A Minha Função — Lead UX/UI Designer',
    roleBody: 'Responsável pelo design de produto de ponta a ponta em várias áreas funcionais, em colaboração com Product Owners, Business Analysts e Developers, para criar uma experiência mobile escalável e consistente.',
    responsibilitiesLabel: 'Responsabilidades: ',
    responsibilities: 'Design de Produto · UX Design · UI Design · Arquitetura de Informação · Fluxos de Utilizador · Design Mobile · Design de Interação · Design System · Prototipagem · Design QA · Testes de Usabilidade · Colaboração Multidisciplinar',
    challengeTitle: 'O Desafio',
    challengeBody: 'O projeto combinou vários serviços públicos numa única aplicação, mantendo clareza, acessibilidade e consistência em centenas de jornadas de utilizador. Os principais desafios incluíram desenhar para necessidades diversas de utilizadores, suportar workflows de candidatura complexos, gerir programas financeiros com regras de negócio diferentes, garantir acessibilidade em Inglês e Árabe (RTL), manter consistência em mais de 1.000 ecrãs de design, suportar vários métodos de autenticação incluindo verificação biométrica, e criar padrões de UI escaláveis para evolução contínua do produto.',
    briefLabel: 'O Briefing',
    brief: [
      'A plataforma web complementar (ver case study em separado) tinha digitalizado os serviços principais do Fundo para desktop. A fase Omnichannel de 2025 trouxe um novo requisito: uma app mobile nativa complementar — a NEOT — a trazer os mesmos serviços aos cidadãos em iOS e Android, com suporte completo a Árabe RTL, modo escuro e notificações push.',
    ],
    briefClosing: 'A NEOT não foi uma versão mobile simplificada da plataforma web. Foi um redesign centrado no cidadão, construído do zero: o que é que um cidadão precisa mesmo de aceder a partir do telemóvel, em que contexto, em que idioma, e com que nível de conectividade? Estas perguntas orientaram 18 semanas de descoberta e definição antes de ser fechado um único ecrã de produção.',
    galleryTitle: 'Galeria de Protótipo',
    galleryIntro: 'Seis vistas do protótipo funcional, cada uma associada a um módulo específico.',
    galleryCards: [
      { title: 'Onboarding — Verificação biométrica', caption: 'Fluxo de registo com autenticação biométrica e verificação de identidade nacional.' },
      { title: 'Home — Dashboard personalizado', caption: 'Dashboard principal com widget de apoio ativo e recomendações de programas.' },
      { title: 'My Support — Fluxo de pedido de pagamento', caption: 'Upload de documentos, seleção de IBAN e fluxo de confirmação.' },
      { title: 'My Support — Visão geral de programas', caption: 'Hub central para gerir programas ativos e apoio financeiro.' },
      { title: 'Career Coach — Chatbot de IA', caption: 'Interface conversacional para orientação de carreira.' },
      { title: 'Modo claro vs. escuro + EN/AR (RTL)', caption: 'Comparação lado a lado entre idiomas e temas.' },
    ],
    modulesTitle: 'Destaques da Solução — 8 Áreas de Produto Principais',
    modules: [
      { n: '01', name: 'Onboarding', desc: 'Onboarding seguro com criação de conta, verificação biométrica, autenticação de identidade nacional, onboarding multilingue e acesso convidado.' },
      { n: '02', name: 'Home', desc: 'Dashboard personalizado com acesso rápido a programas de apoio ativos, oportunidades recomendadas, pedidos de pagamento e orientação personalizada.' },
      { n: '03', name: 'My Support', desc: 'Hub central para gerir cada programa ativo, acompanhar candidaturas, submeter pedidos de pagamento e consultar apoio financeiro.' },
      { n: '04', name: 'Explore', desc: 'Catálogo inteligente para descobrir programas de formação, iniciativas de emprego e oportunidades de financiamento através de pesquisa e filtros avançados.' },
      { n: '05', name: 'Profile & Settings', desc: 'Gestão completa de perfil incluindo informação pessoal, contactos, gestão de IBAN, biblioteca de documentos, permissões do dispositivo e notificações.' },
      { n: '06', name: 'News & Events', desc: 'Hub de conteúdo com notícias, casos de sucesso, eventos educativos e oportunidades de carreira.' },
      { n: '07', name: 'Self Monitoring', desc: 'Questionários periódicos e submissão de documentos para manter a elegibilidade ao longo dos programas em curso.' },
      { n: '08', name: 'Career Coach', desc: 'Interface conversacional assistida por IA que ajuda os utilizadores a navegar programas e receber orientação de carreira.' },
    ],
    rtlTitle: 'Design RTL e Bidirecional',
    rtlBody: 'O Árabe RTL não foi um "extra" adicionado no fim, nem uma passagem de espelhar-e-traduzir. Desde o primeiro frame em Figma, cada componente foi construído com LTR e RTL como outputs de primeira classe. As variáveis e as restrições de auto-layout foram estruturadas para que mudar de idioma no protótipo Figma invertesse todo o layout sem reposicionar manualmente um único elemento.',
    screenChallengeLabel: 'O Desafio dos 1.000 Ecrãs',
    screenChallenge: [
      'Mais de 1.000 ecrãs de design em 8 módulos, 2 idiomas, 2 temas e 4 breakpoints de dispositivo criam uma superfície de design combinatória genuinamente difícil de gerir sem um sistema. A biblioteca de componentes da NEOT — uma extensão do Design System da plataforma complementar — foi a resposta.',
      'Cada componente tinha 8 variantes por omissão: LTR claro, LTR escuro, RTL claro, RTL escuro — e os mesmos quatro estados para loading/skeleton. Um total de mais de 1.000 ecrãs parece muito. Com o sistema de componentes, as decisões de design reais foram bastante menos: a biblioteca de componentes é que fez a multiplicação.',
    ],
    scaleTitle: 'Escala',
    scaleBody: 'Mais de 1.000 ecrãs de design · 8 módulos funcionais principais · mais de 20 secções de design · mais de 270 ecrãs testados em usabilidade · processo completo de revisão de QA · Design QA a comparar a implementação com o Figma · assets de publicação nas lojas · ciclos contínuos de melhoria de UI.',
    principlesTitle: 'Princípios de Design',
    principlesBody: 'Reduzir a complexidade · guiar os utilizadores através de workflows progressivos · desenhar para confiança e transparência · priorizar acessibilidade desde o início · construir padrões reutilizáveis que escalam · suportar experiências multilingue sem comprometer a usabilidade.',
    accessibilityTitle: 'Acessibilidade',
    accessibilityBody: 'A NEOT foi desenhada segundo o WCAG 2.1 AA em ambos os temas e idiomas. Cada par de cores foi validado contra um rácio de contraste mínimo de 4.5:1. Cada elemento interativo cumpriu o alvo de toque mínimo de 44×44pt. A ordem de foco foi verificada manualmente em cada ecrã, tanto em LTR como em RTL — um detalhe que ferramentas automáticas não conseguem detetar de forma fiável em layouts bidirecionais.',
    accessibilityStats: [
      { value: 'WCAG 2.1 AA', label: 'padrão de acessibilidade cumprido' },
      { value: '4.5:1+', label: 'rácio de contraste mínimo em todos os temas' },
      { value: '44×44pt', label: 'alvo de toque mínimo em cada elemento interativo' },
      { value: '100%', label: 'dos ecrãs verificados em LTR e RTL' },
    ],
    impactTitle: 'Impacto',
    impactBody: 'O projeto estabeleceu uma experiência mobile escalável, capaz de suportar milhares de cidadãos a interagir com o ecossistema de emprego do Fundo. Ao consolidar vários serviços públicos num produto unificado, a plataforma simplificou o acesso a programas de emprego, apoio financeiro e desenvolvimento de carreira, criando uma experiência digital consistente em todos os pontos de contacto. O trabalho também resultou num design system mobile robusto, padrões de interação reutilizáveis e um processo de design estruturado que suporta evolução futura do produto.',
    glanceTitle: 'O Projeto em Resumo',
    glanceRows: [
      ['Função', 'Lead UX/UI Designer'],
      ['Indústria', 'Setor Público / Serviços de Emprego'],
      ['Cliente', 'Fundo nacional de emprego'],
      ['Plataforma', 'App Mobile (iOS e Android)'],
      ['Idiomas', 'Inglês e Árabe (RTL)'],
      ['Módulos', '8'],
      ['Ecrãs', '1.000+'],
      ['Design System', 'Sim — extensão do DS da plataforma web'],
      ['Design QA', 'Sim'],
      ['Testes de Usabilidade', 'Sim — mais de 270 ecrãs testados'],
    ],
  },
}

export default function CaseStudyNEOT() {
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

  const galleryCards = t.galleryCards.map((c, i) => ({ ...c, image: galleryImages[i] }))
  const gallerySlides = chunkCards(galleryCards, isMobile ? 1 : 3)

  return (
    <CaseStudyShell
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      meta={t.meta}
      stats={t.stats}
    >
      {/* OVERVIEW */}
      <div style={{ ...S, paddingTop: 48 }}>
        <h2 style={H2}>{t.overviewTitle}</h2>
        {t.overview.map((p, i) => <Body key={i}>{p}</Body>)}
      </div>

      {/* MY ROLE */}
      <div style={S}>
        <h2 style={H2}>{t.roleTitle}</h2>
        <Body>{t.roleBody}</Body>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A5F73', margin: 0 }}>
          <strong style={{ color: '#12141F' }}>{t.responsibilitiesLabel}</strong>
          {t.responsibilities}
        </p>
      </div>

      {/* THE CHALLENGE */}
      <div style={S}>
        <h2 style={H2}>{t.challengeTitle}</h2>
        <Body>{t.challengeBody}</Body>

        <div style={{ padding: 24, borderRadius: 20, background: '#F2F6FF', border: '1px solid #EAF1FF' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#12141F', marginBottom: 10 }}>{t.briefLabel}</div>
          {t.brief.map((p, i) => <Body key={i}>{p}</Body>)}
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: 0 }}>{t.briefClosing}</p>
        </div>
      </div>

      {/* GALLERY */}
      <div style={S}>
        <h2 style={H2}>{t.galleryTitle}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 28px' }}>{t.galleryIntro}</p>

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

      {/* 8 MODULES */}
      <div style={S}>
        <h2 style={H2}>{t.modulesTitle}</h2>
        <div className="rg-2" style={{ gap: 16 }}>
          {t.modules.map(({ n, name, desc }) => (
            <div key={n} style={{ padding: '20px 24px', borderRadius: 16, border: '1px solid #EAF1FF', background: '#FAFBFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#002FA7', background: '#DCE8FF', padding: '3px 8px', borderRadius: 8 }}>{n}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#12141F' }}>{name}</div>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: '#5A5F73' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RTL & BIDI */}
      <div style={S}>
        <h2 style={H2}>{t.rtlTitle}</h2>
        <Body>{t.rtlBody}</Body>

        <DarkBox label={t.screenChallengeLabel}>
          {t.screenChallenge.map((p, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.75, margin: i === t.screenChallenge.length - 1 ? 0 : '0 0 16px' }}>{p}</p>
          ))}
        </DarkBox>
      </div>

      {/* SCALE + PRINCIPLES */}
      <div style={S}>
        <h2 style={H2}>{t.scaleTitle}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 44px' }}>{t.scaleBody}</p>
        <h2 style={H2}>{t.principlesTitle}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: 0 }}>{t.principlesBody}</p>
      </div>

      {/* ACCESSIBILITY */}
      <div style={S}>
        <h2 style={H2}>{t.accessibilityTitle}</h2>
        <Body>{t.accessibilityBody}</Body>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {t.accessibilityStats.map(({ value, label }) => (
            <div key={label} style={{ padding: 20, borderRadius: 16, background: '#F2F6FF', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#002FA7' }}>{value}</div>
              <div style={{ fontSize: 13, color: '#5A5F73', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div style={S}>
        <h2 style={H2}>{t.impactTitle}</h2>
        <Body>{t.impactBody}</Body>
      </div>

      {/* PROJECT AT A GLANCE */}
      <div style={S}>
        <h2 style={H2}>{t.glanceTitle}</h2>
        <div className="table-scroll" style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <tbody>
              {t.glanceRows.map(([label, value], i, arr) => (
                <tr key={label} style={{ borderBottom: i < arr.length - 1 ? '1px solid #F2F6FF' : undefined }}>
                  <td style={{ padding: '10px 16px', color: '#001A5C', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', background: '#F8FAFF', width: '35%' }}>{label}</td>
                  <td style={{ padding: '10px 16px', color: '#12141F' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CaseStudyShell>
  )
}
