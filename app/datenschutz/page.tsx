import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-center px-6 py-8">
          <Link href="/">
            <Image
              src="/images/cardea.png"
              alt="Cardea Labs"
              width={280}
              height={80}
              className="h-10 w-auto md:h-14"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-12 text-4xl font-light text-[#3d3d3d] md:text-5xl">Datenschutzerklärung</h1>

        <div className="space-y-8 text-lg leading-relaxed text-gray-600">
          <section>
            <h2 className="mb-4 text-2xl font-light text-[#3d3d3d]">1. Datenschutz auf einen Blick</h2>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Datenerfassung auf dieser Website</h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben oder per E-Mail an uns senden.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-[#3d3d3d]">2. Hosting</h2>
            <p className="mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Vercel</h3>
            <p className="mb-4">
              Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel").
            </p>
            <p className="mb-4">
              Vercel ist ein Dienst zum Hosten von Webseiten. Wenn Sie unsere Website besuchen, erfasst Vercel
              verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p className="mb-4">
              Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1AB5AC] hover:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-[#3d3d3d]">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mb-4">
              CardeaLabs
              <br />
              Bismarckstraße 67
              <br />
              10627 Berlin
              <br />
              E-Mail:{" "}
              <a href="mailto:info@cardealabs.de" className="text-[#1AB5AC] hover:underline">
                info@cardealabs.de
              </a>
              <br />
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
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
              über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-
              bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-[#3d3d3d]">4. Datenerfassung auf dieser Website</h2>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-light text-[#3d3d3d]">Kontaktformular und E-Mail-Kontakt</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
              für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>
        </div>

        <div className="mt-16">
          <Button asChild size="lg" className="bg-[#1AB5AC] hover:bg-[#159d95]">
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-6">
            <Image src="/images/hpiengine-logo.jpeg" alt="HPI Engine" width={80} height={80} className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-6 text-base text-gray-500">
            <Link href="/impressum" className="transition-colors hover:text-[#1AB5AC]">
              Impressum
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/datenschutz" className="transition-colors hover:text-[#1AB5AC]">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
