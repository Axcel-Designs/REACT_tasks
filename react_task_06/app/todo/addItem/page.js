"use client";
import Button from "@/components/Buton";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import {  useState } from "react";

export default function AddItem() {
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    courseCode: "",
    course: "",
    dept: "",
  });

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
      const res = await fetch(`${baseUrl}/api/todo`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate.push("/todo");
        navigate.refresh();
      }
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  }
  return (
    <main className="container m-auto w-full flex flex-col justify-center items-center my-4">
      <div className="my-4">
        <h2>Add Items</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="ring p-4 flex flex-col gap-4">
          <Input
            label={"Course Code"}
            name="courseCode"
            value={formData.courseCode}
            change={addValue}
          />
          <Input
            label={"Course"}
            name="course"
            value={formData.course}
            change={addValue}
          />
          <Input
            label={"Dept "}
            name="dept"
            value={formData.dept}
            change={addValue}
          />
          <Button type={"submit"} label="Save" />
        </section>
      </form>
    </main>
  );
}
