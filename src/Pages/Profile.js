import React from 'react';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Transactions from '../Components/Profile/Transactions';
import Welcome from "../Components/Profile/Welcome"
import { store } from '../Utils/store';

const Profile = () => {

    return (
        <div>
            <Header />
            <main className='main bg-dark'>
                <Welcome />
                <Transactions />
            </main>
            <Footer />
        </div>
    );
};

export default Profile;