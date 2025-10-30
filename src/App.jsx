import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import HomeHero from './components/HomeHero';
import DeveloperMode from './components/DeveloperMode';
import UserSuite from './components/UserSuite';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter">
      <HeaderNav currentPage={page} onNavigate={setPage} />

      {page === 'home' && <HomeHero onChoose={setPage} />}
      {page === 'dev' && <DeveloperMode />}
      {page === 'user' && <UserSuite />}

      <footer className="mt-20 border-t border-slate-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Built with a white, blue, and teal palette. Inclusive typography and smooth animations demonstrate real-world accessibility.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
          </div>
        </div>
      </footer>
    </div>
  );
}
