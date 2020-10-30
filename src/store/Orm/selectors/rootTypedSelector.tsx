// define and export a typed useSelector hook using a helper type exported by @types/react-redux
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
