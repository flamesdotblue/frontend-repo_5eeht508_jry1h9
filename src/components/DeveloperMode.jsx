import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

function InclusivityScore({ score }) {
  const hue = score >= 90 ? 160 : score >= 80 ? 200 : 15;
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative h-20 w-20 rounded-full grid place-items-center shadow-inner"
        style={{ background: `conic-gradient(hsl(${hue} 80% 50%) ${score * 3.6}deg, #E5E7EB 0)` }}
        aria-label={`Inclusivity score ${score} percent`}
      >
        <div className="h-14 w-14 rounded-full bg-white grid place-items-center text-slate-700 text-xl font-bold">
          {score}%
        </div>
      </div>
      <div className="text-sm text-slate-600">Inclusivity Score</div>
    </div>
  );
}

export default function DeveloperMode() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleApply = async () => {
    setIsAnalyzing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setFixed(true);
    setIsAnalyzing(false);
  };

  const issuesBefore = [
    'Low contrast detected',
    'Red/Green confusion risk',
    'Add texture patterns to charts',
    'Increase text size for legibility',
  ];

  const issuesAfter = [
    'Contrast improved',
    'Color semantics clarified',
    'Patterns added to critical data',
    'Text size increased',
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-teal-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left side: UI preview */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Design Preview</h2>
              <span className="inline-flex items-center gap-2 text-sm text-slate-600">
                <Sparkles size={16} className="text-teal-600" /> AI {fixed ? 'Applied' : 'Analysis'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <AnimatePresence initial={false}>
                {!fixed ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="col-span-2 grid md:grid-cols-2 gap-4"
                  >
                    {/* Problematic card */}
                    <div className="rounded-2xl p-4 border border-slate-200 bg-white">
                      <p className="text-slate-400 text-sm mb-2">Before</p>
                      <div className="h-40 rounded-xl bg-gradient-to-tr from-red-500 to-green-500 opacity-80 grid place-items-center text-white font-semibold">
                        Red/Green Chart
                      </div>
                      <p className="mt-3 text-sm text-slate-500">
                        Low-contrast labels and ambiguous colors.
                      </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-slate-200 bg-white">
                      <p className="text-slate-400 text-sm mb-2">Labels</p>
                      <div className="space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-red-100 text-red-400">Warning</span>
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-green-100 text-green-400">Safe</span>
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-slate-200 text-slate-400">Muted</span>
                      </div>
                      <p className="mt-3 text-[13px] text-slate-500">
                        Small text sizes and faint colors.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="col-span-2 grid md:grid-cols-2 gap-4"
                  >
                    {/* Fixed card with patterns and better contrast */}
                    <div className="rounded-2xl p-4 border border-slate-200 bg-white">
                      <p className="text-slate-400 text-sm mb-2">After</p>
                      <div className="relative h-40 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-600 grid place-items-center text-white font-semibold">
                        Accessible Chart
                        {/* patterns overlay */}
                        <div className="absolute inset-y-0 left-0 w-1/2 opacity-30 bg-[repeating-linear-gradient(45deg,white_0,white_6px,transparent_6px,transparent_12px)] rounded-l-xl" />
                        <div className="absolute inset-y-0 right-0 w-1/2 opacity-30 bg-[radial-gradient(circle,white_1px,transparent_2px)] [background-size:8px_8px] rounded-r-xl" />
                      </div>
                      <p className="mt-3 text-sm text-slate-700">
                        Clear color semantics with redundant patterns.
                      </p>
                    </div>

                    <div className="rounded-2xl p-4 border border-slate-200 bg-white">
                      <p className="text-slate-400 text-sm mb-2">Labels</p>
                      <div className="space-x-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-sky-100 text-sky-700 font-medium">Alert</span>
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-100 text-emerald-700 font-medium">Safe</span>
                        <span className="inline-block px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-700 font-medium">Warning</span>
                      </div>
                      <p className="mt-3 text-[13px] text-slate-600">
                        Larger type sizes and higher contrast colors.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side: AI Suggestions */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Suggestions</h3>
            <ul className="space-y-3">
              {(fixed ? issuesAfter : issuesBefore).map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {fixed ? (
                    <CheckCircle2 className="text-emerald-600 mt-0.5" size={18} />
                  ) : (
                    <span className="h-4 w-4 rounded-full bg-amber-400 mt-1" />
                  )}
                  <p className={`text-sm ${fixed ? 'text-slate-700' : 'text-slate-600'}`}>{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <InclusivityScore score={fixed ? 94 : 72} />
              <button
                onClick={handleApply}
                disabled={isAnalyzing || fixed}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors border ${
                  fixed
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-gradient-to-tr from-sky-500 to-teal-500 text-white border-transparent hover:opacity-90'
                }`}
                aria-label="Apply AI Fix"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> AI Analyzing…
                  </>
                ) : fixed ? (
                  <>
                    <CheckCircle2 size={16} /> Applied
                  </>
                ) : (
                  'Apply Fix'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
