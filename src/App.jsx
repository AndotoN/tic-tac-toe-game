import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const INITIAL_PLAYERS = [
  { name: "player1", symbol: "X" },
  { name: "player2", symbol: "O" },
];

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveCurrentPlayer(gameTurns) {
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]); // Store all turns here
  const [players, setPlayers] = useState(INITIAL_PLAYERS); // Keep player names editable

  // Rebuild the game board based on the turns
  let gameBoard = initialGameBoard.map((row) => [...row]);
  for (const { square, player } of gameTurns) {
    gameBoard[square.row][square.col] = player;
  }

  const currentPlayer = deriveCurrentPlayer(gameTurns); // Derive the active player

  // Check for a winner
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      gameBoard[a.row][a.column] &&
      gameBoard[a.row][a.column] === gameBoard[b.row][b.column] &&
      gameBoard[a.row][a.column] === gameBoard[c.row][c.column]
    ) {
      winner = gameBoard[a.row][a.column];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  // Handle square click
  function handleGameBoardChange(row, col) {
    if (gameBoard[row][col] || winner) return; // Ignore if square is filled or game is over

    setGameTurns((prevTurns) => [
      ...prevTurns,
      { square: { row, col }, player: currentPlayer },
    ]);
  }

  // Handle player name change
  function handlePlayersChange(index, newName) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index].name = newName;
      return updatedPlayers;
    });
  }

  // Restart the game
  function handleRestart() {
    setGameTurns([]); // Clear the game turns
  }

  return (
    <>
      <header className="text-center bg-orange-400 p-8 rounded-b-lg shadow-md">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Tic Tac Toe
        </h1>
        <p className="text-lg text-yellow-100 italic">
          {winner
            ? `${winner} Wins!`
            : isDraw
            ? "It's a draw!"
            : "Play with a friend"}
        </p>
      </header>

      <main className="bg-gradient-to-br from-green-500 to-yellow-300 min-h-screen flex flex-col items-center pt-8">
        {/* Players section */}
        <div className="flex justify-center gap-8">
          <div className="w-1/4 p-6 bg-yellow-200 border-2 border-green-600 rounded-lg shadow-lg">
            <Player
              player={players[0]}
              onPlayerNameChange={(newName) => handlePlayersChange(0, newName)}
            />
          </div>
          <div className="w-1/4 p-6 bg-yellow-200 border-2 border-green-600 rounded-lg shadow-lg">
            <Player
              player={players[1]}
              onPlayerNameChange={(newName) => handlePlayersChange(1, newName)}
            />
          </div>
        </div>

        {/* Game board section */}
        <div className="mt-10">
          <GameBoard
            gameBoard={gameBoard}
            onGameBoardChange={handleGameBoardChange}
          />
        </div>

        {/* Log section */}
        <Log
          actions={gameTurns.map((turn) => ({
            player: turn.player === "X" ? players[0].name : players[1].name,
            symbol: turn.player,
            row: turn.square.row,
            col: turn.square.col,
          }))}
        />

        {/* GameOver Modal */}
        {winner || isDraw ? (
          <GameOver winner={winner} onRestart={handleRestart} />
        ) : null}
      </main>
    </>
  );
}

export default App;
