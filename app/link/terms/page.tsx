import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/link">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Likeback
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: December 2023</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By downloading, installing, or using Likeback ("the App"), you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Likeback is a social networking application that allows users to connect, share content, and interact with
            others. The App provides various features including but not limited to messaging, content sharing, and
            social interactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="mb-4">
            To use certain features of Likeback, you must create an account. You are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and complete information</li>
            <li>Updating your information as necessary</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p className="mb-4">You agree not to use Likeback to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any applicable laws or regulations</li>
            <li>Harass, abuse, or harm others</li>
            <li>Share inappropriate, offensive, or illegal content</li>
            <li>Impersonate others or provide false information</li>
            <li>Interfere with the App's functionality or security</li>
            <li>Use the App for commercial purposes without permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Content and Intellectual Property</h2>
          <p className="mb-4">
            You retain ownership of content you create and share through Likeback. However, by using the App, you grant
            us a license to use, display, and distribute your content as necessary to provide the service.
          </p>
          <p className="mb-4">
            The Likeback app, including its design, features, and underlying technology, is owned by Fontaine Labs LLC
            and protected by intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
            protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p className="mb-4">
            We may suspend or terminate your account at any time for violation of these Terms or for any other reason.
            You may also delete your account at any time through the App settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Disclaimers</h2>
          <p className="mb-4">
            Likeback is provided "as is" without warranties of any kind. We do not guarantee that the App will be
            error-free, secure, or continuously available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Fontaine Labs LLC shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of Likeback.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p className="mb-4">
            We may update these Terms from time to time. We will notify users of significant changes through the App or
            other means. Continued use of Likeback after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">If you have questions about these Terms, please contact us at:</p>
          <p className="mb-2">Fontaine Labs LLC</p>
          <p className="mb-2">Email: support@fontainelabs.com</p>
        </section>
      </div>
    </div>
  )
}
