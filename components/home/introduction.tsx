import { facts, profile } from "@/content/profile";
import { Container } from "../container";
import { Eyebrow } from "../section-heading";

export function Introduction() {
  return (
    <section aria-label="Introduction" className="py-24 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow number="01" label="Introduction" />
          </div>
          <p className="reveal font-display text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.18] lg:col-span-9">
            {profile.summary}
          </p>
        </div>

        <dl className="mt-20 grid grid-cols-1 border-y border-charcoal/15 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.value}
              className="flex min-h-48 flex-col border-b border-charcoal/15 py-8 last:border-b-0 sm:px-8 sm:odd:border-r sm:[&:nth-child(3)]:border-b-0 lg:min-h-52 lg:border-r lg:border-b-0 lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <dt className="order-2 mt-auto border-t border-charcoal/10 pt-4 eyebrow text-stone">
                {fact.label}
              </dt>
              <dd className="order-1 max-w-[14rem] font-display text-[clamp(2rem,3vw,2.75rem)] leading-[1.05]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
