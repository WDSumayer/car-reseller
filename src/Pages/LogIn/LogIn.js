import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import SmallLoading from '../../components/SmallLoading/SmallLoading';
import useToken from '../../Hooks/useToken';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const LogIn = () => {
    const {logIn, googleSignIn, loading,setLoading, googleLoading, setGoogleLoading} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [errorMessage, setErrorMessage] = useState('')
    const[loggedUserEmail, setLoggedUserEmail] = useState('')
    const [token] = useToken(loggedUserEmail)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    useTitle('LogIn')

    useEffect(() => {
        if(token){
            toast.success('log in successfully')
            navigate(from, {replace: true})
        }
    }, [token])


   
   const provider = new GoogleAuthProvider()
    const googleSigning = () => {
        googleSignIn(provider)
        .then(result => {
            const user = result.user
            savedUser(user.displayName, user.email, "User")
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            setGoogleLoading(false)
        })
    }
   
    const savedUser = (name, email, role) => {
        const user = {name, email, role }
        fetch(`https://car-reseller-server-wdsumayer.vercel.app/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setLoggedUserEmail(email)
        })
    }
   
   
   
    const handleLogIn = data => {
        setErrorMessage('')
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            setLoggedUserEmail(data.email)
           
        })
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message)
            setLoading(false)
        })
    } 
    return (
        <div className='max-w-[1440px] mx-auto px-2 py-20'>
           <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-14'>
                <div>
                    <img alt='' src='https://img.freepik.com/free-vector/signing-contract-concept-illustration_114360-4889.jpg?w=826&t=st=1669293599~exp=1669294199~hmac=1b010737dcd8ce43fd45b9684aae911d5168729451acc91ff2ec3dc22367978c'></img>
                </div>
                <div className='px-5 lg:px-14'>
                    <h2 className="text-5xl font-bold mb-7">Log in</h2>
                    <form onSubmit={handleSubmit(handleLogIn)}>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input {...register('email', { required: 'email is required' })} type="email" placeholder="email" className={ errors.email || errorMessage ? 'input input-bordered border-red-600 rounded-sm h-auto py-3' : 'input input-bordered rounded-sm h-auto py-3'} />
                            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}

                        </div>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: "must be at least 6 character" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password pattern must be strong' }
                            })} type="password" placeholder="password" className={ errors.password || errorMessage ? 'input input-bordered border-red-600 rounded-sm h-auto py-3' : 'input input-bordered rounded-sm h-auto py-3'} />
                            {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                        </div>
                            

                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        }
                        
                        <button type='submit' className='btn bg-teal-800 hover:bg-teal-800 border-none hover:border-none w-full mt-7 rounded-sm h-auto py-3'>{loading ? <SmallLoading></SmallLoading> : 'Log in'}</button>
                        
                        <p className='mt-1'>Don't have any account? Create account <Link className='text-primary' to='/signup'>SignUp</Link></p>
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

export default LogIn;