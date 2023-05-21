import React from 'react';
import Banner from '../Banner/Banner';
import Firstsection from '../Section/Firstsection';
import Secondsection from '../Secondsection/Secondsection';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import usePath from '../../myHook/hook';

const Home = () => {
    usePath('Home')
    return (
        <div className='mb-5'>
            
           <Banner></Banner>
           <Gallery></Gallery>
           <Firstsection></Firstsection>
           <Secondsection></Secondsection> 
           <Categories></Categories>
        </div>
    );
};

export default Home;