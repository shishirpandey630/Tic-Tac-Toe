"use client";

function TicTacToeIcon() {
  return (
    <div className="relative mb-8 flex justify-center">
      <div className="absolute inset-0 -z-10 m-auto h-28 w-28 rounded-3xl bg-gradient-to-br from-sky-500 via-violet-500 to-rose-500 opacity-40 blur-2xl" />
      <svg viewBox="0 0 120 120" className="h-28 w-28 drop-shadow-xl">
        <defs>
          <linearGradient id="tttGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="55%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="112" height="112" rx="28" fill="url(#tttGrad)" />
        <line
          x1="30"
          y1="30"
          x2="90"
          y2="90"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.35"
        />
        <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.85">
          <line x1="46" y1="24" x2="46" y2="96" />
          <line x1="74" y1="24" x2="74" y2="96" />
          <line x1="24" y1="46" x2="96" y2="46" />
          <line x1="24" y1="74" x2="96" y2="74" />
        </g>
        <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round">
          <line x1="27" y1="27" x2="43" y2="43" />
          <line x1="43" y1="27" x2="27" y2="43" />
          <line x1="77" y1="77" x2="93" y2="93" />
          <line x1="93" y1="77" x2="77" y2="93" />
        </g>
        <circle cx="60" cy="60" r="11" fill="none" stroke="#ffffff" strokeWidth="7" />
      </svg>
    </div>
  );
}

export default function Home({ onNewGame, onMultiplayer }) {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <TicTacToeIcon />
        <h1 className="bg-gradient-to-r from-sky-500 via-violet-500 to-rose-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
          Tic Tac Toe
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
        A classic game of strategy and wit. Choose your mark and dominate the grid.
        <span className="block text-center mt-4 text-lg font-bold"> Ready to Play?</span>
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <button
            type="button"
            onClick={onNewGame}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 py-4 text-lg font-bold text-white shadow-lg shadow-sky-500/20 transition-transform hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            New Game
          </button>
          <button
            type="button"
            onClick={onMultiplayer}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white/80 py-4 text-lg font-bold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <circle cx="9" cy="8" r="3" />
              <path strokeLinecap="round" d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
              <path strokeLinecap="round" d="M16 5.5a3 3 0 010 5.5M18 20c0-2.2-.8-3.8-2-4.8" />
            </svg>
            Multiplayer
          </button>
        </div>
      </div>
    </main>
  );
}