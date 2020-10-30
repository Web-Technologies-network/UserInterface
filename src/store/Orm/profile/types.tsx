// Model typescript types
export interface Profile {
  id: string;
  Company: string;
  Username: string;
  EmailAddress: string;
  FirstName: string;
  LastName: string;
  City: string;
  Country: string;
  PostalCode: string;
  AboutMe: string;
}

// action types
export const ADD_PROFILE = 'ADD_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';

// action typescript types
interface AddProfileAction {
  type: typeof ADD_PROFILE;
  payload: Profile;
}

interface UpdateProfile {
  type: typeof UPDATE_PROFILE;
  payload: Profile;
}

interface DeleteProfile {
  type: typeof DELETE_PROFILE;
  payload: Profile;
}
// export a union of actions typescript types
export type ProfileActionTypes = AddProfileAction | UpdateProfile | DeleteProfile;
