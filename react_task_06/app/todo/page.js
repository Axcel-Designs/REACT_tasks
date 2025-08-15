"use client";
import Button from "@/components/Buton";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Index() {
  const [todoData, setTodoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.NEXT_PUBLIC_URL;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/api/todo`, {
          method: "GET",
          cache: "no-store",
        });
        const data = await res.json();
        setTodoData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [baseUrl]);

  if (loading) return <Loading />;
    if (error) {
      return (
        <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
          <p className="text-red-600">Error: {error}</p>
        </main>
      );
    }

  return (
    <main className="bg-blue-50 container mx-auto my-8">
      <div className="flex justify-between items-center">
        <div>
          <h3>No of courses {todoData.length}</h3>
        </div>
        <div className="flex p-4 justify-end">
          <Link href={"/todo/addItem"}>
            <Button label={"Add Item"} />
          </Link>
        </div>
      </div>
      <section className="flex flex-wrap justify-around items-center gap-4">
        {todoData.map((item) => (
          <Link key={item.id} href={`/todo/${item.id}`}>
            <div className="ring ring-green-400 shadow-xl w-45 h-30 pl-2 rounded-xl bg-green-200 flex items-center ">
              <dl className="">
                <dt>
                  <h4>{item.dept}</h4>
                </dt>
                <dd>{item.courseCode}</dd>
                <dd>{item.course}</dd>
              </dl>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
