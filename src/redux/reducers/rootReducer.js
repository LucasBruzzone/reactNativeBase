import { combineReducers } from 'redux';
import appReducer, { initalState as appReducerInitialState } from './appReducer';
import { RESET_REDUCER } from '../actions/constants';

export const initialAppState = {
  appReducer: appReducerInitialState,
};

const mainReducer = combineReducers({
  appReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUCER) {
    state = initialAppState;
  }

  return mainReducer(state, action);
};

export default rootReducer;
