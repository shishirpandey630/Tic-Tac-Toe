export const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(squares) {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}

function emptyIndices(squares) {
  const result = [];
  squares.forEach((v, i) => {
    if (!v) result.push(i);
  });
  return result;
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function minimax(squares, depth, isMax) {
  const win = calculateWinner(squares)?.winner;
  if (win === "O") return 10 - depth;
  if (win === "X") return depth - 10;
  if (squares.every(Boolean)) return 0;

  const scores = [];
  for (const i of emptyIndices(squares)) {
    squares[i] = isMax ? "O" : "X";
    scores.push(minimax(squares, depth + 1, !isMax));
    squares[i] = null;
  }
  return isMax ? Math.max(...scores) : Math.min(...scores);
}

function hardMove(squares) {
  let best = -Infinity;
  let move;
  for (const i of emptyIndices(squares)) {
    squares[i] = "O";
    const score = minimax(squares, 0, false);
    squares[i] = null;
    if (score > best) {
      best = score;
      move = i;
    }
  }
  return move;
}

function mediumMove(squares) {
  const empty = emptyIndices(squares);

  for (const i of empty) {
    const copy = squares.slice();
    copy[i] = "O";
    if (calculateWinner(copy)) return i;
  }
  for (const i of empty) {
    const copy = squares.slice();
    copy[i] = "X";
    if (calculateWinner(copy)) return i;
  }
  if (!squares[4]) return 4;

  const corners = [0, 2, 6, 8].filter((i) => !squares[i]);
  if (corners.length) return pick(corners);
  return pick(empty);
}

export function getBestMove(squares, difficulty) {
  if (difficulty === "easy") return pick(emptyIndices(squares));
  if (difficulty === "hard") return hardMove(squares.slice());
  return mediumMove(squares);
}