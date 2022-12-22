import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';

const MyProductCard = ({product, refetch}) => {
  const [loading, setLoading] = useState(false)
  const [delLoading, setDelLoading] = useState(false)
    const {img, resale_price:price, name:productName, status, _id, seller_email, category_id} = product

    const handleAdd = () => {
      setLoading(true)
      const advgProduct = {
        img,price, productName, status, car_id: _id, email: seller_email, brand_id: category_id
      }
      fetch('https://car-reseller-server-wdsumayer.vercel.app/addvertise', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(advgProduct)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
          toast.success('add to advertise successfully')
          setLoading(false)
        }
      })
    }

    const handleDeleteCar = (product) => {
      setDelLoading(true)
      fetch(`https://car-reseller-server-wdsumayer.vercel.app/cars/${product._id}`, {
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
        
             <div className="bg-base-100 border">
                 <figure className="p-7">
                   <img src={img} alt="Shoes" className="rounded-none" />
                 </figure>
                 <div className="card-body p-7">
                   <h2 className="card-title font-bold">{productName}</h2>
                   <p className='text-lg font-bold'>Price: ${price}</p>
                   <p className='text-lg font-medium'>{status === "Paid" ? "Sold" : status}</p>
                   <div className="card-actions w-full">
                     <button onClick={handleAdd} className={status === "Paid" ? "py-2 px-4 rounded-none w-full mb-3 btn-disabled" : "bg-teal-800 py-2 px-4 text-white w-full mb-3"}>{loading ? <SmallLoading></SmallLoading> : "Advertige"}</button>
                     <button onClick={() => handleDeleteCar(product)} className="border border-gray-700 py-2 px-4 text-black w-full">{delLoading ? <SmallLoading></SmallLoading> : "Delete"}</button>
                   </div>
                 </div>
               </div>
        
    );
};

export default MyProductCard;