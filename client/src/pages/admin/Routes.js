import React from "react";

import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Products from "./Products";

import Users from "./Users";
import Orders from "./Orders";
import OrderDetail from "./OrderDetail";
const RoutesDasboard = () => {
    return (
        <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orderdetail/:slug" element={<OrderDetail />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/products/edit/:slug" element={<EditProduct />} />
        </Routes>
    );
};

export default RoutesDasboard;
