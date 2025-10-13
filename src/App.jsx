import { useState } from 'react'
import './App.css'
import { Menu, X } from "lucide-react";
import avatar from './assets/avatar.png';


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-sky-900 text-white flex flex-col">
        {/* Top bar - fixed and responsive */}
        <div className="fixed top-0 left-0 w-full bg-sky-900/90 backdrop-blur-sm z-50 flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white hover:text-orange-400">
            HS
          </a>

          {/* Hamburger Button (visible on mobile) */}
          <button
            className="text-white text-2xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-7 h-7 text-orange-400 transition-transform duration-200 hover:scale-110" />
            ) : (
              <Menu className="w-7 h-7 text-white hover:text-orange-400 transition-transform duration-200 hover:scale-110" />
            )}
          </button>

          {/* Centered nav (desktop) */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-8 text-base font-medium text-white">
              <li><a href="#home" className="hover:text-orange-400">Home</a></li>
              <li><a href="#portfolio" className="hover:text-orange-400">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
              <li><a href="#detail" className="hover:text-orange-400">About Me</a></li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-sky-900 md:hidden text-center py-4 space-y-4 shadow-lg">
              <a href="#home" className="block text-white hover:text-orange-400">Home</a>
              <a href="#portfolio" className="block text-white hover:text-orange-400">Portfolio</a>
              <a href="#contact" className="block text-white hover:text-orange-400">Contact</a>
              <a href="#detail" className="block text-white hover:text-orange-400">About Me</a>
            </div>
          )}
        </div>

        {/* Hero content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-6 mt-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">

            {/* Left: Text content */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Welcome to my <span className="text-orange-400">portfolio</span> site
              </h1>

              <p className="mt-6 text-lg text-slate-200 max-w-md mx-auto md:mx-0">
                I’m Harvey Sean — developer and instructor. I design and build
                accessible, fast, and user-friendly web applications using React
                and Tailwind CSS.
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#portfolio"
                  className="rounded-full bg-orange-500 px-5 py-3 text-white font-medium hover:bg-orange-600"
                >
                  View Outputs
                </a>
                <a
                  href="#detail"
                  className="rounded-full border border-slate-200 px-5 py-3 font-medium text-white hover:bg-slate-200/20"
                >
                  Details
                </a>
              </div>
            </div>

            {/* Right: Animated Blob Image */}
            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 animate-float">
                {/* Orange blob background */}
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 w-full h-full fill-orange-500 drop-shadow-2xl"
                >
                  <path d="M44.8,-64.9C57.2,-56.5,65.8,-42.3,71.2,-27.1C76.5,-11.9,78.5,4.3,73.4,18.7C68.3,33.1,56.2,45.6,42.3,55.2C28.4,64.9,12.7,71.7,-2.5,74.9C-17.7,78.1,-35.4,77.8,-50.8,70.1C-66.2,62.3,-79.3,47.2,-83.9,29.5C-88.6,11.8,-84.7,-8.4,-75.9,-25.2C-67.1,-42.1,-53.4,-55.6,-38.5,-64.2C-23.6,-72.9,-7.5,-76.7,7.6,-77.3C22.7,-77.9,37.7,-75.3,44.8,-64.9Z" transform="translate(100 100)" />
                </svg>

                {/* Portrait image */}
                <img
                  src={avatar}
                  alt="Developer portrait"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="detail" className="bg-white text-sky-900 py-20 px-6" >
        <div className="max-w-5xl mx-auto"> <h2 className="text-3xl sm:text-4xl font-extrabold text-center"> About <span className="text-orange-500">Me</span> </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Left: Personal Info */}
            <div> <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <p className="text-slate-600 leading-relaxed"> Hello! I’m Harvey Sean, a passionate web developer and IT instructor who enjoys creating clean, efficient, and user-friendly applications. I focus on building web experiences that combine aesthetic design with strong functionality. </p> <ul className="mt-4 space-y-2 text-slate-600"> <li><strong>Location:</strong> Bohol, Philippines</li> <li><strong>Email:</strong> harvey@example.com</li> <li><strong>Specialization:</strong> Web Development, System Design, Instruction</li> </ul> </div> {/* Right: Experience and Education */} <div> <h3 className="text-xl font-semibold mb-4">Experience & Education</h3> <ul className="space-y-3 text-slate-600"> <li> <strong>Instructor</strong> – Information Technology Department <p className="text-sm text-slate-500">2020 – Present</p> </li> <li> <strong>Full-Stack Developer</strong> – Freelance Projects <p className="text-sm text-slate-500">2018 – Present</p> </li> <li> <strong>Master’s in Information Technology</strong> – ABC University <p className="text-sm text-slate-500">Ongoing</p> </li> <li> <strong>Bachelor of Science in Information Technology</strong> – XYZ College <p className="text-sm text-slate-500">Graduated 2018</p> </li> </ul> </div> </div> </div> </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white text-sky-900 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            My <span className="text-orange-500">Outputs</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Here are some of my past and ongoing projects.
          </p>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {["Project One", "Project Two", "Project Three"].map((title, i) => (
              <div key={i} className="rounded-xl border border-slate-200 shadow-sm bg-white p-6 hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-slate-600 text-sm">
                  A brief description of this project. Built with React and Tailwind CSS.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-orange-500 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
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
          {/* Left: Contact info and form */}
          <div className="bg-white shadow-md rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-slate-700">
              <li><strong>📞 Phone:</strong> +63 912 345 6789</li>
              <li><strong>📧 Email:</strong> harvey@example.com</li>
            </ul>

            <form className="mt-6 space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map */}
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
