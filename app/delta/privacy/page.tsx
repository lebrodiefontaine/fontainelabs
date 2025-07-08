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
                <p className="text-sm text-muted-foreground">Last Updated: July 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-4">1. INTRODUCTION</h2>
                <p>
                  At Fontaine Labs LLC ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, and safeguard your information when you use our Delta habit tracking app (the "App").
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. INFORMATION WE COLLECT</h2>
                <p>
                  We collect minimal personal information to provide our service. Specifically, we may collect and store:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Your name or nickname (optional)</li>
                  <li>Your email address (for account creation and support)</li>
                  <li>Your habit data and progress (habits, streaks, completions, notes)</li>
                </ul>
                <p>
                  This information is necessary to create your account, sync your data, and enable the core functionality of the app.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>To create and maintain your account</li>
                  <li>To sync your habit data across devices (if you sign in)</li>
                  <li>To provide customer support</li>
                  <li>To send important service announcements and updates</li>
                  <li>To improve the app and user experience (aggregated, anonymized analytics only)</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. DATA SECURITY</h2>
                <p>
                  We take the security of your data seriously. Your personal information and habit data are stored securely with industry-standard encryption and protection measures. We do not sell your data to third parties.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. DATA RETENTION</h2>
                <p>
                  We retain your personal information and habit data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When you delete your account, we will delete or anonymize your personal information within a reasonable timeframe.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. INFORMATION SHARING</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your information in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our app or servicing you. These providers have access only to perform specific tasks on our behalf and are obligated to protect your information.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information when required by law, subpoena, or other legal process, or if we have a good faith belief that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</li>
                  <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any change in ownership or uses of your personal information.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. YOUR RIGHTS</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>The right to access the personal information we have about you</li>
                  <li>The right to request correction of inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to data portability</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">8. ACCOUNT DELETION</h2>
                <p>
                  You have the right to delete your account and personal information from our systems. To request account deletion, you can:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Use the in-app deletion option in your account settings</li>
                  <li>Contact us directly at founder@fontainelabs.com</li>
                </ul>
                <p>
                  Upon receiving your request, we will verify your identity and process your account deletion within 30 days. After deletion, your personal information will be permanently removed from our active systems, though some information may remain in our backup systems for a limited time in accordance with applicable laws.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">9. CHILDREN'S PRIVACY</h2>
                <p>
                  Delta is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">10. CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">11. CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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