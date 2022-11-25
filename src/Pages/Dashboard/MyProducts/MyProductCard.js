import React from 'react';

const MyProductCard = ({product}) => {
    const {img, resale_price:price, product:name} = product
    return (
        
             <div className="bg-base-100 border">
                 <figure className="px-8 pt-10">
                   <img src={img} alt="Shoes" className="rounded-none" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{name}</h2>
                   <p className='text-lg'>Price: $ {price}</p>
                   <p className='text-lg'>Status: available</p>
                   <div className="card-actions w-full">
                     <button className="bg-primary py-2 px-4 text-white w-full mb-3">Advertige</button>
                     <button className="border border-gray-700 py-2 px-4 text-black w-full">Delete</button>
                   </div>
                 </div>
               </div>
        
    );
};

export default MyProductCard;