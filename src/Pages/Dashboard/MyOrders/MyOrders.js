import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
   
    
    const {data:orders = [], isLoading} = useQuery({ 
        queryKey: ['orders', user?.email], 
        queryFn: async () => {
          
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const data = await res.json()
          
            return data
            
         
        
        }
       
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
       <div>
        {
            orders.length ?
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14'>
            {
                orders.map(order => <MyOrderCard key={order._id} order={order}></MyOrderCard>)
            }
            
        </div>
        :
        <h1 className='text-center text-4xl pt-5'>You have no orders here......</h1>
        }
       </div>
    );
};

export default MyOrders;