import React from 'react'
import { useContext } from 'react';
import {Navigate} from 'react-dom'



const PrivateRoute = ({children}) => {
const isAuth = localStorage.get("token")

if(!isAuth){
    return <Navigate to="/login" />
}
return children;
}

export default PrivateRoute;
