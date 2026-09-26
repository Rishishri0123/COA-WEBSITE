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
  const [branch, setBranch] = useState('Shastri Nagar (D-Block)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(name, course, phone, branch, notes || 'Booked via Free Demo Modal');
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
