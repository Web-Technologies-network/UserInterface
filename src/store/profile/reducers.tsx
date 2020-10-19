import { Profile, ProfileActionTypes } from './types';
import { actionHandlerIds } from './actionHandlers';
const idsInitialState: string[] = [];
export const Ids = (state = idsInitialState, action: ProfileActionTypes) =>
  Object.keys(actionHandlerIds).includes(action.type) ? actionHandlerIds[action.type](state, action.payload.id) : state;
export const ById = (state: { [key: string]: Profile } = {}, action: ProfileActionTypes) => {};
