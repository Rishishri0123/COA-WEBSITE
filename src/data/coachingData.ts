import { Course, FacultyMember, Testimonial, BranchInfo, SubjectDepartment } from '../types';

export const MAIN_HELPLINE = {
  display: '+91 88000 20688',
  number: '88000 20688',
  raw: '8800020688',
  whatsappUrl: 'https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20want%20to%20inquire%20about%20admissions%20and%20reserve%20a%20seat%20for%20a%20Free%20Demo%20Class.',
};

export const TEACHER_CONTACTS = {
  arvindKashyap: {
    name: 'Mr. Arvind Kashyap',
    subject: 'Physics',
    phone: '+91 9350764376',
    raw: '9350764376',
    whatsappUrl: 'https://wa.me/919350764376?text=Hello%20Arvind%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Physics%20classes%20at%20Classes%20of%20Academia.',
  },
  mukeshSaraswat: {
    name: 'Mr. Mukesh Saraswat',
    subject: 'Chemistry',
    phone: '+91 8383972568',
    raw: '8383972568',
    whatsappUrl: 'https://wa.me/918383972568?text=Hello%20Mukesh%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Chemistry%20classes%20at%20Classes%20of%20Academia.',
  },
  shivShankarSharma: {
    name: 'Mr. Shiv Shankar Sharma',
    subject: 'Mathematics',
    phone: '+91 9910800873',
    raw: '9910800873',
    whatsappUrl: 'https://wa.me/919910800873?text=Hello%20Shiv%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Mathematics%20classes%20at%20Classes%20of%20Academia.',
  },
  raviYadav: {
    name: 'Mr. Ravi Yadav',
    subject: 'Commerce, Accounts & CA',
    phone: '+91 8273230891',
    raw: '8273230891',
    whatsappUrl: 'https://wa.me/918273230891?text=Hello%20Ravi%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Commerce%2FAccounts%2FCA%20classes%20at%20Classes%20of%20Academia.',
  },
};

export const BRANCHES_DATA: BranchInfo[] = [
  {
    id: 'shastri-nagar',
    name: 'Shastri Nagar Campus',
    type: 'Main Branch',
    address: 'D-Block, Shastri Nagar',
    landmark: 'D-Block, Shastri Nagar',
    city: 'Ghaziabad, Uttar Pradesh',
    pincode: '201002',
    timings: 'Visiting Hours: 4:00 PM – 7:30 PM (Monday – Saturday)',
    visitingHours: '4:00 PM – 7:30 PM, Monday through Saturday',
    sundayPolicy: 'Closed on Sundays (Note: Classes will be held on Sundays during exam periods)',
    primaryPhone: '+91 88000 20688',
    mapEmbedQuery: 'Classes+of+Academia,+D-Block,+Shastri+Nagar,+Ghaziabad,+Uttar+Pradesh+201002',
    googleMapsUrl: 'https://maps.app.goo.gl/rHwsf7oZzXfnP93j6',
    directionsUrl: 'https://maps.app.goo.gl/rHwsf7oZzXfnP93j6',
    metroStation: 'Shaheed Sthal (New Bus Adda) Red Line Metro Station (~3.5 km)',
    features: [
      'Visiting Hours: 4:00 PM – 7:30 PM (Mon–Sat)',
      '2–3 Progress Tests Conducted Every Month to Monitor Student Performance',
      'Head Admissions Office & Academic Counseling Cell',
      'Air-Conditioned Smart Audio-Visual Classrooms',
      'Dedicated Physics & Chemistry Concept Labs',
      'Curated Master Notes Synthesized from Many Reference Books (No Heavy Books Needed)'
    ]
  },
  {
    id: 'vivekanand-nagar',
    name: 'Vivekanand Nagar Campus',
    type: '2nd Branch',
    address: 'Near Main Market / Community Center, Vivekanand Nagar',
    landmark: 'Easily accessible from Nehru Nagar, Kavi Nagar & Raj Nagar',
    city: 'Ghaziabad, Uttar Pradesh',
    pincode: '201001',
    timings: 'Visiting Hours: 4:00 PM – 7:30 PM (Monday – Saturday)',
    visitingHours: '4:00 PM – 7:30 PM, Monday through Saturday',
    sundayPolicy: 'Closed on Sundays (Note: Classes will be held on Sundays during exam periods)',
    primaryPhone: '+91 88000 20688',
    mapEmbedQuery: 'Classes+of+Academia,+Vivekanand+Nagar,+Ghaziabad,+Uttar+Pradesh+201001',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Classes+of+Academia,+Vivekanand+Nagar,+Ghaziabad,+Uttar+Pradesh+201001',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Classes+of+Academia,+Vivekanand+Nagar,+Ghaziabad,+Uttar+Pradesh+201001',
    metroStation: 'Old Bus Stand / Shaheed Sthal Metro Station (~2.5 km)',
    features: [
      'Visiting Hours: 4:00 PM – 7:30 PM (Mon–Sat)',
      '2–3 Progress Tests Conducted Every Month with Detailed Reports',
      'Individual Subject Classrooms & Foundation Batches (IX & X)',
      'Commerce & CA Foundation Lecture Halls',
      'Parent-Teacher Mentorship & Progress Lounge'
    ]
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'physics-individual',
    title: 'Individual Physics Classes (XI, XII & JEE)',
    grade: 'Classes XI, XII & Target Batches',
    category: 'science',
    popular: true,
    description: 'Standalone, dedicated Physics mastery under Mr. Arvind Kashyap (15+ yrs exp). Complete CBSE Board derivation rigor, numerical drills & JEE problem-solving shortcuts.',
    subjects: ['Mechanics & Rotational Dynamics', 'Electrodynamics & Current Electricity', 'Optics & Wave Motion', 'Modern Physics & Semiconductors'],
    features: [
      'Step-by-step formula derivations & numerical problem drill',
      'No forced bundle: Take solely Physics or combine with any subject',
      'Regular sample paper solving & error rectification',
      'Daily 1-on-1 doubt clearing slots directly with Mr. Arvind Kashyap'
    ],
    facultyInCharge: 'Mr. Arvind Kashyap (Physics HOD)',
    contactNumber: '+91 88000 20688'
  },
  {
    id: 'chemistry-individual',
    title: 'Individual Chemistry Classes (XI, XII & JEE)',
    grade: 'Classes XI, XII & Target Batches',
    category: 'science',
    popular: true,
    description: 'Standalone, dedicated Chemistry coaching by Mr. Mukesh Saraswat (15+ yrs exp). Systematic organic reaction mechanism maps, physical chemistry calculations & inorganic NCERT mastery.',
    subjects: ['Physical Chemistry (Thermodynamics, Kinetics & Electrochemistry)', 'Organic Chemistry Mechanisms & Conversions', 'Inorganic Chemistry & Coordination Compounds'],
    features: [
      'Zero-rote Organic understanding through step mechanisms',
      'Speed calculation techniques for physical numericals',
      'Full NCERT line-by-line coverage for CBSE 95+ and JEE',
      'Direct personal guidance from Mr. Mukesh Saraswat'
    ],
    facultyInCharge: 'Mr. Mukesh Saraswat (Chemistry HOD)',
    contactNumber: '+91 88000 20688'
  },
  {
    id: 'maths-individual',
    title: 'Individual Mathematics Classes (XI, XII & JEE)',
    grade: 'Classes XI, XII & Target Batches',
    category: 'science',
    popular: true,
    description: 'Standalone, dedicated Mathematics training by Mr. Shiv Shankar Sharma (15+ yrs exp). Eliminates math phobia through intuitive calculus, analytical algebra & board 100/100 presentation.',
    subjects: ['Calculus (Differential & Integral)', 'Vectors & 3D Visual Geometry', 'Algebra, Matrices & Probability', 'Coordinate Geometry & Conic Sections'],
    features: [
      'Elimination of math anxiety through step problem deconstruction',
      'Speed calculus techniques saving 25+ minutes in exams',
      'Systematic progression from NCERT to RD Sharma & JEE level',
      'Direct personal guidance from Mr. Shiv Shankar Sharma'
    ],
    facultyInCharge: 'Mr. Shiv Shankar Sharma (Maths HOD)',
    contactNumber: '+91 88000 20688'
  },
  {
    id: 'commerce-individual',
    title: 'Individual Commerce & Accountancy (XI & XII)',
    grade: 'Classes XI & XII',
    category: 'commerce',
    popular: true,
    description: 'Analytical commerce training mentored by Mr. Ravi Yadav (15+ yrs exp). In-depth mastery of Accountancy, Business Studies, Economics & Applied Mathematics.',
    subjects: ['Accountancy (Partnership, Companies & Cash Flow)', 'Economics (Micro, Macro & Indian Economic Dev)', 'Business Studies & Management Case Studies', 'Applied Mathematics'],
    features: [
      'Step-by-step balance sheet & journal entry precision',
      'Real-world case study presentations & journal drills',
      'CBSE Board answer presentation workshops for 95%+',
      'Direct personal mentorship by Mr. Ravi Yadav'
    ],
    facultyInCharge: 'Mr. Ravi Yadav (Commerce HOD)',
    contactNumber: '+91 88000 20688'
  },
  {
    id: 'professional-ca-cs-cma',
    title: 'Professional CA Foundation & CS / CMA Entrance',
    grade: 'Foundation & Intermediate',
    category: 'professional',
    popular: true,
    description: 'Disciplined professional coaching designed for first-attempt success in CA Foundation, CS Executive Entrance (CSEET), and CMA.',
    subjects: ['Principles & Practice of Accounting', 'Business Laws & Business Correspondence', 'Business Mathematics & Logical Reasoning', 'Business Economics'],
    features: [
      'Comprehensive study notes covering entire ICAI syllabus',
      'Rigorous chapter tests with evaluative feedback',
      'Practical auditing & corporate law case problem drills',
      'Direct personal mentorship by Mr. Ravi Yadav'
    ],
    facultyInCharge: 'Mr. Ravi Yadav & Advisory Panel',
    contactNumber: '+91 88000 20688'
  },
  {
    id: 'secondary-foundation',
    title: 'Secondary Foundation (IX & X Individual Science & Maths)',
    grade: 'Classes IX & X',
    category: 'foundation',
    description: 'Building robust conceptual roots in Mathematics and Science through standalone subject batches before students transition to Class XI.',
    subjects: ['Mathematics (Algebra, Geometry, Trigonometry)', 'Science (Physics & Chemistry Modules)', 'Mental Ability & Olympiad Preparation'],
    features: [
      'Individual subject focus: strong math & science foundations',
      'Taught by senior subject HODs (Mr. Shiv Shankar Sharma & Mr. Arvind Kashyap)',
      'Regular school term & pre-board exam preparation',
      'Seamless foundation for future Science or Commerce careers'
    ],
    facultyInCharge: 'Mr. Shiv Shankar Sharma & Mr. Arvind Kashyap',
    contactNumber: '+91 88000 20688'
  }
];

export const SUBJECTS_DATA: SubjectDepartment[] = [
  {
    id: 'physics',
    subject: 'Physics',
    tagline: 'Conceptual Clarity, Derivation Rigor & Numerical Problem Solving',
    headFaculty: 'Mr. Arvind Kashyap',
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '15+ Years Teaching Experience',
    grades: 'Classes IX, X (Foundation), XI, XII & JEE',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    accentColor: 'from-sky-600 to-blue-700',
    teacherPhone: '+91 9350764376',
    teacherRawPhone: '9350764376',
    teacherWhatsappUrl: 'https://wa.me/919350764376?text=Hello%20Arvind%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Physics%20classes%20at%20Classes%20of%20Academia.',
    keyModules: [
      'Kinematics, Laws of Motion & Work-Energy-Power',
      'Rotational Dynamics, Gravitation & Fluid Mechanics',
      'Electrostatics, Current Electricity & Magnetism',
      'Electromagnetic Induction, Alternating Currents & Wave Optics',
      'Ray Optics, Modern Physics & Semiconductor Devices'
    ],
    syllabusHighlights: [
      'Step-by-step formula derivations and dimensional checks',
      'Numerical drills moving from NCERT exercises to HC Verma & JEE level',
      '2–3 monthly progress tests with detailed error analysis',
      'Demonstration kits for circuits, ray optics, and mechanics'
    ],
    pedagogyPillars: [
      'Mastery over CBSE Board derivations with full presentation marks',
      'Intuitive shortcut tricks for JEE Main & Advanced objective questions',
      'Daily 1-on-1 doubt clearing slots right after lecture'
    ]
  },
  {
    id: 'chemistry',
    subject: 'Chemistry',
    tagline: 'Mechanism Maps, Numerical Precision & Complete Periodic Mastery',
    headFaculty: 'Mr. Mukesh Saraswat',
    qualification: 'M.Sc. Chemistry',
    experience: '15+ Years Teaching Experience',
    grades: 'Classes IX, X (Foundation), XI, XII & JEE',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    accentColor: 'from-purple-600 to-indigo-700',
    teacherPhone: '+91 8383972568',
    teacherRawPhone: '8383972568',
    teacherWhatsappUrl: 'https://wa.me/918383972568?text=Hello%20Mukesh%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Chemistry%20classes%20at%20Classes%20of%20Academia.',
    keyModules: [
      'Physical Chemistry: Solutions, Electrochemistry & Chemical Kinetics',
      'Organic Chemistry: Haloalkanes, Alcohols, Carbonyls & Amines (Mechanisms)',
      'Inorganic Chemistry: Coordination Compounds, d- & f-Block Trends & Metallurgy',
      'Equilibrium, Thermodynamics & Chemical Bonding Mastery',
      'Biomolecules & Everyday Chemistry for full Board marks'
    ],
    syllabusHighlights: [
      'Organic reaction mechanism conversion charts & visual synthesis maps',
      'Formula-based step calculations with unit consistency drills',
      'Line-by-line NCERT Inorganic fact-memorization system',
      'Comprehensive previous 15-year CBSE & JEE solved compilations'
    ],
    pedagogyPillars: [
      'Zero-rote Organic understanding through reaction mechanics',
      'Speed calculation techniques for physical chemistry numericals',
      'Specialized sessions on IUPAC nomenclature and isomerism'
    ]
  },
  {
    id: 'mathematics',
    subject: 'Mathematics',
    tagline: 'Fear-Free Speed Calculation, Calculus Mastery & Analytical Proofs',
    headFaculty: 'Mr. Shiv Shankar Sharma',
    qualification: 'M.Sc. Mathematics',
    experience: '15+ Years Teaching Experience',
    grades: 'Classes IX, X (Foundation), XI, XII & JEE',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    accentColor: 'from-amber-600 to-orange-700',
    teacherPhone: '+91 9910800873',
    teacherRawPhone: '9910800873',
    teacherWhatsappUrl: 'https://wa.me/919910800873?text=Hello%20Shiv%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Mathematics%20classes%20at%20Classes%20of%20Academia.',
    keyModules: [
      'Calculus: Limits, Continuity, Differentiability & Definite Integrals',
      'Differential Equations & Applications of Integrals (Area)',
      'Vectors & 3D Geometry (Complete Visual Spatial Understanding)',
      'Algebra: Matrices, Determinants, Permutations, Combinations & Probability',
      'Coordinate Geometry: Conic Sections, Circles & Straight Lines'
    ],
    syllabusHighlights: [
      'Systematic progression from NCERT to RD Sharma & exemplar questions',
      'Special speed-maths and graph-sketching shortcuts for JEE',
      'Rigorous answer presentation formatting for 100/100 CBSE scores',
      'Personal error-log notebooks for every student'
    ],
    pedagogyPillars: [
      'Elimination of mathematics phobia through stepwise problem deconstruction',
      'Speed calculus techniques saving 20-30 minutes in competitive exams',
      'Continuous 2–3 monthly progress test series with individual score reviews'
    ]
  },
  {
    id: 'commerce',
    subject: 'Commerce & Professional CA/CS',
    tagline: 'Balance Sheet Precision, Economic Analysis & Corporate Law',
    headFaculty: 'Mr. Ravi Yadav',
    qualification: 'M.Com, CA-Inter Specialist',
    experience: '15+ Years Teaching Experience',
    grades: 'Classes XI, XII, CUET (UG) & CA Foundation / CS / CMA',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentColor: 'from-emerald-600 to-teal-700',
    teacherPhone: '+91 8273230891',
    teacherRawPhone: '8273230891',
    teacherWhatsappUrl: 'https://wa.me/918273230891?text=Hello%20Ravi%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Commerce%2FAccounts%2FCA%20classes%20at%20Classes%20of%20Academia.',
    keyModules: [
      'Accountancy: Partnership Accounts, Company Shares & Cash Flow Analysis',
      'Economics: Microeconomics, Macroeconomics & Indian Economic Development',
      'Business Studies: Principles, Financial Management & Marketing Case Studies',
      'CA Foundation: Principles of Accounting & Business Laws (ICAI Syllabus)',
      'CUET (UG) Domain Subject Preparation & University Counseling'
    ],
    syllabusHighlights: [
      'Real corporate balance sheet dissection and journal entry drill',
      'High-scoring Board answer presentation formats and heading memorization',
      'Computerized accounting concepts and practical case studies',
      'Intensive CUET (UG) mock tests targeted for SRCC, Hindu & Delhi University'
    ],
    pedagogyPillars: [
      'Proven mentor for first-attempt CA Foundation clears and 98%+ in Boards',
      'Exclusive doubt sessions on partnership revaluation and adjustments',
      'Guidance for top college admissions and university cutoff navigation'
    ]
  }
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'arvind-kashyap',
    name: 'Mr. Arvind Kashyap',
    role: 'Head of Department - Physics',
    subject: 'Individual Physics Classes (Classes XI, XII & JEE Main/Advanced)',
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '15+ Years Teaching Experience',
    phone: '+91 9350764376',
    rawPhone: '9350764376',
    whatsappUrl: 'https://wa.me/919350764376?text=Hello%20Arvind%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Physics%20classes%20at%20Classes%20of%20Academia.',
    specialization: 'Mechanics, Electrodynamics, Modern Physics & Optics',
    bio: 'With over 15+ years of dedicated teaching excellence in Ghaziabad, Mr. Arvind Kashyap is acclaimed for demystifying intricate physics concepts and numericals into intuitive derivations. Students can enroll for dedicated individual Physics classes.',
    badges: ['15+ Yrs Exp', 'Physics HOD', 'JEE & Board Specialist']
  },
  {
    id: 'mukesh-saraswat',
    name: 'Mr. Mukesh Saraswat',
    role: 'Head of Department - Chemistry',
    subject: 'Individual Chemistry Classes (Classes XI, XII & JEE Main/Advanced)',
    qualification: 'M.Sc. Chemistry',
    experience: '15+ Years Teaching Experience',
    phone: '+91 8383972568',
    rawPhone: '8383972568',
    whatsappUrl: 'https://wa.me/918383972568?text=Hello%20Mukesh%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Chemistry%20classes%20at%20Classes%20of%20Academia.',
    specialization: 'Organic Reaction Mechanisms, Physical Chemistry & Inorganic Trends',
    bio: 'Bringing 15+ years of distinguished classroom mentorship, Mr. Mukesh Saraswat transforms complex chemical thermodynamics, reaction kinetics, and organic synthesis into clear, high-scoring concepts through structured notes and memory aids.',
    badges: ['15+ Yrs Exp', 'Chemistry HOD', 'Organic & Physical Specialist']
  },
  {
    id: 'shiv-shankar-sharma',
    name: 'Mr. Shiv Shankar Sharma',
    role: 'Head of Department - Mathematics',
    subject: 'Individual Mathematics Classes (Classes XI, XII, JEE & Foundation IX-X)',
    qualification: 'M.Sc. Mathematics',
    experience: '15+ Years Teaching Experience',
    phone: '+91 9910800873',
    rawPhone: '9910800873',
    whatsappUrl: 'https://wa.me/919910800873?text=Hello%20Shiv%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Mathematics%20classes%20at%20Classes%20of%20Academia.',
    specialization: 'Calculus, Coordinate Geometry, Vectors & Speed Algebra',
    bio: 'A revered mathematics educator with 15+ years of proven results in Ghaziabad. Known for eliminating math anxiety, cultivating logical problem-solving techniques, and training students to achieve perfect 100/100 scores in CBSE Board examinations.',
    badges: ['15+ Yrs Exp', 'Mathematics HOD', 'Calculus & JEE Specialist']
  },
  {
    id: 'ravi-yadav',
    name: 'Mr. Ravi Yadav',
    role: 'Head of Department - Commerce & Professional Studies',
    subject: 'Individual Accountancy, Economics & CA Foundation Classes',
    qualification: 'M.Com, CA-Inter Specialist',
    experience: '15+ Years Teaching Experience',
    phone: '+91 8273230891',
    rawPhone: '8273230891',
    whatsappUrl: 'https://wa.me/918273230891?text=Hello%20Ravi%20Sir%2C%20I%20want%20to%20inquire%20about%20your%20individual%20Commerce%2FAccounts%2FCA%20classes%20at%20Classes%20of%20Academia.',
    specialization: 'Company Accounts, Balance Sheet Mastery, Macroeconomics & CA Prep',
    bio: 'With 15+ years of unmatched expertise in commerce education, Mr. Ravi Yadav is the mentor behind scores of students gaining admissions into SRCC, Hindu College, and clearing CA Foundation in their first attempt with exceptional marks.',
    badges: ['15+ Yrs Exp', 'Commerce HOD', 'Accounts & CA Mentor']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Aarav Singhal',
    exam: 'CBSE Class XII (Science)',
    score: '98.2% (Physics: 99, Maths: 99)',
    schoolOrCollege: 'Now at DTU Delhi (Computer Engg)',
    branch: 'Shastri Nagar',
    stream: 'Science',
    year: '2025-26',
    quote: 'Classes of Academia changed my outlook towards Physics and Calculus. The doubt sessions with Mr. Arvind Kashyap Sir and Mr. Shiv Shankar Sharma Sir ensured no question remained unsolved. Best coaching in Ghaziabad for individual subject classes!'
  },
  {
    id: 'test-2',
    studentName: 'Kritika Mittal',
    exam: 'CBSE Class XII (Commerce)',
    score: '97.8% (Accounts: 99, Economics: 98)',
    schoolOrCollege: 'SRCC (Shri Ram College of Commerce), Delhi University',
    branch: 'Shastri Nagar',
    stream: 'Commerce',
    year: '2025-26',
    quote: 'Mr. Ravi Yadav Sir’s Accountancy worksheets and CUET mock tests were the biggest reason I secured admission to SRCC. The individual subject attention allowed me to focus on exactly where I needed help.'
  },
  {
    id: 'test-3',
    studentName: 'Priyanshu Chaudhary',
    exam: 'JEE Main & CBSE XII Science',
    score: '99.1 Percentile (Chemistry: 99, Maths: 98)',
    schoolOrCollege: 'NIT Kurukshetra (Computer Science)',
    branch: 'Vivekanand Nagar',
    stream: 'Science',
    year: '2025',
    quote: 'Mr. Mukesh Saraswat Sir made Organic Chemistry my strongest subject, and Sharma Sir taught speed calculus shortcuts that saved me 20 minutes in the exam. COA provides genuine individual subject guidance without corporate hype.'
  },
  {
    id: 'test-4',
    studentName: 'Sneha Rastogi',
    exam: 'CA Foundation (ICAI)',
    score: '324 / 400 (First Attempt Clear)',
    schoolOrCollege: 'CA Aspirant, Ghaziabad',
    branch: 'Shastri Nagar',
    stream: 'Professional',
    year: '2025',
    quote: 'Preparing for CA Foundation along with Class 12 was made seamless by Mr. Ravi Yadav Sir. Law and Accounts concepts were taught from the absolute fundamentals. I recommend every commerce student to join Classes of Academia.'
  },
  {
    id: 'test-5',
    studentName: 'Devansh Bhardwaj',
    exam: 'Class X Board Exam (Science & Maths)',
    score: '96.4% in Science & Maths',
    schoolOrCollege: 'DPS Ghaziabad',
    branch: 'Vivekanand Nagar',
    stream: 'Science',
    year: '2025',
    quote: 'I joined the 9th-10th foundation batch at Vivekanand Nagar. Mr. Shiv Shankar Sharma Sir and Mr. Arvind Kashyap Sir built my fundamentals so well that Class 11th now feels completely natural and confident!'
  }
];

export const DIRECT_CONTACTS = [
  { label: 'Main Admissions Helpline', phone: '+91 88000 20688', raw: '8800020688', highlight: true, color: 'bg-emerald-600', query: 'General Admissions' },
];

export const FAQS_DATA = [
  {
    question: 'What are your visiting hours and Sunday schedule?',
    answer: 'Our visiting hours across both Shastri Nagar and Vivekanand Nagar campuses are 4:00 PM – 7:30 PM, Monday through Saturday. Please note that while the coaching is closed on regular Sundays, classes will be held on Sundays during exam periods for intensive syllabus completion, full-length test simulations, and doubt sessions.'
  },
  {
    question: 'How do you monitor student progress and exam readiness?',
    answer: 'We conduct 2–3 comprehensive progress tests every month to closely monitor student performance and conceptual retention. Each test is evaluated with detailed line-by-line teacher feedback, followed by remedial sessions and transparent progress report updates shared directly with parents.'
  },
  {
    question: 'Do you offer individual subject classes or do I have to enroll in bundled PCM?',
    answer: 'We do NOT force bundled packages like PCM! At Classes of Academia, we offer dedicated individual subject classes in Physics (Mr. Arvind Kashyap), Chemistry (Mr. Mukesh Saraswat), Mathematics (Mr. Shiv Shankar Sharma), and Commerce/Accounts (Mr. Ravi Yadav). You have complete freedom to choose single subjects or any combination you need.'
  },
  {
    question: 'How can I get the teachers’ phone numbers and schedule trial sessions?',
    answer: 'To protect faculty focus during lectures, individual phone numbers and trial class schedules are provided immediately after submitting our contact/demo booking form on the website. You can also connect via our Call or WhatsApp helpline buttons.'
  },
  {
    question: 'Where are your coaching centers located in Ghaziabad?',
    answer: 'We have two fully operational centers: Our Main Campus and 2nd Campus in Ghaziabad. Please refer to our interactive Google Maps section on the website for exact addresses, pin locations, and turn-by-turn driving directions.'
  },
  {
    question: 'Who are the faculty members teaching at Classes of Academia?',
    answer: 'All our core subjects are headed by senior mentors with 15+ years of teaching experience: Physics is led by Mr. Arvind Kashyap, Chemistry by Mr. Mukesh Saraswat, Mathematics by Mr. Shiv Shankar Sharma, and Commerce & CA by Mr. Ravi Yadav.'
  },
  {
    question: 'How do I avail the Free Demo Classes?',
    answer: 'Every prospective student is welcome to attend 2 days of free trial classes for any subject without any upfront registration fees. Simply fill out our online demo booking form or tap our Call / WhatsApp helpline buttons.'
  },
  {
    question: 'What are the batch sizes at Classes of Academia?',
    answer: 'Unlike mass coaching factories with 100+ students per batch, we strictly maintain limited batches of 15 to 25 students. This ensures that our 15+ yrs experienced subject mentors can monitor each student’s daily homework, answer sheets, and conceptual doubts individually.'
  },
  {
    question: 'Do you provide preparation for both CBSE Boards and engineering entrance exams?',
    answer: 'Yes! Our individual subject classes are dual-focused. We first ensure 100% command over NCERT concepts and CBSE marking schemes, and parallelly teach higher-level objective problem solving required for JEE Main & Advanced, CUET, and CA Foundation.'
  },
  {
    question: 'What kind of study materials and notes do you provide?',
    answer: 'We offer the best curated notes compiled throughout leading reference books (such as NCERT, SL Arora, HC Verma, OP Tandon, RD Sharma, TS Grewal, and past 15 years’ question banks) with extensive practice questions, formula sheets, and step-by-step solutions in them. Students receive complete, exam-focused mastery modules directly from our senior faculty.'
  }
];
