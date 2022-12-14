import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AllBuyers = () => {
    const {logOut} = useContext(AuthContext)
    const {data:buyers = [], isLoading, refetch} = useQuery({ 
        queryKey: ['buyers'], 
        queryFn: async () => {
          
            const res = await fetch('https://car-reseller-server-wdsumayer.vercel.app/users/buyers', {
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

    const handleDeleteBuyers = (id) => {
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                toast.success('buyer deleted successfully')
            }
        })
    }
    

if(isLoading){
    return <Loading></Loading>
}
    return (
        <div className='w-full'>
        <div className="overflow-x-auto">
<table className="table seller-table w-full">
 
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