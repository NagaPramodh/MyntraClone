import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import Product from "../Pages/Product";
import WomensProduct from "../Pages/WomensProduct";
import KidsProduct from "../Pages/KidsProduct";
import SingleProductPage from "../Pages/SingleProductPage";
import Address from "../Pages/Address";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Success from "../Pages/Success";
import { getData } from "../Pages/storage";

const AllRoutes = () => {
  
  const [fulldetails, setFullDetails] = useState("");
  console.log(fulldetails);

  useEffect(() => {
    const getDetails = getData("details");
    setFullDetails(getDetails);
  }, []);


  return (
    <div>
      <Routes>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Product />}></Route>
        <Route path="/women" element={<WomensProduct />}></Route>
        <Route path="/kids" element={<KidsProduct />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/bag" element={<Cart />} ></Route>
        <Route path="/address" element={<Address />} ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/success" element={<Success />} ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
