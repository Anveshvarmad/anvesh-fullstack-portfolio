import PageHeader from '../components/PageHeader';
import TimelineCard from '../components/TimelineCard';
import type { Experience } from '../types';

type Props = {
  experience: Experience[];
};

function ExperiencePage({ experience }: Props) {
  return (
    <>
      <PageHeader
        eyebrow="Work experience"
        title="4+ years of backend, API, database, cloud, and AI-integrated development."
        description="Experience content is stored in Django models and served through REST endpoints."
      />

      <section className="content-section timeline-list">
        {experience.map((item) => (
          <TimelineCard
            key={item.id}
            title={item.role}
            subtitle={`${item.company} · ${item.location}`}
            meta={`${item.start_date} — ${item.end_date}`}
            summary={item.summary}
            bullets={item.bullets}
            tags={item.tech_stack}
          />
        ))}
      </section>
    </>
  );
}

export default ExperiencePage;
