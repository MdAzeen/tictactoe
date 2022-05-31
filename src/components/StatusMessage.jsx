import React from 'react'

const StatusMessage = ({winner,current}) => {
    const currMoveLeft=current.board.every(el=> el!==null)
  return (
   <div className='status-message'>{winner && (<>Winner is <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span></>)}
   {!winner && !currMoveLeft && <>Turn for player <span className={current.isXNext ? 'text-orange':'text-green'}>{current.isXNext ? 'O' : 'X'}</span></>}
   {!winner && currMoveLeft && <>Tie between <span className='text-orange'>O</span> and <span className='text-green'>X</span></>}</div>
  )
}

export default StatusMessage
