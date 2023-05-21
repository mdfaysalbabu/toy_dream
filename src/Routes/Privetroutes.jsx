import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Components/Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

const Privetroutes = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location=useLocation()
    if(loading)
    {
        return <p>Loading...</p>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default Privetroutes;