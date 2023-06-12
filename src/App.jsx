import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/SttatusMessage';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isnext, setISnext] = useState(false);
  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPositon => {
    if (winner) return;
    if (squares[clickedPositon] == null) {
      setSquares(currSquares => {
        return currSquares.map((currSquareVal, pos) => {
          if (clickedPositon === pos) {
            return isnext ? 'X' : 'O';
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
       <StatusMessage winner={winner} squares={squares} isnext={isnext}/>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </>
  );
}

export default App;
