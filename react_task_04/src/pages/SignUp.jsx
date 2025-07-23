import React from "react";
import FormSignUp from "../forms/FormSignUp";
import img from "../assets/formImg.png";

export default function SignUp() {
  return (
    <>
      <main className="flex  max-md:floex-col py-10 items-center">
        <div className="bg-amber-700">
          <aside className="max-sm:hidden max-w-7/8">
            <img src={img} alt="sideimg" />
          </aside>
        </div>
        <section className="min-w-fit sm:grow m-auto flex justify-around bg-amber-300">
          <FormSignUp />
        </section>
      </main>
    </>
  );
}
