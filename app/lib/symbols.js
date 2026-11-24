export const SYMBOLS = [
  { id: "cross", glyph: "✕" },
  { id: "circle", glyph: "◯" },
  { id: "triangle", glyph: "△" },
  { id: "square", glyph: "▢" },
  { id: "diamond", glyph: "◇" },
  { id: "star", glyph: "☆" },
];

export function symbolsFor(player1Id, player2Id) {
  const p1 = SYMBOLS.find((s) => s.id === player1Id) ?? SYMBOLS[0];
  let p2 = SYMBOLS.find((s) => s.id === player2Id);
  if (!p2 || p2.id === p1.id) {
    p2 = SYMBOLS.find((s) => s.id !== p1.id) ?? SYMBOLS[1];
  }
  return { X: p1.glyph, O: p2.glyph };
}