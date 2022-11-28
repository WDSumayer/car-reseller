import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './AllSellers.css'

const AllSellers = () => {
    const {logOut} = useContext(AuthContext)
    const {data:sellers = [], isLoading, refetch} = useQuery({ 
        queryKey: ['sellers'], 
        queryFn: async () => {
          
            const res = await fetch('http://localhost:5000/users/sellers', {
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

    const handleVerify = (id) => {
        fetch(`http://localhost:5000/users/status/${id}`, {
            method: 'PUT',
           
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
    }

    const handleDeleteSeller = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table seller-table w-full">
    
    <thead>
      <tr>
        <th className='bg-primary py-6 text-white'></th>
        <th className='bg-primary py-6 text-white'>Name</th>
        <th className='bg-primary py-6 text-white'>Email</th>
        <th className='bg-primary py-6 text-white'>Status</th>
        <th className='bg-primary py-6 text-white rounded-none'>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        sellers.map((seller, i) =>  <tr className={sellers.indexOf(seller) % 2 !== 0 ? "tableActive" : 'undefined'} key={seller._id}>
        <th className='bg-transparent'>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td>{  seller.status === 'Verified' ?
                <span className='text-green-600 font-semibold'>Verified</span>
                :
                <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-accent'>verify</button>
            }</td>
        <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-sm rounded-sm btn-error text-white'>Delete</button></td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;