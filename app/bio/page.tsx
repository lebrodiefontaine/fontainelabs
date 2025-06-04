import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function BioPage() {
  // Link App Store and Google Play URLs
  const linkApp = {
    appStore: "https://apps.apple.com/us/app/link-match-with-anyone/id6745699159",
    googlePlay: "https://play.google.com/store/apps/details?id=com.fontainelabs.link&pcampaignid=web_share",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* App Icon and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <AppIcon app="link" size="xl" className="w-24 h-24" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Link</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Dating through mutual friends</p>
        </div>

        {/* Download Buttons */}
        <div className="space-y-4 mb-8">
          <div className="w-full flex justify-center">
            <StoreBadge store="app-store" href={linkApp.appStore} className="w-full max-w-[200px]" />
          </div>
          <div className="w-full flex justify-center">
            <StoreBadge store="google-play" href={linkApp.googlePlay} className="w-full max-w-[200px]" />
          </div>
        </div>

        {/* App Description */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Find meaningful connections</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              Connect through mutual friends
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              Double opt-in matching system
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              Enhanced privacy & security
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              Verified profiles only
            </li>
          </ul>
        </div>

        {/* Learn More Link */}
        <div className="text-center">
          <Link
            href="/link"
            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium transition-colors"
          >
            Learn more about Link
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made by{" "}
            <Link href="/" className="text-pink-600 dark:text-pink-400 hover:underline">
              Fontaine Labs
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
