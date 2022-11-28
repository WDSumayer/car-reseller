import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';

const MyProductCard = ({product, refetch}) => {
  const [loading, setLoading] = useState(false)
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
        
             <div className="bg-base-100 border hover:border-primary ease-linear duration-300">
                 <figure className="px-8 pt-10">
                   <img src={img} alt="Shoes" className="rounded-none" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{productName}</h2>
                   <p className='text-lg'>Price: $ {price}</p>
                   <p className='text-lg font-medium'>{status === "Paid" ? "Sold" : status}</p>
                   <div className="card-actions w-full">
                     <button onClick={handleAdd} className={status === "Paid" ? "py-2 px-4 rounded-none w-full mb-3 btn-disabled" : "bg-primary py-2 px-4 text-white w-full mb-3"}>{loading ? <SmallLoading></SmallLoading> : "Advertige"}</button>
                     <button onClick={() => handleDeleteCar(product)} className="border border-gray-700 py-2 px-4 text-black w-full">Delete</button>
                   </div>
                 </div>
               </div>
        
    );
};

export default MyProductCard;