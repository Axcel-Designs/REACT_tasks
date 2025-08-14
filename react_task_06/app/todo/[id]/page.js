import React from "react";

export default async function Details({ params }) {
  const {id} = await  params;
  const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "GET",
  });
  const item = await res.json();
  console.log(item);
  
  return (
    <main className="container m-auto bg-amber-200 w-full h-screen">
      <section className="flex flex-wrap justify-around items-center gap-4 bg-red-200 ">
        <div className="ring ring-green-400 shadow-xl w-45 h-30 pl-2 rounded-xl bg-green-200 flex items-center ">
          <dl className="">
            <dt>
              <h4>{item.Dept}</h4>
            </dt>
            <dd>{item.courseCode}</dd>
            <dd>{item.course}</dd>
          </dl>
        </div>
      </section>
    </main>
  );
}
