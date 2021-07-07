import { ADD_PROFILE, DELETE_PROFILE, Profile, UPDATE_PROFILE } from '../profile/types';

export const addProfile = (profile: Profile) => ({ type: ADD_PROFILE, payload: profile });
export const updateProfile = (profile: Profile) => ({ type: UPDATE_PROFILE, payload: profile });
export const deleteProfile = (profile: Profile) => ({ type: DELETE_PROFILE, payload: profile });
