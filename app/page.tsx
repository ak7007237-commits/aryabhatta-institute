"use client";

import Image from "next/image";
import { useState } from "react";

const courses = [
  {
    number: "01",
    title: "Classes 6th–10th",
    subjects: "Mathematics • Science • English",
    detail: "Build strong fundamentals with concept clarity, practice and regular assessment.",
  },
  {
    number: "02",
    title: "Classes 11th–12th",
    subjects: "Mathematics • Physics • Chemistry • Biology",
    detail: "Board-focused preparation with deeper concepts and problem-solving skills.",
  },
  {
    number: "03",
    title: "B.Sc. Mathematics",
    subjects: "Graduation Mathematics",
    detail: "University-level mathematics explained systematically with academic guidance.",
  },
  {
    number: "04",
    title: "M.Sc. Mathematics",
    subjects: "Postgraduate Mathematics",
    detail: "Advanced mathematical concepts with focused preparation and doubt support.",
  },
];

const reasons = [
  ["01", "Concept-first teaching", "Understand the why before memorising the formula."],
  ["02", "Personal attention", "Focused guidance and approachable doubt-clearing support."],
  ["03", "Regular assessment", "Tests and revision help track progress and improve accuracy."],
  ["04", "Structured study", "A practical learning path from concept to confident application."],
  ["05", "Flexible learning", "Online and offline learning options for different needs."],
  ["06", "Academic guidance", "Support for school, graduation and postgraduate mathematics."],
];

const subjectTopics = [
  {
    subject: "Mathematics",
    topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "etc."],
  },
  {
    subject: "Science",
    topics: ["Matter & Materials", "Force & Motion", "Light", "Electricity", "etc."],
  },
  {
    subject: "English",
    topics: ["Grammar", "Writing Skills", "Reading Comprehension", "Vocabulary", "etc."],
  },
  {
    subject: "Physics",
    topics: ["Mechanics", "Thermodynamics", "Waves", "Electricity & Magnetism", "etc."],
  },
  {
    subject: "Chemistry",
    topics: ["Atomic Structure", "Chemical Bonding", "Organic Chemistry", "Equilibrium", "etc."],
  },
  {
    subject: "Biology",
    topics: ["Cell Biology", "Human Physiology", "Genetics", "Ecology", "etc."],
  },
];

const faqs = [
  ["Which classes are offered?", "Classes 6th–10th: Mathematics, Science and English. Classes 11th–12th: Mathematics, Physics, Chemistry and Biology. B.Sc. and M.Sc.: Mathematics."],
  ["Are online classes available?", "Yes. Online and offline learning options are available."],
  ["Can I attend a demo class?", "Yes. Call 7465816143 to enquire about a demo class."],
  ["Do you provide doubt sessions?", "Yes. Doubt-clearing is an important part of our teaching approach."],
];

const phone = "7465816143";
const whatsapp = "917465816143";
const enquiryOptions = [
  "6th — Mathematics", "6th — Science", "6th — English",
  "7th — Mathematics", "7th — Science", "7th — English",
  "8th — Mathematics", "8th — Science", "8th — English",
  "9th — Mathematics", "9th — Science", "9th — English",
  "10th — Mathematics", "10th — Science", "10th — English",
  "11th — Mathematics", "11th — Physics", "11th — Chemistry", "11th — Biology",
  "12th — Mathematics", "12th — Physics", "12th — Chemistry", "12th — Biology",
  "B.Sc. — Mathematics", "M.Sc. — Mathematics",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${light ? "text-white" : "text-slate-950"}`}>
      <p className={`text-xs font-black uppercase tracking-[0.24em] ${light ? "text-[#e8c75b]" : "text-[#a77d0b]"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-white/65" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [regClass, setRegClass] = useState("");
  const [regSubject, setRegSubject] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [registrationOpen, setRegistrationOpen] = useState(false);

  const enquiryWhatsAppUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Hello Aryabhatta Institute,\n\nI want to enquire about admission.\n\nStudent Name: ${studentName || "Not provided"}\nPhone Number: ${studentPhone || "Not provided"}\nClass / Subject: ${selectedCourse || "Not selected"}\n\nPlease share the course details and demo class information.`
  )}`;

  const handleRegistrationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = `Hello Aryabhatta Institute,\n\nI want to submit an admission / registration enquiry.\n\nStudent Name: ${data.get("regStudentName") || "Not provided"}\nFather / Guardian Name: ${data.get("regGuardian") || "Not provided"}\nPhone Number: ${data.get("regPhone") || "Not provided"}\nDate of Birth: ${data.get("regDob") || "Not provided"}\nClass / Course: ${data.get("regCourse") || "Not provided"}\nSubject: ${data.get("regSubject") || "Not provided"}\nSchool / College: ${data.get("regInstitution") || "Not provided"}\nLearning Mode: ${data.get("regMode") || "Not provided"}\nAddress: ${data.get("regAddress") || "Not provided"}`;

    setRegistrationStatus("Sending registration...");
    try {
      const response = await fetch("https://formsubmit.co/ajax/aryabhatt.institute26143@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Email service error");
      setRegistrationStatus("Registration submitted successfully. Please check your email/WhatsApp for confirmation.");
      form.reset();
      setRegClass("");
      setRegSubject("");
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    } catch {
      setRegistrationStatus("WhatsApp enquiry is ready. Email delivery may require FormSubmit activation on the first submission.");
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="overflow-hidden">
      <header className="site-header fixed top-0 z-50 w-full border-b border-white/10 bg-[#061a38]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5">
          <a href="#home" className="shrink-0 text-base font-black tracking-tight sm:text-xl">
            ARYABHATTA <span className="text-[#e3bd4e]">INSTITUTE</span>
          </a>
          <nav className="hidden items-center gap-5 text-[11px] font-black uppercase tracking-wider lg:flex">
            {["Home", "About", "Courses", "Faculty", "Method", "FAQ", "Registration", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </nav>
          <a href="#admission" className="rounded-full bg-[#e3bd4e] px-4 py-2.5 text-xs font-black text-[#061a38] shadow-lg shadow-[#e3bd4e]/10 transition hover:-translate-y-0.5 hover:bg-[#f0d16c]">
            Enquire Now
          </a>
        </div>
      </header>

      <section id="home" className="hero relative bg-[#061a38] pt-[76px] text-white">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 md:grid-cols-[1.1fr_.9fr] md:py-24 lg:py-28">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-[#e3bd4e]/30 bg-[#e3bd4e]/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#f3d56f]">
              Admissions Open • 2026–27
            </span>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-[#e3bd4e]">Aryabhatta Institute</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Learn with <span className="text-[#e3bd4e]">clarity.</span><br />
              Grow with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Premium academic guidance in Mathematics, Science, English and Physics — from school foundations to B.Sc. and M.Sc. Mathematics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#admission" className="rounded-full bg-[#e3bd4e] px-7 py-3.5 text-sm font-black text-[#061a38] transition hover:-translate-y-0.5 hover:bg-[#f0d16c]">
                Book a Free Demo
              </a>
              <a href={`tel:${phone}`} className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-black transition hover:border-white/40 hover:bg-white/10">
                Call {phone}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-white/50">
              <span>✓ Concept clarity</span><span>✓ Regular practice</span><span>✓ Doubt support</span><span>✓ Online & Offline</span>
            </div>
          </div>

          <div id="faculty" className="relative z-10 md:justify-self-end">
            <div className="faculty-card mx-auto w-full max-w-[420px] rounded-[30px] border border-white/10 bg-white/[.07] p-3 shadow-2xl shadow-black/20 sm:p-4">
              <div className="relative overflow-hidden rounded-[24px] bg-white">
                <Image
                  src="/images/amit-kumar.jpg"
                  alt="Amit Kumar, Director and Main Faculty at Aryabhatta Institute"
                  width={700}
                  height={850}
                  className="h-[410px] w-full object-cover object-top sm:h-[470px]"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="px-3 pb-2 pt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#e3bd4e]">Director & Main Faculty</p>
                <h2 className="mt-1 text-3xl font-black">Amit Kumar</h2>
                <p className="mt-2 text-sm text-white/65">B.Sc. (Hons.) Mathematics</p>
                <p className="mt-1 text-sm font-black text-[#f1d36a]">M.Sc. Mathematics • Gold Medalist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {[
            ["4", "Learning Levels"],
            ["2", "Learning Modes"],
            ["8+", "Core Topics"],
            ["1:1", "Doubt Support"],
          ].map(([number, label]) => (
            <div key={label} className="px-4 py-7 text-center">
              <b className="text-2xl font-black text-[#b58a15] sm:text-3xl">{number}</b>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionHeading eyebrow="About the Institute" title="A focused approach to better learning." />
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Aryabhatta Institute is built around one simple idea: students learn better when concepts are explained clearly, practice is structured and questions are welcomed. Our academic approach combines strong fundamentals with regular assessment and personal guidance.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Strong fundamentals", "Individual guidance", "Regular revision", "Exam-oriented practice"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-black text-[#061a38]">
                  <span className="mr-2 text-[#b58a15]">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a77d0b]">Director&apos;s Message</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
                “Understand first. Practice smart. Grow with confidence.”
              </h2>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="leading-8 text-slate-600">
                Our aim is not simply to complete a syllabus. We want students to develop mathematical thinking, scientific understanding and the confidence to approach challenging problems independently.
              </p>
              <p className="mt-6 font-black text-[#061a38]">— Amit Kumar, Director & Main Faculty</p>
              <p className="mt-1 text-sm text-slate-500">B.Sc. (Hons.) Mathematics • M.Sc. Mathematics Gold Medalist</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Courses"
            title="Choose your learning path."
            description="Focused academic support across school, graduation and postgraduate Mathematics."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article key={course.title} className="course-card group">
                <span className="text-4xl font-black text-[#d1ab3e]">{course.number}</span>
                <h3 className="mt-6 text-xl font-black text-[#061a38]">{course.title}</h3>
                <p className="mt-3 text-sm font-black text-slate-700">{course.subjects}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">{course.detail}</p>
                <a href="#admission" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#061a38] transition group-hover:gap-3">
                  Enquire <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061a38] px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Important Topics"
            title="Build mastery, subject by subject."
            description="Focus on the important topics that create strong fundamentals and exam-ready understanding."
            light
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjectTopics.map((item, index) => (
              <div key={item.subject} className="topic-card">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#e3bd4e]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-black">{item.subject}</h3>
                <div className="mt-4 space-y-2">
                  {item.topics.map((topic) => (
                    <p key={topic} className="text-sm text-white/70">• {topic}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Teaching Methodology" title="A simple, structured learning cycle." />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Concept", "Understand the idea clearly and connect it to fundamentals."],
              ["02", "Examples", "See how the concept works through guided problems."],
              ["03", "Practice", "Build speed, accuracy and confidence through repetition."],
              ["04", "Assessment", "Measure progress, identify gaps and improve systematically."],
            ].map(([num, title, text]) => (
              <div key={title} className="method-card">
                <span className="text-4xl font-black text-[#d1ab3e]">{num}</span>
                <h3 className="mt-5 text-xl font-black text-[#061a38]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#061a38] p-7 text-white shadow-2xl shadow-[#061a38]/10 sm:p-10 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="Why Choose Aryabhatta" title="Strong concepts. Better confidence." light />
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map(([num, title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[.05] p-5">
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#e3bd4e]">{num}</span>
                  <h3 className="mt-2 font-black">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/50">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a77d0b]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-[#061a38] sm:text-4xl">Frequently asked questions.</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-[#061a38]">
                  {question}<span className="text-xl text-[#b58a15] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="admission" className="bg-[#e3bd4e] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#061a38]/65">Admissions & Enquiry</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-[#061a38] sm:text-5xl">Ready to start learning?</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#061a38]/70">
              Speak directly with Aryabhatta Institute for course details, demo class information and admission guidance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`https://wa.me/${whatsapp}?text=Hello%20Aryabhatta%20Institute%2C%20I%20want%20to%20enquire%20about%20admission.`} target="_blank" rel="noreferrer" className="rounded-full bg-[#061a38] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5">
                Enquire on WhatsApp
              </a>
              <a href={`tel:${phone}`} className="rounded-full border-2 border-[#061a38]/20 px-7 py-3.5 text-sm font-black text-[#061a38] transition hover:border-[#061a38]/40">
                Call {phone}
              </a>
              <button type="button" onClick={() => setRegistrationOpen(true)} className="rounded-full border-2 border-[#061a38]/20 px-7 py-3.5 text-sm font-black text-[#061a38] transition hover:border-[#061a38]/40">
                Registration Form
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-7 shadow-2xl shadow-black/10">
            <p className="text-xl font-black text-[#061a38]">Quick Enquiry</p>
            <p className="mt-1 text-sm text-slate-500">Select your class and subject, then continue on WhatsApp.</p>
            <div className="mt-6 grid gap-4">
              <input id="student-name" className="field" placeholder="Student Name" aria-label="Student Name" value={studentName} onChange={(event) => setStudentName(event.target.value)} />
              <input id="student-phone" className="field" placeholder="Phone Number" inputMode="tel" aria-label="Phone Number" value={studentPhone} onChange={(event) => setStudentPhone(event.target.value)} />
              <select id="student-class" className="field" value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)} aria-label="Select Class and Subject">
                <option value="" disabled>Select Class & Subject</option>
                <optgroup label="6th"><option>6th — Mathematics</option><option>6th — Science</option><option>6th — English</option></optgroup>
                <optgroup label="7th"><option>7th — Mathematics</option><option>7th — Science</option><option>7th — English</option></optgroup>
                <optgroup label="8th"><option>8th — Mathematics</option><option>8th — Science</option><option>8th — English</option></optgroup>
                <optgroup label="9th"><option>9th — Mathematics</option><option>9th — Science</option><option>9th — English</option></optgroup>
                <optgroup label="10th"><option>10th — Mathematics</option><option>10th — Science</option><option>10th — English</option></optgroup>
                <optgroup label="11th"><option>11th — Mathematics</option><option>11th — Physics</option><option>11th — Chemistry</option><option>11th — Biology</option></optgroup>
                <optgroup label="12th"><option>12th — Mathematics</option><option>12th — Physics</option><option>12th — Chemistry</option><option>12th — Biology</option></optgroup>
                <optgroup label="Higher Education"><option>B.Sc. — Mathematics</option><option>M.Sc. — Mathematics</option></optgroup>
              </select>
              <a href={enquiryWhatsAppUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-[#061a38] px-5 py-3.5 text-center text-sm font-black text-white transition hover:bg-[#0c2a59]">Continue on WhatsApp →</a>
            </div>
            <p className="mt-4 text-center text-[11px] text-slate-400">Name, phone and selected class/subject will be included in your WhatsApp enquiry.</p>
          </div>
        </div>
      </section>

      {registrationOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020d20]/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="registration-title">
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[30px] bg-white shadow-2xl">
            <button type="button" onClick={() => setRegistrationOpen(false)} aria-label="Close registration form" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#061a38] text-xl font-black text-white">×</button>
            <div className="p-5 sm:p-8">
              <div className="mb-7 pr-12">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a77d0b]">Admission / Registration</p>
                <h2 id="registration-title" className="mt-2 text-3xl font-black tracking-tight text-[#061a38] sm:text-4xl">Registration Form</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Fill in the details below. Your registration enquiry will be sent to <a href="mailto:aryabhatt.institute26143@gmail.com" className="font-black text-[#061a38] underline">aryabhatt.institute26143@gmail.com</a>.</p>
              </div>
              <form onSubmit={handleRegistrationSubmit} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="hidden" name="_subject" value="Aryabhatta Institute — New Admission / Registration" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="sm:col-span-2"><label className="form-label" htmlFor="regStudentName">Student Name *</label><input id="regStudentName" name="regStudentName" required className="field" placeholder="Enter student name" /></div>
                  <div><label className="form-label" htmlFor="regGuardian">Father / Guardian Name</label><input id="regGuardian" name="regGuardian" className="field" placeholder="Father / guardian name" /></div>
                  <div><label className="form-label" htmlFor="regPhone">Mobile Number *</label><input id="regPhone" name="regPhone" required className="field" placeholder="10-digit mobile number" inputMode="tel" /></div>
                  <div><label className="form-label" htmlFor="regDob">Date of Birth</label><input id="regDob" name="regDob" className="field" type="date" /></div>
                  <div><label className="form-label" htmlFor="regCourse">Class / Course *</label><select id="regCourse" name="regCourse" required className="field" value={regClass} onChange={(event) => { setRegClass(event.target.value); setRegSubject(""); }}><option value="" disabled>Select class / course</option><option>6th</option><option>7th</option><option>8th</option><option>9th</option><option>10th</option><option>11th</option><option>12th</option><option>B.Sc. Mathematics</option><option>M.Sc. Mathematics</option></select></div>
                  <div><label className="form-label" htmlFor="regSubject">Subject *</label><select id="regSubject" name="regSubject" required className="field" value={regSubject} onChange={(event) => setRegSubject(event.target.value)}><option value="" disabled>Select subject</option>{(regClass === "11th" || regClass === "12th") ? <><option>Mathematics</option><option>Physics</option><option>Chemistry</option><option>Biology</option></> : regClass === "B.Sc. Mathematics" || regClass === "M.Sc. Mathematics" ? <option>Mathematics</option> : <><option>Mathematics</option><option>Science</option><option>English</option></>}</select></div>
                  <div><label className="form-label" htmlFor="regInstitution">School / College</label><input id="regInstitution" name="regInstitution" className="field" placeholder="School / college name" /></div>
                  <div><label className="form-label" htmlFor="regMode">Learning Mode *</label><select id="regMode" name="regMode" required className="field" defaultValue=""><option value="" disabled>Select mode</option><option>Offline</option><option>Online</option><option>Online & Offline</option></select></div>
                  <div className="sm:col-span-2"><label className="form-label" htmlFor="regAddress">Address</label><textarea id="regAddress" name="regAddress" className="field min-h-24 resize-y" placeholder="Enter address" /></div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="w-full rounded-xl bg-[#061a38] px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#0c2a59]">Submit Registration →</button>
                    {registrationStatus && <p role="status" className="mt-3 rounded-xl bg-[#e3bd4e]/15 px-4 py-3 text-center text-xs font-bold text-[#061a38]">{registrationStatus}</p>}
                    <p className="mt-3 text-center text-[11px] text-slate-400">Details go to aryabhatt.institute26143@gmail.com and a WhatsApp enquiry opens automatically.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="bg-[#04132b] px-5 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e3bd4e]">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Let&apos;s plan your learning journey.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href={`tel:${phone}`} className="contact-item">
                <span className="contact-icon">☎</span>
                <span><small>Call us</small><b>{phone}</b></span>
              </a>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">↗</span>
                <span><small>WhatsApp</small><b>Chat with us</b></span>
              </a>
              <div className="contact-item sm:col-span-2">
                <span className="contact-icon">⌖</span>
                <span><small>Location</small><b>Ward No. 04, Rama Green Colony, Lalpur, Udham Singh Nagar, Uttarakhand – 263153</b></span>
              </div>
              <a href="mailto:aryabhatt.institute26143@gmail.com" className="contact-item sm:col-span-2">
                <span className="contact-icon">@</span>
                <span><small>Email</small><b>aryabhatt.institute26143@gmail.com</b></span>
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[.05] p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e3bd4e]">Director</p>
            <h3 className="mt-3 text-2xl font-black">Amit Kumar</h3>
            <p className="mt-2 text-sm text-white/55">B.Sc. (Hons.) Mathematics</p>
            <p className="mt-1 text-sm font-black text-[#e3bd4e]">M.Sc. Mathematics • Gold Medalist</p>
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-white/55">Mathematics & Science education with concept-focused academic guidance.</p>
              <a href="#admission" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-[#061a38]">Start an Enquiry →</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#020d20] px-5 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-black">ARYABHATTA <span className="text-[#e3bd4e]">INSTITUTE</span></h3>
            <p className="mt-3 text-sm text-white/45">Mathematics & Science</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#e3bd4e]">Courses</h4>
            <p className="mt-3 text-sm text-white/50">6th–10th • 11th–12th</p>
            <p className="mt-1 text-sm text-white/50">11th–12th: Maths • Physics • Chemistry • Biology</p>
            <p className="mt-1 text-sm text-white/50">B.Sc. • M.Sc. Mathematics</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#e3bd4e]">Contact</h4>
            <p className="mt-3 text-sm text-white/50">{phone}</p>
            <p className="mt-1 text-sm text-white/50">Online & Offline Classes Available</p>
            <p className="mt-1 text-sm text-white/50">aryabhatt.institute26143@gmail.com</p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">
          © 2026 Aryabhatta Institute. All rights reserved.
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aryabhatta Institute on WhatsApp"
        className="whatsapp-fab"
      >
        <span>✆</span>
      </a>
    </main>
  );
}
