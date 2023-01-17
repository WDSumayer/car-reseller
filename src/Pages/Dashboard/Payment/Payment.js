import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)
const Payment = () => {
    const order = useLoaderData()
    return (
        <div className='w-full lg:w-3/5 mx-auto mt-12'>
           <h2 className='text-3xl'>Payment for <strong>{order.product}</strong></h2>
           <p className='text-2xl'>Please pay <strong>$ {order.price}</strong> for this product. </p>
           <div className='border w-full py-12 px-3 mt-12'>
           <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
           </div>
        </div>
    );
};

export default Payment;