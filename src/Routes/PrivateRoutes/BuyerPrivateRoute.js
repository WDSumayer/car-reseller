import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';

const BuyerPrivateRoute = ({children}) => {
    const {user, loading, googleLoading} = useContext(AuthContext)
   const [isUser, isUserLoading] = useUser(user?.email)
   const location = useLocation()
   if(loading || isUserLoading || googleLoading){
    return <Loading></Loading>
   }
   if(user && isUser){
       return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default BuyerPrivateRoute;