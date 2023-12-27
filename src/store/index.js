import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        reset(state, action) {
            state.counter -= state.counter;
        },
        addByTen(state, action) {
            state.counter += action.payload;
        }
    }
})
const store = configureStore({
    reducer: counterSlice.reducer
})

export const actions = counterSlice.actions;
export default store;
