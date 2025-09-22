export default function Contact() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen forest-texture">
      {/* Forest texture overlay */}
      <div className="absolute inset-0 bg-gray-900/90"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Contact</h1>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gray-800 rounded-xl border-2 border-gray-700 shadow-lg">
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 space-y-8 leading-relaxed">
                
                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="mb-6">
                    We're excited to connect with individuals and organizations who share our vision for environmental conservation through blockchain technology. Whether you're an investor, developer, conservationist, or simply curious about our mission, we'd love to hear from you.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-green-400 font-semibold min-w-[80px]">Email:</span>
                          <a href="mailto:mail@gaea.network" className="text-blue-400 hover:text-blue-300">
                            mail@gaea.network
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Areas of Interest */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">We're Looking For</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Blockchain developers and smart contract experts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Environmental scientists and ecologists</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Legal experts in cryptocurrency and environmental law</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Conservation organizations and land stewards</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Impact investors and sustainability advocates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Mission Statement */}
                <section className="border-t border-gray-600 pt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                  <p>
                    Gaea Network is pioneering the intersection of blockchain technology and environmental conservation. By creating asset-backed cryptocurrencies tied to real nature reserves, we're building a sustainable financial ecosystem that directly funds conservation efforts while providing transparent, measurable environmental impact.
                  </p>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Join the Movement</h3>
                  <p className="mb-4">
                    Ready to be part of the solution? Whether you want to contribute your expertise, invest in our mission, or learn more about our approach, we're here to collaborate.
                  </p>
                  <a 
                    href="mailto:mail@gaea.network?subject=Interest in Gaea Network" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Contact Us Today
                  </a>
                </section>

                {/* Quote */}
                <section className="text-center">
                  <blockquote className="border-l-4 border-green-500 pl-6 py-2 italic text-green-300">
                    &ldquo;Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.&rdquo;
                    <footer className="text-sm text-gray-400 mt-2">— The Lorax by Dr. Seuss</footer>
                  </blockquote>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
