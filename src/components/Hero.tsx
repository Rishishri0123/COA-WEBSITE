import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  MapPin,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onSuccessSubmit: (studentName: string, selectedGrade: string, phone?: string, campus?: string, notes?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSuccessSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('11th-12th-Science');
  const [branch, setBranch] = useState('Main Campus');
  const [activeSubjectTab, setActiveSubjectTab] = useState<'physics' | 'chemistry' | 'maths' | 'commerce'>('physics');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjectHighlights = {
    physics: {
      name: 'Physics',
      faculty: 'Mr. Arvind Kashyap',
      exp: '15+ Years Experience',
      badge: 'Core Science Specialist',
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-300',
      description: 'Master CBSE derivations, vector fundamentals, circuit analysis, and JEE numericals with zero memorization.',
      timings: 'Mon–Sat within 4:00 PM – 7:30 PM',
      focus: 'NCERT In-depth + Exemplar + Previous 15-Yr Board Questions'
    },
    chemistry: {
      name: 'Chemistry',
      faculty: 'Mr. Mukesh Saraswat',
      exp: '15+ Years Experience',
      badge: 'Organic & Physical Master',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-300',
      description: 'Crystal-clear reaction mechanisms, periodic trends, chemical equilibrium, and NCERT line-by-line preparation.',
      timings: 'Mon–Sat within 4:00 PM – 7:30 PM',
      focus: 'Equation balancing mastery + Physical numerical drills'
    },
    maths: {
      name: 'Mathematics',
      faculty: 'Mr. Shiv Shankar Sharma',
      exp: '15+ Years Experience',
      badge: 'Calculus & Algebra Expert',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-300',
      description: 'Conquer Calculus, 3D Geometry, Trigonometry, and Vectors through systematic step-by-step problem-solving.',
      timings: 'Mon–Sat within 4:00 PM – 7:30 PM',
      focus: 'RD Sharma + NCERT Exemplar + Step-Marking Tactics'
    },
    commerce: {
      name: 'Commerce & CA',
      faculty: 'Mr. Ravi Yadav',
      exp: '15+ Years Experience',
      badge: 'Accounts & Finance Authority',
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-300',
      description: 'Specialized coaching in Accountancy, Economics, Business Studies, and foundational training for CA, CS & CMA.',
      timings: 'Mon–Sat within 4:00 PM – 7:30 PM',
      focus: 'Comprehensive Balance Sheet Drills + CUET Economics'
    }
  };

  const currentHighlight = subjectHighlights[activeSubjectTab];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessSubmit(name, grade, phone, branch, `Submitted from Hero: Focused on ${currentHighlight.name} with ${currentHighlight.faculty}.`);
      setName('');
      setPhone('');
    }, 600);
  };

  return (
    <section className="relative bg-[#050C1A] text-white overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting and subtle micro-grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 -mt-20 w-[520px] h-[520px] rounded-full bg-sky-500/15 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 left-10 -mb-20 w-[420px] h-[420px] rounded-full bg-amber-500/15 blur-[100px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Value Proposition & Faculty Explorer */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Admissions Banner with live pulsing badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-sky-400/30 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-md animate-pulse-glow hover:border-amber-400/60 transition">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-bounce-gentle" />
              <span>Admissions Open for 2026–27 Batches • 2-Day Free Trial Available</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Specialized Coaching with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-200 to-sky-300">
                15+ Yrs Experienced
              </span>{' '}
              Faculty
            </h1>

            {/* Sub-copy */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Ghaziabad’s most disciplined learning center across our <strong className="text-white">Main & Branch Campuses</strong>. We offer focused{' '}
              <strong className="text-amber-300 font-semibold">individual subject classes</strong> for{' '}
              <strong className="text-sky-300 font-semibold">Physics, Chemistry, Mathematics</strong> and{' '}
              <strong className="text-rose-300 font-semibold">Commerce (IX-XII, JEE & CA Foundation)</strong>.
            </p>

            {/* Interactive Subject Explorer Card */}
            <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 text-left shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center">
                  <Award className="w-4 h-4 mr-1.5 text-amber-400" />
                  Explore Core Faculty by Subject:
                </span>
                <span className="text-[11px] text-amber-300/90 font-medium">
                  Select any subject below
                </span>
              </div>

              {/* Subject Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['physics', 'chemistry', 'maths', 'commerce'] as const).map((subKey) => {
                  const sub = subjectHighlights[subKey];
                  const isActive = activeSubjectTab === subKey;
                  return (
                    <button
                      key={subKey}
                      type="button"
                      onClick={() => setActiveSubjectTab(subKey)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isActive
                          ? 'bg-white/15 border-sky-400/80 shadow-md text-white'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xs font-bold capitalize">{sub.name}</div>
                      <div className="text-[10px] text-slate-300 truncate mt-0.5">{sub.faculty.split(' ')[1]} Sir</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Subject Detail Preview */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className={`font-bold text-sm ${currentHighlight.textColor}`}>
                      {currentHighlight.faculty}
                    </span>
                    <span className="text-slate-400 font-medium">·</span>
                    <span className="text-slate-400">{currentHighlight.exp}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-normal">
                    {currentHighlight.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const gradeInput = document.getElementById('hero-grade-select') as HTMLSelectElement;
                    if (gradeInput) {
                      gradeInput.value = activeSubjectTab === 'commerce' ? '11th-12th-Commerce' : '11th-12th-Science';
                      setGrade(gradeInput.value);
                    }
                    const nameInput = document.getElementById('hero-name-input') as HTMLInputElement;
                    if (nameInput) nameInput.focus();
                  }}
                  className="shrink-0 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition flex items-center space-x-1 cursor-pointer"
                >
                  <span>Select for Trial</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick CTAs & Proof Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="tel:8800020688"
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-950 flex items-center justify-center space-x-2 transition transform hover:-translate-y-0.5"
                title="Call Admissions Desk"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Admissions</span>
              </a>

              <a
                href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20want%20to%20reserve%20a%20seat%20for%20a%20Free%20Demo%20Class!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950 flex items-center justify-center space-x-2 transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Helpline</span>
              </a>

              <a
                href="#batch-planner"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 flex items-center justify-center space-x-1.5 transition"
              >
                <span>Customize Subject Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>

            {/* Clean Unboxed Social Proof Metrics */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                15+ Years Legacy
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center text-slate-300">
                <Users className="w-3.5 h-3.5 text-sky-400 mr-1.5" />
                Small Batches (15–25 max)
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                2–3 Monthly Progress Tests
              </span>
            </div>
          </div>

          {/* Right Column: High-Conversion Free Trial Booking Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-slate-900/90 backdrop-blur-2xl text-slate-100 p-6 sm:p-8 rounded-3xl shadow-2xl border border-sky-400/20 animate-border-glow relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                      Zero Upfront Commitment
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white mt-1">
                      Reserve 2-Day Free Trial
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] text-emerald-300 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>Live Slots</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mb-5 leading-normal">
                  Experience live ongoing lectures in <strong className="text-white">Physics, Chemistry, Maths or Commerce</strong> with our senior faculty before enrolling.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Student's Full Name *</label>
                    <input
                      id="hero-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-800 text-white placeholder-slate-500 transition-all focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Parent / Student Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-800 text-white placeholder-slate-500 transition-all focus:border-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Stream / Grade *</label>
                      <select
                        id="hero-grade-select"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-800 text-white transition-all focus:border-sky-400"
                      >
                        <option value="11th-12th-Science">XI-XII Science (Phy/Chem/Maths)</option>
                        <option value="11th-12th-Commerce">XI-XII Commerce (Accounts/Eco/BST)</option>
                        <option value="9th-10th">Class IX & X Foundation</option>
                        <option value="JEE-Entrance">JEE (Main & Advanced)</option>
                        <option value="CUET">CUET (UG) Program</option>
                        <option value="CA-CS-CMA">CA / CS / CMA Professional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Campus *</label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-800 text-white transition-all focus:border-sky-400"
                      >
                        <option value="Main Campus">Main Campus</option>
                        <option value="2nd Campus">2nd Campus</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-lg shadow-sky-950 transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2 btn-shimmer hover:scale-[1.02] active:scale-[0.99]"
                  >
                    <span>{isSubmitting ? 'Reserving Trial Slot...' : 'Book Your 2-Day Free Trial'}</span>
                    <ArrowRight className="w-4 h-4 animate-bounce-gentle" />
                  </button>
                </form>

                <div className="pt-3 mt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10">
                  <span className="flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                    Zero upfront fees
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mr-1" />
                    Study material provided
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
