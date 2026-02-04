import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  CheckCircle2, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  MessageSquare,
  Briefcase,
  Lightbulb
} from "lucide-react";
import { toast } from "sonner";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Ihre Nachricht wurde erfolgreich gesendet!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subjects = [
    { value: "project", label: "Projektanfrage", icon: Briefcase },
    { value: "mvp", label: "5-Tage MVP Sprint", icon: Lightbulb },
    { value: "career", label: "Karriere / Bewerbung", icon: MessageSquare },
    { value: "other", label: "Sonstiges", icon: Mail }
  ];

  const contactInfo = [
    { icon: Mail, label: "E-Mail", value: "info@rubicon.ch", href: "mailto:info@rubicon.ch" },
    { icon: Phone, label: "Telefon", value: "+41 31 000 00 00", href: "tel:+41310000000" },
    { icon: MapPin, label: "Adresse", value: "Bern, Schweiz", href: "#" }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-24 min-h-screen flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-[#4ED9DE]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#4ED9DE]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#090938] mb-4">
                Vielen Dank für Ihre Nachricht!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Wir haben Ihre Anfrage erhalten und werden uns so schnell wie möglich bei Ihnen melden – 
                in der Regel innerhalb von 24 Stunden.
              </p>
              <a href="/" className="btn-primary inline-flex items-center gap-2">
                Zurück zur Startseite
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

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

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <h2 className="text-2xl font-bold text-[#090938] mb-6">
                  Kontaktinformationen
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 group"
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
                </div>

                <div className="p-6 bg-[#090938] rounded-xl text-white">
                  <Calendar className="w-8 h-8 text-[#FED438] mb-4" />
                  <h3 className="font-semibold mb-2">Termin vereinbaren</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Buchen Sie direkt einen 30-minütigen Kennenlern-Call.
                  </p>
                  <a 
                    href="mailto:info@rubicon.ch?subject=Terminanfrage" 
                    className="text-[#4ED9DE] font-medium hover:underline text-sm"
                  >
                    Termin anfragen →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-[#090938] mb-4">
                    Worum geht es? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {subjects.map((subject) => (
                      <label
                        key={subject.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.subject === subject.value
                            ? "border-[#1F63FB] bg-[#1F63FB]/5"
                            : "border-gray-200 hover:border-[#1F63FB]/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={subject.value}
                          checked={formData.subject === subject.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <subject.icon className={`w-5 h-5 ${
                          formData.subject === subject.value ? "text-[#1F63FB]" : "text-gray-400"
                        }`} />
                        <span className={`font-medium ${
                          formData.subject === subject.value ? "text-[#1F63FB]" : "text-gray-700"
                        }`}>
                          {subject.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#090938] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#090938] mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                      placeholder="ihre@email.ch"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#090938] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                      placeholder="+41 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#090938] mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#090938] mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Anliegen..."
                  />
                </div>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500">
                  Mit dem Absenden dieses Formulars stimmen Sie zu, dass wir Ihre Daten zur Bearbeitung 
                  Ihrer Anfrage verwenden dürfen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2"
                >
                  Nachricht senden
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-gray-50">
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
                <div key={faq.q} className="bg-white rounded-xl p-6">
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
