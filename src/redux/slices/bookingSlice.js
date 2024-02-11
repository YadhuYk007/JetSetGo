import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  source: 'Source',
  destination: 'Destination',
  type: '',
};

export const bookings = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBookingData: (state, action) => {
      state.bookings = [...state.bookings, action.payload];
    },
    clearBookingData: state => {
      state.bookings = [];
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const {
  addBookingData,
  clearBookingData,
  setDestination,
  setSource,
  setType,
} = bookings.actions;

export default bookings.reducer;
