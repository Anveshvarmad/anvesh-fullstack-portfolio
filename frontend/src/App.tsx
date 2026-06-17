import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getPortfolioSnapshot } from './api/client';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import type { PortfolioSnapshot } from './types';

const emptySnapshot: PortfolioSnapshot = {
  profile: null,
  education: [],
  experience: [],
  projects: [],
  skills: [],
};

function App() {
  const [data, setData] = useState<PortfolioSnapshot>(emptySnapshot);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPortfolioSnapshot()
      .then((snapshot) => {
        setData(snapshot);
        setError('');
      })
      .catch(() => {
        setError('Backend API is not connected yet. Start Django on port 8000 and refresh this page.');
      })
      .finally(() => setLoading(false));
  }, []);

  const featuredProjects = useMemo(() => data.projects.filter((project) => project.featured), [data.projects]);

  return (
    <Layout profile={data.profile} loading={loading} error={error}>
      <Routes>
        <Route path="/" element={<HomePage data={data} featuredProjects={featuredProjects} />} />
        <Route path="/about" element={<AboutPage profile={data.profile} />} />
        <Route path="/education" element={<EducationPage education={data.education} />} />
        <Route path="/experience" element={<ExperiencePage experience={data.experience} />} />
        <Route path="/projects" element={<ProjectsPage projects={data.projects} />} />
        <Route path="/skills" element={<SkillsPage skills={data.skills} />} />
        <Route path="/contact" element={<ContactPage profile={data.profile} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
