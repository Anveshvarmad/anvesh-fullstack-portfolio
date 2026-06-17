export type Profile = {
  id: number;
  full_name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin_url: string;
  github_url: string;
  resume_url: string;
  summary: string;
  availability: string;
};

export type Education = {
  id: number;
  school: string;
  degree: string;
  location: string;
  start_date: string;
  end_date: string;
  coursework: string[];
  sort_order: number;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
  summary: string;
  bullets: string[];
  tech_stack: string[];
  sort_order: number;
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech_stack: string[];
  github_url: string;
  live_url: string;
  featured: boolean;
  sort_order: number;
};

export type SkillCategory = {
  id: number;
  name: string;
  skills: string[];
  sort_order: number;
};

export type PortfolioSnapshot = {
  profile: Profile | null;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
};

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
