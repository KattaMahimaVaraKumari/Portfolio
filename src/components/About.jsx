import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, GraduationCap, MapPin, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Background & Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A little about me.
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            ENGINEERING MINDSET · FULL STACK RIGOR
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm space-y-5">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p 
                  key={idx} 
                  className={`text-zinc-300 leading-relaxed font-light ${idx === 0 ? 'text-lg sm:text-xl font-normal text-white' : 'text-base'}`}
                >
                  {para}
                </p>
              ))}

              <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-200">System Design & Backends:</span>
                    <span className="text-zinc-400 block mt-0.5">Reliable RESTful APIs, auth pipelines, error tracking.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-200">Practical AI Integration:</span>
                    <span className="text-zinc-400 block mt-0.5">LLM orchestration (Gemini), ML pipelines & classification.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Location Cards - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0f121d] border border-white/10 hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">
                  {personalInfo.period}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-semibold">
                  Undergraduate Degree
                </span>
                <h3 className="text-lg font-bold text-white">
                  {personalInfo.university}
                </h3>
                <p className="text-sm text-zinc-300 font-medium">
                  {personalInfo.degree}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Engineering Values Card */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/[0.07] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                What Drives Me
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                "Writing clean, maintainable code isn't just about syntax—it's about understanding edge cases, designing deterministic failure handling, and building tools that users love using."
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 text-[11px] font-mono border border-white/5">
                  Scalability
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 text-[11px] font-mono border border-white/5">
                  Explainable ML
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 text-[11px] font-mono border border-white/5">
                  Full-Stack Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
