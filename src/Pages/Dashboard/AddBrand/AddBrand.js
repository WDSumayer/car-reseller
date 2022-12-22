import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddBrand = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = (data) => {
       
       
 
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
               
                 if(imgData.success){
                     const brandCategory = {
                         brand_name: data.brandName,
                         img: imgData.data.url,
                       
                        
                     }
 
                     fetch('https://car-reseller-server-wdsumayer.vercel.app/brand', {
                         method: 'POST',
                         headers: {
                             'content-type': 'application/json',
                            
             
                         },
                         body: JSON.stringify(brandCategory)
                     })
                     .then(res => {
                        
             
                         return res.json()
                     })
                     .then(result => {
                         console.log(result)
                         setLoading(false)
                         toast.success('added successfully')
                        
                     })
                 }
             })
        
 
 
 
 
        
        
     }


    return (
        <div>
             <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Brand Name</span>
                    </label>
                    <input type="text" {...register("brandName", { required: 'Brand name is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Brand Image (image size should be 640*427)</span>
                    </label>
                    <input type="file" {...register("image", { required: 'Brand image is required' })} className="input input-bordered rounded-sm h-auto py-3" />
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                </div>

               

                <button type='submit' className='btn border-none hover:border-none bg-teal-800 hover:bg-teal-800 text-center w-full rounded-sm h-auto py-3 mt-5 text-lg'>Add</button>
                

            </form>
        </div>
    );
};

export default AddBrand;