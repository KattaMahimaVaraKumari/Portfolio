import React, { useState } from 'react';
import { HeartPulse, Video, FileText, Bot, ShieldCheck, UserCheck, Calendar, Sparkles } from 'lucide-react';

export default function DocAppointixPreview() {
  const [selectedTriage, setSelectedTriage] = useState('yellow');

  const triageOptions = {
    green: {
      tag: "Green · Routine",
      title: "Mild Seasonal Allergy / Follow-up",
      doctor: "Dr. Neha Verma (General Medicine)",
      aiNote: "Patient reports mild rhinitis symptoms. Gemini triage suggests non-urgent primary care consult or antihistamines.",
      bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
    },
    yellow: {
      tag: "Yellow · Priority Consult",
      title: "Persistent Migraine & Visual Aura",
      doctor: "Dr. Rajesh Kulkarni (Neurologist)",
      aiNote: "Recurrent unilateral cephalalgia with photophobia. Gemini AI flags moderate urgency for Neurological evaluation within 48h.",
      bg: "bg-amber-500/10 border-amber-500/30 text-amber-400"
    },
    red: {
      tag: "Red · Urgent Attention",
      title: "Acute Chest Discomfort & Dyspnea",
      doctor: "Dr. Ananya Sharma (Cardiologist)",
      aiNote: "High-risk triage flag generated. Gemini advises immediate physical emergency care or urgent specialist tele-triage.",
      bg: "bg-rose-500/10 border-rose-500/30 text-rose-400"
    }
  };

  const active = triageOptions[selectedTriage];

  return (
    <div className="w-full rounded-2xl bg-[#0b101b] border border-white/10 shadow-2xl overflow-hidden font-sans text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-white/5 font-mono">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-cyan-400" />
          <span className="text-zinc-300 font-semibold text-xs tracking-wide">
            DocAppointix Telehealth Platform
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Gemini AI Triage
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
          <span className="flex items-center gap-1 text-emerald-400 font-sans">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ZEGOCLOUD Ready
          </span>
        </div>
      </div>

      {/* Main interactive panel */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left: Triage selection & symptom triage */}
        <div className="md:col-span-7 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-cyan-400" /> Gemini Symptom Triage Matrix
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">Red / Yellow / Green</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {(['green', 'yellow', 'red']).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedTriage(key)}
                className={`py-2 px-2.5 rounded-xl border text-center transition-all uppercase font-mono text-[10px] font-bold ${selectedTriage === key ? triageOptions[key].bg : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]'}`}
              >
                {key} level
              </button>
            ))}
          </div>

          {/* Current Triage Assessment */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${active.bg}`}>
                {active.tag}
              </span>
              <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Gemini 1.5 Analysis
              </span>
            </div>

            <div className="text-zinc-200 font-medium text-xs mt-1">{active.title}</div>
            <p className="text-zinc-400 text-[11px] leading-relaxed">{active.aiNote}</p>
          </div>

          {/* Feature Highlights Chips */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2 text-zinc-300">
              <Video className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>WebRTC Encrypted Teleconsult</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2 text-zinc-300">
              <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>AI Clinical Note Generation</span>
            </div>
          </div>
        </div>

        {/* Right: Telehealth Consult Mockup */}
        <div className="md:col-span-5 flex flex-col justify-between p-3.5 rounded-xl bg-gradient-to-b from-[#131926] to-[#0c121e] border border-white/10">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] text-zinc-400 font-mono">
              <span>ACTIVE SESSION</span>
              <span className="text-cyan-400">ID: #MED-9402</span>
            </div>

            {/* Video preview simulation */}
            <div className="relative mt-3 rounded-lg overflow-hidden bg-zinc-900 aspect-video flex items-center justify-center border border-white/5">
              <div className="text-center p-3">
                <div className="w-10 h-10 mx-auto rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-1.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-white">{active.doctor}</div>
                <div className="text-[10px] text-zinc-400">Available for Instant Consultation</div>
              </div>

              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur text-[9px] text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> HD Live
              </div>
            </div>

            <div className="mt-3 space-y-1.5 text-[11px]">
              <div className="flex justify-between text-zinc-400">
                <span>Payment Engine</span>
                <span className="text-zinc-200 font-mono">Razorpay Gateway</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Prescription Cloud</span>
                <span className="text-zinc-200 font-mono">Cloudinary CDN</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
            <span>Role: Patient · Doctor · Admin</span>
            <span className="text-cyan-400">Socket.io Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
