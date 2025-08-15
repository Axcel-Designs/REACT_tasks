"use client";
import Button from "@/components/Buton";
import Input from "@/components/Input";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditItem() {
  const navigate = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    courseCode: "",
    course: "",
    dept: "",
  });

    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/todo/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch item");
        }
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        console.error("Failed to fetch item:", error);
      }
    };
    if (id) {
      fetchItem();
    }
  }, [id]);

  function addValue(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    try {
      const res = await fetch(`${baseUrl}/api/todo/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate.push(`/todo/${id}`);
        navigate.refresh();
      } else {
        console.error("Failed to update item:", await res.text());
      }
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  }
  return (
    <main className="container m-auto w-full flex flex-col justify-center items-center my-4">
      <div className="my-4">
        <h2>Edit Item</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="ring p-4 flex flex-col gap-4">
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
          <Input
            label={"Dept "}
            name="dept"
            value={formData.dept || ""}
            change={addValue}
          />
          <Button type={"submit"} label="Save" />
        </section>
      </form>
    </main>
  );
}
