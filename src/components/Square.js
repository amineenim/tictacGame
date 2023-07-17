import { useState } from 'react';
import './styles/Square.css';

function Square({value, onSquareClick}){
 
    return(
        <div className="square" onClick={onSquareClick} >
            {value}
        </div>
    );
}
export default Square;