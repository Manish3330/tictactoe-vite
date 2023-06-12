import Square from './Square';
import { useState } from 'react';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isnext, setISnext] = useState(false);
  const handleSquareClick = clickedPositon => {
    setSquares(currSquares => {
      return currSquares.map((currSquareVal, pos) => {
        if (clickedPositon === pos && currSquares[pos]==null) {
          return isnext ? 'X' : '0';
        } else {
          return currSquareVal;
        }
      }); 
    });
    setISnext((IscurrX)=>!IscurrX);  
  };
  const render = Positon => {
    return (
      <Square
        value={squares[Positon]}
        onclick={() => handleSquareClick(Positon)}
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
