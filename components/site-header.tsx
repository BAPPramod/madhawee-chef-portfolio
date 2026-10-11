import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { navigation } from "@/lib/site";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/95 text-ivory backdrop-blur supports-[backdrop-filter]:bg-charcoal/85">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-[1.55rem] leading-none tracking-wide"
        >
          {profile.firstName}
          <span className="text-brass"> {profile.lastName}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="eyebrow text-ivory/80 transition-colors hover:text-brass"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow inline-flex items-center gap-2 border border-brass/70 px-4 py-2.5 text-brass transition-colors hover:bg-brass hover:text-charcoal"
              >
                View CV
                <ArrowUpRight aria-hidden className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
