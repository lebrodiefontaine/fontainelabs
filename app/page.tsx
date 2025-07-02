"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, MessageSquare, ChevronRight } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  // Aura Pro App Store URL
  const auraPro = {
    appStore: "https://apps.apple.com/us/app/aura-pro-elite-aura-analysis/id6743044971",
  }

  // UniChance App Store and Google Play URLs
  const uniChance = {
    appStore: "https://apps.apple.com/us/app/unichance-admissions-analysis/id6743754137",
    googlePlay: "#", // Placeholder - replace with actual Google Play URL when available
  }

  // Link App Store and Google Play URLs
  const linkApp = {
    appStore: "https://apps.apple.com/us/app/link-match-with-anyone/id6745699159",
    googlePlay: "https://play.google.com/store/apps/details?id=com.fontainelabs.link&pcampaignid=web_share",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-racing-green-400 to-racing-green-200">
                  Innovative Mobile Apps for Modern Life
                </h1>
                <p className="mx-auto max-w-[700px] text-racing-green-200 md:text-xl animate-fade-in">
                  At Fontaine Labs, we create beautiful, intuitive mobile applications that enhance your daily
                  experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary hover:bg-racing-green-500 transition-colors">
                  <Link href="#apps">
                    Explore Our Apps <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="apps" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Apps</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Aura Pro Card */}
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 border border-border bg-card group relative">
                {/* Make the entire card clickable with an overlay link */}
                <Link href="/aura-pro" className="absolute inset-0 z-10">
                  <span className="sr-only">View Aura Pro details</span>
                </Link>

                <div className="h-48 bg-black flex items-center justify-center p-6">
                  <div className="flex flex-col items-center">
                    <AppIcon app="aura-pro" size="lg" className="mb-4" />
                    <h3 className="text-3xl font-bold text-white">Aura Pro</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-card-foreground mb-4">
                    Discover your unique aura signature with our advanced facial analysis technology. Reveal insights
                    about your energy and spiritual alignment.
                  </p>
                  <div className="mt-auto space-y-3">
                    <Link
                      href="/support-aura-pro"
                      className="text-primary hover:text-racing-green-400 flex items-center relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageSquare className="h-4 w-4 mr-2 text-gray-600" /> Support
                      <ChevronRight className="ml-1 h-4 w-4 text-gray-600" />
                    </Link>
                    <Link
                      href="/privacy-policy-aura-pro"
                      className="text-primary hover:text-racing-green-400 flex items-center relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Shield className="h-4 w-4 mr-2 text-gray-600" /> Privacy Policy
                      <ChevronRight className="ml-1 h-4 w-4 text-gray-600" />
                    </Link>
                    <div className="mt-4 flex justify-center relative z-20" onClick={(e) => e.stopPropagation()}>
                      <StoreBadge store="app-store" href={auraPro.appStore} />
                    </div>
                  </div>
                </div>
              </div>

              {/* UniChance Card */}
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 border border-border bg-card group relative">
                {/* Make the entire card clickable with an overlay link */}
                <Link href="/uni-chance" className="absolute inset-0 z-10">
                  <span className="sr-only">View UniChance details</span>
                </Link>

                <div className="h-48 bg-black flex items-center justify-center p-6">
                  <div className="flex flex-col items-center">
                    <AppIcon app="uni-chance" size="lg" className="mb-4" />
                    <h3 className="text-3xl font-bold text-white">UniChance</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-card-foreground mb-4">
                    Navigate the college admissions process with confidence using our AI-powered platform. Calculate
                    your chances of getting into top universities.
                  </p>
                  <div className="mt-auto space-y-3">
                    <Link
                      href="/support-uni-chance"
                      className="text-primary hover:text-racing-green-400 flex items-center relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageSquare className="h-4 w-4 mr-2 text-gray-600" /> Support
                      <ChevronRight className="ml-1 h-4 w-4 text-gray-600" />
                    </Link>
                    <Link
                      href="/privacy-policy-uni-chance"
                      className="text-primary hover:text-racing-green-400 flex items-center relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Shield className="h-4 w-4 mr-2 text-gray-600" /> Privacy Policy
                      <ChevronRight className="ml-1 h-4 w-4 text-gray-600" />
                    </Link>
                    <div
                      className="mt-4 flex flex-wrap justify-center gap-2 relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <StoreBadge store="app-store" href={uniChance.appStore} />
                      <StoreBadge store="google-play" href={uniChance.googlePlay} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Link Card */}
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 border border-border bg-card group relative">
                {/* Make the entire card clickable with an overlay link */}
                <Link href="/link" className="absolute inset-0 z-10">
                  <span className="sr-only">View Link details</span>
                </Link>

                <div className="h-48 bg-black flex items-center justify-center p-6">
                  <div className="flex flex-col items-center">
                    <AppIcon app="link" size="lg" className="mb-4" />
                    <h3 className="text-3xl font-bold text-white">Link</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-card-foreground mb-4">
                    A dating app that leverages your mutual friends to create meaningful connections. Find potential
                    partners through trusted social networks.
                  </p>
                  <div className="mt-auto space-y-3">
                    <Link
                      href="/support-link"
                      className="text-primary hover:text-racing-green-400 flex items-center relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageSquare className="h-4 w-4 mr-2 text-gray-600" /> Support
                      <ChevronRight className="ml-1 h-4 w-4 text-gray-600" />
                    </Link>
                    <Link
                      href="/privacy-policy-link"
                      className="text-primary hover:text-racing-green-400 flex items-center relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Shield className="h-4 w-4 mr-2 text-gray-600" /> Privacy Policy
                      <ChevronRight className="ml-1 h-4 w-4 text-gray-600" />
                    </Link>
                    <div
                      className="mt-4 flex flex-wrap justify-center gap-2 relative z-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <StoreBadge store="app-store" href={linkApp.appStore} />
                      <StoreBadge store="google-play" href={linkApp.googlePlay} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-racing-green-200">
              About Fontaine Labs
            </h2>
            <p className="mx-auto max-w-[700px] text-racing-green-300 text-center mb-8">
              Founded with a passion for creating exceptional mobile experiences, Fontaine Labs LLC is dedicated to
              developing innovative applications that solve real problems. Our team of talented developers, designers,
              and product specialists work together to craft apps that are both beautiful and functional.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Download Our Apps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center relative group">
                <Link href="/aura-pro" className="absolute inset-0 z-10">
                  <span className="sr-only">View Aura Pro details</span>
                </Link>
                <AppIcon app="aura-pro" size="xl" className="mb-6 cursor-pointer" />
                <h3 className="text-2xl font-bold mb-3">Aura Pro</h3>
                <p className="text-muted-foreground mb-6">
                  Reveal your unique aura signature with our advanced facial analysis technology. Discover insights
                  about your energy and spiritual alignment.
                </p>
                <div className="flex justify-center relative z-20" onClick={(e) => e.stopPropagation()}>
                  <StoreBadge store="app-store" href={auraPro.appStore} />
                </div>
              </div>

              <div className="flex flex-col items-center text-center relative group">
                <Link href="/uni-chance" className="absolute inset-0 z-10">
                  <span className="sr-only">View UniChance details</span>
                </Link>
                <AppIcon app="uni-chance" size="xl" className="mb-6 cursor-pointer" />
                <h3 className="text-2xl font-bold mb-3">UniChance</h3>
                <p className="text-muted-foreground mb-6">
                  Navigate the college admissions process with confidence using our comprehensive education platform
                  with AI-powered insights.
                </p>
                <div className="flex flex-wrap justify-center gap-2 relative z-20" onClick={(e) => e.stopPropagation()}>
                  <StoreBadge store="app-store" href={uniChance.appStore} />
                  <StoreBadge store="google-play" href={uniChance.googlePlay} />
                </div>
              </div>

              <div className="flex flex-col items-center text-center relative group">
                <Link href="/link" className="absolute inset-0 z-10">
                  <span className="sr-only">View Link details</span>
                </Link>
                <AppIcon app="link" size="xl" className="mb-6 cursor-pointer" />
                <h3 className="text-2xl font-bold mb-3">Link</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with potential partners through mutual friends. Build meaningful relationships based on
                  trusted social connections.
                </p>
                <div className="flex flex-wrap justify-center gap-2 relative z-20" onClick={(e) => e.stopPropagation()}>
                  <StoreBadge store="app-store" href={linkApp.appStore} />
                  <StoreBadge store="google-play" href={linkApp.googlePlay} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="mx-auto max-w-[500px] space-y-4">
              <p className="text-center text-muted-foreground mb-6">
                Have questions about our apps? We'd love to hear from you!
              </p>
              <Button className="w-full bg-primary hover:bg-racing-green-500 transition-colors">
                <MessageSquare className="mr-2 h-4 w-4 text-gray-600" /> Contact Support
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Email: founder@fontainelabs.com
                <br />
                Business Hours: Monday-Friday, 9am-5pm EST
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
