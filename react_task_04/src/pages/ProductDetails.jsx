import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/home/SectionTitle";
import { fetchProducts } from "../redux/FetchedProductsSlice";
import Button from "../components/Button";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.inventory);
  const { id } = useParams();

  useEffect(() => {
    // Fetch products if the list is empty.
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // The id from useParams is a string. `item.id` could be a number.
  // Using `==` allows for type coercion, which is a simple fix here.
  const product = products.find((item) => item.id == id);

  if (loading && !product) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center p-10">Product not found.</div>;
  }

  return (
    <>
      <main className="flex flex-col relative m-auto sm:w-11/12 lg:w-4/5 bg-white p-4 gap-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 order-last md:order-first">
              {product.images?.slice(0, 4).map((img, index) => (
                <div key={index} className="w-24 h-24 bg-gray-100 p-1 cursor-pointer">
                  <img src={img} alt={`${product.title} view ${index + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <div className="flex-grow bg-gray-100 p-4 h-[500px]">
              <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="text-xl text-gray-700">${product.price}</div>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-4">
              <Button label="Add to Cart" />
            </div>
          </div>
        </div>
        <div>
          <SectionTitle title="Related Items" />
          {/* You can map over other products here to show related items */}
          <div>{/* Logic for related items can go here */}</div>
        </div>
      </main>
    </>
  );
}
