import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const Detail = () => {
  const { slug } = useParams();
  // console.log(slug);
  const [product, setproduct] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/product/detail/${slug}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);

  return (
    <React.Fragment>
      {product && <ProductDetail product={product} />}
    </React.Fragment>
  );
};

export default Detail;
