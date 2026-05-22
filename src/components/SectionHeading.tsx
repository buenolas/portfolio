type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
