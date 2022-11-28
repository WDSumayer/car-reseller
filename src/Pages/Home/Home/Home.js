import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import Advertise from '../Advertise/Advertise';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import HeroSlider from '../HeroSlider/HeroSlider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HeroSlider></HeroSlider>
            <div className='max-w-[1440px] mx-auto px-2'>
            <Advertise></Advertise>
             <Categories></Categories>
            
             
            </div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;