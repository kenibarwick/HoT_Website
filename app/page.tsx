import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Calendar, Users, Volume2, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HouseOfTechnoLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/hot-logo.png"
              alt="House of Techno Logo"
              width={60}
              height={60}
              className="h-12 w-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#events" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Events
            </Link>
            <Link href="#artists" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Artists
            </Link>
            <Link href="#about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/hot-logo.png"
                alt="House of Techno Logo"
                width={300}
                height={300}
                className="h-48 w-48 md:h-64 md:w-64 drop-shadow-2xl"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Where beats meet souls and the night never ends. Experience the ultimate techno journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Join the Beat
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-2 h-20 bg-pink-500 rotate-45 opacity-60"></div>
        <div className="absolute top-32 right-16 w-2 h-16 bg-orange-500 rotate-45 opacity-60"></div>
        <div className="absolute top-44 right-22 w-2 h-12 bg-yellow-500 rotate-45 opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-2 h-24 bg-cyan-400 rotate-45 opacity-60"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-4">
            <span className="text-cyan-400">Experience</span>
            <Image
              src="/hot-logo.png"
              alt="HoT Logo"
              width={60}
              height={60}
              className="h-12 w-12 inline-block"
            />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Pure Techno</h3>
                <p className="text-gray-300">Underground beats that move your soul and ignite the dancefloor.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Community</h3>
                <p className="text-gray-300">Join a family of techno lovers who live for the rhythm.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Volume2 className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Sound System</h3>
                <p className="text-gray-300">State-of-the-art audio that delivers every beat with crystal clarity.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 flex-wrap">
            Ready to feel the
            <Image
              src="/hot-logo.png"
              alt="HoT Logo"
              width={60}
              height={60}
              className="h-12 w-12 inline-block"
            />
            beats?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't miss out on the next underground experience. Get notified about exclusive events and releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/hot-logo.png"
                alt="House of Techno Logo"
                width={48}
                height={48}
                className="h-10 w-10"
              />
              <span className="text-orange-500 font-bold">House of Techno</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 House of Techno. All rights reserved. Keep the beat alive.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
