"use client";

import { useEffect, useState } from "react";
import Board from "./Board";
import WinnerModal from "./WinnerModal";
import { calculateWinner, getBestMove } from "../lib/game";

function ScoreCard({ label, value, color }) {
  return (
    <div className="rounded-2xl bg-slate-100 py-3 dark:bg-slate-800">
      <div className={`text-2xl font-extrabold ${color}`}>{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </div>
    </div>
  );
}

export default function Game({ mode, difficulty, symbols, onExit }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [showResult, setShowResult] = useState(false);

  const vsComputer = mode === "pvc";

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line ?? [];
  const isDraw = !winner && squares.every(Boolean);
  const gameOver = !!winner || isDraw;

  function play(i) {
    if (squares[i] || gameOver) return;

    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";

    const res = calculateWinner(next);
    setSquares(next);
    if (res) {
      setScores((s) => ({ ...s, [res.winner]: s[res.winner] + 1 }));
    } else if (next.every(Boolean)) {
      setScores((s) => ({ ...s, draws: s.draws + 1 }));
    }
    setXIsNext(!xIsNext);
  }

  function handlePlay(i) {
    if (vsComputer && !xIsNext) return;
    play(i);
  }

  useEffect(() => {
    if (!vsComputer || xIsNext || gameOver) return;
    const timer = setTimeout(() => {
      const idx = getBestMove(squares, difficulty);
      if (idx != null) play(idx);
    }, 450);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares, xIsNext, vsComputer, difficulty, gameOver]);

  useEffect(() => {
    if (!gameOver) return;
    const timer = setTimeout(() => setShowResult(true), 700);
    return () => clearTimeout(timer);
  }, [gameOver]);

  function newGame() {
    setShowResult(false);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function resetAll() {
    newGame();
    setScores({ X: 0, O: 0, draws: 0 });
  }

  let status;
  if (winner) {
    status = vsComputer
      ? winner === "X"
        ? "You win!"
        : "Computer wins!"
      : `${symbols[winner]} wins!`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else if (vsComputer) {
    status = xIsNext ? "Your turn" : "Computer thinking...";
  } else {
    status = `${symbols[xIsNext ? "X" : "O"]}'s turn`;
  }

  const statusColor = winner
    ? winner === "X"
      ? "text-sky-500"
      : "text-rose-500"
    : isDraw
    ? "text-slate-500 dark:text-slate-400"
    : xIsNext
    ? "text-sky-500"
    : "text-rose-500";

  const modeLabel = vsComputer
    ? `vs Computer · ${difficulty}`
    : "2 Players";

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onExit}
            className="flex items-center gap-1 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow ring-1 ring-slate-900/5 backdrop-blur transition-colors hover:bg-white dark:bg-slate-800/80 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-slate-800"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Menu
          </button>
          <span className="text-xs font-semibold capitalize text-slate-400">
            {modeLabel}
          </span>
        </div>

        <div className="rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-900/5 backdrop-blur sm:p-8 dark:bg-slate-900/80 dark:ring-white/10">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
              Tic Tac Toe
            </h1>
            <p className={`mt-2 text-lg font-semibold ${statusColor}`}>{status}</p>
          </div>

          <Board
            squares={squares}
            onPlay={handlePlay}
            winningLine={winningLine}
            winner={winner}
            symbols={symbols}
            disabled={vsComputer && !xIsNext && !gameOver}
          />

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <ScoreCard
              label={vsComputer ? `You ${symbols.X}` : symbols.X}
              value={scores.X}
              color="text-sky-500"
            />
            <ScoreCard label="Draws" value={scores.draws} color="text-slate-500" />
            <ScoreCard
              label={vsComputer ? `CPU ${symbols.O}` : symbols.O}
              value={scores.O}
              color="text-rose-500"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={newGame}
              className="flex-1 rounded-xl bg-slate-800 py-3 font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {gameOver ? "Play Again" : "Restart"}
            </button>
            <button
              type="button"
              onClick={resetAll}
              className="rounded-xl bg-slate-100 px-4 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <WinnerModal
        show={showResult && gameOver}
        isDraw={isDraw}
        glyph={winner ? symbols[winner] : null}
        title={status}
        color={winner === "X" ? "text-sky-500" : "text-rose-500"}
        onPlayAgain={newGame}
        onMenu={onExit}
      />
    </main>
  );
}