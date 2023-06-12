import './style.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMessage from './components/SttatusMessage';
import History from './components/History';
const NEW_GAME =[{board: Array(9).fill(null), isXnext: true}];
function App() {
  const [history, setHistory]= useState(NEW_GAME)
  const [currMove,setMove]= useState(0);
  const current = history[currMove];
  const {winner,winningsquares} = calculateWinner(current.board);

  const handleSquareClick = clickedPositon => {
    if(current.board[clickedPositon]!==null || winner)return;
    setHistory(prev => {
      const isTraversing = currMove+1!== history.length;
      const last = isTraversing?prev[currMove]:prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === clickedPositon) {
          return last.isXnext ? 'X' : 'O';
        }
      
        return square;
      });
      const base = isTraversing?history.slice(0, history.indexOf(last)+1) : history
      return base.concat({ board: newBoard, isXnext: !last.isXnext });
    })
    setMove((currentMove)=>currentMove+1);
  
  }
  const moveTo =(move)=>{
    setMove(move);
  }
  const onNewGameStart=()=>{
    setHistory(NEW_GAME); 
    setMove(0);
  }
  return (
    <>
      <div className="app" >
      
       <h1><span className='text-orange'>TIC</span> TAC <span className='text-green'> TOE</span> </h1>
       <span style={{    'float': "right",
    'font-size': "small",
    'padding-left': "113px"}}> - Manish Prajapati 💖</span>
       <StatusMessage winner={winner} squares={current.board} isnext={current.isXnext}/>
        <Board squares={current.board} handleSquareClick={handleSquareClick} winningsquares={winningsquares} />
        
        
        <h2>Game History 🧐</h2>
        <button type='button' onClick={onNewGameStart} className={`btn-reset ${winner?"active": ""}`}>Start New Game</button>
        <History history ={history} moveTo={moveTo} currMove={currMove}/>
      </div>
    </>
  );
}

export default App;
