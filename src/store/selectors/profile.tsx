import { useTypedSelector } from './rootTypedSelector';

export const getProfileById = (id: string) => useTypedSelector((state) => state.profiles.ById[id]);
