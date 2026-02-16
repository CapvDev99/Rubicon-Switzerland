import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Laptop,
  Globe
} from "lucide-react";

const TEAM_WORKSHOP = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/udkfhiyYmraFvVnS.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Karriere() {
  const benefits = [
    { icon: Laptop, title: "Remote-First", description: "Arbeite von wo du willst – Büro, Home Office oder unterwegs" },
    { icon: Clock, title: "Flexible Arbeitszeiten", description: "Gestalte deinen Tag so, wie er für dich am besten passt" },
    { icon: GraduationCap, title: "Weiterbildung", description: "Budget für Konferenzen, Kurse und Zertifizierungen" },
    { icon: Heart, title: "Work-Life-Balance", description: "Keine Überstunden-Kultur, faire Kompensation" },
    { icon: Coffee, title: "Team Events", description: "Regelmässige Teamevents und gemeinsame Aktivitäten" },
    { icon: Globe, title: "Internationale Projekte", description: "Arbeite mit Teams und Kunden aus verschiedenen Ländern" }
  ];

  const openPositions = [
    {
      title: "Senior Data Engineer",
      location: "Bern / Remote",
      type: "Vollzeit",
      department: "Data & Analytics",
      description: "Du baust moderne Data Platforms mit Databricks, Snowflake und Cloud-Native Technologien."
    },
    {
      title: "AI/ML Engineer",
      location: "Bern / Remote",
      type: "Vollzeit",
      department: "AI & Innovation",
      description: "Du bringst AI-Lösungen in die Produktion – von LLMs bis zu klassischem ML."
    },
    {
      title: "Initiativbewerbung",
      location: "Bern / Remote",
      type: "Vollzeit / Teilzeit",
      department: "Alle Bereiche",
      description: "Du hast Talent und Leidenschaft für Technologie? Wir freuen uns auf deine Bewerbung!"
    }
  ];

  const values = [
    "Eigenverantwortung und Vertrauen",
    "Kontinuierliches Lernen",
    "Offene Kommunikation",
    "Qualität vor Quantität",
    "Teamwork und Zusammenhalt"
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
            <span className="badge-sun inline-block mb-4">Karriere</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gestalte die digitale Zukunft mit uns
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Werde Teil eines Teams, das Schweizer Qualität mit modernsten Technologien 
              verbindet. Bei uns arbeitest du an spannenden Projekten für führende Unternehmen.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Warum Rubicon?
            </h2>
            <p className="text-gray-600 text-lg">
              Wir bieten mehr als nur einen Job – wir bieten eine Umgebung, in der du wachsen kannst.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1F63FB]/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#1F63FB]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#090938] mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="badge-cyan inline-block mb-4">Kultur</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-6">
                Unsere Werte
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Bei Rubicon zählt nicht nur was du machst, sondern auch wie du es machst. 
                Unsere Kultur basiert auf gegenseitigem Respekt und dem Streben nach Exzellenz.
              </p>
              <ul className="space-y-4">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1F63FB]" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={TEAM_WORKSHOP} 
                alt="Team Kultur" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="stellen" className="py-24 bg-white scroll-mt-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="badge-sun inline-block mb-4">Offene Stellen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Werde Teil unseres Teams
            </h2>
            <p className="text-gray-600 text-lg">
              Finde die Position, die zu dir passt.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {openPositions.map((position) => (
              <motion.div
                key={position.title}
                variants={fadeInUp}
                className="card-glass p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-[#1F63FB]/10 text-[#1F63FB] px-2 py-1 rounded">
                        {position.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#090938] mb-2">{position.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{position.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/kontakt" 
                    className="btn-primary whitespace-nowrap inline-flex items-center gap-2"
                  >
                    Bewerben
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Keine passende Stelle gefunden? Wir freuen uns trotzdem über deine Initiativbewerbung.
            </p>
            <Link href="/kontakt" className="text-[#1F63FB] font-medium hover:underline">
              Initiativbewerbung senden →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für den nächsten Karriereschritt?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Lass uns kennenlernen. Wir freuen uns auf deine Bewerbung oder ein unverbindliches Gespräch.
            </p>
            <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
              Kontakt aufnehmen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
