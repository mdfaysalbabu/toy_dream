import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Components/Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

const Privetroutes = ({children}) => {
    const {user}=useContext(authContext)
    const location=useLocation()
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default Privetroutes;