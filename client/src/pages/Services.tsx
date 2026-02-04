import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Lightbulb,
  Rocket,
  Settings,
  HeadphonesIcon,
  Database,
  Cloud,
  Brain,
  BarChart3,
  Code,
  Shield
} from "lucide-react";

const TEAM_WORKSHOP_2 = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/BNNfMPsPzYefTvwK.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Services() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Verstehen & Strukturieren",
      subtitle: "Consulting",
      description: "Wir beginnen mit einer gründlichen Analyse Ihrer aktuellen Situation, Herausforderungen und Ziele. Gemeinsam definieren wir eine klare Roadmap.",
      deliverables: ["Bedarfsanalyse", "Strategieentwicklung", "Roadmap & Priorisierung", "Business Case"],
      color: "#4ED9DE"
    },
    {
      icon: Rocket,
      title: "Prototyping & MVP",
      subtitle: "Innovation",
      description: "In kurzen Sprints entwickeln wir Prototypen und MVPs, um Ideen schnell zu validieren und früh Feedback zu sammeln.",
      deliverables: ["5-Tage MVP Sprint", "Proof of Concept", "User Testing", "Entscheidungsvorlage"],
      color: "#FED438"
    },
    {
      icon: Settings,
      title: "Umsetzung & Skalierung",
      subtitle: "Development",
      description: "Mit agilen Methoden und cross-funktionalen Teams setzen wir Ihre Lösung um – von der ersten Zeile Code bis zum produktionsreifen System.",
      deliverables: ["Agile Entwicklung", "CI/CD Pipeline", "Cloud-Native Architektur", "Quality Assurance"],
      color: "#1F63FB"
    },
    {
      icon: HeadphonesIcon,
      title: "Betrieb & Weiterentwicklung",
      subtitle: "Maintenance",
      description: "Wir übernehmen den laufenden Betrieb, sorgen für Stabilität und entwickeln Ihre Lösung kontinuierlich weiter.",
      deliverables: ["24/7 Monitoring", "Incident Management", "Performance Optimierung", "Feature Updates"],
      color: "#4ED9DE"
    }
  ];

  const capabilities = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Moderne Data Platforms, ETL/ELT Pipelines, Real-time Streaming, Data Governance",
      tags: ["Databricks", "Snowflake", "Azure Data Factory"]
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Design, Entwicklung und Optimierung von Anwendungen, die Ihre Daten- und AI-Lösungen unterstützen",
      tags: ["Cloud-Native", "Microservices", "APIs"]
    },
    {
      icon: Cloud,
      title: "Cloud Transformation",
      description: "Migration und Modernisierung auf AWS, Azure oder GCP mit Infrastructure as Code und DevOps",
      tags: ["AWS", "Azure", "GCP", "Terraform"]
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Von konzeptionellem Design bis zu automatisierten Business Pipelines für datengetriebene Entscheidungen",
      tags: ["Power BI", "Tableau", "Looker"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "LLM Integration, RAG Systems, ML Model Deployment und AI Strategy für Ihren Wettbewerbsvorteil",
      tags: ["OpenAI", "Azure AI", "MLOps"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Umfassende Testing-Strategien, Entwicklungs-Pipelines und Produktqualität",
      tags: ["Automated Testing", "Security", "Performance"]
    }
  ];

  const engagementModels = [
    {
      title: "Time & Materials",
      price: "ab 680 CHF",
      unit: "pro Tag",
      description: "Ideal für agile Projekte mit sich entwickelnden Anforderungen",
      features: ["Maximale Flexibilität", "Zahlen nach Aufwand", "Monatlich skalierbar"]
    },
    {
      title: "Fixed Price",
      price: "Projektbasiert",
      unit: "Festpreis",
      description: "Für klar definierte Scopes und strikte Budgets",
      features: ["Garantierte Lieferung", "Klarer Scope & Timeline", "Risikotransfer zu Rubicon"]
    },
    {
      title: "Dedicated Team",
      price: "ab 9'500 CHF",
      unit: "pro Monat",
      description: "Langfristige Kapazitätserweiterung für Ihre Roadmap",
      features: ["Volle Team-Integration", "Wissenserhalt", "Niedrigster Effektivpreis"]
    }
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
            <span className="badge-cyan inline-block mb-4">Services & Vorgehen</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              End-to-End Lösungen für Ihre digitale Transformation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Von der Strategie bis zum Betrieb – wir begleiten Sie durch den gesamten Prozess mit Schweizer Qualität und modernsten Technologien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Unser Vorgehen
            </h2>
            <p className="text-gray-600 text-lg">
              Ein strukturierter Prozess, der Sie von der ersten Idee bis zum laufenden Betrieb begleitet.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 uppercase tracking-wider">{step.subtitle}</span>
                      <h3 className="text-2xl font-bold text-[#090938]">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span key={item} className="badge-cyan">{item}</span>
                    ))}
                  </div>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-6xl font-bold text-gray-200 mb-4">0{index + 1}</div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(index + 1) * 25}%`,
                        backgroundColor: step.color
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="badge-cyan inline-block mb-4">Kompetenzen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              End-to-End Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Umfassende Kompetenzen über den gesamten Tech Stack hinweg.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                className="card-glass p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1F63FB]/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-[#1F63FB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#090938] mb-2">{cap.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cap.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-96">
        <img 
          src={TEAM_WORKSHOP_2} 
          alt="Team bei der Arbeit" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090938]/80 to-transparent flex items-center">
          <div className="container">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Schweizer Governance, globale Skalierbarkeit
              </h2>
              <p className="text-gray-300">
                Strategische Leads und Projektmanager vor Ort, kombiniert mit einem Nearshore-Team für effiziente Umsetzung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="badge-sun inline-block mb-4">Engagement Modelle</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Flexible Zusammenarbeit
            </h2>
            <p className="text-gray-600 text-lg">
              Wählen Sie das Modell, das am besten zu Ihrem Projekt passt.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                variants={fadeInUp}
                className={`rounded-2xl p-8 ${
                  index === 1 
                    ? "bg-[#090938] text-white" 
                    : "bg-gray-50"
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${index === 1 ? "text-white" : "text-[#090938]"}`}>
                  {model.title}
                </h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${index === 1 ? "text-[#4ED9DE]" : "text-[#1F63FB]"}`}>
                    {model.price}
                  </span>
                  <span className={`text-sm ml-2 ${index === 1 ? "text-gray-400" : "text-gray-500"}`}>
                    {model.unit}
                  </span>
                </div>
                <p className={`text-sm mb-6 ${index === 1 ? "text-gray-300" : "text-gray-600"}`}>
                  {model.description}
                </p>
                <ul className="space-y-3">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        index === 1 ? "bg-[#4ED9DE]/20" : "bg-[#1F63FB]/10"
                      }`}>
                        <ArrowRight className={`w-3 h-3 ${index === 1 ? "text-[#4ED9DE]" : "text-[#1F63FB]"}`} />
                      </div>
                      <span className={`text-sm ${index === 1 ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 p-6 bg-[#1F63FB]/5 rounded-xl border border-[#1F63FB]/20"
          >
            <p className="text-center text-[#090938]">
              <strong>Transparenz-Versprechen:</strong> Alle Preise sind vollständig inklusive. Schweizer Governance und Oversight zum Nearshore-Preis. Keine versteckten Aufschläge.
            </p>
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
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Lassen Sie uns gemeinsam herausfinden, welches Vorgehen für Sie am besten passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
                Gespräch vereinbaren
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/mvp-in-5-tagen" className="btn-secondary text-white border-white hover:bg-white hover:text-[#090938] inline-flex items-center justify-center gap-2">
                5-Tage MVP entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
