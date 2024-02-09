import {combineReducers} from 'redux';
import actions from './actions';

const reducer = combineReducers({});

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
