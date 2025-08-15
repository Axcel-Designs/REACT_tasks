import todoData from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(todoData);
}

export async function POST(req) {
  try {
    const { courseCode, course, dept } = await req.json();
    const newTodo = {
      id: todoData.length === 0 ? 1 : todoData[todoData.length - 1].id + 1,
      courseCode: courseCode,
      course: course,
      dept: dept,
    };
    todoData.push(newTodo);
    return NextResponse.json(newTodo, {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Invalid" },
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }
}
