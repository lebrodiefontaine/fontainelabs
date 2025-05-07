import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, MessageSquare, CheckCircle, GraduationCap, BarChart, Brain } from "lucide-react"

export default function UniChancePage() {
  // UniChance App Store and Google Play URLs
  const uniChance = {
    appStore: "https://apps.apple.com/us/app/unichance-admissions-analysis/id6743754137",
    googlePlay: "#", // Placeholder - replace with actual Google Play URL when available
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
                  UniChance
                </h1>
                <p className="text-racing-green-200 text-xl mb-6">
                  Navigate the college admissions process with AI-powered insights
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <StoreBadge store="app-store" href={uniChance.appStore} />
                  <StoreBadge store="google-play" href={uniChance.googlePlay} />
                  <Link href="/support-uni-chance">
                    <Button
                      variant="outline"
                      className="border-racing-green-400 text-racing-green-400 hover:bg-racing-green-400/10"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" /> Support
                    </Button>
                  </Link>
                  <Link href="/privacy-policy-uni-chance">
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
                <AppIcon app="uni-chance" size="xl" className="w-48 h-48 md:w-64 md:h-64" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Your College Admissions Companion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced algorithms analyze your academic profile to calculate your chances of admission to top
                  universities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
                <p className="text-muted-foreground">
                  Receive detailed feedback on your strengths and areas for improvement to enhance your application.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Get recommendations for target, reach, and safety schools based on your unique profile.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-racing-green-800 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-racing-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Privacy</h3>
                <p className="text-muted-foreground">
                  All your data is stored locally on your device. We never collect or transmit your personal
                  information.
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
                <h3 className="text-xl font-bold mb-2">Enter Your Profile</h3>
                <p className="text-muted-foreground">
                  Input your academic information, including GPA, test scores, extracurricular activities, and
                  achievements.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-racing-green-700 flex items-center justify-center mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your profile against historical admission data from top universities.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-racing-green-700 flex items-center justify-center mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Get Results</h3>
                <p className="text-muted-foreground">
                  Receive your admission chances, personalized recommendations, and strategic insights.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <StoreBadge store="app-store" href={uniChance.appStore} />
              <StoreBadge store="google-play" href={uniChance.googlePlay} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
