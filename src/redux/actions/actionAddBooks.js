import { ADD_BOOKS } from '../constants';

export const addBooks = formData => {
    return {
        type: ADD_BOOKS,
        // data => objet reçu du submit formulaire
        payload: formData
    }
}

