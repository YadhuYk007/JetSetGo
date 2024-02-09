import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

export const bookings = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    addBookingData: (state, action) => {
      state.bookings = [...bookings, action.payload];
    },
    clearBookingData: state => {
      state.bookings = [];
    },
  },
});

export const {addBookingData, clearBookingData} = bookings.actions;

export default bookings.reducer;
