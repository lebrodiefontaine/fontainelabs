import { AppStoreBadge } from "./app-store-badge"
import { GooglePlayBadge } from "./google-play-badge"

interface StoreBadgeProps {
  store: "app-store" | "google-play"
  href: string
  className?: string
}

export function StoreBadge({ store, href, className = "" }: StoreBadgeProps) {
  // Add a subtle hover effect to the className
  const enhancedClassName = `${className} transform transition-all duration-200 hover:-translate-y-1 relative z-20`

  if (store === "app-store") {
    return <AppStoreBadge href={href} className={enhancedClassName} />
  } else {
    return <GooglePlayBadge href={href} className={enhancedClassName} />
  }
}
