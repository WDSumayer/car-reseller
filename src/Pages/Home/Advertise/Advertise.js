import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/Loading/Loading';
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
    if(isLoading){
        return <Loading></Loading>
    }

    const availableAdvgProducts = addvertises.filter(addvertise => addvertise.status !== "Paid")

    return (
        <div className={addvertises.length ? "block" : "hidden"}>
           <div className='py-14'>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
                {
                    availableAdvgProducts.map(availableAdvgProduct => <AdvertiseCard key={availableAdvgProduct._id} availableAdvgProduct={availableAdvgProduct}></AdvertiseCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Advertise;