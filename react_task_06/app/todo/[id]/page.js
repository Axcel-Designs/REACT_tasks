import Button, { DelButton } from "@/components/Buton";
import Link from "next/link";
import React from "react";

export default async function Details({ params }) {
  const { id } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/todo/${id}`, {
    method: "GET",
    cache: "no-store", 
  });
  const item = await res.json();

  if (!res.ok) {
    return (
      <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
        <p className="text-red-600">Failed to fetch data.</p>
      </main>
    );
  }

  return (
    <main className="container m-auto w-full flex flex-col justify-center items-center">
      <Link href={"/"} className="p-4 self-end">
        <li className="fa-solid fa-chevron-left fa-xl"></li>
      </Link>
      <div className="min-h-100 flex justify-around w-full">
        <section className="flex flex-wrap justify-around items-center gap-4">
          <div className="ring ring-green-400 shadow-lg min-w-fit p-6 rounded-lg bg-green-200">
            <dl className="my-4">
              <dt>
                <h2 className="text-purple-900">Dept:</h2>
                <h3>{item.dept}</h3>
              </dt>
              <dd>
                <h3>Course Code:</h3>
                <p>{item.courseCode}</p>
              </dd>
              <dd>
                <h3>Course:</h3>
                <p>{item.course}</p>
              </dd>
            </dl>
            <div className="flex gap-4 justify-between">
            <Link href={"/"}>
              <DelButton />
            </Link>
            <Link href={`/${id}/editItem`}>
              <Button label='Edit' />
            </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
