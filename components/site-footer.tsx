import Link from "next/link";
import { profile } from "@/content/profile";
import { navigation } from "@/lib/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-mist">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-ivory">{profile.name}</p>
          <p className="mt-2 text-sm">
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="eyebrow transition-colors hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
