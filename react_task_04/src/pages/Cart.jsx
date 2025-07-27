import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { ButtonTrnparnt } from "../components/Button";
import Input, { InputForm } from "../components/Input";
import { clearCart, fetchProducts } from "../redux/FetchedProductsSlice";
import { Outlet } from "react-router-dom";

export default function Cart() {
  const [quantity, setQuantity] = useState({});
  const { cart } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function getQty(id) {
    return quantity[id] || 1;
  }

  function addQty(id, value) {
    setQuantity((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  }

  const sum = cart.reduce((acc, item) => {
    return acc + Number(getQty(item.id)) * Number(item.price);
  }, 0);

  return (
    <>
      <main className="flex flex-col relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        <section>
          <br className="py-10" />
          <div>
            <table className="w-full table-auto ">
              <thead>
                <tr className=" border-2 border-[#f5f5f5] my-4 grid grid-cols-4">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className=" text-center my-2 grid grid-cols-4"
                  >
                    <td className="flex justify-start items-center gap-2">
                      <div className="w-4/10 lg:w-2/10">
                        <img src={item.images[0]} alt="img" />
                      </div>
                      <div>{item.title}</div>
                    </td>
                    <td>
                      <div>${item.price}</div>
                    </td>
                    <td>
                      <div>
                        <input
                          className="border-2 w-2/5"
                          type="Number"
                          value={getQty(item.id)}
                          onChange={(e) => addQty(item.id, e.target.value)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>${Number(getQty(item.id)) * Number(item.price)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <ButtonTrnparnt label="Return To Shop" />
            </div>
            <div>
              <ButtonTrnparnt label="Update Cart" />
            </div>
          </div>
        </section>

        <section className="flex justify-around items-start my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start md:w-full">
            <div className="flex flex-wrap gap-4 items-center">
              <Input plhldr={"coupon Code"} />
              <Button label={"Apply Coupon"} />
            </div>
            <div>
              <div className=" border-2 p-4 ">
                <h2>Cart Total</h2>
                <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
                  <p>Subtotal</p>
                  <p>${sum}</p>
                </div>
                <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
                  <p>Shipping</p>
                  <p>{}free</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <p>Total</p>
                  <p>${sum}</p>
                </div>
                <div className="flex justify-around">
                  <Button
                    label={"Proceed to Checkout"}
                    click={() => dispatch(clearCart())}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Outlet/>
    </>
  );
}
