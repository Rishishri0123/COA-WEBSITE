import React from 'react';
import { CheckCircle, Award, Users, BookOpen, Clock, MapPin, Sparkles, Building2 } from 'lucide-react';
import campusExteriorImg from '../assets/images/coa_campus_exterior_1789837482918.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 mr-1" />
              About Classes of Academia
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Legacy of Academic Discipline & Concept-Driven Mentorship
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Established with the vision of providing focused, high-standard coaching without commercial distractions,{' '}
              <strong className="text-slate-900 font-bold">Classes of Academia (COA)</strong> operates two state-of-the-art campuses in{' '}
              <strong className="text-sky-700">D-Block, Shastri Nagar</strong> (Main Campus) and{' '}
              <strong className="text-sky-700">Vivekanand Nagar</strong>, Ghaziabad.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We specialize in preparing young scholars for CBSE Board examinations (Class IX through XII) through dedicated <strong>individual subject classes</strong> in Physics, Chemistry, Mathematics, and Commerce streams, alongside competitive and professional examinations like{' '}
              <strong className="text-slate-900">JEE (Main & Advanced), CUET, CA Foundation, CS & CMA</strong>.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">15+ Yrs Exp Mentors</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    All core subject teachers bring 15+ years of teaching experience dedicated exclusively to student excellence.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Limited Batch Size</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Strictly 15 to 25 students per class ensuring every doubt is addressed directly by the faculty.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">2–3 Monthly Progress Tests</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    We conduct 2–3 progress tests every month to closely monitor student performance, diagnose learning gaps, and share reports with parents.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">Handcrafted Materials</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Comprehensive study booklets, formula compendiums, and previous 15-year CBSE question banks.
                  </p>
                </div>
              </div>
            </div>

            {/* Branch Highlight Callout */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-sky-700" />
                <div className="text-xs text-slate-800">
                  <span className="font-bold text-sky-900">2 Convenient Campuses in Ghaziabad:</span> Main Campus at{' '}
                  <span className="font-semibold">D-Block, Shastri Nagar</span> & Branch 2 at{' '}
                  <span className="font-semibold">Vivekanand Nagar</span>.
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual: Enhanced Exterior Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Outer frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={campusExteriorImg}
                  alt="Classes of Academia Institute Campus"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Overlaid details reflecting user images & center banner */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-red-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow">
                      Main & Branch Campuses
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-amber-300 text-[11px] font-bold rounded-full">
                      Admissions Open IX - XII
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold">
                    Classes of Academia (COA)
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 flex items-center">
                    <MapPin className="w-4 h-4 text-red-400 mr-1.5 shrink-0" />
                    Head Center: D-Block, Shastri Nagar | 2nd Center: Vivekanand Nagar, Ghaziabad
                  </p>

                  <div className="pt-1 flex flex-wrap gap-2 text-xs">
                    <span className="bg-white/15 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10 font-medium">
                      Individual Subject Classes
                    </span>
                    <span className="bg-white/15 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10 font-medium">
                      Commerce & CUET
                    </span>
                    <span className="bg-white/15 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10 font-medium">
                      CA / CS / CMA
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-6 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-3.5 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-bold text-slate-900 text-sm">Top Rated in Ghaziabad</div>
                  <div className="text-xs text-slate-500">Trusted by 1000+ parents across Shastri Nagar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
