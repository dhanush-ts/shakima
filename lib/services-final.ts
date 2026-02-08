export interface SubService {
  name: string
  duration: string
  price: number
  description?: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  subServices: SubService[]
}

export const servicesData: Service [] = [
  // -----------------------------
  // SKIN CARE
  // -----------------------------
  {
    id: "skin-care",
    title: "Skin Care",
    description: "Experience premium skin care treatments that rejuvenate and nourish your skin for a radiant glow.",
    image: "/skin-care.png",
    subServices: [
      { name: "Underarm Polishing", duration: "1 Hr", price: 149 },
      { name: "Feet Polishing", duration: "1 Hr", price: 199 },
      { name: "Half Leg Polishing", duration: "1 Hr", price: 299 },
      { name: "Half Hand Polishing", duration: "1 Hr", price: 199 },
      { name: "Full Hand Polishing", duration: "1 Hr", price: 299 },
      { name: "Full Leg Polishing", duration: "1 Hr", price: 599 },
      { name: "Face and Neck Polishing", duration: "1 Hr", price: 549 },
      { name: "Full Body Polishing", duration: "1 Hr", price: 1799 },
    ],
  },

  // -----------------------------
  // CLEANUP
  // -----------------------------
  {
    id: "cleanup",
    title: "Cleanup",
    description:
      "Deep cleansing treatments designed to purify, brighten and refresh your skin.",
    image: "/cleanup.webp",
    subServices: [
      { name: "Regular Cleanup", duration: "1 Hr", price: 699 },
      { name: "Skin Lightening Cleanup", duration: "1 Hr", price: 799 },
      { name: "Enzyme Cleanup", duration: "1 Hr", price: 899 },
      { name: "Anti-Pigmentation Cleanup", duration: "1 Hr", price: 999 },
      { name: "Gold Cleanup", duration: "1 Hr", price: 1199 },
      { name: "Hydra Cleanup", duration: "1 Hr", price: 1499 },
      { name: "Korean Glass Skin Cleanup", duration: "1 Hr", price: 1799 },
    ],
  },

  // -----------------------------
  // FACIAL
  // -----------------------------
  {
    id: "facial",
    title: "Facial",
    description:
      "Premium facials crafted for hydration, brightening, anti-aging, and complete skin rejuvenation.",
    image: "/facial.webp",
    subServices: [
      { name: "Skin Lightening Facial", duration: "1 Hr", price: 999, description: "Reduces dark spots and blemishes" },
      {
        name: "Platinum / Diamond Facial",
        duration: "1 Hr",
        price: 1499,
        description: "Deep hydration and skin nourishment",
      },
      {
        name: "Glycolic Facial",
        duration: "1 Hr",
        price: 1999,
        description: "Improves uneven skin tone and lightens pigmentation",
      },
      { name: "Deep Pore Facial", duration: "1 Hr", price: 2499, description: "Unclogs pores and removes impurities" },
      {
        name: "Skin Collagen & Anti-Ageing Control Facial",
        duration: "1 Hr",
        price: 2999,
        description: "Tightens skin and reduces wrinkles",
      },
      { name: "Vitamin C Facial", duration: "1 Hr", price: 3299, description: "Brightens dull and uneven skin" },
      {
        name: "Korean Glass Skin Facial",
        duration: "1 Hr",
        price: 3499,
        description: "Gives a luminous and radiant glow",
      },
      {
        name: "Hydra Facial",
        duration: "1 Hr",
        price: 3499,
       description: "Deep cleansing + hydration for smooth, glowing skin",
      },
      {
        name: "Golden Facial",
        duration: "1 Hr",
        price: 4199,
        description: "Brightens complexion and reduces dullness",
      },
      {
        name: "Rejuvenale with Oxyblast Facial",
        duration: "1 Hr",
        price: 4599,
        description: "Improves skin texture & tightens sagging skin",
      },
      {
        name: "Dead Sea Facial",
        duration: "1 Hr",
        price: 5199,
        description: "Clarifies acne-prone skin and exfoliates deeply",
      },
    ],
  },

  // -----------------------------
  // HAIR CUT
  // -----------------------------
  {
    id: "hair-cut",
    title: "Hair Cut",
    description:
      "From simple trims to complete transformations, our stylists craft the perfect look tailored to you.",
    image: "/haircut.png",
    subServices: [
      { name: "Front Fringes", duration: "1 Hr", price: 199 },
      { name: "Front Framing", duration: "1 Hr", price: 349 },
      { name: "Kids Haircut", duration: "1 Hr", price: 349 },
      { name: "Hair Trim", duration: "1 Hr", price: 299 },
      { name: "U Cut", duration: "1 Hr", price: 349 },
      { name: "V Cut", duration: "1 Hr", price: 349 },
      { name: "Change of Look", duration: "1 Hr", price: 549 },
      { name: "Advanced Layer Cut", duration: "1 Hr", price: 1199 },
    ],
  },

  // -----------------------------
// STYLING
// -----------------------------
{
  id: "styling",
  title: "Styling",
  description:
    "Professional styling for smooth, shiny, voluminous, or curled hair — customized to your perfect look.",
  image: "/hairwash.webp",
  subServices: [
    { name: "Combo Offer", duration: "1 Hr", price: 13000 },
    { name: "Basic Shampoo & Conditioning (Small)", duration: "1 Hr", price: 149 },
    { name: "Basic Shampoo & Conditioning (Medium)", duration: "1 Hr", price: 249 },
    { name: "Basic Shampoo & Conditioning (Large)", duration: "1 Hr", price: 349 },
    { name: "Advanced Shampoo & Conditioning (Small)", duration: "1 Hr", price: 499 },
    { name: "Advanced Shampoo & Conditioning (Medium)", duration: "1 Hr", price: 599 },
    { name: "Advanced Shampoo & Conditioning (Large)", duration: "1 Hr", price: 699 },
    { name: "Blow Dry Set (Small)", duration: "1 Hr", price: 549 },
    { name: "Blow Dry Set (Medium)", duration: "1 Hr", price: 649 },
    { name: "Blow Dry Set (Large)", duration: "1 Hr", price: 749 },
    { name: "Ironing Curls (Small)", duration: "1 Hr", price: 999 },
    { name: "Ironing Curls (Medium)", duration: "1 Hr", price: 1499 },
    { name: "Ironing Curls (Large)", duration: "1 Hr", price: 1999 },
  ],
},

// -----------------------------
// HEAD MASSAGE
// -----------------------------
{
  id: "head-massage",
  title: "Head Massage",
  description:
    "Relaxing and nourishing head massages to relieve stress and enhance scalp health.",
  image: "/headmassage.webp",
  subServices: [
    { name: "Coconut Nourisher", duration: "1 Hr", price: 349 },
    { name: "Almond Indulgence", duration: "1 Hr", price: 449 },
    { name: "Olive Oil Massage", duration: "1 Hr", price: 549 },
  ],
},

// -----------------------------
// NAILS
// -----------------------------
{
  id: "nails",
  title: "Nails",
  description:
    "Premium nail services from gel polishing to nail extensions, crafted for beauty and precision.",
  image: "/nails.webp",
  subServices: [
    { name: "Gel Polish Glitter", duration: "1 Hr", price: 99 },
    { name: "Gel Polish Removal", duration: "1 Hr", price: 299 },
    { name: "Nail Extension Removal", duration: "1 Hr", price: 599 },
    { name: "Gel Polish", duration: "1 Hr", price: 799 },
    { name: "Overlays with Gel Polish", duration: "1 Hr", price: 1199 },
    { name: "Nail Extension", duration: "1 Hr", price: 2199 },
  ],
},

// -----------------------------
// REFLEXOLOGY
// -----------------------------
{
  id: "reflexology",
  title: "Reflexology",
  description:
    "Therapeutic massage treatments designed to release tension and improve relaxation.",
  image: "/reflexology.webp",
  subServices: [
    { name: "Face Massage", duration: "1 Hr", price: 399 },
    { name: "Hand Massage", duration: "1 Hr", price: 399 },
    { name: "Leg Massage", duration: "1 Hr", price: 499 },
    { name: "Feet Massage", duration: "1 Hr", price: 399 },
    { name: "Full Body Massage", duration: "1 Hr", price: 2999 },
  ],
},

// -----------------------------
// WAXING – FLAVORED WAX
// -----------------------------
{
  id: "flavored-wax",
  title: "Waxing – Flavored Wax",
  description:
    "Smooth and gentle flavored waxing services for a clean, polished look.",
  image: "/waxing.png",
  subServices: [
    { name: "Half Hand Wax", duration: "1 Hr", price: 279 },
    { name: "Full Hand Wax", duration: "1 Hr", price: 399 },
    { name: "Half Leg Wax", duration: "1 Hr", price: 379 },
    { name: "Full Leg Wax", duration: "1 Hr", price: 549 },
  ],
},

// -----------------------------
// DETAN BRAZILIAN WAX
// -----------------------------
{
  id: "detan-wax",
  title: "Detan Brazilian Wax",
  description:
    "Specialized waxing services for deep tan removal and smooth skin.",
  image: "/detan.webp",
  subServices: [
    { name: "Upperlip", duration: "1 Hr", price: 59 },
    { name: "Chin", duration: "1 Hr", price: 99 },
    { name: "Face Cheeks Wax", duration: "1 Hr", price: 119 },
    { name: "Underarm", duration: "1 Hr", price: 199 },
    { name: "Face Wax", duration: "1 Hr", price: 449 },
  ],
},

// -----------------------------
// BODY CARE
// -----------------------------
{
  id: "body-care",
  title: "Body Care",
  description:
    "Essential grooming and skincare services to keep you fresh and well-maintained.",
  image: "/bodycare.webp",
  subServices: [
    { name: "Forehead", duration: "1 Hr", price: 19 },
    { name: "Upper Lip", duration: "1 Hr", price: 29 },
    { name: "Chin Body Care", duration: "1 Hr", price: 39 },
    { name: "Eyebrow", duration: "1 Hr", price: 49 },
    { name: "Facial Threading", duration: "1 Hr", price: 149 },
  ],
},// -----------------------------
// MANICURE & PEDICURE
// -----------------------------
{
  id: "manicure-pedicure",
  title: "Manicure & Pedicure",
  description:
    "Premium manicure and pedicure services designed to refresh, soften, and beautify your hands and feet.",
  image: "/manicure.webp",
  subServices: [
    { name: "Classic Manicure", duration: "1 Hr", price: 349 },
    { name: "Express Manicure", duration: "1 Hr", price: 449 },
    { name: "Classic Pedicure", duration: "1 Hr", price: 499 },
    { name: "Ice Cream Spa Manicure", duration: "1 Hr", price: 649 },
    { name: "Express Pedicure", duration: "1 Hr", price: 699 },
    { name: "Paraffin Manicure", duration: "1 Hr", price: 749 },
    { name: "Paraffin Pedicure", duration: "1 Hr", price: 999 },
    { name: "Ice Cream Spa Pedicure", duration: "1 Hr", price: 1199 },
    { name: "Heel Peel Pedicure", duration: "1 Hr", price: 1499 },
  ],
},

// -----------------------------
// PEELING
// -----------------------------
{
  id: "peeling",
  title: "Peeling",
  description:
    "Advanced dermatological peeling treatments for radiant, smooth, and youthful skin.",
  image: "/peeling.webp",
  subServices: [
    {
      name: "Salicylic Peel",
      duration: "1 Hr",
      price: 3999,
      description:
        "Perfect for acne-prone skin, reduces oiliness and unclogs pores.",
    },
    {
      name: "Glutathione Peel",
      duration: "1 Hr",
      price: 3499,
      description:
        "Brightens skin, reduces pigmentation, and improves skin texture.",
    },
    {
      name: "Glycolic Peel",
      duration: "1 Hr",
      price: 3999,
      description:
        "Treats hyperpigmentation, improves skin texture and radiance.",
    },
    {
      name: "Vitamin C Peel",
      duration: "1 Hr",
      price: 2999,
      description:
        "Boosts collagen, brightens complexion, reduces dark spots.",
    },
    {
      name: "Retinol Peel",
      duration: "1 Hr",
      price: 3499,
      description: "Anti-aging, reduces fine lines and improves skin clarity.",
    },
    {
      name: "Lactic Peel",
      duration: "1 Hr",
      price: 3499,
      description: "Gentle peel for dry/sensitive skin, improves brightness.",
    },
    {
      name: "Party Peel",
      duration: "1 Hr",
      price: 2499,
      description: "Instant radiance boost, suitable for all skin types.",
    },
  ],
},

// -----------------------------
// HAIR SPA
// -----------------------------
{
  id: "hair-spa",
  title: "Hair Spa",
  description:
    "Deep nourishment, repair, and rejuvenation treatments for healthy, shiny, and manageable hair.",
  image: "/hair-spa.webp",
  subServices: [
    // SMALL
    { name: "Deep Nourishing (Small)", duration: "1 Hr", price: 849 },
    {
      name: "Repair Treatment for Dry Damaged Hair (Small)",
      duration: "1 Hr",
      price: 949,
    },
    {
      name: "Anti-Hair Fall / Anti-Dandruff Treatment (Small)",
      duration: "1 Hr",
      price: 1199,
    },
    { name: "Lice Treatment (Small)", duration: "1 Hr", price: 1999 },
    { name: "Advance Keratin Spa (Small)", duration: "1 Hr", price: 2399 },

    // MEDIUM
    { name: "Deep Nourishing (Medium)", duration: "1 Hr", price: 949 },
    {
      name: "Repair Treatment for Dry Damaged Hair (Medium)",
      duration: "1 Hr",
      price: 1049,
    },
    {
      name: "Anti-Hair Fall / Anti-Dandruff Treatment (Medium)",
      duration: "1 Hr",
      price: 1449,
    },
    { name: "Lice Treatment (Medium)", duration: "1 Hr", price: 2999 },
    { name: "Advance Keratin Spa (Medium)", duration: "1 Hr", price: 2799 },

    // LONG
    { name: "Deep Nourishing (Long)", duration: "1 Hr", price: 1049 },
    {
      name: "Repair Treatment for Dry Damaged Hair (Long)",
      duration: "1 Hr",
      price: 1149,
    },
    {
      name: "Anti-Hair Fall / Anti-Dandruff Treatment (Long)",
      duration: "1 Hr",
      price: 1799,
    },
    { name: "Lice Treatment (Long)", duration: "1 Hr", price: 3999 },
    { name: "Advance Keratin Spa (Long)", duration: "1 Hr", price: 3199 },
  ],
},

// -----------------------------
// HAIR COLORING
// -----------------------------
{
  id: "hair-coloring",
  title: "Hair Coloring",
  description:
    "Vibrant, long-lasting hair coloring options from streaks to full coverage.",
  image: "/hair-coloring.png",
  subServices: [
    // SMALL
    { name: "Highlights per Streak / Pre-Lightening (Small)", duration: "1 Hr", price: 349 },
    { name: "Root Touchup (Small)", duration: "1 Hr", price: 899 },
    { name: "Global Hair Colouring (Small)", duration: "1 Hr", price: 1499 },
    { name: "Global Highlights (Small)", duration: "1 Hr", price: 2799 },

    // MEDIUM
    { name: "Root Touchup (Medium)", duration: "1 Hr", price: 999 },
    { name: "Global Hair Colouring (Medium)", duration: "1 Hr", price: 1799 },
    { name: "Global Highlights (Medium)", duration: "1 Hr", price: 3199 },

    // LONG
    { name: "Root Touchup (Long)", duration: "1 Hr", price: 1199 },
    { name: "Global Hair Colouring (Long)", duration: "1 Hr", price: 2499 },
    { name: "Global Highlights (Long)", duration: "1 Hr", price: 3999 },
  ],
},

// -----------------------------
// TEXTURE CHANGE
// -----------------------------
{
  id: "texture-change",
  title: "Texture Change",
  description:
    "Transform your hair with professional straightening, smoothening, and keratin treatments.",
  image: "/hair-straigtening.webp",
  subServices: [
    // SMALL
    { name: "Straightening (Small)", duration: "1 Hr", price: 2999 },
    { name: "Smoothening (Small)", duration: "1 Hr", price: 3999 },
    { name: "Keratin (Small)", duration: "1 Hr", price: 4999 },

    // MEDIUM
    { name: "Straightening (Medium)", duration: "1 Hr", price: 4999 },
    { name: "Smoothening (Medium)", duration: "1 Hr", price: 5999 },
    { name: "Keratin (Medium)", duration: "1 Hr", price: 6999 },

    // LONG
    { name: "Straightening (Long)", duration: "1 Hr", price: 6999 },
    { name: "Smoothening (Long)", duration: "1 Hr", price: 7999 },
    { name: "Keratin (Long)", duration: "1 Hr", price: 8999 },
  ],
},

]
