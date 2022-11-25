import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ bookingInfo, setBookingInfo }) => {
    const {user} = useContext(AuthContext)
    const { img, name, seller_name, location, resale_price, original_price, years_of_use, posted_date,_id } = bookingInfo

    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const orders ={
            name, email, product, price, phone,img,car_id: _id
        }
        fetch(`http://localhost:5000/orders`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setBookingInfo('')
               
              }
              else{
               alert(data.message)
              }
        })
       
        
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Product</span>
                            </label>
                            <input type="text" name='product' defaultValue={name} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={resale_price} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phone' className="input input-bordered" />
                        </div>
                        <input type='submit' value='submit' className='btn btn-primary w-full'></input>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;