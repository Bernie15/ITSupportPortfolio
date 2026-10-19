const experience = [
  {
    role: 'Helpdesk Officer',
    company: 'Offshore Business Processing',
    period: 'May 2024 – October 2026',
    highlights: [
      'Managed and resolved user-submitted tickets through dedicated support portals, documenting interactions and following issues through to resolution.',
      'Created user IDs and managed login access; troubleshot system errors and maintenance issues.',
      'Supported workflow improvements and user experience for CargoWise users.',
    ],
  },
  {
    role: 'Service Desk Analyst',
    company: 'DXC Technology',
    period: 'March 2022 – August 2023',
    highlights: [
      'Provided phone and chat support for password resets, account unlocks, MFA/2FA login failures, and other user concerns.',
      'Used remote support tools to troubleshoot network and VPN access, shared drives, USB devices, applications, browsers, Outlook, Teams, printers, scanners, displays, and docking stations.',
      'Owned and documented support interactions, maintained ticket quality, and escalated issues to the appropriate resolver groups.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'Marinduque State College',
    period: '2015 – 2020',
  },
]

const technicalSkills = {
  'Service Management': ['ServiceNow', 'Zoho Desk', 'Service Manager SM9', 'Ticket management', 'Knowledge base'],
  'Identity & Access': ['Active Directory', 'Entra ID', 'Account unlocks', 'Password resets', 'MFA / 2FA'],
  'Remote Support': ['AnyDesk', 'LogMeIn', 'Citrix', 'Amazon WorkSpaces'],
  'Productivity & Business Apps': ['Microsoft 365', 'Outlook', 'Teams', 'CargoWise', 'Salesforce Veeva CRM'],
  'Endpoint & Connectivity': ['VPN', 'Shared drives', 'Printers / scanners', 'USB devices', 'Displays / docking stations'],
  'Support Methods': ['ITIL v4', '5 Whys', 'Pareto analysis', 'Ishikawa / Fishbone'],
}

const supportHighlights = [
  {
    title: 'User Access & Account Support',
    stack: ['Active Directory', 'Entra ID', 'MFA / 2FA'],
    bullets: [
      'Handled password resets, account unlocks, login access, and multi-factor authentication issues.',
      'Managed user data and account access in line with service desk procedures.',
    ],
  },
  {
    title: 'Remote Troubleshooting',
    stack: ['AnyDesk', 'LogMeIn', 'Citrix', 'Amazon WorkSpaces'],
    bullets: [
      'Provided remote assistance for network and VPN access, shared drives, application errors, email, meeting tools, and endpoint peripherals.',
      'Kept users informed, recorded troubleshooting steps, and escalated issues that required another resolver group.',
    ],
  },
  {
    title: 'Ticket & Knowledge Management',
    stack: ['ServiceNow', 'Zoho Desk', 'Service Manager SM9', 'CargoWise'],
    bullets: [
      'Managed support requests through ticketing portals, taking ownership and documenting interactions in real time.',
      'Maintained knowledge base content in Zoho Desk and contributed to workflow improvements.',
    ],
  },
]

const serviceDeskStrengths = [
  'Methodical troubleshooting, root-cause analysis, and practical issue resolution.',
  'Clear, patient communication with users over phone, chat, and remote support sessions.',
  'Ticket ownership, timely documentation, and appropriate escalation to resolver groups.',
  'Familiarity with ITIL practices and continuous improvement methods.',
]

const certifications = [
  'ITIL v4 Practitioner',
  'Lean Six Sigma – Yellow Belt',
  'CargoWise Certified Professional',
  'Udemy CompTIA Security+ SY0-601 Lab Course with Simulations',  
  'Udemy IT Helpdesk| Service Desk Support | IT Support | Masterclass(L1/L2)',
]

function CV() {
  return (
    <section className="section cv-section" id="cv">
      <p className="label">Experience</p>
      <h2>Service desk experience, tools &amp; education.</h2>
      <p className="cv-intro">
        IT support professional with around three years across global service desk and helpdesk roles. Experienced in L1–L2 user support, ticket management, remote troubleshooting, access issues, and business applications — ready to bring a dependable, customer-focused approach to an MSP.
      </p>

      <div className="cv-block">
        <h3 className="cv-block-title">Technical Skills</h3>
        <div className="cv-skills-grid">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div className="cv-skill-group" key={category}>
              <span className="cv-skill-cat">{category}</span>
              <ul className="tag-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="cv-block">
        <h3 className="cv-block-title">Support Highlights</h3>
        <div className="cv-timeline">
          {supportHighlights.map((highlight) => (
            <article className="cv-entry" key={highlight.title}>
              <div className="cv-entry-header">
                <h3>{highlight.title}</h3>
              </div>
              <ul className="tag-list" style={{ marginBottom: 12 }}>
                {highlight.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <ul className="cv-bullets">
                {highlight.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="cv-block">
        <h3 className="cv-block-title">Professional Experience</h3>
        <div className="cv-timeline">
          {experience.map((job) => (
            <article className="cv-entry" key={job.role}>
              <div className="cv-entry-header">
                <h3>{job.role}</h3>
                <span className="cv-period">{job.period}</span>
              </div>
              <p className="cv-company">{job.company}</p>
              <ul className="cv-bullets">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="cv-block">
        <h3 className="cv-block-title">Service Desk Strengths</h3>
        <ul className="cv-bullets cv-bullets--highlight">
          {serviceDeskStrengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="cv-block">
        <h3 className="cv-block-title">Certifications</h3>
        <ul className="cv-cert-list">
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </div>

      <div className="cv-block">
        <h3 className="cv-block-title">Education</h3>
        {education.map((item) => (
          <div className="cv-entry" key={item.degree}>
            <div className="cv-entry-header">
              <h3>{item.degree}</h3>
              <span className="cv-period">{item.period}</span>
            </div>
            <p className="cv-company">{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CV
