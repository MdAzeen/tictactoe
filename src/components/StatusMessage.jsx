import React from 'react'

const StatusMessage = ({winner,current}) => {
    const currMoveLeft=current.board.every(el=> el!==null)
  return (
   <h2>{winner && `Winner is ${winner}`}{!winner && !currMoveLeft && `Turn for player ${current.isXNext ? 'O' : 'X'}`}{!winner && currMoveLeft &&`Tie between O and X`}</h2>
  )
}

export default StatusMessage
