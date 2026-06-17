import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type Profile = {
  full_name?: string | null;
  title?: string | null;
  email?: string | null;
  github_url?: string | null;
  linkedin_url?: string | null;
} | null;

type LayoutProps = {
  profile: Profile;
  loading?: boolean;
  error?: string;
  children: ReactNode;
};

const githubUrl = "https://github.com/Anveshvarmad";
const linkedinUrl = "https://www.linkedin.com/in/anvesh-varma-2b0747249";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Education", path: "/education" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.83 10.83 0 0 1 12 6.04c.97 0 1.95.13 2.86.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.77 1.06.77 2.14v3.14c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

export default function Layout({ profile, loading, error, children }: LayoutProps) {
  return (
    <div className="app-shell">
      <header className="site-header av-header-fix">
        <NavLink to="/" className="brand">
          <span className="brand-mark">AVD</span>
          <span>{profile?.full_name || "Anvesh Varma Dantuluri"}</span>
        </NavLink>

        <nav className="nav-links av-nav-fix">
          {navItems.map((item) => (
            <NavLink className="nav-link" to={item.path} key={item.path}>
              {item.label}
            </NavLink>
          ))}

          <a className="av-social-btn av-github-btn" href={githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon />
            <span>GitHub</span>
          </a>

          <a className="av-social-btn av-linkedin-btn" href={linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </nav>
      </header>

      {loading && <div className="status-bar">Loading portfolio data...</div>}
      {error && <div className="status-bar error">{error}</div>}

      {children}

      <div className="av-floating-socials">
        <a className="av-floating-card av-floating-github" href={githubUrl} target="_blank" rel="noreferrer">
          <span className="av-floating-icon">
            <GitHubIcon />
          </span>
          <span className="av-floating-text">
            <strong>GitHub</strong>
            <small>@Anveshvarmad</small>
          </span>
        </a>

        <a className="av-floating-card av-floating-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
          <span className="av-floating-icon">
            <LinkedInIcon />
          </span>
          <span className="av-floating-text">
            <strong>LinkedIn</strong>
            <small>Anvesh Varma</small>
          </span>
        </a>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Anvesh Varma Dantuluri</span>
        <span className="av-footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
      </footer>
    </div>
  );
}
