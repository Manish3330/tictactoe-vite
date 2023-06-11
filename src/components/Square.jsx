
const Square = ({ value, onclick }) => {
  
  
  return (
    <button className="square" onClick={onclick}>
      {value}
    </button>
  );
};

export default Square;
