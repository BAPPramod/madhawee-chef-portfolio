"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 600);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Scroll to top"
      className="fixed right-5 bottom-5 z-40 inline-flex size-12 items-center justify-center rounded-full border border-brass/60 bg-charcoal/95 text-ivory shadow-lg backdrop-blur transition-colors hover:border-brass hover:bg-brass hover:text-charcoal sm:right-7 sm:bottom-7"
    >
      <ArrowUp aria-hidden className="size-5" />
    </a>
  );
}
