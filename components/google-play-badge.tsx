"use client"

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
      className={`inline-block ${className} transition-transform hover:scale-105`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-[40px] bg-black text-white rounded-md px-4 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col">
          <span className="text-[8px]">GET IT ON</span>
          <span className="text-[16px] font-semibold">Google Play</span>
        </div>
      </div>
    </Link>
  )
}
