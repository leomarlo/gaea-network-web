'use client'

import Image from 'next/image'

export default function Team() {
  return (
    <div className="relative min-h-screen bg-gray-900 forest-texture">
      {/* Background overlay to match homepage */}
      <div className="absolute inset-0 bg-gray-900/85"></div>
      
      <div className="relative z-10 p-8">
        <nav className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Our Team</h1>
        </nav>
        
        <div className="max-w-6xl mx-auto">
          {/* Quote section */}
          <div className="mb-12 text-center">
            <blockquote className="text-xl md:text-2xl italic p-6 border-l-4 border-gray-600 bg-gray-800/50 max-w-4xl mx-auto">
              <span className="text-white">
                &ldquo;If you want to build a ship, don&apos;t drum up people to collect wood and don&apos;t assign them tasks and work, but rather teach them to long for the endless immensity of the sea.&rdquo;
              </span>
              <footer className="text-sm text-gray-400 mt-2">— Antoine de Saint-Exupéry</footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dr. Fabian Schröder */}
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/team/FabianSchroeder.jpeg"
                    alt="Dr. Fabian Schroeder"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Fabian Schroeder</h3>
                <p className="text-gray-300 italic">&ldquo;made of water mostly&rdquo;</p>
              </div>
            </div>

            {/* Dr. Leonhard Horstmeyer */}
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/team/LeonhardHorstmeyer2.jpg"
                    alt="Dr. Leonhard Horstmeyer"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Leonhard Horstmeyer</h3>
                <p className="text-gray-300 italic">&ldquo;made for water mostly&rdquo;</p>
              </div>
            </div>
            {/* You - Join our mission */}
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gray-700 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">You</h3>
                <p className="text-gray-300 italic">&ldquo;Join our mission&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
