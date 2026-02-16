import Layout from "@/components/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2,
  Lightbulb,
  Pencil,
  Code,
  TestTube,
  Presentation,
  Clock,
  Users,
  Target
} from "lucide-react";
import { useState } from "react";

const TEAM_WORKSHOP = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/udkfhiyYmraFvVnS.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function MvpIn5Tagen() {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      day: 1,
      title: "Verstehen",
      icon: Lightbulb,
      color: "#4ED9DE",
      activities: [
        "Kick-off mit allen Stakeholdern",
        "Problem- und Zieldefinition",
        "User Research & Interviews",
        "Scope-Festlegung"
      ],
      outcome: "Klares Problemverständnis und definierter Scope"
    },
    {
      day: 2,
      title: "Konzipieren",
      icon: Pencil,
      color: "#1F63FB",
      activities: [
        "Ideation & Brainstorming",
        "Solution Sketching",
        "User Flow Design",
        "Technologie-Entscheidungen"
      ],
      outcome: "Validiertes Lösungskonzept und User Flows"
    },
    {
      day: 3,
      title: "Designen",
      icon: Pencil,
      color: "#FED438",
      activities: [
        "UI/UX Design",
        "Wireframes & Mockups",
        "Design System Setup",
        "Stakeholder Review"
      ],
      outcome: "Clickable Prototype für User Testing"
    },
    {
      day: 4,
      title: "Bauen",
      icon: Code,
      color: "#1F63FB",
      activities: [
        "Rapid Prototyping",
        "Core Features implementieren",
        "Integration & Testing",
        "Bug Fixing"
      ],
      outcome: "Funktionsfähiger MVP mit Kernfunktionen"
    },
    {
      day: 5,
      title: "Validieren",
      icon: TestTube,
      color: "#4ED9DE",
      activities: [
        "User Testing Sessions",
        "Feedback sammeln",
        "Finale Anpassungen",
        "Präsentation & Handover"
      ],
      outcome: "Validierter MVP und Entscheidungsgrundlage"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Schnelle Validierung",
      description: "In nur 5 Tagen von der Idee zum funktionierenden Prototyp"
    },
    {
      icon: Target,
      title: "Risikominimierung",
      description: "Frühe Erkenntnisse vor grossen Investitionen"
    },
    {
      icon: Users,
      title: "Stakeholder Alignment",
      description: "Alle Beteiligten auf einer Seite durch gemeinsame Arbeit"
    }
  ];

  const useCases = [
    "Neue Produktideen validieren",
    "Interne Tools & Prozesse optimieren",
    "Technologie-Evaluationen durchführen",
    "Kundenfeedback zu Konzepten einholen",
    "Investoren-Pitches vorbereiten",
    "Legacy-Systeme modernisieren"
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#090938] to-[#241D54] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FED438]/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="badge-sun inline-block mb-4">Innovation Sprint</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Von der Idee zum MVP in{" "}
              <span className="text-[#FED438]">5 Tagen</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Unser intensiver Sprint-Prozess bringt Sie schnell vom Problem zum validierten Lösungsansatz. 
              Ideal für neue Produktideen, Prozessoptimierungen oder Technologie-Evaluationen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
                Sprint anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
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
              Der 5-Tage Prozess
            </h2>
            <p className="text-gray-600 text-lg">
              Ein strukturierter Ablauf, der maximale Ergebnisse in minimaler Zeit garantiert.
            </p>
          </motion.div>

          {/* Day Selector */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {days.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeDay === index
                    ? "bg-[#090938] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Tag {day.day}
              </button>
            ))}
          </div>

          {/* Active Day Content */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${days[activeDay].color}20` }}
                >
                  {(() => {
                    const Icon = days[activeDay].icon;
                    return <Icon className="w-8 h-8" style={{ color: days[activeDay].color }} />;
                  })()}
                </div>
                <div>
                  <span className="text-sm text-gray-500">Tag {days[activeDay].day}</span>
                  <h3 className="text-3xl font-bold text-[#090938]">{days[activeDay].title}</h3>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {days[activeDay].activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${days[activeDay].color}20` }}
                    >
                      <CheckCircle2 className="w-4 h-4" style={{ color: days[activeDay].color }} />
                    </div>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border-l-4" style={{ borderColor: days[activeDay].color }}>
                <span className="text-sm text-gray-500 block mb-1">Ergebnis</span>
                <span className="font-medium text-[#090938]">{days[activeDay].outcome}</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src={TEAM_WORKSHOP} 
                alt="Team Workshop" 
                className="rounded-2xl shadow-2xl"
              />
              <div 
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-xl shadow-lg text-white"
                style={{ backgroundColor: days[activeDay].color }}
              >
                <div className="text-4xl font-bold">{days[activeDay].day}</div>
                <div className="text-sm opacity-80">von 5 Tagen</div>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex justify-between mb-2">
              {days.map((day, index) => (
                <div 
                  key={day.day}
                  className={`text-sm font-medium ${
                    index <= activeDay ? "text-[#1F63FB]" : "text-gray-400"
                  }`}
                >
                  {day.title}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${((activeDay + 1) / days.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-[#1F63FB] to-[#4ED9DE] rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1F63FB]/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#1F63FB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#090938] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="badge-cyan inline-block mb-4">Anwendungsfälle</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-6">
                Wofür eignet sich ein 5-Tage MVP?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Der Sprint-Ansatz ist ideal für Situationen, in denen Sie schnell Klarheit brauchen – 
                bevor Sie grössere Investitionen tätigen.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4ED9DE] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#090938] rounded-2xl p-8 text-white"
            >
              <Presentation className="w-12 h-12 text-[#FED438] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Was Sie erhalten</h3>
              <ul className="space-y-4">
                {[
                  "Funktionsfähiger Prototyp / MVP",
                  "Dokumentierte User Insights",
                  "Technische Architektur-Empfehlung",
                  "Roadmap für nächste Schritte",
                  "Entscheidungsvorlage für Stakeholder"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FED438]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#FED438]" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="badge-sun inline-block mb-4">Investment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#090938] mb-6">
              Transparente Preisgestaltung
            </h2>
            
            <div className="card-glass p-8 mb-8">
              <div className="text-5xl font-bold text-[#1F63FB] mb-2">ab CHF 8'000</div>
              <div className="text-gray-500 mb-6">für einen 5-Tage Sprint</div>
              
              <div className="text-left space-y-3 mb-8">
                {[
                  "Dediziertes Team (2-3 Experten)",
                  "Alle Workshops & Sessions",
                  "Design & Prototyping",
                  "Entwicklung & Testing",
                  "Dokumentation & Handover"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4ED9DE]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/kontakt" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                Unverbindlich anfragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-gray-500 text-sm">
              Der finale Preis hängt von Komplexität und Teamgrösse ab. 
              Wir erstellen Ihnen gerne ein individuelles Angebot.
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
              Bereit für Ihren 5-Tage Sprint?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Lassen Sie uns gemeinsam herausfinden, ob ein MVP-Sprint der richtige Ansatz für Ihr Vorhaben ist.
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
