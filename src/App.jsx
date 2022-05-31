import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

import { calculateWinner } from './helper';

import './styles/root.scss';
const App = () => {
  const [history, setHistory] = useState([{board: Array(9).fill(null),isXNext:true},]);
  const [currentMove,setCurrentMove]=useState(0);
  const current=history[currentMove];
  const {winner,winningSquare} = calculateWinner(current.board);
  // const message = winner
  //   ? `Winner is ${winner}`
  //   : ` Turn for player ${current.isXNext ? 'O' : 'X'}`;
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
  };
 const moveTo=(move)=>{
     setCurrentMove(move);
 }
 const onNewGame=()=>{
   setHistory([{board: Array(9).fill(null),isXNext:true},])
   setCurrentMove(0)
   }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
     <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare} />
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner? 'active': ''}`}>Start New Game</button>
      <h2 style={{fontWeight: 'normal'}}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls' />
    </div>
  );
};
export default App;
