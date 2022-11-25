import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/Loading/Loading';

const AllSellers = () => {

    const {data:sellers = [], isLoading, refetch} = useQuery({ 
        queryKey: ['sellers'], 
        queryFn: async () => {
          
            const res = await fetch('http://localhost:5000/users/sellers')
            const data = await res.json()
          
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

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        sellers.map((seller, i) =>  <tr className={sellers.indexOf(seller) % 2 !== 0 ? "active" : 'undefined'} key={seller._id}>
        <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td>{  seller.status === 'Verified' ?
                <span className='text-green-700'>Verified</span>
                :
                <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-accent'>verify</button>
            }</td>
        <td><button className='btn btn-xs btn-accent'>Delete</button></td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;