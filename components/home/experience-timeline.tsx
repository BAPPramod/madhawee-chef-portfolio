import { experience } from "@/content/experience";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="experience-title"
          number="04"
          label="Experience"
          title="Kitchens"
        />

        <ol className="mt-16 border-b border-charcoal/15 lg:mt-24">
          {experience.map((job) => (
            <li
              key={`${job.employer}-${job.startDate}`}
              className="reveal grid gap-6 border-t border-charcoal/15 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
            >
              <div className="lg:col-span-3">
                <p className="eyebrow text-brass-deep">
                  <time dateTime={job.startDate}>{job.period}</time>
                </p>
                <p className="mt-2 text-sm text-stone">{job.location}</p>
              </div>

              <div className="lg:col-span-9">
                <h3 className="text-[clamp(2rem,3.4vw,2.9rem)] leading-tight">
                  {job.employer}
                </h3>
                <p className="eyebrow mt-3 text-stone">{job.role}</p>
                {job.note ? (
                  <p className="mt-5 max-w-2xl font-display text-xl italic text-charcoal/80">
                    {job.note}
                  </p>
                ) : null}

                <ul className="mt-6 max-w-3xl space-y-3 text-[1.05rem] leading-relaxed text-charcoal/85">
                  {job.summary.map((line) => (
                    <li key={line} className="flex gap-4">
                      <span aria-hidden className="mt-[0.8em] h-px w-4 shrink-0 bg-brass" />
                      {line}
                    </li>
                  ))}
                </ul>

                {job.dishGroups ? (
                  <div className="mt-10 grid gap-8 border-t border-charcoal/10 pt-8 sm:grid-cols-2 xl:grid-cols-4">
                    {job.dishGroups.map((group) => (
                      <div key={group.label}>
                        <h4 className="eyebrow text-brass-deep">{group.label}</h4>
                        <ul className="mt-4 space-y-1.5 text-[0.95rem] text-charcoal/80">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
