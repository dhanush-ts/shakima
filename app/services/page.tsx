import Image from "next/image"
import Link from "next/link"
import { servicesData } from "@/lib/services-final"
import { FooterSection } from "@/components/sections/footer-section"
import { FloatingHeader } from "@/components/sections/header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Services - Eva Beauty Lounge",
  description:
    "Explore our complete range of premium beauty services including bridal makeup, hair care, skin treatments, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <FloatingHeader />
      <main className="min-h-screen bg-background pt-24 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              All <span className="text-primary font-bold">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore our complete range of premium beauty services tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={service.image || "/placeholder.svg?height=400&width=600"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-block px-5 py-2 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
