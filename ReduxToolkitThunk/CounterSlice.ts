import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
    countAsync: number;
}

const initialState: CounterState = {
    count: 0,
    countAsync: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState:initialState,
    reducers: {
        // In payload action, we can pass anything, here we are passing number
        increment: (state, actions:PayloadAction<number>) => {
            state.count += actions.payload;
        },
        // In payload action, we can pass anything, here we are passing object but it can be any custom class
        decrement: (state, actions:PayloadAction<{decrementCount:number}>) => {
            state.count -= actions.payload.decrementCount;
        }, 
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state, action) => {
            // Add pending state
            console.log('Pending : Async Increment');
        }).addCase(incrementAsync.fulfilled, (state, action:PayloadAction<{incrementCount:number}>) => {
          state.countAsync += action.payload.incrementCount;
        }).addCase(incrementAsync.rejected, (state, action) => {
            // Add rejected state
            console.log('Rejected : Async Increment');    
        }),
        builder.addCase(decrementAsync.pending, (state, action) => {
            // Add pending state
            console.log('Pending : Async decrement');
        }).addCase(decrementAsync.fulfilled, (state, action:PayloadAction<{decrementCount:number}>) => {
          state.countAsync -= action.payload.decrementCount;
        }).addCase(decrementAsync.rejected, (state, action) => {
            // Add rejected state
            console.log('Rejected : Async decrement');    
        });
    }
})

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: {incrementCount:number}) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return amount;
    }
  );

  export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async (amount: {decrementCount:number}) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return amount;
    }
  );

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;