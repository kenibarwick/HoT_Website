<<<<<<< HEAD
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Logo from "@/components/ui/logo";
import { Music, Calendar, Users, Volume2, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Header Component
function Header() {
  return (
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
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black">
=======
"use client"

import { useEffect, useState } from "react"

export default function HomePage() {
  const [countdown, setCountdown] = useState({
    beats: 0,
    bars: 0,
    progress: 0,
  })

  useEffect(() => {
    const BPM = 132
    const BEATS_PER_BAR = 4
    const TARGET = new Date("2025-07-04T18:00:00Z").getTime()
    const START = new Date("2025-05-23T00:00:00Z").getTime() // countdown start date

    function updateCountdown() {
      const now = Date.now()
      const diffMs = TARGET - now
      const totalMinutes = diffMs / 60000
      const totalBeats = Math.max(0, Math.floor(BPM * totalMinutes))
      const totalBars = Math.floor(totalBeats / BEATS_PER_BAR)

      const totalDurationMs = TARGET - START
      const percent = 100 - (diffMs / totalDurationMs) * 100

      setCountdown({
        beats: totalBeats,
        bars: totalBars,
        progress: Math.min(100, Math.max(0, percent)),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
>>>>>>> v1
      {/* HoT Logo */}
      <div className="mb-12 relative">
        {/* Animated background circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 border border-cyan-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-48 h-48 md:w-60 md:h-60 border border-pink-500/30 rounded-full animate-spin-reverse"></div>
          <div className="absolute w-32 h-32 md:w-40 md:h-40 border border-orange-500/40 rounded-full animate-pulse"></div>
        </div>

        {/* Waveform graphics */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden md:block">
<<<<<<< HEAD
          <div className="flex items-end space-x-1" id="leftWaveform">
            {/* Waveform bars will be generated dynamically */}
=======
          <div className="flex items-end space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-cyan-500 animate-wave"
                style={{
                  height: `${Math.random() * 40 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
>>>>>>> v1
          </div>
        </div>

        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
<<<<<<< HEAD
          <div className="flex items-end space-x-1" id="rightWaveform">
            {/* Waveform bars will be generated dynamically */}
          </div>
        </div>

      <section className="relative flex items-center justify-center min-h-screen bg-black">
        {/* HoT Logo */}
        <Logo />
      </section>

      </div>
    </section>
  );
}

// Decorative elements 
function DecorativeElements() {
  return (
    <div>
      <div className="absolute top-20 right-10 w-2 h-20 bg-pink-500 rotate-45 opacity-60"></div>
      <div className="absolute top-32 right-16 w-2 h-16 bg-orange-500 rotate-45 opacity-60"></div>
      <div className="absolute top-44 right-22 w-2 h-12 bg-yellow-500 rotate-45 opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-2 h-24 bg-cyan-400 rotate-45 opacity-60"></div>
    </div>
  )
}

// Features Section
function FeaturesSection() {
  return (
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
              <p className="text-gray-300">Underground beats that move your soul and ignite the dance floor.</p>
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
  )
}

// Footer Section
function FooterSection() {
    return (
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/hot_1.png"
                alt="House of Techno Logo"
                width={48}
                height={48}
                className="h-10 w-10" />
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
    );
  }

// CTA Section
function CTASection()
{
    return (
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
    );
}

// Main Landing Page Component
export default function HouseOfTechnoLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <DecorativeElements />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
=======
          <div className="flex items-end space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-pink-500 animate-wave"
                style={{
                  height: `${Math.random() * 40 + 10}px`,
                  animationDelay: `${i * 0.1 + 0.8}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main logo */}
        <div className="relative z-10 text-center">
          <div className="animate-glow">
            <img
              src="/hot-logo.png"
              alt="House of Techno Logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-pulse-slow"
            />
          </div>

          {/* Beat indicator */}
          <div className="mt-6 flex justify-center">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-beat"></div>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="text-2xl md:text-4xl font-light mb-16 text-center">COMING SOON</div>

      {/* Countdown */}
      <div className="text-center space-y-6 max-w-md w-full">
        <div className="text-xl md:text-2xl font-mono">{countdown.beats.toLocaleString()} beats to go</div>
        <div className="text-lg md:text-xl font-mono text-gray-400">
          {countdown.bars.toLocaleString()} bars @132 BPM
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 rounded-full h-2 mt-8">
          <div
            className="bg-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${countdown.progress}%` }}
          />
        </div>
        <div className="text-sm text-gray-500 font-mono">{countdown.progress.toFixed(1)}% complete</div>
      </div>

      {/* Target Date */}
      <div className="mt-16 text-center text-gray-500 text-sm">July 4th, 2025 • 18:00 UTC</div>
>>>>>>> v1
    </div>
  )
}
