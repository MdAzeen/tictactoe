import React from 'react'
const Square = ({value,onClick,iswinningSquare}) => {
  return (
    <button type='button' className={`square ${iswinningSquare ?'winning': ''} ${value==='X'?'text-green':'text-orange'}`} onClick={onClick} style={{fontWeight: iswinningSquare ? 'bold' : 'normal'}}>
      {value}</button>
  )
}

export default Square
