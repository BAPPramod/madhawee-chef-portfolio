import type { ReactNode } from "react";
import { certificates, education, languages, skills } from "@/content/credentials";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

function ColumnTitle({ children }: { children: ReactNode }) {
  return <h3 className="eyebrow border-b border-charcoal/15 pb-4 font-sans text-brass-deep">{children}</h3>;
}

export function SkillsCredentials() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-linen py-24 lg:py-36">
      <Container>
        <SectionHeading
          id="skills-title"
          number="06"
          label="Skills & credentials"
          title="What I bring to a kitchen"
        />

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <ColumnTitle>Key skills</ColumnTitle>
            <ol>
              {skills.map((skill, index) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-6 border-b border-charcoal/10 py-5"
                >
                  <span className="eyebrow w-6 shrink-0 text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.65rem] leading-snug">{skill}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-14 lg:col-span-5 lg:col-start-8">
            <div>
              <ColumnTitle>Education</ColumnTitle>
              <ul>
                {education.map((item) => (
                  <li key={item.title} className="border-b border-charcoal/10 py-6">
                    <p className="font-display text-2xl leading-snug">{item.title}</p>
                    <p className="mt-2 text-charcoal/80">{item.institution}</p>
                    <p className="mt-1 text-sm text-stone">
                      {item.location}
                      {item.status ? <> · {item.status}</> : null}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>Certificate</ColumnTitle>
              <ul>
                {certificates.map((item) => (
                  <li key={item.title} className="border-b border-charcoal/10 py-6">
                    <p className="font-display text-2xl leading-snug">{item.title}</p>
                    <p className="mt-2 text-charcoal/80">
                      {item.issuer}, {item.location}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>Languages</ColumnTitle>
              <dl className="grid grid-cols-2 gap-x-8">
                {languages.map((language) => (
                  <div key={language.name} className="border-b border-charcoal/10 py-5">
                    <dt className="font-display text-2xl">{language.name}</dt>
                    <dd className="mt-1 text-sm text-stone">{language.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
