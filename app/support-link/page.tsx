import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SupportLink() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/link" className="inline-flex items-center text-primary hover:text-pink-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Link
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="link" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">Link Support Center</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-6">
                  Welcome to the Link support center. We're here to help you make meaningful connections through your
                  social network. This guide will help you get the most out of your Link experience.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">Getting Started</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">Creating Your Profile</h3>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>Download and open the Link app</li>
                  <li>Sign up with your phone number or email</li>
                  <li>Verify your identity through our secure verification process</li>
                  <li>Connect your social media accounts to find mutual connections</li>
                  <li>Upload at least 3 photos and complete your profile information</li>
                  <li>Set your preferences for potential matches</li>
                </ol>

                <h3 className="text-lg font-medium mt-4 mb-2">Finding Connections</h3>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>Browse your suggested matches in the Discover tab</li>
                  <li>View mutual friends for each potential match</li>
                  <li>Express interest by sending a "Link Request"</li>
                  <li>When someone accepts your request, you'll be able to message each other</li>
                  <li>Use conversation starters based on mutual interests and connections</li>
                </ol>

                <h3 className="text-lg font-medium mt-4 mb-2">Tips for the Best Results</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Connect multiple social networks to maximize your mutual friend connections</li>
                  <li>Upload clear, recent photos that show your face and personality</li>
                  <li>Complete all profile sections to improve match quality</li>
                  <li>Be specific about your interests to find more compatible matches</li>
                  <li>Regularly check the app for new potential connections</li>
                  <li>Respond to messages promptly to keep conversations flowing</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">How does Link find mutual friends?</h3>
                    <p className="text-muted-foreground mt-2">
                      Link analyzes your connected social networks to identify friends you have in common with potential
                      matches. We only use connection data, never content from your social accounts. The more networks
                      you connect, the more mutual connections we can find.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">Is my social media data secure?</h3>
                    <p className="text-muted-foreground mt-2">
                      Yes. Link only accesses your friends list to identify mutual connections. We never post to your
                      accounts, read your messages, or access your personal content. Your connection to Link remains
                      private and isn't visible to your social network contacts.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">Can I control who sees my profile?</h3>
                    <p className="text-muted-foreground mt-2">
                      Absolutely. In Privacy Settings, you can choose to be visible only to friends-of-friends, adjust
                      how many mutual connections are required, or block specific individuals. You can also pause your
                      visibility at any time while maintaining your matches and conversations.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">What if I don't have many social connections?</h3>
                    <p className="text-muted-foreground mt-2">
                      While Link works best with an established social network, you can still use the app with fewer
                      connections. We offer an "Expanded Network" feature that includes second and third-degree
                      connections to help you find more potential matches.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">Will my friends know if I match with their friends?</h3>
                    <p className="text-muted-foreground mt-2">
                      No. Your activity on Link is private. We don't notify mutual friends when connections are made,
                      and we never share your dating preferences or activity with your social network. You control if
                      and when you want to mention your connection to others.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mt-8 mb-4">Troubleshooting</h2>

                <h3 className="text-lg font-medium mt-4 mb-2">Social Network Connection Issues</h3>
                <p>If you're having trouble connecting your social accounts:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Ensure you're using the correct login credentials</li>
                  <li>Check that you've granted Link the necessary permissions</li>
                  <li>Try logging out of the social network and back in before connecting</li>
                  <li>Update both Link and your social media apps to the latest versions</li>
                  <li>Try disconnecting and reconnecting the account</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">Not Finding Enough Matches</h3>
                <p>If you're not seeing many potential matches:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Connect additional social networks to expand your mutual friend pool</li>
                  <li>Adjust your distance settings to include a wider geographic area</li>
                  <li>Enable the "Expanded Network" feature in settings</li>
                  <li>Review your preference filters to ensure they're not too restrictive</li>
                  <li>Check back regularly as new users join the platform</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">Messaging Problems</h3>
                <p>If you're experiencing issues with messaging:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Check your internet connection</li>
                  <li>Restart the app</li>
                  <li>Ensure you haven't accidentally blocked the user</li>
                  <li>Verify that the match is still active (users can unmatch at any time)</li>
                  <li>Update to the latest version of the app</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Safety and Privacy</h2>
                <p>At Link, your safety is our priority:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Use our in-app reporting feature to flag inappropriate behavior or suspicious profiles</li>
                  <li>
                    Take advantage of the "Share Location" feature when meeting someone for the first time, which
                    temporarily shares your location with a trusted contact
                  </li>
                  <li>
                    Use the "Emergency Contact" feature to quickly alert a designated contact if you feel uncomfortable
                  </li>
                  <li>
                    Remember that while mutual connections increase safety, you should still follow standard dating
                    safety practices like meeting in public places
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
                  <li>Your username or account email</li>
                  <li>The device and operating system you're using</li>
                  <li>A detailed description of the issue</li>
                  <li>Screenshots of any error messages (if applicable)</li>
                </ul>

                <p className="mt-6">
                  Thank you for choosing Link. We're committed to helping you build meaningful connections through your
                  trusted social network.
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
