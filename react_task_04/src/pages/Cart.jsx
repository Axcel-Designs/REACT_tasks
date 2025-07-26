import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import {clearCart} from '../redux/FetchedProductsSlice'

export default function Cart() {
  const { cart } = useSelector((state) => state.inventory);
  const dispatch = useDispatch()
  return (
    <>
      <main className="flex flex-col  relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        <section></section>
        <section className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-wrap gap-4 items-center">
            <Input plhldr={"coupon Code"} />
            <Button label={"Apply Coupon"} />
          </div>
          <div>
            <div className=" border-2 p-2 ">
              <h2>Cart Total</h2>
              <Button
                label={"Proceed to Checkout"}
                click={()=>dispatch(clearCart())}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
