import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { MAIN_HELPLINE } from '../data/coachingData';

interface FloatingActionsProps {
  onOpenDemoModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      id="right-floating-actions-dock"
      className="fixed bottom-6 right-3 sm:bottom-8 sm:right-5 z-50 flex flex-col items-center space-y-3 pointer-events-none"
    >
      {/* 1. Scroll to Top Button (Appears when scrolled down) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-slate-800 active:scale-95 transition-all transform hover:-translate-y-0.5 cursor-pointer border border-slate-700/60 mb-1"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* 2. Floating Call Button (Top Icon - Blue circle with white border & shadow matching reference) */}
      <a
        href={`tel:${MAIN_HELPLINE.raw}`}
        title="Call Helpline: 88000 20688"
        id="floating-call-btn"
        aria-label="Call Admissions Helpline"
        className="pointer-events-auto relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0284c7] hover:bg-[#0369a1] active:scale-90 text-white shadow-lg shadow-sky-600/35 border-2 border-white transition-all transform hover:scale-105 group"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
        {/* Tooltip for desktop hover */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          Call 88000 20688
        </span>
      </a>

      {/* 3. Floating WhatsApp Button (Bottom Icon - Green circle with white border & shadow matching reference) */}
      <a
        href={MAIN_HELPLINE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp: 88000 20688"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-90 text-white shadow-lg shadow-emerald-600/35 border-2 border-white transition-all transform hover:scale-105 group"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
        {/* Tooltip for desktop hover */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          WhatsApp Helpline
        </span>
      </a>
    </div>
  );
};
