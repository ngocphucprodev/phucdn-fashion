import React, { useContext } from "react";
import { ContextProduct } from "../context/ContextApiProducts";
import ViewCart from "./ViewCart";

const ProductCard = () => {
  return (
    <React.Fragment>
      <ViewCart />
    </React.Fragment>
  );
};

export default ProductCard;
