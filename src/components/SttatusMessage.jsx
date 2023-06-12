const StatusMessage = ({winner, squares, isnext})=>
{
const noMovesLeft = squares.every((value)=>{return value!==null})
  const rendermessage = ()=>
  {
    if(winner)
    {
      return(<div >Winner is <span className={winner==='X'? "text-green" : "text-orange"}>{winner}</span></div>)
    }
    else if(!winner && noMovesLeft)
    {
      return (<div>Game is tied !!!</div>)
    }
    else if(!winner && !noMovesLeft)
    {
      return (<div>next player is <span className={nextplayer==='X'? "text-green" : "text-orange"}>{nextplayer}</span></div>)
    }
  }
    
  const nextplayer = isnext ? 'X' : 'O';
 
    return (<h2>{rendermessage()}</h2>)
}
export default StatusMessage