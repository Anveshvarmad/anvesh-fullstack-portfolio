const educationItems = [
  {
    school: "New York University",
    degree: "Master of Science, Computer Engineering",
    location: "New York, USA",
    period: "Aug 2024 — May 2026",
    badge: "Graduate Program",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Big Data",
      "Advanced Python for Data Science",
      "Computer System Architecture",
      "Applied Matrix Theory",
      "Systems Engineering",
    ],
    highlights: [
      "Migrated legacy Python CGI scripts to a Django web application for a faculty project.",
      "Deployed the Django application on NYU’s workshop server using Apache with mod_wsgi.",
      "Improved maintainability and performance by modernizing an academic web workflow.",
    ],
  },
  {
    school: "GITAM University",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    location: "Visakhapatnam, India",
    period: "Aug 2020 — Apr 2024",
    badge: "Undergraduate Program",
    coursework: [
      "Design and Analysis of Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Data Structures",
      "Machine Learning",
      "Natural Language Processing",
      "Probability and Statistics",
      "Discrete Mathematics",
    ],
    certifications: [
      "Data Analysis with Python",
      "Python Data Structures",
      "Google Data Analytics",
      "Data Visualization with Tableau",
    ],
    highlights: [
      "Secured a silver medal in a hackathon conducted by IIT Bombay.",
    ],
  },
];

const focusCards = [
  {
    number: "01",
    title: "Systems Foundation",
    text: "Operating systems, databases, architecture, and systems engineering shaped my backend engineering foundation.",
  },
  {
    number: "02",
    title: "Algorithms & Data",
    text: "Data structures, algorithms, probability, and discrete mathematics help me solve scalable engineering problems.",
  },
  {
    number: "03",
    title: "AI & Intelligence",
    text: "Machine learning, deep learning, NLP, and big data coursework support my AI systems and RAG work.",
  },
];

export default function EducationPage() {
  return (
    <main className="education-v2-page">
      <div className="education-v2-glow education-v2-glow-one"></div>
      <div className="education-v2-glow education-v2-glow-two"></div>

      <section className="education-v2-hero">
        <p className="section-kicker">Education</p>

        <h1 className="education-v2-title">
          Academic foundation behind my engineering work.
        </h1>

        <p className="education-v2-subtitle">
          My education combines computer engineering, algorithms, operating
          systems, databases, machine learning, deep learning, and software
          architecture — the foundation behind the backend and AI systems I build.
        </p>
      </section>

      <section className="education-v2-timeline">
        <div className="education-v2-line"></div>

        {educationItems.map((item, index) => (
          <article
            className="education-v2-card"
            style={{ animationDelay: `${index * 0.18}s` }}
            key={item.school}
          >
            <div className="education-v2-marker">
              <span>{index + 1}</span>
            </div>

            <div className="education-v2-card-body">
              <div className="education-v2-card-header">
                <div className="education-v2-main-info">
                  <p className="education-v2-period">{item.period}</p>
                  <h2>{item.school}</h2>
                  <h3>{item.degree}</h3>
                </div>

                <div className="education-v2-side-info">
                  <span>{item.badge}</span>
                  <strong>{item.location}</strong>
                </div>
              </div>

              <div className="education-v2-section">
                <p className="education-v2-section-title">Key Coursework</p>

                <div className="education-v2-course-grid">
                  {item.coursework.map((course) => (
                    <span key={course}>{course}</span>
                  ))}
                </div>
              </div>

              {item.certifications && (
                <div className="education-v2-section education-v2-cert-section">
                  <p className="education-v2-section-title">Certifications</p>

                  <ul className="education-v2-list">
                    {item.certifications.map((certification) => (
                      <li key={certification}>{certification}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="education-v2-section education-v2-highlight-section">
                <p className="education-v2-section-title">Highlights</p>

                <ul className="education-v2-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="education-v2-focus-grid">
        {focusCards.map((card) => (
          <article key={card.title}>
            <span>{card.number}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
