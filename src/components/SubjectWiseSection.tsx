import React, { useState } from 'react';
import { 
  Atom, 
  FlaskConical, 
  Calculator, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Phone, 
  CalendarCheck, 
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Lock
} from 'lucide-react';
import { SUBJECTS_DATA, MAIN_HELPLINE } from '../data/coachingData';

interface SubjectWiseSectionProps {
  onSelectSubjectForDemo: (subjectName: string) => void;
}

export const SubjectWiseSection: React.FC<SubjectWiseSectionProps> = ({ onSelectSubjectForDemo }) => {
  const [activeSubjectId, setActiveSubjectId] = useState<string>('physics');

  const activeSubject = SUBJECTS_DATA.find((s) => s.id === activeSubjectId) || SUBJECTS_DATA[0];

  const getSubjectIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'physics':
        return <Atom className={className} />;
      case 'chemistry':
        return <FlaskConical className={className} />;
      case 'mathematics':
        return <Calculator className={className} />;
      case 'commerce':
        return <TrendingUp className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <section id="subjects" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Dedicated Individual Subject Classes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            We Offer Individual Subject Classes (No Forced Bundles)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We don't force students into bundled packages like PCM. Enroll in <strong>individual Physics</strong>, <strong>individual Chemistry</strong>, <strong>individual Mathematics</strong>, or <strong>individual Commerce</strong> with Ghaziabad's top subject masters (<span className="font-semibold text-sky-700 dark:text-sky-400">15+ years experience each</span>).
          </p>
        </div>

        {/* 4 Subject Department Navigation Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SUBJECTS_DATA.map((subject) => {
            const isActive = subject.id === activeSubjectId;
            return (
              <button
                key={subject.id}
                onClick={() => setActiveSubjectId(subject.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden interactive-card ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 shadow-xl shadow-sky-900/10 border-sky-500 ring-2 ring-sky-500/20 transform -translate-y-1'
                    : 'bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                  }`}>
                    {getSubjectIcon(subject.id, "w-6 h-6")}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    isActive ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}>
                    15+ Yrs Exp
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {subject.subject}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Led by {subject.headFaculty}
                </p>

                {isActive && (
                  <div className="mt-3 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400">
                    <span>Explore Department</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Subject Detailed Showcase Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
          {/* Header Banner for Selected Subject */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${activeSubject.accentColor} text-white flex flex-col md:flex-row md:items-center justify-between gap-6`}>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Academic Department
                </span>
                <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>15+ Years Mastery</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {activeSubject.subject} Department
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-medium max-w-2xl">
                "{activeSubject.tagline}"
              </p>
            </div>

            {/* Department Head Profile Capsule */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white w-full sm:min-w-[280px] sm:w-auto">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-white text-slate-900 font-bold flex items-center justify-center text-lg shadow-md">
                  {activeSubject.headFaculty.split(' ')[1]?.[0] || 'T'}
                </div>
                <div>
                  <div className="text-xs text-white/80 font-medium">Head of Department</div>
                  <div className="font-bold text-base text-white">{activeSubject.headFaculty}</div>
                  <div className="text-[11px] text-white/85">{activeSubject.qualification}</div>
                </div>
              </div>
              <div className="text-xs bg-black/20 rounded-lg p-2 font-medium flex items-center justify-between">
                <span>Classes Covered:</span>
                <span className="text-amber-300 font-bold">{activeSubject.grades}</span>
              </div>
            </div>
          </div>

          {/* Body Columns */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Syllabus & Modules */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <span>Core Syllabus Modules & Curriculum</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSubject.keyModules.map((module, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Methodology & Pedagogical Highlights</span>
                </h4>
                <div className="space-y-2.5">
                  {activeSubject.syllabusHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-sky-600 dark:bg-sky-400 mt-1.5 shrink-0" />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Faculty Mentorship & Form-Gated Contact */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Why Study {activeSubject.subject} Here?
                  </h4>
                </div>
                <div className="space-y-3 mb-6">
                  {activeSubject.pedagogyPillars.map((pillar, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-start space-x-2.5 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>

                {/* Form-Gated Teacher Contact Callout */}
                <div className="p-4 bg-sky-50 dark:bg-slate-800/80 rounded-2xl border border-sky-200 dark:border-slate-700 mb-6 text-xs text-sky-950 dark:text-sky-200 leading-relaxed space-y-2">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-sky-900 dark:text-sky-300 flex items-center">
                      <Lock className="w-3.5 h-3.5 mr-1.5 text-sky-700 dark:text-sky-400" />
                      Direct Faculty Access:
                    </span>
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-700 font-extrabold">
                      Verified Contact
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    To maintain teacher focus during live batches, individual phone numbers are shared after completing the Free Trial form below.
                  </p>
                  <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Central Institute Helpline: <strong className="text-sky-900 dark:text-sky-300">{MAIN_HELPLINE.display}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onSelectSubjectForDemo(activeSubject.subject)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-600/20 flex items-center justify-center space-x-2 cursor-pointer transition transform hover:scale-[1.01]"
                  title={`Book Free Trial in ${activeSubject.subject}`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Free Trial in {activeSubject.subject}</span>
                </button>

                <a
                  href="#contact"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition"
                >
                  <span>Fill Form to Get {activeSubject.headFaculty.split(' ')[1] || 'Teacher'}'s Number</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Summary Note */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
          Note: We offer standalone individual subject classes in Physics, Chemistry, Mathematics, and Commerce. Students can enroll in single subjects or any custom combination. Biology / PCB is not offered.
        </div>
      </div>
    </section>
  );
};
