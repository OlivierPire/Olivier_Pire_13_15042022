import React from 'react';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Hero from '../Components/Home/Hero';
import '../Styles/index.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;