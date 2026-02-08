"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { servicesData } from "@/lib/services-final"

export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const displayServices = servicesData.slice(0, 3)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayServices.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isMobile, displayServices.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : displayServices.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayServices.length)
  }

  return (
    <section id="services" className="bg-background px-6 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex justify-between items-end">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="text-primary font-bold">Premium </span>
            Beauty services
          </h2>
          <Link
            href="/services"
            className="hidden lg:block px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Desktop: Show all 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="block group">
              <div className="h-full border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={service.image || "/placeholder.svg?height=400&width=600"}
                    alt={service.title}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="group-hover:text-[#D4AF37] font-serif text-xl md:text-2xl text-foreground mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Carousel with 1 card */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {displayServices.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`} className="min-w-full block">
                  <div className="border bg-card overflow-hidden shadow-sm">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={service.image || "/placeholder.svg?height=400&width=600"}
                        alt={service.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-4 py-4">
                      <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {displayServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-8 text-center">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
