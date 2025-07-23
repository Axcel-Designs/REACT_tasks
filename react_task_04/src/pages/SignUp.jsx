import React from "react";
import FormSignUp from "../forms/FormSignUp";
import img from "../assets/formImg.png";

export default function SignUp() {
  return (
    <>
      <main className="flex  max-md:floex-col py-10 items-center">
        <aside className="max-sm:hidden max-w-4/6">
          <img src={img} alt="sideimg" />
        </aside>
        <section className="min-w-fit sm:grow m-auto flex justify-around">
          <FormSignUp />
        </section>
      </main>
    </>
  );
}
