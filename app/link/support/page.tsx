import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SupportLikeback() {
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
                <h1 className="text-3xl font-bold">Likeback Support Center</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-6">
                  Welcome to the Likeback support center. We're here to help you make meaningful connections through our
                  double opt-in dating app. This guide will help you get the most out of your Likeback experience.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">Getting Started</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">Creating Your Profile</h3>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>Download and open the Likeback app</li>
                  <li>Enter your phone number to receive a verification code</li>
                  <li>Enter the verification code to confirm your identity</li>
                  <li>Add your name and profile photos</li>
                  <li>Set your preferences for potential matches</li>
                  <li>Start discovering potential connections</li>
                </ol>

                <h3 className="text-lg font-medium mt-4 mb-2">Understanding Double Opt-In</h3>
                <p>Likeback uses a double opt-in system to ensure respectful and mutual connections:</p>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>When you express interest in someone, they won't be notified</li>
                  <li>If they also express interest in you, both of you will be notified of the match</li>
                  <li>Only after a mutual match can you begin messaging each other</li>
                  <li>This ensures that all connections are wanted by both parties</li>
                </ol>

                <h3 className="text-lg font-medium mt-4 mb-2">Tips for the Best Results</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Upload clear, recent photos that show your face</li>
                  <li>Complete all profile sections to improve match quality</li>
                  <li>Be specific about your interests to find more compatible matches</li>
                  <li>Regularly check the app for new potential connections</li>
                  <li>Respond to messages promptly to keep conversations flowing</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">What information does Likeback store about me?</h3>
                    <p className="text-muted-foreground mt-2">
                      Likeback only stores your name and phone number in our secure database. We prioritize your privacy
                      and only collect the minimum information necessary to provide our service. Your phone number is
                      used for account verification and security.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">How does the double opt-in system work?</h3>
                    <p className="text-muted-foreground mt-2">
                      Our double opt-in system means that both users must express interest in each other before a match
                      is made. When you like someone's profile, they won't be notified unless they also like your
                      profile. This creates a more respectful environment where all connections are mutual.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">Is my phone number visible to other users?</h3>
                    <p className="text-muted-foreground mt-2">
                      No, your phone number is never visible to other users. We use your phone number only for account
                      verification and to prevent fake accounts. All communication between matches happens within the
                      app.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">How do I know if someone is interested in me?</h3>
                    <p className="text-muted-foreground mt-2">
                      You'll only be notified when there's mutual interest. If you express interest in someone and they
                      later express interest in you, both of you will receive a match notification. You won't see who's
                      interested in you unless you're also interested in them.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">How do I delete my account?</h3>
                    <p className="text-muted-foreground mt-2">
                      You can delete your account and all associated data by using our{" "}
                      <Link href="/link/deleteaccount" className="text-primary hover:text-pink-400">
                        account deletion form
                      </Link>
                      . You'll need to provide your phone number and name for verification. Once submitted, your account
                      will be permanently deleted within 30 days.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mt-8 mb-4">Troubleshooting</h2>

                <h3 className="text-lg font-medium mt-4 mb-2">Phone Verification Issues</h3>
                <p>If you're having trouble with phone verification:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Ensure you've entered the correct phone number with country code</li>
                  <li>Check that you have a stable internet connection</li>
                  <li>Wait a few minutes and try again if you don't receive the code</li>
                  <li>Make sure your phone can receive SMS messages</li>
                  <li>Contact support if problems persist</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">Not Finding Matches</h3>
                <p>If you're not seeing many potential matches:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Adjust your distance settings to include a wider geographic area</li>
                  <li>Review your preference filters to ensure they're not too restrictive</li>
                  <li>Complete your profile with more information to improve visibility</li>
                  <li>Add more high-quality photos</li>
                  <li>Check back regularly as new users join the platform</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">App Performance Issues</h3>
                <p>If you're experiencing technical problems:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Ensure you're using the latest version of the app</li>
                  <li>Restart the app</li>
                  <li>Check your internet connection</li>
                  <li>Restart your device</li>
                  <li>Clear the app cache in your device settings</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Safety and Privacy</h2>
                <p>At Likeback, your safety and privacy are our priorities:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>We only store your name and phone number in our secure database</li>
                  <li>Your phone number is never visible to other users</li>
                  <li>All profiles are verified through phone verification to prevent fake accounts</li>
                  <li>Our double opt-in system ensures all connections are mutual and wanted</li>
                  <li>Use our in-app reporting feature to flag inappropriate behavior</li>
                  <li>
                    Remember to follow standard dating safety practices like meeting in public places for the first time
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Account Management</h2>
                <p>Managing your Likeback account:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    <strong>Update Profile:</strong> You can update your profile information and photos at any time
                    through the app's Profile section.
                  </li>
                  <li>
                    <strong>Privacy Settings:</strong> Adjust your privacy settings in the app to control who can see
                    your profile and how you receive notifications.
                  </li>
                  <li>
                    <strong>Pause Account:</strong> If you need a break, you can temporarily pause your account without
                    losing your matches or conversations.
                  </li>
                  <li>
                    <strong>Delete Account:</strong> If you wish to permanently delete your account and all associated
                    data, use our{" "}
                    <Link href="/link/deleteaccount" className="text-primary hover:text-pink-400">
                      account deletion form
                    </Link>
                    .
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Contact Support</h2>
                <p>Our support team is here to help with any questions or concerns:</p>
                <p className="mt-2">
                  Email: founder@fontainelabs.com
                  <br />
                  In-app: Tap on Profile → Settings → Help & Support → Contact Us
                </p>
                <p className="mt-4">When contacting support, please include:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Your phone number (for account identification)</li>
                  <li>The device and operating system you're using</li>
                  <li>A detailed description of the issue</li>
                  <li>Screenshots of any error messages (if applicable)</li>
                </ul>

                <p className="mt-6">
                  Thank you for choosing Likeback. We're committed to helping you build meaningful connections through
                  our secure, double opt-in dating platform.
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
