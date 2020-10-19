import { Ids, ById } from './reducers';
import { combineReducers } from 'redux';
export * from './actions';
export const profiles = combineReducers({ Ids, ById });
