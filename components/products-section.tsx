import { ProductCard } from "./product-card"

const products = [
  {
    title: "Adai Mix",
    image: "/images/adai-mix.jpg",
    href: "/products/adai-mix",
    description: "Crispy millet crepe packed with protein and traditional spices.",
  },
  {
    title: "Millet Paruppu Sadham",
    image: "/images/paruppu-sadham.jpg",
    href: "/products/paruppu-sadham",
    description: "Comforting millet-lentil rice, a wholesome one-pot meal.",
  },
  {
    title: "Millet Pongal Mix",
    image: "/images/pongal-mix.jpg",
    href: "/products/pongal-mix",
    description: "Classic South Indian pongal made with nutritious millets.",
  },
  {
    title: "Red Rice Puttu Redimix",
    image: "/images/red-rice-puttu.jpg",
    href: "/products/red-rice-puttu",
    description: "Nutritious red rice puttu mix, steamed to fluffy perfection.",
  },
]

export function ProductsSection() {
  return (
    <section className="px-4 pb-20 pt-8 md:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Products
          </p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-4xl">
            Choose Your Mix
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.href} {...product} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
