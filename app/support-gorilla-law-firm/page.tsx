import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SupportGorillaLawFirm() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary hover:text-racing-green-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <h1 className="text-3xl font-bold">Gorilla Law Firm Support</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mt-8 mb-6">Privacy Policy</h2>
                
                <div className="bg-muted/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Davis W. Smith P.C. (The Gorilla Law Firm)</h3>
                  <p className="text-sm text-muted-foreground">Effective Date: January 2025</p>
                </div>

                <p className="text-lg mb-6">
                  At Davis W. Smith P.C., doing business as The Gorilla Law Firm, we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, protect, and share information about you when you use our mobile application and legal services.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">1. INFORMATION WE COLLECT</h3>
                <p className="mb-4">We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Personal identification information (name, address, phone number, email)</li>
                  <li>Social Security Number and date of birth for identification purposes</li>
                  <li>Driver's license information</li>
                  <li>Details about your accident, injuries, and medical treatment</li>
                  <li>Employment and insurance information</li>
                  <li>Vehicle information and accident scene photographs</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">2. HOW WE USE YOUR INFORMATION</h3>
                <p className="mb-4">Your information is used exclusively for legal representation purposes:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>To evaluate and pursue your personal injury claim</li>
                  <li>To communicate with you about your case</li>
                  <li>To coordinate with medical providers, insurance companies, and other parties</li>
                  <li>To prepare legal documents and court filings</li>
                  <li>To provide legal advice and representation</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">3. CONFIDENTIALITY AND ATTORNEY-CLIENT PRIVILEGE</h3>
                <p className="mb-4">All information you provide is strictly confidential and protected by attorney-client privilege. This means:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Your information cannot be disclosed without your written consent</li>
                  <li>Communications between you and our firm are privileged</li>
                  <li>We maintain the highest standards of professional confidentiality</li>
                  <li>Only authorized personnel working on your case have access to your information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">4. INFORMATION SHARING</h3>
                <p className="mb-4">Your confidential information will ONLY be shared with:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Attorneys and staff at Davis W. Smith P.C. working on your case</li>
                  <li>Authorized legal assistants and paralegals</li>
                  <li>Third parties necessary for your legal representation (medical providers, expert witnesses, court personnel) and only with your consent or as required by law</li>
                </ul>
                <p className="font-medium">No information will be sold, traded, or shared for marketing purposes</p>

                <h3 className="text-xl font-semibold mt-8 mb-4">5. DATA SECURITY</h3>
                <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Secure servers with restricted access</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on confidentiality requirements</li>
                  <li>Compliance with legal and ethical obligations</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">6. DATA RETENTION</h3>
                <p className="mb-4">We retain your information for as long as necessary to:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Provide legal services and representation</li>
                  <li>Comply with legal and ethical obligations</li>
                  <li>Maintain case files as required by law</li>
                </ul>
                <p>Information may be retained permanently as part of your legal file</p>

                <h3 className="text-xl font-semibold mt-8 mb-4">7. YOUR RIGHTS</h3>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Withdraw consent for certain uses (where legally permissible)</li>
                  <li>Request information about how your data is used</li>
                  <li>File complaints with appropriate regulatory authorities</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">8. MOBILE APPLICATION SPECIFIC</h3>
                <p className="mb-4">Our mobile application:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Uses secure encryption for all data transmission</li>
                  <li>Stores minimal information locally on your device</li>
                  <li>Requires authentication for access to sensitive information</li>
                  <li>Automatically logs out after periods of inactivity</li>
                  <li>Does not track your location unless explicitly required for case purposes</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">9. THIRD-PARTY SERVICES</h3>
                <p className="mb-4">We may use trusted third-party services for:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Secure cloud storage and backup</li>
                  <li>Email communication systems</li>
                  <li>Case management software</li>
                  <li>Payment processing</li>
                </ul>
                <p>All third-party providers are required to maintain confidentiality and security standards consistent with this policy.</p>

                <h3 className="text-xl font-semibold mt-8 mb-4">10. CHANGES TO THIS POLICY</h3>
                <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes through the mobile application or other appropriate means.</p>

                <h3 className="text-xl font-semibold mt-8 mb-4">11. CONTACT INFORMATION</h3>
                <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                <div className="bg-muted/20 rounded-lg p-4">
                  <p className="font-medium">Davis W. Smith P.C. (The Gorilla Law Firm)</p>
                  <p className="text-muted-foreground">[Contact information would be inserted here]</p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">12. LEGAL BASIS FOR PROCESSING</h3>
                <p className="mb-4">We process your personal information based on:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Your consent when you submit information through our application</li>
                  <li>Our legitimate interests in providing legal services</li>
                  <li>Legal obligations under attorney-client privilege and professional responsibility rules</li>
                  <li>Contractual necessity for providing legal representation</li>
                </ul>

                <p className="mt-8 p-4 bg-muted/20 rounded-lg">
                  This Privacy Policy is effective as of the date listed above and governs all information collected through our mobile application and legal services.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Contact Support</h2>
                <p>For technical support with the Gorilla Law Firm mobile application:</p>
                <p className="mt-2">
                  Email: <a href="mailto:zane@fontainelabs.com" className="text-primary hover:underline">zane@fontainelabs.com</a>
                  <br />
                  Website: <a href="https://www.fontainelabs.com" className="text-primary hover:underline">www.fontainelabs.com</a>
                </p>

                <p className="mt-6">
                  Thank you for using the Gorilla Law Firm mobile application. We're committed to protecting your privacy while providing you with the best possible legal representation.
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