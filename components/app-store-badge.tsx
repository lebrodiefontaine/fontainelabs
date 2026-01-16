import Link from "next/link"

interface AppStoreBadgeProps {
  href: string
  className?: string
}

export function AppStoreBadge({ href, className = "" }: AppStoreBadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      download on the app store
    </Link>
  )
}
