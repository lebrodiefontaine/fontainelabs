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
                    <strong>Is my data synced across devices?</strong>
                    <br />
                    If you sign in with your account, your habits and progress are securely synced across devices.
                  </li>
                  <li>
                    <strong>How do I delete my account?</strong>
                    <br />
                    Go to Settings &gt; Account &gt; Delete Account, or contact us at founder@fontainelabs.com.
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