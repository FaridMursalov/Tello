import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CustomerID = localStorage.getItem("CustomerId");
const Authh = () => {
  return <>{CustomerID ? <Navigate to={"/UserAccount"} /> : <Outlet />}</>;
};

export default Authh;
