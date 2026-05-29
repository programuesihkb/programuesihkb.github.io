const certs = [
  {
    ico: '🛡️',
    name: 'Microsoft SC-200',
    full: 'Security Operations Analyst Associate',
    org: 'Microsoft',
    when: '2025',
  },
  {
    ico: '🔐',
    name: 'Microsoft SC-900',
    full: 'Security, Compliance & Identity Fundamentals',
    org: 'Microsoft',
    when: '2025',
  },
  {
    ico: '💻',
    name: 'Web Dev & Soft Skills',
    full: 'Full web development and soft skills training',
    org: 'YFSC',
    when: 'Aug – Dec 2022',
  },
  {
    ico: '🩹',
    name: 'Advanced First Aid',
    full: 'Certified Advanced First Aid Responder',
    org: 'Red Cross Elbasan',
    when: '2023',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <p className="section-eyebrow aos">Recognition</p>
        <h2 className="section-title aos d1">Certifications</h2>
        <div className="section-rule aos d2" />

        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className={`cert-card aos d${(i % 4) + 1}`} key={c.name}>
              <span className="cert-ico">{c.ico}</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
                <div className="cert-when">{c.when}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--dim)', marginTop: '0.35rem', lineHeight: 1.4 }}>
                  {c.full}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
