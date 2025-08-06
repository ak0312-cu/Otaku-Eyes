import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitGuess, nextScene, updateGuess } from './gameSlice';

const Game = () => {
  const { currentScene, guess, correct } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitGuess(guess));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Guess the Anime</h2>
      <img
        src={currentScene.image}
        alt="Anime Scene"
        style={{ width: '300px', filter: correct ? 'none' : 'blur(2px)' }}
      />
      <div>
        <input
          type="text"
          value={guess}
          onChange={(e) => dispatch(updateGuess(e.target.value))}
          placeholder="Type anime title"
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => dispatch(nextScene())} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>
      {correct && <p style={{ color: 'lightgreen' }}>Correct! 🎉</p>}
      {!correct && guess && <p style={{ color: 'salmon' }}>Try again!</p>}
    </div>
  );
};

export default Game;
