import { useState, useEffect } from 'react'
import CaseStudyShell, { Body, DarkBox } from '../components/CaseStudyShell'
import img1 from '../imports/1RegistrationCreate_Account.png'
import img2 from '../imports/2Home__Stippend__-_V1.png'
import img3 from '../imports/3Payment_Request_-_Upload_documents.png'
import img4 from '../imports/4My_Support.png'
import img5 from '../imports/5Chatbot.png'
import img6 from '../imports/6RegistrationCreate_Account.png'

const S = { padding: '0 20px 64px', maxWidth: 760, margin: '0 auto' } as const
const H2 = { fontSize: 'clamp(20px,3vw,26px)' as const, fontWeight: 800, letterSpacing: '-0.02em', color: '#12141F', margin: '0 0 20px' }

const modules = [
  { n: '01', name: 'Onboarding', desc: 'Secure onboarding supporting account creation, biometric verification, national identity authentication, multilingual onboarding and guest access.' },
  { n: '02', name: 'Home', desc: 'Personalised dashboard with quick access to active support programmes, recommended opportunities, payment requests and personalised guidance.' },
  { n: '03', name: 'My Support', desc: 'Central hub to manage every active programme, monitor applications, submit payment claims and review financial support.' },
  { n: '04', name: 'Explore', desc: 'Intelligent catalogue for discovering training programmes, employment initiatives and funding opportunities through advanced search and filtering.' },
  { n: '05', name: 'Profile & Settings', desc: 'Complete profile management including personal information, contact details, IBAN management, document library, device permissions and notifications.' },
  { n: '06', name: 'News & Events', desc: 'Content hub showcasing news, success stories, educational events and career opportunities.' },
  { n: '07', name: 'Self Monitoring', desc: 'Periodic questionnaires and document submissions to maintain eligibility throughout ongoing programmes.' },
  { n: '08', name: 'Career Coach', desc: 'AI-assisted conversational interface helping users navigate programmes and receive career guidance.' },
]

const galleryCards = [
  { title: 'Onboarding — Biometric verification', caption: 'Registration flow with biometric authentication and national identity verification.', image: img1 },
  { title: 'Home — Personalised dashboard', caption: 'Main dashboard with active support widget and programme recommendations.', image: img2 },
  { title: 'My Support — Payment claim workflow', caption: 'Document upload, IBAN selection and confirmation flow.', image: img3 },
  { title: 'My Support — Programme overview', caption: 'Central hub managing active programmes and financial support.', image: img4 },
  { title: 'Career Coach — AI chatbot', caption: 'Conversational interface for career guidance.', image: img5 },
  { title: 'Light vs. dark mode + EN/AR (RTL)', caption: 'Side-by-side comparison across languages and themes.', image: img6 },
]

function chunkCards(cards: typeof galleryCards, size: number) {
  const chunks = []
  for (let i = 0; i < cards.length; i += size) chunks.push(cards.slice(i, i + size))
  return chunks
}

export default function CaseStudyNEOT() {
  const [galleryIdx, setGalleryIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 640)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const handler = (e: MediaQueryListEvent) => { setIsMobile(e.matches); setGalleryIdx(0) }
    mq.addEventListener('change', handler)
    setIsMobile(mq.matches)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const gallerySlides = chunkCards(galleryCards, isMobile ? 1 : 3)

  return (
    <CaseStudyShell
      eyebrow="Case Study"
      title="NEOT Mobile App"
      description="Empowering citizens through a unified employment and career support experience — a mobile-first platform bringing employment services, training programmes, financial support and career guidance into a single digital experience."
      meta={[
        { label: 'Role', value: 'Lead UX/UI Designer' },
        { label: 'Client', value: 'National employment fund — Bahrain (Government / Employment Services)' },
        { label: 'Platform', value: 'Mobile App (iOS & Android)' },
        { label: 'Languages', value: 'English & Arabic (RTL), light & dark mode' },
        { label: 'Modules', value: '8 core product areas' },
        { label: 'Tools', value: 'Figma · FigJam · Jira · Confluence · Miro · Adobe Creative Suite' },
      ]}
      stats={[
        { value: '1,000+', label: 'design screens' },
        { value: '8', label: 'major modules' },
        { value: '20+', label: 'design sections' },
        { value: '270+', label: 'usability testing screens' },
      ]}
    >
      {/* OVERVIEW */}
      <div style={{ ...S, paddingTop: 48 }}>
        <h2 style={H2}>Overview</h2>
        <Body>The app was designed as a comprehensive digital platform supporting citizens throughout their employment journey, for a national employment fund. It centralises access to government-funded employment programmes, training opportunities, salary subsidies, stipends, payment requests and career development services.</Body>
        <Body>Rather than navigating multiple disconnected services, users can manage every stage of their journey — from registration and programme applications to payments, self-monitoring and career coaching — within one intuitive mobile experience.</Body>
        <Body>The platform supports both English and Arabic (RTL), light and dark modes, biometric authentication and integrates with national identity verification services.</Body>
      </div>

      {/* MY ROLE */}
      <div style={S}>
        <h2 style={H2}>My Role — Lead UX/UI Designer</h2>
        <Body>Responsible for the end-to-end product design across multiple functional areas, collaborating with Product Owners, Business Analysts and Developers to create a scalable and consistent mobile experience.</Body>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A5F73', margin: 0 }}>
          <strong style={{ color: '#12141F' }}>Responsibilities: </strong>
          Product Design · UX Design · UI Design · Information Architecture · User Flows · Mobile Design · Interaction Design · Design System · Prototyping · Design QA · Usability Testing · Cross-functional Collaboration
        </p>
      </div>

      {/* THE CHALLENGE */}
      <div style={S}>
        <h2 style={H2}>The Challenge</h2>
        <Body>The project combined multiple government services into a single application while maintaining clarity, accessibility and consistency across hundreds of user journeys. Key challenges included designing for diverse user needs, supporting complex application workflows, managing financial programmes with different business rules, ensuring accessibility across English and Arabic (RTL), maintaining consistency across more than 1,000 design screens, supporting multiple authentication methods including biometric verification, and creating scalable UI patterns for continuous product evolution.</Body>

        <div style={{ padding: 24, borderRadius: 20, background: '#F2F6FF', border: '1px solid #EAF1FF' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#12141F', marginBottom: 10 }}>The Brief</div>
          <Body>The companion web platform (see separate case study) had digitised the Fund's core services for desktop. The 2025 Omnichannel phase added a new requirement: a native mobile companion app — NEOT — bringing the same services to citizens on iOS and Android, with full Arabic RTL support, dark mode, and push notifications.</Body>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5A5F73', margin: 0 }}>NEOT was not a simplified mobile version of the web platform. It was a citizen-first redesign from scratch: what does a Bahraini citizen actually need to access from their phone, in what context, in what language, and with what level of connectivity? Those questions drove 18 weeks of discovery and definition before a single production screen was committed.</p>
        </div>
      </div>

      {/* GALLERY */}
      <div style={S}>
        <h2 style={H2}>Prototype Gallery</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 28px' }}>Six views from the working prototype, each tied to a specific module.</p>

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
          <button onClick={() => setGalleryIdx(i => (i - 1 + gallerySlides.length) % gallerySlides.length)} style={{ cursor: 'pointer', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F2F6FF', color: '#3D63E0', fontSize: 16, fontWeight: 700, border: 'none', fontFamily: "'Inter', sans-serif" }}>←</button>
          <div style={{ display: 'flex', gap: 8 }}>
            {gallerySlides.map((_, i) => (
              <button key={i} onClick={() => setGalleryIdx(i)} style={{ cursor: 'pointer', width: 8, height: 8, borderRadius: '50%', background: i === galleryIdx ? '#002FA7' : '#DCE8FF', border: 'none', padding: 0 }} />
            ))}
          </div>
          <button onClick={() => setGalleryIdx(i => (i + 1) % gallerySlides.length)} style={{ cursor: 'pointer', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F2F6FF', color: '#3D63E0', fontSize: 16, fontWeight: 700, border: 'none', fontFamily: "'Inter', sans-serif" }}>→</button>
        </div>
      </div>

      {/* 8 MODULES */}
      <div style={S}>
        <h2 style={H2}>Solution Highlights — 8 Core Product Areas</h2>
        <div className="rg-2" style={{ gap: 16 }}>
          {modules.map(({ n, name, desc }) => (
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
        <h2 style={H2}>RTL & Bidirectional Design</h2>
        <Body>Arabic RTL was not an afterthought or a mirror-and-translate pass at the end of the project. From the first Figma frame, every component was built with both LTR and RTL as first-class outputs. Variables and auto-layout constraints were structured so that switching language in the Figma prototype would flip the entire layout without manual repositioning of a single element.</Body>

        <DarkBox label="The 1,000-Screen Challenge">
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: '0 0 16px' }}>Over 1,000 design screens across 8 modules, 2 languages, 2 themes, and 4 device breakpoints creates a combinatorial design surface that is genuinely difficult to manage without a system. The NEOT component library — an extension of the companion platform's Design System — was the answer.</p>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>Every component carried 8 variants by default: LTR light, LTR dark, RTL light, RTL dark — and the same four states for loading/skeleton. A screen count of 1,000+ sounds large. With the component system, the actual design decisions were far fewer: the component library did the multiplication.</p>
        </DarkBox>
      </div>

      {/* SCALE + PRINCIPLES */}
      <div style={S}>
        <h2 style={H2}>Scale</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: '0 0 44px' }}>1,000+ design screens · 8 major functional modules · 20+ design sections · 270+ usability testing screens · comprehensive QA review process · Design QA comparing implementation against Figma · store publication assets · continuous UI improvement cycles.</p>
        <h2 style={H2}>Design Principles</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5F73', margin: 0 }}>Reduce complexity · guide users through progressive workflows · design for trust and transparency · prioritise accessibility from the beginning · build reusable patterns that scale · support multilingual experiences without compromising usability.</p>
      </div>

      {/* ACCESSIBILITY */}
      <div style={S}>
        <h2 style={H2}>Accessibility</h2>
        <Body>NEOT was designed to WCAG 2.1 AA across both themes and both languages. Every colour pair was validated against a 4.5:1 minimum contrast ratio. Every interactive element met the 44×44pt minimum touch target. Focus order was manually verified for every screen in both LTR and RTL — a detail that automated tools cannot catch reliably for bidirectional layouts.</Body>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {[
            { value: 'WCAG 2.1 AA', label: 'accessibility standard met' },
            { value: '4.5:1+', label: 'minimum contrast ratio across all themes' },
            { value: '44×44pt', label: 'minimum touch target on every interactive element' },
            { value: '100%', label: 'of screens verified in both LTR and RTL' },
          ].map(({ value, label }) => (
            <div key={label} style={{ padding: 20, borderRadius: 16, background: '#F2F6FF', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#002FA7' }}>{value}</div>
              <div style={{ fontSize: 13, color: '#5A5F73', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div style={S}>
        <h2 style={H2}>Impact</h2>
        <Body>The project established a scalable mobile experience capable of supporting thousands of citizens interacting with the Fund's employment ecosystem. By consolidating multiple government services into a unified product, the platform simplified access to employment programmes, financial support and career development while creating a consistent digital experience across every touchpoint. The work also resulted in a robust mobile design system, reusable interaction patterns and a structured design process supporting future product evolution.</Body>
      </div>

      {/* PROJECT AT A GLANCE */}
      <div style={S}>
        <h2 style={H2}>Project at a Glance</h2>
        <div className="table-scroll" style={{ borderRadius: 16, border: '1px solid #EAF1FF', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <tbody>
              {[
                ['Role', 'Lead UX/UI Designer'],
                ['Industry', 'Government / Employment Services'],
                ['Client', 'National employment fund — Bahrain'],
                ['Platform', 'Mobile App (iOS & Android)'],
                ['Languages', 'English & Arabic (RTL)'],
                ['Modules', '8'],
                ['Screens', '1,000+'],
                ['Design System', 'Yes — extension of the web platform DS'],
                ['Design QA', 'Yes'],
                ['Usability Testing', 'Yes — 270+ screens tested'],
              ].map(([label, value], i, arr) => (
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
