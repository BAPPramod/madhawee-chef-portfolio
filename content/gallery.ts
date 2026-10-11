export type CategoryId =
  | "starters-salads"
  | "hot-kitchen"
  | "desserts"
  | "cakes-pastry"
  | "platters-sushi";

export type Category = {
  id: CategoryId;
  title: string;
  description: string;
  /** Image id used for the category on the homepage. */
  cover: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  category: CategoryId;
  /** Position in the homepage "Selected work" sequence. */
  featured?: number;
  /** Kept in the data set but left out of the public gallery. */
  hidden?: boolean;
};

export const categories: Category[] = [
  {
    id: "starters-salads",
    cover: "starter-shellfish-toast",
    title: "Starters & Salads",
    description:
      "Tartares, cured and smoked fish, crayfish and composed salads.",
  },
  {
    id: "hot-kitchen",
    cover: "main-crumbed-fish-shellfish",
    title: "Hot Kitchen",
    description: "Fish, prawns, meat and risotto from the hot kitchen.",
  },
  {
    id: "desserts",
    cover: "dessert-set-cream-vanilla",
    title: "Desserts",
    description:
      "Plated desserts including panna cotta, tiramisu, chocolate fondants, tarts and crumbles.",
  },
  {
    id: "cakes-pastry",
    cover: "cake-edible-flowers",
    title: "Cakes & Pastry",
    description:
      "Cream cakes finished with glazes, fresh berries and edible flowers.",
  },
  {
    id: "platters-sushi",
    cover: "platter-salmon-roses",
    title: "Platters & Sushi",
    description:
      "Sushi, sharing platters, carved fruit and starters plated in volume.",
  },
];

const L = { width: 1448, height: 1086 };
const P = { width: 1086, height: 1448 };

function img(
  id: string,
  size: { width: number; height: number },
  category: CategoryId,
  title: string,
  alt: string,
  extra: Pick<GalleryImage, "featured" | "hidden"> &
    Partial<Pick<GalleryImage, "src">> = {},
): GalleryImage {
  return { id, src: `/images/portfolio/${id}.jpg`, ...size, category, title, alt, ...extra };
}

export const gallery: GalleryImage[] = [
  // Starters & Salads
  img("starter-tasting-slate", L, "starters-salads", "Tasting slate of three starters",
    "Four starters on a slate board: two toasts topped with shellfish salad and orange roe, a tartare with grated cheese, and cured fish with cress and herb oil",
    { featured: 1 }),
  img("starter-cured-fish-dill", L, "starters-salads", "Cured whitefish, caper berry & dill",
    "Cured whitefish starter with a caper berry, dill fronds and dark rye crumbs in a pool of cream sauce with green herb oil, served in a pale stoneware bowl",
    { featured: 5 }),
  img("starter-fresh-cheese-tomato", L, "starters-salads", "Burrata cheese, tomato & romesco",
    "A round of fresh Burrata cheese with cracked pepper on tomato, surrounded by romesco and an romesco sauce",
    { featured: 8 }),
  img("starter-tartare-crisps", L, "starters-salads", "Beef tartare, crisps & aioli",
    "Raw beef tartare topped with grated cheese, golden crisps and a tuft of cress, with dots of aioli in a speckled stoneware bowl"),
  img("starter-tartare-pickled-onion", L, "starters-salads", "Lamb tartare, pickled onion & mustard",
    "Lamb tartare-style mixture topped with kale, grated cheese and cress, with pickled red onion, creamy purée and wholegrain mustard"),
  img("starter-salmon-sesame-greens", L, "starters-salads", "Salmon, sesame & watercress",
    "Slices of salmon sprinkled with black and white sesame seeds, topped with mushrooms and watercress beside a ponzu sauce"),
  img("starter-beetroot-pine-nuts", L, "starters-salads", "Beetroot carpaccio, pine nuts & cream",
    "Thin beetroot slices arranged with toasted pine nuts, dots of cream and a mound of arugula in a stoneware bowl"),
  img("starter-shellfish-toast", L, "starters-salads", "Shrimp toast with crayfish & roe",
    "Crayfish salad with sliced radish, dill and orange roe beside toasted bread and a mustard sauce on an amber glazed plate"),
  img("starter-cured-salmon-golden-sauce", L, "starters-salads", "Cured salmon in curry sauce",
    "Slices of cured salmon in a curry sauce with basil leaves and diced yellow fruit in a stoneware bowl"),
  img("starter-courgette-asparagus", L, "starters-salads", "Courgette & green asparagus",
    "Shaved courgette ribbons and green asparagus with cheese shavings, watercress and herb oil on a grey plate"),
  img("starter-carpaccio-style", L, "starters-salads", "Thin-sliced meat, tuna & capers",
    "Thinly sliced meat arranged carpaccio-style with diced tuna, capers, golden crisps, aioli and micro herbs on a white plate",
    { src: "/images/portfolio/starter-carpaccio-style.jpg?v=2" }),
  img("starter-shellfish-toast-dark", L, "starters-salads", "Shrimp toast with radish & roe",
    "Shrimp toast with toasted bread, orange roe, a radish slice and dill on a stoneware plate against a dark background"),
  img("starter-tasting-slate-2", L, "starters-salads", "Tartare, shrimp toast & blini platter",
    "Slate board with shrimp toast, blini, and radish beside toast, a tartare with cheese, and roe with red onion and cream"),
  img("salad-goat-cheese-beetroot", L, "starters-salads", "Goat's cheese, beetroot & pine nuts salad",
    "Glazed warm goat's cheese on mixed leaves with beetroot, roasted pumpkin, pine nuts and piped cream"),
  img("salad-goat-cheese-amber-plate", L, "starters-salads", "Goat's cheese, cranberry & pear salad",
    "Glazed goat's cheese on salad leaves with cherry tomatoes, cucumber and dried cranberries on an amber glazed plate"),
  img("salad-shellfish-greens", L, "starters-salads", "Crayfish salad with chilli mayonnaise",
    "Crayfish piled on leaves with cucumber ribbons, cherry tomatoes and piped chilli mayonnaise on a white plate"),
  img("salad-prawn-egg", L, "starters-salads", "Prawn salad with soft egg",
    "Prawn salad with a halved soft-boiled egg, edamame, cherry tomatoes and a drizzled dressing"),
  img("starter-tartare-charred-cucumber", L, "starters-salads", "Tartare with charred cucumber",
    "Red tartare-style base with charred cucumber, coriander, fried shallots and piped cream",
    { hidden: false }),
  img("salad-shellfish-croutons", L, "starters-salads", "Crayfish salad with croutons",
    "Leaf salad with crayfish, croutons, cheese cubes and cherry tomatoes",
    { hidden: false }),

  // Hot Kitchen
  img("main-white-fish-asparagus", { width: 1402, height: 1122 }, "hot-kitchen", "White fish, asparagus & green herb sauce",
    "Grilled white fish with white and green asparagus and broccoli in a frothy green herb sauce, served in a blue ribbed bowl",
    { featured: 3 }),
  img("main-crisp-skin-fish-broth", L, "hot-kitchen", "Crisp-skinned fish in broth",
    "Pieces of crisp-skinned fish topped with fried shallots in a clear amber broth with yellow purée, in a wide white bowl",
    { featured: 4 }),
  img("main-crumbed-fish-shellfish", L, "hot-kitchen", "Herb-crumbed fish, risotto & lobster sauce",
    "Herb-crumbed fillet on risotto with green asparagus, crayfish claws, lemon and dill in an orange lobster sauce"),
  img("main-seared-salmon-sauce", L, "hot-kitchen", "Smoked salmon, broccolini & butter sauce",
    "Smoked salmon fillet with broccolini, green purée, dill and lemon on a pale yellow butter sauce"),
  img("main-white-asparagus-salmon", L, "hot-kitchen", "White asparagus & cold smoked salmon",
    "White asparagus with a yellow emulsion sauce, rolled cold smoked salmon and chives on a grey plate"),
  img("main-prawns-green-risotto", L, "hot-kitchen", "Prawns, green risotto & carrot purée",
    "Prawns on a green risotto with diced tomato, purple sprouting broccoli, lemon and a sweep of carrot purée"),
  img("main-sliced-meat-sausage", L, "hot-kitchen", "Raindeer meat, sausage & red wine sauce",
    "Raindeer meat and browned sausages in a dark sauce with mashed potato, rocket and roasted tomatoes"),
  img("main-sliced-meat-berries", L, "hot-kitchen", "Duck meat, berries & greens",
    "Duck meat with red berries, leafy greens, a creamy accompaniment and dark sauce in a stoneware bowl"),
  img("main-grilled-white-fish", L, "hot-kitchen", "Grilled white fish & roe",
    "Grill-marked white fish fillet with potatoes, green asparagus, orange roe and herb oil in a pale sauce"),
  img("main-salmon-green-mash", L, "hot-kitchen", "Crisp-skin salmon & green mash potato",
    "Two pieces of crisp-skinned salmon with green mash potato, carrot and rocket salad, roe and lemon on a yellow sauce"),
  img("main-patty-gratin", L, "hot-kitchen", "Beef patty, spinach & potato gratin",
    "Beef patty topped with spinach and piped cream in a dark sauce, with roasted tomatoes and a potato gratin"),
  img("main-risotto-mushroom", L, "hot-kitchen", "Mushroom with risotto & rocket",
    "Risotto with mushrooms and rocket, garnished with quenelles, in a triangular white bowl"),

  // Desserts
  img("dessert-chocolate-fondant", L, "desserts", "Chocolate fondant, raspberry sauce",
    "Sugar-dusted chocolate fondant with a sweep of raspberry sauce, pink ice cream and mint on a speckled plate",
    { featured: 6 }),
  img("dessert-meringue-tart", L, "desserts", "Torched meringue tart",
    "Pastry tart topped with a swirl of torched meringue, with an orange coulis, piped cream rosettes and mint",
    { featured: 7 }),
  img("dessert-set-cream-vanilla", L, "desserts", "Vanilla panna cotta with marinated apple",
    "Vanilla panna cotta with marinated apple, caramel sauce and a sprig of mint"),
  img("dessert-set-cream-raspberry", L, "desserts", "Vanilla panna cotta with raspberry sauce",
    "Vanilla panna cotta with with raspberry sauce, freeze-dried raspberry, crumble and a scoop of ice cream"),
  img("dessert-layered-cocoa-raspberry", L, "desserts", "Authentic tiramisu",
    "Authentic tiramisu on a speckled plate with freeze-dried raspberry and a ring of cocoa"),
  img("dessert-layered-cocoa-berries", L, "desserts", "Chocolate flavoured tiramisu with fresh berries",
    "Chocolate flavoured tiramisu with raspberries, blueberries, a blackberry and strawberry and a caramel sauce"),
  img("dessert-layered-cocoa-strawberry", L, "desserts", "Strawberry flavoured tiramisu with strawberries",
    "Strawberry flavoured tiramisu with cut strawberries and caramel sauce on a white plate"),
  img("dessert-caramelised-custard", L, "desserts", "Crème brûlée & sorbet",
    "Crème brûlée in a red ramekin with pink sorbet, crumble and mint on a speckled plate"),
  img("dessert-cocoa-cream", L, "desserts", "Coffee flavoured panna cotta & ice cream",
    "Coffee flavoured panna cotta with vanilla ice cream, chocolate sauce and crumble"),
  img("dessert-small-cake-berry", L, "desserts", "Runeberg torte & vanilla sauce",
    "Runeberg torte topped with berry jam inside an icing ring, with vanilla sauce and berry dots"),
  img("dessert-berry-crumble", L, "desserts", "Blueberry pie & vanilla ice cream",
    "Slice of blueberry pie with vanilla ice cream, custard, granola and mint on a speckled plate"),
  img("dessert-pistachio-slice", L, "desserts", "Pistachio cheesecake slice",
    "Piped pistachio cheesecake slice with meringue pieces and mint on a large plate",
    { hidden: false }),

  // Cakes & Pastry
  img("cake-edible-flowers", L, "cakes-pastry", "Cream cake with edible flowers",
    "Round cream cake with piped sides, decorated with a ring of fresh edible flowers"),
  img("cake-cream-mixed-berries", L, "cakes-pastry", "Cream cake with mixed berries",
    "Round cream cake topped with strawberries, raspberries and blackberries on piped cream rosettes"),
  img("cake-strawberry-glaze", L, "cakes-pastry", "Strawberry-glazed cream cake",
    "Round cream cake with a strawberry glaze, piped rosettes and whole strawberries"),
  img("cake-sheet-berry-glaze", L, "cakes-pastry", "Berry-glazed sheet cake",
    "Rectangular cream cake with a dark berry glaze, fresh berries and mint"),
  img("cake-chocolate-berries", L, "cakes-pastry", "Chocolate cake with berries",
    "Chocolate cream cake piped with rosettes and covered in strawberries, raspberries and blueberries"),

  // Platters & Sushi
  img("sushi-platter", P, "platters-sushi", "Sushi platter",
    "Large slate platter of salmon nigiri, maki and inside-out rolls with pickled ginger and wasabi",
    { featured: 2 }),
  img("event-starter-plates", L, "starters-salads", "Starters plated for a group",
    "Nine slate plates set out in a grid, each with three starter bites: shellfish toast, tartare and cucumber with cream"),
  img("platter-salmon-roses", P, "platters-sushi", "Salmon rose platter",
    "Silver tray of rolled salmon roses with dill, lemon, radish and edible flowers"),
  img("platter-salmon-cheese", P, "platters-sushi", "Salmon & cheese platter",
    "Silver tray with rolled salmon, sliced cheese, a tomato salsa and a fish mousse on salad leaves"),
  img("platter-cold-cuts", P, "platters-sushi", "Cold cuts platter",
    "Tray of rolled cold cuts on lettuce with two dips",
    { hidden: false }),
  img("platter-carved-fruit", L, "platters-sushi", "Carved fruit platter",
    "Carved fruit display of melon, papaya, pineapple and berries on a silver tray"),
];

export const visibleGallery = gallery.filter((image) => !image.hidden);

export const featuredImages = gallery
  .filter((image) => image.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);

export function imagesInCategory(category: CategoryId) {
  return visibleGallery.filter((image) => image.category === category);
}
