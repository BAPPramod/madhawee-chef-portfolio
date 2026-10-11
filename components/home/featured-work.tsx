import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, featuredImages } from "@/content/gallery";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

// A compact editorial mosaic: one lead image followed by balanced rows.
const slots = [
  {
    frame: "lg:col-span-6",
    aspect: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    frame: "lg:col-span-6",
    aspect: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw",
  },
  ...Array.from({ length: 6 }, () => ({
    frame: "lg:col-span-4",
    aspect: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  })),
];

const categoryTitle = Object.fromEntries(categories.map((c) => [c.id, c.title]));

export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="pb-28 lg:pb-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="work-title"
            number="02"
            label="Selected work"
            title="A selection of plates"
            className="lg:col-span-7"
          />
          <p className="max-w-md text-lg leading-relaxed text-stone lg:col-span-4 lg:col-start-9">
          Starters, hot kitchen dishes, desserts, and sushi. Every dish shown here was prepared by me.
          </p>
        </div>

        <div className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          {featuredImages.map((image, index) => {
            const slot = slots[index % slots.length];
            return (
              <figure key={image.id} className={`reveal ${slot.frame}`}>
                <div className={`relative overflow-hidden rounded-[6px] bg-linen ${slot.aspect}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={slot.sizes}
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline gap-4">
                  <span className="eyebrow text-brass-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-2xl leading-tight">
                      {image.title}
                    </span>
                    <span className="mt-1 block text-sm text-stone">
                      {categoryTitle[image.category]}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-20 flex justify-end border-t border-charcoal/15 pt-8 lg:mt-28">
          <Link
            href="/portfolio"
            className="group eyebrow inline-flex min-h-11 items-center gap-3 text-charcoal transition-colors hover:text-brass-deep"
          >
            View the full portfolio
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
