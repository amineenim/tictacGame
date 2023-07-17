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
        // create a copy of the squares array
        let newSquares = squares.slice();
        newSquares[i] = 'X';
        setSquares(newSquares);
    };

    return (
    <div className="board">
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