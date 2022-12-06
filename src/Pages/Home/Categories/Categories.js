import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import './Categories.css'

const Categories = () => {

   
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://car-reseller-server-wdsumayer.vercel.app/categories')
            const data = await res.json()
           
            return data;
        }
    })
if(isLoading){
    return <Loading></Loading>
}
   
    return (
       <div className='px-5 lg:px-0 py-14'>
        <h1 className='text-center text-3xl lg:text-5xl font-bold mb-14'>Choose Your Brand</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
            {
                categories.map(category => 
               <Link to={`/cars/brand/${category._id}`}>
                     <button key={category._id} className='btn brand-btn'>
                    <FaCar className='mr-5 text-primary'></FaCar>
                    {category.brand_name}
                </button>
               </Link>)
            }
        </div>
       </div>
    );
};

export default Categories;