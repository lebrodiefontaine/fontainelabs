import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, MessageSquare, CheckCircle, Users, Heart, Lock, Trash2 } from "lucide-react"

export default function LinkPage() {
  // Link App Store and Google Play URLs
  const linkApp = {
    appStore: "https://apps.apple.com/us/app/link-match-with-anyone/id6745699159",
    googlePlay: "https://play.google.com/store/apps/details?id=com.fontainelabs.link&pcampaignid=web_share",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                  Likeback
                </h1>
                <p className="text-pink-200 text-xl mb-6">
                  Dating through trusted connections. Discover meaningful relationships through mutual friends.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <StoreBadge store="app-store" href={linkApp.appStore} />
                  <StoreBadge store="google-play" href={linkApp.googlePlay} />
                  <Link href="/link/support">
                    <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10">
                      <MessageSquare className="mr-2 h-4 w-4 text-gray-600" /> Support
                    </Button>
                  </Link>
                  <Link href="/link/privacy">
                    <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10">
                      <Shield className="mr-2 h-4 w-4 text-gray-600" /> Privacy Policy
                    </Button>
                  </Link>
                  <Link href="/link/terms">
                    <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10">
                      <Shield className="mr-2 h-4 w-4 text-gray-600" /> Terms of Service
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <AppIcon app="link" size="xl" className="w-48 h-48 md:w-64 md:h-64" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Dating Through Trusted Connections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mutual Friend Matching</h3>
                <p className="text-muted-foreground">
                  Connect with potential partners through your existing social network. Our algorithm prioritizes
                  matches with mutual friends.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Double Opt-In Matching</h3>
                <p className="text-muted-foreground">
                  Our double opt-in system ensures both parties express interest before a connection is made, creating
                  more meaningful and respectful interactions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Privacy</h3>
                <p className="text-muted-foreground">
                  We only store your name and phone number in our secure database. Your personal information is never
                  shared without your explicit consent.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Profiles</h3>
                <p className="text-muted-foreground">
                  All profiles are verified through our secure phone verification process, reducing fake accounts and
                  ensuring authentic interactions.
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
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up with your phone number, verify your identity, and create your profile with photos and
                  interests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Discover Matches</h3>
                <p className="text-muted-foreground">
                  Browse potential matches and express interest in profiles you like. We'll notify you when there's
                  mutual interest.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Connect Safely</h3>
                <p className="text-muted-foreground">
                  Chat, meet, and build relationships with the added security of our double opt-in system and verified
                  profiles.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <StoreBadge store="app-store" href={linkApp.appStore} />
              <StoreBadge store="google-play" href={linkApp.googlePlay} />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Trust Your Dating Journey
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                "Likeback has transformed how I approach online dating. The double opt-in system made me feel respected, and
                knowing that my personal information is secure gave me the confidence to be myself."
              </p>
              <p className="text-pink-400 font-medium">— Sarah T., Likeback User</p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 border-t border-border">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/link/support" className="block">
                  <div className="border border-border rounded-lg p-6 h-full hover:border-pink-400 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                        <MessageSquare className="h-5 w-5 text-gray-300" />
                      </div>
                      <h3 className="text-lg font-semibold">Support</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Visit our support center for help with your account, troubleshooting, and frequently asked
                      questions.
                    </p>
                  </div>
                </Link>
                <Link href="/link/child-safety" className="block">
                  <div className="border border-border rounded-lg p-6 h-full hover:border-pink-400 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                        <Shield className="h-5 w-5 text-gray-300" />
                      </div>
                      <h3 className="text-lg font-semibold">Child Safety</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Learn about our commitment to child safety and how our minimal functionality approach prevents
                      abuse.
                    </p>
                  </div>
                </Link>
                <Link href="/link/deleteaccount" className="block">
                  <div className="border border-border rounded-lg p-6 h-full hover:border-red-500 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-900/20 flex items-center justify-center mr-4">
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold">Delete Account</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Want to delete your account? Use our secure account deletion form to permanently remove your data.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
