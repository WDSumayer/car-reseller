import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/Loading/Loading';

const AllBuyers = () => {

    const {data:buyers = [], isLoading} = useQuery({ 
        queryKey: ['buyers'], 
        queryFn: async () => {
          
            const res = await fetch('http://localhost:5000/users/buyers')
            const data = await res.json()
          
            return data
            
         
        
        }
       
    })
    

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
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
   {
     buyers.map((buyer, i) =>  <tr className={buyers.indexOf(buyer) % 2 !== 0 ? "active" : 'undefined'} key={buyer._id}>
     <th>{i+1}</th>
     <td>{buyer.name}</td>
     <td>{buyer.email}</td>
     <td><button className='btn btn-xs btn-accent'>Delete</button></td>
   </tr>)
   }
  
 </tbody>
</table>
</div>
     </div>
    );
};

export default AllBuyers;