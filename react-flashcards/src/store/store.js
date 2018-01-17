import { createStore, combineReducers, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger';
import * as reducers from './ducks';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(loggerMiddleware),
    applyMiddleware(apiMiddleware),
  );
}
