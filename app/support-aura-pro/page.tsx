import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SupportAuraPro() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/aura-pro" className="inline-flex items-center text-primary hover:text-racing-green-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Aura Pro
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="aura-pro" size="md" className="mr-4" />
                <h1 className="text-3xl font-bold">Welcome to Aura Pro Support</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-6">
                  Thank you for choosing Aura Pro for your spiritual journey. Our app uses advanced technology to
                  analyze your facial features and reveal your unique aura signature. This support page is designed to
                  help you get the most out of your experience with us.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-4">Getting Started</h2>
                <h3 className="text-lg font-medium mt-4 mb-2">How to Get Your First Aura Reading</h3>
                <ol className="list-decimal pl-6 my-4 space-y-2">
                  <li>Open the Aura Pro app</li>
                  <li>Tap the "Start Aura Scan" button</li>
                  <li>Choose to either take a new photo or select one from your gallery</li>
                  <li>Position your face clearly in the frame with neutral lighting</li>
                  <li>Once selected, your photo will be analyzed to reveal your aura</li>
                </ol>

                <h3 className="text-lg font-medium mt-4 mb-2">Tips for the Best Results</h3>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Use good lighting (natural daylight works best)</li>
                  <li>Face the camera directly with a neutral expression</li>
                  <li>Keep your face centered in the frame</li>
                  <li>Remove glasses, hats, or other accessories that obscure facial features</li>
                  <li>For consistent readings, try to use similar lighting conditions</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-4">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">What is an aura?</h3>
                    <p className="text-muted-foreground mt-2">
                      An aura is a distinctive energy field that surrounds every person. It reflects your emotional,
                      spiritual, and physical state, and can provide insights into your personal energy signature.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">How does Aura Pro work?</h3>
                    <p className="text-muted-foreground mt-2">
                      Aura Pro uses Apple's Vision framework to detect facial landmarks from your photos. Our
                      proprietary algorithm then analyzes these landmarks to determine your energy patterns and aura
                      characteristics. All processing happens directly on your device, ensuring your privacy.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">Is my data private?</h3>
                    <p className="text-muted-foreground mt-2">
                      Yes! All photo analysis is conducted entirely on your device. We never transmit your photos or
                      facial data to any servers or third parties. The app only saves your final analysis results and
                      photo (if you choose) to your device history.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">What do the different aura colors and categories mean?</h3>
                    <p className="text-muted-foreground mt-2">
                      Each aura category reveals different aspects of your energetic state. Higher scores generally
                      indicate stronger energy fields, while the specific category provides insights into your unique
                      spiritual and emotional characteristics. Tap on any analysis result for a detailed explanation of
                      what your specific aura reading means.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-medium">How often should I scan my aura?</h3>
                    <p className="text-muted-foreground mt-2">
                      While you can scan your aura anytime, many users find weekly or monthly scans most insightful for
                      tracking their spiritual journey. Significant life events may cause shifts in your aura, making
                      those ideal times for a new reading.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mt-8 mb-4">Troubleshooting</h2>

                <h3 className="text-lg font-medium mt-4 mb-2">No Face Detected</h3>
                <p>If you receive a "No Face Detected" message:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Ensure your face is clearly visible and well-lit</li>
                  <li>Try using a photo with fewer people or distractions</li>
                  <li>Make sure your face is properly centered in the frame</li>
                  <li>Check that there are no strong shadows obscuring your features</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">Subscription Issues</h3>
                <p>If you're having trouble with your subscription:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Verify your App Store payment method is valid</li>
                  <li>Check if your subscription is active in Settings → Apple ID → Subscriptions</li>
                  <li>Try restarting the app</li>
                  <li>Ensure you have an active internet connection when restoring purchases</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">App Crashing</h3>
                <p>If the app crashes:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Close all background apps and restart Aura Pro</li>
                  <li>Update to the latest version of Aura Pro</li>
                  <li>Ensure your device has enough storage space</li>
                  <li>Try restarting your device</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Contact Support</h2>
                <p>We're here to help with any questions or concerns about your Aura Pro experience:</p>
                <p className="mt-2">
                  Email: founder@fontainelabs.com
                  <br />
                  Website: www.fontainelabs.com
                </p>
                <p className="mt-4">When contacting support, please include:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>The device model you're using</li>
                  <li>Your iOS version</li>
                  <li>A description of the issue you're experiencing</li>
                  <li>Screenshots of any error messages (if applicable)</li>
                </ul>

                <p className="mt-6">
                  Thank you for choosing Aura Pro for your journey. We're committed to helping you discover and
                  understand your unique energetic signature.
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
