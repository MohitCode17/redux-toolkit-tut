import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: 0};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        showData: (state, action) => {       // this is called an action
            state.value = state.value;
        },
        increment: (state, action) => {
            state.value = state.value + 1;
        },
        incrementByValue: (state, action) => {
            state.value = state.value + action.payload
        }
        // state: which we passed
        // action: which user passed from frontend to do some action
    }
})

export const { showData, increment, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;