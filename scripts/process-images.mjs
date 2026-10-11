// Converts the original PNG exports in reference/originals/ into web-ready
// JPEGs under public/images/. Run with: node scripts/process-images.mjs
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const originals = path.join(root, "reference/originals");
const out = path.join(root, "public/images");

const dishes = {
  "0ADA68E8": "salad-shellfish-greens",
  "0D25EC01": "sushi-platter",
  "194D49D9": "cake-cream-mixed-berries",
  "1B1DA423": "cake-sheet-berry-glaze",
  "1B9F0342": "starter-tartare-crisps",
  "1E20AD93": "dessert-chocolate-fondant",
  "25A87C20": "starter-tasting-slate",
  "2EEE96A8": "starter-tartare-pickled-onion",
  "3286CDF1": "dessert-cocoa-cream",
  "34CCCF1B": "platter-salmon-roses",
  "38541D5E": "main-white-asparagus-salmon",
  "3A438C68": "starter-carpaccio-style",
  "3D2AC4AA": "event-starter-plates",
  "3D5AC850": "starter-courgette-asparagus",
  "3EF3E12A": "starter-salmon-sesame-greens",
  "3F53B362": "main-crisp-skin-fish-broth",
  "4F6DA578": "starter-tartare-charred-cucumber",
  "52C2C4E2": "starter-cured-fish-dill",
  "5575CFB1": "cake-edible-flowers",
  "5B70AB25": "dessert-caramelised-custard",
  "5E5BCC24": "salad-goat-cheese-beetroot",
  "611092ED": "starter-shellfish-toast-dark",
  "6558DB66": "starter-tasting-slate-2",
  "6AD4079C": "main-seared-salmon-sauce",
  "6F137422": "platter-salmon-cheese",
  "74B2921D": "starter-cured-salmon-golden-sauce",
  "7781F75B": "main-grilled-white-fish",
  "78173611": "salad-shellfish-croutons",
  "793C7C9B": "platter-cold-cuts",
  "7FDC100E": "dessert-set-cream-raspberry",
  "81B083A4": "salad-goat-cheese-amber-plate",
  "83B03965": "main-crumbed-fish-shellfish",
  "84E1690A": "main-prawns-green-risotto",
  "8B0A0CE8": "dessert-layered-cocoa-strawberry",
  "8E08A4FA": "main-sliced-meat-sausage",
  "9FA4E806": "dessert-set-cream-vanilla",
  "A84E1D12": "cake-strawberry-glaze",
  "A929BF94": "main-white-fish-asparagus",
  "AE1CC74C": "dessert-layered-cocoa-raspberry",
  "B175F808": "dessert-small-cake-berry",
  "B3543020": "cake-chocolate-berries",
  "B7F9A34D": "starter-beetroot-pine-nuts",
  "BC6DFA82": "platter-carved-fruit",
  "C0D719B0": "main-salmon-green-mash",
  "CF6A2327": "main-risotto-mushroom",
  "D27743AD": "starter-fresh-cheese-tomato",
  "E2F873D6": "dessert-layered-cocoa-berries",
  "E7573766": "starter-shellfish-toast",
  "EB0FCC89": "dessert-pistachio-slice",
  "EB48E1C3": "dessert-berry-crumble",
  "ED28E7E1": "main-patty-gratin",
  "EE376E4D": "main-sliced-meat-berries",
  "F02F5BAE": "dessert-meringue-tart",
  "FC460827": "salad-prawn-egg",
};

// The plate rim in this photo carries a restaurant logo.
const crops = {
  "3A438C68": { left: 0, top: 140, width: 1448, height: 946 },
};

const jpeg = { quality: 86, mozjpeg: true, chromaSubsampling: "4:4:4" };

async function convert(input, output, extract) {
  let image = sharp(input);
  if (extract) image = image.extract(extract);
  const info = await image.jpeg(jpeg).toFile(output);
  console.log(`${path.relative(root, output)}  ${info.width}x${info.height}`);
}

await mkdir(path.join(out, "portfolio"), { recursive: true });

for (const file of await readdir(path.join(originals, "dishes"))) {
  const id = file.slice(0, 8);
  const name = dishes[id];
  if (!name) continue;
  await convert(
    path.join(originals, "dishes", file),
    path.join(out, "portfolio", `${name}.jpg`),
    crops[id],
  );
}

// The supplied hero has headline text and buttons baked in on the left;
// keep only the portrait side so the page can render real text.
await convert(
  path.join(originals, "hero/hero.PNG"),
  path.join(out, "hero/madhawee-kitchen.jpg"),
  { left: 900, top: 0, width: 1083, height: 793 },
);

await convert(
  path.join(originals, "profile/profile.PNG"),
  path.join(out, "profile/madhawee-portrait.jpg"),
);

await sharp(path.join(originals, "dishes/25A87C20-DDFF-4958-A29E-41FFB1869F59.PNG"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg(jpeg)
  .toFile(path.join(root, "app/opengraph-image.jpg"));
console.log("app/opengraph-image.jpg  1200x630");
