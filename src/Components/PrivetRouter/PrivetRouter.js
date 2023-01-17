import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({isSignin , children}) => {
    if(isSignin){
        return <Navigate to='/' replace></Navigate>
    }
    return children
};

export default PrivetRouter;