// import todoData from "@/lib/data";
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json(todoData);
// }

// export async function POST(req) {
//   try {
//     const { courseCode, course, dept } = await req.json();
//     const newTodo = {
//       id: todoData.length === 0 ? 1 : todoData[todoData.length - 1].id + 1,
//       courseCode: courseCode,
//       course: course,
//       dept: dept,
//     };
//     todoData.push(newTodo);
//     return NextResponse.json(newTodo, {
//       status: 201,
//       headers: { "content-type": "application/json" },
//     });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       { message: "Invalid" },
//       { status: 400, headers: { "content-type": "application/json" } }
//     );
//   }
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

// GET all todos
export async function GET() {
  try {
    const todos = await readTodos();
    return NextResponse.json(todos);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// POST new todo
export async function POST(req) {
  try {
    const { courseCode, course, dept } = await req.json();
    if (!courseCode || !course || !dept) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const todos = await readTodos();
    const newTodo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      courseCode,
      course,
      dept,
    };

    todos.push(newTodo);
    await writeTodos(todos);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Invalid" }, { status: 400 });
  }
}
