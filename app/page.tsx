import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <Footer />
    </main>
  )
}
