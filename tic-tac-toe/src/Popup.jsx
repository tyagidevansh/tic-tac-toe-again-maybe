import React from 'react';
import './App.css'
import './Board.css';

function displayresult(winner){
  if (winner){
    if (winner === 'O wins!'){
      return 'haha lmao you lost';
    }
    if (winner === 'X wins!'){
      return 'you won, did you cheat?';
    }
    if (winner === "It's a draw!"){
      return "a draw is the best you can do";
    }
  }
}

export default function Popup({ winner, onClose, onPlayAgain, squares }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{displayresult(winner)}</h2>
        <div className="board">
          {squares &&
            squares.map((value, index) => (
              <div key={index} className="board-cell">
                {value}
              </div>
            ))}
        </div>
        <div className='popupButtons'>
          <button onClick={onClose}>Close</button>
          <button style={{ marginLeft: '10px' }} onClick={onPlayAgain}>Play Again</button>
        </div>
      </div>
    </div>
  );
}
