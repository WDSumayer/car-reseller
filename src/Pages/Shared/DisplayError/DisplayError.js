import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>somthing went wrong</h1>
            <h1>{error.statusText || error.message}</h1>
        </div>
    );
};

export default DisplayError;