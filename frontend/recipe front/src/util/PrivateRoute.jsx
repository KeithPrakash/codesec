import { useContext, useEffect, useState } from 'react';
import {  replace, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';


function PrivateRoute({ children }) {


  const {isAuthenticated} =useContext(AuthContext)
  console.log(isAuthenticated,"protected")
  const navigate = useNavigate();

  useEffect(()=>{
    if (!isAuthenticated) {
      navigate('/', { replace: true })      
      }
  },[])
  

  return children;
}


export default PrivateRoute;