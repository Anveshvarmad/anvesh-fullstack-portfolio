import ChipList from './ChipList';

type Props = {
  title: string;
  subtitle: string;
  meta: string;
  summary?: string;
  bullets?: string[];
  tags?: string[];
};

function TimelineCard({ title, subtitle, meta, summary, bullets = [], tags = [] }: Props) {
  return (
    <article className="timeline-card">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-heading">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <span>{meta}</span>
        </div>
        {summary && <p className="muted-text">{summary}</p>}
        {bullets.length > 0 && (
          <ul className="bullet-list">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {tags.length > 0 && <ChipList items={tags} />}
      </div>
    </article>
  );
}

export default TimelineCard;
