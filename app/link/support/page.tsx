import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/link">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Likeback
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Support</h1>
            <p className="text-muted-foreground">Get help with Likeback</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Support
                </CardTitle>
                <CardDescription>Get personalized help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:support@fontainelabs.com?subject=Likeback Support">Contact Support</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Community
                </CardTitle>
                <CardDescription>Connect with other Likeback users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our community to share tips and get help from other users.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Documentation
                </CardTitle>
                <CardDescription>Learn how to use Likeback features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our guides and tutorials to get the most out of Likeback.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I create my bio link?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      After downloading Likeback, simply create an account and start customizing your profile. Add your
                      social media links, bio information, and choose from our selection of themes to create your
                      personalized bio link page.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I customize the appearance of my profile?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Yes! Likeback offers various customization options including themes, colors, and layouts. You can
                      personalize your profile to match your brand or personal style.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is Likeback free to use?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Likeback offers both free and premium features. Basic bio link functionality is free, with
                      additional customization options and analytics available through our premium plans.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I share my bio link?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Once you've created your profile, Likeback generates a unique URL that you can share on your
                      social media profiles, email signatures, or anywhere you want to direct people to all your
                      important links in one place.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I track clicks and analytics?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Yes, Likeback provides analytics to help you understand how your bio link is performing. You can
                      see click counts, popular links, and visitor insights to optimize your profile.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    If you can't find the answer to your question in our FAQ, don't hesitate to reach out to our support
                    team. We're here to help you get the most out of Likeback.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <a href="mailto:support@fontainelabs.com?subject=Likeback Support Request">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Support
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/link/privacy">View Privacy Policy</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/link/terms">View Terms of Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
