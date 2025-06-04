import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LinkDownloadPage() {
  // Link App Store and Google Play URLs
  const linkApp = {
    appStore: "https://apps.apple.com/us/app/link-match-with-anyone/id6745699159",
    googlePlay: "https://play.google.com/store/apps/details?id=com.fontainelabs.link&pcampaignid=web_share",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      {/* Header */}
      <div className="p-4">
        <Link
          href="/link"
          className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Link
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Link</h1>
            <p className="text-gray-600 dark:text-gray-300 text-xl">Dating through mutual friends</p>
          </div>

          {/* Download Buttons */}
          <div className="space-y-4 mb-8">
            <div className="w-full">
              <StoreBadge store="app-store" href={linkApp.appStore} className="w-full" />
            </div>
            <div className="w-full">
              <StoreBadge store="google-play" href={linkApp.googlePlay} className="w-full" />
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Why choose Link?</h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Mutual friend connections</span>
              </div>
              <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Double opt-in matching</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Privacy-first approach</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Verified profiles only</span>
              </div>
            </div>
          </div>

          {/* Learn More */}
          <div className="text-center mb-6">
            <Link
              href="/link"
              className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium transition-colors text-lg"
            >
              Learn more about Link
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Made with ❤️ by{" "}
              <Link href="/" className="text-pink-600 dark:text-pink-400 hover:underline">
                Fontaine Labs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
