import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/home/SectionTitle";

export default function ProductDetails() {
  const { products } = useSelector((state) => state.inventory);
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  return (
    <>
      <section>
       
      
        <div>
          <div>
            <ul></ul>
          </div>
          {/* <div>{product}</div> */}
          <div>
            <h1>
              {product.title}
            </h1>
          </div>
        </div>
        <div>
          <SectionTitle title="Related Items" />
          <div></div>
        </div>
      </section>
    </>
  );
}
