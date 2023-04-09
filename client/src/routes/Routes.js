import React from "react";

import { Route, Routes } from "react-router-dom";

import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Register from "../pages/Register";

const Routeson = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Home />} />
            <Route path="/product/:slug" element={<Detail />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Routeson;
