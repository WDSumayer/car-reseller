import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SmallLoading from '../../../components/SmallLoading/SmallLoading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/categories`)
        .then(res => res.json())
        .then(data => {
            setBrands(data)
        })
    }, [])







    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const handleAddProduct = (data) => {
       setLoading(true)
        const brandName = data.brandName
        const selectedBrand = brands.find(brand => brand.brand_name === brandName)
        console.log(selectedBrand._id)

        const image = data.image[0]
        
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
          })
            .then((res) => res.json())
            .then(imgData => {
                console.log(imgData)
                if(imgData.success){
                    const product = {
                        img: imgData.data.url,
                        category_id: selectedBrand._id,
                        name: data.productName,
                        seller_name: data.name,
                        brand_name: data.brandName,
                        resale_price: data.price,
                        original_price: data.oldPrice,
                        posted_date: date,
                        years_of_use: data.usedYears,
                        location: data.location,
                        seller_email: data.email,
                        condition: data.condition,
                        status: "Available"
                    }

                    fetch('https://car-reseller-server-wdsumayer.vercel.app/cars', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                           
            
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => {
                       
            
                        return res.json()
                    })
                    .then(result => {
                        console.log(result)
                        setLoading(false)
                        navigate('/dashboard/myProducts')
                    })
                }
            })
       




       
       
    }
    return (
        <div className='w-full lg:w-3/5 mx-auto mt-12'>
             <h1 className='text-3xl md:text-5xl font-black text-center text-teal-900 mb-7'>Please Add Your Products.</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Your Name</span>
                    </label>
                    <input type="text" {...register("name", { required: 'name is required' })} defaultValue={user?.displayName} readOnly className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Your Email</span>
                    </label>
                    <input type="email" {...register("email", { required: 'email is required' })} defaultValue={user?.email} readOnly className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Your Product Name</span>
                    </label>
                    <input type="text" {...register("productName", { required: 'productName is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.productName && <p className='text-red-500'>{errors.productName?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">About Your Product</span>
                    </label>
                    <textarea {...register("description", { required: 'description is required' })} className="textarea textarea-bordered rounded-sm h-auto py-3"></textarea>
                    {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Re-Sale Price</span>
                    </label>
                    <input type="text" {...register("price", { required: 'price is required' })} className="input input-bordered rounded-sm h-auto py-3"  />
                    {errors.price && <p className='text-red-500'>{errors.price?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Original Price</span>
                    </label>
                    <input type="text" {...register("oldPrice", { required: 'oldPrice is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.oldPrice && <p className='text-red-500'>{errors.oldPrice?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Years of Use</span>
                    </label>
                    <input type="text" {...register("usedYears", { required: 'usedYears is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.usedYears && <p className='text-red-500'>{errors.usedYears?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Brand Name</span>
                    </label>
                    <select {...register("brandName")} className="select select-bordered w-full rounded-sm h-auto py-3">
                    <option disabled selected>Choose Brand Name</option>
                       {
                        brands.map(brand =>  <option key={brand._id} value={brand.brand_name}>{brand.brand_name}</option>)
                       }
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Condition</span>
                    </label>
                    <select {...register("condition")} className="select select-bordered w-full rounded-sm h-auto py-3">
                        <option selected>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                       
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Location</span>
                    </label>
                    <input type="text" {...register("location", { required: 'location is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Product Photo</span>
                    </label>
                    <input type="file" {...register("image", { required: 'image is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                </div>

               

                <button type='submit' className='btn border-none hover:border-none bg-teal-800 hover:bg-teal-800 text-center w-full rounded-sm h-auto py-3 mt-5 text-lg'>{loading ? <SmallLoading></SmallLoading> : "Add"}</button>
                

            </form>
        </div>
    );
};

export default AddProduct;