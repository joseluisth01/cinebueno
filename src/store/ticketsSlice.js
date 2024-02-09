// store/ticketsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Slice para las acciones relacionadas con las entradas compradas
const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
  },
  reducers: {
    addTicket(state, action) {
      state.tickets.push(action.payload);
    },
  },
});

export const { addTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
