export const StartMenu = ({ onStartClick }) => {
  return (
    <div className="h-screen flex items-center">
      <button className="p-4 text-3xl cursor-pointer rounded bg-white" onClick={onStartClick}>
        Start Game
      </button>
    </div>
  );
};
