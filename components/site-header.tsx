"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Fontaine Labs</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/aura-pro" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Aura Pro
            </Link>
            <Link href="/uni-chance" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Uni Chance
            </Link>
            <Link href="/link" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Likeback
            </Link>
          </nav>
        </div>
        <Button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          variant="ghost"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <span className="font-bold">Fontaine Labs</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="flex flex-col space-y-3 p-4">
            <Link
              href="/aura-pro"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aura Pro
            </Link>
            <Link
              href="/uni-chance"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Uni Chance
            </Link>
            <Link
              href="/link"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Likeback
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
