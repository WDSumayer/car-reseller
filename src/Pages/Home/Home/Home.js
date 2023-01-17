import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Advertise from '../Advertise/Advertise';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import HeroSlider from '../HeroSlider/HeroSlider';
import OurFacilities from '../OurFacilities/OurFacilities';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-[#F5F5F5]'>
            <HeroSlider></HeroSlider>
            <div className='lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] mx-auto px-2'>
            <AboutUs></AboutUs>
            <Advertise></Advertise>
             <Categories></Categories>
            <OurFacilities></OurFacilities>
             
            <Gallery></Gallery>
            </div>
        </div>
    );
};

export default Home;