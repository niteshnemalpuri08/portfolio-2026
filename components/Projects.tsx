"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AgriUstaad – The Digital Backbone of Indian Agriculture",
    category: "Team Lead | HackNovation 2.0",
    description: "Engineered an 'Offline-First' Decision Engine that turns a smartphone into an expert agronomist, providing actionable guidance for farmers even in remote 'dead zones'.",
    features: [
      "Zero-Click Multimodal AI (Gemini 1.5 Flash)",
      "Safe-to-Spray Logic (Economic Shield)",
      "Offline-First PWA Engineering"
    ],
    tech: ["Gemini 1.5 Flash", "PWA", "Service Workers", "Python", "Docker"],
    githubUrl: "https://github.com/iPrateekPD/AgriKrop",
    liveUrl: "https://agriustaad.onrender.com/",
    details: {
      challenge: "Farmers in remote areas lacked access to immediate, reliable agronomist advice due to poor internet connectivity and high consultation costs.",
      solution: "Developed an 'Offline-First' Progressive Web App (PWA) that caches a lightweight decision engine directly on the device, allowing it to function and diagnose crop issues without constant connectivity.",
      architecture: "Frontend: React/Next.js PWA | AI: Gemini 1.5 Flash via Edge Functions | Backend: Python FastAPI containerized with Docker."
    }
  },
  {
    id: 2,
    title: "VisionVault – AI Student Attendance & Performance",
    category: "Full-Stack Developer | Release 2.0",
    description: "A comprehensive algorithmic academic management portal designed to digitize and automate the educational ecosystem focusing on predictive analytics and facial recognition.",
    features: [
      "Role-Based Dashboards (Students, Teachers, Parents)",
      "AI-Driven Performance Prediction",
      "Biometric OpenCV Authentication"
    ],
    tech: ["Python (Flask)", "SQLite", "Scikit-Learn", "OpenCV", "Docker"],
    githubUrl: "https://github.com/niteshnemalpuri08/VisionVault2.0",
    liveUrl: "https://visionvault2-0.onrender.com",
    details: {
      challenge: "Traditional academic portals relied on manual attendance and lacked predictive insights, allowing at-risk students to slip through the cracks unassisted.",
      solution: "Engineered an end-to-end academic ecosystem featuring biometric attendance (OpenCV) and an AI module that identifies performance drops before they become critical.",
      architecture: "Core: Python & Flask | DB: SQLite | AI Models: Scikit-Learn (Random Forest) & OpenCV for facial recognition."
    }
  },
  {
    id: 6,
    title: "GIETU Nexus – AI Semantic Search",
    category: "1st Place (Gold) | GDG TechSprint",
    description: "Transforms static institutional archives into an interactive knowledge base by using OCR and Gemini LLM to solve the 'PDF Graveyard' challenge for students.",
    features: [
      "Semantic Search Engine",
      "Digital Archaeology (OCR Data Extraction)",
      "Automated Information Pipeline"
    ],
    tech: ["Gemini AI Studio", "Vector DB", "Python", "OCR"],
    githubUrl: "https://github.com/niteshnemalpuri08/gietu-nexus",
    liveUrl: "https://gietu-nexus.streamlit.app/",
    details: {
      challenge: "Students struggled to extract meaningful information from massive archives of unstructured, static institutional PDFs resulting in a 'PDF Graveyard'.",
      solution: "Built an intelligent semantic search engine that uses Optical Character Recognition (OCR) and Vector Databases to allow natural language querying across thousands of pages instantly.",
      architecture: "LLM: Gemini AI Studio | Vector DB: Pinecone | Backend Pipeline: Python OCR & Embedding Generation."
    }
  },
  {
    id: 5,
    title: "TrueFrames – AI Video Authenticity Detector",
    category: "5th Place | HackNovation 1.0",
    description: "Deepfake detection enterprise solution built with PyTorch, Hugging Face, OpenCV, and Streamlit.",
    features: [
      "Deep Learning Transformer Analysis",
      "Intelligent Frame Processing",
      "Transparent Reporting & Verdict Logic"
    ],
    tech: ["PyTorch", "Hugging Face", "OpenCV", "Streamlit"],
    githubUrl: "https://github.com/iPrateekPD/TrueFrames",
    liveUrl: "https://trueframes.streamlit.app/",
    details: {
      challenge: "The rise of deepfakes posed significant risks to media authenticity, requiring a robust detection mechanism that wasn't computationally prohibitive.",
      solution: "Deployed Deep Learning Transformer models that intelligently sample video frames to output a confidence score alongside an explainable AI verdict logic.",
      architecture: "Models: PyTorch & Hugging Face Transformers | Processing: OpenCV | Interface: Streamlit for rapid interactive prototyping."
    }
  }
];

export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white" id="projects">
            Featured Projects<span className="text-rose-500">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-xl max-w-2xl font-light">
            A showcase of my recent work focusing on generative AI, predictive modeling, and robust full-stack engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col justify-between h-full min-h-[480px] rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-black/10 hover:border-black/20 dark:hover:bg-white/10 dark:hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] p-8 md:p-10 cursor-pointer"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-rose-500/5 via-transparent to-cyan-500/5 z-0" />
              
              {/* Top Content */}
              <div className="relative z-20">
                <span className="text-sm font-semibold text-rose-500 dark:text-rose-400 tracking-widest uppercase mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-black dark:text-white tracking-tight leading-tight mb-6">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light mb-8">
                  {project.description}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 dark:bg-cyan-400/50 mt-2 shrink-0"></span>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Stack Tags & Links */}
              <div className="relative z-20 mt-auto pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-black/70 dark:text-white/70 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full transition-colors group-hover:text-black dark:group-hover:text-white group-hover:bg-black/10 dark:group-hover:bg-white/10"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-black dark:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-white/60 dark:bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-[#fafafa] dark:bg-[#111111] rounded-3xl p-8 md:p-12 shadow-2xl border border-black/10 dark:border-white/10"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <span className="text-sm font-semibold text-rose-500 dark:text-rose-400 tracking-widest uppercase mb-4 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight leading-tight mb-8">
                  {selectedProject.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/5">
                    <h4 className="text-xl font-bold text-black dark:text-white mb-3">The Challenge</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">{selectedProject.details.challenge}</p>
                  </div>
                  <div className="bg-cyan-500/5 dark:bg-cyan-400/5 rounded-2xl p-6 border border-cyan-500/10 dark:border-cyan-400/10">
                    <h4 className="text-xl font-bold text-cyan-700 dark:text-cyan-400 mb-3">The Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">{selectedProject.details.solution}</p>
                  </div>
                </div>

                <div className="bg-black/5 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/5 mb-10">
                  <h4 className="text-xl font-bold text-black dark:text-white mb-3">Architecture & Technology</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">{selectedProject.details.architecture}</p>
                </div>

                <div className="flex gap-4">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white font-semibold transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    View Source
                  </a>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
