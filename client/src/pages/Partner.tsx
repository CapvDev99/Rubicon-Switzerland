import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Tech Partners
const techPartners = [
  {
    name: "AWS",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/HQqisWpYqueNfgre.png",
    description: "Amazon Web Services Partner für Cloud-Infrastruktur und Managed Services",
    certifications: ["AWS Partner", "Well-Architected"],
    color: "#FF9900"
  },
  {
    name: "Microsoft Azure",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/XiyRrzbcCScUJAbW.png",
    description: "Microsoft Partner für Azure Cloud, Microsoft 365 und Power Platform",
    certifications: ["Azure Partner", "Power Platform"],
    color: "#0078D4"
  },
  {
    name: "Google Cloud",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/KTQDxNIqEIRQGpzs.png",
    description: "Google Cloud Partner für BigQuery, Vertex AI und Cloud-Native Lösungen",
    certifications: ["GCP Partner", "Data Analytics"],
    color: "#4285F4"
  },
  {
    name: "Databricks",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/NPsSkdNcSzZiYHLZ.png",
    description: "Databricks Partner für Lakehouse-Architekturen und ML/AI Workloads",
    certifications: ["Databricks Partner"],
    color: "#FF3621"
  },
  {
    name: "Snowflake",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bOUDiCISWCYyDbOQ.png",
    description: "Snowflake Partner für Data Warehousing und Data Sharing",
    certifications: ["Snowflake Partner"],
    color: "#29B5E8"
  },
  {
    name: "Power BI",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/LtlOMrpXinDhEBOn.png",
    description: "Microsoft Power BI Expertise für Business Intelligence und Reporting",
    certifications: ["Power BI Specialist"],
    color: "#F2C811"
  },
  {
    name: "Power Apps",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/AxREuVGVibPNNKMD.png",
    description: "Low-Code Entwicklung mit Microsoft Power Apps und Power Automate",
    certifications: ["Power Platform"],
    color: "#742774"
  },
  {
    name: "Microsoft Fabric",
    logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/pfcBjgKzBcbjSpqi.png",
    description: "End-to-End Analytics mit Microsoft Fabric und OneLake",
    certifications: ["Fabric Specialist"],
    color: "#0078D4"
  }
];

// Delivery Partners
const deliveryPartners = [
  { name: "8Horses", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/SIqztKXypHvEuYjb.png" },
];

const capabilities = [
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure", "Google Cloud", "Multi-Cloud"]
  },
  {
    category: "Data & Analytics",
    items: ["Databricks", "Snowflake", "Power BI", "Tableau", "Looker"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Azure AI", "OpenAI", "Vertex AI", "MLOps"]
  },
  {
    category: "Development",
    items: ["Python", "TypeScript", "React", ".NET", "Node.js"]
  },
  {
    category: "DevOps & Infrastructure",
    items: ["Terraform", "Kubernetes", "Docker", "GitHub Actions"]
  },
  {
    category: "Low-Code",
    items: ["Power Apps", "Power Automate", "Logic Apps"]
  }
];

export default function Partner() {
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
            <span className="badge-cyan inline-block mb-4">Partner & Kompetenzen</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starke Partnerschaften für Ihren Erfolg
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Wir arbeiten mit den führenden Technologieanbietern zusammen und bringen 
              umfassende Expertise über den gesamten Tech Stack mit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Partners */}
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
              Technologie-Partner
            </h2>
            <p className="text-gray-600 text-lg">
              Offizielle Partnerschaften mit den führenden Cloud- und Datenplattformen.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techPartners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={fadeInUp}
                className="card-glass p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#090938] mb-2 text-center">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {partner.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {partner.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${partner.color}15`,
                        color: partner.color
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="badge-sun inline-block mb-4">Kompetenzen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Umfassende Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Von Cloud-Infrastruktur bis AI – wir decken den gesamten Tech Stack ab.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.category}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#090938] mb-4 pb-4 border-b border-gray-100">
                  {cap.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery Partners */}
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
              Delivery-Partner
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Unser Nearshore-Netzwerk ermöglicht effiziente Umsetzung bei gleichzeitiger 
              Schweizer Qualitätskontrolle.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            {deliveryPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-50 rounded-xl p-8 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { title: "Schweizer Governance", desc: "Projektleitung und Qualitätskontrolle vor Ort" },
              { title: "Nearshore Delivery", desc: "Effiziente Umsetzung durch erfahrene Teams" },
              { title: "Transparente Preise", desc: "Keine versteckten Kosten oder Aufschläge" }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <CheckCircle2 className="w-8 h-8 text-[#4ED9DE] mx-auto mb-3" />
                <h4 className="font-semibold text-[#090938] mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Become Partner CTA */}
      <section className="py-24 section-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="badge-sun inline-block mb-4">Partnerschaft</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Werden Sie unser Partner
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Sie sind ein Technologie-Anbieter oder Beratungsunternehmen und möchten 
                mit uns zusammenarbeiten? Wir freuen uns auf Ihre Anfrage.
              </p>
              <Link href="/partneranfrage" className="btn-primary inline-flex items-center gap-2">
                Partneranfrage stellen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Vorteile einer Partnerschaft</h3>
              <ul className="space-y-4">
                {[
                  "Zugang zu Schweizer Enterprise-Kunden",
                  "Gemeinsame Go-to-Market Aktivitäten",
                  "Technische Zusammenarbeit und Wissensaustausch",
                  "Referenzprojekte und Case Studies"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4ED9DE] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
