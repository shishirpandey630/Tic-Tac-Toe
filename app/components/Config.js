"use client";

import { SYMBOLS } from "../lib/symbols";

function SymbolPicker({ label, value, onChange }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <div className="grid grid-cols-6 gap-2">
        {SYMBOLS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange(s.id)}
            aria-label={`${label}: ${s.id}`}
            aria-pressed={value === s.id}
            className={`flex h-12 items-center justify-center rounded-xl text-2xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              value === s.id
                ? "bg-sky-500 text-white shadow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {s.glyph}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Config({
  mode,
  difficulty,
  setDifficulty,
  symbol1,
  setSymbol1,
  symbol2,
  setSymbol2,
  onPlay,
  onBack,
}) {
  const vsComputer = mode === "pvc";

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-900/5 backdrop-blur sm:p-8 dark:bg-slate-900/80 dark:ring-white/10">
        <div className="mb-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
            {vsComputer ? "New Game" : "2 Players"}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {vsComputer ? (
            <SymbolPicker label="Your symbol" value={symbol1} onChange={setSymbol1} />
          ) : (
            <>
              <SymbolPicker label="Player 1" value={symbol1} onChange={setSymbol1} />
              <SymbolPicker label="Player 2" value={symbol2} onChange={setSymbol2} />
            </>
          )}

          {vsComputer && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Difficulty
              </p>
              <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
                {["easy", "medium", "hard"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setDifficulty(level)}
                    className={`rounded-lg py-2 text-sm font-semibold capitalize transition-colors ${
                      difficulty === level
                        ? "bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-white"
                        : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onPlay}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 py-4 text-lg font-bold text-white shadow-lg shadow-sky-500/20 transition-transform hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          Play
        </button>
      </div>
    </main>
  );
}