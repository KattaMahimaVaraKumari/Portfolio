import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-violet-600/10 via-indigo-600/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto mb-6">
          Have an interesting opportunity or idea? Let's connect.
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-10 font-light">
          Whether you're looking for a passionate backend engineer, an AI-focused developer, or simply want to discuss system architectures, I'd love to connect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border border-white/[0.08] hover:border-white/20 transition-all font-mono"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400" />
            <span>Explore GitHub</span>
          </a>
        </div>

        {/* Information Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {/* LinkedIn card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0c0f18] border border-white/[0.08] hover:border-cyan-500/30 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div className="text-[10px] font-mono uppercase text-zinc-500">Professional Network</div>
            <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors mt-0.5 flex items-center justify-between">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-300 transition-colors" />
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
            <div className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors mt-0.5 flex items-center justify-between">
              <span className="truncate">KattaMahimaVaraKumari</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-300 transition-colors shrink-0" />
            </div>
          </a>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>Portfolio</span>
          </div>
          <div>
            <span>IIIT Pune · Computer Science & Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
