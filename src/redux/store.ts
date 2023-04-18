import {configureStore} from '@reduxjs/toolkit'
import CocktailReducer  from './features/cocktailSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        data: CocktailReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;