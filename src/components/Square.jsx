
const Square = ({ value, onclick,isWinningSquare }) => {
  
  
  return (
    <button className={`square ${value==='X' ? `text-green`:`text-orange` } ${isWinningSquare?`winning`:``}` } onClick={onclick}>
      {value}
    </button>
  );
};

export default Square;
