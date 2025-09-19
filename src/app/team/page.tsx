'use client'

import Image from 'next/image'

export default function Team() {
  return (
    <div className="p-8">
      <nav className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white">Our Team</h1>
      </nav>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dr. Fabian Schröder */}
          <div className="p-6 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-lg">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/team/FabianSchroeder.jpeg"
                  alt="Dr. Fabian Schröder"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Dr. Fabian Schröder</h3>
              <p className="text-gray-400 italic">&ldquo;made of water mostly&rdquo;</p>
            </div>
          </div>

          {/* Dr. Leonhard Horstmeyer */}
          <div className="p-6 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-lg">
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
              <p className="text-gray-400 italic">&ldquo;made for water mostly&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
