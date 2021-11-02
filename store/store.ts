import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

import coinReducer from './coin/coin.slice'


export function makeStore() {
    return configureStore({
        reducer: { coins: coinReducer },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}

const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
    >

export const wrapper = createWrapper<AppStore>(makeStore);