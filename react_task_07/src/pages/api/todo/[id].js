import todoData from "@/lib/data";

export default function handler(req, res) {
  const { id } = req.query; 
  const todoId = parseInt(id);

  if (req.method === "GET") {
    const todo = todoData.find((item) => item.id === todoId);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todo);
  }

  if (req.method === "PUT") {
    const { courseCode, course, dept } = req.body;
    const index = todoData.findIndex((todo) => todo.id === todoId);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todoData[index] = {
      ...todoData[index],
      courseCode,
      course,
      dept,
    };

    return res.status(200).json(todoData[index]);
  }

  if (req.method === "DELETE") {
    const index = todoData.findIndex((item) => item.id === todoId);
    if (index === -1) {
      return res.status(404).json({ message: "Unavailable" });
    }

    const deletedItem = todoData.splice(index, 1);
    return res.status(200).json(deletedItem[0]);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
