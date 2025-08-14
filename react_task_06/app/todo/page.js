import Button from "@/components/Buton";
import Link from "next/link";

export default async function TodoIndex() {
  const res = await fetch("http://localhost:3000/api/todo", {
    method: "GET",
  });
  const todoData = await res.json();
  return (
    <main className="bg-blue-50 container mx-auto my-8">
      <div className="flex p-4 justify-end">
        <Button label={"Add Item"} />
      </div>
      <section className="flex flex-wrap justify-around items-center gap-4">
        {todoData.map((item) => (
          <div
            key={item.id}
            className="ring ring-green-400 shadow-xl w-45 h-30 pl-2 rounded-xl bg-green-200 flex items-center "
          >
            <Link href={"/"}>
              <dl className="">
                <dt>
                  <h4>{item.Dept}</h4>
                </dt>
                <dd>{item.courseCode}</dd>
                <dd>{item.course}</dd>
              </dl>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
