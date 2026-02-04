import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Lightbulb,
  Rocket,
  Settings,
  HeadphonesIcon
} from "lucide-react";
import { useState } from "react";

// CDN URLs
const HERO_VIDEO = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/ZSzcVvijoHeZmzKx.mp4";
const TEAM_WORKSHOP_1 = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bIIvLdOddthIAPUO.png";
const ABSTRACT_PATTERN = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/SQizwhaNiIASzgHd.png";

// Tech Partner Logos
const TECH_PARTNERS = [
  { name: "AWS", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/HQqisWpYqueNfgre.png" },
  { name: "Azure", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/XiyRrzbcCScUJAbW.png" },
  { name: "GCP", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/KTQDxNIqEIRQGpzs.png" },
  { name: "Databricks", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/NPsSkdNcSzZiYHLZ.png" },
  { name: "Snowflake", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bOUDiCISWCYyDbOQ.png" },
  { name: "Power BI", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/LtlOMrpXinDhEBOn.png" },
  { name: "MS Fabric", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/pfcBjgKzBcbjSpqi.png" },
];

// Client Logos
const CLIENT_LOGOS = [
  { name: "Post", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/GqwUSNGYgfXWjMqt.png" },
  { name: "HWZ", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/DgAOekcLeaneQEhg.png" },
  { name: "Begasoft", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/klucEFFLNdEVBcuq.png" },
  { name: "Omnisens", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/RxgXoDSICvXsdAfZ.png" },
  { name: "Bridge", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/csSBSBVNPwLaXLHF.png" },
  { name: "Capvero", logo: "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/nhBWPyISofpBzUZZ.png" },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#090938]/90 via-[#090938]/70 to-[#090938]/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-sun inline-block mb-6">
              Von der Idee zum MVP in 5 Tagen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Ihr Partner für{" "}
            <span className="text-gradient">Cloud, Data & AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Schweizer Qualität. Moderne Technologien. Messbare Resultate.
            <br />
            Wir begleiten Sie von der Strategie bis zur Umsetzung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mvp-in-5-tagen" className="btn-secondary text-white border-white hover:bg-white hover:text-[#090938] inline-flex items-center justify-center gap-2">
              5-Tage-MVP entdecken
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 items-center"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-[#4ED9DE]" />
              <span className="text-sm">ISO 27001 zertifiziert</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-[#4ED9DE]" />
              <span className="text-sm">GDPR & FADP konform</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-5 h-5 text-[#FED438]" />
              <span className="text-sm">100% NPS Score</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Services as Process Section
function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "Verstehen & Strukturieren",
      description: "Wir analysieren Ihre Herausforderungen, definieren klare Ziele und entwickeln eine massgeschneiderte Strategie.",
      color: "#4ED9DE"
    },
    {
      icon: Rocket,
      title: "Prototyping & MVP",
      description: "In nur 5 Tagen vom Konzept zum funktionierenden Prototyp – für schnelle Validierung und frühe Erkenntnisse.",
      color: "#FED438"
    },
    {
      icon: Settings,
      title: "Umsetzung & Skalierung",
      description: "Agile Entwicklung mit cross-funktionalen Teams. Von der ersten Zeile Code bis zum produktionsreifen System.",
      color: "#1F63FB"
    },
    {
      icon: HeadphonesIcon,
      title: "Betrieb & Weiterentwicklung",
      description: "Kontinuierliche Betreuung, Wartung und Optimierung. Ihr System bleibt sicher, stabil und zukunftsfähig.",
      color: "#4ED9DE"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-cyan inline-block mb-4">Unser Vorgehen</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
            Von der Idee zur Lösung – Schritt für Schritt
          </h2>
          <p className="text-gray-600 text-lg">
            Wir begleiten Sie durch den gesamten Prozess – von der ersten Analyse bis zum laufenden Betrieb.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="card-glass p-6 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#090938] text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-semibold text-[#090938] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < services.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#4ED9DE] to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            Mehr erfahren
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// MVP Teaser Section
function MvpTeaserSection() {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${ABSTRACT_PATTERN})`, backgroundSize: 'cover' }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="badge-sun inline-block mb-4">Innovation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Von der Idee zum MVP in 5 Tagen
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Unser intensiver 5-Tage-Sprint bringt Sie schnell vom Problem zum validierten Lösungsansatz. 
              Ideal für neue Produktideen, Prozessoptimierungen oder Technologie-Evaluationen.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Tag 1: Problem verstehen & Scope definieren",
                "Tag 2-3: Konzept & Design entwickeln",
                "Tag 4: Prototyp bauen",
                "Tag 5: Testen & Präsentieren"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1F63FB] flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-300">{step.split(": ")[1]}</span>
                </div>
              ))}
            </div>

            <Link href="/mvp-in-5-tagen" className="btn-primary inline-flex items-center gap-2">
              Mehr zum 5-Tage MVP
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src={TEAM_WORKSHOP_1} 
              alt="Team Workshop" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#FED438] text-[#090938] px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm font-medium">Tage bis zum MVP</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Trust Section
function TrustSection() {
  const stats = [
    { value: "100%", label: "NPS Score", sublabel: "über die letzten 2 Jahre" },
    { value: "90%", label: "Empfehlungen", sublabel: "Neukunden durch Referenzen" },
    { value: "50%", label: "Effizienter", sublabel: "ohne Qualitätsverlust" },
    { value: "10+", label: "Jahre Erfahrung", sublabel: "in der Schweiz" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-cyan inline-block mb-4">Vertrauen</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
            Warum Schweizer Unternehmen uns vertrauen
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-[#090938] font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1F63FB]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#1F63FB]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#090938] mb-1">ISO 9001 & 27001</h4>
                <p className="text-gray-600 text-sm">Zertifiziertes Qualitäts- und Informationssicherheits-Management</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#4ED9DE]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#4ED9DE]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#090938] mb-1">GDPR & FADP</h4>
                <p className="text-gray-600 text-sm">Volle Einhaltung der EU-DSGVO und des Schweizer Datenschutzgesetzes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FED438]/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-[#FED438]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#090938] mb-1">Data Residency</h4>
                <p className="text-gray-600 text-sm">Garantierte Datenhaltung in der Schweiz für sensible Informationen</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Clients Section
function ClientsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">
            Vertraut von führenden Schweizer Unternehmen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CLIENT_LOGOS.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Tech Partners Section
function TechPartnersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-cyan inline-block mb-4">Technologie</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
            Technologien
          </h2>
          <p className="text-gray-600 text-lg">
            Wir arbeiten mit den führenden Technologieanbietern zusammen, um Ihnen die besten Lösungen zu bieten.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {TECH_PARTNERS.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeInUp}
              className="group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-lg shadow-gray-100 flex items-center justify-center p-4 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link href="/partner" className="text-[#1F63FB] font-medium hover:underline inline-flex items-center gap-2">
            Alle Partner & Kompetenzen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Vorsondierung Wizard Section
function VorsondierungSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "branche",
      question: "In welcher Branche sind Sie tätig?",
      options: ["Finanzdienstleistungen", "Pharma & Healthcare", "Industrie & Fertigung", "Handel & Retail", "Öffentlicher Sektor", "Andere"]
    },
    {
      id: "herausforderung",
      question: "Was ist Ihre grösste Herausforderung?",
      options: ["Datensilos & fehlende Insights", "Legacy-Systeme modernisieren", "Cloud-Migration", "AI/ML implementieren", "Prozesse automatisieren", "Andere"]
    },
    {
      id: "ziel",
      question: "Was möchten Sie erreichen?",
      options: ["Kosten senken", "Effizienz steigern", "Neue Produkte entwickeln", "Kundenerlebnis verbessern", "Compliance sicherstellen", "Andere"]
    },
    {
      id: "zeitrahmen",
      question: "Wie dringend ist Ihr Projekt?",
      options: ["Sofort starten", "In 1-3 Monaten", "In 3-6 Monaten", "Noch in Planung"]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const isComplete = step === questions.length - 1 && answers[questions[step].id];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="badge-sun inline-block mb-4">Vorsondierung</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
              Finden Sie heraus, wie wir helfen können
            </h2>
            <p className="text-gray-600 text-lg">
              Beantworten Sie ein paar kurze Fragen und erhalten Sie eine erste Einschätzung.
            </p>
          </div>

          <div className="card-glass p-8">
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    index <= step ? "bg-[#1F63FB]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {!isComplete ? (
              <>
                <h3 className="text-xl font-semibold text-[#090938] mb-6">
                  {questions[step].question}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {questions[step].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        answers[questions[step].id] === option
                          ? "border-[#1F63FB] bg-[#1F63FB]/5"
                          : "border-gray-200 hover:border-[#1F63FB]/50"
                      }`}
                    >
                      <span className="text-[#090938] font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#4ED9DE]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#4ED9DE]" />
                </div>
                <h3 className="text-2xl font-bold text-[#090938] mb-4">
                  Vielen Dank für Ihre Angaben!
                </h3>
                <p className="text-gray-600 mb-8">
                  Basierend auf Ihren Antworten empfehlen wir ein unverbindliches Gespräch, 
                  um Ihre spezifischen Anforderungen zu besprechen.
                </p>
                <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                  Termin vereinbaren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {step > 0 && !isComplete && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 text-gray-500 hover:text-[#1F63FB] text-sm"
              >
                ← Zurück
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CtaSection() {
  return (
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
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihre digitale Transformation vorantreiben können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
              Gespräch vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mvp-in-5-tagen" className="btn-secondary text-white border-white hover:bg-white hover:text-[#090938] inline-flex items-center justify-center gap-2">
              5-Tage MVP anfragen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <MvpTeaserSection />
      <TrustSection />
      <ClientsSection />
      <TechPartnersSection />
      <VorsondierungSection />
      <CtaSection />
    </Layout>
  );
}
