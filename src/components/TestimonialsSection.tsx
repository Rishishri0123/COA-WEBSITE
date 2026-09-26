import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/coachingData';
import { Star, Trophy, Quote, CheckCircle, MapPin, Sparkles, Award } from 'lucide-react';
import toppersImg from '../assets/images/coa_student_toppers_1789837518364.jpg';

export const TestimonialsSection: React.FC = () => {
  const [filterStream, setFilterStream] = useState<'All' | 'Science' | 'Commerce' | 'Professional'>('All');

  const filteredTestimonials = filterStream === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.stream === filterStream);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-300/80 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <Trophy className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
            Hall of Fame & Results
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Our Students Speak: Proven Results Year After Year
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Real stories and verifiable achievements from our Shastri Nagar and Vivekanand Nagar centers. We celebrate every student's score leap.
          </p>
        </div>

        {/* Feature Banner with Toppers Image */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl grid md:grid-cols-12 items-center">
          <div className="md:col-span-6 p-6 sm:p-8 text-white space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
              <Award className="w-3.5 h-3.5 mr-1" />
              Outstanding Academic Consistency
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-snug">
              From Average Scores to Top University Merit Lists
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              At Classes of Academia, our mentors focus on diagnosing individual weak areas—whether numerical speed in Physics, organic reaction recall in Chemistry, or ledger balance errors in Accountancy.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2 text-center border-t border-white/10">
              <div>
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-amber-400">98.2%</div>
                <div className="text-[11px] text-slate-300">Highest Board Score</div>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-sky-400">99+</div>
                <div className="text-[11px] text-slate-300">Century Scores</div>
              </div>
              <div>
                <div className="font-heading text-xl sm:text-2xl font-extrabold text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-300">CA Found. Pass</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative h-64 sm:h-80 md:h-full min-h-[280px]">
            <img
              src={toppersImg}
              alt="Classes of Academia Student Toppers Celebration"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-xs font-semibold">
              Proud Batch of 2025-26
            </div>
          </div>
        </div>

        {/* Filter Stream */}
        <div className="flex justify-center gap-2 mb-8">
          {(['All', 'Science', 'Commerce', 'Professional'] as const).map((stream) => (
            <button
              key={stream}
              onClick={() => setFilterStream(stream)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterStream === stream
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {stream} Toppers
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Header score badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    {item.score}
                  </span>
                  <div className="flex text-amber-400 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Exam & Destination */}
                <div className="mb-3">
                  <h4 className="font-heading font-bold text-slate-900 text-base group-hover:text-sky-700 transition">
                    {item.exam}
                  </h4>
                  <div className="text-xs font-semibold text-emerald-700 mt-0.5 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1 shrink-0" />
                    {item.schoolOrCollege}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative pl-3 border-l-2 border-sky-400 my-4 text-xs text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-slate-900">{item.studentName}</div>
                  <div className="text-[11px] text-slate-400">Class of {item.year}</div>
                </div>
                <div className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                  {item.branch}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
