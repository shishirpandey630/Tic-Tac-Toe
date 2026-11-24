import Square from "./Square";

function center(i) {
  const col = i % 3;
  const row = Math.floor(i / 3);
  return { x: col * 100 + 50, y: row * 100 + 50 };
}

function WinLine({ line, winner }) {
  if (!line || line.length !== 3) return null;

  const a = center(line[0]);
  const c = center(line[2]);
  const dx = c.x - a.x;
  const dy = c.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const ext = 40;
  const x1 = a.x - ux * ext;
  const y1 = a.y - uy * ext;
  const x2 = c.x + ux * ext;
  const y2 = c.y + uy * ext;
  const color = winner === "X" ? "text-sky-500" : "text-rose-500";

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${color}`}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth={10}
        strokeLinecap="round"
        pathLength={1}
        style={{ strokeDasharray: 1, animation: "draw 0.45s ease forwards" }}
      />
    </svg>
  );
}

export default function Board({
  squares,
  onPlay,
  winningLine,
  winner,
  symbols,
  disabled,
}) {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            symbols={symbols}
            onClick={() => onPlay(i)}
            isWinning={winningLine.includes(i)}
            disabled={disabled}
          />
        ))}
      </div>
      <WinLine line={winningLine} winner={winner} />
    </div>
  );
}