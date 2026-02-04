import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Target, Heart, Shield, Zap } from "lucide-react";

const TEAM_WORKSHOP = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bIIvLdOddthIAPUO.png";
const TEAM_WORKSHOP_2 = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/BNNfMPsPzYefTvwK.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function UeberUns() {
  const values = [
    {
      icon: Target,
      title: "Ergebnisorientiert",
      description: "Wir messen unseren Erfolg an Ihrem Erfolg. Messbare Resultate stehen im Zentrum unserer Arbeit."
    },
    {
      icon: Heart,
      title: "Partnerschaftlich",
      description: "Langfristige Beziehungen statt kurzfristiger Projekte. Wir sind Ihr Partner, nicht nur Ihr Dienstleister."
    },
    {
      icon: Shield,
      title: "Qualitätsbewusst",
      description: "Schweizer Qualität ist kein Slogan, sondern unser Anspruch. ISO-zertifiziert und GDPR-konform."
    },
    {
      icon: Zap,
      title: "Innovativ",
      description: "Wir bleiben am Puls der Technologie und bringen neue Ideen proaktiv in Ihre Projekte ein."
    }
  ];

  const milestones = [
    { year: "2014", event: "Gründung in Bern" },
    { year: "2016", event: "Erste Cloud-Projekte" },
    { year: "2018", event: "ISO 27001 Zertifizierung" },
    { year: "2020", event: "Expansion Data & AI" },
    { year: "2022", event: "Nearshore-Partnerschaft" },
    { year: "2024", event: "50+ erfolgreiche Projekte" }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#090938] to-[#241D54]">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="badge-cyan inline-block mb-4">Über uns</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Schweizer Qualität trifft auf moderne Technologie
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Rubicon ist ein Schweizer IT-Beratungsunternehmen mit Fokus auf Cloud, Data, 
              Analytics und AI. Wir verbinden lokale Expertise mit globaler Skalierbarkeit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-6">
                Unsere Mission
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Wir helfen Schweizer Unternehmen, das volle Potenzial ihrer Daten zu nutzen. 
                Mit modernsten Technologien, bewährten Methoden und einem Team, das Ihre 
                Herausforderungen versteht.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Unser Ansatz kombiniert strategische Beratung mit hands-on Umsetzung. 
                Wir sind nicht nur Berater, sondern auch Macher – und bleiben an Ihrer 
                Seite, bis die Lösung läuft.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={TEAM_WORKSHOP} 
                alt="Team bei der Arbeit" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="badge-sun inline-block mb-4">Werte</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Wofür wir stehen
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1F63FB]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#1F63FB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#090938] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Unsere Geschichte
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F63FB] to-[#4ED9DE]" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="relative flex items-center gap-8 mb-8"
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border-4 border-[#1F63FB]">
                    <span className="text-[#1F63FB] font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-4">
                    <span className="text-[#090938] font-medium">{milestone.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 section-dark">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-[#4ED9DE]" />
                <span className="text-[#4ED9DE] font-medium">Standort</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Verwurzelt in Bern, vernetzt mit der Welt
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Unser Hauptsitz in Bern ist das Herz unserer Aktivitäten. Von hier aus 
                steuern wir Projekte in der ganzen Schweiz und koordinieren unser 
                internationales Nearshore-Netzwerk.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#FED438]" />
                  <span className="text-gray-300">Schweizer Projektleitung vor Ort</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#FED438]" />
                  <span className="text-gray-300">Schweizer Datenhaltung garantiert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#FED438]" />
                  <span className="text-gray-300">Nearshore-Teams für effiziente Umsetzung</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={TEAM_WORKSHOP_2} 
                alt="Team Zusammenarbeit" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-6">
              Lernen Sie uns kennen
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Wir freuen uns darauf, mehr über Ihre Herausforderungen zu erfahren und 
              gemeinsam Lösungen zu entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
                Gespräch vereinbaren
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/karriere" className="btn-secondary inline-flex items-center justify-center gap-2">
                Karriere bei Rubicon
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
