import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className='d-flex flex-column flex-md-row justify-content-between p-3 border-bottom bg-secondary text-white'>
                <h4 className='mr-md-auto'>
                    <a href='/' className='text-decoration-none text-white'>
                        BOOKS
                    </a>
                </h4>
                <nav className='btn-group'>
                    <Link to='/' className='btn btn-light'>
                        Accueil
                    </Link>
                    <Link to='/search' className='btn btn-light'>
                        Rechercher
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
