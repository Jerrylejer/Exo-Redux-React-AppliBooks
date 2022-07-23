import React, { useState } from 'react';
import { addBooks } from '../redux/actions/actionAddBooks';
// Connexion au store
import { connect } from 'react-redux';

const AddBooks = ({ libraryData, addBook }) => {
    console.log(libraryData);

    const initialState = {
        title: '',
        author: '',
    };

    const [newData, setNewData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Il en résulte un objet que l'on va devoir dispatcher au niveau du Redux-Store
        // console.log(newData);
        addBook(newData);
        // on vide le input
        setNewData(initialState);
    };

    // Pour l'affichage des livres
    const displayLibrary =
        libraryData.length > 0 ? (
            libraryData.map((book) => {
                return (
                    <li
                        key={book.id}
                        className='list-group-item list-group-item-light mw-50 d-flex justify-content-center'
                    >
                        <span>
                            <strong>Titre:</strong>
                            {book.title}
                        </span>
                        <span>
                            <strong>Auteur:</strong>
                            {book.author}
                        </span>
                        <span className='btn btn-danger'>x</span>
                    </li>
                );
            })
        ) : (
            <p className='text-center'>Aucun livre dans la bibliothèque</p>
        );

    return (
        // role='main' => contenu principal du document pour info
        <main role='main'>
            <div className='mt-4 p-5 bg-secondary text-white rounded'>
                <div className='container text-center'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Ajoutez un livre à votre bibliothèque</p>
                    <form
                        className='justify-content-center'
                        onSubmit={handleSubmit}
                    >
                        <div className='form-group'>
                            <input
                                value={newData.title}
                                type='text'
                                className='form-control'
                                placeholder='titre'
                                onChange={(e) =>
                                    setNewData({
                                        ...newData,
                                        title: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <input
                                value={newData.author}
                                type='text'
                                className='form-control ml-3'
                                placeholder='Auteur'
                                onChange={(e) =>
                                    setNewData({
                                        ...newData,
                                        author: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <button className='btn btn-outline-info ml-3'>
                                Ajouter un livre
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ minHeight: '200px' }}></div>

            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>{displayLibrary}</ul>
                    <div className='d-flex justify-content-center'>

                        {libraryData.length > 0 && (
                            <button className='btn btn-danger mt-4 mb-5'>
                                Effacer les livres
                            </button>

                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

const addStateToProps = (state) => {
    return {
        libraryData: state.library,
    };
};

const addDispatchToProps = (dispatch) => {
    return {
        addBook: (param) => dispatch(addBooks(param)),
    };
};

export default connect(addStateToProps, addDispatchToProps)(AddBooks);
