import { useState } from "react";
import profilePhoto from "../assets/profile.jpg";

type AboutProfile = {
  full_name?: string;
  title?: string;
  summary?: string;
  location?: string;
  email?: string;
  linkedin_url?: string;
  github_url?: string;
  resume_url?: string;
} | null;

type AboutPageProps = {
  profile: AboutProfile;
};

const highlights = [
  { value: "4+", label: "Years Experience" },
  { value: "100K+", label: "Daily API Requests" },
  { value: "10M+", label: "Records Searchable" },
  { value: "99.9%", label: "Production Uptime" },
];

const buildAreas = [
  {
    title: "Backend Engineering",
    text: "Designing scalable APIs, microservices, database layers, and production-ready backend workflows.",
  },
  {
    title: "AI Integration",
    text: "Connecting LLMs, RAG pipelines, embeddings, and vector databases with real business applications.",
  },
  {
    title: "Cloud Systems",
    text: "Shipping Dockerized services on AWS, Kubernetes, CI/CD pipelines, and reliable deployment workflows.",
  },
];

const techStack = [
  "Python",
  "Java",
  "FastAPI",
  "Django",
  "React",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "OpenAI",
  "RAG",
  "ChromaDB",
];

export default function AboutPage({ profile }: AboutPageProps) {
  return (
    <main className="about-page">
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <section className="about-hero">
        <div className="about-copy">
          <p className="section-kicker">About Me</p>

          <h1 className="about-title">
            I build backend systems that are fast, reliable, and ready for real users.
          </h1>

          <div className="about-summary-card">
            <p>
              I’m{" "}
              <strong>
                {profile?.full_name || "Anvesh Varma Dantuluri"}
              </strong>
              , a Software Engineer with 4+ years of experience building backend
              systems, APIs, cloud platforms, and AI-integrated applications.
            </p>

            <p>
              I specialize in Python, Java, FastAPI, Django, React,
              PostgreSQL, Docker, Kubernetes, AWS, and LLM-powered systems.
            </p>

            <p>
              My work focuses on performance, scalability, clean architecture,
              and production reliability across fintech and e-commerce platforms.
            </p>

            <p>
              Currently pursuing my M.S. in Computer Engineering at New York
              University, I’m targeting backend, software engineering, and AI
              systems roles.
            </p>
          </div>

          <div className="about-actions">
            <a
              className="primary-btn"
              href="/Anvesh_Dantuluri_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            <a className="secondary-btn" href="/contact">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="about-profile-panel">
          <div className="profile-photo-wrap">
            <img
              src="/anvesh-profile.jpg"
              alt="Anvesh Varma Dantuluri"
              className="profile-photo"
            />
            <div className="profile-ring"></div>
          </div>

          <div className="profile-mini-card">
            <h2>{profile?.full_name || "Anvesh Varma Dantuluri"}</h2>
            <p>
              {profile?.title ||
                "Software Engineer · Backend Systems · AI Integration"}
            </p>
            <span>{profile?.location || "Edison, NJ"}</span>
          </div>

          <div className="availability-pill">
            <span></span>
            Available for Software Engineering roles
          </div>
        </aside>
      </section>

      <section className="about-stats-grid">
        {highlights.map((item, index) => (
          <article
            className="about-stat-card"
            style={{ animationDelay: `${index * 0.12}s` }}
            key={item.label}
          >
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="about-dynamic-grid">
        <div className="about-build-card">
          <p className="section-kicker">What I Build</p>

          <div className="build-list">
            {buildAreas.map((area) => (
              <article className="build-item" key={area.title}>
                <div className="build-icon">{area.title.slice(0, 2)}</div>

                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="tech-orbit-card">
          <p className="section-kicker">Core Stack</p>

          <div className="tech-cloud">
            {techStack.map((tech, index) => (
              <span
                style={{ animationDelay: `${index * 0.08}s` }}
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
