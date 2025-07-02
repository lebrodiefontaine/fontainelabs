import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import Script from "next/script"

export default function BioPage() {
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

      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCN2TB5M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div className="w-full max-w-sm mx-auto">
          {/* App Icon and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <AppIcon app="link" size="xl" className="w-24 h-24" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Likeback</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Match with anyone.</p>
          </div>

          {/* Download Buttons */}
          <div className="space-y-4">
            <div className="w-full flex justify-center">
              <StoreBadge store="app-store" href={likebackApp.appStore} className="w-full max-w-[200px]" />
            </div>
            <div className="w-full flex justify-center">
              <StoreBadge store="google-play" href={likebackApp.googlePlay} className="w-full max-w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
