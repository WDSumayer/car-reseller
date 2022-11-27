import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div>
                <img className='w-2/3 mx-auto' src='https://i.ibb.co/cLC181H/2704891.jpg' alt=''></img>
                <Link to='/' className='block text-center'><button className='btn btn-primary rounded-sm border-none'>Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;