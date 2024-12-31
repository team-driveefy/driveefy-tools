import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  allEmployees: [],
  loading: true,
};

export const TicketDashboard = createReducer(initialState, (builder) => {
  builder
    .addCase('GET_USER_WITH_WILLS_SUCCESS', (state, action) => {
      state.loading = false;
      state.allEmployees = action.payload;
    });
});
