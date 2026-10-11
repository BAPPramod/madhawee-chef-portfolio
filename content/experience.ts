export type Experience = {
  role: string;
  employer: string;
  location: string;
  period: string;
  startDate: string;
  note?: string;
  summary: string[];
  dishGroups?: { label: string; items: string[] }[];
};

export const experience: Experience[] = [
  {
    role: "Chef",
    employer: "Mamma Rosa Restaurant & Tokyo55",
    location: "Helsinki, Finland",
    period: "April 2024 — Present",
    startDate: "2024-04",
    note: "Two restaurants under one employer, in the same building. I work across both kitchens.",
    summary: [
      "Prepares a wide range of à la carte dishes across starters, salads, sushi, desserts and the hot kitchen.",
      "Responsible for preparations and quality control, and guides kitchen staff.",
      "Keeps consistency, presentation and timing in a busy à la carte service.",
    ],
    dishGroups: [
      {
        label: "Starters & salads",
        items: [
          "Buffalo mozzarella bruschetta",
          "Shrimp toast",
          "Beef tartar",
          "Marinated salmon",
          "Scampi salad",
          "Goat cheese chicken salad",
        ],
      },
      {
        label: "Hot kitchen",
        items: [
          "Chicken risotto",
          "Scampi pasta",
          "Lemon parmesan risotto",
          "Smoked salmon",
          "Beef steak with pepper sauce",
          "Roast lamb with merguez sauce",
          "Snails with garlic butter",
        ],
      },
      {
        label: "Desserts",
        items: [
          "Tiramisu",
          "Basil, vanilla, passion & liquorice panna cotta",
          "Chocolate fondant with raspberry sauce",
          "Marinated berries with white chocolate ganache",
        ],
      },
    ],
  },
  {
    role: "Chef",
    employer: "Vapiano",
    location: "Helsinki, Finland",
    period: "April 2024",
    startDate: "2024-04",
    summary: [
      "Italian cuisine, focused on authentic pasta prepared and cooked to order.",
      "Worked efficiently under pressure through peak service in a fast-paced kitchen.",
      "Delivered consistent quality while maintaining high hygiene and safety standards.",
    ],
  },
  {
    role: "Chef",
    employer: "Walawwa Family Restaurant & Eco Lodge",
    location: "Sri Lanka",
    period: "May 2021 — November 2023",
    startDate: "2021-05",
    summary: [
      "Cooked across pastry and bakery, main dishes, sides and desserts.",
      "Ensured guest satisfaction and high-quality presentation in both local and international cuisines.",
    ],
    dishGroups: [
      {
        label: "Pastry & bakery",
        items: ["Pizza", "Burgers", "Breads", "Rolls", "Pastries", "Doughnuts"],
      },
      {
        label: "Mains",
        items: [
          "Pasta",
          "Fried rice",
          "Biryani",
          "Kottu roti",
          "Traditional Sri Lankan specialities",
        ],
      },
      {
        label: "Sides",
        items: ["Curries", "BBQ", "Devilled meats", "Black meats", "Chop suey"],
      },
      {
        label: "Desserts",
        items: ["Cakes", "Brownies", "Puddings", "Sweets"],
      },
    ],
  },
];
