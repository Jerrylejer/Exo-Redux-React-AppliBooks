import {
    configureStore,
    combineReducers,
    applyMiddleware,
} from '@reduxjs/toolkit';
import { reducerAddBooks } from './reducers/reducerAddBooks';
import { reducerFetchBooks } from './reducers/reducerFetchBooks';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    library: reducerAddBooks,
    googleApi: reducerFetchBooks,
});

applyMiddleware(thunk);

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
