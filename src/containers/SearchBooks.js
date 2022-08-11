import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actionFetchBooks';

const SearchBooks = () => {
    // State modifié par l'input de recherche
    const [search, setSearch] = useState('');

    // Mise en circulation de l'initialState "reducerFetchBooks.js via le useSelector & le rooteReducer du store
    const state = useSelector((state) => state.googleApi);
    // Mise en circulation de l'action "actionFetchBooks.js via le useDispatch & le state de la recherche "search"
    const dispatch = useDispatch();
    //! Visualisation DES DATAS en console
    console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(search); => on reçoit en console les termes recherchés
        // On passe à l'action de fetcher les datas, les termes de la recherche
        dispatch(fetchBooks(search));
    };

    //! Traduction des infos visualisées en console, cette fois dans le JSX
    const displayActions = state.isLoading ? (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    ) : state.error !== '' ? (
        <h2>{state.error}</h2>
    ) : (
        state.fetchedBooks.map((data) => {
            return (
                <div key={data.id} className='card m-5'>
                    <div className='card-header'>
                        <h5 className='mb-0'>
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target={`#${data.id}`}
                                aria-expanded='false'
                            >
                                {data.volumeInfo.title}
                            </button>
                        </h5>
                    </div>
                    <div
                        id={data.id}
                        className='accordion-collapse collapse show'
                        data-bs-parent='#accordion'
                    >
                        <div className='card-body'>
                            {/* Condition en cas de non existence d'image dans l'objet retourné par l'API sinon message d'erreur */}
                            {/* data.volumeInfo.hasOwnProperty('imageLinks') */}
                            {data.volumeInfo.imageLinks && (
                                <img
                                    src={data.volumeInfo.imageLinks.thumbnail}
                                    alt={data.volumeInfo.title}
                                />
                            )}
                            <br />
                            <h4 className='card-title'>
                                Titre: {data.volumeInfo.title}
                            </h4>
                            <h5 className='card-title'>
                                Auteur: {data.volumeInfo.authors}
                            </h5>
                            <p className='card-text'>
                                Description: {data.volumeInfo.description}
                            </p>
                            <a
                                className='btn btn-outline-secondary'
                                target='_blank'
                                rel='noopener noreferrer'
                                href={data.volumeInfo.previewLink}
                            >
                                Plus d'infos
                            </a>
                            <button className='btn btn-outline-secondary'>
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            );
        })
    );

    return (
        <main role='main'>
            <div className='mt-4 p-5 bg-secondary text-white rounded'>
                <div className='container text-center'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Faire une recherche de livre sur le net</p>
                    <form
                        className='justify-content-center'
                        onSubmit={handleSubmit}
                    >
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Votre recherche de sujet'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <button className='btn btn-outline-info ml-3'>
                                Lancer la recherche
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container' style={{ minHeight: '200px' }}>
                <div id='accordion'>{displayActions}</div>
            </div>
        </main>
    );
};

export default SearchBooks;
