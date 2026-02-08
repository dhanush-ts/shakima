"use client"

import type React from "react"
import { Instagram, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Showcase", href: "#showcase" },
  { label: "Saloons", href: "#saloons" },
]

export function FooterSection() {
  const pathname = usePathname()
  const router = useRouter()

   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If we're on the home page, just scroll
    if (pathname === "/") {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to home page with hash
      router.push(`/${href}`)
    }
  }
  return (
    <footer id="contact" className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h2
            className="text-6xl md:text-8xl font-serif text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* EVA BEAUTY LOUNGE. */}
            <img className="mx-auto" src="/loho black.png" alt="" />
          </motion.h2>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8">
            {footerLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-muted-foreground cursor-none hover:text-primary transition-colors text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-clickable
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://www.instagram.com/evabeautylounge99?igsh=YTllZmkzZDhuMW1y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Instagram"
              data-clickable
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/9840015548"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="WhatsApp"
              data-clickable
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 EVA BEAUTY LOUNGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
