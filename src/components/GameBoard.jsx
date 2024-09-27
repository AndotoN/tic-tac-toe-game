export default function GameBoard({ gameBoard, onGameBoardChange }) {
  return (
    <div>
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <button
              key={colIndex}
              className="w-40 h-40 bg-green-100 border-4 border-green-600 flex items-center justify-center text-8xl font-bold text-green-800 shadow-lg hover:bg-green-200 transition"
              onClick={() => onGameBoardChange(rowIndex, colIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
