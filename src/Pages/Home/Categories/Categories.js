import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Categories.css'

const Categories = () => {

    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
           
            return data;
        }
    })

   
    return (
       <div className='py-14'>
        <h1 className='text-center text-5xl font-bold mb-14'>Choose Your Brand</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
            {
                categories.map(category => 
               <Link to={`/cars/brand/${category._id}`}>
                     <button className='btn brand-btn'>
                    <FaCar className='mr-5 text-blue-900'></FaCar>
                    {category.brand_name}
                </button>
               </Link>)
            }
        </div>
       </div>
    );
};

export default Categories;