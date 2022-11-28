import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const {user, logOut} = useContext(AuthContext)
    const {data:products = [], isLoading, refetch} = useQuery({ 
        queryKey: ['products', user?.email], 
        queryFn: async () => {
          
            const res = await fetch(`https://car-reseller-server-wdsumayer.vercel.app/products?email=${user?.email}`, {
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
        <div>
           {
                products.length ? 
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14'>
                {
                    products.map(product => <MyProductCard key={product._id} product={product} refetch={refetch}></MyProductCard>)
                }
            </div>
            :
            <h1 className='text-4xl text-center pt-5'>You have no product here....</h1>
           }
        </div>
    );
};

export default MyProducts;