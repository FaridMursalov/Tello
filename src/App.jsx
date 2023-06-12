import "./App.css";
import Header from "./components/Header";
import Home from "./assets/pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./assets/pages/Products";
import ProductDetails from "./assets/pages/ProductDetails";
import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import breadCrumbsI from './assets/icons/breadCRumbs.svg'
function App() {
  // const { pathname, key } = useLocation();



  return (
    <>
      <Header />
      {/* <div className="breadCrumbs">
        
        {pathname.split("/").map((p) => {
          return (
            <Link key={key} to={`/${p}`}>
              {`${pathname === "/" ? "Ana səhifə" : p}`}
            </Link>
          );
        })}
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}  />
        <Route path="/Product-details" element={<ProductDetails/>}/>
        <Route path="/products/:id/:page" element={<Products/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
