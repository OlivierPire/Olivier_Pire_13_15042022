import React from 'react';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';

const NotFound = () => {
    return (
        <div className='not-found'>
            <Header />
                <h1>ERREUR</h1>
                <h2>La page demandée n'existe pas</h2>
            <Footer />
        </div>
    );
};

export default NotFound;