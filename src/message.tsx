import heroVid from './assets/Hero.webm'
import CV from './cv'

const featuredProjects = [
  {
    title: 'Global Service Desk',
    description: 'Supported users by phone and chat, taking ownership of incidents from first contact through troubleshooting, documentation, or escalation.',
    stack: ['ServiceNow', 'Service Manager SM9', 'ITIL v4'],
  },
  {
    title: 'CargoWise Helpdesk',
    description: 'Managed user-submitted tickets, user accounts, system errors, and maintenance requests while helping improve support workflows.',
    stack: ['CargoWise', 'Zoho Desk', 'Knowledge Base'],
  },
  {
    title: 'Remote User Support',
    description: 'Troubleshot access, connectivity, application, email, meeting, and peripheral issues remotely; documented work and routed complex cases to resolver groups.',
    stack: ['AnyDesk', 'LogMeIn', 'Microsoft 365', 'Active Directory'],
  },
]

const stack = ['L1–L2 Support', 'Ticket Ownership', 'Remote Troubleshooting', 'ITIL']
const neonHighlight = new Set(['L1–L2 Support', 'Remote Troubleshooting', 'ITIL'])

const contactLinks = [
  { label: 'Email', value: 'montalbanbernardallen@gmail.com', href: 'mailto:montalbanbernardallen@gmail.com' },
  { label: 'Phone', value: '+63 963 328 7824', href: 'tel:+639633287824' },
  { label: 'LinkedIn', value: 'linkedin.com/in/bernard-montalban', href: 'https://www.linkedin.com/in/bernard-montalban-9194a2217/' },
]

function Message() {
  return (
    <main className="portfolio">
      {/* Nav */}
      <header className="nav">
        <a className="nav-brand" href="#top">Bernard Montalban</a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Support</a>
          <a href="#cv">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-row">
          <div className="hero-portrait-wrap">
            <video className="hero-portrait" src={heroVid} autoPlay loop muted playsInline />
            <span className="hero-status"><span className="status-dot" />Open to MSP roles</span>
          </div>
          <div className="hero-text">
            <p className="label">IT Support | Service Desk</p>
            <h1>I keep teams <span className="gradient-text">working</span> with reliable IT support.</h1>
            <p className="hero-sub">
              Service desk professional with around three years of experience supporting users, resolving L1–L2 issues, managing tickets, and troubleshooting remotely. Ready to bring a calm, customer-first approach to an MSP support team.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">Support experience</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section" id="stack">
        <p className="label">Core strengths</p>
        <ul className="stack-list">
          {stack.map((item) => (
            <li key={item} className={neonHighlight.has(item) ? 'neon' : ''}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <p className="label">Support experience</p>
        <h2>Practical user support across service desk and helpdesk environments.</h2>
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <article className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tag-list">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CV */}
      <CV />

      {/* About */}
      <section className="section" id="about">
        <p className="label">About</p>
        <div className="about-grid">
          <div className="about-card about-card--accent">
            <p>
              I’m an IT support professional with experience in global service desk and CargoWise helpdesk work. I enjoy making technical issues understandable, restoring users’ access, and keeping people productive.
            </p>
          </div>
          <div className="about-card">
            <p>
              My approach is to listen, troubleshoot methodically, keep the user informed, document each interaction, and escalate with clear context when an issue needs another resolver group.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--contact" id="contact">
        <p className="label">Contact</p>
        <h2>Let’s keep your users productive.</h2>
        <p className="contact-sub">
          Open to entry-level IT support and service desk opportunities with managed service providers.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-item"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">{link.value}</span>
            </a>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:montalbanbernardallen@gmail.com">Send email</a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/bernard-montalban-9194a2217/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  )
}

export default Message