import { combineReducers } from 'redux';
import { profiles } from './profile';
export * from './selectors';
const appReducer = combineReducers({ profiles });
export type RootState = ReturnType<typeof appReducer>;
