import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ContextProduct } from "../context/ContextApiProducts";
import SkeletonCard from "./SkeletonCard";
function Products() {
  const { products } = useContext(ContextProduct);
  return (
    <React.Fragment>
      {products.loading ? (
        <SkeletonCard></SkeletonCard>
      ) : (
        <ProductCard></ProductCard>
      )}
    </React.Fragment>
  );
}

export default Products;
