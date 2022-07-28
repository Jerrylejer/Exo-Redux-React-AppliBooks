import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actionFetchBooks';

const SearchBooks = () => {
    
    // State modifié par l'input de recherche
    const [search, setSearch] = useState(''); 

    // Mise en circulation de l'initialState "reducerFetchBooks.js via le useSelector & le rooteReducer du store
    const state = useSelector(state => state.googleApi);
    // Mise en circulation de l'action "actionFetchBooks.js via le useDispatch & le state de la recherche "search"
    const dispatch = useDispatch();
    // Visualisation en console
    console.log(state)


  const handleSubmit = e => {
    e.preventDefault();
    // console.log(search); => on reçoit en console les termes recherchés
    // On passe à l'action de fetcher les datas, les termes de la recherche
    dispatch(fetchBooks(search));
  }

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
                                onChange={e => setSearch(e.target.value)}
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
                <div className='accordion'>
                    <div className='card m-5'>
                        <div className='card-header'></div>
                        <div className='collapse' data-parent='accordion'>
                            <div className='card-body'></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchBooks;
