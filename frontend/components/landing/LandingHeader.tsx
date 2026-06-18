'use client';
import { Grid, ArrowRight } from 'lucide-react';
import Link from 'next/link';



export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-slate-200/50 dark:border-slate-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/25">
            <Grid className="w-5 h-5" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Life<span className="text-indigo-600 dark:text-indigo-400">Grid</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-350">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="font-mono text-xs text-slate-400">v1.2.0 Open Beta</span>
        </nav>

        <Link href={"/sign-in"}>
          <button
            className="relative group overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            
          </button>
        </Link>
      </div>
    </header>
  );
}