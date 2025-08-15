import todoData from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const todo = todoData.find((item) => item.id === parseInt(id));
  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  return NextResponse.json(todo);
}

export async function PUT(req, { params }) {
  const  id  = await params.id;
  const { courseCode, course, Dept } = await req.json();

  const index = todoData.findIndex((todo) => todo.id === parseInt(id));
  if (index === -1) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  todoData[index] = {
    ...todoData[index],
    courseCode,
    course,
    Dept,
  };

  return NextResponse.json(todoData[index], {
    status: 400,
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const index = todoData.findIndex((item) => item.id === parseInt(id));
  if (index === -1) {
    return NextResponse.json({ message: "unavailable" }, { status: 404 });
  }

  const deletedItem = todoData.splice(index, 1);
  return NextResponse.json(deletedItem[0], { status: 200 });
}
