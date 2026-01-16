import Link from "next/link"
import { AppIcon } from "@/components/app-icon"
import { StoreBadge } from "@/components/store-badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const auraPro = {
    appStore: "https://apps.apple.com/us/app/aura-pro-elite-aura-analysis/id6743044971",
  }

  const uniChance = {
    appStore: "https://apps.apple.com/us/app/unichance-admissions-analysis/id6743754137",
    googlePlay: "#", // Placeholder - replace with actual Google Play URL when available
  }

  const linkApp = {
    appStore: "https://apps.apple.com/us/app/link-match-with-anyone/id6745699159",
    googlePlay: "https://play.google.com/store/apps/details?id=com.fontainelabs.link&pcampaignid=web_share",
  }

  const deltaApp = {
    appStore: "#", // Placeholder - replace with actual App Store URL when available
  }

  const apps = [
    {
      name: "aura pro",
      href: "/aura-pro",
      icon: "aura-pro" as const,
      tagline: "elite aura analysis",
      description:
        "discover your unique aura signature with our advanced facial analysis technology. reveal insights about your energy and spiritual alignment.",
      supportHref: "/support-aura-pro",
      privacyHref: "/privacy-policy-aura-pro",
      badges: [{ store: "app-store" as const, href: auraPro.appStore }],
    },
    {
      name: "unichance",
      href: "/uni-chance",
      icon: "uni-chance" as const,
      tagline: "admissions analysis",
      description:
        "navigate the college admissions process with confidence using our ai-powered platform. calculate your chances of getting into top universities.",
      supportHref: "/support-uni-chance",
      privacyHref: "/privacy-policy-uni-chance",
      badges: [
        { store: "app-store" as const, href: uniChance.appStore },
        { store: "google-play" as const, href: uniChance.googlePlay },
      ],
    },
    {
      name: "link",
      href: "/link",
      icon: "link" as const,
      tagline: "match with anyone",
      description:
        "a dating app that leverages your mutual friends to create meaningful connections. find potential partners through trusted social networks.",
      supportHref: "/support-link",
      privacyHref: "/link/privacy",
      badges: [
        { store: "app-store" as const, href: linkApp.appStore },
        { store: "google-play" as const, href: linkApp.googlePlay },
      ],
    },
    {
      name: "delta",
      href: "/delta",
      icon: "aura-pro" as const,
      tagline: "habit tracking",
      description:
        "track your habits and build better routines with our intuitive habit tracking app. visualize your progress and stay motivated.",
      supportHref: "/delta/support",
      privacyHref: "/delta/privacy",
      badges: [{ store: "app-store" as const, href: deltaApp.appStore }],
    },
  ]

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 space-y-12">
        <section className="space-y-2">
          <h1 className="text-xl">innovative mobile apps for modern life</h1>
          <p>at fontaine labs, we create beautiful, intuitive mobile applications that enhance your daily experience.</p>
        </section>

        <section id="apps" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg">apps</h2>
            <p>download our apps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <div key={app.name} className="space-y-3">
                <AppIcon app={app.icon} size="lg" />
                <div className="space-y-1">
                  <Link href={app.href} className="text-base">
                    {app.name}
                  </Link>
                  <div className="text-sm">{app.tagline}</div>
                  <p className="text-sm">{app.description}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href={app.supportHref}>support</Link>
                  <Link href={app.privacyHref}>privacy policy</Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  {app.badges.map((badge) => (
                    <StoreBadge key={`${app.name}-${badge.store}`} store={badge.store} href={badge.href} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="info" className="space-y-2">
          <h2 className="text-lg">info</h2>
          <p>fontaine labs is an app studio helping users improve their lives with consumer mobile apps</p>
        </section>

        <section id="about" className="space-y-2">
          <h2 className="text-lg">about</h2>
          <p>
            founded with a passion for creating exceptional mobile experiences, fontaine labs llc is dedicated to
            developing innovative applications that solve real problems. our team of talented developers, designers,
            and product specialists work together to craft apps that are both beautiful and functional.
          </p>
        </section>

        <section id="contact" className="space-y-2">
          <h2 className="text-lg">contact</h2>
          <p>have questions about our apps? we'd love to hear from you!</p>
          <p>email: founder@fontainelabs.com</p>
          <p>business hours: monday-friday, 9am-5pm est</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
