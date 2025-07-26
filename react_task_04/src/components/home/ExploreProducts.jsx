import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/FetchedProductsSlice";
import ItemBox from "../ItemBox";
import Button from "../Button";
import { addToWishlist } from "../../redux/FetchedProductsSlice";
import SectionTitle from "./SectionTitle";
import { NavLink } from "react-router-dom";

export default function ExploreProducts() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   }
  //   if (error) {
  //     return <h1>Error: {error}</h1>;
  //   }
  return (
    <section>
      <SectionTitle title="Our Products" />
      <div className="flex justify-between items-center">
        <h2>Explore Our Products</h2>
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
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {products
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
            .slice(0, 8)}
        </ul>
        <div className="flex justify-center">
          <Button label="View All Products" />
        </div>
      </div>
    </section>
  );
}
