import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import SectionTitle from "../components/home/SectionTitle";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
  fetchProducts,
} from "../redux/FetchedProductsSlice";
import ItemBox from "../components/ItemBox";
import Button from "../components/Button";

export default function ProductDetails() {
  const { products, loading } = useSelector((state) => state.inventory);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const product = products.find((item) => item.id == id);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);       

  function minusQty() {
    if (qty <= 0) return setQty(0);
    setQty(qty - 1);
  }
  function addQty() {
    setQty(qty + 1);
  }

  const size = [
    { sz: "xs" },
    { sz: "s" },
    { sz: "m" },
    { sz: "l" },
    { sz: "xl" },
  ];

  const colors = [
    { name: "gray", class: "bg-gray-400" },
    { name: "red", class: "bg-red-500" },
  ];

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading && !product) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center p-10">Product not found.</div>;
  }

  const relatedItems = products.filter(
    (items) => items.category === product.category && items.id !== product.id
  );

  return (
    <>
      <main className="flex flex-col  relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        <section className="my-10">
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex md:flex-col gap-4 order-last md:order-first">
                {product.images?.slice(0, 4).map((img, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 bg-gray-200 p-1 cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex-grow bg-gray-200 p-4 h-[500px]">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-fit md:max-w-2/5">
                <div className="border-b-2 border-gray-200 py-2">
                  <h1 className="text-2xl">{product.title}</h1>
                  <p className="font-semibold my-2">${product.price}</p>
                  <p className="my-2">{product.description}</p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <h3 className="text-lg">Colours:</h3>
                  <div className="flex items-center gap-2">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className={`w-5 h-5 rounded-full cursor-pointer ${
                          color.class
                        } ${
                          selectedColor === color.name ? "ring-2 ring-black" : ""
                        }`}
                        onClick={() => setSelectedColor(color.name)}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 my-4">
                  <h3 className="text-xl">Size:</h3>
                  <ul className="flex items-center gap-2">
                    {size.map((item) => (
                      <li
                        key={item.sz}
                        className={`w-8 h-8 border flex justify-center items-center rounded-sm cursor-pointer transition-colors ${
                          selectedSize === item.sz
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-white text-black hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedSize(item.sz)}
                      >
                        {item.sz.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <div className=" flex text-2xl rounded-sm">
                    <div
                      className="w-10 h-10 border flex justify-center items-center rounded-l-sm"
                      onClick={minusQty}
                    >
                      -
                    </div>
                    <div className="w-20 h-10 border-y flex justify-center items-center">
                      {qty}
                    </div>
                    <div
                      className="w-10 h-10 border flex justify-center items-center rounded-r-sm"
                      onClick={addQty}
                    >
                      +
                    </div>
                  </div>
                  <Button
                    label="Buy Now"
                    click={() => dispatch(addToCart(product.id))}
                  />
                  <div className="w-10 h-10 border flex justify-center items-center rounded-sm">
                    {" "}
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
                <div className="my-6">
                  <div className="flex flex-row items-center gap-4 border-1 p-4">
                    <i className="fa-solid fa-car"></i>
                    <div className="flex flex-col">
                      <h1>Free Delivery</h1>
                      <p className="text-sm">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-4 border-x-1 border-b-1 p-4">
                    <i className="fa-solid fa-car"></i>
                    <div className="flex flex-col">
                      <h1>Return Delivery</h1>
                      <p className="text-sm">
                        Free 30 Days Delivery Rreturns. Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br className="my-5" />

          {/* related items */}
          <div>
            <SectionTitle title="Related Items" />
            <div>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {relatedItems == 0 ? (
                  <h1> No related Items Found</h1>
                ) : (
                  relatedItems
                    .map((item) => (
                      <NavLink to={`details/${item.id}`} key={item.id}>
                        <ItemBox
                          img={item.images[0]}
                          label={item.title}
                          price={item.price}
                          click={() => dispatch(addToWishlist(item.id))}
                        />
                      </NavLink>
                    ))
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 4)
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
