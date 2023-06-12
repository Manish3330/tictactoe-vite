import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isnext, setISnext] = useState(false);
  const winner = calculateWinner(squares);

  const nextplayer = isnext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextplayer}`;
  const handleSquareClick = clickedPositon => {
    if (winner) return;
    if (squares[clickedPositon] == null) {
      setSquares(currSquares => {
        return currSquares.map((currSquareVal, pos) => {
          if (clickedPositon === pos) {
            return isnext ? 'X' : '0';
          } else {
            return currSquareVal;
          }
        });
      });
      setISnext(IscurrX => !IscurrX);
    }
  };

  return (
    <>
      <div className="app">
        <h2>{statusMessage}</h2>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </>
  );
}

export default App;
