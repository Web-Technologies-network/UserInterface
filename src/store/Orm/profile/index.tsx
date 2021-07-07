import { Ids, ById } from '../profile/reducers';
import { combineReducers } from 'redux';
export * from '../profile/actions';
export const profiles = combineReducers({ Ids, ById });
export * from '../profile/types';
