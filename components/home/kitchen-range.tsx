import Image from "next/image";
import Link from "next/link";
import { categories, gallery, imagesInCategory } from "@/content/gallery";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function KitchenRange() {
  return (
    <section aria-labelledby="range-title" className="bg-charcoal py-24 text-ivory lg:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="range-title"
            number="05"
            label="The range"
            title="Across the kitchen"
            tone="dark"
            className="lg:col-span-7"
          />
          <p className="max-w-md text-lg leading-relaxed text-mist lg:col-span-4 lg:col-start-9">
            From cold starters and the hot kitchen to plated desserts, cakes and
            sharing platters.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:mt-20 lg:grid-cols-5 lg:gap-x-6">
          {categories.map((category, index) => {
            const cover = gallery.find((image) => image.id === category.cover)!;
            const count = imagesInCategory(category.id).length;
            return (
              <li key={category.id} className={index === 0 ? "col-span-2 sm:col-span-1" : ""}>
                <Link href={`/portfolio#${category.id}`} className="group block">
                  <div
                    className={`relative overflow-hidden rounded-[6px] bg-espresso ${index === 0 ? "aspect-[3/2] sm:aspect-[3/4]" : "aspect-[3/4]"}`}
                  >
                    <Image
                      src={cover.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                  </div>
                  <p className="eyebrow mt-5 text-brass">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-2xl leading-tight transition-colors group-hover:text-brass">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-mist">{count} photographs</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
