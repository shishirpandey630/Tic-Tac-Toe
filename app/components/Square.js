export default function Square({ value, symbols, onClick, isWinning, disabled }) {
  const color =
    value === "X" ? "text-sky-500" : value === "O" ? "text-rose-500" : "";

  const state = isWinning
    ? "bg-emerald-50 ring-2 ring-emerald-400 dark:bg-emerald-500/10"
    : value
    ? "bg-slate-100 dark:bg-slate-800"
    : disabled
    ? "bg-slate-100 dark:bg-slate-800"
    : "bg-slate-100 hover:bg-slate-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700";

  const glyph = value ? symbols?.[value] ?? value : "";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!!value || disabled}
      aria-label={value ? `Cell ${glyph}` : "Empty cell"}
      className={`flex aspect-square select-none items-center justify-center rounded-2xl text-5xl font-extrabold leading-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:cursor-default sm:text-6xl ${state} ${color}`}
    >
      {glyph}
    </button>
  );
}