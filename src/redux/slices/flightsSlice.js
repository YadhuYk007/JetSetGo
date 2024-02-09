import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  selectedFlight: {},
};

export const flights = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedFlightData: (state, action) => {
      state.selectedFlight = action.payload;
    },
  },
});

export const {setData, setSelectedFlightData} = flights.actions;

export default flights.reducer;
