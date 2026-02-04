import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Impressum() {
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
              Impressum
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
              <h2 className="text-2xl font-bold text-[#090938] mb-4">Nolx GmbH</h2>
              <p className="text-gray-600 mb-6">
                Bernapark 28<br />
                3066 Stettlen<br />
                Schweiz
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Kontakt</h2>
              <p className="text-gray-600 mb-6">
                E-Mail: <a href="mailto:info@rubicon-world.ch" className="text-[#1F63FB] hover:underline">info@rubicon-world.ch</a><br />
                Web: <a href="https://www.nolx.ch" target="_blank" rel="noopener noreferrer" className="text-[#1F63FB] hover:underline">www.nolx.ch</a>
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Handelsregistereintrag</h2>
              <p className="text-gray-600 mb-6">
                Eingetragener Firmenname: Nolx GmbH<br />
                Handelsregister-Nummer: CH-036.4.100.853-5<br />
                Handelsregisteramt: Kanton Bern
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Mehrwertsteuer-Nummer</h2>
              <p className="text-gray-600 mb-6">
                UID: CHE-390.071.518
              </p>

              <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Rechtliche Hinweise</h2>
              
              <h3 className="text-xl font-semibold text-[#090938] mb-3 mt-6">Haftungsausschluss (Disclaimer)</h3>
              
              <h4 className="text-lg font-medium text-[#090938] mb-2 mt-4">Inhalt des Onlineangebotes</h4>
              <p className="text-gray-600 mb-4">
                Die Nolx GmbH übernimmt keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder 
                Qualität der bereitgestellten Informationen.
              </p>
              <p className="text-gray-600 mb-4">
                Haftungsansprüche gegen die Nolx GmbH, welche sich auf Schäden materieller oder immaterieller 
                Art beziehen, die durch die Nutzung oder Nichtnutzung der angebotenen Informationen oder durch 
                die Nutzung fehlerhafter oder unvollständiger Informationen verursacht wurden, sind grundsätzlich 
                ausgeschlossen – sofern seitens der Nolx GmbH kein nachweislich vorsätzliches oder grob 
                fahrlässiges Verschulden vorliegt.
              </p>
              <p className="text-gray-600 mb-6">
                Alle Angebote sind freibleibend und unverbindlich. Die Nolx GmbH behält es sich ausdrücklich vor, 
                Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, 
                zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>

              <h4 className="text-lg font-medium text-[#090938] mb-2 mt-4">Verweise und Links</h4>
              <p className="text-gray-600 mb-4">
                Bei direkten oder indirekten Verweisen auf fremde Webseiten («Hyperlinks»), die ausserhalb des 
                Verantwortungsbereiches der Nolx GmbH liegen, tritt eine Haftungsverpflichtung ausschliesslich 
                dann in Kraft, wenn die Nolx GmbH von den Inhalten Kenntnis hat und es ihr technisch möglich 
                und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
              </p>
              <p className="text-gray-600 mb-6">
                Die Nolx GmbH erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen 
                Inhalte auf den verlinkten Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, 
                die Inhalte oder die Urheberschaft der verlinkten Seiten hat die Nolx GmbH keinerlei Einfluss. 
                Sie distanziert sich deshalb ausdrücklich von allen Inhalten aller verlinkten Seiten, die nach 
                der Linksetzung verändert wurden.
              </p>

              <h4 className="text-lg font-medium text-[#090938] mb-2 mt-4">Urheberrecht</h4>
              <p className="text-gray-600 mb-4">
                Die durch die Nolx GmbH erstellten Inhalte und Werke auf dieser Website unterliegen dem 
                schweizerischen Urheberrecht.
              </p>
              <p className="text-gray-600 mb-4">
                Beiträge Dritter sind als solche gekennzeichnet.
              </p>
              <p className="text-gray-600 mb-4">
                Die Vervielfältigung, Bearbeitung, Verbreitung oder jede Art der Verwertung ausserhalb der 
                Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der Nolx GmbH oder des 
                jeweiligen Rechteinhabers.
              </p>
              <p className="text-gray-600 mb-4">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-gray-600 mb-6">
                Die Nolx GmbH ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, 
                Illustrationen, Videosequenzen und Texte zu beachten, von ihr selbst erstellte Inhalte zu 
                verwenden oder auf lizenzfreie Quellen zurückzugreifen.
              </p>

              <h4 className="text-lg font-medium text-[#090938] mb-2 mt-4">Datenschutz</h4>
              <p className="text-gray-600 mb-4">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
              </p>
              <p className="text-gray-600 mb-6">
                Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-[#1F63FB] hover:underline">Datenschutzerklärung</a>.
              </p>

              <h4 className="text-lg font-medium text-[#090938] mb-2 mt-4">Rechtswirksamkeit dieses Haftungsausschlusses</h4>
              <p className="text-gray-600 mb-6">
                Dieser Haftungsausschluss ist als Teil des Internetangebotes der Nolx GmbH zu betrachten.
              </p>
              <p className="text-gray-600 mb-6">
                Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht 
                mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in 
                ihrem Inhalt und ihrer Gültigkeit davon unberührt.
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
