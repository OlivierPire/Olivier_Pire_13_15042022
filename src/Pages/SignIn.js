import React from 'react';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Form from '../Components/SignIn/Form';

const SignIn = () => {
    return (
        <div className='signIn'>
            <Header />
            <main className='main bg-dark'>
                <Form />
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;