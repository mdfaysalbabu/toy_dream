import React from 'react';
import Banner from '../Banner/Banner';
import Firstsection from '../Section/Firstsection';
import Secondsection from '../Secondsection/Secondsection';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mb-5'>
           <Banner></Banner>
           <Firstsection></Firstsection>
           <Secondsection></Secondsection> 
           <Categories></Categories>
        </div>
    );
};

export default Home;