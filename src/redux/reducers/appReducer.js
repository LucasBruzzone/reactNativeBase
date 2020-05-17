import { fromJS } from 'immutable';

import {
  SET_REDUX_EXAMPLE,
  SET_ERROR_EXAMPLE,
} from '../actions/constants';

export const initialState = fromJS({
  reduxExample: 'firstValue',
  errorExample: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case SET_REDUX_EXAMPLE:
    return state
      .set('errorExample', false)
      .set('reduxExample', action.payload);
  case SET_ERROR_EXAMPLE:
    return state.set('errorExample', action.payload);
  default:
    return state;
  }
}

export default appReducer;
