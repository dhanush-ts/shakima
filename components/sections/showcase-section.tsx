"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const showcaseImages = [
  "/modern-architecture-building-exterior-minimal.jpg",
  "/interior-design-minimalist-living-room-natural-lig.webp",
  "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section id="showcase" ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground pb-12">
          <span className="text-balance">
            Our <span className="text-primary font-bold">Makeovers</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={src || "/black.jpg"}
                alt={`Showcase image ${i + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/makeover"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-serif text-lg rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
