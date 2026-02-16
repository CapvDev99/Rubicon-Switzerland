/**
 * Cookie Consent Banner – DSG/GDPR-konform
 * 
 * Kategorien:
 * - Notwendig (immer aktiv, nicht abwählbar)
 * - Analyse (Google Analytics, Microsoft Clarity)
 * 
 * Speichert die Einwilligung in localStorage.
 * Lädt Analytics-Scripts erst nach Zustimmung.
 */
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  timestamp: string;
};

const CONSENT_KEY = "rubicon_cookie_consent";

function getStoredConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

/** Inject Google Analytics script */
function loadGoogleAnalytics() {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-GV8XJQJM9D";
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.id = "ga-inline";
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GV8XJQJM9D', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

/** Inject Microsoft Clarity script */
function loadMicrosoftClarity() {
  if (document.getElementById("clarity-script")) return;

  const script = document.createElement("script");
  script.id = "clarity-script";
  script.textContent = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","YOUR_CLARITY_ID");
  `;
  document.head.appendChild(script);
}

function applyConsent(consent: ConsentState) {
  if (consent.analytics) {
    loadGoogleAnalytics();
    // loadMicrosoftClarity(); // Uncomment when Clarity ID is set
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      // Consent already given – apply it silently
      applyConsent(stored);
    } else {
      // No consent yet – show banner after short delay
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const consent: ConsentState = {
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    storeConsent(consent);
    applyConsent(consent);
    setVisible(false);
  }, []);

  const handleAcceptSelected = useCallback(() => {
    const consent: ConsentState = {
      necessary: true,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString(),
    };
    storeConsent(consent);
    applyConsent(consent);
    setVisible(false);
  }, [analyticsEnabled]);

  const handleRejectAll = useCallback(() => {
    const consent: ConsentState = {
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    storeConsent(consent);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
        onClick={() => {}}
      />

      {/* Banner */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto animate-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="flex items-start justify-between p-5 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1F63FB]/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-[#1F63FB]" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#090938]">Cookie-Einstellungen</h3>
              <p className="text-xs text-gray-500 mt-0.5">Datenschutz ist uns wichtig</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 pb-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Einige Cookies sind technisch notwendig, während andere uns helfen, die Website zu verbessern.{" "}
            <Link href="/datenschutz" className="text-[#1F63FB] hover:underline font-medium">
              Mehr erfahren
            </Link>
          </p>

          {/* Details Toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 mt-3 text-sm text-gray-500 hover:text-[#090938] transition-colors"
          >
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            Cookie-Details anzeigen
          </button>

          {/* Cookie Categories */}
          {showDetails && (
            <div className="mt-3 space-y-2.5">
              {/* Necessary */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-[#090938]">Notwendig</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Erforderlich für die grundlegende Funktionalität der Website
                  </p>
                </div>
                <div className="relative">
                  <div className="w-10 h-5 bg-[#1F63FB] rounded-full opacity-60 cursor-not-allowed">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-[#090938]">Analyse</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Google Analytics & Microsoft Clarity – anonymisierte Nutzungsstatistiken
                  </p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                    analyticsEnabled ? "bg-[#1F63FB]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                      analyticsEnabled ? "right-0.5" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 p-5 pt-3 border-t border-gray-100">
          <button
            onClick={handleRejectAll}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            Nur Notwendige
          </button>
          {showDetails && (
            <button
              onClick={handleAcceptSelected}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-[#1F63FB] bg-[#1F63FB]/10 hover:bg-[#1F63FB]/20 rounded-xl transition-colors"
            >
              Auswahl speichern
            </button>
          )}
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#1F63FB] hover:bg-[#1F63FB]/90 rounded-xl transition-colors shadow-lg shadow-[#1F63FB]/20"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
