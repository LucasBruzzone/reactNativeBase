import {
  SET_REDUX_EXAMPLE,
  SET_ERROR_EXAMPLE,
} from './constants';

export function setReduxExample(value) {
  return {
    type: SET_REDUX_EXAMPLE,
    payload: value,
  };
}

export function setErrorExample(status) {
  return {
    type: SET_ERROR_EXAMPLE,
    payload: status,
  };
}
