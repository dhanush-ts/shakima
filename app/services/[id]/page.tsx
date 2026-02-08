import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { servicesData } from "@/lib/services-final"
import { FloatingHeader } from "@/components/sections/header"
import { FooterSection } from "@/components/sections/footer-section"
import { ArrowLeft } from "lucide-react"
import { CustomCursor } from "@/components/custom-cursor"
import { LenisProvider } from "@/components/lenis-provider"
import type { Metadata } from "next"

// Generate static routes
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: String(service.id), // ensure slug is a string
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const {id} = await params;
  const service = servicesData.find((s) => s.id === id)

  if (!service) {
    return {
      title: "Service Not Found - Eva Beauty Lounge",
    }
  }

  return {
    title: `${service.title} - Eva Beauty Lounge`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 

  // Fix ID matching
  const service = servicesData.find((s) => String(s.id) === id)

  if (!service) {
    return notFound()
  }

  return (
    <LenisProvider>
        <div className="bg-background min-h-screen cursor-none">
            <CustomCursor />
        <div className="mx-4">
            <FloatingHeader />
        </div>

        <main className="pt-24 pb-16">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
            <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Services</span>
            </Link>
            </div>

            {/* Service Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
                <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                </div>

                <div className="lg:sticky lg:top-28">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                    {service.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                </p>
                </div>
            </div>
            </div>

            {/* Sub Services */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Available Services</h2>

            <div className="space-y-4">
                {service.subServices?.map((subService, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-4 p-6 border bg-card rounded-lg hover:shadow-md transition-shadow"
                >
                    <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground mb-2">{subService.name}</h3>
                    {subService.description && (
                        <p className="text-sm text-muted-foreground mb-2">
                        {subService.description}
                        </p>
                    )}
                    <p className="text-sm text-muted-foreground">{subService.duration}</p>
                    </div>

                    <p className="font-serif text-2xl text-iris">₹{subService.price.toLocaleString()}</p>
                </div>
                ))}
            </div>
            </div>

            {/* CTA */}
            <div className="max-w-7xl mx-auto px-6">
            <div className="bg-iris/5 border border-iris/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Ready to book?
                </h3>
                <p className="text-muted-foreground mb-6">
                Schedule your appointment and experience luxury beauty services
                </p>

                <a
                href="https://www.welns.io/product/booking/WFRCHN468667?bk_src=GMAPS110"
                className="inline-block bg-black hover:bg-black/90 cursor-none text-white font-medium px-8 py-4 rounded-lg transition-colors"
                target="_blank"

                >
                Book a Service
                </a>
            </div>
            </div>
        </main>

        <FooterSection />
        </div>
    </LenisProvider>
  )
}
