import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/content/profile";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";
import { ContactForm } from "./contact-form";

const linkClass =
  "group flex items-center justify-between gap-6 border-b border-white/10 py-6 font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-tight text-ivory transition-colors hover:text-brass";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-charcoal py-24 text-ivory lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            number="07"
            label="Contact"
            title="Get in touch"
            tone="dark"
          />
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-mist">
            For chef and cook positions, contact me directly. References
            are available on request.
          </p>
          <p className="mt-8 flex items-center gap-3 text-mist">
            <MapPin aria-hidden className="size-4 text-brass" />
            {profile.location}
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="border-t border-white/10">
            <li>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <span className="flex min-w-0 flex-1 items-center gap-5">
                  <Mail aria-hidden className="size-5 shrink-0 text-brass" />
                  <span className="min-w-0 break-all text-[clamp(1.55rem,2.5vw,2.5rem)]">
                    {profile.email}
                  </span>
                </span>
                <ArrowUpRight aria-hidden className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className={linkClass}>
                <span className="flex items-center gap-5">
                  <Phone aria-hidden className="size-5 shrink-0 text-brass" />
                  {profile.phone}
                </span>
                <ArrowUpRight aria-hidden className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <span className="flex items-center gap-5">
                  <span aria-hidden className="eyebrow w-5 text-center text-brass">in</span>
                  LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
                <ArrowUpRight aria-hidden className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          </ul>

          <a
            href={profile.cv}
            download
            className="eyebrow mt-12 inline-flex min-h-12 items-center gap-3 bg-brass px-7 text-charcoal transition-colors hover:bg-ivory"
          >
            <Download aria-hidden className="size-4" />
            Download CV
          </a>
        </div>

        <div className="mt-8 grid gap-10 border-t border-white/10 pt-14 lg:col-span-12 lg:mt-16 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-3">
            <p className="eyebrow text-brass">Send a message</p>
            <h3 className="mt-5 text-[clamp(2.4rem,4vw,3.5rem)] leading-none">
              Start a conversation
            </h3>
            <p className="mt-6 max-w-xs leading-relaxed text-mist">
            Have a chef position, professional opportunity, or enquiry?
            I&rsquo;d be happy to hear from you. Share the details, and
            I&rsquo;ll receive your message directly via email.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <ContactForm endpoint={process.env.FORMSPREE_ENDPOINT} />
          </div>
        </div>
      </Container>
    </section>
  );
}
