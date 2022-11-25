import React from 'react';

const MyOrderCard = ({order}) => {
    const {img,product,price} = order
    return (
       
            
            
         <div className="bg-base-100 border">
                 <figure className="px-10 pt-10">
                   <img src={img} alt="Shoes" className="rounded-full" />
                 </figure>
                 <div className="card-body items-center text-center">
                   <h2 className="card-title">{product}</h2>
                   <p className='text-lg'>Price: $ {price}</p>
                   <div className="card-actions w-full">
                     <button className="btn btn-primary rounded-none w-full">Pay Now</button>
                   </div>
                 </div>
               </div>
             
           
    );
};

export default MyOrderCard;