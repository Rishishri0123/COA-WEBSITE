import React, { useState } from 'react';
import { COURSES_DATA } from '../data/coachingData';
import { Check, Phone, ArrowRight, MessageCircle, Sparkles, BookOpen, Atom, TrendingUp, Briefcase, GraduationCap, Lock } from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourseForDemo: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourseForDemo }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'science' | 'commerce' | 'professional' | 'foundation'>('all');

  const filteredCourses = activeCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Subject Classes', icon: Sparkles },
    { id: 'science', label: 'Science (Individual Physics/Chem/Maths)', icon: Atom },
    { id: 'commerce', label: 'Commerce & CUET', icon: TrendingUp },
    { id: 'professional', label: 'CA / CS / CMA', icon: Briefcase },
    { id: 'foundation', label: 'Class 9-10 Foundation', icon: GraduationCap },
  ];

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            Curriculum & Programs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Academic Programs Engineered for High Scores
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Structured syllabi, 2–3 monthly progress tests to monitor student performance, NCERT line-by-line mastery, and entrance exam techniques across both our D-Block, Shastri Nagar and Vivekanand Nagar centers.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const isPopular = course.popular;
            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-sm">
                    High Demand Batch
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                      {course.grade}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-sky-700 transition leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Subjects covered */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
                      Subjects Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.subjects.map((sub, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200/60"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
                      Key Program Features:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {course.features.map((feat, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer with Teacher Guidance and Form Action */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Head Faculty:</span>
                      <span className="font-bold text-slate-800 text-[11px]">{course.facultyInCharge}</span>
                    </div>
                    <span className="text-[10px] bg-sky-50 text-sky-800 font-bold px-2 py-0.5 rounded-md border border-sky-200 flex items-center">
                      <Lock className="w-2.5 h-2.5 mr-1 text-sky-600" />
                      Phone via Form
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectCourseForDemo(course.title)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center space-x-1 cursor-pointer"
                      title="Book Your Free Trial Class"
                    >
                      <span>Book Free Trial</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <a
                      href="#contact"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center space-x-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 mr-1" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
