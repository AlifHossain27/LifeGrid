'use client';
import { useState } from 'react';
import { NavItemKey } from '@/types';
import LandingHeader from '@/components/landing/LandingHeader';
import HeroSection from './HeroSection';
import FeaturesSection from '@/components/landing/FeatureSection';
import LandingFooter from '@/components/landing/LandingFooter';
import { features } from '@/components/landing/FeaturesData';


export default function LandingPage() {
  const [selectedFeature, setSelectedFeature] = useState<NavItemKey>('ai');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0a0a0a] dark:text-slate-200">
      <LandingHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <HeroSection />
        <FeaturesSection
          features={features}
          selectedFeature={selectedFeature}
          onSelectFeature={setSelectedFeature}
        />
      </main>
      <LandingFooter />
    </div>
  );
}