"use client";

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path strokeLinecap="round" d="M2.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path strokeLinecap="round" d="M15.5 20c0-2.2-.6-3.8-1.8-4.8 3-.6 5.8 1 5.8 4.8" />
    </svg>
  );
}

export default function Multiplayer({ onSelect, onBack }) {
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
            Multiplayer
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onSelect("pvp")}
          className="flex w-full items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-4 text-left transition-all hover:border-sky-400 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-sky-500 dark:hover:bg-slate-800"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-500 dark:bg-sky-500/10">
            <UsersIcon />
          </span>
          <span className="flex flex-col">
            <span className="font-bold text-slate-800 dark:text-slate-100">
              Player vs Player
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Two players, one device
            </span>
          </span>
        </button>

        <p className="mt-4 text-center text-xs text-slate-400">
          Want to challenge the computer? Use New Game.
        </p>
      </div>
    </main>
  );
}