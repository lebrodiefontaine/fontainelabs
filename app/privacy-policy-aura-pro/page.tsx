import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyAuraPro() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/aura-pro" className="inline-flex items-center text-primary hover:text-racing-green-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Aura Pro
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="aura-pro" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">Privacy Policy for Aura Pro</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-muted-foreground">Effective Date: March 12, 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-4">1. INTRODUCTION</h2>
                <p>
                  At Fontaine Labs ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, and safeguard your information when you use our Aura Pro
                  application ("App").
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. INFORMATION WE COLLECT</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">2.1. Photos</h3>
                <p>
                  When you use Aura Pro, the app accesses photos you explicitly select for aura analysis. These photos
                  remain on your device and are not transmitted to our servers or third parties.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. FACIAL DATA PROCESSING</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">3.1. Collection and Use</h3>
                <p>
                  Aura Pro uses Apple's Vision framework to detect facial landmarks in the photos you choose to analyze.
                  These landmarks (positions of facial features) are used only to calculate aura energy measurements and
                  are processed entirely on your device. Our proprietary algorithm converts these landmarks into
                  abstract measurements like symmetry, proportions, and relative positioning to generate your aura
                  reading.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">3.2. Storage and Retention</h3>
                <p>
                  We do not store raw facial landmark data beyond the analysis session. Once your aura reading is
                  generated, the facial landmark data is immediately discarded. The app retains only the final analysis
                  results and your photo if you choose to save it to your history.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">3.3. Disclosure and Sharing</h3>
                <p>
                  We do not transmit facial data off your device. All processing occurs locally using Apple's Vision
                  framework. No facial landmark data is shared with third parties or transferred to external servers.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">3.4. Security</h3>
                <p>
                  Since all facial data processing occurs locally on your device and is not transmitted elsewhere, your
                  facial data remains secure within Apple's protected environment.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. DATA SECURITY</h2>
                <p>
                  We take the security of your data seriously. Since all processing occurs on your device, your photos
                  and personal information are not exposed to external threats. We do not collect or store any user data
                  on our servers.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. YOUR CHOICES</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">5.1. Photo Access</h3>
                <p>You can revoke the app's access to your photos at any time through your device's Settings app.</p>

                <h3 className="text-lg font-medium mt-4 mb-2">5.2. Deleting Your Data</h3>
                <p>
                  You can delete your analysis history and photos stored within the app through the app's settings or by
                  deleting the app.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
                  changes.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
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
