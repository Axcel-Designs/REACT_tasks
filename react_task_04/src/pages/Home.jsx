import React from "react";
import Services from "../components/home/Services";
import ScrollToTop from "../components/ScrollToTop";
import NewArrival from "../components/home/newArrival";
import ExploreProducts from "../components/home/ExploreProducts";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        {/* hero */}
        <section className="my-10">
          <aside></aside>
          <div></div>
        </section>
        {/* flash sales */}
        <section className="my-10"></section>
        {/* browse category */}
        <section className="my-10"></section>
        {/*best selling products */}
        <section className="my-10"></section>
        {/* banner */}
        <section className="my-10"></section>
        {/* explore products */}
        <section>
          <ExploreProducts />
        </section>
        {/* new arrival */}
        <section className="my-10">
          <NewArrival />
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
