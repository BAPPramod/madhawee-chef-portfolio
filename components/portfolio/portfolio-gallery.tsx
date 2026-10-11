"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Category, GalleryImage } from "@/content/gallery";
import { Container } from "../container";

type Section = Category & { images: GalleryImage[] };

export function PortfolioGallery({ sections }: { sections: Section[] }) {
  const images = sections.flatMap((section) => section.images);
  const titles = Object.fromEntries(sections.map((s) => [s.id, s.title]));
  const starts = sections.map((_, i) =>
    sections.slice(0, i).reduce((sum, s) => sum + s.images.length, 0),
  );
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  // Close when this route is hidden by client-side navigation.
  useEffect(() => {
    const dialog = dialogRef.current;
    return () => dialog?.close();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setActive((index) =>
        index === null ? index : (index + delta + images.length) % images.length,
      ),
    [images.length],
  );

  const current = active === null ? null : images[active];

  return (
    <>
      {sections.map((section, sectionIndex) => {
        const start = starts[sectionIndex];

        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="border-t border-charcoal/15 py-20 first:border-t-0 lg:py-28"
          >
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <header className="lg:sticky lg:top-28 lg:col-span-3 lg:self-start">
                <p className="eyebrow text-brass-deep">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`${section.id}-title`}
                  className="mt-3 text-[clamp(2.2rem,3.6vw,3.2rem)] leading-[1.02]"
                >
                  {section.title}
                </h2>
                <p className="mt-5 max-w-xs leading-relaxed text-stone">
                  {section.description}
                </p>
                <p className="eyebrow mt-6 text-stone">
                  {section.images.length} photographs
                </p>
              </header>

              <ul className="space-y-4 sm:flex sm:flex-wrap sm:gap-3 sm:space-y-0 lg:col-span-9">
                {section.images.map((image, index) => {
                  const ratio = image.width / image.height;
                  const isCarvedFruit = image.id === "platter-carved-fruit";
                  const targetHeight =
                    section.id === "platters-sushi" ? 170 : 220;
                  const sizing = {
                    "--image-basis": isCarvedFruit
                      ? "32.5%"
                      : `${ratio * targetHeight}px`,
                    "--image-grow": isCarvedFruit ? 0 : ratio,
                  } as CSSProperties;

                  return (
                    <Fragment key={image.id}>
                    {isCarvedFruit ? (
                      <li
                        aria-hidden="true"
                        className="hidden h-0 basis-full sm:block"
                      />
                    ) : null}
                    <li
                      style={sizing}
                      className={`w-full sm:w-auto sm:basis-[var(--image-basis)] sm:grow-[var(--image-grow)] ${
                        isCarvedFruit ? "sm:-mt-3" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActive(start + index)}
                        className="group block w-full rounded-[6px] text-left"
                      >
                        <span className="relative block overflow-hidden rounded-[6px] bg-linen">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 36vw, (min-width: 640px) 45vw, 100vw"
                            className="h-auto w-full"
                          />
                          <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/90 via-charcoal/55 to-transparent px-4 pt-12 pb-4 text-ivory transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 motion-reduce:transition-none">
                            <span className="block font-display text-xl leading-tight">
                              {image.title}
                            </span>
                          </span>
                        </span>
                        <span className="sr-only">, open larger view</span>
                      </button>
                    </li>
                    </Fragment>
                  );
                })}
                <li
                  aria-hidden="true"
                  className="hidden h-0 basis-[220px] grow-[999] sm:block"
                />
              </ul>
            </Container>
          </section>
        );
      })}

      <dialog
        ref={dialogRef}
        aria-label={current ? current.title : "Photograph"}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-ivory backdrop:bg-charcoal/95"
      >
        {current ? (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8">
              <p className="eyebrow text-mist" aria-live="polite">
                {active! + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex size-11 items-center justify-center text-ivory transition-colors hover:text-brass"
              >
                <X aria-hidden className="size-6" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <figure className="flex min-h-0 flex-1 flex-col px-4 pb-6 sm:px-20">
              <div
                className="relative min-h-0 flex-1"
                onClick={(event) => {
                  if (event.target === event.currentTarget) setActive(null);
                }}
              >
                <Image
                  key={current.id}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mx-auto mt-5 max-w-2xl text-center">
                <span className="eyebrow block text-brass">{titles[current.category]}</span>
                <span className="mt-2 block font-display text-2xl sm:text-3xl">{current.title}</span>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute top-1/2 left-1 inline-flex size-12 -translate-y-1/2 items-center justify-center text-ivory/80 transition-colors hover:text-brass sm:left-5"
            >
              <ChevronLeft aria-hidden className="size-8" />
              <span className="sr-only">Previous photograph</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute top-1/2 right-1 inline-flex size-12 -translate-y-1/2 items-center justify-center text-ivory/80 transition-colors hover:text-brass sm:right-5"
            >
              <ChevronRight aria-hidden className="size-8" />
              <span className="sr-only">Next photograph</span>
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
