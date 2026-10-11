import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section-heading";

export default function NotFound() {
  return (
    <section className="bg-charcoal py-32 text-ivory lg:py-44">
      <Container>
        <Eyebrow label="404" tone="dark" />
        <h1 className="mt-7 text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
          This page is <span className="italic text-brass">not on the menu</span>
        </h1>
        <Link
          href="/"
          className="eyebrow mt-12 inline-flex min-h-12 items-center gap-3 bg-brass px-7 text-charcoal transition-colors hover:bg-ivory"
        >
          Back to the homepage
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
