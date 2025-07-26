import React from "react";
import Services from "../components/home/Services";
import NewArrival from "../components/home/NewArrival";
import ExploreProducts from "../components/home/ExploreProducts";
import FlashSales from "../components/home/FlashSales";
import BrowseCategory from "../components/home/BrowseCategory";
import BestSelling from "../components/home/BestSelling";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <main className="flex flex-col relative m-auto sm:w-11/12 lg:w-4/5 bg-white">
        {/* hero */}
        <section className="mb-10">
          <Hero />
        </section>
        {/* flash sales */}
        <section className="my-10">
          <FlashSales />
        </section>
        {/* browse category */}
        <section className="my-10">
          <BrowseCategory />
        </section>
        {/*best selling products */}
        <section className="my-10">
          <BestSelling />
        </section>
        {/* banner */}
        <section className="my-10">
          <Banner />
        </section>
        {/* explore products */}
        <section className="my-10">
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
      </main>
    </>
  );
}
