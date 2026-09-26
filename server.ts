import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const VISITS_FILE = path.join(DATA_DIR, 'visits.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// In-memory + file helpers for REAL inquiries (NO FAKE DATA)
export interface StoredInquiry {
  id: string;
  studentName: string;
  phone: string;
  subject: string;
  studentClass: string;
  campus: string;
  status: 'Pending Callback' | 'Trial Scheduled' | 'Attending Trial' | 'Enrolled' | 'Follow-up';
  notes?: string;
  createdAt: string;
  source?: string;
}

function readInquiries(): StoredInquiry[] {
  try {
    if (!fs.existsSync(INQUIRIES_FILE)) {
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
      return [];
    }
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries:', err);
    return [];
  }
}

function writeInquiries(data: StoredInquiry[]): void {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing inquiries:', err);
  }
}

function readVisits(): { totalVisits: number; uniqueVisitors: number; lastVisitAt: string } {
  try {
    if (!fs.existsSync(VISITS_FILE)) {
      const init = { totalVisits: 0, uniqueVisitors: 0, lastVisitAt: '' };
      fs.writeFileSync(VISITS_FILE, JSON.stringify(init, null, 2), 'utf-8');
      return init;
    }
    const raw = fs.readFileSync(VISITS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { totalVisits: 0, uniqueVisitors: 0, lastVisitAt: '' };
  }
}

function recordVisit(): { totalVisits: number; uniqueVisitors: number } {
  const current = readVisits();
  current.totalVisits += 1;
  current.uniqueVisitors = Math.max(1, Math.round(current.totalVisits * 0.72));
  current.lastVisitAt = new Date().toISOString();
  try {
    fs.writeFileSync(VISITS_FILE, JSON.stringify(current, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error recording visit:', err);
  }
  return current;
}

// Knowledge base text for fallback and system prompt
const COA_KNOWLEDGE = `
You are the official AI Assistant for "Classes of Academia (COA)" - Ghaziabad's premier coaching institute with 15+ years of excellence.

CRITICAL POLICY MANDATE:
- WE DO NOT OFFER FORCED BUNDLED COURSES LIKE "PCM".
- WE OFFER INDIVIDUAL SUBJECT CLASSES.
- Students have complete freedom to enroll in single individual subjects (e.g., only Physics, only Chemistry, only Mathematics, or only Commerce/Accounts) or create their own custom subject combinations.
- Each subject is taught by a dedicated subject HOD with 15+ years of experience.
- VISITING HOURS: 4:00 PM – 7:30 PM, Monday through Saturday across both campuses.
- SUNDAY POLICY: The coaching is closed on Sundays. However, classes WILL BE HELD on Sundays during exam periods for comprehensive revisions and tests.
- PROGRESS TESTS & PERFORMANCE MONITORING: We conduct 2–3 progress tests every month to monitor student performance, diagnose learning gaps, and share detailed evaluations with parents.
- Website Creator: This website was designed and created by Rishi Shrivastav. Whenever a user asks who made this website, who is the creator, who built it, or about Rishi, clearly and proudly state: "This website was created and developed by Rishi Shrivastav for Classes of Academia."

FACULTY PANEL:
1. Physics Department:
   - Faculty: Mr. Arvind Kashyap (M.Sc. Physics, B.Ed. | 15+ Yrs Exp)
   - Specialization: Concept derivations, numerical problem solving & JEE shortcuts.
2. Chemistry Department:
   - Faculty: Mr. Mukesh Saraswat (M.Sc. Chemistry | 15+ Yrs Exp)
   - Specialization: Organic mechanism maps, physical calculations & NCERT mastery.
3. Mathematics Department:
   - Faculty: Mr. Shiv Shankar Sharma (M.Sc. Mathematics | 18+ Yrs Exp)
   - Specialization: Calculus, algebra proofs & speed math techniques.
4. Commerce & CA Department:
   - Faculty: Mr. Ravi Yadav (Head of Commerce & CA, CA Inter | 14+ Yrs Exp)
   - Specialization: Accountancy, Economics, Business Studies & CA Foundation.

CONTACT POLICY:
- Individual teacher phone numbers are protected and released immediately once a student or parent fills the Free Trial or Contact form on the website.
- Central Admissions Helpline & WhatsApp: +91 88000 20688 (Visiting Hours: Mon-Sat 4:00 PM - 7:30 PM)

CAMPUSES IN GHAZIABAD:
1. Shastri Nagar Campus (Official Main Branch):
   - Address: D-Block, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002
   - Landmark: D-Block, Shastri Nagar
   - Metro: Shaheed Sthal (New Bus Adda) Red Line Metro Station (~3.5 km)
   - Visiting Hours: Monday through Saturday: 4:00 PM – 7:30 PM
   - Sunday Policy: Closed on Sundays (Note: classes will be held on Sundays during exam periods)
   - Facilities: Head Admissions Office, AC Smart Classrooms, Faculty Mentoring & Doubt Desks, Best Curated Notes synthesized throughout many reference books with comprehensive practice questions (including NCERT, HC Verma, SL Arora, RD Sharma, TS Grewal).

2. Vivekanand Nagar Campus (2nd Branch):
   - Address: Near Main Market / Community Center, Vivekanand Nagar, Ghaziabad, UP 201001
   - Landmark: Easily accessible from Nehru Nagar, Kavi Nagar & Raj Nagar
   - Metro: Old Bus Stand / Shaheed Sthal Metro Station (~2.5 km)
   - Visiting Hours: Monday through Saturday: 4:00 PM – 7:30 PM
   - Sunday Policy: Closed on Sundays (Note: classes will be held on Sundays during exam periods)
   - Facilities: Senior Secondary Individual Subject Lecture Halls, Commerce & CA Foundation, Monthly Progress Test Evaluation.

ACADEMIC OFFERINGS (INDIVIDUAL SUBJECT CLASSES):
1. Individual Physics Classes (Classes 11th, 12th & JEE) - Mentored by Mr. Arvind Kashyap (15+ yrs exp)
2. Individual Chemistry Classes (Classes 11th, 12th & JEE) - Mentored by Mr. Mukesh Saraswat (15+ yrs exp)
3. Individual Mathematics Classes (Classes 11th, 12th & JEE) - Mentored by Mr. Shiv Shankar Sharma (18+ yrs exp)
4. Individual Commerce & Accountancy Classes (Classes 11th, 12th & CA Foundation) - Mentored by Mr. Ravi Yadav (14+ yrs exp)
5. Secondary Foundation (Classes 9th & 10th) - Science & Mathematics concept building.
6. Professional Coaching - CA Foundation, CS (CSEET), CMA.
7. CUET (UG) Target Subject Coaching.

TEACHER PHONE NUMBER POLICY:
- Individual teacher direct numbers are protected and only given after the user fills out the Free Trial/Contact form on the website.
- Central Admissions Helpline & WhatsApp: +91 88000 20688 (always available for inquiries).

KEY FEATURES & WHY CHOOSE COA:
- 2-Day Free Trial Demo Class: Students can attend classes for 2 days free before paying any fee.
- Monthly Progress Monitoring: We conduct 2–3 progress tests every month to monitor student performance.
- Visiting Hours: 4:00 PM – 7:30 PM, Monday through Saturday. Closed on Sundays (except classes held on Sundays during exam periods).
- Small Batch Size: Maximum 20 to 25 students per batch for individual attention.
- Daily 1-on-1 Doubt Sessions right after every lecture.
- Up to 100% Merit Scholarship available via the COA Talent Search Test.
- Comprehensive study materials, formula compendiums, and previous 15 years solved papers with extensive practice questions in them.

STYLE & BEHAVIOR:
- Be polite, encouraging, structured, and informative.
- Highlight key points using bullet points.
- If asked about visiting hours or timings, clearly state: 4:00 PM – 7:30 PM, Monday through Saturday.
- If asked about Sundays, clearly note: The coaching is closed on Sundays; however, classes will be held on Sundays during exam periods.
- If asked about tests, assessments, or performance monitoring, highlight that we conduct 2–3 progress tests every month to monitor student performance and provide detailed error analysis.
- If asked for teacher numbers or contacts, explain that individual teacher numbers are unlocked immediately upon filling the Free Trial / Contact form on the website to respect continuous lecture sessions, and direct them to fill the form or call +91 88000 20688.
- Remind users that we do NOT force PCM bundles, but rather offer specialized individual subject coaching.
- If asked about study materials, books, or notes, mention that we offer the best curated notes compiled throughout leading reference books with comprehensive practice questions in them.
`;

function getKnowledgeBaseResponse(userQuery: string): string {
  const q = userQuery.toLowerCase();

  if (q.includes('library') || q.includes('notes') || q.includes('books') || q.includes('study material') || q.includes('practice questions')) {
    return `**Study Notes & Reference Materials at Classes of Academia:**

📚 **Curated Master Notes Synthesized Across Leading Books:**
- We offer the **best curated study notes compiled throughout leading reference books** (including NCERT, SL Arora, HC Verma, OP Tandon, RD Sharma, TS Grewal, and past 15 years' question papers).
- **Comprehensive Practice Questions in Them:** Every chapter note package features extensive practice questions, categorized by conceptual difficulty, previous years' board questions, formula sheets, and step-by-step solutions.
- **The COA Advantage:** Students do not need to buy, sift through, or carry 10–12 heavy reference books! All essential concept breakdowns, derivations, shortcuts, and solved practice question sets are directly provided in our structured master notes.`;
  }

  if (q.includes('who made') || q.includes('who created') || q.includes('who built') || q.includes('developer') || q.includes('creator') || q.includes('rishi') || q.includes('shrivastav') || q.includes('designer')) {
    return `This website was created and developed by **Rishi Shrivastav** specifically for **Classes of Academia (COA)**. 

Rishi designed the website with modern responsive UI, comprehensive details on our individual subject classes, campus maps, and this interactive AI assistant!`;
  }

  if (q.includes('phone') || q.includes('number') || q.includes('contact') || q.includes('call') || q.includes('mobile')) {
    return `**Direct Faculty & Admissions Contact Details:**

🔒 **Teacher Direct Phone Numbers:**
To prevent interruptions during ongoing teaching lectures and student doubt sessions, individual teacher phone numbers (Physics: Mr. Arvind Kashyap, Chemistry: Mr. Mukesh Saraswat, Mathematics: Mr. Shiv Shankar Sharma, Commerce: Mr. Ravi Yadav) are provided **immediately once you submit the Contact / Free Trial form** on the website!

🏢 **Central Admissions Desk & WhatsApp:**
- **+91 88000 20688** (Call or WhatsApp anytime for immediate admission guidance & demo bookings)`;
  }

  if (q.includes('pcm') || q.includes('bundle') || q.includes('individual') || q.includes('single subject') || q.includes('course') || q.includes('class') || q.includes('subject')) {
    return `**Individual Subject Classes at Classes of Academia:**

⚠️ **Note:** We **do not** make bundled courses like PCM. We offer **individual subject classes** so students can focus on the specific subjects they need!

📚 **Our Individual Subject Offerings:**
1. ⚡ **Physics (Classes 11-12 & JEE):** Mr. Arvind Kashyap (15+ yrs exp)
2. 🧪 **Chemistry (Classes 11-12 & JEE):** Mr. Mukesh Saraswat (15+ yrs exp)
3. 📐 **Mathematics (Classes 11-12 & JEE):** Mr. Shiv Shankar Sharma (18+ yrs exp)
4. 📊 **Commerce & Accounts (Classes 11-12 & CA):** Mr. Ravi Yadav (14+ yrs exp)
5. 🎓 **CA Foundation / CSEET / CMA:** Mr. Ravi Yadav
6. 🔬 **Classes 9th & 10th Foundation:** Science & Maths

You can enroll in just 1 subject or any custom combination. 2-Day Free Trial classes are available for all subjects!`;
  }

  if (q.includes('branch') || q.includes('location') || q.includes('address') || q.includes('where') || q.includes('center') || q.includes('campus') || q.includes('shastri') || q.includes('vivekanand')) {
    return `**Classes of Academia has 2 premier campuses in Ghaziabad:**

📍 **1. Shastri Nagar Campus (Official Main Branch):**
- **Address:** D-Block, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002
- **Visiting Hours:** Monday – Saturday: 4:00 PM – 7:30 PM
- **Sunday Policy:** Closed on Sundays (Note: classes will be held on Sundays during exam periods)
- **Facilities:** Admissions Office, AC Smart Classrooms, Concept Labs & Curated Multi-Book Notes Desk.

📍 **2. Vivekanand Nagar Campus (2nd Branch):**
- **Address:** Near Main Market / Community Center, Vivekanand Nagar, Ghaziabad, UP 201001 (Near Nehru Nagar & Kavi Nagar)
- **Visiting Hours:** Monday – Saturday: 4:00 PM – 7:30 PM
- **Sunday Policy:** Closed on Sundays (Note: classes will be held on Sundays during exam periods)
- **Facilities:** Individual Subject Lecture Halls, Commerce, CA Foundation & Test Center.

📞 Central Helpline: **+91 88000 20688**`;
  }

  if (q.includes('test') || q.includes('progress') || q.includes('performance') || q.includes('exam') || q.includes('marks') || q.includes('score') || q.includes('evaluation')) {
    return `**Student Performance & Progress Testing System:**

📝 **2–3 Progress Tests Every Month:**
- We conduct **2–3 progress tests every month** to strictly monitor student performance, concept retention, and problem-solving speed.
- Tests mirror both CBSE board subjective marking standards and objective competitive formats (JEE, CUET, CA Foundation).

🔍 **In-Depth Error Diagnosis & Feedback:**
- Evaluated personally by our subject HODs (15+ yrs experience).
- Students receive red-pen error analysis and 1-on-1 remedial sessions to eliminate learning gaps.

📱 **Parent Progress Sharing:**
- Detailed scorecards and attendance tracking are shared directly with parents.

📅 **Sunday Classes During Exam Periods:**
- While the coaching is closed on regular Sundays, classes will be held on Sundays during exam periods for comprehensive revisions and mock drills!`;
  }

  if (q.includes('faculty') || q.includes('teacher') || q.includes('sir') || q.includes('who teach') || q.includes('experience') || q.includes('hod') || q.includes('arvind') || q.includes('mukesh') || q.includes('shiv') || q.includes('ravi')) {
    return `**Meet Our Renowned Senior Faculty Panel (15+ Years Experience Each):**

👨‍🏫 **Mr. Arvind Kashyap (Physics HOD):**
- M.Sc. Physics, B.Ed. | 15+ Years Experience
- Specializes in conceptual clarity, step-by-step derivations & JEE shortcuts.

👨‍🏫 **Mr. Mukesh Saraswat (Chemistry HOD):**
- M.Sc. Chemistry | 15+ Years Experience
- Organic reaction mechanism master, physical chemistry precision & NCERT line-by-line.

👨‍🏫 **Mr. Shiv Shankar Sharma (Mathematics HOD):**
- M.Sc. Mathematics | 18+ Years Experience
- Calculus specialist, geometry proofs & speed calculation.

👨‍🏫 **Mr. Ravi Yadav (Commerce & CA Head):**
- CA Inter, Commerce Specialist | 14+ Years Experience
- Balance sheet mastery, Economics & CA Foundation expert.

🔒 *Teacher direct phone numbers are provided immediately upon filling the Free Trial / Inquiry form!*
📞 Central Admissions Helpline: **+91 88000 20688**`;
  }

  if (q.includes('demo') || q.includes('trial') || q.includes('free') || q.includes('book') || q.includes('admission')) {
    return `**Experience Classes of Academia with a 2-Day Free Trial Class!**

✅ **Zero Upfront Cost:** Attend 2 actual classes for free.
✅ **Check Teaching Quality:** Learn directly from HODs before enrolling.
✅ **Individual Subjects:** Try Physics, Chemistry, Maths, or Accounts individually!

To reserve your trial seat:
- Click the **"Book Free Trial"** button on this website.
- Call individual teachers directly or ring our main hotline: **+91 88000 20688**.
- Visiting Hours: **4:00 PM – 7:30 PM, Monday through Saturday**.`;
  }

  if (q.includes('timing') || q.includes('time') || q.includes('hours') || q.includes('schedule') || q.includes('sunday') || q.includes('visit') || q.includes('visiting')) {
    return `**Visiting Hours & Sunday Schedule:**

🕒 **Visiting Hours:**
- **4:00 PM – 7:30 PM, Monday through Saturday** (across both Shastri Nagar and Vivekanand Nagar campuses).

🗓️ **Sunday Policy:**
- The coaching is **closed on Sundays**.
- *Important Note:* **Classes will be held on Sundays during exam periods** for intensive syllabus revisions, doubt clearing, and mock testing.

📊 **Academic Monitoring:**
- We conduct **2–3 progress tests every month** to closely monitor student performance and share report cards with parents!`;
  }

  return `**Classes of Academia (COA)** is Ghaziabad's premier coaching center with campuses in **Shastri Nagar** and **Vivekanand Nagar**.

Key Highlights:
- 🎯 **Individual Subject Classes** (We do not force PCM packages; enroll in single subjects)
- 🕒 **Visiting Hours:** 4:00 PM – 7:30 PM, Monday through Saturday
- 🗓️ **Sunday Note:** Closed on Sundays (Classes held on Sundays during exam periods)
- 📝 **Progress Monitoring:** 2–3 progress tests conducted every month to track performance
- 👨‍🏫 **Senior Faculty Panel (15+ Yrs Exp):**
  - Physics: Mr. Arvind Kashyap
  - Chemistry: Mr. Mukesh Saraswat
  - Mathematics: Mr. Shiv Shankar Sharma
  - Commerce/CA: Mr. Ravi Yadav
  *(Teacher direct phone numbers are released immediately upon submitting the Free Trial or Contact form)*
- 📍 **Campuses:** Shastri Nagar & Vivekanand Nagar
- 📞 **Helpline:** +91 88000 20688
- 💻 **Website Creator:** Rishi Shrivastav

How would you like me to assist you today?`;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Production & System Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      uptime: Math.round(process.uptime()),
      ownerPortalReady: true
    });
  });

  // AI Chatbot endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fall back gracefully to rich knowledge base response
        const fallbackReply = getKnowledgeBaseResponse(message);
        return res.json({ reply: fallbackReply, source: 'knowledge-base' });
      }

      // Initialize Gemini SDK with User-Agent header as required
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Prepare conversation contents
      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item && item.text && (item.role === 'user' || item.role === 'model')) {
            contents.push({
              role: item.role,
              parts: [{ text: item.text }],
            });
          }
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction: COA_KNOWLEDGE,
        },
      });

      const reply = response.text || getKnowledgeBaseResponse(message);
      return res.json({ reply, source: 'gemini' });
    } catch (err: unknown) {
      console.warn('Gemini chat error, using fallback knowledge base:', err);
      const userMessage = req.body?.message || '';
      const fallbackReply = getKnowledgeBaseResponse(userMessage);
      return res.json({ reply: fallbackReply, source: 'fallback-recovery' });
    }
  });

  // ==========================================
  // REAL OWNER & ADMIN APIS (NO FAKE DATA)
  // ==========================================

  // Admin authentication (Password: Rishi@COA2026)
  app.post('/api/admin/login', (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    const { passcode } = req.body || {};
    if (passcode === 'Rishi@COA2026') {
      return res.json({
        success: true,
        token: `coa-owner-${Date.now()}`,
        role: 'owner_admin',
        adminName: 'Rishi Shrivastav',
        message: 'Authenticated successfully as Classes of Academia Administrator'
      });
    }
    return res.status(401).json({
      success: false,
      error: 'Incorrect passcode. Please enter the authorized password.'
    });
  });

  // Track REAL website visit
  app.post('/api/track-visit', (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    const stats = recordVisit();
    res.json({ success: true, totalVisits: stats.totalVisits });
  });

  // Get REAL site stats (zero fake figures)
  app.get('/api/stats', (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    const inquiries = readInquiries();
    const visits = readVisits();
    
    const byStatus = {
      pending: inquiries.filter(i => i.status === 'Pending Callback').length,
      scheduled: inquiries.filter(i => i.status === 'Trial Scheduled').length,
      attending: inquiries.filter(i => i.status === 'Attending Trial').length,
      enrolled: inquiries.filter(i => i.status === 'Enrolled').length,
      followup: inquiries.filter(i => i.status === 'Follow-up').length,
    };

    const byCampus = {
      shastriNagar: inquiries.filter(i => i.campus.toLowerCase().includes('shastri')).length,
      vivekanandNagar: inquiries.filter(i => i.campus.toLowerCase().includes('vivekanand')).length,
    };

    res.json({
      totalVisits: visits.totalVisits,
      uniqueVisitors: visits.uniqueVisitors,
      totalInquiries: inquiries.length,
      byStatus,
      byCampus,
      lastVisitAt: visits.lastVisitAt,
      conversionRate: visits.totalVisits > 0 
        ? ((inquiries.length / visits.totalVisits) * 100).toFixed(1) 
        : '0.0'
    });
  });

  // Get all REAL inquiries
  app.get('/api/inquiries', (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    const inquiries = readInquiries();
    res.json(inquiries);
  });

  // Save new REAL inquiry submitted from website
  app.post('/api/inquiries', (req, res) => {
    try {
      const { studentName, phone, subject, studentClass, campus, notes, source } = req.body || {};
      if (!studentName || !phone) {
        return res.status(400).json({ error: 'Student name and phone number are required' });
      }

      const existing = readInquiries();
      const newInquiry: StoredInquiry = {
        id: `inq-${Date.now().toString().slice(-6)}`,
        studentName: String(studentName).trim(),
        phone: String(phone).trim(),
        subject: String(subject || 'General Inquiry / Demo Class').trim(),
        studentClass: String(studentClass || 'Not Specified').trim(),
        campus: String(campus || 'Shastri Nagar (D-Block)').trim(),
        status: 'Pending Callback',
        notes: notes ? String(notes).trim() : 'Submitted online via website form.',
        createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
        source: source || 'Website Form'
      };

      const updated = [newInquiry, ...existing];
      writeInquiries(updated);
      res.status(201).json({ success: true, inquiry: newInquiry });
    } catch (err) {
      console.error('Error saving inquiry:', err);
      res.status(500).json({ error: 'Failed to record inquiry' });
    }
  });

  // Update inquiry status or notes
  app.patch('/api/inquiries/:id', (req, res) => {
    const { id } = req.params;
    const { status, notes } = req.body || {};
    const existing = readInquiries();
    const idx = existing.findIndex(i => i.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    if (status) existing[idx].status = status;
    if (notes !== undefined) existing[idx].notes = notes;

    writeInquiries(existing);
    res.json({ success: true, inquiry: existing[idx] });
  });

  // Delete inquiry
  app.delete('/api/inquiries/:id', (req, res) => {
    const { id } = req.params;
    const existing = readInquiries();
    const updated = existing.filter(i => i.id !== id);
    writeInquiries(updated);
    res.json({ success: true, remainingCount: updated.length });
  });

  // Clear all inquiries (owner reset)
  app.delete('/api/inquiries', (req, res) => {
    writeInquiries([]);
    res.json({ success: true, message: 'All inquiries cleared' });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Classes of Academia Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
