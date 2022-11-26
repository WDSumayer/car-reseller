import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async e => {
        e.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log(error)
            setCardError(error.message)
          } else {
            setCardError('')
          }
        




    }

    return (
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className='text-red-700'>{cardError}</p>
      <button className='btn btn-sm btn-primary rounded-sm mt-8' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    );
};

export default CheckoutForm;