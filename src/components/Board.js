
import Square from "./Square";
import './styles/Board.css';

function Board({currentSquares, xIsNext, addToHistory}){
   
    // function that handles clicking on a given square
    function handleSquareClick(i){
        // each time a square is clicked verify if it's not already filled
        // or if there's a winner if that's true return and so nothing
        if (currentSquares[i] || getWinner(currentSquares)){
            return ;
        }
        // create a copy of the squares array
        let newSquares = currentSquares.slice();
        xIsNext ? newSquares[i] = 'X' : newSquares[i] = 'O' ;
        // flip the value of xIsNext and add the new element to History 
        addToHistory(newSquares);
    };
    let status;
    let winner = getWinner(currentSquares);
    winner ? status = 'Game over, the winner is : ' + winner : status = 'Next Player : ' + (xIsNext ? 'X' : 'O') ;

    return (
    <div className="board">
        <div className="game-status">
            {status}
        </div>
         <div className="board-row">
            <Square value = {currentSquares[0]} onSquareClick = {() => handleSquareClick(0)} />
            <Square value = {currentSquares[1]} onSquareClick = {() => handleSquareClick(1)} />
            <Square value = {currentSquares[2]} onSquareClick = {() => handleSquareClick(2)}/>
        </div>
        <div className="board-row">
            <Square value = {currentSquares[3]} onSquareClick = {() => handleSquareClick(3)} />
            <Square value = {currentSquares[4]} onSquareClick = {() => handleSquareClick(4)} />
            <Square value = {currentSquares[5]} onSquareClick = {() => handleSquareClick(5)} />
        </div>
        <div className="board-row">
            <Square value = {currentSquares[6]} onSquareClick = {() => handleSquareClick(6)} />
            <Square value = {currentSquares[7]} onSquareClick = {() => handleSquareClick(7)} />
            <Square value = {currentSquares[8]} onSquareClick = {() => handleSquareClick(8)}/>
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