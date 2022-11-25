import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const handleAddProduct = (data) => {
       
        const image = data.image[0]
        console.log(image)
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
            })
       


        // const formData = new FormData()
        // formData.append('image', image)
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`


       
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" {...register("name", { required: 'name is required' })} defaultValue={user?.displayName} readOnly className="input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" {...register("email", { required: 'email is required' })} defaultValue={user?.email} readOnly className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Product Name</span>
                    </label>
                    <input type="text" {...register("productName", { required: 'productName is required' })} className="input input-bordered" />
                    {errors.productName && <p className='text-red-500'>{errors.productName?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">About Your Product</span>
                    </label>
                    <textarea {...register("description", { required: 'description is required' })} className="textarea textarea-bordered"></textarea>
                    {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Re-Sale Price</span>
                    </label>
                    <input type="text" {...register("price", { required: 'price is required' })} className="input input-bordered"  />
                    {errors.price && <p className='text-red-500'>{errors.price?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="text" {...register("oldPrice", { required: 'oldPrice is required' })} className="input input-bordered" />
                    {errors.oldPrice && <p className='text-red-500'>{errors.oldPrice?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <select {...register("brandName")} className="select select-bordered w-full">
                        <option disabled selected>Who shot first?</option>
                       
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select {...register("condition")} className="select select-bordered w-full">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                       
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" {...register("location", { required: 'location is required' })} className="input input-bordered" />
                    {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Photo</span>
                    </label>
                    <input type="file" {...register("image", { required: 'image is required' })} className="input input-bordered" />
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                </div>

               


                <input type='submit' value='submit' className='btn btn-primary w-full'></input>

            </form>
        </div>
    );
};

export default AddProduct;