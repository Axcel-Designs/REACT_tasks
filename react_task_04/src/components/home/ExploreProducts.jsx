import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/FetchedProductsSlice";
import ItemBox from "../ItemBox";
import Button from "../Button";
import { addToWishlist } from "../../redux/FetchedProductsSlice";

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
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products
          .map((item) => (
            <li key={item.id}>
              <ItemBox
                img={item.images[0]}
                label={item.title}
                price={`$${item.price}`}
                click={() => dispatch(addToWishlist(item.id))}
                
              />
            </li>
          ))
          .sort(() => Math.random() - 0.5)
          .slice(0, 8)}
      </ul>
      <div className="flex justify-center">
        <Button label="View All Products" />
      </div>
    </div>
  );
}
