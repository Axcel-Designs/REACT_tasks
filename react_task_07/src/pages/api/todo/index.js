import todoData from "@/lib/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(todoData);
  }

  if (req.method === "POST") {
    try {
      const { courseCode, course, dept } = req.body;
      const newTodo = {
        id: todoData.length === 0 ? 1 : todoData[todoData.length - 1].id + 1,
        courseCode,
        course,
        dept,
      };

      todoData.push(newTodo);

      return res.status(201).json(newTodo);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Invalid" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
