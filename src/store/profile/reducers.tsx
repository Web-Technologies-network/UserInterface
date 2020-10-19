import { Profile, ProfileActionTypes } from './types';
import { actionHandlerByIds, actionHandlerIds } from './actionHandlers';

export type byIdState = { [key: string]: Profile };

export const Ids = (state: string[] = [], action: ProfileActionTypes) =>
  Object.keys(actionHandlerIds).includes(action.type) ? actionHandlerIds[action.type](state, action.payload.id) : state;

export const ById = (state: byIdState = {}, action: ProfileActionTypes) =>
  Object.keys(actionHandlerByIds).includes(action.type)
    ? actionHandlerByIds[action.type](state, action.payload)
    : state;
