import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        decrement(state) {
            state.count--;
        },
        increment(state) {
            state.count++;
        },
        increaseBy(state, action) {
            state.count = state.count + action.payload;
        }
    }
});

export const { decrement, increment, increaseBy } = counterSlice.actions;

export default counterSlice.reducer;