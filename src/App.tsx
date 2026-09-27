import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SubjectWiseSection } from './components/SubjectWiseSection';
import { BatchPlannerCalculator } from './components/BatchPlannerCalculator';
import { CoursesSection } from './components/CoursesSection';
import { FacultySection } from './components/FacultySection';
import { BestCoachingSeoSection } from './components/BestCoachingSeoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CampusTourSection } from './components/CampusTourSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { StudentProgressSection } from './components/StudentProgressSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AiChatbot } from './components/AiChatbot';
import { DemoBookingModal } from './components/DemoBookingModal';
import { SuccessModal } from './components/SuccessModal';
import { AdminPortal } from './components/AdminPortal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedStudentName, setSubmittedStudentName] = useState('');
  const [submittedCourse, setSubmittedCourse] = useState('');
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);

  // Check direct URL route for /admin, #admin, or ?admin=true
  React.useEffect(() => {
    const checkAdminRoute = () => {
      const isPathAdmin = window.location.pathname === '/admin' || window.location.pathname === '/admin/';
      const isHashAdmin = window.location.hash === '#admin' || window.location.hash === '#/admin';
      const isSearchAdmin = new URLSearchParams(window.location.search).get('admin') === 'true';

      if (isPathAdmin || isHashAdmin || isSearchAdmin) {
        setIsAdminPortalOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);

    // Discrete developer & director key combo (Ctrl+Shift+A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminPortalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseAdminPortal = () => {
    setIsAdminPortalOpen(false);
    // If currently on /admin path or #admin hash, quietly reset to / without reloading
    if (window.location.pathname === '/admin' || window.location.pathname === '/admin/') {
      window.history.pushState(null, '', '/');
    } else if (window.location.hash === '#admin' || window.location.hash === '#/admin') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  // Track real visitor session on mount
  React.useEffect(() => {
    if (!sessionStorage.getItem('coa_visit_recorded')) {
      fetch('/api/track-visit', { method: 'POST' })
        .then(() => sessionStorage.setItem('coa_visit_recorded', 'true'))
        .catch(() => {});
    }
  }, []);

  const handleOpenDemoModal = (courseTitle?: string) => {
    setSelectedCourseForModal(courseTitle);
    setIsDemoModalOpen(true);
  };

  const handleSuccessSubmit = async (
    studentName: string,
    courseTitle: string,
    phone?: string,
    campus?: string,
    notes?: string
  ) => {
    setSubmittedStudentName(studentName);
    setSubmittedCourse(courseTitle);
    setIsSuccessModalOpen(true);

    const newEntry = {
      id: `inq-${Date.now().toString().slice(-6)}`,
      studentName: studentName || 'Prospective Student',
      phone: phone || 'Not Provided',
      subject: courseTitle || 'Individual Subject Trial',
      studentClass: 'Registered Online',
      campus: campus || 'Shastri Nagar (D-Block)',
      status: 'Pending Callback' as const,
      notes: notes || 'Submitted via Free Trial / Inquiry form on the website.',
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };

    // 1. Post to Server API (persists in backend store for real admin access on any device)
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
    } catch (err) {
      console.warn('Backend sync error, saving to local store:', err);
    }

    // 2. Also persist in localStorage for instant offline access
    try {
      const existing = localStorage.getItem('coa_inquiries_db');
      const list = existing ? JSON.parse(existing) : [];
      localStorage.setItem('coa_inquiries_db', JSON.stringify([newEntry, ...list]));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-sky-600 selection:text-white">
      {/* Top Navigation - Completely hidden from admin portal links */}
      <Navbar
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onSuccessSubmit={handleSuccessSubmit} />
        <AboutSection />
        <SubjectWiseSection onSelectSubjectForDemo={handleOpenDemoModal} />
        <BatchPlannerCalculator onOpenDemoModal={handleOpenDemoModal} />
        <CoursesSection onSelectCourseForDemo={handleOpenDemoModal} />
        <FacultySection onOpenConsultationModal={handleOpenDemoModal} />
        <BestCoachingSeoSection onOpenDemoModal={() => handleOpenDemoModal()} />
        <TestimonialsSection />
        <CampusTourSection />
        <GallerySection onOpenDemoModal={handleOpenDemoModal} />
        <WhyUsSection />
        <StudentProgressSection onOpenDemoModal={() => handleOpenDemoModal()} />
        <GoogleMapsSection />
        <ContactSection onSuccessSubmit={handleSuccessSubmit} prefilledCourse={selectedCourseForModal} />
        <FaqSection />
      </main>

      {/* Footer - No visible admin portal buttons */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp, Call, Back to Top) */}
      <FloatingActions onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* Official AI Chatbot (Knows all website information & creator Rishi Shrivastav) */}
      <AiChatbot onOpenDemoModal={handleOpenDemoModal} />

      {/* Interactive Free Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourse={selectedCourseForModal}
        onSuccess={handleSuccessSubmit}
      />

      {/* Positive Confirmation Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        studentName={submittedStudentName}
        courseTitle={submittedCourse}
      />

      {/* Protected Admin Portal - Accessible exclusively via direct URL (/admin, #admin) */}
      <AdminPortal
        isOpen={isAdminPortalOpen}
        onClose={handleCloseAdminPortal}
      />
    </div>
  );
}
