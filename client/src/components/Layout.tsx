import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bVBNCxOsDYFxBXFN.png";
const LOGO_WHITE_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/107751408/bVBNCxOsDYFxBXFN.png";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Leistungen", 
    href: "/services",
    children: [
      { label: "Services & Vorgehen", href: "/services" },
      { label: "5-Tage MVP", href: "/mvp-in-5-tagen" },
    ]
  },
  { label: "Kunden", href: "/kunden" },
  { label: "Partner", href: "/partner" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

// Custom Link component that scrolls to top
function ScrollLink({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    // Scroll to top on location change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  // Determine if we're on a page with dark hero (Home page)
  const isHomePage = location === "/";
  const showWhiteHeader = !isScrolled && isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-[#090938]/5"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo - larger and white when on dark background */}
          <ScrollLink href="/" className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Rubicon Schweiz" 
              className={`h-12 w-auto transition-all duration-300 ${showWhiteHeader ? 'brightness-0 invert' : ''}`} 
            />
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <ScrollLink
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    location === item.href || (item.children && item.children.some(c => c.href === location))
                      ? showWhiteHeader ? "text-white" : "text-[#1F63FB]"
                      : showWhiteHeader
                      ? "text-white/90 hover:text-white"
                      : "text-[#090938] hover:text-[#1F63FB]"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </ScrollLink>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 py-2 bg-white rounded-xl shadow-xl shadow-[#090938]/10 min-w-[200px] border border-gray-100"
                    >
                      {item.children.map((child) => (
                        <ScrollLink
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location === child.href
                              ? "text-[#1F63FB] bg-[#1F63FB]/5"
                              : "text-[#090938] hover:text-[#1F63FB] hover:bg-[#1F63FB]/5"
                          }`}
                        >
                          {child.label}
                        </ScrollLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ScrollLink
              href="/kontakt"
              className={`text-sm px-5 py-2.5 rounded-lg font-medium transition-all ${
                showWhiteHeader
                  ? "bg-white text-[#090938] hover:bg-white/90"
                  : "btn-primary"
              }`}
            >
              Get in touch
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${showWhiteHeader ? 'text-white' : 'text-[#090938]'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container py-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  <ScrollLink
                    href={item.href}
                    className={`block py-3 text-base font-medium ${
                      location === item.href
                        ? "text-[#1F63FB]"
                        : "text-[#090938]"
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                  {item.children && (
                    <div className="pl-4 border-l-2 border-gray-100">
                      {item.children.map((child) => (
                        <ScrollLink
                          key={child.href}
                          href={child.href}
                          className={`block py-2 text-sm ${
                            location === child.href
                              ? "text-[#1F63FB]"
                              : "text-gray-600"
                          }`}
                        >
                          {child.label}
                        </ScrollLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ScrollLink
                href="/kontakt"
                className="btn-primary w-full text-center mt-4 block"
              >
                Get in touch
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090938] text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="Rubicon Schweiz" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Schweizer Qualität. Moderne Technologien. Messbare Resultate.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4ED9DE] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-3">
              <li><ScrollLink href="/services" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">Services & Vorgehen</ScrollLink></li>
              <li><ScrollLink href="/mvp-in-5-tagen" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">5-Tage MVP</ScrollLink></li>
              <li><ScrollLink href="/partner" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">Partner & Kompetenzen</ScrollLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              <li><ScrollLink href="/ueber-uns" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">Über uns</ScrollLink></li>
              <li><ScrollLink href="/kunden" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">Kunden</ScrollLink></li>
              <li><ScrollLink href="/karriere" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">Karriere</ScrollLink></li>
              <li><ScrollLink href="/partneranfrage" className="text-gray-400 hover:text-[#4ED9DE] transition-colors text-sm">Partneranfrage</ScrollLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Rubicon Schweiz</li>
              <li>Bernapark 28, 3066 Stettlen</li>
              <li><a href="mailto:info@rubicon-world.ch" className="hover:text-[#4ED9DE] transition-colors">info@rubicon-world.ch</a></li>
              <li><a href="tel:+41793643695" className="hover:text-[#4ED9DE] transition-colors">+41 79 364 36 95</a></li>
            </ul>
            <ScrollLink href="/kontakt" className="inline-block mt-4 text-[#1F63FB] hover:text-[#4ED9DE] transition-colors text-sm font-medium">
              Termin vereinbaren →
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Rubicon Schweiz. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <ScrollLink href="/impressum" className="text-gray-500 hover:text-gray-400 text-sm">Impressum</ScrollLink>
              <ScrollLink href="/datenschutz" className="text-gray-500 hover:text-gray-400 text-sm">Datenschutz</ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
