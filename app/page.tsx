import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { KitchenRange } from "@/components/home/kitchen-range";
import { SkillsCredentials } from "@/components/home/skills-credentials";
import { education, languages } from "@/content/credentials";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.fullName,
  jobTitle: profile.role,
  url: siteUrl,
  image: new URL(profile.portrait.src, siteUrl).toString(),
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Helsinki",
    addressCountry: "FI",
  },
  worksFor: { "@type": "Organization", name: experience[0].employer },
  alumniOf: education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.institution,
  })),
  knowsLanguage: languages.map((language) => language.name),
  sameAs: [profile.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Introduction />
      <FeaturedWork />
      <About />
      <ExperienceTimeline />
      <KitchenRange />
      <SkillsCredentials />
      <Contact />
    </>
  );
}
