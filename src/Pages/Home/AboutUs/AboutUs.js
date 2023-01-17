import React from 'react';
import './AboutUs.css'
import image from '../../../assetes/img/about.jpg'

const AboutUs = () => {
    return (
       <div className='md:relative w-full 2xl:w-4/5 mx-auto h-[720px] lg:h-[450px]'>
         <div className='h-full w-full bg-white md:-top-20 md:absolute z-[2] p-7 shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px;]'>
           <div className='h-full border border-[#ddd] flex flex-col lg:flex-row justify-start lg:justify-between items-center p-3 md:p-7'>
            <div className='about-content w-full lg:w-1/2'>
                <h2 className='text-xl font-bold'>What Are We?</h2>
                <h1 className='text-3xl xl-text-4xl text-teal-900 font-black'>About The Car-Reseller</h1>
                <p className='text-base md:text-lg xl:text-xl font-thin text-[#1E1E1E]'>As a buyer you can buy expensive branded second-hand cars with a little price. You can pay easily by your smart card. You can create an account and become a regular membre here.</p>
                <p className='text-base md:text-lg xl:text-xl font-thin text-[#1E1E1E]'>As a seller you can post your branded second-hand cars here and sell theme a good price. You can become a verified member to to create an account here.</p>
            </div>
            <div className='flex justify-center lg:justify-end w-full lg:w-1/2 mt-7 lg:mt-0'>
                <img className='w-[450px] object-cover' alt='' src={image}></img>
            </div>
           </div>
        </div>
       </div>
    );
};

export default AboutUs;