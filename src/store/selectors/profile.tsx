import { useTypedSelector } from './rootTypedSelector';

export const useGetProfileById = (id: string) => useTypedSelector((state) => state.profiles.ById[id]);
