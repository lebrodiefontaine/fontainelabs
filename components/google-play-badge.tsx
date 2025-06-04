"use client"

import Link from "next/link"
import { Play } from "lucide-react"

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
      <div className="h-[50px] w-full bg-black text-white rounded-xl px-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
        <Play className="h-6 w-6 mr-3 text-white" />
        <div className="flex flex-col">
          <span className="text-[10px] leading-none">GET IT ON</span>
          <span className="text-[18px] font-semibold leading-tight">Google Play</span>
        </div>
      </div>
    </Link>
  )
}
