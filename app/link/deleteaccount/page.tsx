"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppIcon } from "@/components/app-icon"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function DeleteAccountLink() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate phone number (simple validation)
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number")
      setIsSubmitting(false)
      return
    }

    // Validate name
    if (!name || name.length < 2) {
      setError("Please enter your full name")
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation, you would make an API call to your backend
      // to process the account deletion request

      setIsSubmitted(true)
    } catch (err) {
      setError("An error occurred. Please try again or contact support.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <Link href="/link" className="inline-flex items-center text-primary hover:text-pink-400 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4 text-gray-600" /> Back to Link
            </Link>

            <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
              <div className="flex items-center mb-6">
                <AppIcon app="link" size="md" className="mr-4" />
                <h1 className="text-2xl font-bold">Delete Your Link Account</h1>
              </div>

              {!isSubmitted ? (
                <>
                  <p className="text-muted-foreground mb-6">
                    We're sorry to see you go. To delete your account, please enter your phone number and name below.
                    This action cannot be undone and will permanently delete all your data.
                  </p>

                  {error && (
                    <div className="bg-red-900/20 border border-red-900/50 rounded-md p-4 mb-6 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-red-500 text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="bg-background"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter the phone number associated with your Link account
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-background"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter your full name exactly as it appears in your Link account
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Submit to Delete Account"}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-900/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Request Submitted</h2>
                  <p className="text-muted-foreground mb-6">
                    We've received your account deletion request. Your account will be deleted within 30 days. You'll
                    receive a confirmation email when the process is complete.
                  </p>
                  <Button asChild className="bg-primary hover:bg-pink-700">
                    <Link href="/">Return to Home</Link>
                  </Button>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  If you're experiencing issues with the app, please consider{" "}
                  <Link href="/link/support" className="text-primary hover:text-pink-400">
                    contacting support
                  </Link>{" "}
                  before deleting your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
