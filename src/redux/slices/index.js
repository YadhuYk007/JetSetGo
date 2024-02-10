import {combineReducers} from 'redux';
import actions from './actions';
import bookingSlice from './bookingSlice';
import flightsSlice from './flightsSlice';

const reducer = combineReducers({
  flights: flightsSlice,
  bookings: bookingSlice,
});

export const resetApp = () => {
  return {
    type: actions.RESET,
  };
};

const rootReducer = (state, action) => {
  if (action.type === actions.RESET) {
    state = undefined;
  }
  return reducer(state, action);
};

export default rootReducer;
