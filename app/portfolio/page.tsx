import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { Eyebrow } from "@/components/section-heading";
import { categories, imagesInCategory, visibleGallery } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Photographs of dishes prepared by chef Madhawee Amarasinghe — starters and salads, hot kitchen, plated desserts, cakes and pastry, sushi and platters.",
  alternates: { canonical: "/portfolio" },
};

const sections = categories.map((category) => ({
  ...category,
  images: imagesInCategory(category.id),
}));

export default function PortfolioPage() {
  return (
    <>
      <section aria-labelledby="portfolio-title" className="bg-charcoal pt-20 pb-16 text-ivory lg:pt-32 lg:pb-20">
        <Container>
          <Eyebrow label="Portfolio" tone="dark" />
          <h1
            id="portfolio-title"
            className="mt-7 text-[clamp(3.4rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em]"
          >
            The <span className="italic text-brass">work</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
            {visibleGallery.length} photographs of dishes prepared by me,
            arranged by section of the kitchen. Select any photograph to view it
            larger.
          </p>

          <nav aria-label="Portfolio sections" className="mt-14 border-t border-white/10 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="eyebrow inline-flex min-h-11 items-center gap-2 text-ivory/80 transition-colors hover:text-brass"
                  >
                    {section.title}
                    <span className="text-mist">({section.images.length})</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <PortfolioGallery sections={sections} />

      <Container>
        <p className="border-t border-charcoal/15 py-10 text-sm text-stone">
          Photographs retouched for presentation.
        </p>
      </Container>
    </>
  );
}
