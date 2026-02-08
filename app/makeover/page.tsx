import type { Metadata } from "next"
import { FloatingHeader } from "@/components/sections/header"
import { FooterSection } from "@/components/sections/footer-section"
import { LenisProvider } from "@/components/lenis-provider"

export const metadata: Metadata = {
  title: "Our Makeovers - Eva Beauty Lounge",
  description: "Browse our portfolio of stunning bridal makeovers and beauty transformations",
}

const allMakeovers = [
  "/model1.webp",
  "/model2.webp",
  "/model3.webp",
  "/model4.webp",
  "/model5.webp",
  "/model6.webp",
  "/modern-architecture-building-exterior-minimal.jpg",
  "/interior-design-minimalist-living-room-natural-lig.webp",
  "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
]

export default function MakeoverPage() {
  return (
    <LenisProvider>
      <main className="bg-background min-h-screen">
        <div className="mx-4">
          <FloatingHeader />
        </div>

        <section className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">Our Makeovers</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of stunning bridal makeovers and beauty transformations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {allMakeovers.map((imageUrl, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl bg-muted shadow-lg border border-border"
                >
                  <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={`Makeover ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* View All Samples Button */}
            <div className="text-center">
              <a
                href="https://drive.google.com/drive/folders/1PIWbvQAUkGTcAVnPXZM3_5-DpPsXS4mo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-serif text-lg rounded-full hover:bg-primary/90 transition-colors duration-300 mb-4"
              >
                View All Samples
              </a>
              <p className="text-sm text-muted-foreground">
                All samples available in our{" "}
                <a
                  href="https://drive.google.com/drive/folders/1PIWbvQAUkGTcAVnPXZM3_5-DpPsXS4mo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Drive
                </a>
              </p>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}
