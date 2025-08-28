import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {

  
  try {
    const { id } = context.params;
    const baseUrl = process.env.NEXT_PUBLIC_URL;

    const res = await fetch(`${baseUrl}/api/todo/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch item");
    }
    const data = await res.json();

    return {
      props: {
        item: data,
        id,
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

export default function EditItem({ item, id, error }) {
  const router = useRouter();

  const [formData, setFormData] = useState(
    item || { courseCode: "", course: "", dept: "" }
  );

  function addValue(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/todo/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push(`/todo/${id}`);
      } else {
        console.error("Failed to update item:", await res.text());
      }
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  }

  if (error) {
    return (
      <main className="container m-auto flex justify-center items-center min-h-120">
        <p className="text-red-500">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="container m-auto w-full flex flex-col justify-center items-center my-4">
      <div className="my-4">
        <h2>Edit Item</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="ring p-4 flex flex-col gap-4">
          <Input
            label={"Dept "}
            name="dept"
            value={formData.dept || ""}
            change={addValue}
          />
          <Input
            label={"Course Code"}
            name="courseCode"
            value={formData.courseCode || ""}
            change={addValue}
          />
          <Input
            label={"Course"}
            name="course"
            value={formData.course || ""}
            change={addValue}
          />
          <Button type={"submit"} label="Save" />
        </section>
      </form>
    </main>
  );
}
