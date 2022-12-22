import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Loading from '../../../components/Loading/Loading';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';
import './Categories.css'
import CategoriesCard from './CategoriesCard/CategoriesCard';

const Categories = () => {
  
   const [loading, setLoading] = useState(false)

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
                   
                {/* <Button key={category._id} brand_name={category.brand_name}></Button> */}
                
                <CategoriesCard key={category._id} category={category}></CategoriesCard>
               </Link>)
            }
        </div>
       </div>
    );
};

export default Categories;