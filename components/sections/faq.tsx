"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of hair and beauty services including hair wash, coloring, texture treatments, manicure, pedicure, facials, and personalized styling consultations. Each service is tailored to your individual needs and preferences.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Booking is simple and convenient. You can book online through our website or call us directly. We recommend booking in advance to secure your preferred time slot, especially for weekend appointments.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We're open Monday to Sunday, 9:00 AM - 9:00 PM. Extended hours are available by special appointment for events and group bookings.",
  },
  {
    question: "What service do you specialise in ?",
    answer:
      "We specialise in bridal makeup, we have completed more 100+ bridal makeups successfully",
  },
  {
    question: "Do you offer consultation services?",
    answer:
      "We offer complimentary consultations for all new clients and complex services like hair coloring or texture treatments. During the consultation, we'll discuss your goals, assess your hair or skin condition, and recommend the best treatment plan for you.",
  },
]

export function InsightsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-border rounded-lg curosr-none overflow-hidden bg-surface/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center cursor-none justify-between p-6 text-left hover:bg-surface/80 transition-colors group"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-serif text-lg md:text-xl text-foreground pr-8 group-hover:text-iris transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-iris" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground group-hover:text-iris transition-colors" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-muted-foreground font-serif leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
