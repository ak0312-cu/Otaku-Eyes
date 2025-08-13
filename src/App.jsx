import React from 'react';
import Game from './features/game/Game';
import './App.css';


function App() {
  return (
    <div className='background-container'>
      <div className='game-box'>
        <img src='Otaku-Eyes/src/assets/logo.png' className='logo-container'></img> 
        <h1>Anime Guessing Game</h1>      
        <Game />
      </div>
    </div>
  );
}

export default App;
