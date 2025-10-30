import React from 'react';
import { Home, Code2, Eye, ArrowLeft } from 'lucide-react';

export default function HeaderNav({ currentPage, onNavigate }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => onNavigate('home')}
          aria-label="AI For All Home"
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 via-teal-400 to-blue-600 shadow-inner" />
          <div className="leading-tight">
            <p className="font-semibold text-slate-800 text-lg">AI For All</p>
            <p className="text-xs text-slate-500">Inclusive by design</p>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
              currentPage === 'home'
                ? 'bg-sky-100 text-sky-700'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            <Home size={16} /> Home
          </button>
          <button
            onClick={() => onNavigate('dev')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
              currentPage === 'dev'
                ? 'bg-teal-100 text-teal-700'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            <Code2 size={16} /> Developer Mode
          </button>
          <button
            onClick={() => onNavigate('user')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
              currentPage === 'user'
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            <Eye size={16} /> User Mode
          </button>
        </nav>

        {currentPage !== 'home' && (
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm bg-white border border-slate-200 hover:bg-slate-50 text-slate-700"
          >
            <ArrowLeft size={16} /> Back
          </button>
        )}
      </div>
    </header>
  );
}
