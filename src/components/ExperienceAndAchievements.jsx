import React from 'react';
import { experienceData, achievementsData } from '../data/portfolioData';
import { Briefcase, Award, Shield, Trophy, Code, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceAndAchievements() {
  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'award': return <Award className="w-5 h-5 text-violet-400" />;
      case 'code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'shield': return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      default: return <Award className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Experience Section (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                Work Experience
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Internship & Practical Exposure.
              </h2>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0d1019] border border-white/[0.08] hover:border-violet-500/30 transition-all shadow-xl space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {exp.type}
                        </span>
                        <span className="text-xs font-semibold text-zinc-400 font-mono">
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mt-1.5">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-violet-300">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    "{exp.description}"
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                      Tools & Domains
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Honors & Certifications
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Achievements.
              </h2>
            </div>

            <div className="space-y-4">
              {achievementsData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0c0f18] border border-white/[0.08] hover:border-cyan-500/30 transition-all shadow-lg flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-105 transition-transform shrink-0">
                    {getAchievementIcon(item.icon)}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {item.issuer}
                      </span>
                    </div>
                    
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
