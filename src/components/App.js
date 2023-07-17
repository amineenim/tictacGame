import { useState } from 'react';
import './styles/App.css';

function Square({value, onSquareClick}) {
  return <button className='square' onClick={onSquareClick} >{value}</button>
}

function Board({xIsNext, squares, onPlay}) {

  function handleClick(i) {
    if (squares[i] != null || calculateWinner(squares)) {
      return ;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O' ;
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  winner ? status = 'Winner : ' + winner : status = 'Next player : ' + (xIsNext ? 'X' : 'O');
  
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game(){
  // state that stores the state of the game at each turn
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(true)
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextmove){
    setCurrentMove(nextmove);
    setXIsNext(nextmove % 2 === 0);
  }
  
  const moves = history.map((squares, move) => {
    let description;
    move > 0 ? description = 'Go to move ' + move : description = 'Go to game start';
    return (
      <li>
        <button key={move} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  })
  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNex={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}
// function that calculates winner 
function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [2, 4, 6]
  ]
  for (let i=0; i<lines.length; i++){
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null ;
}


