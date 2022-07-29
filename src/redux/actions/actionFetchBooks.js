import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from '../types';
import axios from 'axios';

const fetchBooksLoading = () => {
  return {
      type: FETCH_BOOKS_LOADING
  }
}

const fetchBooksSuccess = data => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
  }

  const fetchBooksError = error => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
  }

//? Pas d'export des 3 autres actions car elles découlent toutes les 3 de l'action fetchBooks qui EST exportée
//! fetchBooks ORCHESTRE le déclenchement des 3 autres

//todo A mettre dans le .env plus tard
const API_KEY = 'AIzaSyCgXI0lGWcXmlRWTNc_UUg53EBd39yVWfU';

  export const fetchBooks = search => {
    return dispatch => {

        dispatch(fetchBooksLoading())
        // module 184, 17:29 pour la customisation de l'adresse API
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=20`)
        .then(response => {
            console.log(response)
            const booksSearchArray = response.data.items;
            dispatch(fetchBooksSuccess(booksSearchArray))
        })
        .catch(error => {
            console.log(error);
            const errorFeedback = error.message;
            dispatch(fetchBooksError(errorFeedback));
        })
    }
  }



