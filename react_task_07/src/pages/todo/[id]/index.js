import Button, { DelButton } from "@/components/ui/Button";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const baseUrl = process.env.NEXT_PUBLIC_URL;

    if (context.req.method === "POST") {
      try {
       
        await fetch(`${baseUrl}/api/todo/${id}`, { method: "DELETE" });

        return {
          redirect: {
            destination: "/", // go back home after delete
            permanent: false,
          },
        };
      } catch (error) {
        return {
          props: {
            item: null,
            error: `Failed to delete item: ${error.message}`,
          },
        };
      }
    }

  try {
    const res = await fetch(`${baseUrl}/api/todo/${id}`, { method: "GET" });

    if (!res.ok) {
      return {
        props: {
          item: null,
          error: `Failed to fetch item. Status: ${res.status}`,
        },
      };
    }

    const item = await res.json();

    return {
      props: {
        item,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        item: null,
        error: error.message,
      },
    };
  }
}

export default function Details({ item, error }) {
  if (error) {
    return (
      <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
        <p className="text-red-600">Error: {error}</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="container m-auto flex flex-col min-h-120 justify-around items-center">
        <p>Item not found.</p>
      </main>
    );
  }

  return (
    <main className="container m-auto w-full flex flex-col justify-center items-center">
      <Link href={"/"} className="p-4 self-end">
        <i
          className="fa-solid fa-chevron-left fa-xl"
          aria-label="Back to list"
        ></i>
      </Link>
      <div className="min-h-100 flex justify-around w-full">
        <section className="flex flex-wrap justify-around items-center gap-4">
          <div className="ring ring-blue-400 shadow-lg min-w-fit p-6 rounded-lg bg-blue-200">
            <dl className="my-4">
              <dt className="font-bold text-purple-900">Dept:</dt>
              <dd className="mb-2">{item.dept}</dd>

              <dt className="font-bold">Course Code:</dt>
              <dd className="mb-2">{item.courseCode}</dd>

              <dt className="font-bold">Course:</dt>
              <dd>{item.course}</dd>
            </dl>
            <div className="flex gap-4 justify-between">
              <form method="POST">
              <DelButton />
              </form>
              <Link href={`/todo/${item.id}/editItem`}>
                <Button label="Edit" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
