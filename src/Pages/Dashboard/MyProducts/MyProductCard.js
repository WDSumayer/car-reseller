import React from 'react';

const MyProductCard = ({product}) => {
    const {img, resale_price:price, product:name} = product
    return (
        
             <div className="bg-base-100 border">
                 <figure className="px-10 pt-10">
                   <img src={img} alt="Shoes" className="rounded-none" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{name}</h2>
                   <p className='text-lg'>Price: $ {price}</p>
                   <p className='text-lg'>Status: available</p>
                   <div className="card-actions w-full d-flex justify-between">
                     <button className="btn btn-primary rounded-none">Delete</button>
                     <button className="btn btn-secondary rounded-none">Unsold</button>
                   </div>
                 </div>
               </div>
        
    );
};

export default MyProductCard;