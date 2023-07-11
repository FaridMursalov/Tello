import "./App.css";
import Header from "./components/Header";
import Home from "./assets/pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./assets/pages/Products";
import ProductsDetails from "./assets/pages/ProductsDetails";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./assets/pages/Login";
import UserAccount from "./assets/pages/UserAccount";
import GenerateToken from "./assets/pages/GenerateToken";
import Basket from "./assets/pages/GetBasket";
import PrivateProfil from "./components/Outlet/privateProfil";
import Auth from "./components/Outlet/auth";
import Authh from "./components/Outlet/Authh";
import EmailMessage from "./components/EmailMessage";
// import UserProfile from "./assets/pages/userProfile";
// import breadCrumbsI from './assets/icons/breadCRumbs.svg'
function App() {
  // const { pathname, key } = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:page" element={<Products />} />
        <Route path="/Product-details/:id" element={<ProductsDetails />} />
        <Route path="/products/:id/:page" element={<Products />} />
        <Route path="/send" element={<EmailMessage />} />
        
        <Route path="/generate/:token" element={<GenerateToken />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="UserAccount" element={<PrivateProfil />}>
          <Route path="/UserAccount" element={<UserAccount />} />
        </Route>
        <Route path="/Login" element={<Auth />}>
          <Route path="/Login" element={<Login />} />
          
        </Route><Route path="/Sign-up" element={<Authh />}>
          <Route path="/Sign-up" element={<Login />} />
          
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
