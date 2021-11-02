import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Fetch from "../../lib/fetch-api";
import type { AppState, AppThunk } from '../store'
import { fetchCoins } from '../api'

export interface CoinsState {
    data?: [];
    status?: "" | "loading" | "success" | "failed";
    error?: string;
}

const initialState: CoinsState = {
    data: [],
    status: '',
    error: ''
}

export const getCoins = createAsyncThunk('COINS/GET', async(params?: {}) => {
    return fetchCoins(params)
})

export const coinSlice = createSlice({
    name: 'coins',
    initialState,
    // Our reducers
    reducers: {
        selection: (state) => {
            state.data
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getCoins.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(getCoins.fulfilled, (state, action) => {
                state.status = 'success'
            const { payload = {} } = action
             console.log('===state', state, '===payload', payload.data)
                state.data.push(payload.data)
        }).addCase(getCoins.rejected, (state, action) => {
            state.status = 'failed'
            state.error = ' some error occurred'
        })
    }
})

export const { selection } = coinSlice.actions

export default coinSlice.reducer