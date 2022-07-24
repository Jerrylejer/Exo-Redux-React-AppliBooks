import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOK } from '../types';

export const addBooks = formData => {
    return {
        type: ADD_BOOKS,
        // formdata => objet reçu du submit formulaire (title/author)
        payload: formData
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        // ID => nous avons simplement besoin de l'ID du livre déjà enregistré
        payload: id
    }

}

export const deleteAllBooks = () => {
    return {
        type: DELETE_ALL_BOOKS,
    }
}