import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const {logIn} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [errorMessage, setErrorMessage] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleLogIn = data => {
        setErrorMessage('')
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message)
        })
    }
    return (
        <div className='max-w-[1440px] mx-auto px-2'>
           <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-14'>
                <div>
                    <img alt='' src='https://img.freepik.com/free-vector/signing-contract-concept-illustration_114360-4889.jpg?w=826&t=st=1669293599~exp=1669294199~hmac=1b010737dcd8ce43fd45b9684aae911d5168729451acc91ff2ec3dc22367978c'></img>
                </div>
                <div className='px-14'>
                    <h2 className="text-5xl font-bold">Log in</h2>
                    <form onSubmit={handleSubmit(handleLogIn)}>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email', { required: 'email is required' })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}

                        </div>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
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

                        <input className='btn btn-primary w-full' type="submit" value='Log in' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;