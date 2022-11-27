import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
       <div>
         <div className='py-1 bg-[#252526]'>
            <div className='max-w-[1440px] mx-auto px-2 py-14'>
                <div className='flex flex-col md:flex-row justify-center md:justify-around'>
                    <div className='footer-logo mb-5 md:mb-0'>
                    <Link to='/' className="btn h-auto btn-ghost text-white normal-case text-4xl hover:bg-trasparent font-black">Car<span className='font-semibold'>Reseller</span></Link>
                    </div>
                    <div className='social-platform flex justify-center text-white text-4xl items-center'>
                        <FaFacebookSquare className='mr-2'></FaFacebookSquare>
                        <FaInstagramSquare className='mr-2'></FaInstagramSquare>
                        <FaTwitterSquare></FaTwitterSquare>
                    </div>
                </div>
                

            </div>
           
           
        </div>
         <div className='bg-[#1E1E1E]'>
         <div className='copy-right max-w-[1440px] mx-auto pt-1 px-2'>
                     <h2 className='text-lg py-5 text-white text-center'>Copyright © 2022 || Md. Sumayer</h2>
                 </div>
         </div>
       </div>
    );
};

export default Footer;