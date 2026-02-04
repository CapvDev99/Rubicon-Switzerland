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
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <h2 className="text-2xl font-bold text-[#090938] mb-4">Kontaktadresse</h2>
            <p className="text-gray-600 mb-6">
              Rubicon Schweiz<br />
              Bernapark 28<br />
              3066 Stettlen<br />
              Schweiz
            </p>
            <p className="text-gray-600 mb-6">
              E-Mail: <a href="mailto:info@rubicon-world.ch" className="text-[#1F63FB] hover:underline">info@rubicon-world.ch</a><br />
              Telefon: <a href="tel:+41793643695" className="text-[#1F63FB] hover:underline">+41 79 364 36 95</a>
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Vertretungsberechtigte Person</h2>
            <p className="text-gray-600 mb-6">
              Geschäftsführung: Rubicon Schweiz
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Handelsregistereintrag</h2>
            <p className="text-gray-600 mb-6">
              Eingetragener Firmenname: Rubicon Schweiz<br />
              Handelsregister: Kanton Bern<br />
              UID: CHE-XXX.XXX.XXX
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Haftungsausschluss</h2>
            <p className="text-gray-600 mb-6">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
              Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
            <p className="text-gray-600 mb-6">
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
              welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
              Informationen, durch Missbrauch der Verbindung oder durch technische Störungen 
              entstanden sind, werden ausgeschlossen.
            </p>
            <p className="text-gray-600 mb-6">
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, 
              Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, 
              zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Haftung für Links</h2>
            <p className="text-gray-600 mb-6">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. 
              Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die 
              Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>

            <h2 className="text-2xl font-bold text-[#090938] mb-4 mt-8">Urheberrechte</h2>
            <p className="text-gray-600 mb-6">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien 
              auf der Website gehören ausschliesslich der Firma Rubicon Schweiz oder den speziell 
              genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche 
              Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
