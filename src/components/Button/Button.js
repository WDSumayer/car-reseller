import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import SmallLoading from '../SmallLoading/SmallLoading';
import { useState } from 'react';

const Button = ({brand_name}) => {
    const [loading, setLoading] = useState(false)

    return (
       
        <button onClick={() => setLoading(true)} className='btn brand-btn'>
     {
       loading ? <>
         <SmallLoading className='py-20'></SmallLoading> 
         <p className='ml-5'>working...</p>
         
       </>
       :   
      <>
         <FaCar className='mr-5 text-teal-800'></FaCar>
       {brand_name}
      </>
     }
      
       
   </button>
  
    );
};

export default Button;