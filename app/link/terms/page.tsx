import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsOfServiceLikeback() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/link" className="inline-flex items-center text-primary hover:text-pink-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Likeback
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="link" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">Likeback Terms of Service</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-muted-foreground">Last Updated: May 9, 2025</p>

                <h2 className="text-xl font-semibold mt-6 mb-4">1. ACCEPTANCE OF TERMS</h2>
                <p>
                  Welcome to Likeback. These Terms of Service ("Terms") govern your use of the Likeback mobile
                  application (the "App") operated by Fontaine Labs LLC ("we," "us," or "our"). By accessing or using
                  the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not
                  access the App.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">2. ELIGIBILITY</h2>
                <p>
                  You must be at least 18 years old to use the App. By using the App, you represent and warrant that you
                  are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you do
                  not meet these requirements, you must not access or use the App.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">3. ACCOUNT REGISTRATION</h2>
                <p>
                  To use certain features of the App, you must register for an account. When you register, you agree to
                  provide accurate, current, and complete information. You are responsible for maintaining the
                  confidentiality of your account credentials and for all activities that occur under your account. You
                  agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">4. DOUBLE OPT-IN PROCESS</h2>
                <p>
                  Likeback operates on a double opt-in basis, meaning that both parties must express interest in each
                  other before a connection is made. You understand and agree that:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    Your expression of interest in another user is not visible to them until they also express interest
                    in you
                  </li>
                  <li>You will only be notified of mutual interest, not one-sided interest</li>
                  <li>We do not guarantee that you will receive matches or connections</li>
                  <li>The timing of match notifications may vary based on app usage patterns</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">5. USER CONDUCT</h2>
                <p>You agree not to use the App to:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Impersonate any person or entity</li>
                  <li>Harass, abuse, or harm another person</li>
                  <li>Send spam or unsolicited messages</li>
                  <li>Interfere with or disrupt the App or servers</li>
                  <li>Collect or store personal data about other users without their consent</li>
                  <li>Use the App for any commercial purposes without our prior written consent</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">6. CONTENT GUIDELINES</h2>
                <p>
                  You are solely responsible for the content you provide through the App, including your profile
                  information. You agree that your content will not:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Contain false, misleading, or deceptive information</li>
                  <li>Infringe on any third party's intellectual property rights</li>
                  <li>Contain offensive, inappropriate, or explicit material</li>
                  <li>Promote discrimination, bigotry, racism, hatred, or harm against any individual or group</li>
                  <li>Promote illegal or harmful activities</li>
                </ul>
                <p>
                  We reserve the right to remove any content that violates these guidelines or that we deem
                  inappropriate.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">7. INTELLECTUAL PROPERTY</h2>
                <p>
                  The App and its original content, features, and functionality are owned by Fontaine Labs LLC and are
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property
                  or proprietary rights laws. You may not copy, modify, distribute, sell, or lease any part of the App
                  without our prior written consent.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">8. TERMINATION</h2>
                <p>
                  We may terminate or suspend your account and access to the App immediately, without prior notice or
                  liability, for any reason, including if you breach these Terms. Upon termination, your right to use
                  the App will immediately cease.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">9. DISCLAIMER OF WARRANTIES</h2>
                <p>
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">10. LIMITATION OF LIABILITY</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL FONTAINE LABS LLC, ITS DIRECTORS, EMPLOYEES,
                  PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                  GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS
                  OR USE THE APP.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">11. INDEMNIFICATION</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Fontaine Labs LLC and its licensees and licensors,
                  and their employees, contractors, agents, officers, and directors, from and against any and all
                  claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not
                  limited to attorney's fees), resulting from or arising out of your use of the App or your violation of
                  these Terms.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">12. GOVERNING LAW</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United States,
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision of
                  these Terms will not be considered a waiver of those rights.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">13. CHANGES TO TERMS</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any
                  changes by posting the new Terms on this page and updating the "Last Updated" date. You are advised to
                  review these Terms periodically for any changes. Continued use of the App after the posting of changes
                  constitutes your acceptance of such changes.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">14. CONTACT US</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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
