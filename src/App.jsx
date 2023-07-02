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
import Basket from "./assets/pages/Basket";
// import breadCrumbsI from './assets/icons/breadCRumbs.svg'
function App() {
  // const { pathname, key } = useLocation();



  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}  />
        <Route path="/Product-details/:id" element={<ProductsDetails/>}/>
        <Route path="/products/:id/:page" element={<Products/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Sign-up" element={<Login/>} />
        <Route path="/basket" element={<Basket/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
