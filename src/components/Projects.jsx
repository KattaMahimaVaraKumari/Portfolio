import React from 'react';
import { featuredProjects, additionalProjects } from '../data/portfolioData';
import MonitorlyPreview from './previews/MonitorlyPreview';
import CognivaultPreview from './previews/CognivaultPreview';
import DocAppointixPreview from './previews/DocAppointixPreview';
import { ExternalLink, Check, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Projects() {
  const renderPreview = (type) => {
    switch (type) {
      case 'monitorly':
        return <MonitorlyPreview />;
      case 'cognivault':
        return <CognivaultPreview />;
      case 'docappointix':
        return <DocAppointixPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Featured Engineering Work
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Selected Systems & Applications.
            </h2>
            <p className="text-sm text-zinc-400 max-w-md font-light">
              High-impact projects demonstrating full-stack backend rigor, explainable machine learning, and AI triage systems.
            </p>
          </div>
        </div>

        {/* Featured Showcase List */}
        <div className="space-y-28">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="relative rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] p-6 sm:p-10 shadow-2xl overflow-hidden group"
            >
              {/* Subtle top corner gradient glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${project.accentColor} blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}></div>

              {/* Tag and Index */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor}`}>
                  {project.tag}
                </span>

                <div className="flex items-center gap-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all"
                    >
                      <span>Live Production Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Project Headings */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Visual Interactive Custom Preview */}
              <div className="my-8">
                {renderPreview(project.previewType)}
              </div>

              {/* Features & Tech Stack Footer */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/[0.08]">
                {/* Key Features (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Key Architectural Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {project.disclaimer && (
                    <div className="mt-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                      <strong>Note:</strong> {project.disclaimer}
                    </div>
                  )}
                </div>

                {/* Tech Stack Chips (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Explore source code on GitHub</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 6: Additional Projects (Curated, at most two) */}
        <div className="mt-28">
          <div className="flex items-center gap-3 mb-8">
            <FolderGit2 className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                More Notable Projects
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Carefully selected repositories demonstrating domain versatility and robust full-stack problem solving.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0f18] border border-white/[0.08] hover:border-violet-500/30 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {proj.badge}
                    </span>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5 mb-3">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {proj.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1 shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.02] text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
