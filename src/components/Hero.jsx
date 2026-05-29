import { useState, useEffect } from 'react'

const ROLES = [
  'Full-Stack Developer',
  'Cybersecurity Specialist',
  'Data Science Student',
]

function useTypewriter(texts, speed = 75, del = 48, pause = 2000) {
  const [txt, setTxt]     = useState('')
  const [idx, setIdx]     = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const cur = texts[idx]
    if (phase === 'typing') {
      if (txt === cur) {
        const t = setTimeout(() => setPhase('deleting'), pause)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), speed)
      return () => clearTimeout(t)
    }
    if (phase === 'deleting') {
      if (txt === '') {
        setIdx(i => (i + 1) % texts.length)
        setPhase('typing')
        return
      }
      const t = setTimeout(() => setTxt(txt.slice(0, -1)), del)
      return () => clearTimeout(t)
    }
  }, [txt, phase, idx, texts, speed, del, pause])

  return txt
}

function ProfileImg() {
  const [err, setErr] = useState(false)
  return err ? (
    <div className="img-initials">EE</div>
  ) : (
    <img
      src="/images/profile.jpg"
      alt="Elion Emini"
      onError={() => setErr(true)}
    />
  )
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Hello, world!</p>
          <h1 className="hero-name">Elion Emini</h1>
          <p className="hero-subtitle">
            I&rsquo;m a&nbsp;
            <span className="hero-type">{typed}<span className="cursor" /></span>
          </p>
          <p className="hero-bio">
            IT professional based in Tirana, Albania — passionate about building elegant
            web applications, securing digital infrastructure, and exploring AI-driven solutions.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              View Projects
            </a>
            <a href="/CV_ElionEmini.pdf" download className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="img-ring">
            <ProfileImg />
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-bar" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
