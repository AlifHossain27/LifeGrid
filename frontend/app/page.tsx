'use client';
import { useState } from 'react';
import LandingPage from '@/components/landing/LandingPage';


export default function Home() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="font-sans antialiased">
      {view === 'landing' ? (
        <LandingPage onEnterDashboard={() => setView('dashboard')} />
      ) : (
        <></>
      )}
    </div>
  );
}