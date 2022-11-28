import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SmallLoading from '../../components/SmallLoading/SmallLoading';
import useToken from '../../Hooks/useToken';
import toast from 'react-hot-toast';

const SignUp = () => {
    
    const { createUser, updateUser, googleSignIn, loading,setLoading, googleLoading } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [errorMessage, setErrorMessage] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    useEffect(() => {
        if(token){
            toast.success('user created successfully')
            navigate('/')
        }
    }, [token])



    const provider = new GoogleAuthProvider();

    const googleSigning = () => {
        googleSignIn(provider)
        .then(result => {
            const user = result.user
            console.log(user.displayName, user.email)
            savedUser(user.displayName, user.email, "User")
        })
        .catch(error => console.log(error))
    }

    const handleSignUp = (data) => {
        setErrorMessage('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(() => {
                        savedUser(data.name, data.email, data.user)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
                setLoading(false)
            })
    }


    const savedUser = (name, email, role) => {
        const user = {name, email, role }
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCreatedUserEmail(email)
        })
    }
    return (
        <div className='max-w-[1440px] mx-auto px-2 py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-14'>
                <div>
                    <img alt='' src='https://img.freepik.com/free-vector/signing-contract-concept-illustration_114360-4889.jpg?w=826&t=st=1669293599~exp=1669294199~hmac=1b010737dcd8ce43fd45b9684aae911d5168729451acc91ff2ec3dc22367978c'></img>
                </div>
                <div className='px-5 lg:px-14'>
                    <h2 className="text-5xl font-bold mb-7">Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input {...register('name', { required: 'name is required' })} type="text" placeholder="name" className="input input-bordered rounded-sm h-auto py-3" />
                            {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input {...register('email', { required: 'email is required' })} type="email" placeholder="email" className="input input-bordered rounded-sm h-auto py-3" />
                            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}

                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg">Who are you?</span>
                            </label>
                            <select {...register('user', { required: 'selection option is required' })} className="select select-bordered w-full rounded-sm h-auto py-3">
                                <option className='text-lg font-semibold'>User</option>
                                <option className='text-lg font-semibold'>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: "must be at least 6 character" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password pattern must be strong' }
                            })} type="password" placeholder="password" className="input input-bordered rounded-sm h-auto py-3" />
                            {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                        </div>

                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        }
                        
                        <button type='submit' className='btn btn-primary w-full mt-7 rounded-sm h-auto py-3'>{loading ? <SmallLoading></SmallLoading> : "Sign up"}</button>
                       
                        <p className='mt-1'>Already have an account? Please <Link className='text-primary' to='/login'>LogIn</Link></p>
                    </form>
                    <div className='w-full border rounded-sm p-5 mt-4'>
                    <p className='text-lg text-center'>OR</p>
                        <button onClick={googleSigning} className='w-full btn mt-2 rounded-sm h-auto py-3'>{googleLoading ? <SmallLoading></SmallLoading> : <FaGoogle></FaGoogle>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;