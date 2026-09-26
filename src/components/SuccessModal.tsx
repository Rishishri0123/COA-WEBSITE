import React from 'react';
import { CheckCircle2, MessageCircle, Phone, MapPin, X, Sparkles, BookOpen } from 'lucide-react';
import { TEACHER_CONTACTS } from '../data/coachingData';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  courseTitle: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  studentName,
  courseTitle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900">
            Registration Received!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Thank you, <strong className="text-slate-900">{studentName || 'Student'}</strong>. Here are the <strong>verified teacher contact numbers</strong> for your trial class.
          </p>
        </div>

        {/* Unlocked Teacher Contact Cards */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white text-left space-y-3 shadow-md border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Direct Faculty Phone Numbers (Unlocked):
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
              Form Verified
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 text-xs">
            {/* Physics */}
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-sky-300 font-bold uppercase block">Physics HOD</span>
                <span className="font-bold text-white text-xs">{TEACHER_CONTACTS.arvindKashyap.name}</span>
              </div>
              <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/10">
                <a
                  href={`tel:${TEACHER_CONTACTS.arvindKashyap.raw}`}
                  className="font-mono text-emerald-300 font-bold hover:text-white flex items-center text-xs"
                >
                  <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>{TEACHER_CONTACTS.arvindKashyap.phone}</span>
                </a>
              </div>
            </div>

            {/* Chemistry */}
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-purple-300 font-bold uppercase block">Chemistry HOD</span>
                <span className="font-bold text-white text-xs">{TEACHER_CONTACTS.mukeshSaraswat.name}</span>
              </div>
              <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/10">
                <a
                  href={`tel:${TEACHER_CONTACTS.mukeshSaraswat.raw}`}
                  className="font-mono text-emerald-300 font-bold hover:text-white flex items-center text-xs"
                >
                  <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>{TEACHER_CONTACTS.mukeshSaraswat.phone}</span>
                </a>
              </div>
            </div>

            {/* Mathematics */}
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-amber-300 font-bold uppercase block">Mathematics HOD</span>
                <span className="font-bold text-white text-xs">{TEACHER_CONTACTS.shivShankarSharma.name}</span>
              </div>
              <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/10">
                <a
                  href={`tel:${TEACHER_CONTACTS.shivShankarSharma.raw}`}
                  className="font-mono text-emerald-300 font-bold hover:text-white flex items-center text-xs"
                >
                  <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>{TEACHER_CONTACTS.shivShankarSharma.phone}</span>
                </a>
              </div>
            </div>

            {/* Commerce */}
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-rose-300 font-bold uppercase block">Commerce & CA</span>
                <span className="font-bold text-white text-xs">{TEACHER_CONTACTS.raviYadav.name}</span>
              </div>
              <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/10">
                <a
                  href={`tel:${TEACHER_CONTACTS.raviYadav.raw}`}
                  className="font-mono text-emerald-300 font-bold hover:text-white flex items-center text-xs"
                >
                  <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>{TEACHER_CONTACTS.raviYadav.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Center Details */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
          <div className="font-bold text-slate-900 border-b border-slate-200/80 pb-1 flex items-center justify-between">
            <span>Official Center Details:</span>
            <span className="text-sky-700 font-bold text-[10px]">Visiting: 4:00 PM – 7:30 PM (Mon–Sat)</span>
          </div>
          <div className="text-[11px] space-y-1 text-slate-600 pt-0.5">
            <div><strong>Main Campus:</strong> D-Block, Shastri Nagar, Ghaziabad (201002)</div>
            <div><strong>2nd Campus:</strong> Near Community Center, Vivekanand Nagar, Ghaziabad (201001)</div>
            <div><strong>Central Admissions Desk:</strong> +91 88000 20688</div>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <a
            href={`https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20(${encodeURIComponent(
              studentName || 'Student'
            )})%20just%20filled%20the%20form%20for%20${encodeURIComponent(courseTitle || 'Free Demo')}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp for Immediate Confirmation</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
          >
            Close & Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
