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
                  Policy explains our approach to privacy in the Delta habit tracking app (the "App"). The short version: 
                  <strong> we don't collect or store any of your data.</strong>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. INFORMATION WE COLLECT</h2>
                <p className="font-semibold text-lg mb-4">
                  We do not collect ANY personal information.
                </p>
                <p>
                  Delta is designed as a completely local, offline-first app. All your habit data, including:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Habits you create</li>
                  <li>Completion history and streaks</li>
                  <li>Notes and reminders</li>
                  <li>Any other data you enter</li>
                </ul>
                <p>
                  ...is stored <strong>only on your device</strong>. We do not collect names, usernames, email addresses, 
                  phone numbers, or any other personal information. We do not require account creation. We do not sync your 
                  data to our servers. Your data never leaves your device.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                <p>
                  Since we don't collect any information, we don't use any information. Your habit tracking data is yours 
                  alone and remains entirely on your device.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. DATA SECURITY</h2>
                <p>
                  Your data is stored locally on your device using industry-standard secure storage mechanisms provided by 
                  your device's operating system. Since your data never leaves your device, it is protected by your device's 
                  security features (passcode, biometric authentication, etc.).
                </p>
                <p className="mt-4">
                  We do not have access to your data. We cannot view, modify, or retrieve your data. Your privacy is 
                  guaranteed by design.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. DATA RETENTION</h2>
                <p>
                  All your data is stored on your device for as long as you keep the app installed. If you uninstall the 
                  app, all data will be removed from your device. Since we don't store any data on our servers, there is 
                  nothing for us to retain or delete.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. INFORMATION SHARING</h2>
                <p className="font-semibold text-lg mb-4">
                  We do not share any information because we don't collect any information.
                </p>
                <p>
                  We do not work with service providers, analytics companies, or any third parties who would have access 
                  to your data. We do not sell, trade, rent, or transfer any user data. There is no data to share.
                </p>
                <p className="mt-4">
                  <strong>Legal Compliance:</strong> Because we don't collect or have access to your data, we have nothing 
                  to provide in response to legal requests, subpoenas, or court orders regarding user data.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. YOUR RIGHTS AND CONTROL</h2>
                <p>
                  You have complete control over your data:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>Access:</strong> Your data is always accessible to you within the app</li>
                  <li><strong>Modification:</strong> You can edit or update any habit or data at any time</li>
                  <li><strong>Deletion:</strong> You can delete individual habits, or use the "Delete My Account and Data" 
                  button in Settings to permanently erase all your data from your device</li>
                  <li><strong>Portability:</strong> Since all data is on your device, you maintain complete control</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">8. ACCOUNT AND DATA DELETION</h2>
                <p>
                  To delete all your data from Delta:
                </p>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>Open the Delta app</li>
                  <li>Go to Settings</li>
                  <li>Tap "Delete My Account and Data"</li>
                  <li>Confirm your choice</li>
                </ol>
                <p>
                  This will immediately and permanently erase all your habit data from your device. This action cannot be 
                  undone. Since we don't store your data on our servers, there is no data for us to delete on our end.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">9. ANALYTICS AND TRACKING</h2>
                <p>
                  We do not use any analytics services, tracking pixels, or monitoring tools. We do not collect usage 
                  statistics, crash reports, or any telemetry data. Your use of Delta is completely private.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">10. CHILDREN'S PRIVACY</h2>
                <p>
                  Delta is safe for users of all ages. Because we don't collect any personal information from anyone, 
                  we don't collect personal information from children under 13. The app can be used by anyone, and their 
                  data remains private and local to their device.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">11. CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                  requirements. We will notify you of any material changes by updating the "Last Updated" date at the top 
                  of this policy. Any changes will be posted on this page.
                </p>
                <p className="mt-4">
                  However, our core commitment remains unchanged: <strong>Delta is and will remain a local-only, 
                  privacy-first app that does not collect or store your personal data.</strong>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">12. CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy or Delta's privacy practices, please contact us at:
                  <br />
                  <br />
                  Email: founder@fontainelabs.com
                  <br />
                  Website: www.fontainelabs.com
                </p>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-2">Privacy by Design</h3>
                  <p className="text-sm">
                    Delta was built from the ground up with privacy as a core principle. By keeping all your data on your 
                    device and never collecting any personal information, we ensure that your habit tracking journey 
                    remains completely private. Your data is yours, and yours alone.
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