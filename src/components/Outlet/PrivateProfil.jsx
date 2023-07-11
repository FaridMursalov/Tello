import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateProfil = () => {

    const CustomerID = localStorage.getItem("CustomerId");


  return (
    <> { CustomerID?  <Outlet/>  :<Navigate to={'/Login'}  />}   </>
  )
}

export default PrivateProfil