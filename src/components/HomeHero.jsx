import React from 'react';
import Spline from '@splinetool/react-spline';
import { Code2, Eye } from 'lucide-react';

export default function HomeHero({ onChoose }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-teal-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              AI For All – Empowering Colorblind and Visually Impaired Users.
            </h1>
            <p className="text-lg text-slate-600">
              Dual-mode AI accessibility assistant for designers and users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onChoose('dev')}
                className="group flex-1 inline-flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-500 text-white px-5 py-4 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
                aria-label="Open Developer Mode"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👩‍💻</span>
                  <div className="text-left">
                    <p className="font-semibold leading-5">Developer Mode</p>
                    <p className="text-xs/4 text-white/80">Analyze and auto-fix contrast & colors</p>
                  </div>
                </div>
                <Code2 className="opacity-80 group-hover:translate-x-0.5 transition-transform" size={18} />
              </button>
              <button
                onClick={() => onChoose('user')}
                className="group flex-1 inline-flex items-center justify-between gap-3 rounded-2xl bg-white text-slate-800 px-5 py-4 border border-slate-200 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                aria-label="Open User Mode"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👁️</span>
                  <div className="text-left">
                    <p className="font-semibold leading-5">User Mode</p>
                    <p className="text-xs/4 text-slate-600">Adaptive overlays & voice guidance</p>
                  </div>
                </div>
                <Eye className="opacity-80 group-hover:translate-x-0.5 transition-transform" size={18} />
              </button>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
