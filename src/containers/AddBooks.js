import React from 'react';

const AddBooks = () => {
    return (
        // role='main' => contenu principal du document pour info
        <main role='main'>
            <div className='mt-4 p-5 bg-secondary text-white rounded'>
                <div className='container text-center'>
                    <h1 className='display-4'>BOOKS</h1>
                    <p>Ajoutez un livre à votre bibliothèque</p>
                    <form className='justify-content-center'>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='titre'
                                required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control ml-3'
                                placeholder='Auteur'
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
            <div style={{ minHeight: '200px'}}></div>

            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-light mw-50 d-flex justify-content-center'>
                            Livres enregistrés ici
                        </li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger mt-4 mb-5'>
                            Effacer les livres
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddBooks;
