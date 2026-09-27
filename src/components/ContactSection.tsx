import React, { useState } from 'react';
import { BRANCHES_DATA, DIRECT_CONTACTS } from '../data/coachingData';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, Send, Building2, ExternalLink, ShieldCheck, Lock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onSuccessSubmit: (studentName: string, selectedGrade: string, phone?: string, campus?: string, notes?: string) => void;
  prefilledCourse?: string;
}

const CUSTOM_SUBJECTS_OPTIONS = [
  { id: 'custom-phy', subject: 'Physics', teacher: 'Mr. Arvind Kashyap' },
  { id: 'custom-chem', subject: 'Chemistry', teacher: 'Mr. Mukesh Saraswat' },
  { id: 'custom-math', subject: 'Mathematics', teacher: 'Mr. Shiv Shankar Sharma' },
  { id: 'custom-comm', subject: 'Commerce & Accounts', teacher: 'Mr. Ravi Yadav' },
  { id: 'custom-eco', subject: 'Economics & Business Studies', teacher: 'Mr. Ravi Yadav' },
  { id: 'custom-found', subject: 'Class 9/10 Foundation (Science & Maths)', teacher: 'Faculty Team' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessSubmit, prefilledCourse }) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('shastri-nagar');

  // Form states
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('Main Campus');
  const [targetClass, setTargetClass] = useState(prefilledCourse || 'Individual Physics (Mr. Arvind Kashyap)');
  const [customSelectedSubjects, setCustomSelectedSubjects] = useState<string[]>([
    'Physics - Mr. Arvind Kashyap',
    'Mathematics - Mr. Shiv Shankar Sharma'
  ]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedBranchData = BRANCHES_DATA.find((b) => b.id === activeBranchId) || BRANCHES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const finalCourse = targetClass === 'Custom Subject Combination' && customSelectedSubjects.length > 0
      ? `Custom Combination: ${customSelectedSubjects.join(', ')}`
      : targetClass;
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessSubmit(studentName, finalCourse, phone, selectedBranch, message || 'Submitted via Contact Page Inquiry Form');
      setStudentName('');
      setPhone('');
      setMessage('');
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-100/70 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
            Admissions & Locations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Visit Our Ghaziabad Campuses or Inquire Online
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Walk into our Main Campus or 2nd Campus to meet our faculty, collect syllabus modules, and schedule free trial sessions. (Complete physical addresses and navigation are available in the Maps section above).
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campus Details & Direct Phone Numbers */}
          <div className="lg:col-span-6 space-y-6">
            {/* Campus Tab Switcher */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 flex items-center">
                  <Building2 className="w-5 h-5 text-sky-600 mr-2" />
                  Our Coaching Campuses
                </h3>
                <span className="text-xs text-slate-400 font-medium">Select Campus:</span>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl">
                {BRANCHES_DATA.map((branch) => {
                  const isActive = activeBranchId === branch.id;
                  return (
                    <button
                      key={branch.id}
                      onClick={() => setActiveBranchId(branch.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                        isActive
                          ? 'bg-white text-sky-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span className="block">{branch.name.replace(' Campus', '')}</span>
                      <span className={`text-[10px] font-semibold ${isActive ? 'text-sky-600' : 'text-slate-400'}`}>
                        {branch.type}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Campus Details Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 mb-1">
                      {selectedBranchData.type}
                    </span>
                    <h4 className="font-heading font-extrabold text-base text-slate-900">
                      {selectedBranchData.name}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <a
                      href={selectedBranchData.directionsUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedBranchData.address + ', ' + selectedBranchData.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 px-2.5 py-1.5 rounded-lg shadow-2xs"
                    >
                      <span>Directions</span>
                    </a>
                    <a
                      href={selectedBranchData.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranchData.address + ', ' + selectedBranchData.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-sky-700 hover:text-sky-900 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="text-xs text-slate-700 space-y-1">
                  <div className="flex items-start">
                    <MapPin className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{selectedBranchData.name}</span>
                      <div className="text-slate-500">Official Campus Location in Ghaziabad</div>
                      <a href="#google-maps-location" className="text-sky-700 hover:text-sky-900 font-bold inline-flex items-center text-[11px] mt-0.5">
                        <MapPin className="w-3 h-3 mr-1 text-red-500" />
                        View Exact Address & Driving Route in Maps Section Above
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Visiting Hours: <span className="text-sky-700 font-bold">4:00 PM – 7:30 PM</span> (Mon–Sat)
                      </div>
                      <div className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200/60 rounded px-1.5 py-0.5 mt-0.5 inline-block">
                        <strong>Sunday Policy:</strong> Closed on Sundays (Classes held on Sundays during exam periods)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Features */}
                <div className="pt-2 border-t border-slate-200/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                    Campus Facilities:
                  </span>
                  <ul className="grid sm:grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                    {selectedBranchData.features.map((feat, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mr-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map embed view */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-44 w-full bg-slate-100 relative">
                <iframe
                  title={`${selectedBranchData.name} Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    selectedBranchData.mapEmbedQuery || `Classes of Academia, ${selectedBranchData.name}, ${selectedBranchData.city}`
                  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>

            {/* Central Helpline & Subject Faculty Coordination Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center">
                  <Phone className="w-4 h-4 text-emerald-600 mr-2" />
                  Central Admissions & Academic Helpline
                </h3>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Direct Line
                </span>
              </div>

              {/* Single Helpline Main Highlight Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                      Admissions Helpline & Counseling Desk
                    </span>
                    <div className="text-lg sm:text-xl font-extrabold tracking-tight text-white mt-0.5">
                      Direct Academic Helpline
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      Tap Call or WhatsApp below to connect with our counseling desk
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href="tel:8800020688"
                      className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition"
                      title="Call Helpline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20want%20to%20inquire%20about%20admissions%20and%20courses."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm transition"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Teacher Contact Policy Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="flex items-center">
                    <Lock className="w-3.5 h-3.5 mr-1.5 text-sky-700" />
                    Looking for Teacher's Direct Phone Number?
                  </span>
                  <span className="text-[10px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">
                    Provided on Form Fill
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  To protect faculty members' continuous lecture schedule and student focus, individual teacher direct phone numbers are provided immediately once you submit the trial booking form on the right.
                </p>
                <div className="flex items-center space-x-2 pt-1 text-[11px] text-sky-800 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Physics (AK Sir), Chemistry (MS Sir), Maths (SS Sir) & Commerce (RY Sir) numbers provided on submission.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enrollment & Demo Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg relative">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-50 text-red-700 border border-red-200 inline-block mb-2">
                  Admissions Open 2026-27
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  Online Inquiry & Free Trial Registration
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details to book your 2-Day Free Trial Class and instantly receive our teachers' direct contact details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter student name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Student Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number (e.g. 9876543210)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50/50"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Course / Grade *
                    </label>
                    <select
                      value={targetClass}
                      onChange={(e) => setTargetClass(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                    >
                      <option value="Class 11th - Individual Physics (Mr. Arvind Kashyap)">Class 11th - Physics (Mr. Arvind Kashyap)</option>
                      <option value="Class 11th - Individual Chemistry (Mr. Mukesh Saraswat)">Class 11th - Chemistry (Mr. Mukesh Saraswat)</option>
                      <option value="Class 11th - Individual Mathematics (Mr. Shiv Shankar Sharma)">Class 11th - Maths (Mr. Shiv Shankar Sharma)</option>
                      <option value="Class 12th - Individual Physics (Mr. Arvind Kashyap)">Class 12th - Physics (Mr. Arvind Kashyap)</option>
                      <option value="Class 12th - Individual Chemistry (Mr. Mukesh Saraswat)">Class 12th - Chemistry (Mr. Mukesh Saraswat)</option>
                      <option value="Class 12th - Individual Mathematics (Mr. Shiv Shankar Sharma)">Class 12th - Maths (Mr. Shiv Shankar Sharma)</option>
                      <option value="Class 11th - Commerce & Accounts (Mr. Ravi Yadav)">Class 11th - Commerce (Mr. Ravi Yadav)</option>
                      <option value="Class 12th - Commerce & Accounts (Mr. Ravi Yadav)">Class 12th - Commerce (Mr. Ravi Yadav)</option>
                      <option value="CA Foundation / CSEET / CMA (Mr. Ravi Yadav)">CA Foundation / Professional (Mr. Ravi Yadav)</option>
                      <option value="JEE Main & Advanced Subject Prep">JEE Main & Advanced Subject Prep</option>
                      <option value="CUET (UG) Target Subject Prep">CUET (UG) Subject Prep</option>
                      <option value="Class 9th & 10th Foundation (Science / Maths)">Class 9th & 10th Foundation</option>
                      <option value="Custom Subject Combination">Custom Subject Combination (Choose Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Campus *
                    </label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                    >
                      <option value="Main Campus">Main Campus (Head Center)</option>
                      <option value="2nd Campus">2nd Campus (Branch)</option>
                      <option value="Either Campus (Flexible)">Either Campus (Flexible)</option>
                    </select>
                  </div>
                </div>

                {/* Custom Subjects Selection: Dropdown + Checkboxes */}
                {targetClass === 'Custom Subject Combination' && (
                  <div className="p-4 bg-sky-50/90 border-2 border-sky-300 rounded-2xl space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-1.5 border-b border-sky-200">
                      <div>
                        <span className="text-xs font-extrabold text-sky-950 uppercase tracking-wider block">
                          Custom Subject Selection
                        </span>
                        <span className="text-[11px] text-sky-700">
                          Select from the dropdown or toggle checkboxes below
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-sky-800 bg-sky-200/80 px-2.5 py-1 rounded-full shrink-0">
                        {customSelectedSubjects.length} Selected
                      </span>
                    </div>

                    {/* Dropdown to select custom subject or preset combo */}
                    <div>
                      <label className="block text-xs font-bold text-sky-950 mb-1">
                        Select Custom Subject from Dropdown:
                      </label>
                      <select
                        onChange={(e) => {
                          const val = e.target.value;
                          if (!val) return;
                          if (val === 'ALL_SCIENCE') {
                            const scienceSubs = [
                              'Physics - Mr. Arvind Kashyap',
                              'Chemistry - Mr. Mukesh Saraswat',
                              'Mathematics - Mr. Shiv Shankar Sharma'
                            ];
                            setCustomSelectedSubjects(Array.from(new Set([...customSelectedSubjects, ...scienceSubs])));
                          } else if (val === 'PHY_CHEM') {
                            setCustomSelectedSubjects(Array.from(new Set([...customSelectedSubjects, 'Physics - Mr. Arvind Kashyap', 'Chemistry - Mr. Mukesh Saraswat'])));
                          } else if (val === 'PHY_MATH') {
                            setCustomSelectedSubjects(Array.from(new Set([...customSelectedSubjects, 'Physics - Mr. Arvind Kashyap', 'Mathematics - Mr. Shiv Shankar Sharma'])));
                          } else if (val === 'CHEM_MATH') {
                            setCustomSelectedSubjects(Array.from(new Set([...customSelectedSubjects, 'Chemistry - Mr. Mukesh Saraswat', 'Mathematics - Mr. Shiv Shankar Sharma'])));
                          } else if (val === 'COMM_ECO') {
                            setCustomSelectedSubjects(Array.from(new Set([...customSelectedSubjects, 'Commerce & Accounts - Mr. Ravi Yadav', 'Economics & Business Studies - Mr. Ravi Yadav'])));
                          } else if (val === 'CLEAR_ALL') {
                            setCustomSelectedSubjects([]);
                          } else {
                            if (!customSelectedSubjects.includes(val)) {
                              setCustomSelectedSubjects(prev => [...prev, val]);
                            }
                          }
                          e.target.value = '';
                        }}
                        defaultValue=""
                        className="w-full px-3 py-2.5 rounded-xl border border-sky-300 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white text-slate-800"
                      >
                        <option value="" disabled>-- Click Dropdown to Select a Custom Subject --</option>
                        <optgroup label="Select Individual Subject">
                          {CUSTOM_SUBJECTS_OPTIONS.map((item) => (
                            <option key={item.id} value={`${item.subject} - ${item.teacher}`}>
                              + Add {item.subject} ({item.teacher})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Popular Custom Subject Combos">
                          <option value="ALL_SCIENCE">+ Add All 3 (Physics + Chemistry + Mathematics)</option>
                          <option value="PHY_CHEM">+ Add Combo: Physics + Chemistry</option>
                          <option value="PHY_MATH">+ Add Combo: Physics + Mathematics</option>
                          <option value="CHEM_MATH">+ Add Combo: Chemistry + Mathematics</option>
                          <option value="COMM_ECO">+ Add Combo: Commerce, Accounts & Economics</option>
                        </optgroup>
                        {customSelectedSubjects.length > 0 && (
                          <optgroup label="Manage Selection">
                            <option value="CLEAR_ALL">✕ Clear All Selected Subjects</option>
                          </optgroup>
                        )}
                      </select>
                    </div>

                    {/* Selected subjects tags */}
                    {customSelectedSubjects.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {customSelectedSubjects.map((sub, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center text-xs font-semibold bg-white border border-sky-300 text-sky-900 px-2.5 py-1 rounded-lg shadow-2xs"
                          >
                            <span>{sub}</span>
                            <button
                              type="button"
                              onClick={() => setCustomSelectedSubjects(prev => prev.filter(s => s !== sub))}
                              className="ml-1.5 text-sky-500 hover:text-red-600 font-bold cursor-pointer"
                              title="Remove"
                            >
                              ✕
                            </button>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Checkboxes List: "Checkbox - Subject Name - Teacher's Name" */}
                    <div className="pt-1">
                      <span className="text-[11px] font-bold text-slate-700 block mb-1.5">
                        Or toggle via Subject Checkboxes:
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {CUSTOM_SUBJECTS_OPTIONS.map((item) => {
                          const itemString = `${item.subject} - ${item.teacher}`;
                          const isChecked = customSelectedSubjects.includes(itemString);
                          return (
                            <label
                              key={item.id}
                              className={`flex items-start space-x-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition select-none ${
                                isChecked
                                  ? 'bg-white border-sky-500 text-sky-950 shadow-xs ring-1 ring-sky-400 font-semibold'
                                  : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {
                                  if (isChecked) {
                                    setCustomSelectedSubjects((prev) => prev.filter((s) => s !== itemString));
                                  } else {
                                    setCustomSelectedSubjects((prev) => [...prev, itemString]);
                                  }
                                }}
                                className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 mt-0.5 cursor-pointer"
                              />
                              <span className="text-slate-800 leading-tight">
                                Checkbox - {item.subject} - {item.teacher}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {customSelectedSubjects.length === 0 && (
                      <p className="text-[11px] text-amber-800 bg-amber-100/70 p-2 rounded-lg font-medium border border-amber-300">
                        Please select at least one subject using the dropdown or checkboxes above.
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Queries / Preferred Batch Time (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="E.g., Inquiring about morning vs evening batches, school bus timings, or specific subjects..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-slate-50/50"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
                    title="Submit Form to Get Teacher Contacts"
                  >
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit & Receive Teacher Phone Numbers'}</span>
                    <Send className="w-4 h-4 text-emerald-400" />
                  </button>

                  <a
                    href={`https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20am%20inquiring%20about%20admissions%20for%20${encodeURIComponent(
                      targetClass === 'Custom Subject Combination' ? customSelectedSubjects.join(', ') : targetClass
                    )}%20at%20${encodeURIComponent(selectedBranch)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Inquire Instantly via Helpline WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your privacy is protected. Teacher contacts are sent directly after verification.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
