import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/Loading/Loading';

const AllBuyers = () => {

    const {data:buyers = [], isLoading, refetch} = useQuery({ 
        queryKey: ['buyers'], 
        queryFn: async () => {
          
            const res = await fetch('http://localhost:5000/users/buyers')
            const data = await res.json()
          
            return data
            
         
        
        }
       
    })

    const handleDeleteBuyers = (id) => {
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
     <th className='bg-primary py-6 text-white rounded-none'>Action</th>
   </tr>
 </thead>
 <tbody>
   {
     buyers.map((buyer, i) =>  <tr className={buyers.indexOf(buyer) % 2 !== 0 ? "tableActive" : 'undefined'} key={buyer._id}>
     <th className='bg-transparent'>{i+1}</th>
     <td>{buyer.name}</td>
     <td>{buyer.email}</td>
     <td><button onClick={() => handleDeleteBuyers(buyer._id)} className='btn btn-sm rounded-sm btn-error text-white'>Delete</button></td>
   </tr>)
   }
  
 </tbody>
</table>
</div>
     </div>
    );
};

export default AllBuyers;