import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const {data:products = [], isLoading} = useQuery({ 
        queryKey: ['products', user?.email], 
        queryFn: async () => {
          
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = await res.json()
          
            return data
            
         
        
        }
       
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14'>
                {
                    products.map(product => <MyProductCard key={product._id} product={product}></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;