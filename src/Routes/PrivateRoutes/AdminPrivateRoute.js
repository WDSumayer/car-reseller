import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminPrivateRoute = ({children}) => {
    const {user, loading, googleLoading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if(loading || isAdminLoading || googleLoading){
     return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
     }
     return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminPrivateRoute;