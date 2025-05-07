import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, MessageSquare, CheckCircle } from "lucide-react"

export default function AuraProPage() {
  // Aura Pro App Store URL
  const auraPro = {
    appStore: "https://apps.apple.com/us/app/aura-pro-elite-aura-analysis/id6743044971",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-racing-green-400 to-racing-green-200 mb-4">
                  Aura Pro
                </h1>
                <p className="text-racing-green-200 text-xl mb-6">
                  Discover your unique aura signature with advanced facial analysis technology
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <StoreBadge store="app-store" href={auraPro.appStore} />
                  <Link href="/support-aura-pro">
                    <Button
                      variant="outline"
                      className="border-racing-green-400 text-racing-green-400 hover:bg-racing-green-400/10"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" /> Support
                    </Button>
                  </Link>
                  <Link href="/privacy-policy-aura-pro">
                    <Button
                      variant="outline"
                      className="border-racing-green-400 text-racing-green-400 hover:bg-racing-green-400/10"
                    >
                      <Shield className="mr-2 h-4 w-4" /> Privacy Policy
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

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Discover Your Aura</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Facial Analysis</h3>
                <p className="text-muted-foreground">
                  Our proprietary algorithm analyzes facial landmarks to determine your energy patterns and aura
                  characteristics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
                <p className="text-muted-foreground">
                  Receive detailed information about your aura category, energy intensity, and balance score.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Privacy</h3>
                <p className="text-muted-foreground">
                  All photo analysis is conducted entirely on your device. We never transmit your photos or facial data
                  to any servers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Track Your Journey</h3>
                <p className="text-muted-foreground">
                  Save your readings and track changes in your aura over time to monitor your spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-racing-green-700 flex items-center justify-center mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Take a Photo</h3>
                <p className="text-muted-foreground">
                  Take a new photo or select one from your gallery with good lighting and a clear view of your face.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-racing-green-700 flex items-center justify-center mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Analyze</h3>
                <p className="text-muted-foreground">
                  Our advanced algorithm analyzes facial landmarks to determine your unique aura signature.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-racing-green-700 flex items-center justify-center mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Discover</h3>
                <p className="text-muted-foreground">
                  Receive detailed insights about your aura category, energy intensity, and personalized
                  recommendations.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <StoreBadge store="app-store" href={auraPro.appStore} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
