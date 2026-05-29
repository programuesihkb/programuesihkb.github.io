import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#about',         label: 'About' },
    { href: '#skills',        label: 'Skills' },
    { href: '#experience',    label: 'Experience' },
    { href: '#projects',      label: 'Projects' },
    { href: '#certifications',label: 'Certs' },
    { href: '#contact',       label: 'Contact' },
  ]

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">EE.</a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <a
            href="/CV_ElionEmini.pdf"
            download
            className="btn-outline nav-cv"
          >
            Download CV
          </a>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a
          href="/CV_ElionEmini.pdf"
          download
          onClick={close}
          className="btn-outline"
          style={{ marginTop: '1rem', fontSize: '0.95rem' }}
        >
          Download CV
        </a>
      </div>
    </>
  )
}
