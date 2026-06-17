type SkillGroup = {
  id?: number;
  name?: string | null;
  category?: string | null;
  title?: string | null;
  skills?: string[] | string | null;
  items?: string[] | string | null;
};

type SkillsPageProps = {
  skills?: SkillGroup[];
};

const fallbackSkillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    title: "Backend & APIs",
    skills: ["Django", "FastAPI", "Flask", "Node.js", "REST APIs", "GraphQL", "Spring Boot"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "AngularJS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "SQLite", "Redis", "ChromaDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD"],
  },
  {
    title: "AI & LLMs",
    skills: ["OpenAI APIs", "Claude", "Prompt Engineering", "RAG", "Embeddings", "Vector Databases"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Bitbucket", "JIRA", "Confluence", "Agile", "TDD"],
  },
];

const globeSkills = [
  "Python",
  "Java",
  "FastAPI",
  "Django",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "GraphQL",
  "Spring Boot",
  "MongoDB",
  "OpenAI",
  "RAG",
  "Embeddings",
  "ChromaDB",
  "CI/CD",
  "Jenkins",
  "Terraform",
  "Flask",
  "Node.js",
  "SQL",
  "Git",
  "PyTorch",
];

function parseSkillList(value: string[] | string | null | undefined) {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeBackendSkills(skills: SkillGroup[] | undefined) {
  if (!Array.isArray(skills) || skills.length === 0) {
    return fallbackSkillGroups;
  }

  const normalized = skills
    .map((group) => {
      const title = group.title || group.name || group.category || "Skills";
      const skillList = parseSkillList(group.skills || group.items);

      return {
        title,
        skills: skillList,
      };
    })
    .filter((group) => group.skills.length > 0);

  return normalized.length > 0 ? normalized : fallbackSkillGroups;
}

function getUniqueSkills(groups: { title: string; skills: string[] }[]) {
  const merged = [...globeSkills, ...groups.flatMap((group) => group.skills)];
  return Array.from(new Set(merged)).slice(0, 30);
}

function getGlobePosition(index: number, total: number) {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const x = Math.cos(theta) * Math.sin(phi);
  const y = Math.sin(theta) * Math.sin(phi);
  const z = Math.cos(phi);

  return {
    left: `${50 + x * 38}%`,
    top: `${50 + y * 38}%`,
    transform: `translate(-50%, -50%) scale(${0.72 + (z + 1) * 0.22})`,
    opacity: 0.45 + (z + 1) * 0.28,
    zIndex: Math.round((z + 1) * 100),
  };
}

export default function SkillsPage({ skills }: SkillsPageProps) {
  const skillGroups = normalizeBackendSkills(skills);
  const skillCloud = getUniqueSkills(skillGroups);

  return (
    <main className="skills-v2-page">
      <div className="skills-v2-grid-bg"></div>
      <div className="skills-v2-glow skills-v2-glow-one"></div>
      <div className="skills-v2-glow skills-v2-glow-two"></div>

      <section className="skills-v2-hero">
        <div className="skills-v2-copy">
          <p className="section-kicker">Skills</p>

          <h1 className="skills-v2-title">
            My Technical Expertise
          </h1>

          <p className="skills-v2-subtitle">
            My skill set spans backend engineering, full-stack development,
            cloud infrastructure, databases, DevOps, and AI-integrated software systems.
          </p>
        </div>

        <div className="skills-v2-globe-panel">
          <div className="skills-v2-globe-shell">
            <div className="skills-v2-globe-core"></div>
            <div className="skills-v2-ring skills-v2-ring-one"></div>
            <div className="skills-v2-ring skills-v2-ring-two"></div>
            <div className="skills-v2-ring skills-v2-ring-three"></div>

            <div className="skills-v2-globe">
              {skillCloud.map((skill, index) => {
                const position = getGlobePosition(index, skillCloud.length);

                return (
                  <span
                    className="skills-v2-globe-tag"
                    style={position}
                    key={`${skill}-${index}`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="skills-v2-globe-caption">
            <span></span>
            Interactive engineering stack
          </div>
        </div>
      </section>

      <section className="skills-v2-category-grid">
        {skillGroups.map((group, index) => (
          <article
            className="skills-v2-category-card"
            style={{ animationDelay: `${index * 0.08}s` }}
            key={group.title}
          >
            <div className="skills-v2-category-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{group.title}</h2>
            </div>

            <div className="skills-v2-chip-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
