import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-black">
      <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
        <div>
          <div className="text-base">fontaine labs llc</div>
          <p className="text-sm">creating innovative mobile experiences for a connected world.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div>apps</div>
            <Link href="/aura-pro">aura pro</Link>
            <Link href="/uni-chance">unichance</Link>
            <Link href="/link">likeback</Link>
            <Link href="/delta">delta</Link>
          </div>
          <div className="space-y-2">
            <div>support</div>
            <Link href="/support-aura-pro">aura pro support</Link>
            <Link href="/support-uni-chance">unichance support</Link>
            <Link href="/link/support">likeback support</Link>
            <Link href="/delta/support">delta support</Link>
          </div>
          <div className="space-y-2">
            <div>legal</div>
            <Link href="/link/terms">terms of service</Link>
            <Link href="/link/privacy">privacy policy</Link>
            <Link href="/link/child-safety">child safety standards</Link>
            <Link href="/delta/terms">delta terms</Link>
            <Link href="/delta/privacy">delta privacy</Link>
          </div>
        </div>
        <div className="pt-4 border-t border-black text-xs">
          © 2024 fontaine labs llc. all rights reserved.
        </div>
      </div>
    </footer>
  )
}
