import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  RotateCcw, 
  Phone, 
  MessageCircle, 
  CalendarCheck, 
  MapPin, 
  GraduationCap, 
  User, 
  Bot, 
  ChevronRight,
  ExternalLink,
  Code
} from 'lucide-react';
import { MAIN_HELPLINE } from '../data/coachingData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: 'demo' | 'call' | 'whatsapp';
}

interface AiChatbotProps {
  onOpenDemoModal: (courseTitle?: string) => void;
}

const INITIAL_MESSAGE: Message = {
  id: 'welcome-msg',
  sender: 'assistant',
  text: `Hello! 👋 I'm the official AI Assistant for **Classes of Academia (COA)**.

I have complete knowledge about our **Main Campus** & **2nd Campus** in Ghaziabad, our **individual subject classes** (Physics, Chemistry, Mathematics, Commerce), visiting hours (**4:00 PM – 7:30 PM, Mon–Sat**), Sunday exam schedule, and our **2–3 monthly progress tests**.

*(Note: We do not force PCM packages—we offer individual subject classes! Website created by **Rishi Shrivastav**)*

How can I help you today? You can tap any question below or ask me anything!`,
  timestamp: 'Just now',
};

const SUGGESTED_QUESTIONS = [
  '⏰ What are the visiting hours & Sunday policy?',
  '📝 How do you conduct tests to monitor student performance?',
  '📚 What study notes & practice questions do you provide?',
  '📞 How do I get teacher direct phone numbers or contact them?',
  '🎯 Do you offer individual subject classes (No PCM bundles)?',
  '👨‍🏫 Who are the teachers & what is their experience?',
  '📍 Where are your campuses in Ghaziabad?',
  '✨ How do I book a 2-Day Free Trial class?',
  '💻 Who made this website?',
];

export const AiChatbot: React.FC<AiChatbotProps> = ({ onOpenDemoModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const launcherButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  // Close AI Bot if person clicks anywhere on the website or presses Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent | PointerEvent) => {
      const target = e.target as Node;
      // If click is inside chatbot window, do not close
      if (chatWindowRef.current && chatWindowRef.current.contains(target)) {
        return;
      }
      setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Use document & window listeners in capture phase
    document.addEventListener('pointerdown', handleOutsideClick, true);
    document.addEventListener('mousedown', handleOutsideClick, true);
    document.addEventListener('click', handleOutsideClick, true);
    document.addEventListener('touchstart', handleOutsideClick, true);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick, true);
      document.removeEventListener('mousedown', handleOutsideClick, true);
      document.removeEventListener('click', handleOutsideClick, true);
      document.removeEventListener('touchstart', handleOutsideClick, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Support custom event to open chat from navbar or buttons
  useEffect(() => {
    const handleOpenCustom = () => setIsOpen(true);
    window.addEventListener('open-coa-ai-chat', handleOpenCustom);
    return () => window.removeEventListener('open-coa-ai-chat', handleOpenCustom);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation history for context
      const history = messages.slice(-5).map((m) => ({
        role: m.sender === 'user' ? ('user' as const) : ('model' as const),
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || "I'm here to assist you with anything regarding Classes of Academia! Please feel free to tap the Call Helpline or WhatsApp button.";

      // Determine appropriate suggested action
      const lower = query.toLowerCase();
      let suggestedAction: 'demo' | 'call' | 'whatsapp' | undefined;
      if (lower.includes('demo') || lower.includes('trial') || lower.includes('admission') || lower.includes('join') || lower.includes('enroll')) {
        suggestedAction = 'demo';
      } else if (lower.includes('call') || lower.includes('phone') || lower.includes('talk')) {
        suggestedAction = 'call';
      } else if (lower.includes('whatsapp') || lower.includes('chat')) {
        suggestedAction = 'whatsapp';
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Error fetching chat response:', err);

      // Intelligent client-side fallback knowledge matcher
      let fallbackText = '';
      const q = query.toLowerCase();

      if (q.includes('rishi') || q.includes('who made') || q.includes('developer') || q.includes('creator') || q.includes('built')) {
        fallbackText = `This website was designed and created by **Rishi Shrivastav** specifically for **Classes of Academia (COA)**. 
        
He engineered this website to help students and parents in Ghaziabad easily discover our faculty, curriculum, campus directions, and book free trial classes!`;
      } else if (q.includes('branch') || q.includes('location') || q.includes('address') || q.includes('where') || q.includes('campus')) {
        fallbackText = `**Classes of Academia Campuses in Ghaziabad:**

📍 **1. Main Campus Center:**
- **Location:** View full physical address and live driving route in our **Maps section** above!
- **Visiting Hours:** 4:00 PM – 7:30 PM, Monday through Saturday
- **Sunday Policy:** Closed on Sundays (Classes held on Sundays during exam periods)

📍 **2. 2nd Campus Center:**
- **Location:** View full physical address and transit route in our **Maps section** above!
- **Visiting Hours:** 4:00 PM – 7:30 PM, Monday through Saturday
- **Sunday Policy:** Closed on Sundays (Classes held on Sundays during exam periods)

📞 Admissions Helpline: **Available via the Call Helpline and WhatsApp action buttons**`;
      } else if (q.includes('test') || q.includes('progress') || q.includes('performance') || q.includes('exam') || q.includes('marks') || q.includes('score') || q.includes('report') || q.includes('evaluat')) {
        fallbackText = `**Student Performance & Progress Testing System:**

📝 **2–3 Progress Tests Conducted Every Month:**
- We conduct **2–3 progress tests every month** to closely monitor student performance and chapter comprehension.
- Evaluates both board subjective writing and competitive objective speed (JEE / CUET / CA Foundation).

🔍 **In-Depth Error Diagnosis & Feedback:**
- Senior HODs (15+ yrs exp) review mistakes individually and assign targeted remedial worksheets.

📱 **Parent Progress Transparency:**
- Direct scorecards and attendance logs shared via WhatsApp and parent-teacher consultations.

📅 **Exam Period Sunday Classes:**
- While the center is closed on regular Sundays, classes will be held on Sundays during exam periods!`;
      } else if (q.includes('timing') || q.includes('time') || q.includes('hour') || q.includes('schedule') || q.includes('sunday') || q.includes('visit') || q.includes('visiting')) {
        fallbackText = `**Visiting Hours & Sunday Policy:**

🕒 **Official Visiting Hours:**
- **4:00 PM – 7:30 PM, Monday through Saturday** (at both our campus centers).

🗓️ **Sunday Policy:**
- The coaching is **closed on Sundays**.
- *Special Note:* **Classes will be held on Sundays during exam periods** for intensive syllabus coverage, revisions, and full mock testing!

📝 **Student Monitoring:**
- We conduct **2–3 progress tests every month** to continually monitor student performance.`;
      } else if (q.includes('library') || q.includes('notes') || q.includes('books') || q.includes('material') || q.includes('practice questions')) {
        fallbackText = `**Study Notes & Practice Questions at Classes of Academia:**

📚 **Curated Master Notes Synthesized Throughout Leading Books:**
- We offer the **best curated study notes compiled throughout leading reference books** (including NCERT, SL Arora, HC Verma, OP Tandon, RD Sharma, TS Grewal, and past 15 years' question papers).
- **Comprehensive Practice Questions in Every Module:** Each booklet is packed with chapter-wise practice questions, formula sheets, shortcut techniques, and step-by-step solutions.
- **Convenient & High-Yield:** Students do not need to buy or sift through dozens of heavy reference books — everything essential for CBSE Board top scores and JEE/CUET/CA Foundation is provided in our master notes.`;
      } else if (q.includes('phone') || q.includes('number') || q.includes('contact') || q.includes('call') || q.includes('mobile')) {
        fallbackText = `**Direct Faculty & Admissions Contact Policy:**

🔒 **Teacher Direct Phone Numbers:**
- To protect ongoing classroom lectures, **individual teacher phone numbers are provided immediately once you fill the Free Trial or Contact Form** on our website!
- Once submitted, you instantly receive direct phone access for Physics, Chemistry, Mathematics, and Commerce HODs.

🏢 **Central Admissions Helpline:**
- Tap the **Call Helpline** or **WhatsApp** action buttons on the website anytime for general admissions counseling!`;
      } else if (q.includes('pcm') || q.includes('bundle') || q.includes('individual') || q.includes('subject')) {
        fallbackText = `**Individual Subject Classes at Classes of Academia:**

⚠️ **Important Note:** We **do not** make courses like PCM. We offer **individual subject classes**!

Students can enroll in single subjects based on their personal needs:
- ⚡ **Physics:** Mentored by Mr. Arvind Kashyap (15+ yrs exp)
- 🧪 **Chemistry:** Mentored by Mr. Mukesh Saraswat (15+ yrs exp)
- 📐 **Mathematics:** Mentored by Mr. Shiv Shankar Sharma (18+ yrs exp)
- 📊 **Commerce & CA:** Mentored by Mr. Ravi Yadav (14+ yrs exp)

You can enroll in just 1 subject or any custom combination of your choice!
Teacher direct numbers are unlocked immediately upon filling the Free Trial form.`;
      } else if (q.includes('faculty') || q.includes('teacher') || q.includes('sir') || q.includes('hod')) {
        fallbackText = `**Senior Expert Faculty Panel (15+ Years Experience):**

👨‍🏫 **Mr. Arvind Kashyap (Physics HOD):** M.Sc. Physics, B.Ed. (15+ yrs exp)
👨‍🏫 **Mr. Mukesh Saraswat (Chemistry HOD):** M.Sc. Chemistry (15+ yrs exp)
👨‍🏫 **Mr. Shiv Shankar Sharma (Maths HOD):** M.Sc. Maths (18+ yrs exp)
👨‍🏫 **Mr. Ravi Yadav (Commerce Head):** CA Inter (14+ yrs exp)

All subjects are taught as individual classes—no forced bundles!
🔒 *Individual teacher phone numbers are unlocked once you submit the contact/demo form!*`;
      } else if (q.includes('demo') || q.includes('trial') || q.includes('free') || q.includes('admission')) {
        fallbackText = `**Experience COA with a 2-Day Free Trial Class!**

- Attend 2 actual classes for free with zero upfront fees.
- Learn directly from senior faculty for your chosen individual subject.
- You can reserve your seat right now by clicking the "Book Free Demo" button or using our Call Helpline.
- Submitting the demo form will also reveal direct teacher phone numbers!`;
      } else {
        fallbackText = `Classes of Academia (COA) is Ghaziabad's premier coaching institute offering **individual subject classes** in Physics, Chemistry, Mathematics & Commerce (Classes IX-XII, JEE, CUET & CA Foundation).

- **Campuses:** Main Campus & 2nd Campus in Ghaziabad (Full locations in Maps section)
- **Visiting Hours:** 4:00 PM – 7:30 PM, Monday through Saturday
- **Sunday Note:** Closed on Sundays (Classes held on Sundays during exam periods)
- **Progress Tests:** 2–3 tests every month to monitor student performance
- **Admissions Helpline:** Tap Call or WhatsApp buttons anytime
- **Teacher Contacts:** Released immediately upon submitting the Free Trial / Contact form
- **Website Creator:** Rishi Shrivastav

Feel free to ask about courses, faculty, timings, test schedule, or book a free trial class!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-fallback-${Date.now()}`,
          sender: 'assistant',
          text: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  // Helper to format text with bold, bullet points and line breaks
  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      // Line is empty
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Check if bullet line
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('• ') || line.trim().startsWith('* ');
      const content = isBullet ? line.trim().substring(2) : line;

      // Parse bold segments
      const parts = content.split(/(\*\*.*?\*\*)/g);

      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start space-x-2 my-1 pl-1">
            <span className="text-sky-600 font-bold shrink-0 mt-0.5">•</span>
            <span className="flex-1">{renderedLine}</span>
          </div>
        );
      }

      return (
        <p key={idx} className="my-1 leading-relaxed">
          {renderedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Launcher Button */}
      <div className={`fixed bottom-5 left-3.5 sm:bottom-8 sm:left-6 z-[9985] ${isOpen ? 'hidden' : 'block'}`}>
        <button
          ref={launcherButtonRef}
          onClick={() => setIsOpen(true)}
          id="open-ai-chatbot-btn"
          aria-label="Ask COA AI Assistant"
          className="relative flex items-center space-x-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-sky-600/40 hover:shadow-sky-600/60 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/90 group cursor-pointer"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-sky-900 animate-ping" />
          </div>
          <span className="tracking-wide">Ask COA AI</span>
          <span className="inline-block text-[10px] sm:text-[11px] font-semibold bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full text-sky-100">
            Online
          </span>
        </button>
      </div>

      {/* Website Backdrop Overlay: Clicking ANYWHERE on the website closes the AI bot */}
      {isOpen && (
        <div
          id="coa-ai-chatbot-backdrop"
          onClick={() => setIsOpen(false)}
          onPointerDown={() => setIsOpen(false)}
          onMouseDown={() => setIsOpen(false)}
          onTouchStart={() => setIsOpen(false)}
          className="fixed inset-0 z-[9990] bg-slate-950/40 backdrop-blur-[2px] transition-opacity cursor-pointer animate-in fade-in duration-150"
          aria-label="Click anywhere on the website to close AI assistant"
          title="Click anywhere to close AI assistant"
        />
      )}

      {/* Chatbot Window Drawer / Modal */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          id="coa-ai-chatbot-window"
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:left-6 z-[9999] w-full sm:w-[420px] md:w-[440px] max-w-full sm:max-w-[calc(100vw-2rem)] h-[100dvh] sm:h-[580px] max-h-[100dvh] sm:max-h-[85vh] flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Dedicated Desktop Corner Close Button - Always visible and pinned to top-right of window */}
          <button
            onClick={() => setIsOpen(false)}
            id="desktop-floating-close-ai-bot"
            title="Close AI Assistant (Or click anywhere outside to close)"
            aria-label="Close Chat Window"
            className="hidden sm:flex absolute -top-3.5 -right-3.5 z-40 w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 active:scale-90 text-white items-center justify-center shadow-2xl border-2 border-white cursor-pointer transition-transform hover:scale-110"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>

          {/* Inner chat box container */}
          <div className="relative w-full h-full bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border sm:border-2 border-slate-300">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-inner ring-2 ring-white/20 shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-1.5 flex-wrap">
                    <h3 className="font-bold text-sm tracking-wide text-white truncate">COA AI Assistant</h3>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-sky-200 truncate">Admissions, Faculty & Course Guide</p>
                </div>
              </div>

              {/* Header Action Buttons with High-Contrast Visible Close Button */}
              <div className="flex items-center space-x-1.5 shrink-0">
                <button
                  onClick={handleResetChat}
                  title="Restart Conversation"
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition cursor-pointer"
                  aria-label="Restart Conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  id="close-ai-chatbot-btn"
                  title="Close AI Assistant (Or click anywhere outside to close)"
                  aria-label="Close Chat Window"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black text-xs shadow-md transition-all cursor-pointer border-2 border-white/60 ring-2 ring-red-500/40 shrink-0"
                >
                  <X className="w-4 h-4 stroke-[3]" />
                  <span className="font-extrabold text-xs tracking-wider uppercase">Close</span>
                </button>
              </div>
            </div>

            {/* Website Credit Sub-banner with tap outside hint */}
            <div className="bg-sky-50 px-3.5 py-1.5 border-b border-sky-100 flex items-center justify-between text-[11px] text-sky-900 shrink-0">
              <div className="flex items-center space-x-1.5 font-medium truncate">
                <Code className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="truncate">Website made by: <strong className="font-bold text-sky-800">Rishi Shrivastav</strong></span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[10px] text-slate-500 hover:text-red-600 font-semibold shrink-0 cursor-pointer ml-2 flex items-center space-x-0.5"
                title="Click here or anywhere outside to close"
              >
                <span>Tap outside to close</span>
                <span className="text-red-500 font-bold">✕</span>
              </button>
            </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                  }`}
                >
                  <div className="text-[13px] leading-relaxed break-words">
                    {msg.sender === 'assistant' ? formatMessageText(msg.text) : msg.text}
                  </div>

                  {/* Interactive Action Buttons if suggested */}
                  {msg.suggestedAction === 'demo' && (
                    <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenDemoModal();
                        }}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition shadow-xs cursor-pointer"
                      >
                        <CalendarCheck className="w-3.5 h-3.5" />
                        <span>Book 2-Day Free Trial</span>
                      </button>
                      <a
                        href={`tel:${MAIN_HELPLINE.raw}`}
                        className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-sky-50 text-sky-700 font-bold text-xs border border-sky-200"
                        title="Call Admissions Helpline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Helpline</span>
                      </a>
                    </div>
                  )}

                  {msg.suggestedAction === 'call' && (
                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <a
                        href={`tel:${MAIN_HELPLINE.raw}`}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition"
                        title="Call Admissions Helpline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Admissions Helpline</span>
                      </a>
                    </div>
                  )}

                  {msg.suggestedAction === 'whatsapp' && (
                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <a
                        href={MAIN_HELPLINE.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on Official WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 px-3.5 py-2.5 rounded-2xl rounded-bl-xs shadow-xs flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-sky-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-sky-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-xs text-slate-500 ml-1.5">Consulting COA knowledge...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Pills (Shown if fewer than 4 messages) */}
          {messages.length <= 4 && (
            <div className="p-2.5 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap space-x-1.5 no-scrollbar shrink-0 flex items-center">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center shrink-0 pr-1">
                <Sparkles className="w-3 h-3 mr-1 text-sky-500" />
                Quick:
              </span>
              {SUGGESTED_QUESTIONS.map((question, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(question)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-[11px] font-medium transition shrink-0 border border-slate-200 hover:border-sky-300 disabled:opacity-50 cursor-pointer"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Bottom Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about COA (branches, faculty, demo)..."
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-xs sm:text-sm bg-slate-50 focus:bg-white transition"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold transition shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Footer note with mobile safe padding */}
          <div className="bg-slate-100 px-3 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-center text-[10px] text-slate-500 flex items-center justify-center space-x-1.5 shrink-0 border-t border-slate-200">
            <span>Classes of Academia AI</span>
            <span>•</span>
            <span className="font-semibold text-slate-700">Website made by Rishi Shrivastav</span>
          </div>
        </div>
      </div>
    )}
  </>
);
};
