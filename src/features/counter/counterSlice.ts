import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        resetAmount :(state) => {
            state.count = 0
        }
    }
})


export const {decrement, increment, incrementByAmount, resetAmount} = counterSlice.actions
export default counterSlice.reducer;