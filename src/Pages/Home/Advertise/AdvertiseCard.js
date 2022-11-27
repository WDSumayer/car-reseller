import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({availableAdvgProduct}) => {
    const {img,price, productName, brand_id} = availableAdvgProduct
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className='text-3xl'>Only <strong>${price}</strong> now....!</p>
         <Link to={`/cars/brand/${brand_id}`}><button>go</button></Link>
        </div>
      </div>
    );
};

export default AdvertiseCard;