'use client';
import {
  Sparkles, Calendar, CheckSquare, FileText,
  PenTool, Sigma, FileUser, Cpu, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="py-10 md:py-20 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/30 text-xs text-indigo-600 dark:text-indigo-400 mb-6 font-mono font-medium">
        <Cpu className="w-3.5 h-3.5" />
        <span>AI-Optimized Multi-Tool Environment</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight max-w-4xl mx-auto text-slate-900 dark:text-white leading-[1.1] mb-6">
        The complete daily command center for{' '}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          deep focus
        </span>{' '}
        and productivity.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
        LifeGrid synthesizes your daily planner, interactive notes, infinite whiteboard graphs,
        scientific document compilers, and personal resume workflows into a single high-performance workspace.
      </p>

      {/* Preview Panel */}
      <div className="mt-16 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-[#0c0c0c] p-6 sm:p-8 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-6">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-400" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>ws-lifegrid.app/dashboard/multi-engine_v1.2</span>
          </div>
          <div className="w-12 h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Sidebar mockup */}
          <div className="md:col-span-3 border-r border-slate-150 dark:border-slate-800/80 pr-5 hidden md:block">
            <div className="space-y-2 h-full flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="font-bold text-[10px] px-2 py-1.5 font-mono text-slate-400 tracking-wider">WORKSPACE COMPILER</div>
                {[
                  { Icon: Sparkles, label: 'AI Workspace', active: true },
                  { Icon: Calendar, label: 'Shared Calendar' },
                  { Icon: CheckSquare, label: 'Adaptive Grid' },
                  { Icon: FileText, label: 'Markup Notes' },
                  { Icon: PenTool, label: 'Whiteboard' },
                  { Icon: Sigma, label: 'LaTeX Document' },
                  { Icon: FileUser, label: 'Resume Architect' },
                ].map(({ Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-sans font-medium transition-all ${
                      active
                        ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 font-bold'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/40'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" /> {label}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-150 dark:border-slate-850">
                <span className="text-[9px] font-mono font-bold text-indigo-500 block">LOCAL ENVIRONMENT</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block leading-tight mt-1">Sandboxed Storage Ready</span>
              </div>
            </div>
          </div>

          {/* Main content mockup */}
          <div className="md:col-span-9 flex flex-col justify-between min-h-[580px]">
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
              {/* AI dialogue */}
              <div className="border border-slate-150 dark:border-slate-800/80 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-xs flex flex-col justify-between sm:col-span-3 min-h-[250px]">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-indigo-500 dark:text-indigo-400 font-bold mb-2.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>[COGNITIVE WORKSPACE ENGINE]</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-100 dark:bg-slate-900/60 p-2.5 rounded-xl text-[10px] max-w-[90%] text-slate-650 dark:text-slate-300">
                      "Verify my LaTeX equation blocks, find gaps in my experience bullet lists, and coordinate a focus block for the afternoon."
                    </div>
                    <div className="bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/15 p-2.5 rounded-xl text-[10px] ml-auto max-w-[90%] text-indigo-850 dark:text-indigo-200">
                      <strong>Sure, Alif!</strong> Found 1 syntax error in <code className="font-mono bg-indigo-550/10 px-1 rounded text-indigo-600">J(\theta)</code> summation indices. Adjusted Swiss Clean resume layout & scheduled 3h deep-focus.
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#0d0d0d] p-3 rounded-xl border border-slate-150 dark:border-slate-850 mt-3 text-[10px] space-y-1.5">
                  <div className="flex justify-between text-slate-400 font-mono text-[9px]">
                    <span>COGNITIVE MATCH CONTEXT</span>
                    <span className="text-emerald-500 font-extrabold uppercase">99.2% Accuracy</span>
                  </div>
                  <div className="font-sans font-bold text-slate-800 dark:text-slate-100">
                    ➔ Action: 1 TeX check & 1 Swiss resume update synced
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="border border-slate-150 dark:border-slate-800/80 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-xs sm:col-span-3 flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-slate-400 font-bold uppercase tracking-wider text-[10px]">TIME ALLOCATION GRID</span>
                    <span className="text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-md font-mono font-bold">TODAY</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex gap-2.5 bg-white dark:bg-[#0d0d0d] p-3 rounded-xl border border-slate-150 dark:border-slate-850">
                      <span className="font-mono text-[9px] text-amber-500 font-black pt-0.5">09:00</span>
                      <div className="border-l-2 border-amber-500 pl-3">
                        <h5 className="font-bold text-[11px] text-slate-900 dark:text-white">Active Focus Session</h5>
                        <p className="text-[10px] text-slate-450 dark:text-slate-400 mt-0.5">LaTeX mathematical typesets & equations</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 bg-indigo-50/40 dark:bg-[#12101f]/60 p-3 rounded-xl border border-indigo-100/20 dark:border-indigo-950/30">
                      <span className="font-mono text-[9px] text-indigo-500 font-black pt-0.5">14:30</span>
                      <div className="border-l-2 border-indigo-500 pl-3">
                        <h5 className="font-bold text-[11px] text-indigo-900 dark:text-indigo-400">Swiss Resume Compilation</h5>
                        <p className="text-[10px] text-indigo-500/90 dark:text-indigo-300/85 mt-0.5">ATS compliance validation & templates check</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-150 dark:border-slate-850 pt-2.5 mt-2.5">
                  <p className="text-[9.5px] text-slate-400 dark:text-slate-500 font-mono">➔ 5 focus blocks mapped today.</p>
                  <div className="w-16 bg-slate-200 dark:bg-slate-850 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[70%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 mt-6">
              {/* LaTeX node */}
              <div className="border border-slate-150 dark:border-slate-800/80 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-xs sm:col-span-2 flex flex-col justify-between min-h-[260px]">
                <div>
                  <div className="flex justify-between items-center mb-2.5 border-b border-slate-150 dark:border-slate-850 pb-2">
                    <span className="font-mono text-cyan-500 font-bold uppercase tracking-wider text-[9px]">LaTeX COMPILER</span>
                    <div className="w-2 h-2 rounded-full bg-cyan-550 animate-ping" />
                  </div>
                  <div className="bg-slate-950 border border-slate-900 block p-2.5 rounded-xl font-mono text-[9px] text-slate-350 select-none overflow-x-auto whitespace-nowrap leading-relaxed">
                    <span className="text-pink-400 font-bold">\sum</span>_&#123;i=1&#125;^n \alpha_i x_i^2 + \theta
                  </div>
                  <div className="mt-3 p-3 bg-white dark:bg-[#0d0d0d] border border-slate-150 dark:border-[#151515] rounded-xl text-center">
                    <div className="font-serif text-[12px] font-extrabold py-1.5 text-slate-900 dark:text-white">
                      ∑<sub>i=1</sub><sup>n</sup> α<sub>i</sub> x<sub>i</sub><sup>2</sup> + θ
                    </div>
                    <span className="text-[8px] text-slate-450 dark:text-slate-500 font-mono block">Rendered Block Output</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 mt-2">
                  <span>➔ TeX: success</span>
                  <span className="text-cyan-550 font-bold">12ms</span>
                </div>
              </div>

              {/* Resume node */}
              <div className="border border-slate-150 dark:border-slate-800/80 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 text-xs sm:col-span-4 flex flex-col justify-between min-h-[260px]">
                <div>
                  <div className="flex justify-between items-center mb-2.5 border-b border-slate-150 dark:border-slate-850 pb-2">
                    <span className="font-mono text-purple-500 font-bold uppercase tracking-wider text-[9px]">RESUME ARCHITECT (SWISS CLEAR)</span>
                    <span className="text-[8px] font-mono bg-purple-500/10 text-purple-650 dark:text-purple-400 px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">ATS OK</span>
                  </div>
                  <div className="bg-white text-slate-900 p-3.5 rounded-xl border border-slate-200/80 shadow-sm relative space-y-2 mt-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 rounded-t-xl" />
                    <div className="flex justify-between items-start border-b border-slate-150 pb-1 pt-0.5">
                      <div>
                        <strong className="text-[9.5px] uppercase font-black tracking-tight text-slate-950 block">Alif Hossain</strong>
                        <span className="text-[7.5px] font-bold text-indigo-650 tracking-wide block uppercase">Solutions PM / Systems</span>
                      </div>
                      <span className="text-[7px] font-mono text-slate-450">alif@lifegrid.io</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 text-left">
                      <div className="col-span-4 border-r border-slate-100 pr-1.5 space-y-1.5">
                        <span className="text-[7px] font-mono text-slate-400 font-bold block uppercase">// STACK</span>
                        <div className="flex flex-wrap gap-0.5">
                          {['React', 'TS', 'Tailwind', 'LaTeX'].map(s => (
                            <span key={s} className="text-[6.5px] font-mono px-1 py-0.5 bg-slate-50 border border-slate-200 rounded text-slate-800">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-8 space-y-1">
                        <span className="text-[7px] font-mono text-indigo-650 font-bold block uppercase">PROFESSIONAL EXPERIENCE</span>
                        <div className="leading-tight">
                          <div className="flex justify-between text-[7.5px] font-bold text-slate-900">
                            <span>Lead Workspace Architect</span>
                            <span className="text-slate-400 font-medium">Apex Systems</span>
                          </div>
                          <p className="text-[7px] text-slate-500 leading-snug">
                            Authored layout systems representing mathematical models, reducing overhead by 34%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-150 dark:border-slate-850 pt-2 flex items-center justify-between text-[8px] font-mono text-slate-400 mt-1.5">
                  <span>LifeGrid Premium Resume Core</span>
                  <span>Page 1 of 1</span>
                </div>
              </div>
            </div>

            {/* Footer row */}
            <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 mt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="flex flex-wrap gap-2.5 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Engines: 6
                </span>
                <span>• Local Storage Grid Synced</span>
                <span>• Secured Container Loop</span>
              </div>
              <Link href={"/sign-up"}>
                <button
                  className="text-xs bg-indigo-600 hover:bg-indigo-505 text-white px-5 py-2 rounded-xl font-sans font-bold flex items-center gap-1 cursor-pointer transition-colors active:scale-95 shadow-lg shadow-indigo-600/25"
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}