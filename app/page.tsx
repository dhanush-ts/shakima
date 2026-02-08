import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/be_u"
import { FeaturesSection } from "@/components/sections/services"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/reels"
import { InsightsSection } from "@/components/sections/faq"
import { PricingSection } from "@/components/sections/testimonials"
import { FooterSection } from "@/components/sections/footer-section"
import { FloatingHeader } from "@/components/sections/header"
import { SaloonsSection } from "@/components/sections/saloons-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Eva Beauty Lounge - Home",
  description:
    "Your trusted partner for stunning bridal looks. Expert makeup artists and personalized beauty services.",
}

export default function Home() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <div className="mx-4">
          <FloatingHeader />
        </div>
        <CustomCursor />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <SaloonsSection />
        <ShowcaseSection />
        <CarouselSection />
        <InsightsSection />
        <PricingSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}