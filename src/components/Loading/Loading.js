import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center py-14">
        <div className="spinner-border outline-dashed animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden"></span>
        </div>
        <p className='pl-2 text-lg'>Processing...</p>
      </div>
        
    );
};

export default Loading;