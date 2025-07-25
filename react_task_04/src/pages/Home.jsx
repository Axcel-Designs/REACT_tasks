import React from "react";
import Services from "../components/home/Services";
import ScrollToTop from "../components/ScrollToTop";
import NewArrival from "../components/home/newArrival";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  relative m-auto sm:w-11/12 lg:w-4/5">
        {/* hero */}
        <section>
          <aside></aside>

          <div></div>
        </section>
        {/* flash sales */}
        <section></section>
        {/* browse category */}
        <section></section>
        {/*best selling products */}
        <section></section>
        {/* banner */}
        <section></section>
        {/* explore products */}
        <section></section>
        {/* new arrival */}
        <section>
          <NewArrival/>
        </section>
        {/* services */}
        <section className="my-10">
          <Services />
        </section>
        <section>
          <br />
        </section>
        {/* to-top */}
        <div>
          <ScrollToTop />
        </div>
      </main>
    </>
  );
}
