import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MessageCircle, Book } from "lucide-react"

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/link">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Likeback
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-2">Support</h1>
        <p className="text-muted-foreground">Get help with Likeback</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 border rounded-lg">
          <Mail className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">Email Support</h3>
          <p className="text-muted-foreground mb-4">Send us an email and we'll get back to you within 24 hours.</p>
          <Button asChild>
            <a href="mailto:support@fontainelabs.com">Contact Support</a>
          </Button>
        </div>

        <div className="p-6 border rounded-lg">
          <MessageCircle className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">In-App Help</h3>
          <p className="text-muted-foreground mb-4">
            Access help articles and tutorials directly within the Likeback app.
          </p>
          <Button variant="outline">Open App</Button>
        </div>

        <div className="p-6 border rounded-lg">
          <Book className="h-8 w-8 mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">FAQ</h3>
          <p className="text-muted-foreground mb-4">Find answers to commonly asked questions about Likeback.</p>
          <Button variant="outline">View FAQ</Button>
        </div>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I create an account on Likeback?</h3>
              <p className="text-muted-foreground">
                Download the Likeback app from the App Store or Google Play Store, then tap "Sign Up" and follow the
                prompts to create your account using your email address or phone number.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I reset my password?</h3>
              <p className="text-muted-foreground">
                On the login screen, tap "Forgot Password?" and enter your email address. We'll send you a link to reset
                your password.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I delete my Likeback account?</h3>
              <p className="text-muted-foreground">
                Go to Settings &gt; Account &gt; Delete Account in the Likeback app. Please note that this action is
                permanent and cannot be undone.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I report inappropriate content or behavior?</h3>
              <p className="text-muted-foreground">
                Tap the three dots menu on any post or profile, then select "Report." Choose the appropriate reason and
                provide additional details if necessary.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I change my privacy settings?</h3>
              <p className="text-muted-foreground">
                Go to Settings &gt; Privacy in the Likeback app to control who can see your posts, send you messages,
                and find your profile.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Why isn't Likeback working properly?</h3>
              <p className="text-muted-foreground">
                Try closing and reopening the app, checking your internet connection, or updating to the latest version
                of Likeback. If problems persist, contact our support team.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you need additional help or have questions not covered in our FAQ, please don't hesitate to reach out:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="mb-2">
              <strong>Email:</strong> support@fontainelabs.com
            </p>
            <p className="mb-2">
              <strong>Response Time:</strong> Within 24 hours
            </p>
            <p className="mb-2">
              <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
          <p className="mb-4">
            We're always looking to improve Likeback. If you have suggestions, feature requests, or general feedback,
            we'd love to hear from you at feedback@fontainelabs.com.
          </p>
        </section>
      </div>
    </div>
  )
}
