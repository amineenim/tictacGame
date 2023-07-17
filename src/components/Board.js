import { useState } from "react";
import Square from "./Square";
import './styles/Board.css';

function Board(){
    // STATE That stors the state of the 9 squares 
    const [squares, setSquares] = useState(Array(9).fill(null));
    // state that stores whether the next one is 'x' or 'O'
    const [xIsNext, setXIsNext] = useState(true);

    // function that handles clicking on a given square
    function handleSquareClick(i){
        // each time a square is clicked verify if it's not already filled
        // or if there's a winner if that's true return and so nothing
        if (squares[i] || getWinner(squares)){
            return ;
        }
        // create a copy of the squares array
        let newSquares = squares.slice();
        xIsNext ? newSquares[i] = 'X' : newSquares[i] = 'O' ;
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };
    let status;
    let winner = getWinner(squares);
    winner ? status = 'Game over, the winner is : ' + winner : status = 'Next Player : ' + (xIsNext ? 'X' : 'O') ;
    return (
    <div className="board">
        <div className="game-status">
            {status}
        </div>
         <div className="board-row">
            <Square value = {squares[0]} onSquareClick = {() => handleSquareClick(0)} />
            <Square value = {squares[1]} onSquareClick = {() => handleSquareClick(1)} />
            <Square value = {squares[2]} onSquareClick = {() => handleSquareClick(2)}/>
        </div>
        <div className="board-row">
            <Square value = {squares[3]} onSquareClick = {() => handleSquareClick(3)} />
            <Square value = {squares[4]} onSquareClick = {() => handleSquareClick(4)} />
            <Square value = {squares[5]} onSquareClick = {() => handleSquareClick(5)} />
        </div>
        <div className="board-row">
            <Square value = {squares[6]} onSquareClick = {() => handleSquareClick(6)} />
            <Square value = {squares[7]} onSquareClick = {() => handleSquareClick(7)} />
            <Square value = {squares[8]} onSquareClick = {() => handleSquareClick(8)}/>
        </div>
    </div>
    );
};

export default Board;

// function that cheks if there's a winner and returns it 
function getWinner(squares){
    const winner_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < winner_combinations.length ; i++){
        const [a, b, c] = winner_combinations[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
};