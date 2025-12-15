import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 md:py-8">
          <div className="flex justify-between items-center">
            <img src="/images/cardea.png" alt="Cardea Labs" className="h-32 md:h-40" />
            <nav>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-[#1AB5AC] transition-colors font-light text-base md:text-lg"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-4xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-balance leading-tight text-gray-900">
            Verstehen, was in der ePA steht.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto text-balance">
            Gesundheit braucht Verständnis.
          </p>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Der ePA-Buddy erklärt deine Diagnosen und Behandlungsleistungen so, dass du weißt, was sie für dich bedeuten
            – klar, nachvollziehbar und ohne Fachsprache.
          </p>
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="bg-[#1AB5AC] hover:bg-[#159a92] text-white font-light px-8 py-6 text-base rounded-lg transition-colors"
            >
              <a href="mailto:info@cardealabs.de">Jetzt erklären</a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Redesigned with vertical layout, connecting lines, and hover effects */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 md:mb-24 text-gray-900">
          Wie es funktioniert
        </h2>

        <div className="flex flex-col gap-0">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#1AB5AC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-light">1</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl md:text-2xl font-light text-gray-900">ePA Daten exportieren</h3>
                    <a
                      href="https://www.gematik.de/versicherte/epa-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1AB5AC] hover:text-[#159a92] transition-colors"
                    >
                      <HelpCircle className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Exportiere deine Leistungsdaten direkt aus deiner ePA App.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-0.5 h-12 bg-gray-400 ml-[23px] my-0"></div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#1AB5AC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-light">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                    Sicher hochladen, automatisch anonymisiert
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Lade das Dokument hoch. Wir anonymisieren es automatisch, bevor es verarbeitet wird. Ohne Namen,
                    ohne Versichertennummer.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-0.5 h-12 bg-gray-400 ml-[23px] my-0"></div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#1AB5AC] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-light">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                    Verstehen, was passiert ist und was das für dich bedeutet
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Wir übersetzen Diagnosen und Leistungen in klare Sprache und ordnen sie für dich ein. So weißt du,
                    was beim Arztbesuch gemacht wurde und welche Relevanz das für dich hat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 max-w-4xl">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-900">Kontext</h2>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-4">
            Mit der Weiterentwicklung der ePA erhalten Versicherte erstmals Einblick in ihre ambulanten Leistungsdaten,
            doch ohne verständliche Einordnung bleiben viele Angaben schwer interpretierbar. Deshalb entwickeln wir den
            ePA Buddy: Er erklärt Diagnosen und Leistungen klar, gibt Kontext und hilft Patientinnen und Patienten, ihre
            Gesundheitsdaten wirklich zu verstehen.
          </p>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Ein Projekt von Studierenden der Charité Berlin und des Hasso-Plattner-Institut.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#1AB5AC] hover:bg-[#159a92] text-white font-light px-8 py-6 text-base rounded-lg transition-colors"
          >
            <a href="mailto:info@cardealabs.de">Kontakt aufnehmen</a>
          </Button>
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
