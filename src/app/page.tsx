'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Full-scale background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          // Fallback gradient for when image is not available
          background: "linear-gradient(135deg, #0f4c3a 0%, #1a5f4a 50%, #2d7a5f 100%)"
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-8">
          <div className="text-2xl font-bold text-white">Gaea Network</div>
        </nav>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main title */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 font-sans tracking-tight">
              The Gaea Network
            </h1>

            {/* Synopsis */}
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              <p>
                The Earth&apos;s ecological balance is under greater threat than ever before. Human economic activity is devastating intact ecosystems at an alarming rate, and this destruction will continue as long as exploitation remains the only recognised economic value of nature.
              </p>
              

              <blockquote className="text-xl md:text-2xl italic text-green-300 my-8">
                &ldquo;You may say I&apos;m a dreamer.<br />
                But I&apos;m not the only one.&rdquo;
                <footer className="text-sm text-gray-400 mt-2">— John Lennon</footer>
              </blockquote>

            </div>

            {/* Call to action */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/whitepaper"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Read Whitepaper
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/team"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 text-center text-gray-400 text-sm">
          <p>© 2024 Gaea.network - Preserving nature through innovative technology</p>
        </div>
      </div>
    </div>
  )
}
