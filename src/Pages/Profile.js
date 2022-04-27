import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Transactions from '../Components/Profile/Transactions';
import Welcome from "../Components/Profile/Welcome"
import { store } from '../Store/store';

const Profile = () => {
    const navigate = useNavigate()
    useEffect(() => {
        store.getState().status !== 200 ? navigate('/404') : navigate('/profile')
    }, [navigate])
    
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