import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';
import './MyOrderCard.css'
import { FaTrash } from "react-icons/fa";
import Loading from '../../../components/Loading/Loading';
import useUser from '../../../Hooks/useUser';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrderCard = ({order,refetch,isLoading}) => {
    const {img,product,price, status, _id} = order
   
    const [loading, setLoading] = useState(false)
   

  const orderDelete = (_id) => {
    fetch(`https://car-reseller-server-wdsumayer.vercel.app/order/${_id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
      .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
              refetch()
             
          }
      })
  }


    return (
       
            
            
         <div className="bg-base-100 drop-shadow-2xl p-9">
                 <figure className="">
                   <img src={img} alt="Shoes" className='loading' />
                 </figure>
                 <div className="card-body p-0">
                   <h2 className="card-title uppercase text-lg pt-4">{product}</h2>
                   <p className='text-xl text-teal-800 font-bold'>Price: ${price}</p>
                   <div className="card-actions w-full">
                 <div className='flex justify-between w-full'>
                 <div className='flex-grow'>
                    {
                      status === "Available" ?
                      <Link className='w-full' to={`/dashboard/myOrders/payment/${order._id}`}>
                      <button onClick={() => setLoading(true)} className="btn bg-teal-800 hover:bg-teal-800 rounded-none w-full">
                     {
                      loading ? <SmallLoading></SmallLoading>
                      : ' Pay Now'
                     }
                      </button>
                      </Link>
                      :
                      <p className='btn btn-disabled border-teal-800 bg-[#fff] hover:bg-[#fff] rounded-none text-green-700 text-lg font-bold w-full'>Paid</p>
                     }
                    </div>
                     <div className='flex-shrink ml-3'>
                   
                      <button onClick={() => orderDelete(_id)} className="btn bg-white border-[#bcbcbc] hover:bg-white hover:border-[#bcbcbc] text-[#bcbcbc] text-xl rounded-none w-full">
                    
                       <FaTrash></FaTrash>
                     
                      </button>
                      
                     </div>
                 </div>
                   </div>
                 </div>
               </div>
             
           
    );
};

export default MyOrderCard;