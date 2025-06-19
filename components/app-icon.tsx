import Image from "next/image"
import { cn } from "@/lib/utils"

interface AppIconProps {
  app: "aura-pro" | "uni-chance" | "link"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function AppIcon({ app, size = "md", className }: AppIconProps) {
  const sizes = {
    sm: 48,
    md: 64,
    lg: 96,
    xl: 128,
  }

  const pixelSize = sizes[size]

  // Get the appropriate icon path
  const getIconPath = () => {
    switch (app) {
      case "aura-pro":
        return "/app-icons/aura-pro-icon.png"
      case "uni-chance":
        return "/app-icons/uni-chance-icon.png"
      case "link":
        return "/app-icons/link-icon.png"
      default:
        return "/placeholder.svg"
    }
  }

  const iconPath = getIconPath()

  // iOS-style rounded corners
  const roundedStyle = "rounded-[22%]" // iOS app icon style rounded corners

  return (
    <div
      className={cn("relative overflow-hidden shadow-lg", roundedStyle, className)}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <Image
        src={iconPath || "/placeholder.svg"}
        alt={`${app} App Icon`}
        width={pixelSize}
        height={pixelSize}
        className="object-cover"
      />
    </div>
  )
}
