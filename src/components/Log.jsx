export default function Log({ actions }) {
  if (actions.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white shadow-lg rounded-lg w-1/2">
      <h3 className="text-xl font-bold text-green-700 mb-2">Game Log</h3>
      <ul className="list-disc pl-5">
        {actions.map((action, index) => (
          <li key={index} className="text-gray-700">
            {`${action.player} placed ${action.symbol} at row ${
              action.row + 1
            }, column ${action.col + 1}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
