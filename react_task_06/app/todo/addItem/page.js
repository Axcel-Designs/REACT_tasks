import Button from "@/components/Buton";
import Input from "@/components/Input";

export default async function AddItem() {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/todo`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(""),
  });
  
  return (
    <main className="container m-auto w-full flex flex-col justify-center items-center my-4">
      <div className="my-4">
        <h2>Add Items</h2>
      </div>
      <form>
        <section className="ring p-4 flex flex-col gap-4">
          <Input label={"Course Code"} name="courseCode" />
          <Input label={"Course"} name="course" />
          <Input label={"Dept "} name="dept" />
          <Button type={"sumbit"} label="Save" />
        </section>
      </form>
    </main>
  );
}
