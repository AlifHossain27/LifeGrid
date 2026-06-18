import React from 'react';
import {
  Sparkles, Calendar, CheckSquare, FileText,
  PenTool, Sigma, FileUser, CheckCircle2
} from 'lucide-react';
import { NavItemKey } from '@/types';

export interface FeatureItem {
  key: NavItemKey;
  label: string;
  icon: React.ElementType;
  tag: string;
  desc: string;
  metric: string;
  gradient: string;
  previewContent: React.ReactNode;
}

export const features: FeatureItem[] = [
  {
    key: 'ai',
    label: 'AI Workspace Assistant',
    icon: Sparkles,
    tag: 'LLM Powered',
    desc: 'An ambient intelligent companion that organizes your tasks, draft quick replies, formats markdown files, and answers contextually across all your documents.',
    metric: 'Instant Context Matching',
    gradient: 'from-violet-500 to-fuchsia-500',
    previewContent: (
      <div className="space-y-3 font-sans">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Contextual AI Assistant</span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg text-xs leading-relaxed max-w-[85%] text-slate-600 dark:text-slate-300">
          "Translate my research plan to bullet points and add them to my Calendar for tomorrow."
        </div>
        <div className="bg-violet-500/10 dark:bg-violet-500/20 p-3 rounded-lg text-xs leading-relaxed max-w-[85%] ml-auto text-slate-800 dark:text-slate-200 border border-violet-500/15">
          <strong>Sure, I can do that!</strong> I&apos;ve prepared a clean bullet list and reserved 10:00 AM on your Calendar.
        </div>
        <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1">
          {['✨ Refine Text', '📅 Create Event', '📝 Convert to Note'].map(t => (
            <span key={t} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: 'calendar',
    label: 'Interactive Calendar',
    icon: Calendar,
    tag: 'Time Boxing',
    desc: 'Seamless calendar viewing and action items mapped in perfect sync. Drag, schedule, block focus hours, and view overlapping events.',
    metric: 'Zero Overlapping Hours',
    gradient: 'from-amber-500 to-orange-500',
    previewContent: (
      <div className="font-sans space-y-3">
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
          <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">Weekly Time Blocks</span>
          <span className="text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded">June 14 - 20</span>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
            <div key={day} className="bg-slate-50 dark:bg-slate-900/50 p-2 rounded border border-slate-100 dark:border-slate-800">
              <span className="font-mono text-slate-400 block mb-1">{day}</span>
              {i === 1 ? (
                <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 p-1 rounded font-medium text-[9px]">Focus Run</div>
              ) : i === 2 ? (
                <div className="bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 p-1 rounded font-medium text-[9px]">AI Sync</div>
              ) : (
                <span className="text-slate-400 font-mono">-</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/20 p-2 rounded-lg text-xs text-amber-800 dark:text-amber-300">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-[10px]">Active block: Dev Sprint (2h remaining)</span>
        </div>
      </div>
    ),
  },
  {
    key: 'tasks',
    label: 'Adaptive Grid Tasks',
    icon: CheckSquare,
    tag: 'Task Prioritizer',
    desc: 'A dynamic, visual canvas that maps your tasks based on priority, deadline, or mental load rather than flat list feeds.',
    metric: 'Bento-style visual organization',
    gradient: 'from-emerald-500 to-teal-500',
    previewContent: (
      <div className="font-sans space-y-3">
        <div className="flex justify-between items-center text-xs font-mono text-slate-500 pb-1 border-b border-slate-100 dark:border-slate-800">
          <span>Grid Priority Layout</span>
          <span className="text-emerald-500">4 / 7 Complete</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block mb-1 font-bold">CRITICAL / NOW</span>
            <div className="space-y-1">
              <div className="text-[11px] line-through text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> Submit design specification
              </div>
              <div className="text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping" /> Compile LifeGrid app
              </div>
            </div>
          </div>
          <div className="p-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-lg">
            <span className="text-[10px] font-mono text-slate-400 block mb-1 font-bold">IDEAS / LATER</span>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" /> Explore state machine
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'notes',
    label: 'Minimalist Markdown Notes',
    icon: FileText,
    tag: 'Markup Editor',
    desc: 'Streamlined text entries using elegant Markdown rules. Auto-saved, structured with clear directory nesting.',
    metric: 'Auto-saved local scratchpad',
    gradient: 'from-blue-500 to-indigo-500',
    previewContent: (
      <div className="font-sans space-y-2">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
          <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200"># meeting_notes.md</span>
          <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-1.5 text-slate-500 rounded font-mono">MD RENDER</span>
        </div>
        <div className="space-y-2 text-[11px] text-slate-600 dark:text-slate-300">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs">🚀 Project Milestones</h3>
          <p className="italic border-l-2 border-indigo-500 pl-2 text-[10.5px]">"The grid holds the coordinate systems for everything we track."</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Complete structural responsive sidebar menu</li>
            <li>Light/dark toggle with transition loops</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: 'whiteboard',
    label: 'Vector Sketch Canvas',
    icon: PenTool,
    tag: 'Infinite Canvas',
    desc: 'Free your mind on an open vector whiteboard. Draw schemas, flowchart logic, and sketch wireframes.',
    metric: 'Infinite vectors, low-latency',
    gradient: 'from-pink-500 to-rose-500',
    previewContent: (
      <div className="font-sans space-y-3">
        <div className="flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Vector Brush: Sketch Pen (2px)</span>
          <div className="flex gap-1">
            <span className="w-3 h-3 rounded-full bg-slate-800 border dark:bg-white cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-indigo-500 cursor-pointer" />
          </div>
        </div>
        <div className="h-28 border border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900/30">
          <svg className="absolute inset-0 w-full h-full" stroke="currentColor" fill="none" strokeWidth="0.2">
            <path d="M 30,50 Q 80,10 120,40 T 220,10" className="stroke-rose-400 dark:stroke-rose-500/50" />
            <rect x="130" y="55" width="60" height="30" rx="4" className="stroke-indigo-400 dark:stroke-indigo-500/50" />
            <text x="140" y="74" fontSize="8" className="font-mono fill-slate-400">Task Node</text>
          </svg>
          <span className="text-[10px] bg-slate-200/50 dark:bg-slate-800/80 px-2 py-0.5 rounded backdrop-blur-sm font-mono text-slate-500 z-10">
            Flowchart wireframe active
          </span>
        </div>
      </div>
    ),
  },
  {
    key: 'latex',
    label: 'LaTeX Document Compiler',
    icon: Sigma,
    tag: 'Scientific Compiling',
    desc: 'Write academic or research documents with instant LaTeX equation previews.',
    metric: 'Overleaf-grade instant updates',
    gradient: 'from-cyan-500 to-sky-500',
    previewContent: (
      <div className="font-sans space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-mono text-slate-650 dark:text-slate-350 font-bold">manuscript_analysis.tex</span>
          </div>
          <span className="text-[9px] bg-cyan-500/10 text-cyan-650 dark:text-cyan-400 px-2 py-0.5 rounded-md font-mono font-bold uppercase">
            Compile Success (12ms)
          </span>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6 bg-slate-950 text-slate-300 p-2.5 rounded-xl font-mono text-[9px] leading-relaxed space-y-0.5">
            <div><span className="text-slate-600 mr-2">1</span><span className="text-pink-400">\documentclass</span>{'{article}'}</div>
            <div><span className="text-slate-600 mr-2">2</span><span className="text-pink-400">\begin</span>{'{document}'}</div>
            <div><span className="text-slate-600 mr-2">3</span>  Let <span className="text-cyan-400">\theta</span>.</div>
            <div><span className="text-slate-600 mr-2">4</span>  <span className="text-pink-400">\begin</span>{'{equation}'}</div>
            <div><span className="text-slate-600 mr-2">5</span>    J(\theta) = - \frac{"1"}{"m"} \sum f_i(x)</div>
            <div><span className="text-slate-600 mr-2">6</span>  <span className="text-pink-400">\end</span>{'{equation}'}</div>
          </div>
          <div className="col-span-6 border border-slate-200 dark:border-slate-800 p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-900 dark:text-slate-100 flex flex-col justify-center">
            <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Let parameters be <span className="italic font-serif">θ</span>. The loss is:
            </p>
            <div className="my-2 text-center py-2 bg-slate-50 dark:bg-slate-950 rounded-lg font-serif text-xs">
              J(θ) = − <sup className="text-[9px]">1</sup>&frasl;<sub className="text-[9px]">m</sub> ∑ f<sub>i</sub>(x)
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'resume',
    label: 'PDF Resume Architect',
    icon: FileUser,
    tag: 'Career Builder',
    desc: 'Build polished, ATS-optimized technical resumes with simple, clean side-by-side editing.',
    metric: 'Instant ATS-Ready output',
    gradient: 'from-purple-500 to-indigo-500',
    previewContent: (
      <div className="font-sans space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[11px] font-mono font-bold">swiss_architect_bundle.pdf</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[9px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full font-bold uppercase">Swiss Clean</span>
            <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase">ATS 100/100</span>
          </div>
        </div>
        <div className="bg-white text-slate-900 p-4 rounded-xl border border-slate-200 shadow-sm relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 rounded-t-xl" />
          <div className="flex justify-between items-start border-b border-slate-200 pb-2 pt-1">
            <div>
              <h1 className="text-sm font-black tracking-tight text-slate-950 uppercase">Alif Hossain</h1>
              <p className="text-[9px] font-bold text-indigo-650 uppercase tracking-widest mt-0.5">Software Engineer</p>
            </div>
            <div className="text-[8px] font-mono text-slate-500 text-right">
              <div>alif@lifegrid.io</div>
              <div>github.com/AlifHossain27</div>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-slate-500 font-mono">
            Next JS • TypeScript • Tailwind • FastAPI • Docker
          </div>
        </div>
      </div>
    ),
  },
];