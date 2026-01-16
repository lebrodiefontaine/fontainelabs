import Link from "next/link"

interface GooglePlayBadgeProps {
  href: string
  className?: string
}

export function GooglePlayBadge({ href, className = "" }: GooglePlayBadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      get it on google play
    </Link>
  )
}
