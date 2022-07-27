import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import AddBooks from '../src/containers/AddBooks';
import SearchBooks from './containers/SearchBooks';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<AddBooks />}></Route>
                <Route path='/search' element={<SearchBooks />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
