import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [errorMessage, setErrorMessage] = useState('')

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
        })
    }
    return (
        <div className='max-w-[1440px] mx-auto px-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-14'>
                <div>
                    <img alt='' src='https://img.freepik.com/free-vector/signing-contract-concept-illustration_114360-4889.jpg?w=826&t=st=1669293599~exp=1669294199~hmac=1b010737dcd8ce43fd45b9684aae911d5168729451acc91ff2ec3dc22367978c'></img>
                </div>
                <div className='px-14'>
                    <h2 className="text-5xl font-bold mb-7">Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input {...register('name', { required: 'name is required' })} type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input {...register('email', { required: 'email is required' })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}

                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg">Who are you?</span>
                            </label>
                            <select {...register('user', { required: 'selection option is required' })} className="select select-bordered w-full">
                                <option>User</option>
                                <option>Seller</option>
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
                            })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                        </div>

                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        }

                        <input className='btn btn-primary w-full mt-7' type="submit" value='Sign up' />
                        <p className='mt-1'>Already have an account? Please <Link className='text-primary' to='/login'>LogIn</Link></p>
                    </form>
                    <div>
                    <p className='text-lg text-center'>OR</p>
                        <button onClick={googleSigning} className='w-full btn mt-2'><FaGoogle></FaGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;