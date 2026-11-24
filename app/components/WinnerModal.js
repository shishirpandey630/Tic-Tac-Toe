const CONFETTI = [
  { left: "12%", top: "18%", color: "bg-sky-400", delay: "0s" },
  { left: "22%", top: "8%", color: "bg-violet-400", delay: "0.1s" },
  { left: "78%", top: "12%", color: "bg-rose-400", delay: "0.05s" },
  { left: "88%", top: "26%", color: "bg-emerald-400", delay: "0.15s" },
  { left: "8%", top: "40%", color: "bg-amber-400", delay: "0.2s" },
  { left: "92%", top: "48%", color: "bg-sky-400", delay: "0.08s" },
  { left: "16%", top: "62%", color: "bg-rose-400", delay: "0.12s" },
  { left: "84%", top: "66%", color: "bg-violet-400", delay: "0.18s" },
];

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3" />
    </svg>
  );
}

function DrawIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8">
      <path strokeLinecap="round" d="M5 9h14M5 15h14" />
    </svg>
  );
}

export default function WinnerModal({
  show,
  isDraw,
  glyph,
  title,
  color,
  onPlayAgain,
  onMenu,
}) {
  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm animate-fade"
    >
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl ring-1 ring-slate-900/5 animate-pop dark:bg-slate-900 dark:ring-white/10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {CONFETTI.map((c, i) => (
            <span
              key={i}
              className={`absolute h-2 w-2 rounded-sm ${c.color} animate-rise`}
              style={{ left: c.left, top: c.top, animationDelay: c.delay }}
            />
          ))}
        </div>

        <div
          className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg ${
            isDraw ? "from-slate-400 to-slate-500" : ""
          }`}
        >
          {isDraw ? <DrawIcon /> : <TrophyIcon />}
        </div>

        {!isDraw && glyph && (
          <div className={`text-6xl font-extrabold leading-none ${color}`}>{glyph}</div>
        )}

        <h2 className="mt-3 text-2xl font-extrabold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          {isDraw ? "No winner this time" : "Well played!"}
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <button
            type="button"
            onClick={onPlayAgain}
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 py-3.5 text-lg font-bold text-white shadow-lg shadow-sky-500/20 transition-transform hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Play Again
          </button>
          <button
            type="button"
            onClick={onMenu}
            className="w-full rounded-2xl bg-slate-100 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}