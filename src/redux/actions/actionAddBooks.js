import { ADD_BOOKS } from '../types';

export const addBooks = formData => {
    return {
        type: ADD_BOOKS,
        // data => objet reçu du submit formulaire (title/author)
        payload: formData
    }
}

