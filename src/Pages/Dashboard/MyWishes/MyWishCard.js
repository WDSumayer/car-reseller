import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyWishCard = ({wish, setBookingInfo}) => {
    const {user} = useContext(AuthContext)
    const {img,name, status, brand_name, seller_name, years_of_use, condition, location, posted_date, original_price, resale_price } = wish
    return (
        <div className="card bg-white shadow-lg rounded-none p-9">
        <div className="w-full">
          <img src={img} alt="Shoes" className="w-full object-fill" />
  
  
        </div>
        <div className="card-body block p-0">
          <h2 className="card-title text-xl uppercase mt-3">{name}</h2>
          
  
        
          
            <div className=''>
              <p className='text-2xl font-bold text-[#444]'>Price ${resale_price}</p>
            </div>
          
  
          <div className="w-full flex justify-center">
           
                <label onClick={() => setBookingInfo(wish)} htmlFor="wishModalBooking" className="text-center text-white cursor-pointer w-full bg-teal-800 rounded-none h-auto mt-3 py-3">Book Now</label>
               
          
  
          </div>
        </div>
      </div>
    );
};

export default MyWishCard;