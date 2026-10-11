"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { navigation } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-11 items-center justify-center text-ivory"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
      </button>

      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-white/10 bg-charcoal px-6 pt-4 pb-10 sm:px-10"
      >
        <ul className="divide-y divide-white/10">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="block py-4 font-display text-3xl text-ivory"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="eyebrow mt-8 inline-flex min-h-11 items-center gap-2 border border-brass/70 px-5 text-brass"
        >
          View CV
          <ArrowUpRight aria-hidden className="size-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </nav>
    </div>
  );
}
