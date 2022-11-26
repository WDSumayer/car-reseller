import React from 'react';

const AdvertiseCard = ({availableAdvgProduct}) => {
    const {img,price, productName} = availableAdvgProduct
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className='text-3xl'>Only <strong>${price}</strong> now....!</p>
         
        </div>
      </div>
    );
};

export default AdvertiseCard;