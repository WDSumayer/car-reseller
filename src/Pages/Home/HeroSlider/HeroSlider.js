import React from 'react';
import './HeroSlider.css'

const HeroSlider = () => {
    return (
        <div className='hero-slider'>
            <div className="carousel h-full w-full">
  <div id="slide1" className="carousel-item d-flex justify-center items-center relative h-full w-full">
   
        <h1 className='text-9xl text-center font-black text-white'>Better Price</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item d-flex justify-center items-center relative h-full w-full">
  <h1 className='text-9xl text-center font-black text-white'>Better Quality</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item d-flex justify-center items-center relative h-full w-full">
  <h1 className='text-9xl text-center font-black text-white'>Better Service</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
    );
};

export default HeroSlider;