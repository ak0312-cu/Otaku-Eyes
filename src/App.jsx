import React from 'react';
import Game from './features/game/Game';
import './App.css';


function App() {
  return (
    <div className='background-container'>
      <div className='game-box'>
        <img src='/logo.png' alt='Otaku Eyes' className='logo-container'></img> 
        <h1>Anime Guessing Game</h1>      
        <Game />
      </div>
    </div>
  );
}

export default App;
