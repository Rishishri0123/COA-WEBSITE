import React from 'react';
import { Target, UserCheck, BookOpenCheck, Compass, Sparkles, Check, PhoneCall, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      icon: Target,
      color: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      title: 'NCERT Core + Board Precision',
      desc: 'We dissect every chapter with rigorous derivations, diagrammatic labeling, and answer presentation techniques demanded by CBSE board evaluators.'
    },
    {
      icon: UserCheck,
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      title: '2–3 Monthly Progress Tests',
      desc: 'We conduct 2–3 progress tests every month to monitor student performance. Parents receive direct updates on test marks, conceptual gaps, and teacher remarks.'
    },
    {
      icon: BookOpenCheck,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: 'Proprietary Study Modules',
      desc: 'Handcrafted theory booklets, formula cheat-sheets, previous 15-year board questions, and high-yield numerical problem sets.'
    },
    {
      icon: Compass,
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      title: 'Career & University Counseling',
      desc: 'Expert guidance for Class 10 students choosing Science vs. Commerce, and Class 12 students navigating JEE, NEET, CUET & CA registration.'
    },
    {
      icon: ShieldCheck,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      title: 'Affordable & Transparent Fees',
      desc: 'High-quality education with fair, honest fee structures and flexible installment plans. No unnecessary extra charges for test series or materials.'
    },
    {
      icon: HeartHandshake,
      color: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      title: 'Daily Post-Class Doubt Counter',
      desc: 'Our faculty members stay after classes to solve every student doubt individually until concept clarity is 100% achieved.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 inline-flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            The Classes of Academia Advantage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Why Parents in Ghaziabad Choose COA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            We bridge the gap between school curriculum and competitive examination rigor with disciplined mentorship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] border border-white/10 p-6 sm:p-7 rounded-3xl backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold mb-4 border ${adv.color} group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-amber-300 transition">
                  {adv.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Comparison Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
              Ready to witness the difference in your child's academic confidence?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Attend 2 days of free trial classes at either our Shastri Nagar or Vivekanand Nagar campus with zero obligation.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5">
            <a
              href="tel:8800020688"
              className="py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-2 transition shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Director: 88000 20688</span>
            </a>
            <a
              href="#contact"
              className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center transition border border-white/20"
            >
              <span>Visit Centers & Timings</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
