import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ todoId: string }> }
) {
  const { todoId } = await params;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  ).then((response) => response.json());

  console.log("todos api accessed");

  return NextResponse.json(data, { status: 200 });
}
