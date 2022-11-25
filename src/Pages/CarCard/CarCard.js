import React from 'react';

const CarCard = ({car, setBookingInfo}) => {
    const {img, name, seller_name, location, resale_price, original_price, years_of_use, posted_date} = car
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl font-bold">{name}</h2>
    <p className='text-lg font-bold'>Seller's Name: {seller_name}</p>
    <p className='text-2xl'>Resale Price: $ {resale_price}</p>
    <p className='text-xl'>Original Price: $ {original_price}</p>
    <p className='text-lg'>Used for: {years_of_use} years</p>
    <p className='text-lg'>Location: {location}</p>
    <p className='text-lg'>Poste in: {posted_date}</p>
    <div className="card-actions">
    <label onClick={setBookingInfo(car)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default CarCard;