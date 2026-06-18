'use client';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItemKey } from '@/types';
import { FeatureItem } from '@/components/landing/FeaturesData';
import Link from 'next/link';

interface FeaturesSectionProps {
  features: FeatureItem[];
  selectedFeature: NavItemKey;
  onSelectFeature: (key: NavItemKey) => void;

}

export default function FeaturesSection({
  features,
  selectedFeature,
  onSelectFeature
}: FeaturesSectionProps) {
  const current = features.find(f => f.key === selectedFeature) || features[0];

  return (
    <section id="features_section" className="py-16 border-t border-slate-200/60 dark:border-slate-900/60 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-slate-900 dark:text-white">
          Surgically styled tools to keep you in direct motion.
        </h2>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2.5 max-w-xl mx-auto">
          Select any component card below to explore its real-time viewport simulation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Feature selector list */}
        <div className="lg:col-span-5 space-y-3.5">
          {features.map((feat) => {
            const Icon = feat.icon;
            const isSelected = feat.key === selectedFeature;
            return (
              <button
                key={feat.key}
                onClick={() => onSelectFeature(feat.key)}
                className={`w-full text-left p-4 rounded-xl border transition-all relative flex gap-4 cursor-pointer hover:shadow-sm ${
                  isSelected
                    ? 'border-indigo-500 bg-white dark:bg-[#0f0f0f] ring-2 ring-indigo-500/10'
                    : 'border-slate-200/70 dark:border-slate-800 bg-white/40 dark:bg-[#0f0f0f]/10 hover:bg-white dark:hover:bg-[#0f0f0f]/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-[#0f0f0f] text-slate-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-sm text-slate-900 dark:text-white">{feat.label}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded">{feat.tag}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{feat.desc}</p>
                </div>
                {isSelected && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Preview panel */}
        <div className="lg:col-span-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f0f0f]/40 p-6 rounded-2xl shadow-xl min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-indigo-500 dark:text-indigo-400">ACTIVE WORKSPACE STAGE</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">{current.metric}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white">{current.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{current.desc}</p>
            </div>

            <div className="border border-slate-150 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] p-4 rounded-xl shadow-inner min-h-[170px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {current.previewContent}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">Ready in instant compilation state</span>
            <Link href={"/sign-in"}>
              <button
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Build with this tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}