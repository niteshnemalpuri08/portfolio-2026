"use client";

import { motion } from "framer-motion";
import Projects from "./Projects";
import Timeline from "./Timeline";
import ContactForm from "./ContactForm";

export default function Resume() {
  return (
    <section className="relative z-10 w-full bg-white dark:bg-[#050505] min-h-screen py-24 px-6 md:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* Profile / About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white">
            About Me<span className="text-rose-500">.</span>
          </h2>
          <div className="group relative rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-black/10 dark:hover:bg-white/10 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-cyan-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img src="/headshot.png" alt="Nitesh Nemalpuri Profile" className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-[#050505] shadow-2xl z-10" />
            </div>
            <div>
              <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                Dynamic Computer Science and Engineering student at GIET University with a passion for Data Science, Machine Learning, and Full-Stack Development. I specialize in creating impactful applications that seamlessly integrate intelligent algorithms with robust web architectures.
              </p>
              <p className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                Eager to embrace a full-time role that presents professional challenges and leverages strong interpersonal skills, effective time management, and problem-solving expertise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Column Grid for Experience, Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-semibold text-black dark:text-white tracking-tight">Experience</h3>
            <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <span className="text-sm font-medium text-rose-500 dark:text-rose-400 tracking-widest uppercase mb-2 block">
                2026-02 - Current
              </span>
              <h4 className="text-2xl font-semibold text-black dark:text-white">Member Technical</h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Innotech Club GIETU, Gunupur</p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-semibold text-black dark:text-white tracking-tight">Education</h3>
            <div className="space-y-6">
              <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-2 block">
                  Expected in 2028-01
                </span>
                <h4 className="text-2xl font-semibold text-black dark:text-white">B.Tech: Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">GIET University - Gunupur</p>
              </div>
              <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-2 block">
                  2024-04
                </span>
                <h4 className="text-2xl font-semibold text-black dark:text-white">Intermediate: Science</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Gandhi Public School - Gunupur</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-semibold text-black dark:text-white tracking-tight">Certifications</h3>
            <div className="space-y-6">
              <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1 block">
                  MacLead Certifications
                </span>
                <h4 className="text-lg font-semibold text-black dark:text-white leading-tight">CMMC Foundation Course</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Cybersecurity Maturity Model</p>
              </div>
              <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1 block">
                  Tech Hub Club
                </span>
                <h4 className="text-lg font-semibold text-black dark:text-white leading-tight">SQL for Data Analytics</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Workshop Participation</p>
              </div>
              <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1 block">
                  Cybersecurity Club
                </span>
                <h4 className="text-lg font-semibold text-black dark:text-white leading-tight">Cyberspark Net & Sec</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Workshop Participation</p>
              </div>
              <div className="group relative rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1 block">
                  Code Communicators
                </span>
                <h4 className="text-lg font-semibold text-black dark:text-white leading-tight">Machine Learning Workshop</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">3-Day Participation</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Journey */}
        <Timeline />

        {/* Technical Toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Technical Toolkit<span className="text-rose-500">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ToolkitCard title="Languages" items={["Python (Advanced)", "JavaScript", "HTML5/CSS3"]} />
            <ToolkitCard title="AI & Data Science" items={["OpenCV", "NumPy", "Pytesseract", "Data Analytics"]} />
            <ToolkitCard title="Backend & DB" items={["Flask", "SQLite", "Flask-IO", "ReportLab"]} />
            <ToolkitCard title="Leadership" items={["Team Management", "Project Lifecycle", "Agile"]} />
          </div>
        </motion.div>

        {/* Projects */}
        <Projects />

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Achievements<span className="text-rose-500">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AchievementCard
              place="1st Place"
              event="GDG TechSprint Hackathon"
              desc="Led a team to secure the top position in this Google Developer Groups competition."
            />
            <AchievementCard
              place="5th Place"
              event="Hackanovation 1.0"
              desc="Achieved a top-five finish in a highly competitive hackathon environment."
            />
            <AchievementCard
              place="Finalist"
              event="Enigma Quizzard"
              desc="Competed at IIT Kharagpur's Kshitij fest, demonstrating technical problem-solving."
            />
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-16 border-t border-white/10 text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-12">
            Let&apos;s Connect<span className="text-rose-500">.</span>
          </h2>

          <ContactForm />

          <div className="flex justify-center mt-16 mb-12">
            <a
              href="/Nitesh_Nemalpuri_Resume.pdf"
              download="Nitesh_Nemalpuri_Resume.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black dark:text-white transition-all duration-300 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#050505] focus:ring-black dark:focus:ring-white"
            >
              <span className="mr-3">Download Resume (PDF)</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-lg text-gray-600 dark:text-gray-400">
            <a href="mailto:niteshnemalpuri17@gmail.com" className="hover:text-black dark:hover:text-white transition-colors duration-300">
              niteshnemalpuri17@gmail.com
            </a>
            <span className="hidden md:inline text-black/20 dark:text-white/20">|</span>
            <a href="tel:+919348085529" className="hover:text-black dark:hover:text-white transition-colors duration-300">
              +91 93 4808 5529
            </a>
            <span className="hidden md:inline text-black/20 dark:text-white/20">|</span>
            <a href="https://linkedin.com/in/niteshnemalpuri" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
            <span className="hidden md:inline text-black/20 dark:text-white/20">|</span>
            <a href="https://github.com/niteshnemalpuri" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors duration-300">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ToolkitCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 hover:bg-white/10 transition-colors">
      <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AchievementCard({ place, event, desc }: { place: string, event: string, desc: string }) {
  return (
    <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 hover:bg-white/10 transition-colors">
      <span className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-2 block">
        {place}
      </span>
      <h4 className="text-2xl font-semibold text-white mb-3">{event}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
