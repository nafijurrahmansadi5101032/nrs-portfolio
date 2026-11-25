"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function HomeContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name.trim() || "there");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-950/90 p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium text-slate-400 mb-1.5"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="contact-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-medium text-slate-400 mb-1.5"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="contact-email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="person@email.com"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-xs font-medium text-slate-400 mb-1.5"
        >
          Subject *
        </label>
        <input
          type="text"
          id="contact-subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Full-Stack SaaS MVP Development"
          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-medium text-slate-400 mb-1.5"
        >
          Project Details *
        </label>
        <textarea
          id="contact-message"
          rows="4"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your timeline, goals, and tech stack preferences..."
          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
      >
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </button>

      {submittedName && (
        <div className="flex items-center gap-2 text-sm text-emerald-400 pt-1">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Thanks {submittedName}! Your message has been received.</span>
        </div>
      )}
    </form>
  );
}