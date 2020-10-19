import { ProfileActionTypes } from './types';
import { actionHandlerByIds, actionHandlerIds } from './actionHandlers';

export const Ids = (state: string[] = [], action: ProfileActionTypes) =>
  Object.keys(actionHandlerIds).includes(action.type) ? actionHandlerIds[action.type](state, action.payload.id) : state;

export const ById = (state = {}, action: ProfileActionTypes) =>
  Object.keys(actionHandlerByIds).includes(action.type)
    ? actionHandlerByIds[action.type](state, action.payload)
    : state;
