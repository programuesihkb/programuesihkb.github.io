import { useState } from 'react'

// 1. Go to https://formspree.io and create a free account
// 2. Create a new form, copy the form ID (e.g. "xyzabc")
// 3. Replace YOUR_FORM_ID below with that ID
const FORMSPREE_ID = 'mreddanq'

const EMAIL_ICO = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const GH_ICO = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LI_ICO = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const IG_ICO = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-eyebrow aos">Get In Touch</p>
        <h2 className="section-title aos d1">Let&rsquo;s Work Together</h2>
        <div className="section-rule aos d2" />

        <div className="contact-grid">
          <div className="contact-left aos">
            <h3>Have a project in mind?</h3>
            <p>
              Whether you need a web application, mobile app, cybersecurity consultation, or just
              want to say hi — I&rsquo;m always open to a conversation. Fill out the form or reach
              me directly through any of the channels below.
            </p>

            <div className="contact-items">
              <div className="citem">
                <div className="citem-icon">{EMAIL_ICO}</div>
                <div className="citem-text">
                  <a href="mailto:elion.emini@gmail.com">elion.emini@gmail.com</a>
                </div>
              </div>
              <div className="citem">
                <div className="citem-icon">{LI_ICO}</div>
                <div className="citem-text">
                  <a href="https://www.linkedin.com/in/elion-emini-2571a9162/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/elion-emini
                  </a>
                </div>
              </div>
              <div className="citem">
                <div className="citem-icon">{GH_ICO}</div>
                <div className="citem-text">
                  <a href="https://github.com/programuesihkb" target="_blank" rel="noopener noreferrer">
                    github.com/programuesihkb
                  </a>
                </div>
              </div>
            </div>

            <div className="socials">
              <a href="https://github.com/programuesihkb" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                {GH_ICO}
              </a>
              <a href="https://www.linkedin.com/in/elion-emini-2571a9162/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                {LI_ICO}
              </a>
              <a href="https://www.instagram.com/elion.emini/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                {IG_ICO}
              </a>
              <a href="mailto:elion.emini@gmail.com" className="social-btn" aria-label="Email">
                {EMAIL_ICO}
              </a>
            </div>
          </div>

          <form className="contact-form aos d2" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project idea, collaboration…" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project…" required value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'ok'  && <div className="form-msg ok">Message sent! I'll get back to you soon.</div>}
            {status === 'err' && <div className="form-msg err">Something went wrong. Try emailing me directly.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
