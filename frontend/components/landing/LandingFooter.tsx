'use client';
import { Grid } from 'lucide-react';


export default function LandingFooter() {
  return (
    <footer className="bg-slate-100 dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Grid className="w-4 h-4" />
          </div>
          <span className="font-sans font-bold text-sm tracking-tight text-slate-900 dark:text-white">
            Life<span className="text-indigo-600 dark:text-indigo-400">Grid</span>
          </span>
          <span className="text-xs font-mono text-slate-400 ml-2">© 2026. Built with high integrity.</span>
        </div>
        <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-350 font-sans">
          <a href="#features_section" className="hover:underline">Tools Index</a>
        </div>
      </div>
    </footer>
  );
}