"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  )

  return (
    <section className="bg-background flex flex-col md:flex-none md:justify-center md:items-center py-8">
      
      {/* MOBILE LOGO (centered) */}
      <div className="mb-8 flex justify-center md:hidden">
        <img 
          src="/logo.webp" 
          alt="Logo" 
          className="w-md h-auto object-contain"
        />
      </div>

      {/* MAIN TEXT CONTAINER */}
      <div
        ref={containerRef}
        className="relative w-full flex justify-center px-6"
      >
        <div className="max-w-5xl mx-auto relative text-center">

          {/* GOLD TEXT */}
          <h2 className="
            text-4xl md:text-6xl lg:text-7xl 
            font-serif leading-tight 
            bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
            bg-clip-text text-transparent
          ">
            Be Proud,
            <br />
            Be You ...
          </h2>

          {/* BLACK REVEAL TEXT */}
          <motion.h2
            className="
              absolute inset-0 
              text-4xl md:text-6xl lg:text-7xl
              font-serif leading-tight 
              text-black text-center
            "
            style={{ clipPath }}
          >
            Be Proud,
            <br />
            Be You ...
          </motion.h2>

        </div>
      </div>
    </section>
  )
}
