import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, AlertTriangle } from 'lucide-react';

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      role="switch"
      aria-checked={enabled}
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors px-1 ${
        enabled ? 'bg-teal-500' : 'bg-slate-300'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          enabled ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
      <span className="sr-only">Toggle pattern mode</span>
    </button>
  );
}

function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-[320px] sm:w-[360px] bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
      <div className="h-6 bg-slate-100" />
      <div className="p-4">{children}</div>
    </div>
  );
}

function UserMode() {
  const [patternsOn, setPatternsOn] = useState(true);
  const [voiceOpen, setVoiceOpen] = useState(false);

  const overlays = useMemo(() => (
    <>
      {/* stripes for red */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-[repeating-linear-gradient(45deg,rgba(2,6,23,0.15)_0,rgba(2,6,23,0.15)_6px,transparent_6px,transparent_12px)] pointer-events-none" />
      {/* dots for green */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle,rgba(2,6,23,0.15)_1px,transparent_1.5px)] [background-size:10px_10px] pointer-events-none" />
      {/* solid for alerts */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-900/10 backdrop-blur pointer-events-none" />
    </>
  ), []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">User Mode</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600">Pattern Mode</span>
          <Toggle enabled={patternsOn} onChange={setPatternsOn} />
        </div>
      </div>

      <PhoneFrame>
        <div className="relative">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl p-3 bg-teal-50 border border-teal-100">
              <p className="text-xs text-teal-700 font-medium">Safe</p>
              <p className="text-2xl font-bold text-teal-700">72%</p>
            </div>
            <div className="rounded-xl p-3 bg-amber-50 border border-amber-100">
              <p className="text-xs text-amber-700 font-medium">Warning</p>
              <p className="text-2xl font-bold text-amber-700">18%</p>
            </div>
            <div className="rounded-xl p-3 bg-rose-50 border border-rose-100">
              <p className="text-xs text-rose-700 font-medium">Alert</p>
              <p className="text-2xl font-bold text-rose-700">10%</p>
            </div>
          </div>

          <div className="mt-3 h-36 rounded-xl border border-slate-200 bg-gradient-to-tr from-sky-50 to-teal-50 grid place-items-center text-slate-700 text-sm font-medium relative overflow-hidden">
            Dashboard Chart
            {patternsOn && overlays}
            <div className="absolute top-2 left-2 inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/80 border border-slate-200 text-[11px] text-slate-700">
              <span className="w-2 h-2 rounded-full bg-teal-500" /> Safe
            </div>
            <div className="absolute top-2 left-20 inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/80 border border-slate-200 text-[11px] text-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> Warning
            </div>
            <div className="absolute top-2 left-40 inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/80 border border-slate-200 text-[11px] text-slate-700">
              <span className="w-2 h-2 rounded-full bg-rose-500" /> Alert
            </div>
          </div>

          <AnimatePresence>
            {voiceOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-slate-700 text-sm flex items-start gap-2"
              >
                <AlertTriangle className="text-amber-500 mt-0.5" size={16} />
                <span>Warning: High temperature detected – 38°C.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-3 text-center text-xs text-slate-500">AI Voice Guidance Active – Pattern Mode: {patternsOn ? 'ON' : 'OFF'}</p>

          <button
            onClick={() => setVoiceOpen(true)}
            className="group absolute -bottom-2 -right-2 translate-y-1/2 translate-x-1/2 h-14 w-14 rounded-full grid place-items-center bg-gradient-to-tr from-sky-500 to-teal-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
            aria-label="Trigger voice guidance"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-teal-400/40" />
            <Mic className="relative" />
          </button>
        </div>
      </PhoneFrame>
    </div>
  );
}

function BlindMode() {
  const [action, setAction] = useState('listen');
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900">Blind Mode</h3>
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-100 shadow-inner">
        <p className="text-xl font-semibold">AI says: Submit button is at bottom right.</p>
        <div className="mt-6 flex gap-3">
          {['speak', 'listen', 'repeat'].map((k) => (
            <button
              key={k}
              onClick={() => setAction(k)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors border ${
                action === k
                  ? 'bg-white text-slate-900 border-white'
                  : 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'
              }`}
            >
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </button>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-14 w-14 rounded-full grid place-items-center bg-gradient-to-tr from-teal-500 to-sky-500 text-white">
            <span className="absolute inset-0 rounded-full animate-ping bg-sky-400/30" />
            <Mic />
          </div>
          <p className="text-slate-300">Mode: {action.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default function UserSuite() {
  const [tab, setTab] = useState('user');

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-blue-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="mb-6 inline-flex rounded-full p-1 bg-slate-100 border border-slate-200">
          {[
            { id: 'user', label: 'User Mode' },
            { id: 'blind', label: 'Blind Mode' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === t.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === 'user' ? (
            <motion.div
              key="user"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <UserMode />
            </motion.div>
          ) : (
            <motion.div
              key="blind"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <BlindMode />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
