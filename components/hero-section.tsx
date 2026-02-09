"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-20 md:min-h-[85vh]">
      {/* Subtle radial background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(30 25% 90%) 0%, transparent 70%)",
        }}
      />

      {/* Animated Logo - centered, no background ring */}
      <div className="relative flex flex-col items-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 -rotate-6"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="relative h-44 w-44 md:h-56 md:w-56 lg:h-64 lg:w-64">
            <Image
              src="/images/logo.png"
              alt="Shakima's Mix Logo"
              fill
              className="object-contain"
              priority
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        {/* Decorative line beneath logo */}
        <div
          className={`mt-6 h-px transition-all duration-1000 ease-out ${
            isLoaded ? "w-24 opacity-100" : "w-0 opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(0 50% 30%), transparent)",
            transitionDelay: "0.7s",
          }}
        />

        {/* Brand name & Tagline */}
        <div
          className={`mt-6 text-center transition-all duration-700 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Traditional Millet Mixes
          </h1>
        </div>

        <p
          className={`mx-auto mt-4 max-w-md text-center text-base leading-relaxed text-muted-foreground transition-all duration-700 md:text-lg ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.75s" }}
        >
          Wholesome, nutritious, and crafted with love. Bringing the goodness
          of millets to your kitchen.
        </p>

        {/* Scroll indicator */}
        <div
          className={`mt-14 flex flex-col items-center gap-2 text-muted-foreground transition-all duration-700 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1.1s" }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">
            Explore Our Products
          </span>
          <div className="animate-float">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              className="text-primary"
            >
              <path
                d="M10 3v14m0 0l-5-5m5 5l5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
