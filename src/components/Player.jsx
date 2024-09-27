export default function Player({ player, onPlayerNameChange }) {
  const handleBlur = (e) => onPlayerNameChange(e.target.value);
  const handleKeyPress = (e) =>
    e.key === "Enter" && onPlayerNameChange(e.target.value);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        defaultValue={player.name}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        className="border-2 border-green-500 p-2 rounded text-center mb-4 w-full text-lg"
      />
      <h1 className="text-2xl text-green-700 font-bold">{player.symbol}</h1>
    </div>
  );
}
