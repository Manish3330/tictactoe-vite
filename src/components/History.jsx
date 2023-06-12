const History = ({ history, moveTo ,currMove}) => {

  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, ind) => (
          
          <li key={ind}>
            <button
              type="button"
              className={currMove==ind ? "btn-move active" : 'btn-move'}
              onClick={() => moveTo(ind)}
            >
              {ind === 0 ? 'Go to game start' : `Move # ${ind}`}
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};
export default History;
