import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value}){
const [value, setValue] = useState(null); 

 function handleClick(){
  setValue('Х')
 }

 return (
  <button
  className='square'
  onClick={handleClick}
 >
  {value}
 </button>
  );
}

export default function Board(){
  const [squares, setSquares] = useState(Array(9)).fill(null));
 
  return (
    <>
    <div className="board-row">
     <Square value={squares[0]} />
     <Square value={squares[1]} />
     <Square value={squares[2]} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
    </>
  );
}