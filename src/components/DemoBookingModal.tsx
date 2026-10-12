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
    <div 
      className="fixed inset-0 z-[9995] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 relative my-auto max-h-[92dvh] sm:max-h-[88dvh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed & Sticky, never gets cut off */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-4 sm:p-5 relative shrink-0 shadow-md">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-white/10 hover:bg-red-600/90 text-white transition-all cursor-pointer border border-white/20 active:scale-90"
            aria-label="Close dialog"
            title="Close dialog"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>2-Day Free Trial Session</span>
          </div>
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
            Book Your Free Trial Class
          </h3>
          <p className="text-xs text-slate-300 mt-0.5 leading-snug">
            Attend live ongoing lectures & evaluate our senior faculty before enrolling.
          </p>
          <div className="mt-2 text-[10px] sm:text-[11px] text-amber-200 bg-white/10 rounded-lg px-2.5 py-1 inline-flex items-center gap-1.5 border border-white/15">
            <span className="font-semibold text-amber-300">Visiting Hours:</span> 4:00 PM – 7:30 PM (Mon–Sat) • <span className="text-slate-200">Sunday revision during exams</span>
          </div>
        </div>

        {/* Scrollable Form Body - Guarantees full scrollability on mobile and desktop */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 overscroll-contain p-4 sm:p-6 space-y-4">
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
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
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
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
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

          {/* Custom Subject Selection with Dedicated Scrollable Area */}
          {course === 'Custom Combination of Individual Subjects' && (
            <div className="p-3.5 sm:p-4 bg-sky-50/90 border-2 border-sky-300 rounded-2xl space-y-3 text-xs animate-in fade-in duration-150 shadow-inner">
              <div className="flex items-center justify-between pb-1.5 border-b border-sky-200">
                <div>
                  <span className="font-extrabold text-sky-950 uppercase tracking-wide text-xs block">
                    Custom Subject Selection
                  </span>
                  <span className="text-[11px] text-sky-700">
                    Choose individual subjects taught by senior HODs
                  </span>
                </div>
                <span className="text-[11px] font-bold text-sky-900 bg-sky-200 px-2.5 py-0.5 rounded-full shrink-0">
                  {customSubjects.length} Selected
                </span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    setCustomSubjects([
                      'Physics - Mr. Arvind Kashyap',
                      'Chemistry - Mr. Mukesh Saraswat',
                      'Mathematics - Mr. Shiv Shankar Sharma'
                    ]);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold transition cursor-pointer"
                >
                  + All Science (Phy + Chem + Maths)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCustomSubjects([
                      'Commerce & Accounts - Mr. Ravi Yadav',
                      'Economics & Business Studies - Mr. Ravi Yadav'
                    ]);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold transition cursor-pointer"
                >
                  + Commerce Stream
                </button>
                {customSubjects.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setCustomSubjects([])}
                    className="px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-[11px] font-bold transition cursor-pointer ml-auto"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Dropdown Selector */}
              <div>
                <label className="block text-[11px] font-bold text-sky-950 mb-1">
                  Add from Dropdown:
                </label>
                <select
                  defaultValue=""
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!val) return;
                    if (!customSubjects.includes(val)) {
                      setCustomSubjects(prev => [...prev, val]);
                    }
                    e.target.value = '';
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-sky-300 text-xs bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                >
                  <option value="" disabled>-- Select a subject to add --</option>
                  {CUSTOM_SUBJECTS_LIST.map((item) => (
                    <option key={item.id} value={`${item.subject} - ${item.teacher}`}>
                      + {item.subject} ({item.teacher})
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Subject Chips */}
              {customSubjects.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {customSubjects.map((sub, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-[11px] font-semibold bg-white border border-sky-300 text-sky-950 px-2.5 py-1 rounded-lg shadow-xs"
                    >
                      <span>{sub}</span>
                      <button
                        type="button"
                        onClick={() => setCustomSubjects(prev => prev.filter(s => s !== sub))}
                        className="ml-1.5 text-sky-500 hover:text-red-600 font-extrabold text-xs cursor-pointer p-0.5"
                        title="Remove subject"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[11px] text-amber-800 bg-amber-100/80 px-2.5 py-1.5 rounded-lg border border-amber-300 font-medium">
                  Please select at least one subject below.
                </p>
              )}

              {/* Clean, Fully Visible & Scrollable Checkboxes List */}
              <div>
                <span className="text-[11px] font-bold text-sky-950 block mb-1">
                  Or select via Checkboxes:
                </span>
                <div className="max-h-56 sm:max-h-60 overflow-y-auto space-y-1.5 pr-1 overscroll-contain">
                  {CUSTOM_SUBJECTS_LIST.map((item) => {
                    const itemString = `${item.subject} - ${item.teacher}`;
                    const isChecked = customSubjects.includes(itemString);
                    return (
                      <label
                        key={item.id}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition select-none ${
                          isChecked
                            ? 'bg-white border-sky-500 text-sky-950 font-semibold shadow-xs ring-1 ring-sky-400'
                            : 'bg-white/90 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 min-w-0 pr-2">
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
                            className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 block truncate">
                              {item.subject}
                            </span>
                            <span className="text-[11px] text-slate-500 block truncate">
                              Faculty: {item.teacher}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          isChecked ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {isChecked ? 'Selected' : 'Add'}
                        </span>
                      </label>
                    );
                  })}
                </div>
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

          {/* Action Button */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm shadow-lg shadow-red-950/20 transition-all flex items-center justify-center space-x-2 cursor-pointer btn-shimmer hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>{isSubmitting ? 'Confirming Trial Class...' : 'Book Your Free Trial Class'}</span>
              <ArrowRight className="w-4 h-4 animate-bounce-gentle" />
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                100% Free Trial
              </span>
              <span className="flex items-center">
                <Phone className="w-3 h-3 text-sky-600 mr-1" />
                Instant SMS / WhatsApp confirmation
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
