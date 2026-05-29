const work = [
  {
    role: 'Cybersecurity Specialist',
    company: 'Kronotech',
    date: 'Aug 2025 – Mar 2026',
    bullets: [
      'Conducted vulnerability assessments and penetration testing using Nmap, OpenVAS, Metasploit, and Wazuh',
      'Designed and deployed Active Directory environments from scratch, aligning with ISO 27001, NIS2, and NIST frameworks',
      'Configured and maintained network infrastructure (switches, routers, firewalls) and managed device inventory',
    ],
    chips: ['Nmap', 'OpenVAS', 'Metasploit', 'Wazuh', 'Active Directory', 'ISO 27001'],
  },
  {
    role: 'React Development Intern',
    company: 'Algorhythm',
    date: 'Apr 2024 – Jun 2024',
    bullets: [
      'Built a fully functional hotel booking web application (RoomForMe) with a teammate',
      'Implemented JWT authentication, React Router, Zustand state management, and Material UI',
      'Integrated with a NestJS backend: consumed REST APIs for hotel search, booking, and user auth',
    ],
    chips: ['React', 'TypeScript', 'Zustand', 'Material UI', 'NestJS', 'JWT'],
  },
  {
    role: 'App Development Intern',
    company: 'New Media Communication',
    date: 'Feb 2023 – May 2023',
    bullets: [
      'Created a Flutter product listing app powered by an Elasticsearch endpoint for real-time search',
      'Fetched and transformed XML data into a MySQL database using Laravel Eloquent ORM',
    ],
    chips: ['Flutter', 'Dart', 'Elasticsearch', 'Laravel', 'MySQL'],
  },
]

const education = [
  {
    degree: 'Master in Data Science & AI',
    school: '"Faculty of Natural Sciences" — University of Tirana',
    date: 'Oct 2025 – Present',
    desc: 'Gaining strong foundations in machine learning, deep learning, big data analytics, and data engineering with a focus on practical AI applications.',
  },
  {
    degree: 'Bachelor in Informatics',
    school: '"Faculty of Natural Sciences" — University of Tirana',
    date: 'Sept 2021 – Jul 2024',
    desc: 'Comprehensive study of software development, database management, algorithms, and systems programming. Languages: C++, Java.',
  },
]

function Timeline({ items, type }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className={`tl-item aos d${i + 1}`} key={i}>
          <div className="tl-dot" />
          <div className="tl-date">{item.date || item[type === 'edu' ? 'date' : 'date']}</div>
          <div className="tl-card">
            <div className="tl-role">{item.role || item.degree}</div>
            <div className="tl-company">{item.company || item.school}</div>
            {item.bullets ? (
              <ul className="tl-bullets">
                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            ) : (
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
            )}
            {item.chips && (
              <div className="tl-chips">
                {item.chips.map(c => <span className="tl-chip" key={c}>{c}</span>)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="section-eyebrow aos">Background</p>
        <h2 className="section-title aos d1">Experience &amp; Education</h2>
        <div className="section-rule aos d2" />

        <div className="edu-work">
          <div>
            <div className="exp-col-title aos">
              <span>💼</span> Work Experience
            </div>
            <Timeline items={work} type="work" />
          </div>
          <div>
            <div className="exp-col-title aos">
              <span>🎓</span> Education
            </div>
            <Timeline items={education} type="edu" />
          </div>
        </div>
      </div>
    </section>
  )
}
