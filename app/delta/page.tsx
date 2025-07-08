import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AppIcon } from "@/components/app-icon"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Shield } from "lucide-react"

export default function DeltaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-400 to-purple-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-4">
                  Delta
                </h1>
                <p className="text-white text-xl mb-6">
                  Build better habits, one day at a time. Delta helps you track, improve, and celebrate your daily progress.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link href="/delta/support">
                    <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                      <MessageSquare className="mr-2 h-4 w-4 text-gray-600" /> Support
                    </Button>
                  </Link>
                  <Link href="/delta/privacy">
                    <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                      <Shield className="mr-2 h-4 w-4 text-gray-600" /> Privacy Policy
                    </Button>
                  </Link>
                  <Link href="/delta/terms">
                    <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                      <Shield className="mr-2 h-4 w-4 text-gray-600" /> Terms of Service
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <AppIcon app="aura-pro" size="xl" className="w-48 h-48 md:w-64 md:h-64" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 