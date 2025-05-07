import Image from "next/image"
import { cn } from "@/lib/utils"
import { LinkIcon } from "lucide-react"

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

  // For Link app, we'll use a placeholder icon
  if (app === "link") {
    return (
      <div
        className={cn(
          "relative overflow-hidden shadow-lg rounded-[22%] flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600",
          className,
        )}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <LinkIcon className="text-white" style={{ width: pixelSize / 2, height: pixelSize / 2 }} />
      </div>
    )
  }

  const iconPath = app === "aura-pro" ? "/app-icons/aura-pro-icon.png" : "/app-icons/uni-chance-icon.png"

  // iOS-style rounded corners
  const roundedStyle = "rounded-[22%]" // iOS app icon style rounded corners

  return (
    <div
      className={cn("relative overflow-hidden shadow-lg", roundedStyle, className)}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <Image
        src={iconPath || "/placeholder.svg"}
        alt={app === "aura-pro" ? "Aura Pro App Icon" : "UniChance App Icon"}
        width={pixelSize}
        height={pixelSize}
        className="object-cover"
      />
    </div>
  )
}
