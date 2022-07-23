import { ADD_BOOKS } from '../types';
import { v4 as uuiv4 } from 'uuid';

// Déclaration du initialState
const initialState = {
    books: [],
};

// Récupération des données de l'action actionAddBooks.js
const fetchFormData = (action) => {
    return {
        id: uuiv4(), // génération d'ID automatique
        title: action.payload.title,
        author: action.payload.author,
    };
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

        default: return state;
    }
};
