export default function GameOver({ winner, onRestart }) {
  if (!winner) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-800">
          {winner === "draw" ? "It's a Draw!" : `${winner} Wins!`}
        </h2>
        <button
          onClick={onRestart}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
