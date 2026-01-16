import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="w-full border-b border-black">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="text-2xl">fontaine labs llc</div>
        <nav className="mt-2 flex gap-8 text-base">
          <Link href="/#apps">apps</Link>
          <Link href="/#info">info</Link>
        </nav>
      </div>
    </header>
  )
}
