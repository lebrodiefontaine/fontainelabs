"use client"

import Link from "next/link"
import { Apple } from "lucide-react"

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
      className={`inline-block ${className} transition-transform hover:scale-105`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-[50px] w-full bg-black text-white rounded-xl px-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
        <Apple className="h-6 w-6 mr-3 text-white" />
        <div className="flex flex-col">
          <span className="text-[10px] leading-none">Download on the</span>
          <span className="text-[18px] font-semibold leading-tight">App Store</span>
        </div>
      </div>
    </Link>
  )
}
