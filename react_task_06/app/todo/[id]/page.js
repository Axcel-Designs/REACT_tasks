"use client";
import Loading from "@/app/loading";
import Button, { DelButton } from "@/components/Buton";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    if (!id) return;

    const fetchItem = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${baseUrl}/api/todo/${id}`, {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch item. Status: ${res.status}`);
        }
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Failed to fetch item:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id, baseUrl]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
        <p className="text-red-600">Error: {error}</p>
      </main>
    );
  }

  return item ? (
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
              <DelButton />
              <Link href={`/todo/${id}/editItem`}>
                <Button label="Edit" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  ) : (
    <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
      <p>Item not found.</p>
    </main>
  );
}
