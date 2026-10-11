import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { Container } from "../container";
import { Eyebrow } from "../section-heading";

export function Hero() {
  const current = experience[0];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex flex-col overflow-hidden bg-charcoal text-ivory lg:block"
    >
      <Container className="relative z-10 block lg:flex lg:min-h-[min(86vh,820px)] lg:items-center">
        <div className="-mt-20 w-full max-w-[calc(100vw-5rem)] pb-16 sm:-mt-28 sm:max-w-none lg:mt-0 lg:max-w-[44%] lg:py-28">
          <Eyebrow label={`${profile.role} · ${profile.location}`} tone="dark" />
          <h1
            id="hero-title"
            className="mt-7 text-[clamp(3.6rem,9vw,7.75rem)] leading-[0.88] tracking-[-0.02em]"
          >
            <span className="block">{profile.firstName}</span>
            <span className="block italic text-brass">{profile.lastName}</span>
          </h1>
          <p className="mt-8 max-w-md font-display text-[1.6rem] leading-snug text-ivory/85 sm:text-3xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/portfolio"
              className="eyebrow inline-flex min-h-12 items-center gap-3 bg-brass px-7 text-charcoal transition-colors hover:bg-ivory"
            >
              View portfolio
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex min-h-12 items-center gap-3 border border-ivory/40 px-7 text-ivory transition-colors hover:border-brass hover:text-brass"
            >
              View CV
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-sm text-mist">
            Currently {current.role.toLowerCase()} at{" "}
            <span className="text-ivory">{current.employer}</span>, Helsinki
          </p>
        </div>
      </Container>

      <div className="relative order-first aspect-square w-full sm:aspect-[4/3] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[60%]">
        <Image
          src={profile.hero.src}
          alt={profile.hero.alt}
          fill
          preload
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[50%_25%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/20 to-transparent lg:bg-linear-to-r lg:from-charcoal lg:via-charcoal/30 lg:via-30% lg:to-transparent"
        />
      </div>
    </section>
  );
}
