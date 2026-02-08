"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Component } from "../animated-button"

const images = [
  "/allwin_3.webp",
  "/allwin_1.webp",
  "/allwin_2.webp",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -15])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15])
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background px-6 py-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-16">
        <div className="relative flex items-center justify-center w-full lg:w-auto lg:flex-shrink-0">
          <motion.div
            className="absolute w-[280px] md:w-[320px] lg:w-[340px] xl:w-[380px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={images[0] || "/placeholder.svg"}
              alt="Portfolio showcase 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="relative w-[280px] md:w-[320px] lg:w-[340px] xl:w-[380px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            style={{ rotate: rotate2, y, zIndex: 2 }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={images[1] || "/placeholder.svg"}
              alt="Portfolio showcase 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute w-[280px] md:w-[320px] lg:w-[340px] xl:w-[380px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={images[2] || "/placeholder.svg"}
              alt="Portfolio showcase 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-auto  space-y-6 lg:space-y-8 text-center lg:text-left mt-12 lg:mt-0 px-4 lg:pl-24"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >


          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary leading-tight">
            Eva Beauty Lounge
          </h2>


          <p className="text-lg font-serif md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            
            Your trusted partner for stunning bridal looks. Expert makeup artists, personalized services, and
            unforgettable beauty experiences.

          </p>

          <h3 className="font-dancing-script text-2xl lg:text-3xl xl:text-4xl">
            Experience Luxury Service at affordable price !
          </h3>
          <Component />

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
