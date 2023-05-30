import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

import rootWatcher from './saga';
import { reducer as chat } from './chat/reducer';
import { reducer as table } from './table/reducer';

const rootReducer = combineReducers({
  chat,
  table,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);
