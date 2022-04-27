import React, { useEffect } from 'react';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Hero from '../Components/Home/Hero';
import { persistor, store } from '../Store/store';
import '../Styles/index.scss';

const Home = () => {
    useEffect(() => {
        if(store.getState().rememberChecked === false) {
            persistor.purge()
        }
    }, [])
    
    return (
        <div>
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;