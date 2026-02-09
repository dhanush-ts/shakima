"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  image: string
  href: string
  description: string
  delay: number
}

export function ProductCard({ title, image, href, description, delay }: ProductCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <Link href={href} className="group block">
        <div className="overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-xl hover:ring-primary/30 hover:-translate-y-1">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />

            {/* View recipe badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              View Recipe
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7m0 0L6.5 3m3 3l-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-5">
            <h3 className="mb-1 font-serif text-lg font-bold text-foreground md:text-xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
