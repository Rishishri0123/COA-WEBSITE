import React, { useState } from 'react';
import { CoaLogo } from './CoaLogo';
import { Phone, MessageCircle, MapPin, GraduationCap, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-40 sticky top-0 shadow-sm bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Notification & Contact Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Official Location & Tagline Badge */}
          <div className="flex items-center space-x-3 flex-wrap justify-center sm:justify-start">
            <a href="#google-maps-location" className="flex items-center text-amber-300 hover:text-amber-200 transition font-semibold text-center sm:text-left">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400 shrink-0" />
              Premier Coaching Institute | View Campuses in Maps Section
            </a>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:flex items-center text-slate-300">
              <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-sky-400 shrink-0" />
              Admissions Open IX to XII, JEE, CUET & Professional
            </span>
          </div>

          {/* Direct Phone & WhatsApp Access + Top Free Trial CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-[11px] sm:text-xs">
            <button
              onClick={() => onOpenDemoModal()}
              id="top-bar-trial-btn"
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-[11px] shadow-sm transition cursor-pointer"
              title="Book Your Free Trial Class"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Book Your Free Trial Class</span>
            </button>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-coa-ai-chat'))}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-indigo-600/40 hover:bg-indigo-600/60 text-indigo-100 border border-indigo-400/40 font-bold transition cursor-pointer"
              title="Ask AI Assistant"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Ask AI</span>
            </button>

            <a
              href="tel:8800020688"
              className="hidden sm:flex items-center font-semibold bg-white/10 hover:bg-white/20 transition px-2.5 py-1 rounded-full text-slate-200"
              title="Call Central Helpline"
            >
              <Phone className="w-3 h-3 mr-1.5 text-sky-400" />
              <span>Call Helpline</span>
            </a>

            <a
              href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center font-semibold bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 transition px-2.5 py-1 rounded-full border border-emerald-500/30"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 mr-1.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Official Logo */}
          <a href="#" className="flex items-center group">
            <CoaLogo size="md" showText={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 text-xs xl:text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-sky-600 transition-colors py-1">
              About
            </a>
            <a href="#subjects" className="hover:text-sky-600 transition-colors py-1 text-sky-700 font-bold">
              Subjects
            </a>
            <a href="#batch-planner" className="hover:text-amber-600 transition-colors py-1 text-amber-600 font-bold">
              Plan Batches
            </a>
            <a href="#courses" className="hover:text-sky-600 transition-colors py-1">
              Courses
            </a>
            <a href="#faculty" className="hover:text-sky-600 transition-colors py-1">
              Faculty
            </a>
            <a href="#testimonials" className="hover:text-sky-600 transition-colors py-1">
              Reviews
            </a>
            <a href="#campus-tour" className="hover:text-sky-600 transition-colors py-1">
              Campus
            </a>
            <a href="#gallery" className="hover:text-sky-600 transition-colors py-1">
              Gallery
            </a>
            <a href="#why-us" className="hover:text-sky-600 transition-colors py-1">
              Why COA
            </a>
            <a href="#progress-testing" className="hover:text-sky-600 transition-colors py-1">
              Tests & Timings
            </a>
            <a href="#google-maps-location" className="hover:text-sky-600 transition-colors py-1 flex items-center text-amber-700">
              <MapPin className="w-3.5 h-3.5 mr-1 text-amber-500" />
              Maps
            </a>
            <a href="#contact" className="hover:text-sky-600 transition-colors py-1">
              Contact
            </a>
          </nav>

          {/* Desktop/PC View: Call, WhatsApp & Book Your Free Trial Class positioned at the top */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="tel:8800020688"
              id="desktop-nav-call-btn"
              className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-bold text-xs transition shadow-xs group"
              title="Call Central Helpline"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-sky-600 group-hover:scale-110 transition-transform" />
              <span>Call</span>
            </a>

            <a
              href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              id="desktop-nav-whatsapp-btn"
              className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition shadow-xs group"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenDemoModal()}
              id="desktop-nav-trial-btn"
              className="inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs transition shadow-sm cursor-pointer whitespace-nowrap"
              title="Book Your Free Trial Class"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300" />
              <span>Book Your Free Trial Class</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 hidden xl:inline" />
            </button>
          </div>

          {/* Right Header Status / Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <div className="hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admissions Open 2026–27</span>
            </div>

            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-none transition"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 pb-3 border-b border-slate-100">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              About Us
            </a>
            <a
              href="#batch-planner"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-amber-50 text-amber-800 font-bold hover:bg-amber-100"
            >
              Plan Batches
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Courses & Streams
            </a>
            <a
              href="#faculty"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Faculty Profiles
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Student Results
            </a>
            <a
              href="#campus-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Campus Facilities
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              Photo Gallery
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700"
            >
              The COA Edge
            </a>
            <a
              href="#progress-testing"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-sky-50 text-sky-800 font-bold hover:bg-sky-100 flex items-center col-span-2"
            >
              Visiting Hours & 2-3 Monthly Tests
            </a>
            <a
              href="#google-maps-location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-amber-50 text-amber-900 font-bold hover:bg-amber-100 flex items-center col-span-2"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
              View Campuses on Google Maps & Directions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-50 hover:bg-sky-50 hover:text-sky-700 col-span-2"
            >
              Admissions & Contact Form
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm text-center shadow cursor-pointer"
            >
              Book Your Free Trial Class
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-coa-ai-chat'));
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-700 to-sky-700 text-white font-bold text-xs text-center flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ask COA AI Assistant (Any Question)</span>
            </button>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:8800020688"
                className="py-2.5 rounded-xl bg-sky-50 text-sky-800 font-bold text-center border border-sky-200 flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
                Call Helpline
              </a>
              <a
                href="https://wa.me/918800020688"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
