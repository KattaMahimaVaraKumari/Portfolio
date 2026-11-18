import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, ArrowUpRight, Copy, Check, MessageSquare, Send } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#8b5cf6', '#6366f1', '#06b6d4']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-violet-600/10 via-indigo-600/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-mono tracking-wider font-semibold text-zinc-300 uppercase">
            Open for 2025/2026 Opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto mb-6">
          Have an interesting opportunity or idea? Let's connect.
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-10 font-light">
          Whether you're looking for a passionate backend engineer, an AI-focused developer, or simply want to discuss system architectures, I'd love to chat.
        </p>

        {/* Action Button & Email Display */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Directly</span>
          </a>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.08] hover:border-white/20 transition-all font-mono"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* Information Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-5 rounded-2xl bg-[#0c0f18] border border-white/[0.08] hover:border-violet-500/30 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-mono uppercase text-zinc-500">Email Inquiries</div>
            <div className="text-xs font-semibold text-white group-hover:text-violet-300 transition-colors mt-0.5 truncate">
              {personalInfo.email}
            </div>
          </a>

          {/* GitHub card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0c0f18] border border-white/[0.08] hover:border-indigo-500/30 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-mono uppercase text-zinc-500">GitHub Profile</div>
            <div className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors mt-0.5 truncate">
              KattaMahimaVaraKumari
            </div>
          </a>

          {/* Phone card */}
          <div className="p-5 rounded-2xl bg-[#0c0f18] border border-white/[0.08]">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-mono uppercase text-zinc-500">Direct Contact</div>
            <div className="text-xs font-semibold text-white mt-0.5">
              {personalInfo.phone}
            </div>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>Designed & Built by Katta Mahima Vara Kumari</span>
          </div>
          <div>
            <span>IIIT Pune · Computer Science & Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
