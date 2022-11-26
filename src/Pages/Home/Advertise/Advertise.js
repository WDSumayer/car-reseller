import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const {data:addvertises = [], isLoading} = useQuery({ 
        queryKey: ['addvertises'], 
        queryFn: async () => {
          
            const res = await fetch('http://localhost:5000/addvertises')
            const data = await res.json()
          
            return data
            
         
        
        }
       
    })

    const availableAdvgProducts = addvertises.filter(addvertise => addvertise.status !== "Paid")

    return (
        <div className={addvertises.length ? "block" : "hidden"}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
                {
                    availableAdvgProducts.map(availableAdvgProduct => <AdvertiseCard key={availableAdvgProduct._id} availableAdvgProduct={availableAdvgProduct}></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default Advertise;