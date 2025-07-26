import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import ItemBox from "../ItemBox";
import {addToCart} from '../../redux/FetchedProductsSlice'
import { NavLink } from "react-router-dom";

export default function BestSelling() {
  const { products } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <>
      <section>
        <SectionTitle title="This Month" />
        <div className="flex justify-between items-center">
          <div className="">
            <h2>Best Selling Products</h2>
          </div>
          <Button label="View All" />
        </div>
        <div className="flex justify-around">
          <ul className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 my-10">
            {products
              .map((item) => (
                <NavLink to={`/details/${item.id}`} key={item.id}>
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
      </section>
    </>
  );
}
