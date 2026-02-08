"use client"

import React from "react"
import { MenuIcon, XIcon } from "lucide-react"
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { usePathname, useRouter } from "next/navigation"

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()


  const links = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Showcase",
      href: "#showcase",
    },
    {
      label: "Contact Us",
      href: "#contact",
    },
  ]

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")

    if (pathname === "/") {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        setOpen(false)
      }
    } else {
      router.push(`/${href}`)
      setOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-5 left-0 right-0 z-50",
        "mx-auto w-full max-w-6xl rounded-lg border shadow-lg",
        "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-1.5 px-4">
        <Link href="/" className="hover:opacity-80 flex items-center gap-2 rounded-md py-1 duration-200">
          <img src="/loho black.png" alt="Logo" className="h-10 w-auto object-contain" />
        </Link>
        <div className="hidden items-center cursor-none gap-1 lg:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              className={`${buttonVariants({ variant: "ghost", size: "sm" })} cursor-none`}
              href={link.href}
              data-clickable
              onClick={(e) => handleScrollToSection(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
            </Button>
            <SheetContent
              className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
              side="left"
            ><DialogTitle></DialogTitle>
              <div className="flex flex-col justify-center h-full gap-6 px-6">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    className="text-3xl font-serif text-black tracking-wider  hover:text-iris transition-colors text-center py-4"
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}