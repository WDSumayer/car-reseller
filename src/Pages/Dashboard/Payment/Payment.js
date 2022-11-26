import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData()
    return (
        <div>
           <h2 className='text-3xl'>Payment for <strong>{order.product}</strong></h2>
           <p className='text-2xl'>Please pay <strong>$ {order.price}</strong> for this product. </p>
        </div>
    );
};

export default Payment;