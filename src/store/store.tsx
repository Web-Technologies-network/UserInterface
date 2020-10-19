import { combineReducers } from 'redux';
import { profiles } from './profile';
const appReducer = combineReducers({ profiles });
export type RootState = ReturnType<typeof appReducer>;
