import React from 'react';
import Banner from '../Banner/Banner';
import Firstsection from '../Section/Firstsection';
import Secondsection from '../Secondsection/Secondsection';

const Home = () => {
    return (
        <div className='mb-5'>
           <Banner></Banner>
           <Firstsection></Firstsection>
           <Secondsection></Secondsection> 
        </div>
    );
};

export default Home;