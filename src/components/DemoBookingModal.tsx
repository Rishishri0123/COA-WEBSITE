import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Phone, MapPin, Sparkles } from 'lucide-react';
import { CoaLogo } from './CoaLogo';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  onSuccess: (name: string, course: string, phone?: string, campus?: string, notes?: string) => void;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  defaultCourse,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourse || 'Individual Physics (Mr. Arvind Kashyap)');
  const [customSubjects, setCustomSubjects] = useState<string[]>([
    'Physics - Mr. Arvind Kashyap',
    'Mathematics - Mr. Shiv Shankar Sharma'
  ]);
  const [branch, setBranch] = useState('Main Campus');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const CUSTOM_SUBJECTS_LIST = [
    { id: 'm-phy', subject: 'Physics', teacher: 'Mr. Arvind Kashyap' },
    { id: 'm-chem', subject: 'Chemistry', teacher: 'Mr. Mukesh Saraswat' },
    { id: 'm-math', subject: 'Mathematics', teacher: 'Mr. Shiv Shankar Sharma' },
    { id: 'm-comm', subject: 'Commerce & Accounts', teacher: 'Mr. Ravi Yadav' },
    { id: 'm-eco', subject: 'Economics & Business Studies', teacher: 'Mr. Ravi Yadav' },
    { id: 'm-found', subject: 'Class 9/10 Foundation (Science & Maths)', teacher: 'Faculty Team' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const finalCourse = course === 'Custom Combination of Individual Subjects' && customSubjects.length > 0
      ? `Custom Combination: ${customSubjects.join(', ')}`
      : course;
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(name, finalCourse, phone, branch, notes || 'Booked via Free Demo Modal');
      setName('');
      setPhone('');
      setNotes('');
      onClose();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2-Day Free Trial Session</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Book Your Free Trial Class
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Attend actual ongoing lectures and evaluate our faculty before finalizing enrollment.
          </p>
          <div className="mt-2 text-[11px] text-amber-200 bg-white/10 rounded-lg px-2.5 py-1 inline-flex items-center gap-1.5 border border-white/15">
            <span className="font-semibold">Visiting Hours:</span> 4:00 PM – 7:30 PM (Mon–Sat) • <span className="text-amber-300">Sunday Classes held during exam periods</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Student Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priyanshu Sharma"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              WhatsApp / Mobile Number *
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Stream / Class *
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
              >
                <option value="Individual Physics (Mr. Arvind Kashyap)">Individual Physics (Mr. Arvind Kashyap)</option>
                <option value="Individual Chemistry (Mr. Mukesh Saraswat)">Individual Chemistry (Mr. Mukesh Saraswat)</option>
                <option value="Individual Mathematics (Mr. Shiv Shankar Sharma)">Individual Mathematics (Mr. Shiv S. Sharma)</option>
                <option value="Individual Commerce & Accounts (Mr. Ravi Yadav)">Commerce & Accounts (Mr. Ravi Yadav)</option>
                <option value="CA Foundation / Professional (Mr. Ravi Yadav)">CA Foundation / Professional (Mr. Ravi Yadav)</option>
                <option value="JEE Main & Advanced Subject Prep">JEE Main & Advanced Prep</option>
                <option value="CUET (UG) Preparation">CUET (UG) Prep</option>
                <option value="Class 9th-10th Foundation">Class IX & X Foundation</option>
                <option value="Custom Combination of Individual Subjects">Custom Combination of Subjects</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Campus *
              </label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
              >
                <option value="Shastri Nagar (D-Block)">Shastri Nagar (D-Block Main)</option>
                <option value="Vivekanand Nagar (2nd Campus)">Vivekanand Nagar (2nd)</option>
                <option value="Flexible / Either Center">Flexible / Either Center</option>
              </select>
            </div>
          </div>

          {/* Custom Subject Selection with Dropdown + Checkboxes */}
          {course === 'Custom Combination of Individual Subjects' && (
            <div className="p-3.5 bg-sky-50/90 border border-sky-300 rounded-xl space-y-2.5 text-xs animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-1 border-b border-sky-200">
                <span className="font-extrabold text-sky-950 uppercase tracking-wide">
                  Custom Subject Selection
                </span>
                <span className="text-[11px] font-bold text-sky-800 bg-sky-200/80 px-2 py-0.5 rounded-full">
                  {customSubjects.length} Selected
                </span>
              </div>

              {/* Dropdown to select custom subject */}
              <div>
                <label className="block text-[11px] font-bold text-sky-950 mb-1">
                  Select Custom Subject from Dropdown:
                </label>
                <select
                  defaultValue=""
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!val) return;
                    if (val === 'ALL_SCIENCE') {
                      setCustomSubjects(Array.from(new Set([
                        ...customSubjects,
                        'Physics - Mr. Arvind Kashyap',
                        'Chemistry - Mr. Mukesh Saraswat',
                        'Mathematics - Mr. Shiv Shankar Sharma'
                      ])));
                    } else if (val === 'CLEAR') {
                      setCustomSubjects([]);
                    } else if (!customSubjects.includes(val)) {
                      setCustomSubjects(prev => [...prev, val]);
                    }
                    e.target.value = '';
                  }}
                  className="w-full px-2.5 py-2 rounded-lg border border-sky-300 text-xs bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="" disabled>-- Click Dropdown to Select Subject --</option>
                  <optgroup label="Add Individual Subject">
                    {CUSTOM_SUBJECTS_LIST.map((item) => (
                      <option key={item.id} value={`${item.subject} - ${item.teacher}`}>
                        + Add {item.subject} ({item.teacher})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Combos">
                    <option value="ALL_SCIENCE">+ Add All 3 (Physics + Chemistry + Maths)</option>
                  </optgroup>
                  {customSubjects.length > 0 && (
                    <optgroup label="Reset">
                      <option value="CLEAR">✕ Clear All</option>
                    </optgroup>
                  )}
                </select>
              </div>

              {/* Tags */}
              {customSubjects.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {customSubjects.map((sub, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-[11px] font-semibold bg-white border border-sky-200 text-sky-900 px-2 py-0.5 rounded-md"
                    >
                      <span>{sub}</span>
                      <button
                        type="button"
                        onClick={() => setCustomSubjects(prev => prev.filter(s => s !== sub))}
                        className="ml-1 text-sky-400 hover:text-red-600 font-bold"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Checkboxes */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {CUSTOM_SUBJECTS_LIST.map((item) => {
                  const itemString = `${item.subject} - ${item.teacher}`;
                  const isChecked = customSubjects.includes(itemString);
                  return (
                    <label
                      key={item.id}
                      className={`flex items-start space-x-1.5 p-1.5 rounded-lg border text-[11px] cursor-pointer transition select-none ${
                        isChecked
                          ? 'bg-white border-sky-500 text-sky-950 font-semibold shadow-2xs'
                          : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {
                          if (isChecked) {
                            setCustomSubjects(prev => prev.filter(s => s !== itemString));
                          } else {
                            setCustomSubjects(prev => [...prev, itemString]);
                          }
                        }}
                        className="w-3.5 h-3.5 text-sky-600 rounded border-slate-300 mt-0.5 cursor-pointer"
                      />
                      <span className="truncate">Checkbox - {item.subject} - {item.teacher}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Any specific topics you want covered? (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g. Physics Mechanics or Accountancy Balance Sheet"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{isSubmitting ? 'Confirming Trial Class...' : 'Book Your Free Trial Class'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
            <span className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
              100% Free Trial
            </span>
            <span className="flex items-center">
              <Phone className="w-3 h-3 text-sky-600 mr-1" />
              Instant SMS / WhatsApp confirmation
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
