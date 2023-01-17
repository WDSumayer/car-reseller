import React from 'react';
import './HeroSlider.css'
// import heroImg from '../../../assetes/img/blue-sport-sedan-parked-yard.jpg'
import heroImg from '../../../assetes/img/carbg.jpg'
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div className='hero-slider'>

      <div className='lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] mx-auto px-2 h-full'>
        <div className='w-full lg:w-2/3 xl:w-1/2 h-full'>
          <div className="carousel h-full w-full">
            <div id="slide1" className="carousel-item d-flex justify-start items-center relative h-full w-full">
              <div className='slider-content p-5 md:p-12'>

                <h1 className='text-base md:text-lg md:font-semibold tracking-widest my-3 text-teal-400'>Welcome to The Car Reseller</h1>
                <h1 className='text-4xl md:text-6xl font-semibold text-white'>We Provide You <p className='text-teal-400 font-bold'>Better Price</p> </h1>
                <p className='text-white text-lg md:text-xl font-thin my-5'>We provide you expensive brand car at just a price. </p>
               <Link to='/signUp'> <button className='btn rounded-sm hover:bg-teal-600 border-none text-lg font-semibold bg-teal-600 text-white'>Sign Up</button></Link>
              </div>
              <div className="absolute flex justify-start w-full pl-5 md:pl-12 transform -translate-y-1/2 left-0 bottom-2 md:bottom-28">
                <a href="#slide3" className="btn btn-controll rounded-none mr-3">❮</a>
                <a href="#slide2" className="btn btn-controll rounded-none">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item d-flex justify-start items-center relative h-full w-full">
              <div className='slider-content p-5 md:p-12'>

                <h1 className='text-base md:text-lg md:font-semibold tracking-widest my-3 text-teal-400'>Welcome to The Car Reseller</h1>
                <h1 className='text-4xl md:text-6xl font-semibold text-white'>We Provide You <p className='text-teal-400 font-bold'>Better Quality</p> </h1>
                <p className='text-white text-lg md:text-xl font-thin my-5'>We provide qualityful branded car. </p>
                <Link to='/signUp'> <button className='btn rounded-sm hover:bg-teal-600 border-none text-lg font-semibold bg-teal-600 text-white'>Sign Up</button></Link>
              </div>
              <div className="absolute flex justify-start w-full pl-5 md:pl-12 transform -translate-y-1/2 left-0 bottom-2 md:bottom-28">
                <a href="#slide1" className="btn btn-controll rounded-none mr-3">❮</a>
                <a href="#slide3" className="btn btn-controll rounded-none">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item d-flex justify-start items-center relative h-full w-full">
              <div className='slider-content p-5 md:p-12'>

                <h1 className='text-base md:text-lg md:font-semibold tracking-widest my-3 text-teal-400'>Welcome to The Car Reseller</h1>
                <h1 className='text-4xl md:text-6xl font-semibold text-white'>We Provide You <p className='text-teal-400 font-bold'>Better Service</p> </h1>
                <p className='text-white text-lg md:text-xl font-thin my-5'>We provide you better services. </p>
                <Link to='/signUp'> <button className='btn rounded-sm hover:bg-teal-600 border-none text-lg font-semibold bg-teal-600 text-white'>Sign Up</button></Link>
              </div>
              <div className="absolute flex justify-start w-full pl-5 md:pl-12 transform -translate-y-1/2 left-0 bottom-2 md:bottom-28">
                <a href="#slide2" className="btn btn-controll rounded-none mr-3">❮</a>
                <a href="#slide1" className="btn btn-controll rounded-none">❯</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <img src={heroImg} alt='' className='slider-img'></img>
    </div>
  );
};

export default HeroSlider;