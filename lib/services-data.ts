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

export const servicesData: Service[] = [
  {
    id: "skin-care",
    title: "Skin Care",
    description:
      "Experience premium skin care treatments that rejuvenate and nourish your skin with our expert polishing services.",
    image: "/fashion-photography-editorial-black-and-white.webp",
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
  {
    id: "cleanup",
    title: "Cleanup",
    description:
      "Deep cleansing treatments that remove impurities and refresh your skin, from regular to specialized Korean glass skin cleanup.",
    image: "/modern-ui-design-portfolio-mockup.webp",
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
  {
    id: "facial",
    title: "Facial",
    description:
      "Luxurious facial treatments tailored to your skin needs, from hydration to anti-aging and brightening solutions.",
    image: "/fashion-model-editorial-portrait-dramatic-lighting.webp",
    subServices: [
      { name: "Skin Lightening Facial", duration: "1 Hr", price: 999, description: "Reduces dark spots and blemishes" },
      {
        name: "Platinum / Diamond Facial",
        duration: "1 Hr",
        price: 1499,
        description: "Helps with deep hydration and skin nourishment",
      },
      {
        name: "Glycolic Facial",
        duration: "1 Hr",
        price: 1999,
        description: "Lightens dark spots and improves uneven skin tone",
      },
      { name: "Deep Pore Facial", duration: "1 Hr", price: 2499, description: "Unclogs pores and reduces impurities" },
      {
        name: "Skin Collagen & Anti-Ageing Control Facial",
        duration: "1 Hr",
        price: 2999,
        description: "Improves elasticity, reduces wrinkles and fine lines",
      },
      { name: "Vitamin C Facial", duration: "1 Hr", price: 3299, description: "For dull and uneven skin" },
      {
        name: "Korean Glass Skin Facial",
        duration: "1 Hr",
        price: 3499,
        description: "Gives a radiant and luminous complexion",
      },
      {
        name: "Hydra Facial",
        duration: "1 Hr",
        price: 3499,
        description: "Deep cleansing hydration, improves clogged pores",
      },
      { name: "Golden Facial", duration: "1 Hr", price: 4199, description: "Brightens complexion, reduces dullness" },
      {
        name: "Rejuvenale with Oxyblast Facial",
        duration: "1 Hr",
        price: 4599,
        description: "Tightens sagging skin and improves texture",
      },
      {
        name: "Dead Sea Facial",
        duration: "1 Hr",
        price: 5199,
        description: "Tightens acne-prone skin, clarifies and exfoliates",
      },
    ],
  },
  {
    id: "hair-cut",
    title: "Hair Cut",
    description:
      "Professional hair cutting services from simple trims to complete style transformations by expert stylists.",
    image: "/interior-design-minimalist-living-room-natural-lig.webp",
    subServices: [
      { name: "Front Fringes", duration: "1 Hr", price: 199 },
      { name: "Front Framing", duration: "1 Hr", price: 349 },
      { name: "Kids Haircut", duration: "1 Hr", price: 349 },
      { name: "Hair Trim", duration: "1 Hr", price: 299 },
      { name: "U Cut", duration: "1 Hr", price: 349 },
      { name: "V Cut", duration: "1 Hr", price: 349 },
      { name: "Change of Look", duration: "1 Hr", price: 549 },
      { name: "Advanced Layer Cut", duration: "1 Hr", price: 649 },
    ],
  },
  {
    id: "hair-wash",
    title: "Hair Wash",
    description:
      "Experience a luxurious hair wash with premium products that cleanse and nourish your hair, leaving it soft and refreshed.",
    image: "/minimal-architecture-portfolio-with-clean-lines.webp",
    subServices: [
      { name: "Basic Hair Wash", duration: "30 Min", price: 299 },
      { name: "Premium Hair Wash with Head Massage", duration: "45 Min", price: 499 },
      { name: "Deep Cleansing Hair Wash", duration: "1 Hr", price: 699 },
    ],
  },
  {
    id: "manicure",
    title: "Manicure",
    description:
      "Professional manicure services with expert nail care and nail art designs. Perfect for any occasion, from classic to creative.",
    image: "/modern-architecture-building-exterior-minimal.webp",
    subServices: [
      { name: "Basic Manicure", duration: "45 Min", price: 399 },
      { name: "French Manicure", duration: "1 Hr", price: 599 },
      { name: "Gel Manicure", duration: "1 Hr", price: 899 },
      { name: "Luxury Spa Manicure", duration: "1.5 Hr", price: 1299 },
    ],
  },
]
