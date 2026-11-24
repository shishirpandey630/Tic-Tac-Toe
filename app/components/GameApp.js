"use client";

import { useState } from "react";
import Background from "./Background";
import ThemeToggle from "./ThemeToggle";
import Home from "./Home";
import Multiplayer from "./Multiplayer";
import Config from "./Config";
import Game from "./Game";
import { symbolsFor, SYMBOLS } from "../lib/symbols";

export default function GameApp() {
  const [screen, setScreen] = useState("home");
  const [mode, setMode] = useState("pvc");
  const [difficulty, setDifficulty] = useState("medium");
  const [symbol1, setSymbol1] = useState("cross");
  const [symbol2, setSymbol2] = useState("circle");
  const [gameKey, setGameKey] = useState(0);

  const symbols = symbolsFor(symbol1, mode === "pvp" ? symbol2 : undefined);

  function startGame() {
    setGameKey((k) => k + 1);
    setScreen("game");
  }

  function chooseSymbol1(id) {
    setSymbol1(id);
    if (id === symbol2) {
      setSymbol2(SYMBOLS.find((s) => s.id !== id).id);
    }
  }

  function chooseSymbol2(id) {
    setSymbol2(id);
    if (id === symbol1) {
      setSymbol1(SYMBOLS.find((s) => s.id !== id).id);
    }
  }

  return (
    <>
      <Background />
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      {screen === "home" && (
        <Home
          onNewGame={() => {
            setMode("pvc");
            setScreen("config");
          }}
          onMultiplayer={() => setScreen("multiplayer")}
        />
      )}

      {screen === "multiplayer" && (
        <Multiplayer
          onSelect={(m) => {
            setMode(m);
            setScreen("config");
          }}
          onBack={() => setScreen("home")}
        />
      )}

      {screen === "config" && (
        <Config
          mode={mode}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          symbol1={symbol1}
          setSymbol1={chooseSymbol1}
          symbol2={symbol2}
          setSymbol2={chooseSymbol2}
          onPlay={startGame}
          onBack={() => setScreen("home")}
        />
      )}

      {screen === "game" && (
        <Game
          key={gameKey}
          mode={mode}
          difficulty={difficulty}
          symbols={symbols}
          onExit={() => setScreen("home")}
        />
      )}
    </>
  );
}