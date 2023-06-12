import Square from './Square';

const Board = ({ squares, handleSquareClick,winningsquares }) => {

  const render = Positon => {
    const isWinningSquare= winningsquares.includes(Positon);
    return (
      <Square
        value={squares[Positon]}
        onclick={() => handleSquareClick(Positon)}
        isWinningSquare={isWinningSquare}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {/* we pass value to any using jsx expression {0 }, to just pass string we can pass value ="hello" or value ={'hi'} */}
        {render(0)}
        {render(1)}
        {render(2)}
      </div>
      <div className="board-row">
        {render(3)}
        {render(4)}
        {render(5)}
      </div>
      <div className="board-row">
        {render(6)}
        {render(7)}
        {render(8)}
      </div>
    </div>
  );
};
export default Board;
