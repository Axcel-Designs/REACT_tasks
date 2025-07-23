import React from "react";
import img from "../assets/formImg.png";
import FormLogIn from "../forms/FormLogIn";

export default function LogIn() {
  return (
    <>
      <main className="flex max-md:floex-col py-10 items-center">
        <div className="max-w-7/8">
          <aside className="max-sm:hidden max-w-7/8">
            <img src={img} alt="sideimg" />
          </aside>
        </div>
        <section className="min-w-fit grow-2 m-auto flex justify-around">
          <FormLogIn />
        </section>
      </main>
    </>
  );
}
