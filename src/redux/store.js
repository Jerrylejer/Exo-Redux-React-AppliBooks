import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducerAddBooks } from './reducers/reducerAddBooks';

const rootReducer = combineReducers({
    library: reducerAddBooks
})

const store = configureStore({ reducer: rootReducer });

export default store;