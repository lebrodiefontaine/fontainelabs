import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-racing-green-400 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-racing-green-300 mb-6">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="bg-primary hover:bg-racing-green-500">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
