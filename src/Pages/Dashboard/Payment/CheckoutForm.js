import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const {price, name, email, _id, car_id} = order

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            setClientSecret(data.clientSecret)
        })
    }, [price])

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
          setSuccess('')
          setProcessing(true)

          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret ,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message)
            return
          }
          console.log(paymentIntent)
          if(paymentIntent.status === "succeeded"){
               

                const payment = {
                    price, transactionId: paymentIntent.id, email, orderId: _id, car_id
                }
                fetch('http://localhost:5000/payments', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(payment)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        setSuccess("consgratulation, payment succeeded")
                        setTransactionId(paymentIntent.id)
                    }
                })
          }
        
          setProcessing(false)



    }

    return (
  <div>
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
      <button className='btn btn-sm btn-primary rounded-sm mt-8' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
     
    </form>
    {
        success && <div>
            <h3 className='text-xl text-green-600'>{success}</h3>
            <p className='text-xl'>Your transactionId is <strong>{transactionId}</strong></p>
        </div>
    }
  </div>
    );
};

export default CheckoutForm;