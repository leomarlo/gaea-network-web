export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 forest-texture">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-8 py-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 items-center">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
              The Earth&apos;s ecological balance is under greater threat than ever before. Human economic activity is devastating intact ecosystems at an alarming rate, and this destruction will continue as long as exploitation remains the only recognised economic value of nature. Project Gaea seeks to challenge this paradigm by introducing an asset-backed cryptocurrency rooted in the most fundamental and irreplaceable asset—nature itself. By tokenising nature reserves and creating a tradable currency, we aim to assign nature an economic value that surpasses the value of its exploitation, ensuring that its preservation serves our collective economic interests.
            </p>

            <blockquote className="text-sm md:text-base italic p-4 border-l-4 border-gray-700 bg-gray-800/50">
              <span className="text-white">
                &ldquo;You may say I&apos;m a dreamer.<br />
                But I&apos;m not the only one.&rdquo;
              </span>
              <footer className="text-xs text-gray-400 mt-2">— John Lennon</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
