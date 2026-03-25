"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Formspree Integration (users will replace YOUR_FORM_ID with their own endpoint)
      const response = await fetch("https://formspree.io/f/xwvwezgn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.type === 'opaque') {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md p-8 shadow-2xl"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl font-semibold text-black dark:text-white tracking-tight mb-3">Drop a Message</h3>
        <p className="text-gray-600 dark:text-gray-400 font-light">Whether it&apos;s a project idea, collaboration, or just saying hi!</p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-black dark:text-white mb-2">Message Sent!</h4>
            <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out, I&apos;ll get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-2xl bg-white/50 dark:bg-[#050505]/50 border border-black/10 dark:border-white/10 px-5 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl bg-white/50 dark:bg-[#050505]/50 border border-black/10 dark:border-white/10 px-5 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-light"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-2xl bg-white/50 dark:bg-[#050505]/50 border border-black/10 dark:border-white/10 px-5 py-4 text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all font-light resize-none"
                placeholder="Let's build something amazing together..."
              ></textarea>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm py-2 px-4 bg-red-500/10 rounded-xl">Oops! Note: Make sure to setup the Formspree ID in ContactForm.tsx.</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-rose-500/25 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
