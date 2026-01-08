import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyDelta() {
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
                <h1 className="text-3xl font-bold">Delta Privacy Policy</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-4">1. INTRODUCTION</h2>
                <p>
                  At Fontaine Labs LLC ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy
                  Policy explains our approach to privacy when you use our Delta habit tracking app (the "App").
                </p>
                <p className="font-semibold text-primary mt-4">
                  The short version: We don't collect, store, or have access to any of your personal information or habit data. Everything stays on your device.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. INFORMATION WE COLLECT</h2>
                <p className="font-semibold">
                  We do not collect any personal information. Period.
                </p>
                <p className="mt-4">
                  Delta is designed with privacy as the top priority. All of your data is stored locally on your device and never transmitted to our servers or any third party. This includes:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>We do not collect your name, email, phone number, or any identifying information</li>
                  <li>We do not require account creation or sign-in</li>
                  <li>We do not track your habits, streaks, or any usage data</li>
                  <li>We do not collect analytics, crash reports, or telemetry</li>
                  <li>We do not use cookies, trackers, or advertising IDs</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. HOW YOUR DATA IS STORED</h2>
                <p>
                  All of your habit data, including habits, streaks, completions, notes, and any other information you enter into Delta, is stored exclusively on your device using local storage. This means:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Your data never leaves your device</li>
                  <li>We have no servers storing your information</li>
                  <li>We cannot access your data</li>
                  <li>Your data is not synced across devices</li>
                  <li>Your data remains private and under your complete control</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. DATA SECURITY</h2>
                <p>
                  Because all data is stored locally on your device, the security of your data depends on the security of your device. We recommend:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Using a strong device passcode or biometric lock</li>
                  <li>Keeping your device's operating system up to date</li>
                  <li>Being cautious about who has physical access to your device</li>
                </ul>
                <p className="mt-4">
                  Since we don't have access to your data, we cannot be responsible for data loss due to device issues, uninstalling the app, or other device-related problems. We recommend backing up your device regularly.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. INFORMATION SHARING</h2>
                <p className="font-semibold">
                  We do not share any information with anyone because we don't collect any information.
                </p>
                <p className="mt-4">
                  Specifically:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>We do not share data with service providers (we don't use any)</li>
                  <li>We do not sell, trade, or transfer your information to third parties</li>
                  <li>We do not share data for advertising or marketing purposes</li>
                  <li>We have no data to disclose to law enforcement or government agencies</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. YOUR CONTROL OVER YOUR DATA</h2>
                <p>
                  Since all data is stored on your device, you have complete control:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>You can view, edit, or delete any of your habits and data at any time within the app</li>
                  <li>You can delete all your data and account by using the "Delete My Account and Data" button in Settings</li>
                  <li>Uninstalling the app will remove all local data from your device</li>
                  <li>There is no cloud backup, so deleted data cannot be recovered</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. ACCOUNT AND DATA DELETION</h2>
                <p>
                  To permanently delete your account and all associated data:
                </p>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>Open the Delta app</li>
                  <li>Go to Settings</li>
                  <li>Tap "Delete My Account and Data"</li>
                  <li>Confirm your choice</li>
                </ol>
                <p className="mt-4">
                  This will immediately and permanently delete all habit data stored on your device. Since we don't store your data on our servers, there is nothing for us to delete on our end.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">8. THIRD-PARTY SERVICES</h2>
                <p>
                  Delta does not integrate with any third-party services, analytics platforms, advertising networks, or cloud storage providers. The app functions entirely offline and independently on your device.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">9. CHILDREN'S PRIVACY</h2>
                <p>
                  Because we do not collect any personal information whatsoever, Delta is safe for users of all ages, including children under 13. We do not knowingly collect personal information from anyone, regardless of age.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">10. CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. If we ever change our approach to data collection, we will clearly communicate this and provide you with the option to opt out or delete the app.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">11. CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: founder@fontainelabs.com
                  <br />
                  Website: www.fontainelabs.com
                </p>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="font-semibold">Our Privacy Promise</p>
                  <p className="mt-2">
                    We built Delta with privacy at its core. Your habits are personal, and they should stay that way. 
                    We will never collect, store, or sell your data. What you track in Delta is yours and yours alone.
                  </p>
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