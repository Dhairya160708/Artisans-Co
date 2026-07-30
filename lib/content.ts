/**
 * PLACEHOLDER CONTENT
 * ---------------------------------------------------------------
 * Every string and image path in this file is placeholder copy for
 * a pre-launch build. Swap in real artisan bios, piece photography,
 * pricing, and dates before going live. Images point at Unsplash
 * "source" style editorial crops — replace with licensed photography.
 */

export const site = {
  name: "Artisans & Co.",
  logoMark: "A&C",
  tagline: "Crafted in India. Reserved for the world.",
  description:
    "Numbered, limited-edition pieces handmade by artisans across India — miniature paintings, block prints, brassware, and textiles, released as small seasonal drops for a European audience.",
  instagramHandle: "@artisansandco",
  instagramUrl: "https://instagram.com",
  shippingNote: "Currently shipping to the UK, Ireland, and wider Europe.",
};

export const nav = [
  { label: "The Drop", href: "/drop" },
  { label: "Artisans", href: "/artisans" },
  { label: "Journal", href: "/journal" },
  { label: "Waitlist", href: "/waitlist" },
];

export const footerLinks = {
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
  legal: [
    { label: "Shipping & Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

// ISO date placeholder — swap to real drop date.
export const nextDropDate = "2026-09-12T17:00:00+05:30";

export const currentDrop = {
  number: "01",
  city: "Jaipur",
  title: "Drop 01 — Jaipur",
  intro:
    "The first release draws from Jaipur's miniature painting ateliers and block-print workshops — fifty pieces in total, each numbered and released once.",
};

export type Currency = "GBP" | "EUR";

export type Piece = {
  slug: string;
  title: string;
  pieceNumber: number;
  editionSize: number;
  artisan: string;
  city: string;
  priceGBP: number;
  priceEUR: number;
  category: string;
  status: "available" | "reserved";
  image: string;
  aspect: "portrait" | "tall" | "square";
};

export const pieces: Piece[] = [
  {
    slug: "gulmohar-miniature",
    title: "Gulmohar Miniature, No. IV",
    pieceNumber: 4,
    editionSize: 50,
    artisan: "Rajendra Sharma",
    city: "Jaipur",
    priceGBP: 480,
    priceEUR: 560,
    category: "Miniature Painting",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
  },
  {
    slug: "indigo-block-print-yardage",
    title: "Indigo Block-Print Yardage",
    pieceNumber: 11,
    editionSize: 30,
    artisan: "Fatima Bano",
    city: "Bagru",
    priceGBP: 260,
    priceEUR: 305,
    category: "Textile",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1748327219221-8c56726d6f75?q=80&w=1200&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "hammered-brass-vessel",
    title: "Hammered Brass Vessel",
    pieceNumber: 2,
    editionSize: 20,
    artisan: "Om Prakash Soni",
    city: "Udaipur",
    priceGBP: 340,
    priceEUR: 395,
    category: "Brassware",
    status: "reserved",
    image:
      "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
  },
  {
    slug: "carved-sandalwood-panel",
    title: "Carved Sandalwood Panel",
    pieceNumber: 7,
    editionSize: 15,
    artisan: "Devi Lal Mistri",
    city: "Udaipur",
    priceGBP: 620,
    priceEUR: 725,
    category: "Carved Object",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1677206213866-65b5f73bb95b?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
  },
  {
    slug: "marigold-dye-dupatta",
    title: "Marigold-Dyed Dupatta",
    pieceNumber: 18,
    editionSize: 40,
    artisan: "Kamla Devi",
    city: "Sanganer",
    priceGBP: 190,
    priceEUR: 225,
    category: "Textile",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    aspect: "portrait",
  },
  {
    slug: "court-scene-folio",
    title: "Court Scene Folio, Study II",
    pieceNumber: 1,
    editionSize: 12,
    artisan: "Rajendra Sharma",
    city: "Jaipur",
    priceGBP: 710,
    priceEUR: 830,
    category: "Miniature Painting",
    status: "reserved",
    image:
      "https://images.unsplash.com/photo-1719498481691-d78f24dcff1b?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
  },
];

export type Artisan = {
  slug: string;
  name: string;
  city: string;
  craft: string;
  story: string;
  image: string;
};

export const artisans: Artisan[] = [
  {
    slug: "rajendra-sharma",
    name: "Rajendra Sharma",
    city: "Jaipur, Rajasthan",
    craft: "Miniature Painting",
    story:
      "Trained by his father in the Kishangarh style, Rajendra grinds his own pigments from stone and works in single-hair squirrel brushes. Each folio takes upward of three weeks to complete.",
    image:
      "https://images.unsplash.com/photo-1632414237690-7713a79fe9d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "fatima-bano",
    name: "Fatima Bano",
    city: "Bagru, Rajasthan",
    craft: "Hand Block Printing",
    story:
      "Fatima's workshop uses hand-carved teak blocks passed down three generations, printing with natural indigo and alizarin dyes on khadi cotton laid out to dry under open sky.",
    image:
      "https://images.unsplash.com/photo-1764426381179-7aa7bfdb0e32?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "om-prakash-soni",
    name: "Om Prakash Soni",
    city: "Udaipur, Rajasthan",
    craft: "Brass Metalwork",
    story:
      "A fourth-generation coppersmith, Om Prakash hand-hammers each vessel from a single brass sheet, the faceted surface catching light differently from every angle.",
    image:
      "https://images.unsplash.com/photo-1701721865389-9935778b40e3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "devi-lal-mistri",
    name: "Devi Lal Mistri",
    city: "Udaipur, Rajasthan",
    craft: "Wood Carving",
    story:
      "Devi Lal carves sandalwood and rosewood using tools he forges himself, drawing motifs from the havelis of the old city where he has lived his whole life.",
    image:
      "https://images.unsplash.com/photo-1535270732370-dd3188bab1da?q=80&w=1000&auto=format&fit=crop",
  },
];

export type ProvenanceEntry = {
  technique: string;
  materials: string;
  process: string;
};

export const provenance: ProvenanceEntry[] = [
  {
    technique: "Kishangarh Miniature Painting",
    materials: "Hand-ground mineral pigments, gum arabic, squirrel-hair brush, wasli paper",
    process:
      "Paper is burnished for days before a single stroke is laid. Pigments are mixed fresh each morning; gold detailing is applied last, under natural light only.",
  },
  {
    technique: "Bagru Hand Block Printing",
    materials: "Hand-carved teak blocks, natural indigo and alizarin dye, khadi cotton",
    process:
      "Cloth is washed in the river, sun-dried, then printed in successive layers — outline, fill, over-dye — with each block registered by hand and eye.",
  },
  {
    technique: "Udaipur Hammered Brass",
    materials: "Recycled brass sheet, hand-forged steel tools",
    process:
      "A flat sheet is raised into form entirely by hammer over a period of days, the facets left visible rather than polished smooth.",
  },
  {
    technique: "Sandalwood Relief Carving",
    materials: "Sustainably sourced sandalwood, self-forged carving tools",
    process:
      "Motifs are sketched freehand from memory, then carved in relief over multiple passes of increasingly fine tools, finished with a hand-rubbed oil.",
  },
];

export const countryOptions = [
  "United Kingdom",
  "Ireland",
  "France",
  "Germany",
  "Netherlands",
  "Spain",
  "Italy",
  "Other Europe",
  "Rest of World",
];
