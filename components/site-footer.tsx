import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-6 w-full shrink-0 px-4 md:px-6 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Fontaine Labs LLC</h3>
            <p className="text-sm text-muted-foreground">
              Creating innovative mobile experiences for a connected world.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our Apps</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aura-pro" className="text-muted-foreground hover:text-primary transition-colors">
                  Aura Pro
                </Link>
              </li>
              <li>
                <Link href="/uni-chance" className="text-muted-foreground hover:text-primary transition-colors">
                  UniChance
                </Link>
              </li>
              <li>
                <Link href="/link" className="text-muted-foreground hover:text-primary transition-colors">
                  Likeback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support-aura-pro" className="text-muted-foreground hover:text-primary transition-colors">
                  Aura Pro Support
                </Link>
              </li>
              <li>
                <Link href="/support-uni-chance" className="text-muted-foreground hover:text-primary transition-colors">
                  UniChance Support
                </Link>
              </li>
              <li>
                <Link href="/link/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Likeback Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/link/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/link/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/link/child-safety" className="text-muted-foreground hover:text-primary transition-colors">
                  Child Safety Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">© 2024 Fontaine Labs LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
