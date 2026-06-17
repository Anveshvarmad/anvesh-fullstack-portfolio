type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </section>
  );
}

export default PageHeader;
