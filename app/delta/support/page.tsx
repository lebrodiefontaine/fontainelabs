import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function DeltaSupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/delta" className="inline-flex items-center text-primary hover:text-blue-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Delta
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="aura-pro" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">Delta Support Center</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>
                <ul className="list-disc pl-6 my-4 space-y-4">
                  <li>
                    <strong>How do I create a new habit?</strong>
                    <br />
                    Tap the "+" button on the main screen, enter your habit details, and save. Your new habit will appear in your daily list.
                  </li>
                  <li>
                    <strong>Can I edit or delete a habit?</strong>
                    <br />
                    Yes! Tap on a habit to edit its details or delete it from your list.
                  </li>
                  <li>
                    <strong>How do streaks work?</strong>
                    <br />
                    Each day you complete a habit, your streak increases. Missing a day resets the streak for that habit.
                  </li>
                  <li>
                    <strong>Is my data stored in the cloud?</strong>
                    <br />
                    No. Delta stores all your data locally on your device only. We don't collect or sync any of your information to our servers. Your data stays private and offline on your device.
                  </li>
                  <li>
                    <strong>Is Delta completely private?</strong>
                    <br />
                    Yes! Delta doesn't collect any personal information, doesn't require an account, and doesn't sync your data anywhere. Everything stays on your device. See our <Link href="/delta/privacy" className="text-primary hover:underline">Privacy Policy</Link> for full details.
                  </li>
                  <li>
                    <strong>How do I delete my account and data?</strong>
                    <br />
                    Go to Settings and tap "Delete My Account and Data". This will permanently erase all your habit data from your device. Since we don't store any data on our servers, this completely removes all your information.
                  </li>
                  <li>
                    <strong>What if I get a new phone?</strong>
                    <br />
                    Since Delta stores data locally on your device, your data won't automatically transfer to a new device. This is by design to protect your privacy. You'll start fresh on your new device.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
                <p>
                  If you have questions, feedback, or need help, reach out to us:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    <Mail className="inline mr-2 h-4 w-4" />
                    <a href="mailto:founder@fontainelabs.com" className="underline">founder@fontainelabs.com</a>
                  </li>
                  <li>
                    <MessageSquare className="inline mr-2 h-4 w-4" />
                    <a href="https://www.fontainelabs.com" target="_blank" rel="noopener noreferrer" className="underline">www.fontainelabs.com</a>
                  </li>
                </ul>

                <div className="mt-8 text-muted-foreground text-sm">
                  Thank you for using Delta to build better habits!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 