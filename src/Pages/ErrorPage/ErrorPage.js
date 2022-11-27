import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div>
                <h1 className='text-9xl font-black mb-5'>404</h1>
                <Link to='/' className='block'><button className='btn btn-primary rounded-sm border-none'>Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;