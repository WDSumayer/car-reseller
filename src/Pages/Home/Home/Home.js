import React from 'react';
import Categories from '../Categories/Categories';
import HeroSlider from '../HeroSlider/HeroSlider';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <div className='max-w-[1440px] mx-auto px-2'>
             <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;