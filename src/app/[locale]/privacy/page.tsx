import Link from "next/link";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Datenschutzerklärung</h1>
            <p className="text-gray-500 text-sm mb-10">Gemäss dem Schweizer Datenschutzgesetz (DSG / nDSG)</p>

            <section className="space-y-8 text-gray-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">1. Verantwortliche Stelle</h2>
                <p>Verantwortlich für die Datenbearbeitung auf dieser Website ist:</p>
                <p className="mt-2">
                  Helvata Consulting<br />
                  Berk Öcal<br />
                  [Adresse], Zürich, Schweiz<br />
                  E-Mail: <a href="mailto:kontakt@berk-oecal.com" className="text-primary-400 hover:underline">kontakt@berk-oecal.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">2. Erhobene Daten und Zweck</h2>
                <p>
                  Beim Besuch dieser Website werden automatisch technische Daten (z. B. IP-Adresse, Browsertyp,
                  Datum und Uhrzeit des Zugriffs) im Server-Logfile gespeichert. Diese Daten dienen der
                  Sicherstellung des technischen Betriebs der Website und werden nicht zur Identifikation von
                  Personen verwendet.
                </p>
                <p className="mt-4">
                  Wenn Sie das Kontaktformular ausfüllen, werden die darin eingegebenen Daten (Name, E-Mail,
                  Nachricht) ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">3. Rechtsgrundlage</h2>
                <p>
                  Die Bearbeitung Ihrer Personendaten erfolgt auf Grundlage des Schweizer Datenschutzgesetzes
                  (DSG) in der Fassung des revidierten nDSG (in Kraft seit 1. September 2023).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">4. Weitergabe von Daten</h2>
                <p>
                  Es werden keine Personendaten an Dritte weitergegeben, verkauft oder vermietet, sofern dies
                  nicht ausdrücklich in dieser Erklärung oder per Ihrer Einwilligung festgehalten ist.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">5. Cookies</h2>
                <p>
                  Diese Website verwendet ausschliesslich technisch notwendige Cookies, die für den Betrieb
                  der Website erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">6. Ihre Rechte</h2>
                <p>Gemäss nDSG haben Sie folgende Rechte:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Recht auf Auskunft über gespeicherte Personendaten</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung von Personendaten</li>
                  <li>Recht auf Einschränkung der Datenbearbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                </ul>
                <p className="mt-4">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an:{" "}
                  <a href="mailto:kontakt@berk-oecal.com" className="text-primary-400 hover:underline">kontakt@berk-oecal.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">7. Datensicherheit</h2>
                <p>
                  Diese Website wird über HTTPS ausgeliefert, um eine sichere Übertragung Ihrer Daten zu
                  gewährleisten. Wir treffen angemessene technische und organisatorische Massnahmen zum
                  Schutz Ihrer Personendaten.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">8. Änderungen</h2>
                <p>
                  Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit anzupassen. Die
                  jeweils aktuelle Version ist auf dieser Website abrufbar.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">9. Beschwerderecht</h2>
                <p>
                  Sie haben das Recht, beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
                  (EDÖB) Beschwerde einzureichen:{" "}
                  <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                    www.edoeb.admin.ch
                  </a>
                </p>
              </div>

              <p className="text-sm text-gray-600 pt-4 border-t border-white/5">
                Stand: März 2026
              </p>
            </section>
          </>
        ) : (
          <>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm mb-10">Pursuant to the Swiss Federal Act on Data Protection (FADP / revFADP)</p>

            <section className="space-y-8 text-gray-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">1. Data Controller</h2>
                <p>The party responsible for data processing on this website is:</p>
                <p className="mt-2">
                  Helvata Consulting<br />
                  Berk Öcal<br />
                  [Address], Zurich, Switzerland<br />
                  Email: <a href="mailto:contact@berk-oecal.com" className="text-primary-400 hover:underline">contact@berk-oecal.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">2. Data Collected and Purpose</h2>
                <p>
                  When visiting this website, technical data (e.g. IP address, browser type, date and time
                  of access) are automatically stored in server log files. This data is used solely to ensure
                  the technical operation of the website and is not used to identify individuals.
                </p>
                <p className="mt-4">
                  When you complete the contact form, the data entered (name, email, message) is used
                  exclusively to process your inquiry.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">3. Legal Basis</h2>
                <p>
                  The processing of your personal data is based on the Swiss Federal Act on Data Protection
                  (FADP) as amended by the revised revFADP (in force since 1 September 2023).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">4. Data Sharing</h2>
                <p>
                  No personal data will be passed on, sold, or rented to third parties unless expressly
                  stated in this policy or with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">5. Cookies</h2>
                <p>
                  This website uses only technically necessary cookies required for its operation. No
                  tracking or marketing cookies are used.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">6. Your Rights</h2>
                <p>Under the revFADP, you have the following rights:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Right of access to your stored personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure of personal data</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to data portability</li>
                </ul>
                <p className="mt-4">
                  To exercise your rights, please contact us by email at:{" "}
                  <a href="mailto:contact@berk-oecal.com" className="text-primary-400 hover:underline">contact@berk-oecal.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">7. Data Security</h2>
                <p>
                  This website is served over HTTPS to ensure secure transmission of your data. We take
                  appropriate technical and organisational measures to protect your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">8. Changes</h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. The current version is
                  always available on this website.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-2">9. Right to Lodge a Complaint</h2>
                <p>
                  You have the right to lodge a complaint with the Federal Data Protection and Information
                  Commissioner (FDPIC):{" "}
                  <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                    www.edoeb.admin.ch
                  </a>
                </p>
              </div>

              <p className="text-sm text-gray-600 pt-4 border-t border-white/5">
                Last updated: March 2026
              </p>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
