export default function Impressum() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen forest-texture theme-bg-primary">
      <div className="absolute inset-0 bg-gray-900/90 theme-bg-overlay"></div>

      <div className="relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4 theme-text-primary">Impressum</h1>
        </header>

        <div className="max-w-3xl mx-auto space-y-8">

          {/* German version */}
          <div className="p-8 rounded-xl border shadow-lg bg-gray-800 border-gray-700 theme-card theme-border-card">
            <div className="space-y-8 text-gray-300 leading-relaxed theme-text-content">

              <section>
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Angaben gemäß § 25 MedienG und § 14 UGB</h2>
                <div className="space-y-2">
                  <p className="font-semibold text-white theme-text-primary">
                    Gaea.network &ndash; Verein für die Entwicklung und Förderung digitaler Technologien im Umweltschutz
                  </p>
                  <p>Österreich</p>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Vereinsregister</h2>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">ZVR-Zahl:</span>
                    <span>1861540879</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Gründungsdatum:</span>
                    <span>03.04.2026</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Rechtsform:</span>
                    <span>Verein (ZVR)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Sitz:</span>
                    <span>Österreich</span>
                  </div>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Kontakt</h2>
                <div className="flex gap-2">
                  <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">E-Mail:</span>
                  <a href="mailto:mail@gaea.network" className="text-blue-400 hover:text-blue-300 theme-link">
                    mail@gaea.network
                  </a>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Vereinszweck</h2>
                <p>
                  Entwicklung und Förderung digitaler Technologien im Umweltschutz, insbesondere die Nutzung von Blockchain-Technologie zur Finanzierung und Unterstützung von Naturschutzprojekten.
                </p>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Dokumente</h2>
                <div className="flex gap-2">
                  <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Vereinsstatuten:</span>
                  <a
                    href="/gaea.network.vereinsstatuten.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 theme-link"
                  >
                    Statuten herunterladen (PDF)
                  </a>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Haftungsausschluss</h2>
                <p className="text-sm">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </section>

            </div>
          </div>

          {/* Divider with English label */}
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="text-sm text-gray-400 italic">English version below</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* English version */}
          <div className="p-8 rounded-xl border shadow-lg bg-gray-800 border-gray-700 theme-card theme-border-card">
            <div className="space-y-8 text-gray-300 leading-relaxed theme-text-content">

              <section>
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Legal Notice</h2>
                <div className="space-y-2">
                  <p className="font-semibold text-white theme-text-primary">
                    Gaea.network &ndash; Association for the Development and Promotion of Digital Technologies in Environmental Protection
                  </p>
                  <p>Austria</p>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Association Register</h2>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">ZVR Number:</span>
                    <span>1861540879</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Founded:</span>
                    <span>03 April 2026</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Legal form:</span>
                    <span>Registered Association (ZVR), Austria</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Registered in:</span>
                    <span>Austria</span>
                  </div>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Contact</h2>
                <div className="flex gap-2">
                  <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Email:</span>
                  <a href="mailto:mail@gaea.network" className="text-blue-400 hover:text-blue-300 theme-link">
                    mail@gaea.network
                  </a>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Purpose</h2>
                <p>
                  Development and promotion of digital technologies in environmental protection, with a particular focus on the use of blockchain technology to finance and support nature conservation projects.
                </p>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Documents</h2>
                <div className="flex gap-2">
                  <span className="font-semibold text-green-400 theme-text-accent min-w-[160px]">Articles of Association:</span>
                  <a
                    href="/gaea.network.vereinsstatuten.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 theme-link"
                  >
                    Download (PDF)
                  </a>
                </div>
              </section>

              <section className="border-t border-gray-700 pt-6 theme-border">
                <h2 className="text-xl font-bold text-white mb-4 theme-text-primary">Disclaimer</h2>
                <p className="text-sm">
                  Despite careful review of content, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.
                </p>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
