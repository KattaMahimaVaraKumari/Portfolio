import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Brain, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'brain': return <Brain className="w-5 h-5 text-teal-400" />;
      case 'wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
      default: return <Code2 className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Technical Expertise
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Tooling.
            </h2>
            <p className="text-xs font-mono text-zinc-500">
              HONEST PROFICIENCY · NO FABRICATED BARS
            </p>
          </div>
        </div>

        {/* Clean Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c0f18] border border-white/[0.08] hover:border-violet-500/30 transition-all shadow-xl group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-105 transition-transform">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide font-sans">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-zinc-200 border border-white/[0.06] hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 via-indigo-500/5 to-cyan-500/10 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold text-violet-300 uppercase tracking-wider">
              Continuous Learning Philosophy
            </div>
            <p className="text-xs sm:text-sm text-zinc-300">
              Deep foundational knowledge in C++ and Python data structures paired with practical full-stack deployment skills.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <CheckCircle className="w-4 h-4" />
            <span>Ready for Production Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
