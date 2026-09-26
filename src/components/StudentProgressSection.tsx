import React from 'react';
import { ClipboardCheck, TrendingUp, Calendar, Clock, AlertCircle, FileText, CheckCircle2, PhoneCall } from 'lucide-react';

interface StudentProgressSectionProps {
  onOpenDemoModal?: () => void;
}

export const StudentProgressSection: React.FC<StudentProgressSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="progress-testing" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sky-600 font-extrabold text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 inline-flex items-center">
            <ClipboardCheck className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
            Continuous Academic Evaluation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Monthly Progress Testing & Performance Monitoring
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            At Classes of Academia, learning is never left to chance. We conduct <strong className="text-slate-900 font-semibold">2–3 progress tests every month</strong> to closely monitor student performance, pinpoint individual learning gaps, and ensure complete exam readiness.
          </p>
        </div>

        {/* 3 Core Testing Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              2–3 Scheduled Monthly Tests
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every month, students undertake 2 to 3 structured progress evaluations covering newly taught chapters and cumulative revision. Tests feature both CBSE step-marking criteria and competitive objective problem sets.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span>Chapter-wise & multi-topic retention checks</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span>Real exam timed simulation</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Error Diagnosis & 1-on-1 Feedback
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Answer sheets are thoroughly evaluated by our senior subject mentors (15+ yrs experience). Students receive detailed red-pen analysis identifying conceptual misunderstandings, calculation slips, and presentation errors.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span>Dedicated post-test doubt sessions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span>Remedial worksheets for weak topics</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Parent Progress Transparency
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We keep parents actively informed with transparent monthly test scorecards, attendance logs, and personalized mentor remarks directly via WhatsApp and parent-teacher consultations.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span>Direct WhatsApp scorecard delivery</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                <span>Open dialogue with individual teachers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visiting Hours & Sunday Exam Schedule Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-lg">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Official Campus Timings & Policy</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Visiting Hours: 4:00 PM – 7:30 PM (Monday through Saturday)
              </h3>

              <div className="flex items-start space-x-2 text-slate-300 text-xs sm:text-sm pt-1">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">Sunday Policy:</strong> The coaching is closed on Sundays for routine visits. However, <span className="text-white font-semibold underline decoration-amber-400 underline-offset-2">classes will be held on Sundays during exam periods</span> to ensure full syllabus coverage, intensive revision, and board test simulations.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:8800020688"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center space-x-2 shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Admissions: 88000 20688</span>
              </a>

              {onOpenDemoModal && (
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm text-center transition border border-white/20"
                >
                  Book 2-Day Free Trial
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
