import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CarCard = ({car, setBookingInfo}) => {
    const {img, name, seller_name, location, resale_price, original_price, years_of_use, posted_date, seller_email} = car

    const {data:status = [], isLoading} = useQuery({ 
      queryKey: ['status', seller_email], 
      queryFn: async () => {
        
          const res = await fetch(`http://localhost:5000/user/status/${seller_email}`)
          const data = await res.json()
        
          return data
          
       
      
      }
     
  })

    return (
        
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl font-bold">{name}</h2>
    <p className='text-lg font-bold'>{status?.status === "Verified" && <span className='text-green-700'>V</span>}Seller's Name: {seller_name}</p>
    <p className='text-2xl'>Resale Price: $ {resale_price}</p>
    <p className='text-xl'>Original Price: $ {original_price}</p>
    <p className='text-lg'>Used for: {years_of_use} years</p>
    <p className='text-lg'>Location: {location}</p>
    <p className=''>Posted in: {posted_date}</p>
    <div className="card-actions">
    <label onClick={setBookingInfo(car)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
      
    </div>
  </div>
</div>
        
    );
};

export default CarCard;