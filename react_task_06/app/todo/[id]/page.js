import { DelButton } from "@/components/Buton";
import Link from "next/link";
import React from "react";

export default async function Details({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "GET",
  });
  const item = await res.json();
  console.log(item);

  // function itemDel(){
  //   const res = fetch(`http://localhost:3000/api/todo/${id}`, {
  //     method: "DELETE",
  //   });
  // }

  return (
    <main className="container m-auto w-full  flex flex-col justify-center items-center">
      <Link href={"/"} className=" p-4 self-end">
        <li className="fa-solid fa-chevron-left fa-xl"></li>
      </Link>
      <div className="min-h-100 flex justify-around w-full">
        <section className="flex flex-wrap justify-around items-center gap-4">
          <div className="ring ring-green-400 shadow-2xl/30 min-w-fit w-100 min-h-fit p-6 rounded-lg bg-green-200">
            <dl className="my-4">
              <dt>
                <h2 className="text-purple-900">Dept: </h2>
                <h3>{item.dept}</h3>
              </dt>
              <dd>
                <h3>courseCode:</h3>
                <p> {item.courseCode}</p>
              </dd>
              <dd>
                <h3>course:</h3>
                <p>{item.course}</p>
              </dd>
            </dl>
            {/* <button
              // onClick={() => itemDel()}
              className="bg-red-600 text-white py-1 px-2 hover:text-red-600 hover:bg-[#fff] ring-red-600 rounded-lg"
            >
              <h4>Delete</h4>
            </button> */}
            <Link href={"/"}>
              <DelButton />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
