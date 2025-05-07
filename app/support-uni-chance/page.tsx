import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SupportUniChance() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/uni-chance" className="inline-flex items-center text-primary hover:text-racing-green-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to UniChance
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="uni-chance" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">UniChance Support</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold mt-6 mb-4">INTRODUCTION</h2>
                <p>
                  At Fontaine Labs ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, and safeguard your information when you use our Uni Chance mobile
                  application (the "App").
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">INFORMATION WE DO NOT COLLECT</h2>
                <p>
                  We do not collect, store, or transmit any personal information to our servers. All data you enter into
                  the App, including but not limited to academic scores, extracurricular activities, personal
                  background, and assessment results, is stored locally on your device only.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">LOCAL STORAGE</h2>
                <p>
                  All user data, including assessment results and saved profiles, is stored locally on your device. This
                  information is not accessible to us or any third parties unless you choose to share it.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">APP ANALYTICS</h2>
                <p>
                  We may use third-party services, such as Apple App Analytics, to collect anonymous usage data for the
                  purpose of improving the App's performance and user experience. This data does not identify individual
                  users and is limited to information about how the App is used, such as feature usage and crash
                  reports.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">PURCHASES AND PAYMENTS</h2>
                <p>
                  When you make in-app purchases, such as subscriptions, the payment process is handled by Apple's App
                  Store. We do not collect or store your payment information. Please refer to Apple's Privacy Policy for
                  information about how they handle your payment data.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">CHILDREN'S PRIVACY</h2>
                <p>
                  Our App is intended for users who are interested in college admissions, typically teenagers and young
                  adults. We do not knowingly collect personal information from children under 13. If you are a parent
                  or guardian and believe your child has provided us with personal information, please contact us.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy in the App. You are advised to review this Privacy Policy periodically for any
                  changes.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  founder@fontainelabs.com
                </p>

                <p className="mt-6 text-sm text-muted-foreground">Last Updated: June 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
