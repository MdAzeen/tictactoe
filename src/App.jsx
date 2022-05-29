import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

import './styles/root.scss';
const App = () => {
  const [history, setHistory] = useState([{board: Array(9).fill(null),isXNext:true},]);
  const [currentMove,setCurrentMove]=useState(0);
  const current=history[currentMove];
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : ` Turn for player ${current.isXNext ? 'O' : 'X'}`;
  const handleSquareClick = position => {
    if (current.board[position]) return;
    if (winner) return;
    setHistory(prev => {
      const last=prev[prev.length-1];

      const newBoard=last.board.map((square, pos) => {
        if (pos === position) return last.isXNext ? 'O' : 'X';

        return square;
      });
      
      return prev.concat({board: newBoard,isXNext:!last.isXNext})
    });
    setCurrentMove(prev=>prev+1);
    console.log(history);
  };
  return (
    <div className="app">
      <h1>TICTACTOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
