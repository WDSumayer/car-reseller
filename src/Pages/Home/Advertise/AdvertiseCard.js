import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({availableAdvgProduct}) => {
    const {img,price, productName, brand_id} = availableAdvgProduct
    return (
      <Link to={`/cars/brand/${brand_id}`}>
        <div className="card card-side border border-[#444] rounded-md px-4">
        <figure><img className='rounded-full' src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className='text-3xl'>Only <strong>${price}</strong> now....!</p>
        <button className='btn btn-primary'>Go...</button>
        </div>
      </div>
      </Link>
    );
};

export default AdvertiseCard;