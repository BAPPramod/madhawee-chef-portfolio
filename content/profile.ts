export const profile = {
  name: "Madhawee Amarasinghe",
  firstName: "Madhawee",
  lastName: "Amarasinghe",
  fullName: "Madhawee Chathubhani Amarasinghe",
  role: "Chef",
  location: "Helsinki, Finland",
  email: "madhaweeamarasinghe@gmail.com",
  phone: "+358 41 728 5539",
  phoneHref: "tel:+358417285539",
  linkedin: "https://www.linkedin.com/in/madhawee-amarasinghe/",
  cv: "/cv/madhawee-amarasinghe-cv.pdf",
  tagline: "Crafting memorable dishes through flavour, precision and creativity.",
  summary:
    "Chef based in Helsinki, with professional kitchen experience in Sri Lanka and Finland since 2021. I work across à la carte starters, hot kitchen, desserts and sushi, with a grounding in pastry and bakery, and is known for careful presentation, consistency in busy service and guiding kitchen staff.",
  hero: {
    src: "/images/hero/madhawee-kitchen.jpg",
    width: 1083,
    height: 793,
    alt: "Madhawee in a black chef's jacket, arms folded, smiling in a softly lit kitchen",
  },
  portrait: {
    src: "/images/profile/madhawee-portrait.PNG",
    width: 1024,
    height: 1536,
    alt: "Portrait of Madhawee Amarasinghe in a black double-breasted chef's jacket",
  },
} as const;

export const facts = [
  { value: "Since 2021", label: "In professional kitchens" },
  { value: "Sri Lanka & Finland", label: "Kitchen experience" },
  { value: "À la carte", label: "Starters, hot kitchen, desserts, sushi" },
  { value: "Hygiene Passport", label: "Finnish Food Authority" },
] as const;
