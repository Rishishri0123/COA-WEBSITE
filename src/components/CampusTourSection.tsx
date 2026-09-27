import React, { useState } from 'react';
import { Camera, MapPin, Eye, CheckCircle2, BookOpen, Lightbulb, Users, Shield } from 'lucide-react';
import classroomImg from '../assets/images/coa_modern_classroom_1789837499314.jpg';
import exteriorImg from '../assets/images/coa_building_original_1790049920564.jpg';
import notesCompendiumImg from '../assets/images/coa_notes_compendium_1790049235788.jpg';

export const CampusTourSection: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<number>(0);

  const facilities = [
    {
      title: 'Smart, Air-Conditioned Classrooms',
      tag: 'Academic Comfort',
      desc: 'Ergonomic seating, high-contrast smart display whiteboards, and climate control ensuring maximum attention during 2-hour intensive lectures.',
      image: classroomImg,
      features: ['Individual desk spacing', 'Zero glare board visibility', 'Audio acoustics for clear speech']
    },
    {
      title: 'Doubt Resolution & Mentoring Desk',
      tag: 'Personalized Focus',
      desc: 'Dedicated daily 1-on-1 discussion cubicles where students clarify doubts from homework, school tests, or entrance test papers.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      features: ['Direct access to subject teachers', 'No question is too basic', 'Daily evening slots']
    },
    {
      title: 'Comprehensive Master Notes with Practice Questions',
      tag: 'Best Curated Notes',
      desc: 'We offer the best curated notes compiled throughout leading reference books with comprehensive practice questions, formula sheets, and step-by-step solutions.',
      image: notesCompendiumImg,
      features: ['Curated from NCERT, HC Verma, SL Arora, RD Sharma, TS Grewal', 'Chapter-wise formula sheets & shortcut modules', 'Extensive practice questions with 15+ years solved question banks']
    },
    {
      title: 'Parent-Teacher Academic Counseling & Evaluation Desk',
      tag: 'Progress Tracking',
      desc: 'Dedicated consultation area where our faculty shares detailed 2–3 monthly progress test reports, attendance logs, and personalized improvement roadmaps.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      features: ['Monthly progress test report cards', 'Personalized academic counseling', 'Open during visiting hours (4:00 PM – 7:30 PM)']
    }
  ];

  return (
    <section id="campus-tour" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <Camera className="w-3.5 h-3.5 mr-1.5" />
            Infrastructure & Environment
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Designed for Focused, Distraction-Free Learning
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Both our Shastri Nagar (D-Block) and Vivekanand Nagar campuses provide a safe, well-equipped, and disciplined academic sanctuary for your children.
          </p>
        </div>

        {/* Interactive Feature Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Facility Selector */}
          <div className="lg:col-span-5 space-y-3 z-10">
            <h3 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-4">
              Click to Explore Campus Amenities:
            </h3>

            {facilities.map((fac, idx) => {
              const isSelected = activeFacility === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFacility(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-sky-400 shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm sm:text-base">{fac.title}</span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {fac.tag}
                    </span>
                  </div>
                  {isSelected && (
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {fac.desc}
                    </p>
                  )}
                </button>
              );
            })}

            <div className="pt-3 space-y-1">
              <a
                href="tel:8800020688"
                className="inline-flex items-center text-xs font-bold text-amber-300 hover:text-amber-200"
              >
                <span>Book a physical walkthrough visit (Visiting: 4:00 PM – 7:30 PM, Mon–Sat)</span>
                <span className="ml-1.5">→</span>
              </a>
              <div className="text-[11px] text-slate-400">
                Closed on Sundays (Classes held on Sundays during exam periods)
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-7 z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative group h-72 sm:h-96">
              <img
                src={facilities[activeFacility].image}
                alt={facilities[activeFacility].title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  {facilities[activeFacility].tag}
                </span>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                  {facilities[activeFacility].title}
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {facilities[activeFacility].features.map((f, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md text-slate-100 flex items-center"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 mr-1 shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
