import React, { useState } from 'react';
import { Brain, Sparkles, BarChart3, Database, ShieldAlert, CheckCircle, Info } from 'lucide-react';

export default function CognivaultPreview() {
  const [studyHours, setStudyHours] = useState(8);
  const [sleepHours, setSleepHours] = useState(5.5);
  const [stressScore, setStressScore] = useState(7);

  // Compute a realistic interactive classification score based on the 9-feature model inputs
  const computeRisk = () => {
    const rawScore = (studyHours * 0.45) - (sleepHours * 0.6) + (stressScore * 0.55);
    if (rawScore > 4.5) return { level: "Critical", color: "text-rose-400 bg-rose-500/10 border-rose-500/30", bar: "bg-rose-500", pct: 92, note: "Immediate workload intervention advised" };
    if (rawScore > 3.0) return { level: "High", color: "text-amber-400 bg-amber-500/10 border-amber-500/30", bar: "bg-amber-500", pct: 75, note: "Sustained high load & deficit detected" };
    if (rawScore > 1.5) return { level: "Moderate", color: "text-blue-400 bg-blue-500/10 border-blue-500/30", bar: "bg-blue-500", pct: 48, note: "Manageable workload, monitor sleep" };
    return { level: "Low", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", bar: "bg-emerald-500", pct: 20, note: "Healthy balance indicators" };
  };

  const risk = computeRisk();

  return (
    <div className="w-full rounded-2xl bg-[#0d1219] border border-white/10 shadow-2xl overflow-hidden font-sans text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0e14] border-b border-white/5 font-mono">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-300 font-semibold text-xs tracking-wide">
            Cognivault ML Engine
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            FastAPI Inferences
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span className="hidden sm:inline">Pipeline: StandardScaler + LogisticRegression</span>
        </div>
      </div>

      {/* Model Benchmark Banner */}
      <div className="grid grid-cols-3 border-b border-white/5 bg-white/[0.02] p-3 text-center">
        <div className="border-r border-white/5">
          <div className="text-[10px] uppercase tracking-wider text-zinc-500">Test Accuracy</div>
          <div className="text-base sm:text-lg font-bold text-white font-mono mt-0.5">84.0%</div>
        </div>
        <div className="border-r border-white/5">
          <div className="text-[10px] uppercase tracking-wider text-zinc-500">Macro F1 Score</div>
          <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono mt-0.5">83.6%</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-zinc-500">5-Fold CV F1</div>
          <div className="text-base sm:text-lg font-bold text-teal-300 font-mono mt-0.5">86.1%</div>
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Interactive Feature Sliders */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Test In-Browser Simulator
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">9 Scored Features</span>
          </div>

          <div className="space-y-3 bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Daily Academic Study Hours</span>
                <span className="font-mono text-zinc-200">{studyHours} hrs/day</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="14" 
                step="0.5"
                value={studyHours} 
                onChange={(e) => setStudyHours(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Average Nightly Sleep</span>
                <span className="font-mono text-zinc-200">{sleepHours} hrs</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="10" 
                step="0.5"
                value={sleepHours} 
                onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Perceived Stress Level</span>
                <span className="font-mono text-zinc-200">{stressScore} / 10</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={stressScore} 
                onChange={(e) => setStressScore(parseInt(e.target.value))}
                className="w-full accent-emerald-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-400 bg-white/[0.015] p-2.5 rounded-lg border border-white/5">
            <Database className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>Dataset cleaned from 2,000 raw samples to 1,900 validated records; logged to SQLite.</span>
          </div>
        </div>

        {/* Inference Output Card */}
        <div className="md:col-span-5 flex flex-col justify-between p-4 rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 flex items-center justify-between font-mono">
              Predicted Risk Class
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>

            <div className={`p-3 rounded-xl border text-center my-2 ${risk.color}`}>
              <div className="text-2xl font-black tracking-tight uppercase">{risk.level} RISK</div>
              <div className="text-[11px] opacity-90 mt-1 font-sans">{risk.note}</div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[11px] text-zinc-400 mb-1">
                <span>Burnout Index Magnitude</span>
                <span className="font-mono">{risk.pct}%</span>
              </div>
              <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${risk.bar}`}
                  style={{ width: `${risk.pct}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-zinc-500">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Info className="w-3 h-3 shrink-0 text-emerald-400" />
              <span>Educational awareness prototype. Not clinical medical advice.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
