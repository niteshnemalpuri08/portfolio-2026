"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2024-04",
    title: "Began B.Tech CS Journey",
    organization: "GIET University - Gunupur",
    description: "Started higher education focusing on modern architectural programming and Computer Science fundamentals."
  },
  {
    year: "HackNovation 1",
    title: "5th Place - TrueFrames AI",
    organization: "Hackathon Competitor",
    description: "Built deepfake detection enterprise solution using PyTorch and Transformer models."
  },
  {
    year: "HackNovation 2",
    title: "Team Lead - AgriUstaad",
    organization: "Hackathon Competitor",
    description: "Engineered offline PWA with Gemini AI to help Indian Agriculture sectors."
  },
  {
    year: "GDG TechSprint",
    title: "1st Place Gold - GIETU Nexus",
    organization: "Hackathon Competitor",
    description: "Won first place by transforming static archives into a semantic search engine using OCR."
  },
  {
    year: "2026-02 to Present",
    title: "Member Technical",
    organization: "Innotech Club GIETU",
    description: "Working hands-on with innovative engineering projects and technical leadership."
  }
];

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-12"
    >
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white">
        My Journey<span className="text-rose-500">.</span>
      </h2>
      <div className="w-full max-w-4xl  py-6">
        <div className="relative border-l-2 border-black/10 dark:border-white/10 ml-3 md:ml-6 space-y-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[11px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-rose-500 ring-4 ring-white dark:ring-[#050505] transition-transform duration-300 group-hover:scale-125">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              </span>
              
              <span className="text-sm font-semibold text-rose-500 dark:text-rose-400 tracking-widest uppercase mb-1 block">
                {item.year}
              </span>
              <h4 className="text-2xl md:text-3xl font-semibold text-black dark:text-white tracking-tight">{item.title}</h4>
              <p className="text-gray-800 dark:text-gray-300 mt-1 font-medium">{item.organization}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
