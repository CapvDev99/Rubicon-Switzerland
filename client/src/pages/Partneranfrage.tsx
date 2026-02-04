import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Send, Building2, Users, Globe, Handshake } from "lucide-react";
import { toast } from "sonner";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Partneranfrage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    partnerType: "",
    expertise: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast.success("Ihre Anfrage wurde erfolgreich gesendet!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnerTypes = [
    { value: "technology", label: "Technologie-Partner", icon: Globe },
    { value: "consulting", label: "Beratungspartner", icon: Users },
    { value: "delivery", label: "Delivery-Partner", icon: Building2 },
    { value: "reseller", label: "Reseller / Vertrieb", icon: Handshake }
  ];

  const benefits = [
    "Zugang zu Schweizer Enterprise-Kunden",
    "Gemeinsame Go-to-Market Aktivitäten",
    "Technische Zusammenarbeit",
    "Referenzprojekte und Case Studies",
    "Wissensaustausch und Networking"
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
                Vielen Dank für Ihre Anfrage!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Wir haben Ihre Partneranfrage erhalten und werden uns innerhalb von 2-3 Werktagen bei Ihnen melden.
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
            <span className="badge-sun inline-block mb-4">Partnerschaft</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Werden Sie unser Partner
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sie sind ein Technologie-Anbieter, Beratungsunternehmen oder Delivery-Partner 
              und möchten mit uns zusammenarbeiten? Wir freuen uns auf Ihre Anfrage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <h2 className="text-2xl font-bold text-[#090938] mb-6">
                  Vorteile einer Partnerschaft
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4ED9DE] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-[#090938] mb-2">Fragen?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Kontaktieren Sie uns direkt für ein unverbindliches Gespräch.
                  </p>
                  <a href="mailto:partner@rubicon-world.ch" className="text-[#1F63FB] font-medium hover:underline">
                    partner@rubicon-world.ch
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
                {/* Partner Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-[#090938] mb-4">
                    Art der Partnerschaft *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {partnerTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.partnerType === type.value
                            ? "border-[#1F63FB] bg-[#1F63FB]/5"
                            : "border-gray-200 hover:border-[#1F63FB]/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="partnerType"
                          value={type.value}
                          checked={formData.partnerType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <type.icon className={`w-5 h-5 ${
                          formData.partnerType === type.value ? "text-[#1F63FB]" : "text-gray-400"
                        }`} />
                        <span className={`font-medium ${
                          formData.partnerType === type.value ? "text-[#1F63FB]" : "text-gray-700"
                        }`}>
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-[#090938] mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-[#090938] mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-[#090938] mb-2">
                      Ansprechperson *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
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

                {/* Expertise */}
                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium text-[#090938] mb-2">
                    Ihre Expertise / Schwerpunkte *
                  </label>
                  <input
                    type="text"
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all"
                    placeholder="z.B. Cloud, Data, AI, ..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#090938] mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1F63FB] focus:ring-2 focus:ring-[#1F63FB]/20 outline-none transition-all resize-none"
                    placeholder="Erzählen Sie uns mehr über Ihr Unternehmen und wie Sie sich eine Zusammenarbeit vorstellen..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2"
                >
                  Anfrage senden
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
