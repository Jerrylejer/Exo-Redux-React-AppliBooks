import React from 'react';

const SearchBooks = () => {
  return (
    <main role='main'>
    <div className='mt-4 p-5 bg-secondary text-white rounded'>
        <div className='container text-center'>
            <h1 className='display-4'>BOOKS</h1>
            <p>Faire une recherche de livre sur le net</p>
            <form
                className='justify-content-center'
            >
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Votre recherche de sujet'
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
    <div className="container" style={{ minHeight: '200px' }}>
        
    </div>
    </main>
  )
}

export default SearchBooks;