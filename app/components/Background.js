export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-300/50 blur-3xl animate-blob dark:bg-sky-600/20" />
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-rose-300/50 blur-3xl animate-blob [animation-delay:-7s] dark:bg-rose-600/20" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-300/50 blur-3xl animate-blob [animation-delay:-13s] dark:bg-violet-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.35)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}