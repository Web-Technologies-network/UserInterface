import { ADD_PROFILE, DELETE_PROFILE, Profile, UPDATE_PROFILE } from './types';
import { merge, keys, includes } from 'lodash';

export const actionHandlerIds = {
  [ADD_PROFILE]: (state: string[], payload: string) => (state.includes(payload) ? state : [...state, payload]),
  [UPDATE_PROFILE]: (state: string[], payload: string) => state,
  [DELETE_PROFILE]: (state: string[], payload: string) => state,
};

export const actionHandlerByIds = {
  [ADD_PROFILE]: (state: string[], payload: Profile) =>
    includes(keys(state), payload.id) ? state : merge({}, state, { [payload.id]: payload }),
  [UPDATE_PROFILE]: (state: string[], payload: Profile) => state,
  [DELETE_PROFILE]: (state: string[], payload: Profile) => state,
};
