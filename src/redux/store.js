import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-community/async-storage';

import rootReducers from './reducers/rootReducer';
import sagas from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   // blacklist: ['appReducer'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  rootReducers,
  // persistedReducer,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagas.map((saga) => sagaMiddleware.run(saga));

export default store;
