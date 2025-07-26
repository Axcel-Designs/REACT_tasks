import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { products } = useSelector((state) => state.inventory);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  

  return (
    <>
      <section>
        {product.title}
        kk
      </section>
    </>
  );
}
