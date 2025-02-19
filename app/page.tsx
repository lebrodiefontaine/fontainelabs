import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Beaker, FlaskRoundIcon as Flask, Microscope, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Beaker className="h-6 w-6 mr-2" />
          <span className="font-bold">Fontaine Labs LLC</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Fontaine Labs LLC
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Innovating for a better tomorrow. We specialize in cutting-edge research and development.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Flask className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Chemical Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  State-of-the-art chemical analysis for various industries.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Microscope className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Microbiology Research</h3>
                <p className="text-gray-500 dark:text-gray-400">Advanced microbiology studies and research services.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Beaker className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Product Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Innovative product development and testing solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              About Fontaine Labs
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-center mb-8">
              Fontaine Labs LLC is a leading research and development company dedicated to pushing the boundaries of
              science and technology. With a team of expert scientists and state-of-the-art facilities, we strive to
              deliver innovative solutions to complex problems.
            </p>
            <div className="flex justify-center">
              <Button>Learn More About Us</Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="mx-auto max-w-[500px]">
              <div className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <textarea
                  className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none"
                  placeholder="Your Message"
                ></textarea>
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Fontaine Labs LLC. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

