import React from 'react';

const MyProductCard = ({product}) => {
    const {img, resale_price:price, name:productName, status, _id, seller_email} = product
console.log(product)
    const handleAdd = () => {
      const advgProduct = {
        img,price, productName, status, car_id: _id, email: seller_email
      }
      fetch('http://localhost:5000/addvertise', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(advgProduct)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }
    return (
        
             <div className="bg-base-100 border">
                 <figure className="px-8 pt-10">
                   <img src={img} alt="Shoes" className="rounded-none" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{productName}</h2>
                   <p className='text-lg'>Price: $ {price}</p>
                   <p className='text-lg'>{status}</p>
                   <div className="card-actions w-full">
                     <button onClick={handleAdd} className={status === "Paid" ? "py-2 px-4 rounded-none w-full mb-3 btn-disabled" : "bg-primary py-2 px-4 text-white w-full mb-3"}>Advertige</button>
                     <button className="border border-gray-700 py-2 px-4 text-black w-full">Delete</button>
                   </div>
                 </div>
               </div>
        
    );
};

export default MyProductCard;