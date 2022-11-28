import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCircle } from "react-icons/fa";
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import { FaHeart } from "react-icons/fa";
import toast from 'react-hot-toast';


const CarCard = ({car, setBookingInfo}) => {
  const {user} = useContext(AuthContext)
  const {img, name, seller_name, location, resale_price, original_price, years_of_use, posted_date, seller_email, _id, status:product_status} = car
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)

    const {data:status = [], isLoading} = useQuery({ 
      queryKey: ['status', seller_email], 
      queryFn: async () => {
        
          const res = await fetch(`https://car-reseller-server-wdsumayer.vercel.app/user/status/${seller_email}`)
          const data = await res.json()
        
          return data
          
       
      
      }
     
  })
 





    return (
        
            <div className="card border rounded-none hover:border-primary rounded-tl-3xl rounded-br-3xl ease-linear duration-200">
  <figure className="px-5 pt-5">
    <img src={img} alt="Shoes" className="rounded-tl-3xl rounded-br-3xl" />
    
  
  </figure>
  <div className="card-body p-5 items-center text-center">
   <h2 className="card-title text-3xl font-bold">{name}</h2>
   
    <p className='text-lg font-bold flex justify-center items-center'> <span>{status?.status === "Verified" &&<FaCircle className='text-green-600 mr-2'></FaCircle>}</span> <span>Seller's Name: {seller_name}</span></p>
    
    <p className='text-2xl'>Resale Price: $ {resale_price}</p>
    <p className='text-xl'>Original Price: $ {original_price}</p>
    <p className='text-lg'>Used for: {years_of_use} years</p>
    <p className='text-lg'>Location: {location}</p>
    <p className=''>Posted in: {posted_date}</p>
    <div className="w-full flex justify-center">
    <label onClick={() => setBookingInfo(car)} htmlFor="modalBooking" className={isAdmin || isSeller ? "btn mr-3 w-full btn-disabled rounded-none rounded-tl-xl rounded-br-xl h-auto py-3" : "btn w-full btn-primary rounded-none rounded-tl-xl rounded-br-xl h-auto py-3"}>Book Now</label>
   
    </div>
  </div>
</div>
        
    );
};

export default CarCard;