import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/FetchedProductsSlice";
import { Navigate } from "react-router-dom";
import ItemBox from "../components/ItemBox";

export default function Search() {
  const search = useSelector((state) => state.inventory.search);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.inventory);
  const filteredProducts = products.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {filteredProducts.length <= 0 ? (
        <Navigate to="/notfound" />
      ) : (
        <main className="flex flex-col relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
          <section>
            <div>
              <ul className="grid grid-cols-2 lg:grid-cols-4 w-full gap-2 my-10">
                {filteredProducts.map((item) => (
                  <li key={item.id}>
                    <ItemBox
                      details={`/details/${item.id}`}
                      img={item.images}
                      label={item.title}
                      price={item.price}
                      click={() => dispatch(addToWishlist(item.id))}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
