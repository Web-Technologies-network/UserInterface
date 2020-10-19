import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import { profiles } from './profile';
import { composeWithDevTools } from 'redux-devtools-extension';
const appReducer = combineReducers({ profiles });
export type RootState = ReturnType<typeof appReducer>;

const isDev = (): boolean => window.location.toString().includes('localhost');

const middlewares = [];

if (isDev()) middlewares.push(logger);

export const store = isDev()
  ? createStore(appReducer, composeWithDevTools(applyMiddleware(...middlewares)))
  : createStore(appReducer, applyMiddleware(...middlewares));
