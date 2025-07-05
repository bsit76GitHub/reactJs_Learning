 // step : 1 make store configureStore

import {configureStore} from '@reduxjs/toolkit' ;

import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
