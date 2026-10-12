import React from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Award, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  Users
} from 'lucide-react';
import { MAIN_HELPLINE } from '../data/coachingData';

interface BestCoachingSeoSectionProps {
  onOpenDemoModal: () => void;
}

export const BestCoachingSeoSection: React.FC<BestCoachingSeoSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="best-coaching-ranking" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header with High Search Intent Badges */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>#1 Ranked Coaching Center in Ghaziabad</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Students & Parents Vote Us The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700 dark:from-sky-400 dark:to-blue-500">
              Best Coaching
            </span>{' '}
            in Ghaziabad
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Searching for the <strong className="text-slate-800 dark:text-slate-100">best coaching</strong> for Class 9th, 10th, 11th, 12th (Physics, Chemistry, Maths & Commerce), JEE Main or CA Foundation? Here is how <strong className="text-slate-900 dark:text-white">Classes of Academia</strong> delivers unmatched results across Ghaziabad through individual subject mastery.
          </p>
        </div>

        {/* 4 Core Search Ranking Pillars */}
        <div className="grid md:grid-cols-4 gap-5 mb-14">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
              15+ Years Experienced Faculty
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Separate mentors for each subject: Physics (Arvind Kashyap), Chemistry (Mukesh Saraswat), Mathematics (Shiv S. Sharma), Commerce (Ravi Yadav).
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
              Small Batches (15-25 Students)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Unlike crowded commercial centers with 100+ students per class, every student here gets direct eye contact, questions answered, and personalized mentorship.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
              Individual Subject Freedom
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              We never force bundled PCM packages. Students enroll in individual Physics, Chemistry, Maths, or Commerce classes with dedicated subject HODs.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
              100% Free 2-Day Trial
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Experience the actual teaching methodology before taking admission. Attend 2 full demo lectures with zero registration fee.
            </p>
          </div>
        </div>

        {/* Feature Comparison Table: Classes of Academia vs Others */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden mb-14 transition-colors">
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Comparison Guide</span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mt-1">
                How Classes of Academia Compares to Other Coaching Centers
              </h3>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-medium">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Rated 4.9/5 by 340+ Parents & Toppers</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Coaching Quality Factor</th>
                  <th className="p-4 sm:p-5 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 border-x border-sky-100 dark:border-slate-700">
                    Classes of Academia (COA)
                  </th>
                  <th className="p-4 sm:p-5 text-slate-500 dark:text-slate-400">Typical Generic Coaching</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Faculty Experience</td>
                  <td className="p-4 sm:p-5 bg-sky-50/50 dark:bg-sky-950/30 font-bold text-sky-900 dark:text-sky-200 border-x border-sky-100 dark:border-slate-700 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Permanent 15+ Years Senior Subject Mentors</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Junior or frequently rotating tutors</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Batch Size Limit</td>
                  <td className="p-4 sm:p-5 bg-sky-50/50 dark:bg-sky-950/30 font-bold text-sky-900 dark:text-sky-200 border-x border-sky-100 dark:border-slate-700 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Capped at 15 to 25 students maximum</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>60 to 100+ students packed in halls</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Separate Subject Structure</td>
                  <td className="p-4 sm:p-5 bg-sky-50/50 dark:bg-sky-950/30 font-bold text-sky-900 dark:text-sky-200 border-x border-sky-100 dark:border-slate-700 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Dedicated departments for Physics, Chemistry, Maths, Commerce</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>One teacher handling multiple mixed subjects</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Daily Doubt Resolution</td>
                  <td className="p-4 sm:p-5 bg-sky-50/50 dark:bg-sky-950/30 font-bold text-sky-900 dark:text-sky-200 border-x border-sky-100 dark:border-slate-700 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Personal 1-on-1 daily counter before/after classes</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Only weekly group doubts or self-study apps</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">Direct Academic Helpline</td>
                  <td className="p-4 sm:p-5 bg-sky-50/50 dark:bg-sky-950/30 font-bold text-sky-900 dark:text-sky-200 border-x border-sky-100 dark:border-slate-700 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Direct 1-tap Call & WhatsApp helpline</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Call center IVRs and delayed responses</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Local Areas Served for Local Search SEO */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Prime Locations in Ghaziabad</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                Convenient Coaching for Students Across Ghaziabad
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Students travel easily from Shastri Nagar, Vivekanand Nagar, Kavi Nagar, Raj Nagar, Sanjay Nagar, Govindpuram, Chiranjiv Vihar, Patel Nagar, and nearby CBSE/ICSE schools.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${MAIN_HELPLINE.raw}`}
                className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center space-x-2 transition shadow-md"
                title="Call Central Helpline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Helpline</span>
              </a>

              <a
                href={MAIN_HELPLINE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-2 transition shadow-md"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenDemoModal}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs transition cursor-pointer shadow-md"
                title="Book Your Free Trial Class"
              >
                Book Your Free Trial Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
