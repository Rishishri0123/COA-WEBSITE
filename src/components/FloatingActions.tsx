import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles, CalendarCheck } from 'lucide-react';
import { MAIN_HELPLINE } from '../data/coachingData';

interface FloatingActionsProps {
  onOpenDemoModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDemoModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Listen to AI Chat state so mobile dock smoothly hides when chat drawer is open
  useEffect(() => {
    const handleChatOpened = () => setIsChatOpen(true);
    const handleChatClosed = () => setIsChatOpen(false);

    window.addEventListener('open-coa-ai-chat', handleChatOpened);
    window.addEventListener('close-coa-ai-chat', handleChatClosed);

    return () => {
      window.removeEventListener('open-coa-ai-chat', handleChatOpened);
      window.removeEventListener('close-coa-ai-chat', handleChatClosed);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAiChat = () => {
    window.dispatchEvent(new CustomEvent('open-coa-ai-chat'));
  };

  return (
    <>
      {/* -------------------------------------------------------------------------
          1. DESKTOP VIEW (sm: screens and wider):
             Clean right-side floating action dock (Phone, WhatsApp, and Scroll-to-Top).
             Does not obstruct the page content on wide displays.
         ------------------------------------------------------------------------- */}
      <div 
        id="desktop-floating-actions-dock"
        className="hidden sm:flex fixed bottom-8 right-5 sm:right-6 z-50 flex-col items-center space-y-3 pointer-events-none"
      >
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900/90 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-slate-800 active:scale-95 transition-all transform hover:-translate-y-0.5 cursor-pointer border border-slate-700/60 mb-1"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${MAIN_HELPLINE.raw}`}
          title="Call Admissions Helpline"
          id="desktop-floating-call-btn"
          aria-label="Call Admissions Helpline"
          className="pointer-events-auto relative flex items-center justify-center w-13 h-13 rounded-full bg-[#0284c7] hover:bg-[#0369a1] active:scale-90 text-white shadow-xl shadow-sky-600/35 border-2 border-white transition-all transform hover:scale-110 group animate-float-gentle"
        >
          <Phone className="w-6 h-6 text-white stroke-[2.2]" />
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call Helpline
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={MAIN_HELPLINE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          id="desktop-floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-90 text-white shadow-xl shadow-emerald-600/35 border-2 border-white transition-all transform hover:scale-110 group animate-float-gentle"
        >
          <MessageCircle className="w-7 h-7 text-white stroke-[2.2]" />
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Helpline
          </span>
        </a>
      </div>

      {/* -------------------------------------------------------------------------
          2. MOBILE VIEW (< sm / phones):
             Unified, modern floating bottom bar dock.
             Eliminates the repeating vertical stack of circular buttons on the right margin
             and cleanly integrates Call, WhatsApp, Ask AI, and Free Trial in one bar!
         ------------------------------------------------------------------------- */}
      {!isChatOpen && (
        <div 
          id="mobile-bottom-action-bar"
          className="sm:hidden fixed bottom-3 inset-x-2.5 z-50 pointer-events-auto animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="bg-slate-950/95 backdrop-blur-md rounded-2xl px-2 py-2 shadow-2xl border border-white/20 flex items-center justify-between gap-1.5 ring-1 ring-black/40">
            {/* 1. Direct Call Helpline */}
            <a
              href={`tel:${MAIN_HELPLINE.raw}`}
              aria-label="Call Helpline"
              className="flex-1 flex items-center justify-center space-x-1 py-2 px-2 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-bold text-xs shadow-sm transition"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call</span>
            </a>

            {/* 2. Direct WhatsApp */}
            <a
              href={MAIN_HELPLINE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Helpline"
              className="flex-1 flex items-center justify-center space-x-1 py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-sm transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* 3. Ask COA AI Assistant */}
            <button
              type="button"
              onClick={handleOpenAiChat}
              aria-label="Ask COA AI"
              className="flex-1 flex items-center justify-center space-x-1 py-2 px-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 active:scale-95 text-white font-bold text-xs shadow-sm transition cursor-pointer border border-indigo-400/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* 4. Book Free Trial CTA */}
            {onOpenDemoModal && (
              <button
                type="button"
                onClick={onOpenDemoModal}
                aria-label="Book Free Trial"
                className="flex items-center justify-center space-x-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 active:scale-95 text-white font-bold text-xs shadow-sm transition cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-white" />
                <span>Trial</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------
          3. MOBILE SCROLL-TO-TOP POPUP:
             Positioned separately on the side in a floating popup above the dock,
             not mixed inside the Call/WhatsApp/Ask AI/Trial bar!
         ------------------------------------------------------------------------- */}
      {showScrollTop && !isChatOpen && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="sm:hidden fixed bottom-18 right-3.5 z-40 w-10 h-10 rounded-full bg-slate-900/90 backdrop-blur-md text-white shadow-xl flex items-center justify-center hover:bg-slate-800 active:scale-90 transition-all border border-slate-700/80 cursor-pointer animate-in fade-in zoom-in-90 duration-200"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </>
  );
};
