import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import AddBooks from '../src/containers/AddBooks';

function App() {
    return (
        <div>
            <Navbar />
            <AddBooks />
            <Footer />
        </div>
    );
}

export default App;
