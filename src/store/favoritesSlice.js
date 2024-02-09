// store/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Slice para las acciones relacionadas con las películas favoritas
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const movieId = action.payload;
      const index = state.favorites.indexOf(movieId);
      if (index === -1) {
        state.favorites.push(movieId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
