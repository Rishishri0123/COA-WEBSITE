import React from 'react';
import { FACULTY_DATA } from '../data/coachingData';
import { GraduationCap, Award, Phone, Lock, BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface FacultySectionProps {
  onOpenConsultationModal: (facultyName: string) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="faculty" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-emerald-800 font-extrabold text-xs uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
            Individual Subject Specialists • Senior Mentors
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Learn From Ghaziabad’s Premier Subject Mentors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            We don’t force bundled PCM packages — we offer dedicated <strong>individual subject classes</strong>. Fill our consultation form to get in touch and receive teacher contact numbers directly.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
            <span>Enroll in 1, 2, or all subjects • Pay only for the subjects you choose</span>
          </div>
        </div>

        {/* Faculty Grid - 4 Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_DATA.map((faculty) => (
            <div
              key={faculty.id}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
            >
              <div>
                {/* Header Profile Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-600 to-slate-900 text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
                    {faculty.name
                      .split(' ')
                      .filter((_, i) => i === 1 || i === 2)
                      .map((n) => n[0])
                      .join('') || faculty.name.slice(0, 2)}
                  </div>
                  <span className="text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2.5 py-1 rounded-full border border-sky-200">
                    {faculty.experience}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-sky-700 transition">
                  {faculty.name}
                </h3>
                <div className="text-xs font-bold text-sky-700 mt-0.5">{faculty.role}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">{faculty.qualification}</div>

                {/* Direct Phone Access Notice (Phone numbers provided upon form fill) */}
                <div className="my-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center justify-between">
                    <span className="flex items-center">
                      <Lock className="w-3 h-3 text-sky-600 mr-1" />
                      Direct Teacher Phone:
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      On Form Fill
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Submit the contact form below to instantly receive {faculty.name.split(' ')[1] || 'the teacher'}'s personal phone number.
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {faculty.badges
                    .filter((badge) => !badge.includes('Direct:'))
                    .map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold bg-white text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200 shadow-2xs"
                      >
                        {badge}
                      </span>
                    ))}
                  <span className="text-[10px] font-bold bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-md border border-sky-200 shadow-2xs">
                    Individual Classes
                  </span>
                </div>

                {/* Specialization */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/70 mb-3 text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Core Specialization:
                  </span>
                  <span className="font-semibold text-slate-800">{faculty.specialization}</span>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">{faculty.bio}</p>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <button
                  onClick={() => onOpenConsultationModal(`${faculty.name} (${faculty.role})`)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition cursor-pointer"
                  title={`Book Free Demo with ${faculty.name}`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Free Demo & Get Teacher's Number</span>
                </button>

                <a
                  href="#contact"
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition"
                >
                  <span>Fill Form to Connect</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Counseling Invitation Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xl shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg">
                Need Academic Guidance for Stream Selection?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Schedule a 1-on-1 counseling session with our senior teachers at our campus centers (locations detailed in Maps section).
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenConsultationModal('Academic Counseling Team')}
            className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-amber-300 font-bold text-xs uppercase tracking-wide transition shrink-0 cursor-pointer shadow"
            title="Schedule Your Free Consultation"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
