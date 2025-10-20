import { useState } from 'react'
import emailjs from "emailjs-com";
import './App.css'
import {
  Menu, X, GraduationCap,
  Laptop,
  Code,
  BookOpen,
  Heart,
  Coffee,
  Database,
  Cpu,
  Palette,
} from "lucide-react";
import avatar from './assets/avatar.png';
import athome from './assets/athome.png'

const projects = [
  {
    title: "AtHomeExplorer",
    icon: "🏠",
    desc: "A digital platform for boarding house listings and reservations. Users can explore, compare, and book accommodations easily through a responsive interface.",
    tech: "React, Firebase, Tailwind CSS",
    details:
      "AtHomeExplorer helps users find verified boarding houses with details like location, pricing, and amenities. The platform allows property owners to manage listings and tenants to make online bookings. Designed with usability in mind and optimized for mobile users.",
    img: athome,
  },
  {
    title: "Barangay Profiling System",
    icon: "📊",
    desc: "A database system for Barangay Tinago, Dauis, Bohol that helps record, organize, and generate reports on household and demographic data.",
    tech: "PHP, MySQL, Bootstrap",
    details:
      "This system digitizes resident profiling and reporting for local barangay officials. It features resident registration, family relationships, report generation, and data visualization for improved decision-making and transparency.",
    img: "https://i.ytimg.com/vi/CgR5k7MKL-g/maxresdefault.jpg",
  },
  {
    title: "Cashiering System – Mang Inasal",
    icon: "💵",
    desc: "A point-of-sale system that automates cashiering, order processing, and sales reporting for restaurant operations.",
    tech: "Java, MySQL, NetBeans",
    details:
      "Developed as part of an academic project, this system streamlines restaurant cashiering by integrating sales tracking, receipt printing, and daily report summaries. The system ensures accurate and efficient transactions.",
    img: "https://phmenu.net/wp-content/uploads/2023/03/Screenshot-2529-convert.io_.webp",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  //emailjs function also belongs here
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus("");

    emailjs
      .sendForm(
        "service_4dcyday", // Service ID
        "template_vyb70p6", // Template ID
        e.target,
        "HUlrzt14ym3OhaxfR" // Public key
      )
      .then(() => {
        setMessageStatus("✅ Message sent successfully!");
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        setMessageStatus("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };
  return (
    <main>
      <section id="home" className="min-h-screen bg-sky-900 text-white flex flex-col">
        {/* Top bar - fixed and responsive */}
        <div className="fixed top-0 left-0 w-full bg-sky-900/90 backdrop-blur-sm z-50 flex items-center justify-between px-6 py-4 border-b border-sky-700">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white hover:text-orange-400">
            HS
          </a>

          {/* Hamburger Button (visible on mobile) */}
          <button
            className="text-white text-2xl md:hidden focus:outline-none transition-transform duration-200 hover:scale-110"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-7 h-7 text-orange-400 transition-transform duration-200" />
            ) : (
              <Menu className="w-7 h-7 text-white hover:text-orange-400 transition-transform duration-200" />
            )}
          </button>

          {/* Centered nav (desktop) */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-8 text-base font-medium text-white">
              {["Home", "Portfolio", "Contact", "About Me"].map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-sky-900 md:hidden text-center py-4 space-y-4 shadow-lg transition-all duration-300 ease-in-out ${menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
          >
            {["Home", "Portfolio", "Contact", "About Me"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={() => setMenuOpen(false)}
                className="block text-white font-medium hover:text-orange-400 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="flex flex-1 items-center justify-center px-6 sm:px-12 mt-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text Content */}
            <div className="text-center md:text-left space-y-6 max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight whitespace-nowrap">
                Hi, I’m <span className="text-orange-400">Harvey Sean</span>
              </h1>

              <p className="text-lg text-slate-200 max-w-3xl">
                A passionate Web Developer & IT Educator who loves turning ideas into
                interactive digital experiences. Building projects that make technology
                simpler and smarter.
              </p>

              <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#portfolio"
                  className="rounded-full bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition"
                >
                  View Outputs
                </a>
                <a
                  href="#detail"
                  className="rounded-full border border-slate-200 px-6 py-3 font-medium text-white hover:bg-slate-200/20 transition"
                >
                  About Me
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end mt-10 md:mt-0 mb-10 md:mb-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Orange Blob Shape */}
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 w-full h-full fill-orange-500 drop-shadow-2xl animate-float"
                >
                  <path d="M44.8,-64.9C57.2,-56.5,65.8,-42.3,71.2,-27.1C76.5,-11.9,78.5,4.3,73.4,18.7C68.3,33.1,56.2,45.6,42.3,55.2C28.4,64.9,12.7,71.7,-2.5,74.9C-17.7,78.1,-35.4,77.8,-50.8,70.1C-66.2,62.3,-79.3,47.2,-83.9,29.5C-88.6,11.8,-84.7,-8.4,-75.9,-25.2C-67.1,-42.1,-53.4,-55.6,-38.5,-64.2C-23.6,-72.9,-7.5,-76.7,7.6,-77.3C22.7,-77.9,37.7,-75.3,44.8,-64.9Z" transform="translate(100 100)" />
                </svg>

                <img
                  src={avatar}
                  alt="Harvey Sean portrait"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* About Me Section */}
      <section id="aboutme" className="bg-white text-sky-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
            About <span className="text-orange-500">Me</span>
          </h2>

          {/* INTRODUCTION + SPECIALIZATIONS */}
          <div className="mt-12 bg-gradient-to-br from-sky-50 to-white border-l-4 border-orange-400 rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-sky-900">
              <Laptop className="w-6 h-6 text-orange-500" />
              Introduction
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Hi, I’m Harvey Sean — an IT Instructor and Web Developer passionate about
              creating clean, accessible, and efficient digital experiences. I love combining
              technical precision with visual creativity to make technology simpler and smarter.
            </p>

            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-900">
              <Code className="w-5 h-5 text-orange-500" />
              Specializations
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-700">
              <li className="flex items-center gap-2"><Palette className="w-4 h-4 text-orange-500" /> HTML, CSS, JavaScript</li>
              <li className="flex items-center gap-2"><Cpu className="w-4 h-4 text-orange-500" /> Bootstrap, Tailwind CSS</li>
              <li className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-orange-500" /> Django Framework</li>
              <li className="flex items-center gap-2"><Database className="w-4 h-4 text-orange-500" /> SQL & Database Management</li>
              <li className="flex items-center gap-2"><Coffee className="w-4 h-4 text-orange-500" /> Java Programming</li>
              <li className="flex items-center gap-2"><Code className="w-4 h-4 text-orange-500" /> C Language Fundamentals</li>
            </ul>
          </div>

          {/* LOWER ROW: EDUCATION & EXPERIENCE + HOBBIES */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EDUCATION & EXPERIENCE CARD */}
            <div className="bg-gradient-to-br from-sky-50 to-white border-l-4 border-orange-400 rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 h-auto">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-sky-900">
                <GraduationCap className="w-5 h-5 text-orange-500" />
                Education & Experience
              </h3>
              <ul className="divide-y divide-slate-200">
                <li className="py-3">
                  <strong className="text-orange-500">Instructor</strong> — Holy Name University, Computer Studies Program
                  <p className="text-sm text-slate-500">2024 – Present</p>
                </li>
                <li className="py-3">
                  <strong className="text-orange-500">Trainee Web Developer (OJT)</strong> — ACE Medical Center – Bohol
                  <p className="text-sm text-slate-500">January 2023 – May 2023</p>
                </li>
                <li className="py-3">
                  <strong>Master’s in Information Technology</strong> — Cebu Institute of Technology – University
                  <p className="text-sm text-slate-500">Ongoing</p>
                </li>
                <li className="py-3">
                  <strong>Bachelor of Science in Information Technology</strong> — Holy Name University
                  <p className="text-sm text-slate-500">Graduated 2024</p>
                </li>
              </ul>
            </div>

            {/* HOBBIES & INTERESTS CARD */}
            <div className="bg-gradient-to-br from-sky-50 to-white border-l-4 border-orange-400 rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-sky-900">
                <Heart className="w-5 h-5 text-orange-500" />
                Hobbies & Interests
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li>🏀 Playing Basketball</li>
                <li>🌌 Astrophotography</li>
                <li>😂 Sharing Memes</li>
                <li>🌅 Watching Sunsets & Sunrises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white text-sky-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of systems and web applications I’ve developed — combining
            functionality, usability, and design.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-sky-900">
                  {proj.icon} {proj.title}
                </h3>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                  {proj.desc}
                </p>
                <p className="mt-3 text-slate-500 text-xs">Technologies: {proj.tech}</p>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="mt-4 inline-block text-orange-500 font-medium hover:underline"
                >
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full shadow-xl overflow-hidden relative animate-fadeIn">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-orange-500 transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-sky-900 flex items-center gap-2">
                  {selectedProject.icon} {selectedProject.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Technologies: {selectedProject.tech}
                </p>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="mt-4 rounded-lg shadow-md w-full h-56 sm:h-64 md:h-72 object-cover object-center"
                />
                <p className="mt-6 text-slate-700 leading-relaxed">
                  {selectedProject.details}
                </p>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full bg-orange-500 px-5 py-2 text-white font-medium hover:bg-orange-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-sky-50 text-sky-900 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out using the form below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* LEFT: CONTACT INFO & FORM */}
          <div className="bg-white shadow-md rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-slate-700">
              <li><strong>📞 Phone:</strong> +63 912 345 6789</li>
              <li><strong>📧 Email:</strong> harveyocmen5@gmail.com</li>
            </ul>

            <form onSubmit={sendEmail} className="mt-6 space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Your message..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-lg font-medium text-white transition ${loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Status message */}
            {messageStatus && (
              <p
                className={`mt-4 text-sm font-medium ${messageStatus.includes("✅")
                  ? "text-green-600"
                  : "text-red-600"
                  }`}
              >
                {messageStatus}
              </p>
            )}
          </div>

          {/* RIGHT: GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden shadow-md border border-slate-200">
            <iframe
              title="sample-location"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7867.414480301944!2d124.2076692604412!3d9.620456489368147!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1760335466783!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main >
  );
}
