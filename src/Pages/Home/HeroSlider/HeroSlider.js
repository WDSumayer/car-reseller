import React from 'react';
import './HeroSlider.css'

const HeroSlider = () => {
    return (
        <div className='hero-slider'>
            <div className="carousel h-full w-full">
  <div id="slide1" className="carousel-item d-flex justify-center items-center relative h-full w-full">
   
        <h1 className='text-2xl p-5 lg:text-8xl text-center font-black lg:p-14 rounded-lg m-0 bg-white text-black'>Better Price</h1>
    <div className="absolute flex justify-evenly lg:justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
      <a href="#slide3" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item d-flex justify-center items-center relative h-full w-full">
  <h1 className='text-2xl p-5 lg:text-8xl text-center font-black lg:p-14 rounded-lg m-0 bg-white text-black'>Better Quality</h1>
    <div className="absolute flex justify-evenly lg:justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
      <a href="#slide1" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item d-flex justify-center items-center relative h-full w-full">
  <h1 className='text-2xl p-5 lg:text-8xl text-center font-black lg:p-14 rounded-lg m-0 bg-white text-black'>Better Service</h1>
    <div className="absolute flex justify-evenly lg:justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
      <a href="#slide2" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
    );
};

export default HeroSlider;