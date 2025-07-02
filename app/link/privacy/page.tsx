import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <p>When you use Likeback, we may collect the following types of information:</p>

            <h3>Personal Information</h3>
            <ul>
              <li>Name and email address (when you create an account)</li>
              <li>Profile information you choose to share</li>
              <li>Social media links and bio content</li>
            </ul>

            <h3>Usage Information</h3>
            <ul>
              <li>How you interact with the Likeback app</li>
              <li>Features you use and time spent in the app</li>
              <li>Device information and operating system</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve the Likeback service</li>
              <li>Create and maintain your profile</li>
              <li>Communicate with you about the app</li>
              <li>Ensure the security and integrity of our service</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              only in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and the safety of our users</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide the Likeback service and fulfill
              the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability (receive your data in a structured format)</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Likeback is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If we become aware that we have collected such information, we will
              take steps to delete it.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place to protect your information during such transfers.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new Privacy Policy in the Likeback app and updating the "Last updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>
              <strong>Fontaine Labs LLC</strong>
              <br />
              Email: privacy@fontainelabs.com
              <br />
              Subject: Likeback Privacy Inquiry
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
