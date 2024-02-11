import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  flightData: [],
  selectedFlight: {},
  sort: 'init',
  filter: [],
};

export const flights = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.flightData = action.payload;
    },
    setSelectedFlightData: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {setData, setSelectedFlightData, setSortType, setFilter} =
  flights.actions;

export default flights.reducer;
