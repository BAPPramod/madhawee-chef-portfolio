export type Education = {
  title: string;
  institution: string;
  location: string;
  /** Update to "Graduated October 2026" once the qualification is awarded. */
  status?: string;
};

export const education: Education[] = [
  {
    title: "Vocational Qualification in Restaurant and Catering Services",
    institution: "Perho Culinary, Tourism and Business College",
    location: "Finland",
    status: "Graduating 30 October 2026",
  },
  {
    title: "Pastry and Bakery Studies",
    institution: "Wise Way Hotel Management School",
    location: "Sri Lanka",
  },
];

export const certificates = [
  {
    title: "Hygiene Passport",
    issuer: "Finnish Food Authority",
    location: "Finland",
  },
];

export const skills = [
  "À la carte cuisine - starters, mains, desserts",
  "Italian & Asian cuisines",
  "Sushi & bakery",
  "Fine-dining plating & presentation",
  "Food safety & hygiene regulations",
  "Teamwork & kitchen leadership",
  "Menu creativity & development",
  "Fast, proactive work under pressure",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Sinhala", level: "Native" },
  { name: "Finnish", level: "Basic" },
  { name: "German", level: "Basic" },
];
