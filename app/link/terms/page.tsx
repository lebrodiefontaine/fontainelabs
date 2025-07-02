import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/link">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Likeback
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Likeback mobile application ("App"), you agree to be bound by
              these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Likeback is a mobile application that allows users to create and share personalized bio links and social
              media profiles. The App provides tools for customizing your online presence and connecting with others.
            </p>

            <h2>3. User Accounts</h2>
            <p>To use certain features of Likeback, you may need to create an account. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and current information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h2>4. User Content and Conduct</h2>
            <p>You agree not to use Likeback to:</p>
            <ul>
              <li>Upload, post, or share content that is illegal, harmful, or violates others' rights</li>
              <li>Impersonate others or provide false information</li>
              <li>Spam, harass, or abuse other users</li>
              <li>Distribute malware or engage in hacking activities</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2>5. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and
              protect your information when you use Likeback.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              The Likeback App and its content are owned by Fontaine Labs LLC and are protected by copyright, trademark,
              and other intellectual property laws. You may not copy, modify, distribute, or reverse engineer the App
              without our written permission.
            </p>

            <h2>7. Disclaimers</h2>
            <p>
              Likeback is provided "as is" without warranties of any kind. We do not guarantee that the App will be
              error-free, secure, or continuously available.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Fontaine Labs LLC shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of Likeback.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your access to Likeback at any time, with or without notice, for any reason,
              including violation of these Terms.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of significant changes
              through the App or other means. Continued use of Likeback after changes constitutes acceptance of the new
              Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States. Any disputes will be resolved in the courts of
              competent jurisdiction.
            </p>

            <h2>12. Contact Information</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>
              <strong>Fontaine Labs LLC</strong>
              <br />
              Email: support@fontainelabs.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
