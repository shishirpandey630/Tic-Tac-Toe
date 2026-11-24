# 🎮 Tic Tac Toe

A clean, responsive Tic Tac Toe game built with **Next.js**, **React**, and **Tailwind CSS**. Play against a friend or challenge the computer, pick your own symbols, and enjoy a polished dark/light UI.

## ✨ Features

- **Two ways to play**
  - **New Game** — single player vs the computer.
  - **Multiplayer** — Player vs Player on one device.
- **Playable symbols** — choose from ✕ ◯ △ ▢ ◇ ☆. In 2-player mode, *both* players pick their own symbol.
- **AI opponent with 3 difficulties**
  - Easy — random moves.
  - Medium — wins/blocks, takes center, then corners.
  - Hard — unbeatable minimax.
- **Dark & light mode** — toggle anytime, persisted in `localStorage`, no flash on load.
- **Animated gradient background** with soft drifting blobs.
- **Win line animation** — a stroke is drawn through the winning cells.
- **Winner popup** — cool modal with trophy, confetti, and Play Again / Menu.
- **Score tracking** — wins per player + draws, with Restart and Reset.
- **Responsive & accessible** — mobile-friendly layout, focus rings, ARIA labels.
- **Cool start screen** — custom tic-tac-toe icon and gradient buttons.

## 🧱 Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- JavaScript (ES Modules)


## 📁 Project Structure

app/
├─ layout.js            # Root layout, theme script, metadata
├─ page.js              # Entry page
├─ globals.css          # Tailwind v4 + dark variant + animations
├─ components/
│  ├─ GameApp.js        # Screen state machine (home/multiplayer/config/game)
│  ├─ Home.js           # Start screen (icon + New Game / Multiplayer)
│  ├─ Multiplayer.js    # Player vs Player entry
│  ├─ Config.js         # Symbol + difficulty selection
│  ├─ Game.js           # Game logic, turns, scores, AI trigger
│  ├─ Board.js          # Grid + animated win line
│  ├─ Square.js         # Single cell
│  ├─ WinnerModal.js    # Win/draw popup
│  ├─ Background.js     # Animated gradient background
│  ├─ ThemeProvider.js  # Theme context
│  └─ ThemeToggle.js    # Dark/light toggle
└─ lib/
   ├─ game.js           # Win detection + AI (easy/medium/hard)
   └─ symbols.js        # Symbol set + player mapping

## 🎯 How to Play

1. On the home screen, choose **New Game** (vs computer) or **Multiplayer** (2 players).
2. Pick your symbol(s) and, for computer mode, a difficulty.
3. Tap a cell to place your mark. First to align three wins.
4. Use **Play Again** to replay or **Menu** to go back.
