import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function ChildSafetyLink() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/link" className="inline-flex items-center text-primary hover:text-pink-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to LikeBack
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="link" size="md" className="mr-4" />
                <div>
                  <h1 className="text-3xl font-bold">LikeBack Child Safety Standards</h1>
                  <p className="text-muted-foreground mt-1">
                    Our commitment to preventing child sexual abuse and exploitation
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="bg-yellow-900/20 border border-yellow-900/50 rounded-md p-4 mb-6 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-yellow-500 font-medium">Important Notice</p>
                    <p className="text-yellow-400/80 text-sm mt-1">
                      LikeBack is designed for adults 18+ only. We have implemented strict measures to ensure our
                      platform remains safe and appropriate for our adult users.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-4">LikeBack's Minimal Functionality Approach</h2>
                <p>
                  LikeBack is fundamentally different from most dating and social apps. We've intentionally designed our
                  platform with minimal functionality to prioritize safety and privacy:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-green-900/20 p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">No Photo or Video Uploads</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          LikeBack does not allow users to upload, share, or exchange photos or videos of any kind.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-green-900/20 p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">No Direct Communication</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Our app does not include any messaging, chat, or communication features between users.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-green-900/20 p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">No Meeting Strangers</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Link only notifies users of mutual interest. Users cannot browse or discover strangers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-green-900/20 p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Minimal Data Collection</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          We only collect and store users' names and phone numbers. No other personal data is stored.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mt-8 mb-4">Child Safety Standards Compliance</h2>
                <p>
                  Despite LikeBack's minimal functionality that inherently prevents many safety concerns, we are fully
                  committed to complying with Google Play's Child Safety Standards policy. Here's how we address each
                  requirement:
                </p>

                <h3 className="text-lg font-medium mt-6 mb-3">1. Published Standards Against CSAE</h3>
                <p>
                  Fontaine Labs LLC has a zero-tolerance policy for child sexual abuse and exploitation (CSAE). Although
                  our app does not allow content sharing or direct communication between users, we are committed to
                  preventing any potential misuse of our platform:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    We strictly prohibit the use of LikeBack by individuals under the age of 18, enforced through our
                    phone verification system
                  </li>
                  <li>We prohibit any attempt to use our platform to contact, groom, or exploit minors in any way</li>
                  <li>
                    We prohibit any attempt to circumvent our safety measures or use our platform in ways not intended
                  </li>
                  <li>We cooperate fully with law enforcement in any investigation related to child safety</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">2. In-App Mechanism for User Feedback</h3>
                <p>
                  Although Link does not allow content sharing or direct communication between users, we provide
                  multiple channels for users to report concerns:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>In-app reporting feature accessible from the profile settings menu</li>
                  <li>Direct email reporting to our dedicated safety team at safety@fontainelabs.com</li>
                  <li>Web-based reporting form available at fontainelabs.com/link/report</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">3. Addressing Child Sexual Abuse Material (CSAM)</h3>
                <p>LikeBack's design inherently prevents the sharing of any content, including CSAM:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>
                    <strong>No content sharing:</strong> Our app does not allow users to upload, share, or exchange
                    photos, videos, or any other form of media
                  </li>
                  <li>
                    <strong>No messaging:</strong> Our app does not include any messaging or communication features
                    between users
                  </li>
                  <li>
                    <strong>Immediate action:</strong> In the unlikely event that any CSAM-related activity is
                    identified through our platform, we will immediately:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Terminate the account</li>
                      <li>Report to the National Center for Missing & Exploited Children (NCMEC)</li>
                      <li>Cooperate with law enforcement</li>
                    </ul>
                  </li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">4. Compliance with Child Safety Laws</h3>
                <p>LikeBack is designed to comply with all applicable child safety laws and regulations:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>We enforce strict age verification through phone number verification</li>
                  <li>We maintain records in accordance with legal requirements</li>
                  <li>We regularly review and update our policies to ensure compliance with evolving laws</li>
                  <li>We cooperate fully with law enforcement agencies in any investigation related to child safety</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">5. Child Safety Point of Contact</h3>
                <p>
                  Fontaine Labs LLC has designated a Child Safety Officer who serves as the primary point of contact for
                  all matters related to child safety:
                </p>
                <div className="bg-card border border-border rounded-lg p-4 my-4">
                  <p className="font-medium">Child Safety Officer</p>
                  <p className="text-muted-foreground mt-1">
                    Email: safety@fontainelabs.com
                    <br />
                    Phone: +852 5518 4873
                    <br />
                    Available: Monday-Friday, 9am-5pm EST
                  </p>
                </div>
                <p>Our Child Safety Officer is responsible for:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Responding to reports of potential CSAE</li>
                  <li>Coordinating with law enforcement when necessary</li>
                  <li>Ensuring compliance with child safety laws and regulations</li>
                  <li>Regularly reviewing and updating our child safety policies</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Our Commitment</h2>
                <p>
                  While LikeBack's minimal functionality approach inherently prevents many of the risks associated with
                  traditional social and dating apps, we remain vigilant and committed to maintaining the highest
                  standards of safety. We regularly review our systems and processes to ensure they remain effective in
                  preventing any potential misuse of our platform.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-md p-4 my-6">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      If you have any questions or concerns about our child safety standards, please contact our Child
                      Safety Officer at safety@fontainelabs.com.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-8">Last Updated: May 12, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
