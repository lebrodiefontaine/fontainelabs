import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function LikebackDownloadPage() {
  // Likeback App Store and Google Play URLs
  const likebackApp = {
    appStore: "https://apps.apple.com/us/app/link-match-with-anyone/id6745699159",
    googlePlay: "https://play.google.com/store/apps/details?id=com.fontainelabs.link&pcampaignid=web_share",
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NCN2TB5M');
        `}
      </Script>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCN2TB5M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Header */}
        <div className="p-4">
          <Link
            href="/link"
            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Likeback
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm mx-auto">
            {/* App Icon and Title */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <AppIcon app="link" size="xl" className="w-32 h-32" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Likeback</h1>
              <p className="text-gray-600 dark:text-gray-300 text-xl">Match with anyone.</p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <div className="w-full">
                <StoreBadge store="app-store" href={likebackApp.appStore} className="w-full" />
              </div>
              <div className="w-full">
                <StoreBadge store="google-play" href={likebackApp.googlePlay} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
