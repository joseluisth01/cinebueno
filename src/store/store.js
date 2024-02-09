// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import ticketsReducer from './ticketsSlice';
import favoritesReducer from './favoritesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    tickets: ticketsReducer,
    favorites: favoritesReducer
  },
});
