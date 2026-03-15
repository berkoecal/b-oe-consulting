import Link from "next/link";

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isDE = locale === "de";

  return (
    <main className="relative min-h-screen bg-background text-foreground pt-36 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors mb-12 uppercase tracking-widest"
        >
          ← {isDE ? "Zurück" : "Back"}
        </Link>

        {isDE ? (
          <>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-10">Impressum</h1>

            <section className="space-y-8 text-gray-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Angaben gemäss Art. 13 ZGB</h2>
                <p>Helvata Consulting</p>
                <p>Berk Öcal</p>
                <p>[Strasse & Hausnummer]</p>
                <p>[PLZ] Zürich, Schweiz</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Kontakt</h2>
                <p>E-Mail: <a href="mailto:kontakt@berk-oecal.com" className="text-primary-400 hover:underline">kontakt@berk-oecal.com</a></p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Unternehmensform</h2>
                <p>Einzelunternehmen / Selbstständige Tätigkeit</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Mehrwertsteuer (MWST)</h2>
                <p>UID: [CHE-XXX.XXX.XXX MWST]</p>
                <p className="text-sm text-gray-500 mt-1">
                  (Sofern MWST-pflichtig. Bitte entsprechend anpassen oder entfernen.)
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Haftungsausschluss</h2>
                <p>
                  Der Autor übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der
                  bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr.
                  Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche
                  aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
                  durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden
                  ausgeschlossen.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Urheberrecht</h2>
                <p>
                  Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf
                  dieser Website gehören ausschliesslich Berk Öcal / Helvata Consulting oder den speziell
                  genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche
                  Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Anwendbares Recht</h2>
                <p>
                  Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist Zürich, Schweiz.
                </p>
              </div>
            </section>
          </>
        ) : (
          <>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-10">Imprint</h1>

            <section className="space-y-8 text-gray-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Legal Notice pursuant to Art. 13 ZGB</h2>
                <p>Helvata Consulting</p>
                <p>Berk Öcal</p>
                <p>[Street & Number]</p>
                <p>[ZIP] Zurich, Switzerland</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
                <p>Email: <a href="mailto:contact@berk-oecal.com" className="text-primary-400 hover:underline">contact@berk-oecal.com</a></p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Business Type</h2>
                <p>Sole Proprietorship / Self-Employed</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">VAT</h2>
                <p>UID: [CHE-XXX.XXX.XXX MWST]</p>
                <p className="text-sm text-gray-500 mt-1">
                  (If VAT registered. Please adjust or remove accordingly.)
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Disclaimer</h2>
                <p>
                  The author assumes no liability for the accuracy, completeness, or currency of the information
                  provided. Use of the website content is at your own risk. Any liability claims against the
                  author for damages of a material or immaterial nature arising from access to or use of the
                  published information, misuse of the connection, or technical failures are excluded.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Copyright</h2>
                <p>
                  All copyrights and other rights to content, images, photos, or other files on this website
                  belong exclusively to Berk Öcal / Helvata Consulting or the specifically named rights holders.
                  Written consent of the copyright holders must be obtained in advance for the reproduction of
                  any elements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Applicable Law</h2>
                <p>
                  Swiss law applies exclusively. Place of jurisdiction is Zurich, Switzerland.
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
