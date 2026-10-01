import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage, type Lang } from '../i18n/LanguageContext'
import ChevronDown from './ChevronDown'

const linksByLang: Record<Lang, { to: string; label: string }[]> = {
  en: [
    { to: '/work', label: 'Work' },
    { to: '/journey', label: 'Journey' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ],
  pt: [
    { to: '/work', label: 'Trabalho' },
    { to: '/journey', label: 'Percurso' },
    { to: '/about', label: 'Sobre' },
    { to: '/contact', label: 'Contacto' },
  ],
}

const LANG_LABEL: Record<Lang, string> = { pt: 'PT', en: 'EN' }

function LanguageSwitch() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const other: Lang = lang === 'pt' ? 'en' : 'pt'

  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label={lang === 'pt' ? 'Selecionar idioma' : 'Select language'}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: '6px 4px', fontSize: 13, fontWeight: 600, color: '#4A4F63', fontFamily: "'Inter', sans-serif" }}
      >
        {LANG_LABEL[lang]}
        <span style={{ display: 'inline-flex', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms var(--ease-out)' }}>
          <ChevronDown size={12} className="" />
        </span>
      </button>
      <div className={`lang-switch-panel${open ? ' open' : ''}`}>
        <button
          type="button"
          onClick={() => { setLang(other); setOpen(false) }}
          style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 10px', fontSize: 13, fontWeight: 600, color: '#4A4F63', fontFamily: "'Inter', sans-serif", whiteSpace: 'nowrap' }}
        >
          {LANG_LABEL[other]}
        </button>
      </div>
    </div>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const links = linksByLang[lang]

  const isActive = (to: string) => {
    if (to === '/work') return pathname === '/work' || pathname.startsWith('/work/')
    return pathname === to
  }

  // `.nav-link` in index.css reserves a transparent 2px bottom border at
  // rest, so only the color needs to change here — hover/focus swap that
  // same border to an underline via CSS, with no layout shift either way.
  const linkStyle = (to: string): React.CSSProperties => ({
    color: isActive(to) ? '#002FA7' : '#4A4F63',
    borderBottomColor: isActive(to) ? '#002FA7' : 'transparent',
    textDecoration: 'none',
    fontWeight: isActive(to) ? 600 : 500,
  })

  const mobileLink: React.CSSProperties = {
    fontSize: 16,
    padding: '10px 0',
    textDecoration: 'none',
    transition: 'color 200ms ease-out',
    borderBottom: 'none',
    paddingBottom: 0,
  }

  return (
    <div style={{
      position: 'fixed', top: 20, left: 20, right: 20,
      maxWidth: 1200, margin: '0 auto', zIndex: 100,
      padding: '14px 24px',
      background: 'rgba(255,255,255,0.6)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(20,30,60,0.12)',
      borderRadius: 20,
      boxShadow: '0 10px 30px rgba(20,30,60,0.14)',
    }}>
      {/* Top row: logo + desktop links + language + burger */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="logo-link" style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', color: '#1A1D29', textDecoration: 'none', flexShrink: 0 }}>
          Nelson Lopes
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <nav className="nav-links" style={{ alignItems: 'center', gap: 12 }}>
            {links.map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link" style={linkStyle(to)}>{label}</Link>
            ))}
          </nav>

          <LanguageSwitch />

          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-label={lang === 'pt' ? 'Alternar menu' : 'Toggle menu'}
            aria-expanded={open}
            className="nav-burger"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#1A1D29', alignItems: 'center', justifyContent: 'center' }}
          >
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></svg>
            }
          </button>
        </div>
      </div>

      {/* In-pill dropdown — mobile only */}
      <div className={`nav-dropdown${open ? ' open' : ''}`}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            style={{
              ...mobileLink,
              color: isActive(to) ? '#002FA7' : '#4A4F63',
              fontWeight: isActive(to) ? 700 : 500,
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
