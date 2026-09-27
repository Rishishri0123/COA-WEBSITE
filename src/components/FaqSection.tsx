import React, { useState, useMemo } from 'react';
import { FAQS_DATA } from '../data/coachingData';
import { HelpCircle, ChevronDown, ChevronUp, Search, Phone, MessageCircle, X } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'timings', label: 'Timings & Sundays' },
    { id: 'subjects', label: 'Individual Subjects' },
    { id: 'faculty', label: 'Faculty & Mentors' },
    { id: 'tests', label: 'Progress Tests' },
    { id: 'trial', label: 'Free Trial' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq, idx) => {
      const q = faq.question.toLowerCase();
      const a = faq.answer.toLowerCase();
      const search = searchQuery.toLowerCase().trim();

      const matchesSearch = !search || q.includes(search) || a.includes(search);

      let matchesCategory = true;
      if (activeCategory === 'timings') {
        matchesCategory = q.includes('hour') || q.includes('sunday') || q.includes('timing') || a.includes('visiting');
      } else if (activeCategory === 'subjects') {
        matchesCategory = q.includes('subject') || q.includes('pcm') || q.includes('individual');
      } else if (activeCategory === 'faculty') {
        matchesCategory = q.includes('faculty') || q.includes('teacher') || a.includes('arvind') || a.includes('mukesh');
      } else if (activeCategory === 'tests') {
        matchesCategory = q.includes('test') || q.includes('progress') || q.includes('monitor') || a.includes('test');
      } else if (activeCategory === 'trial') {
        matchesCategory = q.includes('demo') || q.includes('trial') || q.includes('batch') || a.includes('trial');
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            Clear Answers for Parents & Students
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Everything you need to know about our individual subject classes, 15+ years experienced faculty, visiting hours, and 2-day free trial.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., 'timings', 'fees', 'progress tests', 'Physics teacher')..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/70 text-slate-800 placeholder-slate-400 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'border-sky-300 bg-white shadow-md shadow-sky-900/5 ring-1 ring-sky-400/20'
                      : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-sky-700 transition cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? 'bg-sky-100 text-sky-700' : 'bg-slate-200/70 text-slate-600'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 text-sm">
              <p>No questions matched your search query "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-2 text-sky-600 font-bold hover:underline cursor-pointer"
              >
                View all questions
              </button>
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="font-heading font-bold text-base sm:text-lg">
              Still have a specific question about your child’s preparation?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Speak directly with our senior counseling staff during visiting hours (4:00 PM – 7:30 PM).
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <a
              href="tel:8800020688"
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs transition flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 88000 20688</span>
            </a>
            <a
              href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20have%20a%20question%20regarding%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition flex items-center space-x-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
