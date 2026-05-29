import { useState } from 'react'

const stats = [
  { n: '4+', l: 'Years in Tech' },
  { n: '3',  l: 'Work Positions' },
  { n: '3',  l: 'Major Projects' },
]

const traits = [
  'Fast Learning', 'Problem Solving', 'Teamwork',
  'React', 'NestJS', 'Flutter', 'Python', 'Cybersecurity',
]

function AboutImg() {
  const [err, setErr] = useState(false)
  return err ? (
    <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg,#372554,#231123)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5rem', fontFamily:'Space Grotesk,sans-serif', color:'#7C9EB2', fontWeight:700 }}>EE</div>
  ) : (
    <img src="/images/profile.jpg" alt="Elion Emini" onError={() => setErr(true)} />
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">

          <div className="about-img-wrap aos">
            <div className="about-img-frame">
              <AboutImg />
            </div>
            <div className="about-img-accent" />
            <div className="about-stats">
              {stats.map(s => (
                <div className="stat" key={s.l}>
                  <span className="stat-n">{s.n}</span>
                  <span className="stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-text">
            <p className="section-eyebrow aos">Who I Am</p>
            <h2 className="section-title aos d1">Passionate about tech<br />and people.</h2>
            <div className="section-rule aos d2" />
            <p className="aos d2">
              I am an enthusiastic and diligent IT professional based in Tirana, Albania, driven
              by a passion for continuous learning. With a background spanning programming, UI design,
              networking, and cybersecurity, I excel at delivering innovative solutions to real-world problems.
            </p>
            <p className="aos d3">
              I hold a Bachelor's degree in Informatics from the University of Tirana and am currently
              pursuing a Master's in Data Science &amp; AI. My work experience ranges from building
              full-stack web and mobile apps during internships to conducting vulnerability assessments
              and designing secure Active Directory environments professionally.
            </p>
            <p className="aos d4">
              Outside of code I enjoy photography, music, traveling, and spending time with family and friends.
              I believe the best technology is built by people who care as much about the human experience
              as they do about the technical details.
            </p>
            <div className="tags aos d4">
              {traits.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
