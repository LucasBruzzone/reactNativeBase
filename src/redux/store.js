import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import immutableTransform from 'redux-persist-transform-immutable';

import rootReducers from './reducers/rootReducer';
import sagas from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
  // Use blacklist to stop persisting the state of specific reducers
  // blacklist: ['appReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagas.map((saga) => sagaMiddleware.run(saga));

export default store;
