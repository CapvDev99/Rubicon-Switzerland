import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Client Logos
// Client Logos - Post in der Mitte platziert
const clients = [
  { name: "HWZ", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/DgAOekcLeaneQEhg.png", industry: "Bildung" },
  { name: "Begasoft", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/klucEFFLNdEVBcuq.png", industry: "Software" },
  { name: "Omnisens", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/RxgXoDSICvXsdAfZ.png", industry: "Technologie" },
  { name: "Bridge", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/csSBSBVNPwLaXLHF.png", industry: "Consulting" },
  { name: "Capvero", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/nhBWPyISofpBzUZZ.png", industry: "Finance" },
  { name: "Post", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/GqwUSNGYgfXWjMqt.png", industry: "Logistik" },
  { name: "Edgewind", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/wNjogPpTFkLECwdw.png", industry: "Energie" },
  { name: "CCFE", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/hPFsKZNnoVTVWqGH.png", industry: "Forschung" },
  { name: "Blupli", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/AWrKMBPnttSUYQXa.png", industry: "Tech" },
  { name: "Naka", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/oiYDpICydYIzKEkw.png", industry: "Startup" },
  { name: "Nablify", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/IxIcNVUHmTECRYjr.png", industry: "Tech" },
  { name: "HOS", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/HrNnxNxIrMcRoZDg.png", industry: "Services" },
];

const testimonials = [
  {
    quote: "Rubicon hat uns geholfen, unsere Dateninfrastruktur komplett neu aufzubauen. Die Zusammenarbeit war professionell und die Ergebnisse haben unsere Erwartungen übertroffen.",
    author: "CTO",
    company: "Schweizer Finanzdienstleister",
    industry: "Finance"
  },
  {
    quote: "Der 5-Tage MVP Sprint war genau das, was wir brauchten. In kürzester Zeit hatten wir einen funktionierenden Prototyp und konnten fundierte Entscheidungen treffen.",
    author: "Head of Innovation",
    company: "Schweizer Industrieunternehmen",
    industry: "Industrie"
  },
  {
    quote: "Die Kombination aus Schweizer Qualität und effizienter Umsetzung macht Rubicon zu einem idealen Partner für unsere digitalen Projekte.",
    author: "CEO",
    company: "Schweizer Tech-Startup",
    industry: "Tech"
  }
];

const caseStudies = [
  {
    title: "Cloud-Migration für Finanzdienstleister",
    description: "Migration einer komplexen On-Premise-Infrastruktur auf Azure mit Zero-Downtime und vollständiger FINMA-Compliance.",
    tags: ["Azure", "Data Platform", "Compliance"],
    results: ["40% Kostenreduktion", "99.9% Uptime", "FINMA-konform"]
  },
  {
    title: "AI-gestützte Prozessautomatisierung",
    description: "Entwicklung eines intelligenten Dokumentenverarbeitungssystems mit OCR und NLP für einen Versicherungskonzern.",
    tags: ["AI/ML", "Azure AI", "Automation"],
    results: ["80% Zeitersparnis", "95% Genauigkeit", "ROI in 6 Monaten"]
  },
  {
    title: "Real-time Analytics Platform",
    description: "Aufbau einer skalierbaren Echtzeit-Analytics-Plattform für einen E-Commerce-Anbieter mit Databricks und Power BI.",
    tags: ["Databricks", "Power BI", "Real-time"],
    results: ["Sub-second Latency", "10x mehr Insights", "Self-Service BI"]
  }
];

export default function Kunden() {
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
            <span className="badge-cyan inline-block mb-4">Kunden und Partner</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vertraut von führenden Schweizer Unternehmen
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Von Startups bis zu Grosskonzernen – wir helfen Unternehmen aller Grössen, 
              ihre digitale Transformation erfolgreich umzusetzen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
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
              Kunden und Partner
            </h2>
            <p className="text-gray-600 text-lg">
              Eine Auswahl der Unternehmen, mit denen wir zusammenarbeiten.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl p-6 h-24 flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="badge-sun inline-block mb-4">Kundenstimmen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Was unsere Kunden sagen
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card-glass p-8"
              >
                <Quote className="w-10 h-10 text-[#1F63FB]/20 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-[#090938]">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="badge-cyan inline-block mb-4">Erfolgsgeschichten</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Ausgewählte Projekte
            </h2>
            <p className="text-gray-600 text-lg">
              Einblicke in einige unserer erfolgreichsten Kundenprojekte.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold text-[#090938] mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span key={tag} className="badge-cyan">{tag}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result} className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-[#1F63FB] font-bold">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-[#090938] to-[#241D54] rounded-2xl p-12 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <div className="text-6xl font-bold text-white/10 mb-4">0{index + 1}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Case Study</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 section-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: "100%", label: "NPS Score" },
              { value: "90%", label: "Empfehlungsrate" },
              { value: "50+", label: "Projekte" },
              { value: "10+", label: "Jahre Erfahrung" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4ED9DE] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
              Werden Sie unser nächster Erfolg
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Lassen Sie uns gemeinsam herausfinden, wie wir auch Ihr Unternehmen voranbringen können.
            </p>
            <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
              Gespräch vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
