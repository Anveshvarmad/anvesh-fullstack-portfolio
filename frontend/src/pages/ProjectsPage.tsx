type ProjectItem = {
  id?: number;
  title?: string | null;
  name?: string | null;
  description?: string | null;
  technologies?: string[] | string | null;
  tech_stack?: string[] | string | null;
  bullets?: string[] | null;
  highlights?: string[] | null;
  github_url?: string | null;
  live_url?: string | null;
};

type ProjectsPageProps = {
  projects?: ProjectItem[];
};

const additionalProjects: ProjectItem[] = [
  {
    title: "Real-Time Transaction Monitoring System",
    technologies: ["Python", "AWS Lambda", "CloudWatch"],
    bullets: [
      "Architected a Python-based monitoring engine that evaluated 10K+ sample transactions against 20+ anomaly rules and flagged suspicious events across 3+ alert categories.",
      "Connected AWS Lambda and CloudWatch alerts so high-risk events triggered notifications in under 30 seconds, reducing monitoring overhead by 40%.",
      "Modularized rule logic into reusable components, shortening false-positive triage time by 25% and simplifying long-term maintenance.",
    ],
  },
  {
    title: "Taylrd",
    technologies: ["Python", "Flask", "LaTeX", "LLM Inference"],
    bullets: [
      "Designed a Flask-based web application for resume and cover letter generation with LaTeX PDF output.",
      "Optimized ATS keyword matching workflows, reducing resume customization effort by 90%.",
      "Enabled offline language model inference to achieve 95%+ keyword match accuracy with low latency.",
    ],
  },
  {
    title: "AI Deep Learning Library",
    technologies: ["Python", "NumPy", "Autodiff", "Transformers", "GANs"],
    bullets: [
      "Built a deep learning framework from scratch with reverse-mode autodiff and a PyTorch-like API.",
      "Engineered tensors and computational graphs enabling vectorized forward and backward operations.",
      "Trained transformer and GAN models while validating gradients through numerical checks and visualization.",
    ],
  },
  {
    title: "Adversarial Robustness Analysis",
    technologies: ["PyTorch", "ImageNet", "ResNet-34", "DenseNet-121"],
    bullets: [
      "Implemented FGSM, PGD, and patch-based attacks reducing ResNet-34 Top-1 accuracy to 0.00%.",
      "Evaluated cross-model transferability where patch attacks dropped DenseNet-121 accuracy by 44.8%.",
      "Tuned attack parameters and analyzed Top-1/Top-5 degradation trends to assess model robustness limits.",
    ],
  },
  {
    title: "SaaS Automation Builder",
    technologies: ["Next.js", "TypeScript", "Prisma", "NeonDB", "Vercel"],
    bullets: [
      "Architected a multi-tenant SaaS automation platform with custom integration flows and a React-based UI.",
      "Deployed CI/CD pipelines on Vercel with automated testing, maintaining 95% test coverage.",
      "Increased client productivity through scalable automation workflows supporting B2C SaaS use cases.",
    ],
  },
  {
    title: "Soundmix",
    technologies: ["React", "Flask", "Firebase"],
    bullets: [
      "Created a full-stack music web application using React and Flask, supporting 500+ users with Firebase.",
      "Applied emotion-based playlist personalization to boost user engagement and session duration by 30%.",
      "Scaled backend APIs and social sharing features to handle 2x traffic growth without latency impact.",
    ],
  },
  {
    title: "Distributed Caching System",
    technologies: ["Java", "Python", "Redis", "Docker", "Kubernetes"],
    bullets: [
      "Engineered a distributed caching layer with replication and invalidation across 5+ nodes.",
      "Served high-throughput cache operations at 10K+ requests/sec using REST APIs under load.",
      "Orchestrated containerized services with Kubernetes to maintain 99.9% availability.",
    ],
  },
];

function getProjectTitle(project: ProjectItem) {
  return project.title || project.name || "Project";
}

function normalizeTech(project: ProjectItem) {
  const rawTech = project.technologies || project.tech_stack || [];

  if (Array.isArray(rawTech)) {
    return rawTech.filter(Boolean);
  }

  if (typeof rawTech === "string") {
    return rawTech
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeBullets(project: ProjectItem) {
  if (Array.isArray(project.bullets)) return project.bullets.filter(Boolean);
  if (Array.isArray(project.highlights)) return project.highlights.filter(Boolean);

  if (project.description) {
    return [project.description];
  }

  return [];
}

function mergeProjects(projects: ProjectItem[]) {
  const combined = [...projects, ...additionalProjects];

  return combined.filter((project, index, array) => {
    const currentTitle = getProjectTitle(project).toLowerCase();

    return (
      array.findIndex(
        (item) => getProjectTitle(item).toLowerCase() === currentTitle
      ) === index
    );
  });
}

export default function ProjectsPage({ projects = [] }: ProjectsPageProps) {
  const safeProjects = Array.isArray(projects) ? projects : [];
  const mergedProjects = mergeProjects(safeProjects);

  return (
    <main className="projects-v2-page">
      <div className="projects-v2-bg"></div>
      <div className="projects-v2-glow projects-v2-glow-one"></div>
      <div className="projects-v2-glow projects-v2-glow-two"></div>

      <section className="projects-v2-hero">
        <p className="section-kicker">Projects</p>

        <h1 className="projects-v2-title">
          Systems, AI tools, and full-stack products I have built.
        </h1>

        <p className="projects-v2-subtitle">
          A collection of backend, AI, cloud, distributed systems, and full-stack
          projects focused on performance, automation, reliability, and real-world
          engineering impact.
        </p>
      </section>

      <section className="projects-v2-grid">
        {mergedProjects.map((project, index) => {
          const title = getProjectTitle(project);
          const tech = normalizeTech(project);
          const bullets = normalizeBullets(project);

          return (
            <article
              className="projects-v2-card"
              style={{ animationDelay: `${index * 0.08}s` }}
              key={`${title}-${index}`}
            >
              <div className="projects-v2-card-top">
                <div>
                  <p className="projects-v2-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2>{title}</h2>
                </div>

                <div className="projects-v2-status">Built</div>
              </div>

              {tech.length > 0 && (
                <div className="projects-v2-tech">
                  {tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}

              {bullets.length > 0 && (
                <ul className="projects-v2-bullets">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {(project.github_url || project.live_url) && (
                <div className="projects-v2-links">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}

                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
