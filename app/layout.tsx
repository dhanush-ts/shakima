import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const _lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

export const metadata: Metadata = {
  title: "Shakima's Mix - Traditional Millet Mixes",
  description: 'Healthy, traditional South Indian millet-based food mixes. Easy to cook, nutritious, and delicious.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
