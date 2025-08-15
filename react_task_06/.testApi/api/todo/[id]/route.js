// import todoData from "@/lib/data";
// import { NextResponse } from "next/server";

// export async function GET(req, { params }) {
//   const { id } = params;
//   const todo = todoData.find((item) => item.id === parseInt(id));
//   if (!todo) {
//     return NextResponse.json({ message: "Todo not found" }, { status: 404 });
//   }
//   return NextResponse.json(todo);
// }

// export async function PUT(req, { params }) {
//   const  id  = await params.id;
//   const { courseCode, course, dept } = await req.json();

//   const index = todoData.findIndex((todo) => todo.id === parseInt(id));
//   if (index === -1) {
//     return NextResponse.json({ message: "Todo not found" }, { status: 404 });
//   }

//   todoData[index] = {
//     ...todoData[index],
//     courseCode,
//     course,
//     dept,
//   };

//   return NextResponse.json(todoData[index], {
//     status: 200,
//     headers: { "content-type": "application/json" },
//   });
// }

// export async function DELETE(req, { params }) {
//   const { id } = params;
//   const index = todoData.findIndex((item) => item.id === parseInt(id));
//   if (index === -1) {
//     return NextResponse.json({ message: "unavailable" }, { status: 404 });
//   }

//   const deletedItem = todoData.splice(index, 1);
//   return NextResponse.json(deletedItem[0], { status: 200 });
// }





import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "lib", "todo.json");

async function readTodos() {
  const data = await fs.readFile(dataFilePath, "utf-8");
  return JSON.parse(data);
}

async function writeTodos(todos) {
  await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
}

// GET one todo by ID
export async function GET(req, { params }) {
  const todos = await readTodos();
  const todo = todos.find((item) => item.id === parseInt(params.id));
  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  return NextResponse.json(todo);
}

// PUT update todo by ID
export async function PUT(req, { params }) {
  const todos = await readTodos();
  const index = todos.findIndex((todo) => todo.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  const { courseCode, course, dept } = await req.json();
  todos[index] = { ...todos[index], courseCode, course, dept };

  await writeTodos(todos);
  return NextResponse.json(todos[index], { status: 200 });
}

// DELETE todo by ID
export async function DELETE(req, { params }) {
  const todos = await readTodos();
  const index = todos.findIndex((item) => item.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ message: "Unavailable" }, { status: 404 });
  }

  const deletedItem = todos.splice(index, 1);
  await writeTodos(todos);

  return NextResponse.json(deletedItem[0], { status: 200 });
}
