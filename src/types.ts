export interface Course {
  id: string;
  title: string;
  grade: string;
  category: 'science' | 'commerce' | 'professional' | 'foundation';
  description: string;
  features: string[];
  subjects: string[];
  facultyInCharge: string;
  contactNumber: string;
  popular?: boolean;
}

export interface SubjectDepartment {
  id: string;
  subject: string;
  tagline: string;
  headFaculty: string;
  qualification: string;
  experience: string;
  grades: string;
  syllabusHighlights: string[];
  keyModules: string[];
  pedagogyPillars: string[];
  badgeColor: string;
  accentColor: string;
  teacherPhone?: string;
  teacherRawPhone?: string;
  teacherWhatsappUrl?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subject: string;
  qualification: string;
  experience: string;
  phone: string;
  rawPhone?: string;
  whatsappUrl?: string;
  specialization: string;
  bio: string;
  image?: string;
  badges: string[];
}

export interface Testimonial {
  id: string;
  studentName: string;
  exam: string;
  score: string;
  schoolOrCollege: string;
  branch: 'Shastri Nagar' | 'Vivekanand Nagar';
  quote: string;
  year: string;
  stream: 'Science' | 'Commerce' | 'Professional';
}

export interface BranchInfo {
  id: string;
  name: string;
  type: 'Main Branch' | '2nd Branch';
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  timings: string;
  visitingHours?: string;
  sundayPolicy?: string;
  primaryPhone: string;
  mapEmbedQuery: string;
  googleMapsUrl?: string;
  directionsUrl?: string;
  metroStation?: string;
  features: string[];
}

export interface InquiryFormData {
  studentName: string;
  parentName?: string;
  phone: string;
  email?: string;
  selectedBranch: string;
  targetClass: string;
  stream: string;
  message?: string;
}
