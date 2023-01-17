import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const {user, logOut} = useContext(AuthContext)

   
    useTitle('Dashboard')
    const {data:orders = [], isLoading, refetch} = useQuery({ 
        queryKey: ['orders', user?.email], 
        queryFn: async () => {
          
            const res = await fetch(`https://car-reseller-server-wdsumayer.vercel.app/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Car-resel-Token')}`
                }
            })
            const data = await res.json()
            if(res.status === 401 || res.status === 403){
                return logOut()
              }
            return data
            
         
        
        }
       
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
      <div className='w-full'>
        
          
            <div className='px-2 py-9 md:px-7'>
            {
                orders.length ?
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9'>
                { 
                    orders.map(order => <MyOrderCard key={order._id} order={order} refetch={refetch} isLoading={isLoading}></MyOrderCard>)
                }
                
            </div>
            :
            <h1 className='text-center text-4xl pt-5'>You have no orders here......</h1>
            }
           </div>
        
        
      </div>
    );
};

export default MyOrders;