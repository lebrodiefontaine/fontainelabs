import { AppStoreBadge } from "./app-store-badge"
import { GooglePlayBadge } from "./google-play-badge"

interface StoreBadgeProps {
  store: "app-store" | "google-play"
  href: string
  className?: string
}

export function StoreBadge({ store, href, className = "" }: StoreBadgeProps) {
  if (store === "app-store") {
    return <AppStoreBadge href={href} className={className} />
  } else {
    return <GooglePlayBadge href={href} className={className} />
  }
}
