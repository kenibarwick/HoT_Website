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
          </div>
        </div>

        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
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
    </div>
  )
}
