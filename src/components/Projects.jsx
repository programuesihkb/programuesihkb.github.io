const GH_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
const EXT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    emoji: '🏨',
    title: 'RoomForMe',
    subtitle: 'Hotel Booking Platform',
    desc: 'A full-stack hotel booking platform where guests search hotels by destination and dates, browse rooms, and confirm reservations. Hotel partners manage properties through a dedicated admin dashboard with booking stats and revenue tracking.',
    stack: ['React 18', 'TypeScript', 'Material UI', 'Zustand', 'NestJS', 'SQLite', 'JWT', 'Nodemailer'],
    github: 'https://github.com/programuesihkb/ALGORHYTHM',
    bg: 'linear-gradient(135deg, #1a0b2e 0%, #372554 60%, #52528C 100%)',
  },
  {
    emoji: '🎬',
    title: 'NexeMovieApp',
    subtitle: 'Movie Suggestion App',
    desc: 'A cross-platform movie suggestion app with personalized genre-based recommendations powered by the TMDB API. Features JWT authentication, infinite scroll browsing, advanced filtering, favorites, and is deployable as a native iOS & Android app via Capacitor.',
    stack: ['Ionic 8', 'Angular 19', 'NestJS', 'PostgreSQL', 'TMDB API', 'JWT', 'Capacitor'],
    github: 'https://github.com/programuesihkb/NexeMovieApp',
    bg: 'linear-gradient(135deg, #0d1117 0%, #231123 50%, #372554 100%)',
  },
  {
    emoji: '📱',
    title: 'Flutter Products App',
    subtitle: 'Mobile Internship Project',
    desc: 'A mobile product listing application built during an internship at New Media Communication. Products are fetched in real-time via an Elasticsearch endpoint, while a Laravel backend handles XML-to-MySQL data migration using Eloquent ORM.',
    stack: ['Flutter', 'Dart', 'Elasticsearch', 'Laravel', 'PHP', 'MySQL', 'Eloquent'],
    github: null,
    bg: 'linear-gradient(135deg, #0a1a2e 0%, #1a2a4a 50%, #372554 100%)',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-eyebrow aos">What I&rsquo;ve Built</p>
        <h2 className="section-title aos d1">Featured Projects</h2>
        <div className="section-rule aos d2" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card aos d${i + 1}`} key={p.title}>
              <div className="project-banner">
                <div className="project-banner-inner" style={{ background: p.bg }} />
                <span className="project-emoji">{p.emoji}</span>
              </div>
              <div className="project-body">
                <div>
                  <div className="project-title">{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--steel-blue)', marginBottom: '0.6rem', fontWeight: 500 }}>
                    {p.subtitle}
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="plink">
                      {GH_ICON} GitHub
                    </a>
                  )}
                  {!p.github && (
                    <span className="plink" style={{ opacity: 0.5, cursor: 'default' }}>
                      Private Repo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
