import React from 'react';
import { CoaLogo } from './CoaLogo';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ChevronRight, Lock, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <CoaLogo size="md" showText={true} textColor="light" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Classes of Academia (COA) is a premier academic institution in Ghaziabad delivering results through specialized individual subject classes in Physics, Chemistry, Mathematics & Commerce, JEE (Main & Advanced), CUET, and CA / CS / CMA professional certifications.
            </p>

            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5 text-[11px]">
              <div className="text-amber-300 font-bold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                Admissions Open for Session 2026-27
              </div>
              <p className="text-slate-400">
                Enroll early to secure preferred morning/evening batch timings and small-group mentorship slots.
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  About Our Center
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Courses & Streams
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Faculty Profiles
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Student Results
                </a>
              </li>
              <li>
                <a href="#campus-tour" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Campus Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  The COA Advantage
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Campuses & Enrollment
                </a>
              </li>
              <li>
                <a href="#google-maps-location" className="text-amber-400 hover:text-amber-300 transition flex items-center font-semibold">
                  <ChevronRight className="w-3 h-3 mr-1 text-amber-500" />
                  Google Maps Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Campuses Addresses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide">
              Ghaziabad Campuses
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded inline-block">
                  Campus Centers
                </span>
                <div className="text-white font-semibold">Main Campus & 2nd Campus</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Physical street addresses, landmarks, and live turn-by-turn navigation are provided in the Google Maps section above.
                </p>
                <a
                  href="#google-maps-location"
                  className="inline-flex items-center text-xs font-bold text-amber-400 hover:text-amber-300 pt-0.5"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>View Exact Address in Maps</span>
                </a>
              </div>

              <div className="space-y-1 text-[11px] text-slate-300 pt-1">
                <div className="flex items-center text-amber-300 font-semibold">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-400 shrink-0" />
                  <span>Visiting Hours: Mon–Sat 4:00 PM – 7:30 PM</span>
                </div>
                <div className="text-[10px] text-slate-400 pl-5">
                  Closed on Sundays (Classes held on Sundays during exam periods)
                </div>
              </div>
            </div>
          </div>

          {/* Helpline & Direct Teacher Access via Form */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide">
              Admissions & Helpline
            </h4>
            
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-2.5 text-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Central Academic Helpline:
              </span>
              <div className="flex items-center space-x-2 pt-0.5">
                <a
                  href="tel:8800020688"
                  className="flex-1 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition shadow-sm"
                  title="Call Admissions Desk"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20want%20to%20inquire%20about%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition shadow-sm"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                Covers batch inquiries, demo bookings & admissions counseling for all subjects.
              </p>
            </div>

            {/* Teacher Direct Numbers Policy */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-[11px]">
              <div className="text-slate-300 font-bold flex items-center justify-between">
                <span>Subject Faculty Consultations</span>
                <span className="text-amber-400 font-bold text-[10px] uppercase bg-amber-400/10 px-2 py-0.5 rounded">15+ Yrs Exp</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                To connect directly with senior faculty for Physics, Chemistry, Maths, or Commerce, please fill the <a href="#contact" className="text-sky-400 font-semibold underline hover:text-sky-300">Contact / Free Demo form</a>. Direct faculty phone lines are instantly unlocked upon form submission.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-amber-300 hover:text-amber-200 font-bold text-[11px]"
              >
                <span>Fill Form to Receive Teacher Contact</span>
                <span className="ml-1">→</span>
              </a>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20want%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect on Official WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Website Creator & Developer Credit Banner */}
        <div className="pt-6 pb-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800/90 border border-slate-700/80 rounded-full px-4 py-2 shadow-xs">
            <span className="text-slate-400">Website made by:</span>
            <span className="font-extrabold text-amber-400 text-sm tracking-wide">Rishi Shrivastav</span>
          </div>
          <p className="text-slate-400 text-xs">
            Classes of Academia • Digital Academic Portal & AI Guide
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p>© 2026 Classes of Academia (COA). All Rights Reserved.</p>
          <div className="flex items-center space-x-3">
            <span>Classes of Academia • Premier Individual Subject Coaching in Ghaziabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
