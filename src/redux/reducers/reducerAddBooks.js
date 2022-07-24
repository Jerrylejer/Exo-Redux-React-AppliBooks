import { ADD_BOOKS, DELETE_BOOK } from '../types';
import { v4 as uuiv4 } from 'uuid';

// Déclaration du initialState
const initialState = {
    books: [],
};

// Récupération des datas (fonction helper) => récup du formulaire
const fetchFormData = (action) => {
    return {
        id: uuiv4(), // génération d'ID automatique
        title: action.payload.title,
        author: action.payload.author,
    };
};

// Delete d'une data à l'aide de son ID (fonction helper)
const deleteDataById = (state, id) => {
    const purgedList = state.filter(book => book.id !== id);
    return purgedList;
};

// Déclaration du reducer
export const reducerAddBooks = (state = initialState.books, action) => {
    // Conversion stringToObject des données présentes dans le LS au moment du montage (si elles existent)
    if (localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData'));
    }

    switch (action.type) {
        case ADD_BOOKS:
            // 1- récupération du state (converti du LS) 2- Lancement de l'action (récupération du dataForm)
            state = [...state, fetchFormData(action)];
            // 3- enregistrement d'une copie au niveau du localStorage pour la maintenance des données
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        case DELETE_BOOK:
            // 1- récupération du state modifié par le deleteById()
            state = deleteDataById(state, action.payload);
            // 2- enregistrement d'une copie au niveau du localStorage pour la maintenance des données
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        default:
            return state;
    }
};
