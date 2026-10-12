import React, { useState, useEffect } from 'react';
import { CoaLogo } from './CoaLogo';
import { Phone, MessageCircle, MapPin, GraduationCap, Menu, X, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenDemoModal: (courseId?: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  isSpecial?: 'subjects' | 'batch-planner' | 'maps';
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'subjects', label: 'Subjects', isSpecial: 'subjects' },
  { id: 'batch-planner', label: 'Plan Batches', isSpecial: 'batch-planner' },
  { id: 'courses', label: 'Courses' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'campus-tour', label: 'Campus' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'why-us', label: 'Why COA' },
  { id: 'progress-testing', label: 'Tests & Timings' },
  { id: 'google-maps-location', label: 'Maps', isSpecial: 'maps' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { theme, toggleTheme } = useTheme();

  // Scroll Spy: dynamically highlight active section as the user scrolls down the landing page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // 140px offset for sticky header breathing room
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If user has reached the bottom of the page, activate the Contact section
      if (window.scrollY + windowHeight >= documentHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // 2. If user is in the Hero section (top of page), no section link is active
      if (window.scrollY < 260) {
        setActiveSection('');
        return;
      }

      // 3. Check section offsets from bottom to top
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-40 sticky top-0 shadow-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Top Notification & Contact Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 dark:from-black dark:via-slate-950 dark:to-slate-900 text-white text-xs py-2 px-4 sm:px-6">
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
              className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-[11px] shadow-sm transition-all duration-200 cursor-pointer btn-shimmer hover:scale-105 active:scale-95"
              title="Book Your Free Trial Class"
            >
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin-slow" />
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

          {/* Desktop Nav Links with Scroll Spy Highlight */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 text-xs xl:text-sm font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative py-1.5 px-1 transition-all duration-200 ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 font-bold'
                      : item.isSpecial === 'subjects'
                      ? 'text-sky-700 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 font-bold'
                      : item.isSpecial === 'batch-planner'
                      ? 'text-amber-600 dark:text-amber-400 hover:text-amber-700 font-bold'
                      : item.isSpecial === 'maps'
                      ? 'text-amber-700 dark:text-amber-400 hover:text-amber-600 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium'
                  }`}
                >
                  <span className="flex items-center">
                    {item.isSpecial === 'maps' && (
                      <MapPin
                        className={`w-3.5 h-3.5 mr-1 transition-colors ${
                          isActive ? 'text-sky-600 dark:text-sky-400' : 'text-amber-500'
                        }`}
                      />
                    )}
                    {item.label}
                  </span>
                  {/* Animated Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full animate-in fade-in zoom-in-95 duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop/PC View: Call, WhatsApp, Theme Toggle & Book Your Free Trial Class */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Global Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              id="desktop-theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-xs group"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700 group-hover:scale-110 transition-transform" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              )}
            </button>

            <a
              href="tel:8800020688"
              id="desktop-nav-call-btn"
              className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-sky-50 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-slate-700 text-sky-900 dark:text-sky-200 border border-sky-200 dark:border-slate-700 font-bold text-xs transition shadow-xs group"
              title="Call Central Helpline"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform" />
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
              className="inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs transition-all duration-200 shadow-sm hover:shadow-red-500/20 cursor-pointer whitespace-nowrap btn-shimmer hover:scale-105 active:scale-95"
              title="Book Your Free Trial Class"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300 animate-spin-slow" />
              <span>Book Your Free Trial Class</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 hidden xl:inline animate-bounce-gentle" />
            </button>
          </div>

          {/* Right Header Status / Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              id="mobile-theme-toggle-btn"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-xs"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 focus:outline-none transition"
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
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-lg transition-colors">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 pb-3 border-b border-slate-100 dark:border-slate-800">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isColSpan2 = item.id === 'progress-testing' || item.id === 'google-maps-location' || item.id === 'contact';
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2.5 rounded-xl transition-all flex items-center justify-between ${
                    isColSpan2 ? 'col-span-2' : ''
                  } ${
                    isActive
                      ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-600/30'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-700 dark:hover:text-sky-300'
                  }`}
                >
                  <span className="flex items-center">
                    {item.isSpecial === 'maps' && (
                      <MapPin className={`w-3.5 h-3.5 mr-1.5 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                    )}
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider font-extrabold ml-1">
                      Active
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            {/* Quick Dark Mode Switch inside Drawer */}
            <button
              onClick={toggleTheme}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center justify-between transition cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                {theme === 'light' ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
                <span>Current Theme: <strong className="capitalize text-sky-600 dark:text-sky-400">{theme} Mode</strong></span>
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Tap to Switch</span>
            </button>

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
                className="py-2.5 rounded-xl bg-sky-50 dark:bg-slate-800 text-sky-800 dark:text-sky-300 font-bold text-center border border-sky-200 dark:border-slate-700 flex items-center justify-center"
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
