import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'

type Item = { to: string; label: string; cta: string; meta: string; desc: string }
type Featured = { label: string; title: string; desc: string; img: string; alt: string }

// Homepage "Work / Journey / About" zone: one hero card for Work (with the featured case study
// bleeding off its edge) and two lighter cards beside it. Order of `items`: Work, Journey, About.
export default function HomeShowcase({ items, featured }: { items: Item[]; featured: Featured }) {
  const [work, ...rest] = items
  return (
    <section className="hs">
      <Link to={work.to} className="hs-work interactive-card">
        <div className="hs-work-copy">
          <div className="hs-top"><span className="hs-num">01</span><span className="hs-meta">{work.meta}</span></div>
          <span className="hs-title hs-title-xl">{work.label}</span>
          <span className="hs-desc">{work.desc}</span>
          <span className="hs-cta">{work.cta}<ChevronRight size={15} /></span>
        </div>
        <div className="hs-work-media">
          <span className="hs-featured"><span className="hs-dot" aria-hidden="true" />{featured.label}: {featured.title}</span>
          <img src={featured.img} alt={featured.alt} />
        </div>
      </Link>
      {rest.map((it, i) => (
        <Link key={it.to} to={it.to} className="hs-side interactive-card">
          <div className="hs-top"><span className="hs-num">{`0${i + 2}`}</span><span className="hs-meta">{it.meta}</span></div>
          <span className="hs-title">{it.label}<span className="hs-dot hs-dot-grow" aria-hidden="true" /></span>
          <span className="hs-desc">{it.desc}</span>
          <span className="hs-cta">{it.cta}<ChevronRight size={15} /></span>
        </Link>
      ))}
    </section>
  )
}
