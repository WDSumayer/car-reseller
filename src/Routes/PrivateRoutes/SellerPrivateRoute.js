import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../Hooks/useSeller';

const SellerPrivateRoute = ({children}) => {
   const {user, loading, googleLoading, logOut} = useContext(AuthContext)
   const [isSeller, isSellerLoading] = useSeller(user?.email)
   const location = useLocation()
   if(loading || isSellerLoading || googleLoading){
    return <Loading></Loading>
   }
   if(user && isSeller){
       return children
    }
    logOut()
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerPrivateRoute;