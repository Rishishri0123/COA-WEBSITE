import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Lock } from 'lucide-react';
import campusExteriorImg from '../assets/images/coa_campus_exterior_1789837482918.jpg';

interface HeroProps {
  onSuccessSubmit: (studentName: string, selectedGrade: string, phone?: string, campus?: string, notes?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSuccessSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('11th-12th-Science');
  const [branch, setBranch] = useState('Shastri Nagar');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessSubmit(name, grade, phone, branch, 'Submitted from Hero 2-Day Free Trial form.');
      setName('');
      setPhone('');
    }, 600);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white overflow-hidden py-14 lg:py-20">
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-red-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Admissions Banner Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>NEW BATCHES FORMING FOR 2026-27 • 2 DAYS FREE TRIAL</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Empowering Minds for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-200 to-amber-400">
                Science, Commerce & Professional
              </span>{' '}
              Excellence
            </h1>

            {/* Sub-copy */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ghaziabad’s top academic institute at <strong className="text-white">D-Block, Shastri Nagar</strong> and{' '}
              <strong className="text-white">Vivekanand Nagar</strong>. We offer specialized{' '}
              <span className="text-amber-300 font-semibold">individual subject classes</span> for{' '}
              <span className="text-sky-300 font-semibold">Physics, Chemistry, Mathematics</span> &{' '}
              <span className="text-rose-300 font-semibold">Commerce</span> (Classes IX-XII, JEE, CUET & CA Foundation).
            </p>

            {/* Separate Subject Showcase Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 max-w-2xl mx-auto lg:mx-0 text-left shadow-lg space-y-3">
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-bold flex items-center justify-between">
                <span className="flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Individual Subject Classes • Dedicated Mentors:
                </span>
                <span className="text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full font-bold">
                  No Forced Bundles
                </span>
              </div>

              {/* Subject Badges with Mentor Names */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
                  <div className="text-[10px] text-sky-300 font-bold uppercase tracking-wider">Physics</div>
                  <div className="text-xs font-bold text-white mt-0.5">Mr. Arvind Kashyap</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">15+ Yrs Exp</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
                  <div className="text-[10px] text-purple-300 font-bold uppercase tracking-wider">Chemistry</div>
                  <div className="text-xs font-bold text-white mt-0.5">Mr. Mukesh Saraswat</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">15+ Yrs Exp</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
                  <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Mathematics</div>
                  <div className="text-xs font-bold text-white mt-0.5">Mr. Shiv S. Sharma</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">15+ Yrs Exp</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-center">
                  <div className="text-[10px] text-rose-300 font-bold uppercase tracking-wider">Commerce & CA</div>
                  <div className="text-xs font-bold text-white mt-0.5">Mr. Ravi Yadav</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">15+ Yrs Exp</div>
                </div>
              </div>

              {/* Central Helpline Strip */}
              <a
                href="tel:8800020688"
                className="flex items-center justify-between bg-gradient-to-r from-emerald-600/30 to-sky-600/30 hover:from-emerald-600/40 hover:to-sky-600/40 p-2.5 rounded-xl transition border border-emerald-400/30 text-white font-semibold text-xs"
                title="Call Central Helpline for All Inquiries"
              >
                <span className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                  Main Admissions Helpline: <strong className="text-emerald-300 ml-1.5 font-bold">88000 20688</strong>
                </span>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-300 font-bold px-2 py-0.5 rounded">
                  Call Helpline
                </span>
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="tel:8800020688"
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-900/40 flex items-center justify-center space-x-2 transition transform hover:-translate-y-0.5"
                title="Call Main Helpline"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call 88000 20688</span>
              </a>

              <a
                href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20want%20to%20reserve%20a%20seat%20for%20a%20Free%20Demo%20Class!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 flex items-center justify-center space-x-2 transition transform hover:-translate-y-0.5"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#google-maps-location"
                className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/25 flex items-center justify-center space-x-1.5 transition"
              >
                <span>Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card & Free Demo Quick Booking */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20 relative backdrop-blur-lg">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md inline-block">
                      Limited Seats per Batch
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-slate-900 mt-1">
                      Book Your 2-Day Free Trial
                    </h3>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <p className="text-xs text-slate-500 mb-5">
                  Attend live ongoing lectures in Physics, Chemistry, Maths or Commerce before deciding.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Student's Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Student Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Stream / Grade *</label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                      >
                        <option value="11th-12th-Science">XI-XII Individual Science (Phy/Chem/Maths)</option>
                        <option value="11th-12th-Commerce">XI-XII Commerce</option>
                        <option value="9th-10th">Class IX & X Foundation</option>
                        <option value="JEE-Entrance">JEE (Main & Advanced)</option>
                        <option value="CUET">CUET (UG) Special</option>
                        <option value="CA-CS-CMA">CA / CS / CMA Professional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Branch *</label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                      >
                        <option value="Shastri Nagar">Shastri Nagar (Main)</option>
                        <option value="Vivekanand Nagar">Vivekanand Nagar (2nd)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer mt-1"
                    title="Book Your Free Trial Class"
                  >
                    <span>{isSubmitting ? 'Reserving Trial Slot...' : 'Book Your Free Trial Class'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                  <span className="flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                    Zero upfront fees
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mr-1" />
                    Study material included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
