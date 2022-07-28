import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from '../types';

// Déclaration du initialState
const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
};

export const reducerFetchBooks = (state = initialState, action) => {


    switch(action.type) {

        case FETCH_BOOKS_LOADING :
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_BOOKS_SUCCESS :
            return {

            }

        case FETCH_BOOKS_ERROR :
            return {

            }

        default: 
            return state;

    }
}

