import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const WishBookingModal = ({ bookingInfo, setBookingInfo, refetch }) => {

    const {user} = useContext(AuthContext)
    const { img, name,resale_price,_id, product_status, car_id } = bookingInfo
    const { register, handleSubmit, formState: { errors } } = useForm()

    
    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const orders ={
            name, email, product, price, phone,img,car_id, status: product_status
        }
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/orders`, {
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
                toast.success('booking successfully')
                setBookingInfo('')
               
              }
              else{
               alert(data.message)
              }
        })
       
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/wishedCar/${_id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    refetch()
                   
                }
            })
        

        
    }


    return (
        <div>
            
        <input type="checkbox" id="wishModalBooking" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="wishModalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            
            <form onSubmit={handleBooking}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name='name' value={user?.displayName} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" name='email' value={user?.email} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Product</span>
                                    </label>
                                    <input type="text" name='product' value={name} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' value={resale_price} readOnly className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" name='phone' className="input input-bordered" />
                                </div>
                                <input type='submit' value='Book' className='btn bg-[#115E59] hover:bg-[#115E59] w-full my-5'></input>
                                
                            </form>
           
          </div>
        </div>
                 
                </div>
    );
};

export default WishBookingModal;