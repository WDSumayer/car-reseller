import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';
import './AdvertiseCard.css'

const AdvertiseCard = ({availableAdvgProduct}) => {
    const {img,price, productName, brand_id} = availableAdvgProduct

  const [loading, setLoading] = useState(false)

    return (
      <Link to={`/cars/brand/${brand_id}`}>
          <div onClick={() => setLoading(true)} className="card shadow-xl image-full">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{productName}</h2>
        <p className='text-2xl'>Only</p> <p className='text-5xl font-extrabold'>${price}</p> <p className='text-2xl'> now....!</p>
        <div className="card-actions justify-end">
          <button className="btn bg-white border-none hover:border-none hover:bg-white text-black">{loading ? <SmallLoading></SmallLoading>: 'Go....'}</button>
        </div>
      </div>
    </div>
      </Link>
    
    );
};

export default AdvertiseCard;