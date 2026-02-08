import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Great_Vibes, Parisienne, Allura, Dancing_Script, Tangerine } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

const _greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const _parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
})

const _allura = Allura({
  subsets: ["latin"],
  weight: "400",
})

const _dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const _tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Eva Beauty Lounge - Premier Bridal Makeup & Beauty Services",
  description:
    "Your trusted partner for stunning bridal looks. Expert makeup artists, personalized beauty services, and unforgettable transformations.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.webp",
        type: "image/webp",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
