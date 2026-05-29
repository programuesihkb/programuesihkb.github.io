const categories = [
  {
    icon: '🌐',
    label: 'Frontend',
    pills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Ionic', 'Angular'],
  },
  {
    icon: '📱',
    label: 'Mobile',
    pills: ['Flutter', 'Dart', 'Capacitor', 'Android', 'iOS'],
  },
  {
    icon: '⚙️',
    label: 'Backend',
    pills: ['Node.js', 'NestJS', 'Python', 'Django', 'Laravel', 'PHP', 'Java'],
  },
  {
    icon: '🗄️',
    label: 'Databases & Search',
    pills: ['PostgreSQL', 'MySQL', 'SQLite', 'Elasticsearch'],
  },
  {
    icon: '🤖',
    label: 'Data & AI',
    pills: ['Machine Learning', 'Deep Learning', 'Pandas', 'Data Engineering', 'Big Data'],
  },
  {
    icon: '🔒',
    label: 'Cybersecurity',
    pills: ['Nmap', 'OpenVAS', 'Metasploit', 'Wazuh', 'Active Directory', 'ISO 27001', 'NIS2', 'NIST'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-eyebrow aos">What I Work With</p>
        <h2 className="section-title aos d1">Skills &amp; Technologies</h2>
        <div className="section-rule aos d2" />

        <div className="skills-grid">
          {categories.map((c, i) => (
            <div className={`skill-card aos d${(i % 4) + 1}`} key={c.label}>
              <div className="skill-icon">{c.icon}</div>
              <div className="skill-label">{c.label}</div>
              <div className="pills">
                {c.pills.map(p => <span className="pill" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
