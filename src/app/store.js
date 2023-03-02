import { configureStore } from '@reduxjs/toolkit'
import showData from '../features/counterSlice';

export const store = configureStore({
    reducer:{       // the only way to update the store
        show: showData,
    }
});