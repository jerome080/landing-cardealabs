import Link from "next/link"

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 md:py-8">
          <div className="flex justify-center">
            <Link href="/">
              <img src="/images/cardea.png" alt="Cardea Labs" className="h-32 md:h-40" />
            </Link>
          </div>
        </div>
      </header>

      {/* Impressum Content */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">Impressum</h1>

          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <div>
              <h2 className="text-xl font-light text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <p>CardeaLabs</p>
              <p>Bismarckstrasse 67</p>
              <p>10627 Berlin</p>
            </div>

            <div>
              <h2 className="text-xl font-light text-gray-900 mb-3">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@cardealabs.de" className="text-[#1AB5AC] hover:underline">
                  info@cardealabs.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://cardealabs.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1AB5AC] hover:underline"
                >
                  cardealabs.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
            <div className="flex items-center">
              <img src="/images/hpiengine-logo.jpeg" alt="HPI Engine" className="h-8 md:h-10 opacity-60" />
            </div>
            <div className="flex gap-6 text-sm text-gray-500 font-light">
              <Link href="/impressum" className="hover:text-[#1AB5AC] transition-colors">
                Impressum
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/datenschutz" className="hover:text-[#1AB5AC] transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
