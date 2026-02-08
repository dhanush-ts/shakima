"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Neha Agarwal",
    role: "Business Owner",
    image: "/fashion-photography-editorial-black-and-white.webp",
    quote:
      "Got an hair cut, pedicure and manicure done Loved the service and overall outcome. Sabitha delivered a very smooth service. Thanks to the salon for economical pricing!.",
  },
  {
    name: "Harini",
    role: "Fashion Designer",
    image: "/modern-architecture-building-exterior-minimal.webp",
    quote:
      "We got hair spa . really their service excellent Preethi . she doing very well I'm really happy with the result",
  },
  {
    name: "Sri Dharshini",
    role: "Creative Director",
    image: "/fashion-model-editorial-portrait-dramatic-lighting.webp",
    quote:
      "Hi am getting eyebrow service in Eva beauty one of the best service I felt and thank you amrin Fathima you done this service to me is very satisfied ♥️I like to come again to get more service.",
  },
  {
    name: "roshini s",
    role: "Entrepreneur",
    image: "/interior-design-minimalist-living-room-natural-lig.webp",
    quote:
      "Preethi's haircut service was excellent. The staff Preethi  were friendly and professional. I’m really happy with the result — my hair looks fresh and stylish",
  },
]

export function PricingSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">What Our <span className="text-primary"> Clients</span> Say</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Hear from those who experienced our exceptional service
          </p>
        </motion.div>

        <div className="relative min-h-[400px] md:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-lg"
              data-clickable
            >
              <Quote className="w-12 h-12 text-primary mb-6" />

              <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                {/* <div className="w-16 h-16 rounded-full overflow-hidden bg-accent">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div>
                  <h4 className="font-serif text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                  {/* <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-yellow-300" : "w-2 bg-black hover:bg-muted-foreground"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
