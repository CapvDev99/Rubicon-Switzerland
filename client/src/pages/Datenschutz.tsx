import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Datenschutz() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#090938] to-[#241D54]">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Datenschutzerklärung
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8 p-6 bg-[#1F63FB]/5 rounded-xl border border-[#1F63FB]/20">
              <p className="text-[#090938] font-medium">
                Rubicon ist ein Produkt der NolX GmbH.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 text-lg">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser 
                Datenschutzerklärung informieren wir Sie über die Verarbeitung personenbezogener 
                Daten bei der Nutzung unserer Website.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">1. Verantwortliche Stelle</h2>
              <p className="text-gray-600 mb-6">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>Nolx GmbH</strong><br />
                Bernapark 28<br />
                3066 Stettlen<br />
                Schweiz<br /><br />
                E-Mail: <a href="mailto:info@rubicon-world.ch" className="text-[#1F63FB] hover:underline">info@rubicon-world.ch</a>
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">2. Erfassung allgemeiner Informationen</h2>
              <p className="text-gray-600 mb-4">
                Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner 
                Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des 
                Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet Service 
                Providers und Ähnliches.
              </p>
              <p className="text-gray-600 mb-6">
                Hierbei handelt es sich ausschliesslich um Informationen, welche keine Rückschlüsse 
                auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen 
                angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des 
                Internets zwingend an.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">3. Kontaktformular</h2>
              <p className="text-gray-600 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-gray-600 mb-6">
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser 
                Daten erfolgt auf Grundlage Ihrer Einwilligung.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">4. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem 
                Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser 
                Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
              <p className="text-gray-600 mb-4">
                Die meisten der von uns verwendeten Cookies sind so genannte «Session-Cookies». 
                Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben 
                auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
              </p>
              <p className="text-gray-600 mb-6">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies 
                für bestimmte Fälle oder generell ausschliessen sowie das automatische Löschen 
                der Cookies beim Schliessen des Browsers aktivieren.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">5. Analyse-Tools</h2>
              
              <h3 className="text-xl font-semibold text-[#090938] mb-3 mt-6">Google Analytics</h3>
              <p className="text-gray-600 mb-4">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter 
                ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-gray-600 mb-4">
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website 
                durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre 
                Benutzung dieser Website werden in der Regel an einen Server von Google in den 
                USA übertragen und dort gespeichert.
              </p>
              <p className="text-gray-600 mb-6">
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung 
                Ihrer Browser-Software verhindern.
              </p>

              <h3 className="text-xl font-semibold text-[#090938] mb-3 mt-6">Microsoft Clarity</h3>
              <p className="text-gray-600 mb-4">
                Wir verwenden Microsoft Clarity, um zu verstehen, wie Sie unsere Website nutzen. 
                Clarity erfasst anonymisierte Nutzungsdaten wie Klicks, Scrollverhalten und 
                Mausbewegungen.
              </p>
              <p className="text-gray-600 mb-6">
                Diese Informationen helfen uns, die Benutzerfreundlichkeit unserer Website zu 
                verbessern. Die Daten werden nicht zur Identifizierung einzelner Benutzer verwendet.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">6. Ihre Rechte</h2>
              <p className="text-gray-600 mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
                Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung 
                dieser Daten.
              </p>
              <p className="text-gray-600 mb-6">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich 
                jederzeit unter der im{" "}
                <a href="/impressum" className="text-[#1F63FB] hover:underline">Impressum</a>{" "}
                angegebenen Adresse an uns wenden.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">7. SSL-Verschlüsselung</h2>
              <p className="text-gray-600 mb-6">
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung 
                vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
                erkennen Sie daran, dass die Adresszeile des Browsers von «http://» auf «https://» 
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">8. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-gray-600 mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen.
              </p>
              <p className="text-gray-600 mb-6">
                Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Letzte Aktualisierung</h2>
              <p className="text-gray-500">
                Stand: Oktober 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
