import { useState } from 'react';
import './styles/App.css';
import Board from './Board';

export default function App(){
  return (
    <div className='app'>
      <Board/>
    </div>
  );
};