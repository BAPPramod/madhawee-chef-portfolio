type SectionHeadingProps = {
  number?: string;
  label: string;
  title?: string;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function Eyebrow({
  number,
  label,
  tone = "light",
}: Pick<SectionHeadingProps, "number" | "label" | "tone">) {
  const accent = tone === "dark" ? "text-brass" : "text-brass-deep";
  return (
    <p className={`eyebrow flex items-center gap-4 ${accent}`}>
      <span aria-hidden className="h-px w-10 bg-current" />
      {number ? <span>{number}</span> : null}
      {number ? <span aria-hidden>—</span> : null}
      <span>{label}</span>
    </p>
  );
}

export function SectionHeading({
  number,
  label,
  title,
  id,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Eyebrow number={number} label={label} tone={tone} />
      {title ? (
        <h2
          id={id}
          className="mt-6 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.01em]"
        >
          {title}
        </h2>
      ) : null}
    </div>
  );
}
