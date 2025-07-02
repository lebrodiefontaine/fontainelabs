import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/link">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Likeback
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: December 2023</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Fontaine Labs LLC ("we," "our," or "us") operates the Likeback mobile application ("the App"). This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <p className="mb-4">When you create an account on Likeback, we may collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and username</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Profile picture</li>
            <li>Date of birth</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
          <p className="mb-4">We automatically collect information about how you use Likeback:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>App usage patterns and preferences</li>
            <li>Device information (model, operating system, unique identifiers)</li>
            <li>Log data (IP address, access times, pages viewed)</li>
            <li>Location data (if you grant permission)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain Likeback services</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about the App</li>
            <li>Improve our services and develop new features</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With other Likeback users as part of the social features</li>
            <li>With service providers who help us operate the App</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Control privacy settings within the App</li>
            <li>Opt out of certain communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p className="mb-4">
            Likeback is not intended for children under 13 years of age. We do not knowingly collect personal
            information from children under 13. If we become aware that we have collected such information, we will take
            steps to delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate
            safeguards are in place to protect your information during such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
            the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-2">Fontaine Labs LLC</p>
          <p className="mb-2">Email: privacy@fontainelabs.com</p>
          <p className="mb-2">Address: [Your Business Address]</p>
        </section>
      </div>
    </div>
  )
}
