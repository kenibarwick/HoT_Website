"use client"; // This directive makes the component a Client Component

import { useState } from "react";
import Image from "next/image";

export default function Logo() {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div className="relative z-10 text-center">
      {!showFallback ? (
        <Image
          src="/hot-logo.png"
          alt="House of Techno Logo"
          width={256}
          height={256}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-pulse-slow animate-spin-slow animate-glow"
          onError={() => setShowFallback(true)} // Handle error
        />
      ) : (
        <div
          id="fallback-logo"
          className="w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center"
        >
          <div className="text-6xl md:text-8xl font-black">
            <span className="text-pink-500">H</span>
            <span className="text-pink-500">o</span>
            <span className="text-pink-500">T</span>
          </div>
        </div>
      )}
    </div>
  );
}