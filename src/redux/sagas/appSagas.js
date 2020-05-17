import {
  take,
  put,
} from 'redux-saga/effects';

import * as constants from '../actions/constants';
import * as appActions from '../actions/appActions';

function* setReduxExample() {
  while (true) {
    const { payload } = yield take(constants.SET_REDUX_EXAMPLE);

    try {
      yield put(appActions.setReduxExample(payload));
    } catch (error) {
      yield put(appActions.setErrorExample(true));
    }
  }
}

export default [
  setReduxExample,
];
