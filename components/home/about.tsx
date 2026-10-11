import Image from "next/image";
import { profile } from "@/content/profile";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-linen py-24 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="reveal relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden lg:col-span-5 lg:max-w-none">
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 38vw, (min-width: 448px) 448px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            id="about-title"
            number="03"
            label="About"
            title="From Sri Lanka to Helsinki"
          />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-charcoal/85">
            <p>
            I am a Helsinki-based chef with professional kitchen experience in 
            both Sri Lanka and Finland. I began my culinary career in Sri Lanka in 
            2021 at Walawwa Family Restaurant & Eco Lodge, where I developed hands-on 
            experience across bakery, pastry, pizza, biryani, kottu, curries, and 
            traditional Sri Lankan cuisine.
            </p>
            <p>
            Since 2024, I have worked in à la carte kitchens in Helsinki at Mamma Rosa
             and Tokyo55, gaining experience across starters, salads, sushi, desserts, 
             and the hot kitchen. My responsibilities include food preparation, 
             maintaining quality and consistency, supporting smooth service, and 
             guiding kitchen staff.
            </p>
            <p>
            Alongside my professional experience, I have completed a Vocational 
            Qualification in Restaurant and Catering Services at Perho Culinary, 
            Tourism and Business College in Finland. I have also completed pastry 
            and bakery studies at Wise Way Hotel Management School in Sri Lanka and 
            hold a Finnish Hygiene Passport.
            </p>
            <p>
            I value consistency, good timing, attention to detail, and careful presentation, 
            especially during busy service. I speak English and Sinhala, with basic Finnish 
            and German, and bring a versatile and adaptable approach to professional kitchen 
            environments.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
