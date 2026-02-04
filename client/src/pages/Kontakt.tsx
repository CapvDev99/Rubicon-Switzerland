import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink,
  MessageCircle
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Kontakt() {
  const contactInfo = [
    { icon: Mail, label: "E-Mail", value: "info@rubicon-world.ch", href: "mailto:info@rubicon-world.ch" },
    { icon: Phone, label: "Telefon", value: "+41 79 364 36 95", href: "tel:+41793643695" },
    { icon: MapPin, label: "Adresse", value: "Bernapark 28, 3066 Stettlen", href: "https://maps.google.com/?q=Bernapark+28+3066+Stettlen" }
  ];

  const contactOptions = [
    {
      icon: Calendar,
      title: "Termin buchen",
      description: "30-minütiger Kennenlern-Call",
      href: "https://calendly.com/rubicon-world-info",
      color: "bg-[#1F63FB]",
      external: true
    },
    {
      icon: Mail,
      title: "E-Mail schreiben",
      description: "info@rubicon-world.ch",
      href: "mailto:info@rubicon-world.ch",
      color: "bg-[#090938]",
      external: false
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Schnelle Kontaktaufnahme",
      href: "https://wa.me/41793643695?text=Hallo%20Rubicon%20Team%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen.",
      color: "bg-[#25D366]",
      external: true
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
            <span className="badge-cyan inline-block mb-4">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lassen Sie uns sprechen
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Haben Sie ein Projekt im Kopf oder möchten Sie mehr über unsere Leistungen erfahren? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
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
              Wie möchten Sie uns kontaktieren?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Wählen Sie Ihre bevorzugte Kontaktmethode – wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={option.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-[#1F63FB] hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#090938] mb-2 group-hover:text-[#1F63FB] transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-500 flex items-center justify-center gap-1">
                  {option.description}
                  {option.external && <ExternalLink className="w-3 h-3" />}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Adresse" ? "_blank" : undefined}
                rel={info.label === "Adresse" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 hover:bg-[#1F63FB]/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1F63FB]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F63FB]/20 transition-colors">
                  <info.icon className="w-5 h-5 text-[#1F63FB]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{info.label}</div>
                  <div className="text-[#090938] font-medium group-hover:text-[#1F63FB] transition-colors">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#090938] mb-4">
              Unser Standort
            </h2>
            <p className="text-gray-600 text-lg">
              Besuchen Sie uns im Bernapark in Stettlen bei Bern
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Google Maps Embed */}
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.8044826040424!2d7.5289!3d46.9631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39b8a7e5c8e9%3A0x1234567890abcdef!2sBernapark%2028%2C%203066%20Stettlen%2C%20Switzerland!5e0!3m2!1sde!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rubicon Standort - Bernapark 28, Stettlen"
                className="w-full h-full"
              />
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1F63FB] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#090938] mb-1">Rubicon</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Bernapark 28<br />
                      3066 Stettlen
                    </p>
                    <a
                      href="https://maps.google.com/?q=Bernapark+28+3066+Stettlen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1F63FB] text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Route planen
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#090938] mb-6">
              Häufige Fragen
            </h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: "Wie schnell können wir starten?",
                  a: "Nach einem initialen Gespräch können wir in der Regel innerhalb von 1-2 Wochen mit einem Projekt beginnen."
                },
                {
                  q: "Arbeiten Sie auch mit kleineren Unternehmen?",
                  a: "Ja, wir arbeiten mit Unternehmen jeder Grösse – vom Startup bis zum Grosskonzern."
                },
                {
                  q: "Bieten Sie auch Support nach Projektabschluss?",
                  a: "Selbstverständlich. Wir bieten verschiedene Wartungs- und Support-Modelle für den laufenden Betrieb."
                }
              ].map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-[#090938] mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
