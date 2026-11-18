import React, { useState } from 'react';
import { Activity, CheckCircle2, AlertTriangle, Clock, RefreshCw, Shield, ChevronRight, Zap } from 'lucide-react';

export default function MonitorlyPreview() {
  const [activeTab, setActiveTab] = useState('endpoints');
  const [lastCheckTime, setLastCheckTime] = useState('12s ago');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const endpoints = [
    { name: "Auth Service /api/v1/auth/verify", method: "POST", status: 200, latency: "42ms", uptime: "99.98%", state: "Operational" },
    { name: "Payment Gateway /api/v1/checkout", method: "POST", status: 200, latency: "118ms", uptime: "99.95%", state: "Operational" },
    { name: "User Profile Sync /api/v1/users/me", method: "GET", status: 200, latency: "36ms", uptime: "100%", state: "Operational" },
    { name: "Analytics Ingestion /api/v1/telemetry", method: "POST", status: 200, latency: "64ms", uptime: "99.89%", state: "Operational" },
  ];

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastCheckTime('Just now');
    }, 700);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0d1019] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Chrome Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d14] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-3 font-sans text-xs text-zinc-400 font-medium tracking-wide">
            monitorly.internal/dashboard
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">
            CRON: */60 * * * * *
          </span>
          <button 
            onClick={triggerRefresh}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-violet-400' : ''}`} />
            <span className="text-[11px] font-sans">Poll</span>
          </button>
        </div>
      </div>

      {/* Dashboard Top Stats */}
      <div className="p-4 sm:p-5 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1 flex items-center justify-between">
              Avg Uptime <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-xl font-bold font-sans text-white">99.96%</div>
            <div className="text-[10px] text-emerald-400/90 mt-0.5 font-sans">0 incidents past 24h</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">P95 Latency</div>
            <div className="text-xl font-bold font-sans text-white">52ms</div>
            <div className="text-[10px] text-zinc-400 mt-0.5 font-sans">-8ms vs last week</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Monitored Endpoints</div>
            <div className="text-xl font-bold font-sans text-white">12 Total</div>
            <div className="text-[10px] text-zinc-400 mt-0.5 font-sans">100% healthy</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Worker Status</div>
            <div className="text-sm font-semibold font-sans text-violet-400 mt-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-violet-400" /> node-cron active
            </div>
            <div className="text-[10px] text-zinc-500 mt-1 font-sans">Checked {lastCheckTime}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 px-5 pt-3 border-b border-white/5 font-sans text-xs">
        <button 
          onClick={() => setActiveTab('endpoints')}
          className={`pb-2.5 font-medium transition-colors border-b-2 ${activeTab === 'endpoints' ? 'border-violet-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
        >
          Endpoints List (4 Sampled)
        </button>
        <button 
          onClick={() => setActiveTab('incidents')}
          className={`pb-2.5 font-medium transition-colors border-b-2 ${activeTab === 'incidents' ? 'border-violet-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
        >
          Incident Log & Alerts
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5">
        {activeTab === 'endpoints' ? (
          <div className="space-y-2.5">
            {endpoints.map((ep, idx) => (
              <div 
                key={idx}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-violet-500/30 transition-all gap-2"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ep.method === 'POST' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'}`}>
                    {ep.method}
                  </span>
                  <span className="font-mono text-zinc-300 truncate text-[11px] sm:text-xs">
                    {ep.name}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-[11px] shrink-0 font-sans">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs">{ep.status} OK</span>
                  </span>
                  <span className="text-zinc-400 font-mono hidden sm:inline">
                    {ep.latency}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">
                    {ep.uptime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2 text-zinc-400 font-sans">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-medium text-white">All monitored services healthy</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">Automated Zod payload assertions passing across all monitored routes.</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
              <Shield className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-medium text-white">JWT Cookie Authentication verified</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">HttpOnly cookie validation & token expiry tests: 100% pass rate.</div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-[10px] text-zinc-500">
          <span className="flex items-center gap-1.5 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Illustrative sample data · Project functionality preview
          </span>
          <span className="font-mono text-zinc-400">Stack: Vite · Express · Mongo · Zod · Cron</span>
        </div>
      </div>
    </div>
  );
}
