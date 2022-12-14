import React from 'react';
import './HeroSlider.css'
// import heroImg from '../../../assetes/img/blue-sport-sedan-parked-yard.jpg'
import heroImg from '../../../assetes/img/carbg.jpg'

const HeroSlider = () => {
    return (
        <div className='hero-slider'>
        
            <div className="carousel h-full w-full">
  <div id="slide1" className="carousel-item d-flex justify-center items-center relative h-full w-full">
   
        <h1 className='test-h text-4xl p-5 lg:text-8xl text-center font-black lg:p-14 rounded-lg m-0 text-white'>Better Price</h1>
    <div className="absolute flex justify-evenly lg:justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
      <a href="#slide3" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item d-flex justify-center items-center relative h-full w-full">
  <h1 className='test-h text-4xl p-5 lg:text-8xl text-center font-black lg:p-14 rounded-lg m-0 text-white'>Better Quality</h1>
    <div className="absolute flex justify-evenly lg:justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
      <a href="#slide1" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item d-flex justify-center items-center relative h-full w-full">
  <h1 className='test-h text-4xl p-5 lg:text-8xl text-center font-black lg:p-14 rounded-lg m-0 text-white'>Better Service</h1>
    <div className="absolute flex justify-evenly lg:justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
      <a href="#slide2" className="btn btn-controll btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-controll btn-circle">❯</a>
    </div>
  </div> 
  
</div>
<img src={heroImg} alt='' className='slider-img'></img>
        </div>
    );
};

export default HeroSlider;