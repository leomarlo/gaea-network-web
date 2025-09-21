'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 forest-texture">
      {/* Clean background without patterns */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* Simple overlay to match sidebar background */}
        <div className="absolute inset-0 bg-gray-900/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-8">
          <div></div>
        </nav>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main title with professional font */}
            <h1 className="text-3xl md:text-4xl title-large mb-8 tracking-tight text-white">
              The Gaea Network
            </h1>

            {/* Synopsis as block caption (left-aligned) */}
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-left">
              <p className="text-gray-200">
                The Earth&apos;s ecological balance is under greater threat than ever before. Human economic activity is devastating intact ecosystems at an alarming rate, and this destruction will continue as long as exploitation remains the only recognised economic value of nature. Project Gaea seeks to challenge this paradigm by introducing an asset-backed cryptocurrency rooted in the most fundamental and irreplaceable asset—nature itself. By tokenising nature reserves and creating a tradable currency, we aim to assign nature an economic value that surpasses the value of its exploitation, ensuring that its preservation serves our collective economic interests.
              </p>
              

              <blockquote className="text-xl md:text-2xl italic my-8 p-6 border-l-4 border-gray-600 bg-gray-800/50">
                <span className="text-white">
                  &ldquo;You may say I&apos;m a dreamer.<br />
                  But I&apos;m not the only one.&rdquo;
                </span>
                <footer className="text-sm text-gray-400 mt-2">— John Lennon</footer>
              </blockquote>

            </div>

            {/* Call to action with standard buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/whitepaper"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
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
