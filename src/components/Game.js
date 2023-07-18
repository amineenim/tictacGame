import { useState } from "react";
import Board from "./Board";
import './styles/Game.css';

function Game(){
    // state that stores whether the next one is 'x' or 'O'
    const [xIsNext, setXIsNext] = useState(true);
    // define a state that stores all the moves during the game
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // state that stores the current move
    const [move, setMove] = useState(0)
    // variable that stores the current state of the game
    let currentSquares = history[move]; 

    function handleAddHistory(newSquares){
        let newHistory = [...history.slice(0, move + 1), newSquares];
        setMove(move +1);
        setHistory(newHistory);
        setXIsNext(!xIsNext);
    };  
     function jumpTo(nextMove) {
        console.log('you wanna go to move '+ nextMove)
        // get the corrsponding state of the board's squares at the given move
        setMove(nextMove);
        setXIsNext(move %2 ===1);
     };

    // map over history moves and generate React elements
    let moves = history.map((squares, move) => {
        return (
            move === 0 ? (
                <li key={move}>
                    <button onClick={() => jumpTo(0)}>
                        Go to game start
                    </button>
                </li>
            ) : (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>
                        Jump to move # {move}
                    </button>
                </li>
            )
        )
    });

    return (
        <div className="game">
            <div className="game-display">
                <Board currentSquares={currentSquares} xIsNext={xIsNext} addToHistory={handleAddHistory} />
            </div>
            <div className="game-navigation">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
};

export default Game;