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
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <h2 className="text-2xl font-bold text-[#090938] mb-4">1. Allgemeine Hinweise</h2>
            <p className="text-gray-600 mb-6">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten 
              Ihre Daten daher ausschliesslich auf Grundlage der gesetzlichen Bestimmungen 
              (DSG, DSGVO). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten 
              Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">2. Verantwortliche Stelle</h2>
            <p className="text-gray-600 mb-6">
              Rubicon Schweiz<br />
              Bernapark 28<br />
              3066 Stettlen<br />
              Schweiz<br /><br />
              E-Mail: <a href="mailto:info@rubicon-world.ch" className="text-[#1F63FB] hover:underline">info@rubicon-world.ch</a><br />
              Telefon: <a href="tel:+41793643695" className="text-[#1F63FB] hover:underline">+41 79 364 36 95</a>
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">3. Erhebung und Verarbeitung von Daten</h2>
            <p className="text-gray-600 mb-6">
              Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. 
              Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das 
              verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. 
              Hierbei handelt es sich ausschliesslich um Informationen, welche keine Rückschlüsse auf 
              Ihre Person zulassen.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">4. Kontaktformular</h2>
            <p className="text-gray-600 mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
              wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">5. Cookies</h2>
            <p className="text-gray-600 mb-6">
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf 
              Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, 
              effektiver und sicherer zu machen.
            </p>
            <p className="text-gray-600 mb-6">
              Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer 
              Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem 
              Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei 
              Rückkehr auf unserer Website wiederzuerkennen.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">6. Analyse-Tools</h2>
            <p className="text-gray-600 mb-6">
              Wir verwenden auf unserer Website Analyse-Tools, um das Nutzerverhalten zu analysieren 
              und unsere Website kontinuierlich zu verbessern. Die dabei erhobenen Daten werden 
              anonymisiert verarbeitet.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">7. Ihre Rechte</h2>
            <p className="text-gray-600 mb-6">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, 
              Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, 
              dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstösst oder Ihre 
              datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können 
              Sie sich bei der Aufsichtsbehörde beschweren.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">8. Datensicherheit</h2>
            <p className="text-gray-600 mb-6">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren 
              (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, 
              die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes 
              verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des 
              Schlüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">9. Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-gray-600 mb-6">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
              in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
              Datenschutzerklärung.
            </p>

            <p className="text-gray-500 text-sm mt-8">
              Stand: Februar 2025
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
