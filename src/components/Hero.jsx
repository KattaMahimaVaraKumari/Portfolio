import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Mail, Terminal, Layers, Cpu, Sparkles } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Prop */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-mono tracking-wider font-semibold text-zinc-300 uppercase">
                {personalInfo.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Building thoughtful software.{' '}
              <br className="hidden sm:inline" />
              Engineering{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent underline decoration-violet-500/30 decoration-wavy decoration-1 underline-offset-8">
                intelligent
              </span>{' '}
              experiences.
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-light">
              I'm <span className="font-medium text-white">Mahima</span>, a software engineering student interested in building scalable backend systems, practical AI-powered applications and products that solve real problems.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 hover:text-white border border-white/[0.08] hover:border-white/20 backdrop-blur-md transition-all"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-violet-400 shrink-0" />
                <span>github.com/KattaMahimaVaraKumari</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-[#0e111a]/80 border border-white/10 backdrop-blur-xl shadow-2xl p-5 overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-violet-400" />
                    <span className="font-mono text-xs text-zinc-300 font-semibold">
                      system_manifest.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Technical Code Representation */}
                <div className="font-mono text-xs text-zinc-300 space-y-2 leading-relaxed">
                  <p className="text-zinc-500">// Core Engineering Identity</p>
                  <p>
                    <span className="text-violet-400">const</span> developer = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-300">"Katta Mahima Vara Kumari"</span>,
                  </p>
                  <p className="pl-4">
                    institution: <span className="text-emerald-300">"IIIT Pune"</span>,
                  </p>
                  <p className="pl-4">
                    primaryFocus: [
                  </p>
                  <p className="pl-8 text-cyan-300">"Scalable Backend Services",</p>
                  <p className="pl-8 text-cyan-300">"Intelligent AI Integrations",</p>
                  <p className="pl-8 text-cyan-300">"API Health & Observability"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    coreStack: [
                  </p>
                  <p className="pl-8 text-amber-200">"Node.js", "FastAPI", "React", "MongoDB", "Python"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    status: <span className="text-indigo-300">"Open for SDE / Backend Internships"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] uppercase font-mono text-zinc-500">Focus</div>
                    <div className="text-xs font-semibold text-zinc-200 mt-0.5">Reliable Systems</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] uppercase font-mono text-zinc-500">AI Horizon</div>
                    <div className="text-xs font-semibold text-zinc-200 mt-0.5">Gemini & ML Pipelines</div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#121624] border border-violet-500/30 shadow-xl flex items-center gap-2 text-xs font-sans text-white backdrop-blur-md">
                <Cpu className="w-4 h-4 text-violet-400" />
                <span>Production API Architecture</span>
              </div>

              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-[#121624] border border-cyan-500/30 shadow-xl flex items-center gap-2 text-xs font-sans text-white backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce"></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
