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

function HeroVisual() {
  return (
    <div className="hero-deco">
      <div className="deco-glow" />

      <div className="deco-terminal">
        <div className="deco-bar">
          <div className="deco-dots">
            <span className="dd red" />
            <span className="dd yellow" />
            <span className="dd green" />
          </div>
          <span className="deco-bar-title">elion@dev: ~</span>
        </div>
        <div className="deco-code">
          <p><span className="kw">const</span> <span className="fn">developer</span> = {'{'}</p>
          <p className="ind"><span className="prop">name</span>: <span className="str">&quot;Elion Emini&quot;</span>,</p>
          <p className="ind"><span className="prop">roles</span>: [<span className="str">&quot;dev&quot;</span>, <span className="str">&quot;sec&quot;</span>, <span className="str">&quot;ai&quot;</span>],</p>
          <p className="ind"><span className="prop">location</span>: <span className="str">&quot;Tirana, AL&quot;</span>,</p>
          <p className="ind"><span className="prop">available</span>: <span className="bool">true</span>,</p>
          <p>{'}'}</p>
          <p className="code-spacer"><span className="cmt">// open to opportunities 🚀</span></p>
          <p className="deco-prompt-line">
            <span className="deco-prompt">❯</span>
            <span className="deco-caret" />
          </p>
        </div>
      </div>

      <span className="deco-badge" style={{ top: '-14px', right: '28px', animationDelay: '0s' }}>React</span>
      <span className="deco-badge" style={{ bottom: '55px', left: '-28px', animationDelay: '0.9s' }}>NestJS</span>
      <span className="deco-badge" style={{ bottom: '-12px', right: '44px', animationDelay: '0.45s' }}>Python</span>
      <span className="deco-badge" style={{ top: '64px', left: '-20px', animationDelay: '1.3s' }}>Flutter</span>
    </div>
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
            I am an enthusiastic and diligent IT professional, driven by a passion for continuous learning and self-improvement. 
            With a background in programming, design, networking and cybersecurity, I excel at problem-solving and delivering innovative solutions. 
            In addition to my technical expertise, I am a creative individual who enjoys photography, good music and traveling. I value work-life balance, 
            spending my free time with family, enjoying nature, and building meaningful connections with friends.
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
          <HeroVisual />
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-bar" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
