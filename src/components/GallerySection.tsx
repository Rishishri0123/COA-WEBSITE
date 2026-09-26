import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Eye, 
  BookOpen, 
  Users, 
  Sparkles, 
  Award, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Maximize2 
} from 'lucide-react';

// Enhanced and curated authentic images
import exteriorFacadeImg from '../assets/images/coa_building_original_1790049920564.jpg';
import campusEntranceImg from '../assets/images/coa_entrance_original_1790049940418.jpg';
import classroomImg from '../assets/images/coa_modern_classroom_1789837499314.jpg';
import facultyTeachingImg from '../assets/images/coa_faculty_teaching_1790049262172.jpg';
import notesCompendiumImg from '../assets/images/coa_notes_compendium_1790049235788.jpg';
import toppersImg from '../assets/images/coa_student_toppers_1789837518364.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'classroom' | 'faculty' | 'notes' | 'students';
  categoryLabel: string;
  image: string;
  caption: string;
  location: string;
  highlights: string[];
  isEnhanced?: boolean;
}

interface GallerySectionProps {
  onOpenDemoModal?: (courseTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenDemoModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'campus-facade',
      title: 'Main Campus Building Exterior — D-32 Shastri Nagar',
      category: 'campus',
      categoryLabel: 'Campus & Exterior',
      image: exteriorFacadeImg,
      caption: 'Prominent educational building at D-32 Shastri Nagar featuring dedicated department signage for Science (Physics, Chemistry, Maths) and Commerce (CUET & CA Foundation).',
      location: 'D-32, Shastri Nagar, Ghaziabad',
      highlights: [
        'Authentic coaching building at D-32 Shastri Nagar',
        'Official signage with direct teacher phone numbers',
        'Convenient parking and prime road connectivity'
      ],
      isEnhanced: true
    },
    {
      id: 'campus-entrance',
      title: 'Welcoming Ground-Floor Entrance & Wayfinding Signage',
      category: 'campus',
      categoryLabel: 'Campus & Exterior',
      image: campusEntranceImg,
      caption: 'Clean, well-lit reception pathway and gate featuring Classes of Academia guidance banners pointing directly to our dedicated Science and Commerce lecture halls.',
      location: 'D-32, Shastri Nagar, Ghaziabad',
      highlights: [
        'Authentic ground entrance gate with directional signs',
        'Clear directional arrows for Science & Commerce wings',
        'Secure and welcoming campus atmosphere'
      ],
      isEnhanced: true
    },
    {
      id: 'curated-notes',
      title: 'Best Master Notes Throughout Books with Practice Questions',
      category: 'notes',
      categoryLabel: 'Curated Multi-Book Notes',
      image: notesCompendiumImg,
      caption: 'We offer the best curated notes compiled throughout leading reference books (NCERT, HC Verma, SL Arora, OP Tandon, RD Sharma, TS Grewal) with comprehensive practice questions, formula sheets, and step-by-step solutions.',
      location: 'Available across all batches at Shastri & Vivekanand Nagar',
      highlights: [
        'Best notes compiled throughout leading reference books',
        'Comprehensive practice questions with 15+ years solved papers',
        'Step-by-step derivations, shortcuts & chapter formula booklets'
      ]
    },
    {
      id: 'modern-classroom',
      title: 'Air-Conditioned Smart Classrooms (15–25 Students Max)',
      category: 'classroom',
      categoryLabel: 'Classrooms & Labs',
      image: classroomImg,
      caption: 'Focused learning atmosphere with comfortable individual desk spacing, glare-free presentation boards, and dual split ACs for prolonged academic stamina.',
      location: 'Shastri Nagar & Vivekanand Nagar Centers',
      highlights: [
        'Strict batch caps (15–25 students) for individual focus',
        'Crystal-clear whiteboard and audio acoustics',
        'Distraction-free environment for deep problem solving'
      ]
    },
    {
      id: 'faculty-mentorship',
      title: 'Senior Faculty Teaching & Conceptual Problem Solving',
      category: 'faculty',
      categoryLabel: 'Faculty Mentorship',
      image: facultyTeachingImg,
      caption: 'Live classroom instruction by our senior HODs (15+ years experience) deconstructing complex Physics formulas, Organic mechanisms, and Calculus theorems.',
      location: 'Senior Secondary Lecture Halls',
      highlights: [
        'HODs teach every lecture personally — no junior proxies',
        'Step-by-step NCERT & JEE numerical deconstruction',
        'Daily 1-on-1 doubt clearing after class'
      ]
    },
    {
      id: 'student-toppers',
      title: 'Student Achievers & High-Performance Culture',
      category: 'students',
      categoryLabel: 'Students & Achievers',
      image: toppersImg,
      caption: 'Celebrating our top scorers in CBSE 12th Boards (98.2%), JEE Main (99.1 Percentile), and first-attempt CA Foundation clears from Ghaziabad.',
      location: 'Annual Academic Honors & Mentorship Sessions',
      highlights: [
        '2–3 Monthly progress tests keep students at peak readiness',
        'Personalized error logbooks and parent reports',
        'Proven track record of city top ranks'
      ]
    },
    {
      id: 'doubt-cubicle',
      title: 'Dedicated 1-on-1 Doubt Resolution Desk',
      category: 'faculty',
      categoryLabel: 'Faculty Mentorship',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
      caption: 'Personal consultation desks where students sit side-by-side with subject teachers to resolve tough questions, review homework, and analyze monthly progress test papers.',
      location: 'Both Shastri Nagar & Vivekanand Nagar Centers',
      highlights: [
        'Open daily during visiting hours (4:00 PM – 7:30 PM)',
        'Zero hesitation policy — every doubt is treated with patience',
        'Tailored guidance on time management and speed'
      ]
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const selectedPhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-100 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center">
            <Camera className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
            Photo Gallery & Campus Atmosphere
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Take a Look Inside Classes of Academia
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore authentic photos of our physical campus, welcoming entrance, modern classrooms, senior faculty mentorship, and our famous multi-book curated master notes.
          </p>
        </div>

        {/* Feature Callout Box: Best Curated Notes Throughout Leading Books with Practice Questions */}
        <div className="mb-12 bg-gradient-to-r from-amber-50 via-white to-sky-50 border border-amber-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Academic Excellence: Curated Master Notes</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                We Offer the <span className="text-sky-700">Best Curated Notes</span> Throughout Leading Books with Practice Questions!
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Our senior faculty (15+ years experience) has <strong>personally synthesized and curated the best material from across 5+ top reference books per subject</strong> (NCERT, HC Verma, SL Arora, OP Tandon, RD Sharma, TS Grewal, and past 15 years’ CBSE/JEE question papers), integrating high-yield conceptual explanations with exhaustive chapter-wise practice questions and step-by-step solutions.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">Zero Heavy Books</strong>
                    <span className="text-slate-600">All high-yield theory & formulas in one booklet</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">15+ Yrs Solved Banks</strong>
                    <span className="text-slate-600">Categorized by difficulty & recurring patterns</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-semibold">Time-Saving Clarity</strong>
                    <span className="text-slate-600">Focus on problem-solving, not book hunting</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-2xl p-5 border border-amber-200 shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fast Campus Facts</div>
                <div className="mt-3 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Visiting Hours:</strong> 4:00 PM – 7:30 PM (Mon–Sat)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Sunday:</strong> Classes held during exam periods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                    <span><strong>Monthly Tests:</strong> 2–3 Progress tests every month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Helpline:</strong> +91 88000 20688</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenDemoModal ? onOpenDemoModal('Curated Study Notes Walkthrough') : null}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-700 text-white font-bold text-xs transition-all shadow-xs cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                  <span>Inspect Notes in Person (Free Demo)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Photos', count: galleryItems.length },
            { id: 'campus', label: 'Campus & Exterior', count: galleryItems.filter(i => i.category === 'campus').length },
            { id: 'classroom', label: 'Classrooms & Labs', count: galleryItems.filter(i => i.category === 'classroom').length },
            { id: 'faculty', label: 'Faculty Mentorship', count: galleryItems.filter(i => i.category === 'faculty').length },
            { id: 'notes', label: 'Curated Multi-Book Notes', count: galleryItems.filter(i => i.category === 'notes').length },
            { id: 'students', label: 'Students & Achievers', count: galleryItems.filter(i => i.category === 'students').length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Frame with Badge */}
              <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white">
                    {item.categoryLabel}
                  </span>
                  {item.isEnhanced && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md bg-amber-500 text-slate-950 flex items-center shadow-xs">
                      <Sparkles className="w-2.5 h-2.5 mr-1" />
                      Campus Photo
                    </span>
                  )}
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center space-x-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>View Full Photo</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-[11px] text-slate-500 mb-1.5">
                    <MapPin className="w-3 h-3 text-sky-600 mr-1 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-sky-700 font-semibold flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    Click to enlarge
                  </span>
                  <span className="text-slate-400">COA Archive</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-slate-900 text-base">
              Want to see the physical classrooms and review the study notes in person?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Parents and students are welcome during visiting hours: <strong>4:00 PM – 7:30 PM (Monday through Saturday)</strong> at D-32 Shastri Nagar or Vivekanand Nagar.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <button
              onClick={() => onOpenDemoModal ? onOpenDemoModal('Campus Walkthrough Visit') : null}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              Book In-Person Visit / 2-Day Trial
            </button>
            <a
              href="https://wa.me/918800020688?text=Hello%2C%20I%20would%20like%20to%20visit%20Classes%20of%20Academia%20campus%20and%20inspect%20the%20study%20notes"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-bold text-xs flex items-center space-x-1.5 transition-all"
            >
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                  {selectedPhoto.categoryLabel}
                </span>
                {selectedPhoto.isEnhanced && (
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-amber-600" />
                    Actual Campus Photo
                  </span>
                )}
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Photo {selectedPhotoIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close photo modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area with Navigation Buttons */}
            <div className="relative bg-slate-950 flex items-center justify-center max-h-[58vh] overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[58vh] w-auto object-contain mx-auto"
              />

              {/* Prev Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-3 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                  {selectedPhoto.title}
                </h3>
                <div className="text-xs text-sky-700 font-semibold flex items-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  {selectedPhoto.location}
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {selectedPhoto.caption}
              </p>

              {/* Highlights */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Key Atmosphere Highlights
                </div>
                <div className="grid sm:grid-cols-3 gap-2">
                  {selectedPhoto.highlights.map((h, i) => (
                    <div key={i} className="text-xs bg-slate-50 border border-slate-100 p-2 rounded-lg text-slate-700 flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  Visiting Hours: <strong className="text-slate-800">4:00 PM – 7:30 PM (Mon–Sat)</strong> • Closed Sundays (except during exams)
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedPhotoIndex(null);
                      if (onOpenDemoModal) onOpenDemoModal(selectedPhoto.title);
                    }}
                    className="py-2 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Book Free 2-Day Trial
                  </button>
                  <a
                    href="tel:8800020688"
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-600 mr-1" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
