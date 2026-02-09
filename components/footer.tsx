import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <Image
          src="/logo.png"
          alt="Shakima's Mix"
          width={56}
          height={56}
          className="opacity-80"
          style={{ mixBlendMode: "multiply" }}
        />
        <p className="text-sm text-muted-foreground">
          {"Shakima's Mix \u00A9 "}{new Date().getFullYear()}{". All rights reserved."}
        </p>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Crafted with traditional recipes and the finest millet grains for a healthier you.
        </p>
      </div>
    </footer>
  )
}
