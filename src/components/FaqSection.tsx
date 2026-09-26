import React, { useState } from 'react';
import { FAQS_DATA } from '../data/coachingData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            Questions & Answers
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Key details for parents and students considering admissions at Classes of Academia.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-sky-700 transition cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="p-1 rounded-lg bg-slate-200/60 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
