import Link from "next/link";
import Button from "@/components/ui/Button";

export async function getServerSideProps() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(`${baseUrl}/api/todo`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data with status: ${res.status}`);
    }

    const responseData = await res.json();

    // It's common for APIs to wrap array data in an object, e.g., { data: [...] }
    // We'll access the array, assuming it's in a 'data' property or is the response itself.
    // You can console.log(responseData) here to see its structure and adjust if needed.
    const todoData = responseData.data || responseData;

    if (!Array.isArray(todoData)) {
      throw new Error(
        "API did not return an array. Received: " + JSON.stringify(responseData)
      );
    }

    return {
      props: {
        todoData,
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching todo data in getServerSideProps:", error);
    return {
      props: {
        todoData: [],
        error: error.message,
      },
    };
  }
}

export default function Index({ todoData = [], error }) {
  if (error) {
    return (
      <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
        <p className="text-red-600">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="bg-blue-50 container mx-auto my-8 p-4">
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
        {Array.isArray(todoData) &&
          todoData.map((item) => (
            <Link key={item.id} href={`/todo/${item.id}`}>
              <div className="ring ring-blue-400 shadow-xl w-45 h-30 pl-2 rounded-xl bg-blue-200 flex items-center ">
                <dl>
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
