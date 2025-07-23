import React from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="p-20">
      <section className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-6xl">404 Not Found</h1>
        <p>Your visited page ot found you may go home page</p>
        <NavLink to='/'>
          <Button label={'Back to home page'} width='px-8' />
        </NavLink>
      </section>
    </main>
  );
}
