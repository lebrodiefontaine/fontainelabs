"use client"

import Link from "next/link"
import { Smartphone, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <Smartphone className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">Fontaine Labs LLC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#apps">
            Our Apps
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/aura-pro">
            Aura Pro
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/uni-chance">
            UniChance
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/link">
            LikeBack
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#contact">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/#apps"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Apps
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/aura-pro"
              onClick={() => setIsMenuOpen(false)}
            >
              Aura Pro
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/uni-chance"
              onClick={() => setIsMenuOpen(false)}
            >
              UniChance
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/link"
              onClick={() => setIsMenuOpen(false)}
            >
              LikeBack
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
