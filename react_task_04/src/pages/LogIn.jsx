import React from 'react'
import img from "../assets/formImg.png";
import FormLogIn from "../forms/FormLogIn";



export default function LogIn() {
  return (
    <>
      <main className="flex  max-md:floex-col py-10 items-center">
        <aside className="max-sm:hidden max-w-4/6">
          <img src={img} alt="sideimg" />
        </aside>
        <section className="min-w-fit sm:grow m-auto flex justify-around">
          <FormLogIn />
        </section>
      </main>
    </>
  );
}
