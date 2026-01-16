import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsDelta() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16 legal">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/delta" className="inline-flex items-center text-primary hover:text-blue-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Delta
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="aura-pro" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">Delta Terms & Conditions</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-muted-foreground">Last Updated: July 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-4">1. ACCEPTANCE OF TERMS</h2>
                <p>
                  By accessing or using Delta (the "App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. USE OF THE APP</h2>
                <p>
                  Delta is provided by Fontaine Labs LLC for personal, non-commercial use only. You agree to use the App in compliance with all applicable laws and regulations.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. USER ACCOUNTS</h2>
                <p>
                  To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. USER CONTENT</h2>
                <p>
                  You retain ownership of the data and content you create in Delta. By using the App, you grant us a non-exclusive, royalty-free license to use, store, and process your data solely for the purpose of providing and improving the App.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. PROHIBITED CONDUCT</h2>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Using the App for any unlawful purpose</li>
                  <li>Attempting to gain unauthorized access to other users' data</li>
                  <li>Interfering with the operation of the App</li>
                  <li>Uploading malicious code or content</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. TERMINATION</h2>
                <p>
                  We reserve the right to suspend or terminate your access to Delta at our discretion, without notice, if you violate these Terms or engage in prohibited conduct.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. DISCLAIMER OF WARRANTIES</h2>
                <p>
                  Delta is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the App will be error-free or uninterrupted.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">8. LIMITATION OF LIABILITY</h2>
                <p>
                  To the fullest extent permitted by law, Fontaine Labs LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of Delta.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">9. CHANGES TO TERMS</h2>
                <p>
                  We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of Delta after any changes constitutes acceptance of the new Terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">10. CONTACT US</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                  <br />
                  Email: founder@fontainelabs.com
                  <br />
                  Website: www.fontainelabs.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 