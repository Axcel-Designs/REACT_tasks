import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemBox({ img, label, price,click }) {
  return (
    <div className="flex flex-col">
      <div
        className="bg-[#f5f5f5] h-30 p-2 flex items-start justify-between bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div>{/* <div><i className="fa-regular fa-star"></i></div> */}</div>
        <div className="flex flex-col justify-between gap-2">
          <button
            type="button"
            className="bg-white flex justify-around rounded-full p-1"
            onClick={click}
          >
            <i className="fa-regular fa-heart "></i>
          </button>
          <button className="bg-white flex justify-around rounded-full p-1">
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-sm">{label}</h1>
        <p className="text-xs text-[#db4444]">{price}</p>
      </div>
    </div>
  );
}
// Add to WishList Item box
export  function WishListItemBox({ img, label, price,click,addCart }) {
  return (
    <div className="flex flex-col">
      <div
        className="bg-[#f5f5f5] h-30 p-2 flex items-start justify-between bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div></div>
        <div>
          <button
            type="button"
            className="bg-white flex justify-around rounded-full p-1"
            onClick={click}
          >
            <i className="fa-regular fa-trash-can "></i>
          </button>
        </div>
      </div>
      <div
        className="bg-black text-white flex justify-center items-center gap-2 py-1 text-sm"
        onClick={addCart}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Add to Cart</p>
      </div>
      <div>
        <h1 className="text-sm">{label}</h1>
        <p className="text-xs text-[#db4444]">{`$${price}`}</p>
      </div>
    </div>
  );
}
// Add to Just For You Item box
export  function ForYouItemBox({ img, label, price,click,addCart }) {
  return (
    <div className="flex flex-col">
      <div
        className="bg-[#f5f5f5] h-30 p-2 flex items-start justify-between bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div></div>
        <div>
          <button
            type="button"
            className="bg-white flex justify-around rounded-full p-1"
            onClick={click}
          >
            <i className="fa-regular fa-eye "></i>
          </button>
        </div>
      </div>
      <div
        className="bg-black text-white flex justify-center items-center gap-2 py-1 text-sm"
        onClick={addCart}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Add to Cart</p>
      </div>
      <div>
        <h1 className="text-sm">{label}</h1>
        <p className="text-xs text-[#db4444]">{`$${price}`}</p>
      </div>
    </div>
  );
}
