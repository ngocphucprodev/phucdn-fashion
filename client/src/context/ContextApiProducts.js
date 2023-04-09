import React, { createContext, useEffect, useReducer, useState } from "react";
import { request, requestSuccess } from "../action/actionAPI";
import reducer, { initcarts, initShowProduct, innitGallery } from "./reducer";

export const ContextProduct = createContext()
export const ContextCart = createContext()
export const AuthContext = createContext()

function Context({ children }) {
    const [carts, dispatchCart] = useReducer(reducer.reducerCart, []);
    const [products, dispatchCallProduct] = useReducer(reducer.reducerCallProduct, initShowProduct)
    const [galleries, dispatchCallGallery] = useReducer(reducer.reducerCallGallery, innitGallery)
    // console.log(gallery)
    useEffect(() => {
        dispatchCallProduct(request({ data: [] }))
        setTimeout(() => {
            fetch("http://localhost:4000/product/show")
                .then((response) => response.json())
                .then((data) => dispatchCallProduct(requestSuccess(data)))
        }, 500)
    }, []);

    useEffect(() => {
        // dispatchCallProduct(request({ data: [] }))
        fetch("http://localhost:4000/gallery/show")
            .then((response) => response.json())
            .then((data) => dispatchCallGallery({
                type: "GET_GALLERY",
                payload: data
            }))
    }, []);

    const responLogin = (form) => {
        console.log(form)
        fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (typeof data.user !== "undefined")
                    localStorage.setItem("user", JSON.stringify(data.user))

            });
    }



    const info = {
        carts,
        dispatchCart
    }
    return (
        <ContextProduct.Provider value={{ products, galleries }}>
            <ContextCart.Provider value={info}>
                <AuthContext.Provider value={responLogin}>
                    {children}
                </AuthContext.Provider>
            </ContextCart.Provider>
        </ContextProduct.Provider>
    )

}

export default Context