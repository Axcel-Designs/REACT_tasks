import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "../Button";
import ItemBox from "../ItemBox";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../../redux/FetchedProductsSlice'
import { NavLink } from "react-router-dom";

export default function FlashSales() {
  const { products } = useSelector((state) => state.inventory);
  const dispatch = useDispatch()
  return (
    <section>
      <SectionTitle title="Today's" />
      <div className="flex justify-between items-center">
        <div className="flex">
          <h2>Flash Sales</h2>
          <div></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 rounded-full flex justify-around items-center w-8 h-8">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="bg-gray-200 rounded-full flex justify-around items-center w-8 h-8">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 my-10">
          {products
            .map((item) => (
              <NavLink to={`details/${item.id}`} key={item.id}>
                <ItemBox
                  img={item.images}
                  label={item.title}
                  price={item.price}
                  click={() => dispatch(addToCart(item.id))}
                />
              </NavLink>
            ))
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)}
        </ul>
      </div>

      <div className="flex justify-center">
        <Button label="View All Products" />
      </div>
    </section>
  );
}
