import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemBox, { ForYouItemBox, WishListItemBox } from "../components/ItemBox";
import { ButtonTrnparnt } from "../components/Button";
import { addToCart, removeFromWishlist } from "../redux/FetchedProductsSlice";
import { NavLink } from "react-router-dom";

export default function WishList() {
  const { wishlist } = useSelector((state) => state.inventory);
  const { products } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <>
      <main className="flex flex-col  relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        <section>
          <div className="flex justify-between items-center">
            <div>WishList({wishlist.length})</div>
            <div>
              <ButtonTrnparnt label={"move all to Bag"} />
            </div>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {wishlist.map((item) => (
              <NavLink to={`details/${item.id}`} key={item.id}>
                <WishListItemBox
                  img={item.images[0]}
                  label={item.title}
                  price={item.price}
                  click={() => dispatch(removeFromWishlist(item.id))}
                  addCart={() => dispatch(addToCart(item.id))}
                />
              </NavLink>
            ))}
          </ul>
        </section>
        <br />
        <section className="flex justify-between items-center">
          <div>
            <div className="flex text-[#db4444] items-center gap-2">
              <div className="bg-[#db4444] py-2 ">gg</div>
              <p>Just For You</p>
            </div>
          </div>
          <div>
            <ButtonTrnparnt label={"See All"} />
          </div>
        </section>
        <section>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {products
              .map((item) => (
                <li key={item.id}>
                  <ForYouItemBox
                    img={item.images[0]}
                    label={item.title}
                    price={item.price}
                    click={() => dispatch(removeFromWishlist(item.id))}
                    addCart={() => dispatch(addToCart(item.id))}
                  />
                </li>
              ))
              .slice(0, 4)}
          </ul>
        </section>
      </main>
    </>
  );
}
