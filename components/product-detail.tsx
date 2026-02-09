"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

interface NutritionItem {
  label: string
  value: string
}

interface ProductDetailProps {
  title: string
  image: string
  nutrition: NutritionItem[]
  steps: string[]
  ingredients: string
  stepsMalay: string[]
  ingredientsMalay: string
  nutritionLabelsMalay: { label: string; value: string }[]
}

export function ProductDetail({
  title,
  image,
  nutrition,
  steps,
  ingredients,
  stepsMalay,
  ingredientsMalay,
  nutritionLabelsMalay,
}: ProductDetailProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [lang, setLang] = useState<"en" | "ms">("en")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ms" : "en"))
  }, [])

  const currentSteps = lang === "en" ? steps : stepsMalay
  const currentIngredients = lang === "en" ? ingredients : ingredientsMalay
  const currentNutrition = lang === "en" ? nutrition : nutritionLabelsMalay

  const labels = {
    en: {
      back: "Back to Products",
      brand: "Shakima's Mix",
      ingredients: "Ingredients",
      nutritionTitle: "Nutritional Information",
      nutritionSub: "Per 100g serving (approximate values)",
      methodTitle: "Method of Preparation",
      methodSub: "Follow these simple steps",
      translateBtn: "Bahasa Melayu",
    },
    ms: {
      back: "Kembali ke Produk",
      brand: "Shakima's Mix",
      ingredients: "Bahan-bahan",
      nutritionTitle: "Maklumat Pemakanan",
      nutritionSub: "Setiap 100g hidangan (anggaran nilai)",
      methodTitle: "Cara Penyediaan",
      methodSub: "Ikuti langkah-langkah mudah ini",
      translateBtn: "English",
    },
  }

  const t = labels[lang]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.back}
          </Link>

          <div className="flex items-center gap-3">
            {/* Translate Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:shadow-sm active:scale-95"
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
              {t.translateBtn}
            </button>

            <Image
              src="/images/logo.png"
              alt="Shakima's Mix"
              width={40}
              height={40}
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Hero */}
        <div
          className={`mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:gap-12 ${
            isLoaded ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationFillMode: "both" }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg md:w-1/2">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title & Ingredients */}
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              {t.brand}
            </p>
            <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <div className="rounded-lg bg-secondary/60 p-4">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t.ingredients}
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                {currentIngredients}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Nutrition */}
          <div
            className={`${isLoaded ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            <h2 className="mb-4 font-serif text-xl font-bold text-foreground md:text-2xl">
              {t.nutritionTitle}
            </h2>
            <p className="mb-4 text-xs text-muted-foreground">
              {t.nutritionSub}
            </p>
            <div className="overflow-hidden rounded-lg ring-1 ring-border">
              {currentNutrition.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i % 2 === 0 ? "bg-card" : "bg-secondary/40"
                  }`}
                >
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Method */}
          <div
            className={`${isLoaded ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            <h2 className="mb-4 font-serif text-xl font-bold text-foreground md:text-2xl">
              {t.methodTitle}
            </h2>
            <p className="mb-4 text-xs text-muted-foreground">
              {t.methodSub}
            </p>
            <ol className="space-y-4">
              {currentSteps.map((step, i) => (
                <li key={`step-${lang}-${i}`} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <Image
            src="/images/logo.png"
            alt="Shakima's Mix"
            width={44}
            height={44}
            className="opacity-80"
            style={{ mixBlendMode: "multiply" }}
          />
          <p className="text-xs text-muted-foreground">
            {"Shakima's Mix \u00A9 "}
            {new Date().getFullYear()}
            {". All rights reserved."}
          </p>
        </div>
      </footer>
    </main>
  )
}
