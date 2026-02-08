"use client"

import { motion } from "framer-motion"

const reelsVideos = [
  "https://res.cloudinary.com/dcp8ommvi/video/upload/v1765617841/Eva_Hair_cut_reel_g35rjb.mp4",
  "https://res.cloudinary.com/dcp8ommvi/video/upload/v1765617859/evan_akka_makeup_reel_2_1_hrsgh8.mp4",
  "https://res.cloudinary.com/dcp8ommvi/video/upload/v1765625085/reel3_jpnmps.mp4",
]

export function CarouselSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest mb-4">Our</p> */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="text-balance">
              <span className="text-white font-bold">Showcase </span>Beauty Services</span>
          </h2>
        </motion.div>

        {/* Video Grid - 3 columns on laptop, 1 column (3 rows) on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reelsVideos.map((videoUrl, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-background shadow-xl border-2 border-primary-foreground/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              data-clickable
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* 9:16 Aspect Ratio Container */}
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
