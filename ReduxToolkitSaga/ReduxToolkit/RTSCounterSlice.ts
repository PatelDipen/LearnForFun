import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
    countAsync: number;
}

const initialState: CounterState = {
    count: 0,
    countAsync: 0
};

const counterSliceSaga = createSlice({
    name: 'counter',
    initialState:initialState,
    reducers: {
        // In payload action, we can pass anything, here we are passing number
        increment: (state:CounterState, actions:PayloadAction<number>) => {
            state.count += actions.payload;
        },
        // In payload action, we can pass anything, here we are passing object but it can be any custom class
        decrement: (state:CounterState, actions:PayloadAction<{decrementCount:number}>) => {
            state.count -= actions.payload.decrementCount;
        }, 
        // In payload action, we can pass anything, here we are passing number
        incrementAsync: (state:CounterState, actions:PayloadAction<number>) => {
            
        },
        incrementDone: (state:CounterState, actions:PayloadAction<{countToIncrease:number}>) => {
            state.countAsync += actions.payload.countToIncrease;
        },
        // In payload action, we can pass anything, here we are passing object but it can be any custom class
        decrementAsync: (state:CounterState, actions:PayloadAction<{decrementCount:number}>) => {

        }, 
        decrementDone: (state:CounterState, actions:PayloadAction<{countToDecrease:number}>) => {
            state.countAsync -= actions.payload.countToDecrease;
        }, 
    },
})
export const { increment, decrement, incrementAsync, decrementAsync, incrementDone, decrementDone } = counterSliceSaga.actions;
export default counterSliceSaga.reducer;