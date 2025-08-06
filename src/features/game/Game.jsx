import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitGuess, nextScene, updateGuess } from './gameSlice';

const Game = () => {
  const { currentScene, guess, correct } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitGuess(guess));
  };

  const handleNext = () => {
    dispatch(nextScene());
  };

  const isBlockedMessage = guess === 'Answer correctly to move ahead.';

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Which Anime Is This?</h2>
      <img
        src={currentScene.image}
        alt="Anime Scene"
        style={{ width: '300px', filter: correct ? 'none' : 'blur(2px)' }}
      />
      <div>
        <input
          type="text"
          value={isBlockedMessage ? '' : guess}  
          onChange={(e) => dispatch(updateGuess(e.target.value))}
          placeholder="Type anime title"
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleNext} style={{ marginLeft: '10px' }}>
          Next
        </button>
      </div>

      {/* ✅ Correct */}
      {correct && <p style={{ color: 'lightgreen' }}>Correct! 🎉</p>}

      {/* ❌ Wrong but not blocked */}
      {!correct && guess && !isBlockedMessage && (
        <p style={{ color: 'salmon' }}>Try again!</p>
      )}

      {/* 🚫 Blocked from proceeding */}
      {isBlockedMessage && (
        <p style={{ color: 'orange', fontWeight: 'bold' }}>{guess}</p>
      )}
    </div>
  );
};

export default Game;
