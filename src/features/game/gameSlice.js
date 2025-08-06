import { createSlice } from '@reduxjs/toolkit';
import scenes from './scenes';

const initialState = {
  currentScene: scenes[0],
  score: 0,
  attempts: 0,
  correct: false,
  guess: '',
  history: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitGuess: (state, action) => {
      const userGuess = action.payload.toLowerCase().trim();
      const correctAnswers = state.currentScene.answers.map(a => a.toLowerCase().trim());
      const isCorrect = correctAnswers.includes(userGuess);

      state.correct = isCorrect;
      state.attempts += 1;
      if (isCorrect) state.score += 1;

      state.history.push({
        scene: state.currentScene,
        guess: action.payload,
        correct: isCorrect,
      });
    },
    nextScene: (state) => {
      if (!state.correct) {
        // Block progression if last guess was incorrect
        state.guess = 'Answer correctly to move ahead.';
        return;
      }

      let nextScene;
      do {
        nextScene = scenes[Math.floor(Math.random() * scenes.length)];
      } while (nextScene === state.currentScene && scenes.length > 1);

      state.currentScene = nextScene;
      state.correct = false;
      state.guess = '';
    },
    updateGuess: (state, action) => {
      state.guess = action.payload;
    },
  },
});

export const { submitGuess, nextScene, updateGuess } = gameSlice.actions;
export default gameSlice.reducer;
