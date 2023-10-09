import React from 'react';
import Hero from './Hero/Hero';
import Footer from '../../Shared/Footer/Footer';
import Collections from './Collections/Collections';

const Home = () => {
    return (
        <div className=' space-y-16'>
            <Hero />
            <Collections />
            <Footer />
        </div>
    );
};

export default Home;