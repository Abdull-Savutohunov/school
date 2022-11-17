import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import useIsAuth from "../hooks/useIsAuth";

const PrivateRoutes = () => {
  const {isAuth} = useIsAuth()


  return isAuth ? <Outlet/> : <Navigate to={'/register'}/>
};

export default PrivateRoutes