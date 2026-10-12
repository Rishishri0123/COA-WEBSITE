import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Calendar, 
  Award, 
  UserCheck, 
  BookOpen, 
  ArrowRight, 
  Building2,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

interface BatchPlannerCalculatorProps {
  onOpenDemoModal: (courseTitle?: string) => void;
}

interface SubjectOption {
  id: string;
  name: string;
  mentor: string;
  mentorExp: string;
  category: 'science' | 'commerce' | 'foundation';
  hoursPerWeek: number;
  highlight: string;
}

export const BatchPlannerCalculator: React.FC<BatchPlannerCalculatorProps> = ({ onOpenDemoModal }) => {
  const [selectedGrade, setSelectedGrade] = useState<'11th-sci' | '12th-sci' | '11th-comm' | '12th-comm' | '9th-10th' | 'jee-ca'>('12th-sci');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['physics', 'chemistry', 'maths']);
  const [preferredCampus, setPreferredCampus] = useState<'shastri' | 'vivekanand'>('shastri');

  const gradeOptions = [
    { id: '12th-sci', label: 'Class XII (Science)', stream: 'science' },
    { id: '11th-sci', label: 'Class XI (Science)', stream: 'science' },
    { id: '12th-comm', label: 'Class XII (Commerce)', stream: 'commerce' },
    { id: '11th-comm', label: 'Class XI (Commerce)', stream: 'commerce' },
    { id: '9th-10th', label: 'Class IX & X (Foundation)', stream: 'foundation' },
    { id: 'jee-ca', label: 'JEE / CA Foundation / CUET', stream: 'competitive' }
  ];

  const availableSubjects: Record<string, SubjectOption[]> = {
    '12th-sci': [
      { id: 'physics', name: 'Physics (Class 12)', mentor: 'Mr. Arvind Kashyap', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 4.5, highlight: 'Derivations, Optics, Electromagnetism & CBSE Numerical drills' },
      { id: 'chemistry', name: 'Chemistry (Class 12)', mentor: 'Mr. Mukesh Saraswat', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 4.5, highlight: 'Organic mechanisms, Physical Chemistry formulas & NCERT line-by-line' },
      { id: 'maths', name: 'Mathematics (Class 12)', mentor: 'Mr. Shiv Shankar Sharma', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 4.5, highlight: 'Calculus mastery, 3D Geometry, Vectors & Step-marking tactics' }
    ],
    '11th-sci': [
      { id: 'physics', name: 'Physics (Class 11)', mentor: 'Mr. Arvind Kashyap', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 4.5, highlight: 'Mechanics, Thermodynamics, Waves & Strong base building' },
      { id: 'chemistry', name: 'Chemistry (Class 11)', mentor: 'Mr. Mukesh Saraswat', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 4.5, highlight: 'Chemical Bonding, Thermodynamics & Stoichiometry fundas' },
      { id: 'maths', name: 'Mathematics (Class 11)', mentor: 'Mr. Shiv Shankar Sharma', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 4.5, highlight: 'Trigonometry, Conic Sections, Sets & Foundation logic' }
    ],
    '12th-comm': [
      { id: 'accounts', name: 'Accountancy (Class 12)', mentor: 'Mr. Ravi Yadav', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 4.5, highlight: 'Partnership, Company Accounts & Cash Flow Statements' },
      { id: 'economics', name: 'Economics (Class 12)', mentor: 'Mr. Ravi Yadav', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 3.5, highlight: 'Macro Economics & Indian Economic Development case studies' },
      { id: 'bst', name: 'Business Studies (Class 12)', mentor: 'Mr. Ravi Yadav', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 3.0, highlight: 'Case studies decoding & Presentation techniques' },
      { id: 'applied-maths', name: 'Applied Mathematics', mentor: 'Mr. Shiv Shankar Sharma', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 4.0, highlight: 'Financial Mathematics, Linear Programming & Probability' }
    ],
    '11th-comm': [
      { id: 'accounts', name: 'Accountancy (Class 11)', mentor: 'Mr. Ravi Yadav', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 4.5, highlight: 'Journal entries, Ledger posting, Trial Balance & Balance Sheet' },
      { id: 'economics', name: 'Economics (Class 11)', mentor: 'Mr. Ravi Yadav', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 3.5, highlight: 'Microeconomics graphs & Statistics numericals' },
      { id: 'bst', name: 'Business Studies (Class 11)', mentor: 'Mr. Ravi Yadav', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 3.0, highlight: 'Forms of business organizations & International trade' }
    ],
    '9th-10th': [
      { id: 'science-10', name: 'Science (Physics & Chem Focus)', mentor: 'Senior COA Science Faculty', mentorExp: '15+ Yrs Exp', category: 'foundation', hoursPerWeek: 4.5, highlight: 'CBSE Board pattern conceptual science with regular experiments' },
      { id: 'maths-10', name: 'Mathematics (Board Foundation)', mentor: 'Senior COA Maths Faculty', mentorExp: '15+ Yrs Exp', category: 'foundation', hoursPerWeek: 4.5, highlight: 'NCERT Exemplar + RD Sharma advanced problem solving' }
    ],
    'jee-ca': [
      { id: 'jee-pcm', name: 'JEE Main & Advanced Physics, Chem & Maths', mentor: 'Arvind Sir, Mukesh Sir & Shiv Sir', mentorExp: '15+ Yrs Exp', category: 'science', hoursPerWeek: 12.0, highlight: 'Speed, accuracy & previous 20 years JEE questions analysis' },
      { id: 'ca-foundation', name: 'CA Foundation (Full Stream)', mentor: 'Mr. Ravi Yadav & Associates', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 10.0, highlight: 'Accounting, Business Laws, Quantitative Aptitude & Economics' },
      { id: 'cuet-prep', name: 'CUET Domain Specifics', mentor: 'Stream Experts', mentorExp: '15+ Yrs Exp', category: 'commerce', hoursPerWeek: 6.0, highlight: 'Speed-based MCQ strategies for top university admissions' }
    ]
  };

  const currentSubjects = availableSubjects[selectedGrade] || [];

  const handleGradeChange = (gradeId: any) => {
    setSelectedGrade(gradeId);
    const newOptions = availableSubjects[gradeId] || [];
    // Default select first 2 subjects
    setSelectedSubjects(newOptions.slice(0, 2).map(s => s.id));
  };

  const toggleSubject = (subjectId: string) => {
    if (selectedSubjects.includes(subjectId)) {
      if (selectedSubjects.length > 1) {
        setSelectedSubjects(prev => prev.filter(id => id !== subjectId));
      }
    } else {
      setSelectedSubjects(prev => [...prev, subjectId]);
    }
  };

  const selectedSubjectObjects = currentSubjects.filter(s => selectedSubjects.includes(s.id));
  const totalWeeklyHours = selectedSubjectObjects.reduce((acc, curr) => acc + curr.hoursPerWeek, 0);

  const selectedSummaryString = `${gradeOptions.find(g => g.id === selectedGrade)?.label}: ${selectedSubjectObjects.map(s => s.name).join(', ')} (${preferredCampus === 'shastri' ? 'Main Campus' : '2nd Campus'})`;

  return (
    <section id="batch-planner" className="py-16 sm:py-20 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-0 -ml-32 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 -mr-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Customizer</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Build Your Child’s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-300">
              Custom Subject Plan
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            At Classes of Academia, you are <strong className="text-white">never forced into bulk package bundles</strong>. Choose only the individual subjects your child requires, get assigned to verified 15+ years experienced teachers, and attend a 2-day free trial.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Grade & Subject Configuration */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Grade Selector */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-lg space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>1. Select Grade / Academic Level:</span>
                <span className="text-sky-400 font-semibold text-[11px]">Individual Subject Flexibility</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {gradeOptions.map((grade) => {
                  const isActive = selectedGrade === grade.id;
                  return (
                    <button
                      key={grade.id}
                      onClick={() => handleGradeChange(grade.id)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-950'
                          : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:bg-slate-700/60 hover:text-white'
                      }`}
                    >
                      {grade.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Subject Selector Checkboxes */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Choose Individual Subjects (Pick Any):
                </label>
                <span className="text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
                  {selectedSubjects.length} Subject{selectedSubjects.length > 1 ? 's' : ''} Selected
                </span>
              </div>

              <div className="space-y-2.5">
                {currentSubjects.map((sub) => {
                  const isChecked = selectedSubjects.includes(sub.id);
                  return (
                    <div
                      key={sub.id}
                      onClick={() => toggleSubject(sub.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-sky-950/40 border-sky-500/60 shadow-sm'
                          : 'bg-slate-900/40 border-slate-700/60 hover:border-slate-600 opacity-75'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                          isChecked ? 'bg-sky-600 border-sky-400 text-white' : 'border-slate-600 bg-slate-800'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-heading font-bold text-sm sm:text-base text-white">
                              {sub.name}
                            </span>
                            <span className="text-[11px] font-semibold text-sky-300 bg-sky-900/60 px-2 py-0.5 rounded">
                              {sub.mentor} ({sub.mentorExp})
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-normal">
                            {sub.highlight}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono shrink-0 whitespace-nowrap hidden sm:block">
                        {sub.hoursPerWeek} hrs/wk
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Preferred Campus */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700 shadow-lg space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                3. Choose Your Preferred Ghaziabad Campus:
              </label>

              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPreferredCampus('shastri')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    preferredCampus === 'shastri'
                      ? 'bg-sky-600/30 border-sky-400 text-white shadow'
                      : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">Main Campus</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Head Center • Visiting: 4:00 PM – 7:30 PM • View address in Maps
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPreferredCampus('vivekanand')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    preferredCampus === 'vivekanand'
                      ? 'bg-sky-600/30 border-sky-400 text-white shadow'
                      : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-bold text-xs sm:text-sm text-white">2nd Campus</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Branch Campus • Visiting: 4:00 PM – 7:30 PM • View address in Maps
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Plan Summary & Free Trial CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-7 border border-sky-400/30 shadow-2xl relative animate-border-glow">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400">
                    Calculated Study Overview
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                    Your Personalized Program
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 animate-pulse-soft">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Selected Subjects List */}
              <div className="py-4 space-y-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Enrolled Subjects & Mentors:
                </span>
                <div className="space-y-2">
                  {selectedSubjectObjects.map((s) => (
                    <div key={s.id} className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-900/70 border border-slate-800">
                      <div>
                        <span className="font-bold text-white">{s.name}</span>
                        <span className="text-slate-400 block text-[11px]">Mentor: {s.mentor}</span>
                      </div>
                      <span className="text-sky-400 font-mono text-[11px] font-semibold">{s.hoursPerWeek}h/wk</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features included */}
              <div className="space-y-2.5 py-4 border-t border-b border-slate-700/80 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-slate-400">
                    <Clock className="w-3.5 h-3.5 mr-2 text-sky-400" />
                    Estimated Classroom Teaching
                  </span>
                  <span className="font-bold text-white font-mono">{totalWeeklyHours.toFixed(1)} Hours / Week</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-slate-400">
                    <Calendar className="w-3.5 h-3.5 mr-2 text-amber-400" />
                    Testing Cadence
                  </span>
                  <span className="font-bold text-amber-300">2–3 Monthly Progress Tests</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-slate-400">
                    <Building2 className="w-3.5 h-3.5 mr-2 text-rose-400" />
                    Campus Location
                  </span>
                  <span className="font-bold text-white">{preferredCampus === 'shastri' ? 'Main Campus' : '2nd Campus'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                    Study Material Included
                  </span>
                  <span className="font-bold text-emerald-400">Compendiums & Past 15Y Banks</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-5 space-y-3">
                <button
                  onClick={() => onOpenDemoModal(selectedSummaryString)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-950 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer btn-shimmer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Reserve 2-Day Free Trial For This Plan</span>
                  <ArrowRight className="w-4 h-4 animate-bounce-gentle" />
                </button>

                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                  100% Free · No upfront fee or deposit required to trial
                </p>
              </div>
            </div>

            {/* Parent Reassurance Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start space-x-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">Director's Transparency Promise:</strong>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  "Students only pay for the individual subjects they choose. If a student only needs Physics or Maths, they study with our top faculty without being forced into an all-subject package."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
