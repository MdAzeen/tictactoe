import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

import './styles/root.scss';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : ` Turn for player ${isNext ? 'O' : 'X'}`;
  const handleSquareClick = position => {
    if (board[position]) return;
    if (winner) return;
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) return isNext ? 'O' : 'X';

        return square;
      });
    });
    setIsNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TICTACTOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
