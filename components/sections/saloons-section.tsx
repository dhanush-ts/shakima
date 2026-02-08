"use client"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import Image from "next/image"

interface Saloon {
  id: number
  name: string
  image: string
  location: string
  phone: string
  address: string
}

const saloons: Saloon[] = [
  {
    id: 1,
    name: "Kolathur Branch",
    image: "/kolathur.webp",
    location: "https://maps.app.goo.gl/FdMRbcbNiMF15qyj7",
    phone: "9840015548",
    address: "No: 18 Vivekananda Nagar Main Road, Senthil Nagar Signal, opposite Indian petrol Bunk, Kolathur, Chennai, Tamil Nadu - 600099",
  },
  {
    id: 2,
    name: "Kodungaiyur Branch",
    image: "/mkb.webp",
    location: "https://maps.app.goo.gl/NSdjwA6q3JM1J5rD9",
    phone: "8056351293",
    address: "Address: 2nd Floor, 154/160, Sidco Main Rd, above HDFC bank, Kodungaiyur (East), MR Nagar, Kodungaiyur, Chennai, Tamil Nadu - 600118",
  },
]

export function SaloonsSection() {
  return (
    <section id="saloons" className="bg-primary px-6 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Our Saloons</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-iris"></div>
            <div className="h-px w-24 bg-iris"></div>
          </div>
        </motion.div>

        {/* Saloons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {saloons.map((saloon, index) => (
            <motion.div
              key={saloon.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <a
                href={saloon.location}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] overflow-hidden rounded-lg mb-6 border shadow-lg cursor-pointer"
              >
                <Image
                  src={saloon.image || "/placeholder.svg"}
                  alt={saloon.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <div className="text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{saloon.name}</h3>
                <p className="text-black text-sm md:text-base mb-4">{saloon.address}</p>
                <a
                  href={`tel:${saloon.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Contact Us</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
